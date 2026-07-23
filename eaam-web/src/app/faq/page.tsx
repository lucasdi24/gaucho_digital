import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { FaqContactForm } from "@/components/faq/FaqContactForm";
import { FAQ_ITEMS } from "@/lib/faqData";

export const metadata = {
  title: "Preguntas frecuentes",
  description:
    "Respuestas a las consultas más habituales sobre la EAAM y formulario de contacto.",
};

export default function FaqPage() {
  return (
    <>
      <section className="px-6 md:px-12 pt-24 md:pt-32 pb-10 md:pb-16 max-w-[1440px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <p className="font-[family-name:var(--font-headline)] text-xs font-bold uppercase tracking-[0.2em] text-on-primary-container mb-3">
            Ayuda
          </p>
          <h1 className="font-[family-name:var(--font-headline)] text-4xl md:text-6xl font-black tracking-tighter text-on-background">
            Preguntas frecuentes
          </h1>
        </div>
        <FaqAccordion items={FAQ_ITEMS} />
      </section>
      <FaqContactForm />
    </>
  );
}
