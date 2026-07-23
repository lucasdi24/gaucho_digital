"use client";

import { FormEvent, useState } from "react";
import { CONTACT_EMAIL } from "@/lib/contactData";

const fieldClass =
  "w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 text-sm text-on-background placeholder:text-on-surface-variant/60 focus:ring-2 focus:ring-mountain-orange focus:border-transparent outline-none transition-all";

const labelClass =
  "block text-sm font-bold text-on-background font-[family-name:var(--font-headline)] mb-1.5";

type ContactFormProps = {
  idPrefix?: string;
  className?: string;
};

export function ContactForm({ idPrefix = "contact", className = "" }: ContactFormProps) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const nombre = String(fd.get("nombre") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const capacitacion = String(fd.get("capacitacion") ?? "").trim();
    const consulta = String(fd.get("consulta") ?? "").trim();

    const subject = encodeURIComponent(`Consulta EAAM — ${capacitacion || "Web"}`);
    const body = encodeURIComponent(
      `Nombre: ${nombre}\nEmail: ${email}\nCapacitación de interés: ${capacitacion}\n\nConsulta:\n${consulta}`
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <p className={`text-on-surface-variant text-base leading-relaxed ${className}`}>
        Se abrió tu cliente de correo. Si no se abrió, escribinos a{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-secondary font-semibold hover:text-mountain-orange transition-colors"
        >
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-5 ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor={`${idPrefix}-nombre`} className={labelClass}>
            Nombre<span className="text-mountain-orange">*</span>
          </label>
          <input
            id={`${idPrefix}-nombre`}
            name="nombre"
            type="text"
            required
            placeholder="Escribí tu nombre"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-email`} className={labelClass}>
            Email<span className="text-mountain-orange">*</span>
          </label>
          <input
            id={`${idPrefix}-email`}
            name="email"
            type="email"
            required
            placeholder="Escribí tu email"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor={`${idPrefix}-capacitacion`} className={labelClass}>
          ¿Qué capacitación es de tu interés?
        </label>
        <input
          id={`${idPrefix}-capacitacion`}
          name="capacitacion"
          type="text"
          placeholder="Capacitación de tu interés"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor={`${idPrefix}-consulta`} className={labelClass}>
          Dejanos tu consulta
        </label>
        <textarea
          id={`${idPrefix}-consulta`}
          name="consulta"
          rows={5}
          placeholder="Escribí tu consulta"
          className={`${fieldClass} resize-y min-h-[120px]`}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-primary-container text-on-primary px-6 py-3.5 rounded-xl font-[family-name:var(--font-headline)] font-bold text-sm uppercase tracking-wider hover:brightness-110 transition-all active:scale-[0.99]"
      >
        Enviar
      </button>
    </form>
  );
}
