"use client";

import { useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import type { EntityType } from "@/lib/adminImageSlots";
import { uploadEntityImage } from "./actions";

interface Props {
  entity: EntityType;
  id: string;
  label: string;
  subtitle: string;
  imageSrc: string;
}

export function EntityImageUploader({
  entity,
  id,
  label,
  subtitle,
  imageSrc,
}: Props) {
  const router = useRouter();
  const [preview, setPreview] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const fileRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const displaySrc = preview ?? (imageSrc || undefined);
  const isCustom =
    !!imageSrc &&
    (imageSrc.startsWith("/uploads/") ||
      imageSrc.startsWith("/profesores/") ||
      imageSrc.startsWith("/egresados/") ||
      imageSrc.startsWith("/cursos/") ||
      imageSrc.startsWith("/postitulos/"));
  const hasNewFile = !!preview;

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
    setSaved(false);
    setError(null);
  }

  function handleSave() {
    if (!fileRef.current?.files?.[0]) return;
    const formData = new FormData();
    formData.append("entity", entity);
    formData.append("id", id);
    formData.append("file", fileRef.current.files[0]);

    startTransition(async () => {
      try {
        await uploadEntityImage(formData);
        setSaved(true);
        setPreview(null);
        formRef.current?.reset();
        router.refresh();
      } catch {
        setError("Error al subir la imagen");
      }
    });
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
      <div className="relative h-40 bg-black/40 overflow-hidden">
        {displaySrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={displaySrc} alt={label} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-600 text-xs">
            Sin imagen
          </div>
        )}
        {isCustom && !hasNewFile && (
          <span className="absolute top-2 right-2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
            Actual
          </span>
        )}
        {hasNewFile && (
          <span className="absolute top-2 right-2 bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
            Sin guardar
          </span>
        )}
        {isPending && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white text-sm">Subiendo...</span>
          </div>
        )}
      </div>

      <div className="p-4">
        <p className="text-white text-sm font-semibold mb-0.5 line-clamp-2">{label}</p>
        <p className="text-slate-500 text-[11px] mb-3 line-clamp-2">{subtitle}</p>

        <form ref={formRef} className="space-y-2">
          <input
            ref={fileRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/avif"
            onChange={handleFileChange}
            className="w-full text-xs text-slate-400 file:mr-2 file:py-1.5 file:px-3 file:rounded file:border-0 file:bg-white/10 file:text-slate-300 file:text-xs file:cursor-pointer hover:file:bg-white/20 file:transition-colors"
          />

          {hasNewFile && (
            <button
              type="button"
              onClick={handleSave}
              disabled={isPending}
              className="w-full bg-[#E87C3E] text-white text-xs font-bold py-2 rounded hover:bg-[#d16c34] transition-colors disabled:opacity-40"
            >
              {saved ? "✓ Guardado" : "Guardar"}
            </button>
          )}

          {error && <p className="text-red-400 text-xs">{error}</p>}
          {saved && <p className="text-emerald-400 text-xs">Imagen actualizada ✓</p>}
        </form>
      </div>
    </div>
  );
}
