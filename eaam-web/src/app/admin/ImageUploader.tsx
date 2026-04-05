"use client";

import { useRef, useState, useTransition } from "react";
import { uploadImage, removeImage } from "./actions";

interface Props {
  imageKey: string;
  label: string;
  currentSrc: string | null;
  fallbackSrc: string;
}

export function ImageUploader({
  imageKey,
  label,
  currentSrc,
  fallbackSrc,
}: Props) {
  const [preview, setPreview] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const fileRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const displaySrc = preview ?? currentSrc ?? fallbackSrc;
  const isCustom = !!currentSrc;
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
    formData.append("file", fileRef.current.files[0]);
    formData.append("key", imageKey);

    startTransition(async () => {
      try {
        await uploadImage(formData);
        setSaved(true);
        setPreview(null);
        formRef.current?.reset();
      } catch {
        setError("Error al subir la imagen");
      }
    });
  }

  function handleRemove() {
    startTransition(async () => {
      try {
        await removeImage(imageKey);
        setSaved(false);
        setPreview(null);
      } catch {
        setError("Error al restaurar");
      }
    });
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
      {/* Preview */}
      <div className="relative h-40 bg-black/40 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={displaySrc}
          alt={label}
          className="w-full h-full object-cover"
        />
        {isCustom && !hasNewFile && (
          <span className="absolute top-2 right-2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
            Custom
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

      {/* Controls */}
      <div className="p-4">
        <p className="text-white text-sm font-semibold mb-0.5">{label}</p>
        <p className="text-slate-600 text-[11px] font-mono mb-3">{imageKey}</p>

        <form ref={formRef} className="space-y-2">
          <input
            ref={fileRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/avif"
            onChange={handleFileChange}
            className="w-full text-xs text-slate-400 file:mr-2 file:py-1.5 file:px-3 file:rounded file:border-0 file:bg-white/10 file:text-slate-300 file:text-xs file:cursor-pointer hover:file:bg-white/20 file:transition-colors"
          />

          <div className="flex gap-2">
            {hasNewFile && (
              <button
                type="button"
                onClick={handleSave}
                disabled={isPending}
                className="flex-1 bg-[#E87C3E] text-white text-xs font-bold py-2 rounded hover:bg-[#d16c34] transition-colors disabled:opacity-40"
              >
                {saved ? "✓ Guardado" : "Guardar"}
              </button>
            )}
            {isCustom && !hasNewFile && (
              <button
                type="button"
                onClick={handleRemove}
                disabled={isPending}
                className="text-xs text-slate-500 hover:text-red-400 border border-white/10 rounded px-3 py-2 transition-colors disabled:opacity-40"
              >
                Restaurar original
              </button>
            )}
          </div>

          {error && <p className="text-red-400 text-xs">{error}</p>}
          {saved && (
            <p className="text-emerald-400 text-xs">Imagen actualizada ✓</p>
          )}
        </form>
      </div>
    </div>
  );
}
