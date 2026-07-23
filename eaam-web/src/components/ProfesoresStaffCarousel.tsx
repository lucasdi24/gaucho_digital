"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProfesorData } from "@/lib/profesoresData";

type Props = {
  profesores: ProfesorData[];
  variant: "circular" | "cards";
};

export function ProfesoresStaffCarousel({ profesores, variant }: Props) {
  const [index, setIndex] = useState(0);
  const canNavigate = profesores.length > 1;
  const current = profesores[index];

  if (!current) return null;

  return (
    <div>
      <div className="relative px-10">
        {variant === "circular" ? (
          <div className="flex flex-col items-center">
            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-surface-container-high mb-5">
              <Image
                src={current.imageSrc}
                alt={current.name}
                width={144}
                height={144}
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-[family-name:var(--font-headline)] font-bold text-primary text-lg text-center">
              {current.name}
            </h4>
            <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest mt-1 text-center max-w-[260px]">
              {current.role}
            </p>
          </div>
        ) : (
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-surface-container max-w-sm mx-auto">
            <div className="aspect-square overflow-hidden relative">
              <Image src={current.imageSrc} alt={current.name} fill className="object-cover" sizes="320px" />
            </div>
            <div className="p-6 text-center">
              <h4 className="font-[family-name:var(--font-headline)] text-xl font-bold text-primary mb-1">
                {current.name}
              </h4>
              <p className="text-on-surface-variant text-sm">{current.role}</p>
            </div>
          </div>
        )}

        {canNavigate && (
          <>
            <button
              type="button"
              onClick={() => setIndex((i) => (i - 1 + profesores.length) % profesores.length)}
              aria-label="Profesor anterior"
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white border border-outline-variant/20 text-secondary shadow-md hover:bg-surface-container transition-colors"
            >
              <span className="material-symbols-outlined text-xl leading-none">chevron_left</span>
            </button>
            <button
              type="button"
              onClick={() => setIndex((i) => (i + 1) % profesores.length)}
              aria-label="Siguiente profesor"
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white border border-outline-variant/20 text-secondary shadow-md hover:bg-surface-container transition-colors"
            >
              <span className="material-symbols-outlined text-xl leading-none">chevron_right</span>
            </button>
          </>
        )}
      </div>

      {canNavigate && (
        <div className="flex items-center justify-center gap-2 mt-6">
          {profesores.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ver ${p.name}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-secondary" : "w-2 bg-outline-variant/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
