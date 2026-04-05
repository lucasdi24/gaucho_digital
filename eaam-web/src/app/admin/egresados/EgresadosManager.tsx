"use client";

import { useState, useRef, useTransition } from "react";
import { saveEgresado, deleteEgresado } from "../actions";
import type { EgresadoData } from "@/lib/egresadosData";

function slugify(str: string) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

interface FormState {
  id: string;
  name: string;
  career: string;
  year: string;
  imageSrc: string;
}

const EMPTY: FormState = { id: "", name: "", career: "", year: "", imageSrc: "" };

export function EgresadosManager({ initialData }: { initialData: EgresadoData[] }) {
  const [list, setList] = useState(initialData);
  const [form, setForm] = useState<FormState | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  function openNew() {
    setForm(EMPTY);
    setIsNew(true);
    setPreviewUrl(null);
    setError(null);
  }

  function openEdit(e: EgresadoData) {
    setForm({ id: e.id, name: e.name, career: e.career, year: e.year, imageSrc: e.imageSrc });
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

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (f) setPreviewUrl(URL.createObjectURL(f));
  }

  function handleSave() {
    if (!form) return;
    const id = isNew ? slugify(form.name) : form.id;
    if (!id || !form.name || !form.career) {
      setError("Nombre y carrera son requeridos");
      return;
    }
    const fd = new FormData();
    fd.append("id", id);
    fd.append("name", form.name);
    fd.append("career", form.career);
    fd.append("year", form.year);
    fd.append("imageSrc", form.imageSrc);
    if (fileRef.current?.files?.[0]) fd.append("file", fileRef.current.files[0]);

    startTransition(async () => {
      try {
        await saveEgresado(fd);
        const updated: EgresadoData = { id, name: form.name, career: form.career, year: form.year, imageSrc: previewUrl ?? form.imageSrc };
        setList(prev => isNew ? [...prev, updated] : prev.map(e => e.id === id ? updated : e));
        closeForm();
      } catch {
        setError("Error al guardar");
      }
    });
  }

  function handleDelete(id: string) {
    if (!confirm("¿Eliminar este egresado?")) return;
    startTransition(async () => {
      try {
        await deleteEgresado(id);
        setList(prev => prev.filter(e => e.id !== id));
      } catch {
        setError("Error al eliminar");
      }
    });
  }

  return (
    <div>
      {/* Add button */}
      {!form && (
        <button
          onClick={openNew}
          className="mb-8 bg-[#E87C3E] text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-[#d16c34] transition-colors flex items-center gap-2"
        >
          <span>+</span> Agregar Egresado
        </button>
      )}

      {/* Form */}
      {form && (
        <div className="mb-10 bg-white/5 border border-white/10 rounded-xl p-6">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-5">
            {isNew ? "Nuevo Egresado" : "Editar Egresado"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-xs text-slate-400 block mb-1">Nombre completo *</label>
              <input
                value={form.name}
                onChange={e => setForm(f => f ? { ...f, name: e.target.value } : f)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#E87C3E]"
                placeholder="Juan Pérez"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 block mb-1">Carrera *</label>
              <input
                value={form.career}
                onChange={e => setForm(f => f ? { ...f, career: e.target.value } : f)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#E87C3E]"
                placeholder="Guía de Montaña"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 block mb-1">Año de egreso</label>
              <input
                value={form.year}
                onChange={e => setForm(f => f ? { ...f, year: e.target.value } : f)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#E87C3E]"
                placeholder="2023"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="text-xs text-slate-400 block mb-1">Foto</label>
            <div className="flex items-center gap-4">
              {(previewUrl || form.imageSrc) && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={previewUrl ?? form.imageSrc} alt="" className="w-16 h-16 rounded-full object-cover border border-white/10" />
              )}
              <input
                ref={fileRef}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={handleFileChange}
                className="text-xs text-slate-400 file:mr-2 file:py-1.5 file:px-3 file:rounded file:border-0 file:bg-white/10 file:text-slate-300 file:text-xs file:cursor-pointer hover:file:bg-white/20"
              />
            </div>
          </div>
          {error && <p className="text-red-400 text-xs mb-3">{error}</p>}
          <div className="flex gap-3">
            <button onClick={handleSave} disabled={isPending} className="bg-[#E87C3E] text-white text-sm font-bold px-5 py-2 rounded-lg hover:bg-[#d16c34] disabled:opacity-40 transition-colors">
              {isPending ? "Guardando..." : "Guardar"}
            </button>
            <button onClick={closeForm} className="text-slate-400 text-sm px-4 py-2 rounded-lg border border-white/10 hover:text-white transition-colors">
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* List */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {list.map(egresado => (
          <div key={egresado.id} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <div className="h-40 bg-black/40 overflow-hidden">
              {egresado.imageSrc ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={egresado.imageSrc} alt={egresado.name} className="w-full h-full object-cover object-top" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-700 text-4xl font-black">
                  {egresado.name.charAt(0)}
                </div>
              )}
            </div>
            <div className="p-4">
              <p className="text-white text-sm font-bold">{egresado.name}</p>
              <p className="text-slate-500 text-xs">{egresado.career}</p>
              {egresado.year && <p className="text-slate-600 text-xs mb-3">{egresado.year}</p>}
              {!egresado.year && <div className="mb-3" />}
              <div className="flex gap-2">
                <button onClick={() => openEdit(egresado)} className="flex-1 text-xs border border-white/10 text-slate-400 hover:text-white rounded px-2 py-1.5 transition-colors">
                  Editar
                </button>
                <button onClick={() => handleDelete(egresado.id)} className="flex-1 text-xs border border-red-900/40 text-red-500/70 hover:text-red-400 rounded px-2 py-1.5 transition-colors">
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {list.length === 0 && (
        <p className="text-slate-600 text-sm text-center py-12">No hay egresados. Hacé clic en &quot;Agregar Egresado&quot; para comenzar.</p>
      )}
    </div>
  );
}
