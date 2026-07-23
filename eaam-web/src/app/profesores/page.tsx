import { readProfesores } from "@/lib/profesoresData";
import { readImageConfig } from "@/lib/imageConfig";
import { PAGE_HERO_DEFAULTS, pageHeroConfigKey } from "@/lib/pageHeroImages";
import { HeroSection } from "@/components/ui/HeroSection";
import Image from "next/image";

export const dynamic = "force-dynamic";
export const metadata = { title: "Profesores" };

export default async function ProfesoresPage() {
  const profesores = readProfesores();
  const cfg = readImageConfig();
  const heroSrc = cfg[pageHeroConfigKey("profesores")] ?? PAGE_HERO_DEFAULTS.profesores;

  return (
    <>
      <HeroSection
        badge="Staff Académico"
        title="Profesores"
        subtitle="Guías UIAGM y profesionales con décadas de experiencia internacional en montañismo y rescate."
        imageSrc={heroSrc}
        imageAlt="Equipo docente EAAM en la montaña"
        gradient="primary"
      />
      <section className="py-10 md:py-24 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
          {profesores.map((prof) => (
            <div key={prof.id} className="flex flex-col items-center group">
              <div className="w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-surface-container-high group-hover:border-on-primary-container transition-colors mb-4 md:mb-6">
                <Image src={prof.imageSrc} alt={prof.name} width={160} height={160} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-[family-name:var(--font-headline)] font-bold text-primary text-base md:text-xl text-center">{prof.name}</h4>
              <p className="text-xs md:text-sm text-on-surface-variant font-bold uppercase tracking-widest mt-1 text-center">{prof.role}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
