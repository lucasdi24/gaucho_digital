import { HeroSection } from "@/components/ui/HeroSection";
import { readBeneficios } from "@/lib/beneficiosData";

export const dynamic = "force-dynamic";
export const metadata = { title: "Beneficios" };

export default function BeneficiosPage() {
  const beneficios = readBeneficios().filter((b) => b.visible);

  return (
    <>
      <HeroSection
        badge="Comunidad EAAM"
        title="Beneficios"
        subtitle="Descuentos exclusivos y convenios para alumnos y egresados de la EAAM."
        imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCVdJX_aUVxonzEmGlU9j1Vur7v2YIRZbz-pJE5cIofzorvFdo_hQahgBeSi645vf831SgAMBPp4bfLySSsmqkTtslIgmraxKuz5wqJiWZ4rQ4fz1hM14QBORyoVhjxEcsy6ToANn4qfXp0VhSGJaR-AHLGTcETnzWKaFq7q5wg2YwcPT3ohW5GlhwZYrQkLNqy67dwtE_GLAAF2cZSY949gLS4j9qh0p-F4-Qnd53Drs1Yki7LX3ZoFmaQiqXrJPUkXX0TM9L_"
        imageAlt="Equipamiento de montaña"
        gradient="primary-container"
      />
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto py-10 md:py-24 -mt-10 md:-mt-20 relative z-20">
        {beneficios.length === 0 ? (
          <div className="text-center py-20 text-on-surface-variant">
            <span className="material-symbols-outlined text-5xl mb-4 block opacity-30">card_giftcard</span>
            <p className="text-lg font-medium opacity-50">No hay beneficios disponibles en este momento.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
            {beneficios.map((b) => (
              <div
                key={b.id}
                className="group bg-surface-container-lowest rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              >
                {b.imageSrc && (
                  <div className="aspect-[16/9] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={b.imageSrc}
                      alt={b.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-[family-name:var(--font-headline)] font-extrabold text-on-surface mb-2 group-hover:text-mountain-orange transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
