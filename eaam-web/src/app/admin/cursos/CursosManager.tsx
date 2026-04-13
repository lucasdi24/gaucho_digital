"use client";

import { useState, useRef, useTransition } from "react";
import { saveCurso, deleteCurso, toggleCursoVisible } from "../actions";
import type { CursoData } from "@/lib/cursosData";

function slugify(str: string) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

type FormState = Omit<CursoData, "visible"> & { visible: boolean };

const EMPTY: FormState = {
  id: "",
  slug: "",
  title: "",
  badge: "Inscripciones abiertas",
  visible: true,
  icon: "terrain",
  modalidad: "Presencial",
  duracion: "",
  diasCursada: "",
  horarios: "",
  comienzo: "",
  coordinador: "",
  imageSrc: "",
  descripcion: "",
  salidaTitulo: "",
  salidaIntro: "",
  salidaDuracion: "",
  salidaTipos: "",
  salidaDestinos: "",
  salidaActividades: "",
  salidaIncluye: "",
  salidaNoIncluye: "",
  salidaNotaFormativa: "",
  salidaFecha: "",
  salidaDestino: "",
};

const BADGE_OPTIONS = [
  "Inscripciones abiertas",
  "Próximamente",
  "Cupos limitados",
  "Nuevo",
];

const ICON_OPTIONS = [
  { value: "terrain", label: "terrain" },
  { value: "hiking", label: "hiking" },
  { value: "landscape", label: "landscape" },
  { value: "construction", label: "construction" },
  { value: "explore", label: "explore" },
  { value: "park", label: "park" },
];

const MODALIDAD_OPTIONS = ["Presencial", "Semi-Presencial", "Online"];

const INPUT_CLS =
  "w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#E87C3E]";
const LABEL_CLS = "text-xs text-slate-400 block mb-1";
const TEXTAREA_CLS =
  "w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#E87C3E] resize-y";
const SECTION_TITLE_CLS =
  "text-xs font-bold uppercase tracking-widest text-slate-500 mb-3 mt-6 border-b border-white/5 pb-2";

