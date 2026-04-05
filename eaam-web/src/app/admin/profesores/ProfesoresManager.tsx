"use client";

import { useState, useRef, useTransition } from "react";
import { saveProfesor, deleteProfesor } from "../actions";
import type { ProfesorData } from "@/lib/profesoresData";

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
  role: string;
  imageSrc: string;
}

const EMPTY: FormState = { id: "", name: "", role: "", imageSrc: "" };

export function ProfesoresManager({ initialData }: { initialData: ProfesorData[] }) {
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

  function openEdit(p: ProfesorData) {
    setForm({ id: p.id, name: p.name, role: p.role, imageSrc: p.imageSrc });
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
    if (!id || !form.name || !form.role) {
      setError("Nombre y cargo son requeridos");
      return;
    }
    const fd = new FormData();
    fd.append("id", id);
    fd.append("name", form.name);
    fd.append("role", form.role);
    fd.append("imageSrc", form.imageSrc);
    if (fileRef.current?.files?.[0]) fd.append("file", fileRef.current.files[0]);

    startTransition(async () => {
      try {
        await saveProfesor(fd);
        const updated: ProfesorData = { id, name: form.name, role: form.role, imageSrc: previewUrl ?? form.imageSrc };
        setList(prev => isNew ? [...prev, updated] : prev.map(p => p.id === id ? updated : p));
        closeForm();
      } catch {
        setError("Error al guardar");
      }
    });
  }

  function handleDelete(id: string) {
    if (!confirm("¿Eliminar este profesor?")) return;
    startTransition(async () => {
      try {
        await deleteProfesor(id);
        setList(prev => prev.filter(p => p.id !== id));
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
          <span>+</span> Agregar Profesor
        </button>
      )}

      {/* Form */}
      {form && (
        <div className="mb-10 bg-white/5 border border-white/10 rounded-xl p-6">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-5">
            {isNew ? "Nuevo Profesor" : "Editar Profesor"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-xs text-slate-400 block mb-1">Nombre completo *</label>
              <input
                value={form.name}
                onChange={e => setForm(f => f ? { ...f, name: e.target.value } : f)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#E87C3E]"
                placeholder="Pablo González"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 block mb-1">Cargo / Especialidad *</label>
              <input
                value={form.role}
                onChange={e => setForm(f => f ? { ...f, role: e.target.value } : f)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#E87C3E]"
                placeholder="Guía UIAGM"
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
        {list.map(prof => (
          <div key={prof.id} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <div className="h-40 bg-black/40 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={prof.imageSrc} alt={prof.name} className="w-full h-full object-cover object-top" />
            </div>
            <div className="p-4">
              <p className="text-white text-sm font-bold">{prof.name}</p>
              <p className="text-slate-500 text-xs mb-3">{prof.role}</p>
              <div className="flex gap-2">
                <button onClick={() => openEdit(prof)} className="flex-1 text-xs border border-white/10 text-slate-400 hover:text-white rounded px-2 py-1.5 transition-colors">
                  Editar
                </button>
                <button onClick={() => handleDelete(prof.id)} className="flex-1 text-xs border border-red-900/40 text-red-500/70 hover:text-red-400 rounded px-2 py-1.5 transition-colors">
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {list.length === 0 && (
        <p className="text-slate-600 text-sm text-center py-12">No hay profesores. Hacé clic en &quot;Agregar Profesor&quot; para comenzar.</p>
      )}
    </div>
  );
}
