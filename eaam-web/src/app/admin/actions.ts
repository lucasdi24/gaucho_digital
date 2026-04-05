"use server";

import { cookies } from "next/headers";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { readImageConfig, writeImageConfig } from "@/lib/imageConfig";
import { revalidatePath } from "next/cache";
import { readProfesores, writeProfesores } from "@/lib/profesoresData";
import { readEgresados, writeEgresados } from "@/lib/egresadosData";

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
