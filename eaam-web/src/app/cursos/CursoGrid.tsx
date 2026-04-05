"use client";

import { useState } from "react";
import Link from "next/link";
import { cursos, type Curso } from "@/data/cursos";

const FILTERS = ["Ver Todos", "Presenciales", "Semi-Presenciales", "Intensivos"] as const;

function matchesFilter(c: Curso, filter: (typeof FILTERS)[number]) {
  if (filter === "Ver Todos") return true;
  if (filter === "Presenciales") return c.modality === "Presencial";
  if (filter === "Semi-Presenciales") return c.modality === "Semi-Presencial";
  if (filter === "Intensivos") return c.modality === "Intensivo";
  return true;
}

export function CursoGrid() {
  const [active, setActive] = useState<(typeof FILTERS)[number]>("Ver Todos");
  const filtered = cursos.filter((c) => matchesFilter(c, active));

  return (
    <>
      {/* Filter bar */}
      <div className="flex items-center gap-3 border-b border-outline-variant/15 pb-6 mb-12 overflow-x-auto scrollbar-hide">
        <span className="font-[family-name:var(--font-headline)] text-xs font-extrabold uppercase tracking-widest text-secondary">
          Categorías:
        </span>
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-bold font-[family-name:var(--font-headline)] uppercase tracking-wider transition-colors ${
              active === f
                ? "bg-secondary-container text-on-secondary-fixed"
                : "text-on-surface-variant hover:text-secondary"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {filtered.map((curso) => {
          const isIntensivo = curso.modality === "Intensivo";
          return (
            <article
              key={curso.slug}
              className={`group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                isIntensivo ? "ring-2 ring-orange-500/10" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={curso.imageSrc}
                  alt={curso.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`backdrop-blur-md text-white text-[10px] font-extrabold px-3 py-1.5 rounded uppercase tracking-widest font-[family-name:var(--font-headline)] ${
                      isIntensivo ? "bg-primary/90" : "bg-secondary/90"
                    }`}
                  >
                    {curso.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div
                className={`p-8 flex flex-col flex-grow border-x border-b border-outline-variant/10 rounded-b-xl ${
                  isIntensivo ? "bg-orange-50/10" : ""
                }`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-on-primary-container text-sm">
                    {curso.icon}
                  </span>
                  <span className="text-[10px] font-bold text-on-surface-variant font-[family-name:var(--font-headline)] uppercase tracking-wider">
                    {curso.locationLabel}
                  </span>
                </div>
                <h3 className="text-xl font-[family-name:var(--font-headline)] font-extrabold text-on-background leading-tight mb-6">
                  {curso.title}
                </h3>
                {curso.subtitle && (
                  <p className="text-xs text-on-surface-variant -mt-4 mb-6 italic">
                    {curso.subtitle}
                  </p>
                )}
                <div className="mt-auto flex items-center gap-3">
                  <Link
                    href={`/cursos/${curso.slug}`}
                    className="flex-1 bg-on-primary-container text-white py-3 rounded-lg font-[family-name:var(--font-headline)] font-bold text-xs uppercase tracking-widest transition-all hover:brightness-110 text-center"
                  >
                    Más información
                  </Link>
                  <button
                    aria-label="Consultar por WhatsApp"
                    className="px-4 py-3 rounded-lg border border-secondary/20 text-secondary hover:bg-secondary/5 transition-colors"
                  >
                    <span className="material-symbols-outlined">chat_bubble</span>
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
