"use client";

import { FormEvent, ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { buildWhatsappUrl } from "@/lib/siteLinks";

type Intent = "consulta" | "inscripcion" | "novedades";

const INTENT_CONFIG: Record<
  Intent,
  {
    title: string;
    intro: string;
    motivoLabel: string;
    motivoPlaceholder: string;
    motivoRequired: boolean;
    submitLabel: string;
    buildMessage: (nombre: string, motivo: string, subject?: string) => string;
  }
> = {
  consulta: {
    title: "Hacé tu consulta",
    intro: "Completá tus datos y te llevamos directo al WhatsApp de la EAAM con tu mensaje ya armado.",
    motivoLabel: "Motivo de tu consulta",
    motivoPlaceholder: "Contanos qué querés saber…",
    motivoRequired: true,
    submitLabel: "Enviar por WhatsApp",
    buildMessage: (nombre, motivo, subject) =>
      `¡Hola EAAM! Soy ${nombre}.` +
      (subject ? ` Quiero hacer una consulta sobre ${subject}.` : " Quiero hacer una consulta.") +
      (motivo ? `\n\n${motivo}` : ""),
  },
  inscripcion: {
    title: "Inscribite ahora",
    intro: "Dejanos tus datos y te llevamos al WhatsApp de la EAAM para coordinar tu inscripción.",
    motivoLabel: "¿Algo que quieras agregar? (opcional)",
    motivoPlaceholder: "Dejanos un comentario…",
    motivoRequired: false,
    submitLabel: "Inscribirme por WhatsApp",
    buildMessage: (nombre, motivo, subject) =>
      `¡Hola EAAM! Soy ${nombre} y quiero inscribirme` +
      (subject ? ` en ${subject}` : "") +
      "." +
      (motivo ? `\n\n${motivo}` : ""),
  },
  novedades: {
    title: "Recibí novedades",
    intro: "Dejanos tus datos y te contactamos por WhatsApp cuando se abran las inscripciones.",
    motivoLabel: "¿Algo que quieras agregar? (opcional)",
    motivoPlaceholder: "Dejanos un comentario…",
    motivoRequired: false,
    submitLabel: "Enviar por WhatsApp",
    buildMessage: (nombre, motivo, subject) =>
      `¡Hola EAAM! Soy ${nombre} y quiero recibir novedades` +
      (subject ? ` sobre ${subject}` : "") +
      "." +
      (motivo ? `\n\n${motivo}` : ""),
  },
};

const fieldClass =
  "w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 text-sm text-on-background placeholder:text-on-surface-variant/60 focus:ring-2 focus:ring-mountain-orange focus:border-transparent outline-none transition-all";

const labelClass =
  "block text-sm font-bold text-on-background font-[family-name:var(--font-headline)] mb-1.5";

function InquiryModal({
  intent,
  subject,
  onClose,
}: {
  intent: Intent;
  subject?: string;
  onClose: () => void;
}) {
  const cfg = INTENT_CONFIG[intent];

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const nombre = String(fd.get("nombre") ?? "").trim();
    const motivo = String(fd.get("motivo") ?? "").trim();
    if (!nombre) return;
    const message = cfg.buildMessage(nombre, motivo, subject);
    window.open(buildWhatsappUrl(message), "_blank", "noopener,noreferrer");
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={cfg.title}
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-md bg-surface rounded-3xl shadow-2xl border border-outline-variant/15 p-6 sm:p-7 max-h-[88vh] overflow-y-auto">
        <div className="flex items-start justify-between gap-4 mb-1.5">
          <h3 className="text-xl font-extrabold text-on-background font-[family-name:var(--font-headline)]">
            {cfg.title}
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="-mr-1.5 -mt-1 p-1.5 text-on-surface-variant hover:text-on-background rounded-lg transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {subject && (
          <p className="inline-flex items-center gap-1.5 text-xs font-bold text-mountain-orange bg-mountain-orange/10 rounded-full px-3 py-1 mb-3">
            <span className="material-symbols-outlined text-sm">label</span>
            {subject}
          </p>
        )}

        <p className="text-on-surface-variant text-sm leading-relaxed mb-5">{cfg.intro}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="inquiry-nombre" className={labelClass}>
              Nombre<span className="text-mountain-orange">*</span>
            </label>
            <input
              id="inquiry-nombre"
              name="nombre"
              type="text"
              required
              autoFocus
              placeholder="Escribí tu nombre"
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="inquiry-motivo" className={labelClass}>
              {cfg.motivoLabel}
              {cfg.motivoRequired && <span className="text-mountain-orange">*</span>}
            </label>
            <textarea
              id="inquiry-motivo"
              name="motivo"
              rows={4}
              required={cfg.motivoRequired}
              placeholder={cfg.motivoPlaceholder}
              className={`${fieldClass} resize-y min-h-[110px]`}
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white px-6 py-3.5 rounded-xl font-[family-name:var(--font-headline)] font-bold text-sm hover:brightness-105 transition-all active:scale-[0.99]"
          >
            <span className="material-symbols-outlined text-lg">chat</span>
            {cfg.submitLabel}
          </button>
          <p className="text-center text-[11px] text-on-surface-variant/70">
            Se abrirá WhatsApp con tu mensaje listo para enviar.
          </p>
        </form>
      </div>
    </div>
  );
}

type InquiryButtonProps = {
  intent?: Intent;
  subject?: string;
  className?: string;
  children?: ReactNode;
  icon?: string;
  ariaLabel?: string;
  onClick?: () => void;
};

export function InquiryButton({
  intent = "consulta",
  subject,
  className = "",
  children,
  icon,
  ariaLabel,
  onClick,
}: InquiryButtonProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
      <button
        type="button"
        aria-label={ariaLabel}
        onClick={() => {
          onClick?.();
          setOpen(true);
        }}
        className={className}
      >
        {icon && <span className="material-symbols-outlined">{icon}</span>}
        {children}
      </button>
      {open &&
        mounted &&
        createPortal(
          <InquiryModal intent={intent} subject={subject} onClose={() => setOpen(false)} />,
          document.body
        )}
    </>
  );
}
