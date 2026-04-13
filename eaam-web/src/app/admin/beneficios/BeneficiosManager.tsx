"use client";

import { useState, useRef, useTransition } from "react";
import { saveBeneficio, deleteBeneficio, toggleBeneficioVisible } from "../actions";
import type { BeneficioData } from "@/lib/beneficiosData";

function slugify(str: string) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

type FormState = BeneficioData;

const EMPTY: FormState = {
  id: "",
  title: "",
  description: "",
  imageSrc: "",
  visible: true,
};

const INPUT_CLS =
  "w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#E87C3E]";
const LABEL_CLS = "text-xs text-slate-400 block mb-1";
const TEXTAREA_CLS =
  "w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#E87C3E] resize-y";
const SECTION_TITLE_CLS =
  "text-xs font-bold uppercase tracking-widest text-slate-500 mb-3 mt-6 border-b border-white/5 pb-2";

export function BeneficiosManager({ initialData }: { initialData: BeneficioData[] }) {
  const [list, setList] = useState(initialData);
  const [form, setForm] = useState<FormState | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  function openNew() {
    setForm({ ...EMPTY, id: slugify(String(Date.now())) });
    setIsNew(true);
    setPreviewUrl(null);
    setError(null);
  }

  function openEdit(b: BeneficioData) {
    setForm({ ...b });
    setIsNew(false);
    setPreviewUrl(b.imageSrc || null);
    setError(null);
  }

  function closeForm() {
    setForm(null);
    setPreviewUrl(null);
    setError(null);
  }

  function handleField(field: keyof FormState, value: string | boolean) {
    if (!form) return;
    const updated = { ...form, [field]: value };
    if (field === "title" && isNew) {
      updated.id = slugify(value as string);
    }
    setForm(updated);
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setPreviewUrl(URL.createObjectURL(file));
  }

  function handleSave() {
    if (!form) return;
    if (!form.title.trim()) { setError("El título es obligatorio."); return; }

    startTransition(async () => {
      let imageFormData: FormData | undefined;
      if (fileRef.current?.files?.[0]) {
        imageFormData = new FormData();
        imageFormData.append("file", fileRef.current.files[0]);
      }
      const res = await saveBeneficio(form, imageFormData);
      if (!res.ok) { setError(res.error ?? "Error al guardar."); return; }

      // Optimistic update
      setList((prev) => {
        const idx = prev.findIndex((b) => b.id === form.id);
        const entry = { ...form, imageSrc: previewUrl && previewUrl.startsWith("blob:") ? form.imageSrc : (previewUrl ?? form.imageSrc) };
        if (idx >= 0) {
          const copy = [...prev];
          copy[idx] = entry;
          return copy;
        }
        return [...prev, entry];
      });
      closeForm();
    });
  }

  function handleDelete(id: string) {
    if (!confirm("¿Eliminar este beneficio?")) return;
    startTransition(async () => {
      await deleteBeneficio(id);
      setList((prev) => prev.filter((b) => b.id !== id));
    });
  }

  function handleToggleVisible(id: string) {
    startTransition(async () => {
      await toggleBeneficioVisible(id);
      setList((prev) =>
        prev.map((b) => (b.id === id ? { ...b, visible: !b.visible } : b))
      );
    });
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-white">Beneficios</h2>
          <p className="text-xs text-slate-500 mt-0.5">{list.length} beneficio{list.length !== 1 ? "s" : ""}</p>
        </div>
        <button
          onClick={openNew}
          className="flex items-center gap-2 bg-[#E87C3E] hover:bg-[#d06930] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
        >
          <span className="material-symbols-outlined text-base leading-none">add</span>
          Nuevo beneficio
        </button>
      </div>

      {/* List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {list.map((b) => (
          <div
            key={b.id}
            className={`bg-white/[0.04] border rounded-xl overflow-hidden transition-all ${
              b.visible ? "border-white/[0.08]" : "border-white/[0.04] opacity-50"
            }`}
          >
            {b.imageSrc && (
              <div className="aspect-[16/9] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={b.imageSrc} alt={b.title} className="w-full h-full object-cover" />
              </div>
            )}
            {!b.imageSrc && (
              <div className="aspect-[16/9] bg-white/5 flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl text-white/20">card_giftcard</span>
              </div>
            )}
            <div className="p-4">
              <p className="text-sm font-bold text-white mb-1 line-clamp-1">{b.title}</p>
              <p className="text-xs text-slate-400 line-clamp-2 mb-3">{b.description}</p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => openEdit(b)}
                  className="flex-1 flex items-center justify-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                >
                  <span className="material-symbols-outlined text-sm leading-none">edit</span>
                  Editar
                </button>
                <button
                  onClick={() => handleToggleVisible(b.id)}
                  title={b.visible ? "Ocultar" : "Publicar"}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/50 hover:text-white transition-all"
                >
                  <span className="material-symbols-outlined text-sm leading-none">
                    {b.visible ? "visibility" : "visibility_off"}
                  </span>
                </button>
                <button
                  onClick={() => handleDelete(b.id)}
                  title="Eliminar"
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-red-500/20 border border-white/10 hover:border-red-500/30 text-white/50 hover:text-red-400 transition-all"
                >
                  <span className="material-symbols-outlined text-sm leading-none">delete</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal / slide-in panel */}
      {form && (
        <div className="fixed inset-0 z-50 flex items-start justify-end">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeForm} />
          <div className="relative w-full max-w-md h-full bg-[#111113] border-l border-white/10 overflow-y-auto p-6 space-y-5 shadow-2xl">
            {/* Panel header */}
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-white text-base">
                {isNew ? "Nuevo beneficio" : "Editar beneficio"}
              </h3>
              <button onClick={closeForm} className="text-white/40 hover:text-white transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2 text-xs text-red-400">
                {error}
              </div>
            )}

            {/* Imagen */}
            <div>
              <p className={SECTION_TITLE_CLS}>Imagen</p>
              {previewUrl && (
                <div className="aspect-[16/9] rounded-xl overflow-hidden mb-3 bg-white/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={previewUrl} alt="preview" className="w-full h-full object-cover" />
                </div>
              )}
              <label className={LABEL_CLS}>Subir archivo</label>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                onChange={handleFile}
                className="block w-full text-xs text-slate-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-white/10 file:text-white/70 hover:file:bg-white/20 cursor-pointer"
              />
              <p className="text-[11px] text-slate-500 leading-relaxed bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5 mt-2">
                <span className="block font-bold text-slate-400 mb-1">Directrices de la foto</span>
                Dimensión recomendada: <strong className="text-slate-300">1280 × 720 px</strong> (16:9) · Orientación horizontal · Peso máximo: <strong className="text-slate-300">2 MB</strong> · Formatos: JPG, PNG, WebP · Usar imagen representativa del beneficio o marca.
              </p>
              <label className={`${LABEL_CLS} mt-3`}>O pegar URL de imagen</label>
              <input
                type="text"
                value={form.imageSrc}
                onChange={(e) => {
                  handleField("imageSrc", e.target.value);
                  setPreviewUrl(e.target.value || null);
                }}
                placeholder="https://..."
                className={INPUT_CLS}
              />
            </div>

            {/* Datos */}
            <div>
              <p className={SECTION_TITLE_CLS}>Datos</p>
              <div className="space-y-4">
                <div>
                  <label className={LABEL_CLS}>Título *</label>
                  <input
                    type="text"
                    value={form.title}
                    onChange={(e) => handleField("title", e.target.value)}
                    placeholder="Ej: 40% OFF — Ferrino"
                    className={INPUT_CLS}
                  />
                </div>
                <div>
                  <label className={LABEL_CLS}>Descripción</label>
                  <textarea
                    value={form.description}
                    onChange={(e) => handleField("description", e.target.value)}
                    rows={3}
                    placeholder="Descripción breve del beneficio..."
                    className={TEXTAREA_CLS}
                  />
                </div>
                <div className="flex items-center gap-3">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.visible}
                      onChange={(e) => handleField("visible", e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white/40 after:border-white/30 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#E87C3E]" />
                  </label>
                  <span className="text-xs text-slate-400">Visible en el sitio</span>
                </div>
              </div>
            </div>

            {/* Save */}
            <div className="pt-4 flex gap-3 border-t border-white/5">
              <button
                onClick={handleSave}
                disabled={isPending}
                className="flex-1 bg-[#E87C3E] hover:bg-[#d06930] disabled:opacity-50 text-white py-2.5 rounded-lg text-sm font-bold transition-colors"
              >
                {isPending ? "Guardando…" : "Guardar"}
              </button>
              <button
                onClick={closeForm}
                className="px-4 py-2.5 rounded-lg border border-white/10 text-white/60 hover:text-white text-sm transition-colors"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
