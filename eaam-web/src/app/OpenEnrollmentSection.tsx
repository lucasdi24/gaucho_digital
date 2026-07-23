"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const TABS = ["Todos", "Carreras", "Cursos", "Postítulos"] as const;
type Tab = (typeof TABS)[number];

const ITEMS = [
  { type: "Carrera", title: "Guía de Montaña – Mixto (Todo el país)", duration: "3 Años", modality: "Mixto", href: "/carreras" },
  { type: "Postítulo", title: "Postítulo en Actividades y Deportes en la Naturaleza – Mixto (Todo el País)", duration: "1 año", modality: "Mixto", href: "/postitulos/actividades-naturaleza" },
  { type: "Postítulo", title: "Postítulo en Actividades y Deportes en la Naturaleza (C.A.B.A.)", duration: "1 año", modality: "Presencial", href: "/postitulos/actividades-naturaleza-caba" },
] as const;

type Item = (typeof ITEMS)[number];

function matchesTab(type: string, tab: Tab) {
  if (tab === "Todos") return true;
  if (tab === "Carreras") return type === "Carrera";
  if (tab === "Cursos") return type === "Curso";
  if (tab === "Postítulos") return type === "Postítulo";
  return true;
}

function EnrollmentCard({ item, compact = false }: { item: Item; compact?: boolean }) {
  return (
    <Link
      href={item.href}
      className="bg-surface-container-lowest p-5 md:p-8 rounded-xl group hover:shadow-2xl transition-all duration-500 flex flex-col justify-between cursor-pointer h-full min-h-[220px]"
    >
      <div>
        <div className="flex justify-between items-start mb-6">
          <span className="bg-surface-container-high px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest text-secondary">
            {item.type}
          </span>
          <span className="material-symbols-outlined text-outline group-hover:text-on-primary-container transition-colors">
            arrow_outward
          </span>
        </div>
        <h4
          className={`font-[family-name:var(--font-headline)] font-bold text-primary mb-4 leading-snug ${
            compact ? "text-lg" : "text-2xl leading-tight"
          }`}
        >
          {item.title}
        </h4>
      </div>
      <div className="flex items-center gap-4 text-xs font-bold text-secondary uppercase tracking-widest mt-4">
        <span className="flex items-center gap-1">
          <span className="material-symbols-outlined text-sm">schedule</span> {item.duration}
        </span>
        <span className="flex items-center gap-1">
          <span className="material-symbols-outlined text-sm">location_on</span> {item.modality}
        </span>
      </div>
    </Link>
  );
}

export default function OpenEnrollmentSection() {
  const [active, setActive] = useState<Tab>("Todos");
  const [mobileIndex, setMobileIndex] = useState(0);
  const filtered = ITEMS.filter((item) => matchesTab(item.type, active));

  useEffect(() => {
    setMobileIndex(0);
  }, [active]);

  useEffect(() => {
    if (mobileIndex >= filtered.length) {
      setMobileIndex(Math.max(0, filtered.length - 1));
    }
  }, [filtered.length, mobileIndex]);

  const canNavigate = filtered.length > 1;
  const currentItem = filtered[mobileIndex];

  return (
    <section className="py-14 md:py-32 px-6 md:px-12 bg-surface">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-8 md:mb-16 gap-5 md:gap-8">
          <div>
            <span className="font-[family-name:var(--font-headline)] font-bold text-on-primary-container tracking-widest uppercase text-sm block mb-2">
              Oferta Académica
            </span>
            <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-black text-secondary">
              Inscripciones abiertas
            </h2>
          </div>
          <div className="flex gap-1 p-1 bg-surface-container rounded-full overflow-x-auto scrollbar-none">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActive(tab)}
                className={`cursor-pointer px-4 py-2 rounded-full font-[family-name:var(--font-headline)] font-semibold text-sm transition-colors whitespace-nowrap flex-shrink-0 ${
                  active === tab
                    ? "bg-white text-secondary shadow-sm font-bold"
                    : "text-on-surface-variant hover:text-secondary"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          {currentItem ? (
            <div className="flex items-stretch gap-2">
              {canNavigate && (
                <button
                  type="button"
                  onClick={() =>
                    setMobileIndex((i) => (i - 1 + filtered.length) % filtered.length)
                  }
                  aria-label="Anterior"
                  className="shrink-0 self-center w-9 h-9 flex items-center justify-center rounded-full bg-white border border-outline-variant/20 text-secondary shadow-sm hover:bg-surface-container transition-colors"
                >
                  <span className="material-symbols-outlined text-lg leading-none">chevron_left</span>
                </button>
              )}
              <div className="flex-1 min-w-0">
                <EnrollmentCard item={currentItem} compact />
              </div>
              {canNavigate && (
                <button
                  type="button"
                  onClick={() => setMobileIndex((i) => (i + 1) % filtered.length)}
                  aria-label="Siguiente"
                  className="shrink-0 self-center w-9 h-9 flex items-center justify-center rounded-full bg-white border border-outline-variant/20 text-secondary shadow-sm hover:bg-surface-container transition-colors"
                >
                  <span className="material-symbols-outlined text-lg leading-none">chevron_right</span>
                </button>
              )}
            </div>
          ) : (
            <p className="text-center text-on-surface-variant py-8 text-sm">
              No hay ofertas en esta categoría por el momento.
            </p>
          )}
          {canNavigate && (
            <div className="flex items-center justify-center gap-2 mt-5">
              {filtered.map((item, i) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setMobileIndex(i)}
                  aria-label={`Ver ${item.type} ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === mobileIndex ? "w-6 bg-secondary" : "w-2 bg-outline-variant/40"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {filtered.map((item) => (
            <EnrollmentCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
