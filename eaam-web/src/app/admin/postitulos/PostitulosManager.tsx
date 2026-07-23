"use client";

import { useState, useRef, useTransition } from "react";
import { savePostitulo, deletePostitulo, togglePostitutoVisible } from "../actions";
import type { PostituloData } from "@/lib/postitulosData";

function slugify(str: string) {
  return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

const EMPTY: PostituloData = {
  id: "", slug: "", title: "", badge: "Abierto", visible: true, icon: "forest",
  modalidad: "Presencial", location: "C.A.B.A.", duracion: "1 año",
  diasCursada: "", horarios: "19:00 a 23:00", comienzo: "", coordinador: "",
  puntajeDocente: "", imageSrc: "", quote: "", intro: "", seccionTitulo: "¿De qué se trata la especialización?",
  seccionCuerpo: "", perfilItems: "", salidaTitulo: "Plan de salidas", salidaCuerpo: "",
};

const BADGE_OPTIONS = ["Abierto", "Próximamente", "Cupos limitados"];
const MODALIDAD_OPTIONS = ["Presencial", "Mixto", "Online"];
const LOCATION_OPTIONS = ["C.A.B.A.", "Todo el país", "Online"];
const ICON_OPTIONS = [{ value: "forest", label: "forest" }, { value: "eco", label: "eco" }, { value: "hiking", label: "hiking" }, { value: "landscape", label: "landscape" }, { value: "school", label: "school" }];

const INPUT = "w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#E87C3E]";
const LABEL = "text-xs text-white/50 block mb-1";
const TEXTAREA = "w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#E87C3E] resize-y";
const SECTION = "text-xs font-bold uppercase tracking-widest text-white/30 mb-3 mt-6 border-b border-white/5 pb-2";

export function PostitulosManager({ initialData }: { initialData: PostituloData[] }) {
  const [list, setList] = useState(initialData);
  const [form, setForm] = useState<PostituloData | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  function openNew() { setForm({ ...EMPTY }); setIsNew(true); setPreviewUrl(null); setError(null); }
  function openEdit(p: PostituloData) { setForm({ ...p }); setIsNew(false); setPreviewUrl(null); setError(null); }
  function closeForm() { setForm(null); setPreviewUrl(null); setError(null); if (fileRef.current) fileRef.current.value = ""; }
  function set(field: keyof PostituloData, value: string | boolean) { setForm(f => f ? { ...f, [field]: value } : f); }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (f) setPreviewUrl(URL.createObjectURL(f));
  }

  function handleSave() {
    if (!form) return;
    const id = isNew ? slugify(form.title) : form.id;
    const slug = form.slug || slugify(form.title);
    if (!id || !form.title) { setError("El título es requerido"); return; }
    const fd = new FormData();
    const fields: (keyof PostituloData)[] = [
      "title","badge","icon","modalidad","location","duracion","diasCursada","horarios",
      "comienzo","coordinador","puntajeDocente","imageSrc","quote","intro","seccionTitulo",
      "seccionCuerpo","perfilItems","salidaTitulo","salidaCuerpo",
    ];
    fd.append("id", id);
    fd.append("slug", slug);
    fd.append("visible", String(form.visible));
    fields.forEach(k => fd.append(k, String(form[k] ?? "")));
    if (fileRef.current?.files?.[0]) fd.append("imageFile", fileRef.current.files[0]);

    startTransition(async () => {
      try {
        const res = await savePostitulo(fd);
        if (!res.ok) { setError(res.error ?? "Error al guardar"); return; }
        setList(prev => isNew ? [...prev, { ...form, id, slug }] : prev.map(p => p.id === id ? { ...form, id, slug } : p));
        closeForm();
      } catch { setError("Error al guardar"); }
    });
  }

  function handleDelete(id: string) {
    if (!confirm("¿Eliminar este postítulo?")) return;
    startTransition(async () => {
      try { await deletePostitulo(id); setList(prev => prev.filter(p => p.id !== id)); }
      catch { setError("Error al eliminar"); }
    });
  }

  function handleToggle(id: string) {
    startTransition(async () => {
      try { await togglePostitutoVisible(id); setList(prev => prev.map(p => p.id === id ? { ...p, visible: !p.visible } : p)); }
      catch { setError("Error al cambiar visibilidad"); }
    });
  }

  return (
    <div>
      {!form && (
        <button onClick={openNew} className="mb-8 bg-[#E87C3E] text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-[#d16c34] transition-colors flex items-center gap-2">
          <span>+</span> Nuevo postítulo
        </button>
      )}

      {form && (
        <div className="mb-10 bg-white/5 border border-white/10 rounded-xl p-6 max-h-[80vh] overflow-y-auto">
          <h3 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-5">
            {isNew ? "Nuevo Postítulo" : "Editar Postítulo"}
          </h3>

          <p className={SECTION}>Información básica</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
            <div className="md:col-span-2"><label className={LABEL}>Título *</label><input value={form.title} onChange={e => set("title", e.target.value)} className={INPUT} placeholder="Postítulo en Actividades y Deportes en la Naturaleza" /></div>
            <div><label className={LABEL}>Slug (URL)</label><input value={form.slug} onChange={e => set("slug", e.target.value)} className={INPUT} /></div>
            <div><label className={LABEL}>Badge</label><select value={form.badge} onChange={e => set("badge", e.target.value)} className={INPUT}>{BADGE_OPTIONS.map(b => <option key={b} value={b} className="bg-slate-800">{b}</option>)}</select></div>
            <div><label className={LABEL}>Modalidad</label><select value={form.modalidad} onChange={e => set("modalidad", e.target.value)} className={INPUT}>{MODALIDAD_OPTIONS.map(m => <option key={m} value={m} className="bg-slate-800">{m}</option>)}</select></div>
            <div><label className={LABEL}>Sede / Alcance</label><select value={form.location} onChange={e => set("location", e.target.value)} className={INPUT}>{LOCATION_OPTIONS.map(l => <option key={l} value={l} className="bg-slate-800">{l}</option>)}</select></div>
            <div><label className={LABEL}>Ícono</label><div className="flex items-center gap-2"><span className="material-symbols-outlined text-white/40 text-lg">{form.icon}</span><select value={form.icon} onChange={e => set("icon", e.target.value)} className={INPUT}>{ICON_OPTIONS.map(o => <option key={o.value} value={o.value} className="bg-slate-800">{o.label}</option>)}</select></div></div>
            <div><label className={LABEL}>Coordinador</label><input value={form.coordinador} onChange={e => set("coordinador", e.target.value)} className={INPUT} /></div>
            <div className="flex items-center gap-3">
              <label className={LABEL + " mb-0"}>Visible</label>
              <button type="button" onClick={() => set("visible", !form.visible)} className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${form.visible ? "bg-[#E87C3E]" : "bg-slate-600"}`}>
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${form.visible ? "translate-x-6" : "translate-x-1"}`} />
              </button>
              <span className="text-xs text-white/40">{form.visible ? "Sí" : "No"}</span>
            </div>
          </div>

          <p className={SECTION}>Horarios e inscripción</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
            <div><label className={LABEL}>Duración</label><input value={form.duracion} onChange={e => set("duracion", e.target.value)} className={INPUT} placeholder="1 año" /></div>
            <div><label className={LABEL}>Días de cursada</label><input value={form.diasCursada} onChange={e => set("diasCursada", e.target.value)} className={INPUT} placeholder="Martes y Jueves" /></div>
            <div><label className={LABEL}>Horarios</label><input value={form.horarios} onChange={e => set("horarios", e.target.value)} className={INPUT} /></div>
            <div><label className={LABEL}>Comienzo</label><input value={form.comienzo} onChange={e => set("comienzo", e.target.value)} className={INPUT} /></div>
            <div className="md:col-span-2"><label className={LABEL}>Puntaje docente</label><input value={form.puntajeDocente} onChange={e => set("puntajeDocente", e.target.value)} className={INPUT} placeholder="En trámite (RESOL-2025-...)" /></div>
          </div>

          <p className={SECTION}>Imagen</p>
          <div className="mb-2">
            <div className="flex items-center gap-4 mb-3">
              {(previewUrl || form.imageSrc) && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={previewUrl ?? form.imageSrc} alt="" className="w-24 h-16 rounded object-cover border border-white/10" />
              )}
              <input ref={fileRef} type="file" accept="image/jpeg,image/png,image/webp" onChange={handleFileChange}
                className="text-xs text-white/40 file:mr-2 file:py-1.5 file:px-3 file:rounded file:border-0 file:bg-white/10 file:text-white/60 file:text-xs file:cursor-pointer hover:file:bg-white/20" />
            </div>
            <p className="text-[11px] text-white/30 leading-relaxed bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
              <span className="block font-bold text-white/40 mb-1">Directrices de la foto</span>
              Dimensión recomendada: <strong className="text-white/50">1280 × 720 px</strong> (16:9) · Orientación horizontal · Peso máximo: <strong className="text-white/50">2 MB</strong> · Formatos: JPG, PNG, WebP · Usar paisaje de montaña o naturaleza que represente la especialización.
            </p>
          </div>

          <p className={SECTION}>Contenido principal</p>
          <div className="space-y-4 mb-2">
            <div><label className={LABEL}>Cita / Quote</label><input value={form.quote} onChange={e => set("quote", e.target.value)} className={INPUT} /></div>
            <div><label className={LABEL}>Introducción (párrafos separados por línea en blanco)</label><textarea value={form.intro} onChange={e => set("intro", e.target.value)} className={TEXTAREA} rows={7} /></div>
          </div>

          <p className={SECTION}>Sección secundaria</p>
          <div className="space-y-4 mb-2">
            <div><label className={LABEL}>Título de sección</label><input value={form.seccionTitulo} onChange={e => set("seccionTitulo", e.target.value)} className={INPUT} /></div>
            <div><label className={LABEL}>Cuerpo (párrafos)</label><textarea value={form.seccionCuerpo} onChange={e => set("seccionCuerpo", e.target.value)} className={TEXTAREA} rows={6} /></div>
          </div>

          <p className={SECTION}>Perfil del egresado</p>
          <div className="mb-2">
            <label className={LABEL}>Capacidades (una por línea)</label>
            <textarea value={form.perfilItems} onChange={e => set("perfilItems", e.target.value)} className={TEXTAREA} rows={8} />
          </div>

          <p className={SECTION}>Plan de salidas</p>
          <div className="space-y-4 mb-2">
            <div><label className={LABEL}>Título</label><input value={form.salidaTitulo} onChange={e => set("salidaTitulo", e.target.value)} className={INPUT} /></div>
            <div><label className={LABEL}>Cuerpo</label><textarea value={form.salidaCuerpo} onChange={e => set("salidaCuerpo", e.target.value)} className={TEXTAREA} rows={7} /></div>
          </div>

          {error && <p className="text-red-400 text-xs mb-3">{error}</p>}
          <div className="flex gap-3 mt-6">
            <button onClick={handleSave} disabled={isPending} className="bg-[#E87C3E] text-white text-sm font-bold px-5 py-2 rounded-lg hover:bg-[#d16c34] disabled:opacity-40 transition-colors">{isPending ? "Guardando..." : "Guardar"}</button>
            <button onClick={closeForm} className="text-white/40 text-sm px-4 py-2 rounded-lg border border-white/10 hover:text-white transition-colors">Cancelar</button>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {list.map(p => (
          <div key={p.id} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <span className="material-symbols-outlined text-white/30 text-xl flex-shrink-0">{p.icon}</span>
              <div className="min-w-0">
                <p className="text-white text-sm font-semibold truncate">{p.title}</p>
                <div className="flex items-center gap-3 mt-0.5 flex-wrap">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${p.badge === "Abierto" ? "bg-green-900/40 text-green-400" : "bg-slate-700 text-white/40"}`}>{p.badge}</span>
                  <span className="text-xs text-white/40">{p.modalidad} · {p.location}</span>
                  {p.comienzo && <span className="text-xs text-white/30">· {p.comienzo}</span>}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <button onClick={() => handleToggle(p.id)} disabled={isPending}
                className={`text-xs px-2 py-1 rounded border transition-colors ${p.visible ? "border-green-700/40 text-green-500 hover:text-green-400" : "border-white/10 text-white/30 hover:text-white/50"}`}>
                <span className="material-symbols-outlined text-sm leading-none">{p.visible ? "visibility" : "visibility_off"}</span>
              </button>
              <button onClick={() => openEdit(p)} className="text-xs border border-white/10 text-white/40 hover:text-white rounded px-3 py-1.5 transition-colors">Editar</button>
              <button onClick={() => handleDelete(p.id)} className="text-xs border border-red-900/40 text-red-500/70 hover:text-red-400 rounded px-3 py-1.5 transition-colors">Eliminar</button>
            </div>
          </div>
        ))}
      </div>

      {list.length === 0 && (
        <p className="text-white/20 text-sm text-center py-12">No hay postítulos. Hacé clic en &quot;Nuevo postítulo&quot; para comenzar.</p>
      )}
    </div>
  );
}
