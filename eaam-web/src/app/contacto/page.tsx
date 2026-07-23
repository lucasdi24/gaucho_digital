import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";

export const metadata = {
  title: "Contacto",
  description:
    "Ubicación, teléfono, email y WhatsApp de la EAAM. Envianos tu consulta sobre carreras, cursos y postítulos.",
};

export default function ContactoPage() {
  return (
    <section className="px-6 md:px-12 pt-24 md:pt-32 pb-16 md:pb-24 max-w-[1440px] mx-auto">
      <div className="mb-10 md:mb-14">
        <p className="font-[family-name:var(--font-headline)] text-xs font-bold uppercase tracking-[0.2em] text-on-primary-container mb-3">
          EAAM
        </p>
        <h1 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-black tracking-tighter text-on-background">
          Contacto
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <ContactInfo />

        <div className="bg-surface-container-low/80 border border-outline-variant/25 rounded-2xl p-6 md:p-8 lg:p-10 shadow-sm">
          <ContactForm idPrefix="contacto-page" />
        </div>
      </div>
    </section>
  );
}
