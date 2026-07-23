import { HeroSection } from "@/components/ui/HeroSection";
import { readEgresados } from "@/lib/egresadosData";
import { readImageConfig } from "@/lib/imageConfig";
import { PAGE_HERO_DEFAULTS, pageHeroConfigKey } from "@/lib/pageHeroImages";
import { EgresadosGrid } from "./EgresadosGrid";

export const dynamic = "force-dynamic";
export const metadata = { title: "Egresados" };

export default async function EgresadosPage() {
  const egresados = readEgresados();
  const cfg = readImageConfig();
  const heroSrc = cfg[pageHeroConfigKey("egresados")] ?? PAGE_HERO_DEFAULTS.egresados;

  return (
    <>
      <HeroSection
        badge="Comunidad EAAM"
        title="Egresados"
        subtitle="Nuestra comunidad de guías profesionales activos en todo el mundo."
        imageSrc={heroSrc}
        imageAlt="Simulacro de rescate y primeros auxilios EAAM"
        gradient="secondary"
      />
      <section className="py-10 md:py-24 px-6 md:px-12">
        {egresados.length > 0 ? (
          <EgresadosGrid egresados={egresados} />
        ) : (
          <p className="max-w-4xl mx-auto text-center text-on-surface-variant/50 text-lg">
            Los perfiles de egresados estarán disponibles próximamente.
          </p>
        )}
      </section>
    </>
  );
}