export function CursosManager({ initialData }: { initialData: CursoData[] }) {
  const [list, setList] = useState(initialData);
  const [form, setForm] = useState<FormState | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  function openNew() {
    setForm({ ...EMPTY });
    setIsNew(true);
    setPreviewUrl(null);
    setError(null);
  }

  function openEdit(c: CursoData) {
    setForm({ ...c });
    setIsNew(false);
    setPreviewUrl(null);
    setError(null);
  }

  function closeForm() {
    setForm(null);
    setPreviewUrl(null);
    setError(null);
    if (fileRef.current) fileRef.current.value = "";
  }

  function set(field: keyof FormState, value: string | boolean) {
    setForm((f) => (f ? { ...f, [field]: value } : f));
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (f) setPreviewUrl(URL.createObjectURL(f));
  }

  function handleSave() {
    if (!form) return;
    const id = isNew ? slugify(form.title) : form.id;
    const slug = form.slug || slugify(form.title);
    if (!id || !form.title) {
      setError("El título es requerido");
      return;
    }
    const fd = new FormData();
    fd.append("id", id);
    fd.append("slug", slug);
    fd.append("title", form.title);
    fd.append("badge", form.badge);
    fd.append("visible", String(form.visible));
    fd.append("icon", form.icon);
    fd.append("modalidad", form.modalidad);
    fd.append("duracion", form.duracion);
    fd.append("diasCursada", form.diasCursada);
    fd.append("horarios", form.horarios);
    fd.append("comienzo", form.comienzo);
    fd.append("coordinador", form.coordinador);
    fd.append("imageSrc", form.imageSrc);
    fd.append("descripcion", form.descripcion);
    fd.append("salidaTitulo", form.salidaTitulo);
    fd.append("salidaIntro", form.salidaIntro);
    fd.append("salidaDuracion", form.salidaDuracion);
    fd.append("salidaTipos", form.salidaTipos);
    fd.append("salidaDestinos", form.salidaDestinos);
    fd.append("salidaActividades", form.salidaActividades);
    fd.append("salidaIncluye", form.salidaIncluye);
    fd.append("salidaNoIncluye", form.salidaNoIncluye);
    fd.append("salidaNotaFormativa", form.salidaNotaFormativa);
    fd.append("salidaFecha", form.salidaFecha);
    fd.append("salidaDestino", form.salidaDestino);
    if (fileRef.current?.files?.[0]) fd.append("imageFile", fileRef.current.files[0]);

    startTransition(async () => {
      try {
        const res = await saveCurso(fd);
        if (!res.ok) {
          setError(res.error ?? "Error al guardar");
          return;
        }
        const saved: CursoData = {
          ...form,
          id,
          slug,
          imageSrc: previewUrl ? form.imageSrc : form.imageSrc,
        };
        setList((prev) =>
          isNew ? [...prev, saved] : prev.map((c) => (c.id === id ? saved : c))
        );
        closeForm();
      } catch {
        setError("Error al guardar");
      }
    });
  }

  function handleDelete(id: string) {
    if (!confirm("¿Eliminar este curso?")) return;
    startTransition(async () => {
      try {
        await deleteCurso(id);
        setList((prev) => prev.filter((c) => c.id !== id));
      } catch {
        setError("Error al eliminar");
      }
    });
  }

  function handleToggleVisible(id: string) {
    startTransition(async () => {
      try {
        await toggleCursoVisible(id);
        setList((prev) =>
          prev.map((c) => (c.id === id ? { ...c, visible: !c.visible } : c))
        );
      } catch {
        setError("Error al cambiar visibilidad");
      }
    });
  }

  return (
    <div>
      {!form && (
        <button
          onClick={openNew}
          className="mb-8 bg-[#E87C3E] text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-[#d16c34] transition-colors flex items-center gap-2"
        >
          <span>+</span> Nuevo curso
        </button>
      )}

      {/* Form */}
      {form && (
        <div className="mb-10 bg-white/5 border border-white/10 rounded-xl p-6 max-h-[80vh] overflow-y-auto">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-5">
            {isNew ? "Nuevo Curso" : "Editar Curso"}
          </h3>

          {/* Basic Info */}
          <p className={SECTION_TITLE_CLS}>Información básica</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="md:col-span-2">
              <label className={LABEL_CLS}>Título *</label>
              <input
                value={form.title}
                onChange={(e) => set("title", e.target.value)}
                className={INPUT_CLS}
                placeholder="Curso Integral de Montañismo..."
              />
            </div>
            <div>
              <label className={LABEL_CLS}>Slug (URL)</label>
              <input
                value={form.slug}
                onChange={(e) => set("slug", e.target.value)}
                className={INPUT_CLS}
                placeholder="Se genera automáticamente"
              />
            </div>
            <div>
              <label className={LABEL_CLS}>Badge</label>
              <select
                value={form.badge}
                onChange={(e) => set("badge", e.target.value)}
                className={INPUT_CLS}
              >
                {BADGE_OPTIONS.map((b) => (
                  <option key={b} value={b} className="bg-slate-800">
                    {b}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={LABEL_CLS}>Ícono</label>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-slate-400 text-lg">
                  {form.icon}
                </span>
                <select
                  value={form.icon}
                  onChange={(e) => set("icon", e.target.value)}
                  className={INPUT_CLS}
                >
                  {ICON_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value} className="bg-slate-800">
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className={LABEL_CLS}>Coordinador</label>
              <input
                value={form.coordinador}
                onChange={(e) => set("coordinador", e.target.value)}
                className={INPUT_CLS}
                placeholder="Nombre del coordinador"
              />
            </div>
            <div className="flex items-center gap-3">
              <label className={LABEL_CLS + " mb-0"}>Visible</label>
              <button
                type="button"
                onClick={() => set("visible", !form.visible)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  form.visible ? "bg-[#E87C3E]" : "bg-slate-600"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    form.visible ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span className="text-xs text-slate-400">
                {form.visible ? "Sí" : "No"}
              </span>
            </div>
          </div>

          {/* Schedule */}
          <p className={SECTION_TITLE_CLS}>Horarios y modalidad</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className={LABEL_CLS}>Modalidad</label>
              <select
                value={form.modalidad}
                onChange={(e) => set("modalidad", e.target.value)}
                className={INPUT_CLS}
              >
                {MODALIDAD_OPTIONS.map((m) => (
                  <option key={m} value={m} className="bg-slate-800">
                    {m}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={LABEL_CLS}>Duración</label>
              <input
                value={form.duracion}
                onChange={(e) => set("duracion", e.target.value)}
                className={INPUT_CLS}
                placeholder="Marzo - Octubre"
              />
            </div>
            <div>
              <label className={LABEL_CLS}>Días de cursada</label>
              <input
                value={form.diasCursada}
                onChange={(e) => set("diasCursada", e.target.value)}
                className={INPUT_CLS}
                placeholder="Lunes"
              />
            </div>
            <div>
              <label className={LABEL_CLS}>Horarios</label>
              <input
                value={form.horarios}
                onChange={(e) => set("horarios", e.target.value)}
                className={INPUT_CLS}
                placeholder="20 a 22.30 hs"
              />
            </div>
            <div>
              <label className={LABEL_CLS}>Comienzo</label>
              <input
                value={form.comienzo}
                onChange={(e) => set("comienzo", e.target.value)}
                className={INPUT_CLS}
                placeholder="2 de Marzo"
              />
            </div>
          </div>

          {/* Image */}
          <p className={SECTION_TITLE_CLS}>Imagen</p>
          <div className="mb-4">
            <div className="flex items-center gap-4 mb-3">
              {(previewUrl || form.imageSrc) && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={previewUrl ?? form.imageSrc}
                  alt=""
                  className="w-24 h-16 rounded object-cover border border-white/10"
                />
              )}
              <input
                ref={fileRef}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={handleFileChange}
                className="text-xs text-slate-400 file:mr-2 file:py-1.5 file:px-3 file:rounded file:border-0 file:bg-white/10 file:text-slate-300 file:text-xs file:cursor-pointer hover:file:bg-white/20"
              />
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
              <span className="block font-bold text-slate-400 mb-1">Directrices de la foto</span>
              Dimensión recomendada: <strong className="text-slate-300">1280 × 720 px</strong> (16:9) · Orientación horizontal · Peso máximo: <strong className="text-slate-300">2 MB</strong> · Formatos: JPG, PNG, WebP · Usar paisaje de montaña o trekking que represente la actividad.
            </p>
          </div>

          {/* Descripcion */}
          <p className={SECTION_TITLE_CLS}>Descripción</p>
          <div className="mb-4">
            <label className={LABEL_CLS}>Texto (párrafos separados por línea en blanco)</label>
            <textarea
              value={form.descripcion}
              onChange={(e) => set("descripcion", e.target.value)}
              className={TEXTAREA_CLS}
              rows={6}
            />
          </div>

          {/* Salida section */}
          <p className={SECTION_TITLE_CLS}>Sección salidas al terreno</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className={LABEL_CLS}>Título de la sección</label>
              <input
                value={form.salidaTitulo}
                onChange={(e) => set("salidaTitulo", e.target.value)}
                className={INPUT_CLS}
                placeholder="Donde la formación se vuelve experiencia real"
              />
            </div>
            <div>
              <label className={LABEL_CLS}>Fecha de salida</label>
              <input
                value={form.salidaFecha}
                onChange={(e) => set("salidaFecha", e.target.value)}
                className={INPUT_CLS}
                placeholder="Semana Santa 2026"
              />
            </div>
            <div>
              <label className={LABEL_CLS}>Destino</label>
              <input
                value={form.salidaDestino}
                onChange={(e) => set("salidaDestino", e.target.value)}
                className={INPUT_CLS}
                placeholder="Los Gigantes, Córdoba"
              />
            </div>
            <div className="md:col-span-2">
              <label className={LABEL_CLS}>Introducción</label>
              <textarea
                value={form.salidaIntro}
                onChange={(e) => set("salidaIntro", e.target.value)}
                className={TEXTAREA_CLS}
                rows={3}
              />
            </div>
            <div>
              <label className={LABEL_CLS}>Duración (uno por línea)</label>
              <textarea
                value={form.salidaDuracion}
                onChange={(e) => set("salidaDuracion", e.target.value)}
                className={TEXTAREA_CLS}
                rows={3}
              />
            </div>
            <div>
              <label className={LABEL_CLS}>Tipos de salida (uno por línea)</label>
              <textarea
                value={form.salidaTipos}
                onChange={(e) => set("salidaTipos", e.target.value)}
                className={TEXTAREA_CLS}
                rows={3}
              />
            </div>
            <div>
              <label className={LABEL_CLS}>Destinos (uno por línea)</label>
              <textarea
                value={form.salidaDestinos}
                onChange={(e) => set("salidaDestinos", e.target.value)}
                className={TEXTAREA_CLS}
                rows={3}
              />
            </div>
            <div>
              <label className={LABEL_CLS}>Actividades (una por línea)</label>
              <textarea
                value={form.salidaActividades}
                onChange={(e) => set("salidaActividades", e.target.value)}
                className={TEXTAREA_CLS}
                rows={5}
              />
            </div>
            <div>
              <label className={LABEL_CLS}>Incluye (uno por línea)</label>
              <textarea
                value={form.salidaIncluye}
                onChange={(e) => set("salidaIncluye", e.target.value)}
                className={TEXTAREA_CLS}
                rows={5}
              />
            </div>
            <div>
              <label className={LABEL_CLS}>No incluye</label>
              <textarea
                value={form.salidaNoIncluye}
                onChange={(e) => set("salidaNoIncluye", e.target.value)}
                className={TEXTAREA_CLS}
                rows={3}
              />
            </div>
            <div className="md:col-span-2">
              <label className={LABEL_CLS}>Nota formativa</label>
              <textarea
                value={form.salidaNotaFormativa}
                onChange={(e) => set("salidaNotaFormativa", e.target.value)}
                className={TEXTAREA_CLS}
                rows={2}
              />
            </div>
          </div>

          {error && <p className="text-red-400 text-xs mb-3">{error}</p>}
          <div className="flex gap-3 mt-4">
            <button
              onClick={handleSave}
              disabled={isPending}
              className="bg-[#E87C3E] text-white text-sm font-bold px-5 py-2 rounded-lg hover:bg-[#d16c34] disabled:opacity-40 transition-colors"
            >
              {isPending ? "Guardando..." : "Guardar"}
            </button>
            <button
              onClick={closeForm}
              className="text-slate-400 text-sm px-4 py-2 rounded-lg border border-white/10 hover:text-white transition-colors"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* List */}
      <div className="space-y-3">
        {list.map((curso) => (
          <div
            key={curso.id}
            className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-4"
          >
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <span className="material-symbols-outlined text-slate-400 text-xl flex-shrink-0">
                {curso.icon}
              </span>
              <div className="min-w-0">
                <p className="text-white text-sm font-semibold truncate">{curso.title}</p>
                <div className="flex items-center gap-3 mt-0.5">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                      curso.badge === "Inscripciones abiertas"
                        ? "bg-green-900/40 text-green-400"
                        : "bg-slate-700 text-slate-400"
                    }`}
                  >
                    {curso.badge}
                  </span>
                  <span className="text-xs text-slate-500">{curso.modalidad}</span>
                  {curso.comienzo && (
                    <span className="text-xs text-slate-500">· {curso.comienzo}</span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              {/* Visible toggle */}
              <button
                onClick={() => handleToggleVisible(curso.id)}
                disabled={isPending}
                className={`text-xs px-2 py-1 rounded border transition-colors ${
                  curso.visible
                    ? "border-green-700/40 text-green-500 hover:text-green-400"
                    : "border-slate-700 text-slate-600 hover:text-slate-400"
                }`}
                title={curso.visible ? "Visible" : "Oculto"}
              >
                <span className="material-symbols-outlined text-sm leading-none">
                  {curso.visible ? "visibility" : "visibility_off"}
                </span>
              </button>
              <button
                onClick={() => openEdit(curso)}
                className="text-xs border border-white/10 text-slate-400 hover:text-white rounded px-3 py-1.5 transition-colors"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(curso.id)}
                className="text-xs border border-red-900/40 text-red-500/70 hover:text-red-400 rounded px-3 py-1.5 transition-colors"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      {list.length === 0 && (
        <p className="text-slate-600 text-sm text-center py-12">
          No hay cursos. Hacé clic en &quot;Nuevo curso&quot; para comenzar.
        </p>
      )}
    </div>
  );
}
