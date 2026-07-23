"use client";

import Image from "next/image";
import { useState } from "react";
import type { EgresadoData } from "@/lib/egresadosData";

const FILTERS = ["Todos", "Guía de Montaña", "Guía de Trekking y Turismo Aventura"] as const;
type Filter = (typeof FILTERS)[number];

function matchesFilter(career: string, filter: Filter) {
  if (filter === "Todos") return true;
  if (filter === "Guía de Montaña") return career.includes("Montaña");
  if (filter === "Guía de Trekking y Turismo Aventura") {
    return career.includes("Trekking") || career.includes("Turismo Aventura");
  }
  return true;
}

export function EgresadosGrid({ egresados }: { egresados: EgresadoData[] }) {
  const [active, setActive] = useState<Filter>("Todos");
  const filtered = egresados.filter((e) => matchesFilter(e.career, active));

  return (
    <>
      <div className="max-w-[1440px] mx-auto flex flex-wrap gap-2 mb-10 md:mb-14">
        {FILTERS.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(tab)}
            className={`cursor-pointer px-4 py-2 rounded-full font-[family-name:var(--font-headline)] font-semibold text-sm transition-colors whitespace-nowrap ${
              active === tab
                ? "bg-secondary text-white shadow-sm"
                : "bg-white text-secondary border border-outline-variant/30 hover:border-secondary"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
        {filtered.map((egresado) => (
          <div key={egresado.id} className="flex flex-col items-center group">
            <div className="w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-surface-container-high group-hover:border-on-primary-container transition-colors mb-4 md:mb-6 bg-surface-container-lowest">
              {egresado.imageSrc ? (
                <Image
                  src={egresado.imageSrc}
                  alt={egresado.name}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="w-full h-full flex items-center justify-center text-4xl font-black text-on-surface-variant">
                  {egresado.name.charAt(0)}
                </span>
              )}
            </div>
            <h4 className="font-[family-name:var(--font-headline)] font-bold text-primary text-base md:text-xl text-center">
              {egresado.name}
            </h4>
            <p className="text-xs md:text-sm text-on-surface-variant font-bold uppercase tracking-widest mt-1 text-center">
              {egresado.career}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
