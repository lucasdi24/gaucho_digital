"use client";

import Image from "next/image";
import { ContactForm } from "@/components/contact/ContactForm";

export function FaqContactForm() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-surface border-t border-outline-variant/10">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-6">
          <h2 className="font-[family-name:var(--font-headline)] text-3xl md:text-4xl font-black tracking-tighter text-on-background mb-8 md:mb-10">
            ¿Alguna duda?
          </h2>
          <ContactForm idPrefix="faq" />
        </div>

        <div className="lg:col-span-6">
          <div className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-auto lg:min-h-[520px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/faq/consulta.jpg"
              alt="Alumnos EAAM preparándose para escalar en montaña"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
