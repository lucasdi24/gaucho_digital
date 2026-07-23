"use client";

import { FormEvent, useState } from "react";
import { CONTACT_EMAIL } from "@/lib/contactData";

export function NewsletterForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") ?? "").trim();
    if (!email) return;

    const subject = encodeURIComponent("Suscripción a novedades EAAM");
    const body = encodeURIComponent(
      `Hola, quiero suscribirme a las novedades de la EAAM.\n\nEmail: ${email}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex items-start gap-3 rounded-lg bg-mountain-orange/10 border border-mountain-orange/20 px-4 py-3">
        <span className="material-symbols-outlined text-mountain-orange text-xl shrink-0">
          check_circle
        </span>
        <p className="text-sm text-slate-200 leading-relaxed">
          ¡Gracias! Se abrió tu correo para confirmar la suscripción. Si no se abrió, escribinos a{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-semibold text-mountain-orange hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
      <input
        name="email"
        required
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-mountain-orange focus:border-transparent outline-none transition-all placeholder:text-slate-500"
        placeholder="Tu email"
        type="email"
      />
      <button
        type="submit"
        className="w-full bg-mountain-orange hover:bg-[#d16c34] text-white font-bold py-3 rounded-lg transition-colors font-[family-name:var(--font-headline)] text-sm uppercase tracking-wider cursor-pointer"
      >
        Suscribirse
      </button>
    </form>
  );
}
