"use server";

import { cookies } from "next/headers";
import { writeFile, mkdir } from "fs/promises";
import fs from "fs";
import path from "path";
import { readImageConfig, writeImageConfig } from "@/lib/imageConfig";
import { revalidatePath } from "next/cache";
import { readProfesores, writeProfesores } from "@/lib/profesoresData";
import { readEgresados, writeEgresados } from "@/lib/egresadosData";
import { readCursos, writeCursos, type CursoData } from "@/lib/cursosData";
import { readCarreras, writeCarreras, type CarreraData } from "@/lib/carrerasData";

async function isAuthed(): Promise<boolean> {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin-session")?.value;
  return !!process.env.ADMIN_TOKEN && session === process.env.ADMIN_TOKEN;
}

export async function login(
  _: unknown,
  formData: FormData
): Promise<{ ok: boolean; error?: string }> {
  const password = formData.get("password") as string;

  if (!process.env.ADMIN_TOKEN) {
    return { ok: false, error: "ADMIN_TOKEN no configurado en .env.local" };
  }

  if (password !== process.env.ADMIN_TOKEN) {
    return { ok: false, error: "Contraseña incorrecta" };
  }

  const cookieStore = await cookies();
  cookieStore.set("admin-session", process.env.ADMIN_TOKEN, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  return { ok: true };
}

export async function uploadImage(
  formData: FormData
): Promise<{ url: string }> {
  if (!(await isAuthed())) throw new Error("Unauthorized");

  const file = formData.get("file") as File;
  const key = formData.get("key") as string;

  if (!file || file.size === 0 || !key) throw new Error("Datos incompletos");

  const ext = file.name.split(".").pop()?.toLowerCase() ?? "jpg";
  const filename = `${key}.${ext}`;
  const uploadsDir = path.join(process.cwd(), "public", "uploads");

  await mkdir(uploadsDir, { recursive: true });
  const bytes = await file.arrayBuffer();
  await writeFile(path.join(uploadsDir, filename), Buffer.from(bytes));

  const config = readImageConfig();
  config[key] = `/uploads/${filename}`;
  writeImageConfig(config);

  revalidatePath("/", "layout");

  return { url: `/uploads/${filename}` };
}

export async function removeImage(key: string): Promise<void> {
  if (!(await isAuthed())) throw new Error("Unauthorized");

  const config = readImageConfig();
  delete config[key];
  writeImageConfig(config);

  revalidatePath("/", "layout");
}

// --- Profesores CRUD ---

export async function saveProfesor(formData: FormData): Promise<void> {
  if (!(await isAuthed())) throw new Error("Unauthorized");

  const id = (formData.get("id") as string).trim();
  const name = (formData.get("name") as string).trim();
  const role = (formData.get("role") as string).trim();
  let imageSrc = (formData.get("imageSrc") as string).trim();
  const file = formData.get("file") as File | null;

  if (!id || !name || !role) throw new Error("Datos incompletos");

  // Upload photo if provided
  if (file && file.size > 0) {
    const ext = file.name.split(".").pop()?.toLowerCase() ?? "jpg";
    const filename = `prof-${id}.${ext}`;
    const uploadsDir = path.join(process.cwd(), "public", "uploads");
    await mkdir(uploadsDir, { recursive: true });
    const bytes = await file.arrayBuffer();
    await writeFile(path.join(uploadsDir, filename), Buffer.from(bytes));
    imageSrc = `/uploads/${filename}`;
  }

  const list = readProfesores();
  const idx = list.findIndex((p) => p.id === id);
  if (idx >= 0) {
    list[idx] = { id, name, role, imageSrc: imageSrc || list[idx].imageSrc };
  } else {
    list.push({ id, name, role, imageSrc });
  }
  writeProfesores(list);
  revalidatePath("/profesores");
  revalidatePath("/admin/profesores");
}

export async function deleteProfesor(id: string): Promise<void> {
  if (!(await isAuthed())) throw new Error("Unauthorized");
  const list = readProfesores().filter((p) => p.id !== id);
  writeProfesores(list);
  revalidatePath("/profesores");
  revalidatePath("/admin/profesores");
}

// --- Egresados CRUD ---

export async function saveEgresado(formData: FormData): Promise<void> {
  if (!(await isAuthed())) throw new Error("Unauthorized");

  const id = (formData.get("id") as string).trim();
  const name = (formData.get("name") as string).trim();
  const career = (formData.get("career") as string).trim();
  const year = (formData.get("year") as string).trim();
  let imageSrc = (formData.get("imageSrc") as string).trim();
  const file = formData.get("file") as File | null;

  if (!id || !name || !career) throw new Error("Datos incompletos");

  if (file && file.size > 0) {
    const ext = file.name.split(".").pop()?.toLowerCase() ?? "jpg";
    const filename = `egresado-${id}.${ext}`;
    const uploadsDir = path.join(process.cwd(), "public", "uploads");
    await mkdir(uploadsDir, { recursive: true });
    const bytes = await file.arrayBuffer();
    await writeFile(path.join(uploadsDir, filename), Buffer.from(bytes));
    imageSrc = `/uploads/${filename}`;
  }

  const list = readEgresados();
  const idx = list.findIndex((e) => e.id === id);
  if (idx >= 0) {
    list[idx] = { id, name, career, year, imageSrc: imageSrc || list[idx].imageSrc };
  } else {
    list.push({ id, name, career, year, imageSrc });
  }
  writeEgresados(list);
  revalidatePath("/egresados");
  revalidatePath("/admin/egresados");
}

export async function deleteEgresado(id: string): Promise<void> {
  if (!(await isAuthed())) throw new Error("Unauthorized");
  const list = readEgresados().filter((e) => e.id !== id);
  writeEgresados(list);
  revalidatePath("/egresados");
  revalidatePath("/admin/egresados");
}

// --- Cursos CRUD ---

function slugify(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export async function saveCurso(
  formData: FormData
): Promise<{ ok: boolean; error?: string }> {
  if (!(await isAuthed())) return { ok: false, error: "No autorizado" };

  const cursos = readCursos();
  const rawId = (formData.get("id") as string) || "";
  const rawTitle = (formData.get("title") as string) || "";
  const id = rawId.trim() || slugify(rawTitle);
  const rawSlug = (formData.get("slug") as string) || "";
  const slug = rawSlug.trim() || slugify(rawTitle);

  // Handle image upload
  let imageSrc = (formData.get("imageSrc") as string) || "";
  const file = formData.get("imageFile") as File | null;
  if (file && file.size > 0) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const ext = file.name.split(".").pop();
    const filename = `${id}.${ext}`;
    const uploadDir = path.join(process.cwd(), "public", "uploads", "cursos");
    fs.mkdirSync(uploadDir, { recursive: true });
    fs.writeFileSync(path.join(uploadDir, filename), buffer);
    imageSrc = `/uploads/cursos/${filename}`;
  }

  const updated: CursoData = {
    id,
    slug,
    title: (formData.get("title") as string) || "",
    badge: (formData.get("badge") as string) || "",
    visible: formData.get("visible") === "true",
    icon: (formData.get("icon") as string) || "terrain",
    modalidad: (formData.get("modalidad") as string) || "",
    duracion: (formData.get("duracion") as string) || "",
    diasCursada: (formData.get("diasCursada") as string) || "",
    horarios: (formData.get("horarios") as string) || "",
    comienzo: (formData.get("comienzo") as string) || "",
    coordinador: (formData.get("coordinador") as string) || "",
    imageSrc,
    descripcion: (formData.get("descripcion") as string) || "",
    salidaTitulo: (formData.get("salidaTitulo") as string) || "",
    salidaIntro: (formData.get("salidaIntro") as string) || "",
    salidaDuracion: (formData.get("salidaDuracion") as string) || "",
    salidaTipos: (formData.get("salidaTipos") as string) || "",
    salidaDestinos: (formData.get("salidaDestinos") as string) || "",
    salidaActividades: (formData.get("salidaActividades") as string) || "",
    salidaIncluye: (formData.get("salidaIncluye") as string) || "",
    salidaNoIncluye: (formData.get("salidaNoIncluye") as string) || "",
    salidaNotaFormativa: (formData.get("salidaNotaFormativa") as string) || "",
    salidaFecha: (formData.get("salidaFecha") as string) || "",
    salidaDestino: (formData.get("salidaDestino") as string) || "",
  };

  const idx = cursos.findIndex((c) => c.id === id);
  if (idx >= 0) cursos[idx] = updated;
  else cursos.push(updated);
  writeCursos(cursos);
  revalidatePath("/cursos");
  revalidatePath(`/cursos/${slug}`);
  revalidatePath("/admin/cursos");
  return { ok: true };
}

export async function deleteCurso(
  id: string
): Promise<{ ok: boolean; error?: string }> {
  if (!(await isAuthed())) return { ok: false, error: "No autorizado" };
  const cursos = readCursos().filter((c) => c.id !== id);
  writeCursos(cursos);
  revalidatePath("/cursos");
  revalidatePath("/admin/cursos");
  return { ok: true };
}

export async function toggleCursoVisible(
  id: string
): Promise<{ ok: boolean; error?: string }> {
  if (!(await isAuthed())) return { ok: false, error: "No autorizado" };
  const cursos = readCursos();
  const idx = cursos.findIndex((c) => c.id === id);
  if (idx >= 0) cursos[idx].visible = !cursos[idx].visible;
  writeCursos(cursos);
  revalidatePath("/cursos");
  revalidatePath("/admin/cursos");
  return { ok: true };
}

// --- Carreras CRUD ---

export async function saveCarrera(
  formData: FormData
): Promise<{ ok: boolean; error?: string }> {
  if (!(await isAuthed())) return { ok: false, error: "No autorizado" };

  const carreras = readCarreras();
  const rawId = (formData.get("id") as string) || "";
  const rawTitle = (formData.get("title") as string) || "";
  const id = rawId.trim() || slugify(rawTitle);
  const rawSlug = (formData.get("slug") as string) || "";
  const slug = rawSlug.trim() || slugify(rawTitle);

  let imageSrc = (formData.get("imageSrc") as string) || "";
  const file = formData.get("imageFile") as File | null;
  if (file && file.size > 0) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const ext = file.name.split(".").pop();
    const filename = `${id}.${ext}`;
    const uploadDir = path.join(process.cwd(), "public", "uploads", "carreras");
    fs.mkdirSync(uploadDir, { recursive: true });
    fs.writeFileSync(path.join(uploadDir, filename), buffer);
    imageSrc = `/uploads/carreras/${filename}`;
  }

  const getString = (key: string) => (formData.get(key) as string) || "";

  const updated: CarreraData = {
    id, slug,
    title: getString("title"),
    badge: getString("badge"),
    visible: formData.get("visible") === "true",
    icon: getString("icon") || "landscape",
    modalidad: getString("modalidad"),
    location: getString("location"),
    duracion: getString("duracion"),
    diasCursada: getString("diasCursada"),
    horarios: getString("horarios"),
    comienzo: getString("comienzo"),
    coordinador: getString("coordinador"),
    imageSrc,
    subtitulo: getString("subtitulo"),
    descripcion: getString("descripcion"),
    seccionTitulo: getString("seccionTitulo"),
    seccionCuerpo: getString("seccionCuerpo"),
    alcanceCuerpo: getString("alcanceCuerpo"),
    dirigidaItems: getString("dirigidaItems"),
    requisito: getString("requisito"),
    salidaTitulo: getString("salidaTitulo"),
    salidaCuerpo: getString("salidaCuerpo"),
  };

  const idx = carreras.findIndex((c) => c.id === id);
  if (idx >= 0) carreras[idx] = updated;
  else carreras.push(updated);
  writeCarreras(carreras);
  revalidatePath("/carreras");
  revalidatePath(`/carreras/${slug}`);
  revalidatePath("/admin/carreras");
  return { ok: true };
}

export async function deleteCarrera(
  id: string
): Promise<{ ok: boolean; error?: string }> {
  if (!(await isAuthed())) return { ok: false, error: "No autorizado" };
  writeCarreras(readCarreras().filter((c) => c.id !== id));
  revalidatePath("/carreras");
  revalidatePath("/admin/carreras");
  return { ok: true };
}

export async function toggleCarreraVisible(
  id: string
): Promise<{ ok: boolean; error?: string }> {
  if (!(await isAuthed())) return { ok: false, error: "No autorizado" };
  const carreras = readCarreras();
  const idx = carreras.findIndex((c) => c.id === id);
  if (idx >= 0) carreras[idx].visible = !carreras[idx].visible;
  writeCarreras(carreras);
  revalidatePath("/carreras");
  revalidatePath("/admin/carreras");
  return { ok: true };
}
