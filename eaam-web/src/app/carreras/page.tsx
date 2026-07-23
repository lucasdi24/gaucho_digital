import { HeroSection } from "@/components/ui/HeroSection";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { readCarreras } from "@/lib/carrerasData";
import { readImageConfig } from "@/lib/imageConfig";
import { PAGE_HERO_DEFAULTS, pageHeroConfigKey } from "@/lib/pageHeroImages";
import Image from "next/image";

export const dynamic = "force-dynamic";
export const metadata = { title: "Carreras" };

export default function CarrerasPage() {
  const carreras = readCarreras().filter((c) => c.visible);
  const cfg = readImageConfig();
  const heroSrc = cfg[pageHeroConfigKey("carreras")] ?? PAGE_HERO_DEFAULTS.carreras;

  return (
    <>
      <HeroSection
        badge="Academia de Altura"
        title="Carreras"
        subtitle="Formate profesionalmente en lo que más te gusta con el respaldo de la institución líder en montaña."
        imageSrc={heroSrc}
        imageAlt="Kayaks en la costa — actividades de montaña y naturaleza EAAM"
      />

      <main className="container mx-auto px-6 md:px-12 py-10 md:py-24 -mt-10 md:-mt-20 relative z-20">
        <div className="flex flex-col md:flex-row items-end justify-between mb-8 md:mb-16 gap-5 md:gap-8">
          <SectionHeading
            title="Nuestra Oferta Académica"
            subtitle="Programas diseñados para la excelencia técnica y la seguridad en terrenos agrestes. Convertí tu pasión en una carrera con validez nacional e internacional."
          />
          <div className="hidden md:block">
            <p className="text-sm font-bold text-secondary uppercase tracking-[0.2em]">
              Desplazate para explorar
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-10 md:gap-y-20">
          {carreras.map((carrera) => (
            <ProgramCard
              key={carrera.id}
              title={carrera.title}
              imageSrc={carrera.imageSrc}
              imageAlt={`${carrera.title} — ${carrera.modalidad}`}
              duration={carrera.duracion}
              modality={`${carrera.modalidad} (${carrera.location})`}
              href={`/carreras/${carrera.slug}`}
            />
          ))}
        </div>
      </main>

      {/* Quality CTA */}
      <section className="py-12 md:py-24 bg-surface-container-low overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="bg-white p-7 md:p-20 rounded-3xl shadow-sm flex flex-col md:flex-row items-center gap-8 md:gap-16 relative">
            <div className="flex-1">
              <h2 className="text-2xl md:text-5xl font-black text-on-surface leading-tight mb-5 md:mb-8 font-[family-name:var(--font-headline)]">
                Nuestra excelencia académica
              </h2>
              <p className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-5 md:mb-8">
                La excelencia de una escuela se mide por quienes enseñan. En EAAM, nuestros docentes son profesionales titulados con amplia experiencia guiando en diversos ambientes naturales de Argentina y el mundo. Más que transmitir conocimientos técnicos, forman líderes capaces de gestionar riesgos, tomar decisiones y conducir personas con seguridad y profesionalismo en los entornos más desafiantes.
              </p>
              <div className="flex items-center gap-6 md:gap-12">
                {[
                  { value: "15+", label: "Años de trayectoria" },
                  { value: "A.P.N.", label: "Reconocidos por Administración de Parques Nacionales" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-4xl font-black text-mountain-orange">{stat.value}</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-secondary mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full h-80 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl rotate-2">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy29UAKAK8l1UWBSz8OKCLbig8C7WuTeexdTvqt7kn9dtoHJcMk46UOFG3GU-RrudRbL4WflJpDx88XGxq3Zeug1TS4KYj4Bmdq05_kjZxVfXhJgowvtgXlHzuTfvSnUZ7iOzBGW4FQrTDoslKcdDGZKiv_H9Otlt0UazAOPUbky7Kszvogchs0XWNqBgKDvGPKGQtg1rwJ2QQjTO1RCW4j0r_ndZaaJ2JoRcs2NZJehtKig95xGaJA-K-UyQgyzdr97f08NiU"
                alt="Vista panorámica de cumbres nevadas"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
