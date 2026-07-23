import { ProfesoresStaffPreview } from "@/components/ProfesoresStaffPreview";
import { HeroSection } from "@/components/ui/HeroSection";
import { readImageConfig } from "@/lib/imageConfig";
import { YOUTUBE_CHANNEL_URL, YOUTUBE_FEATURED_EMBED_URL } from "@/lib/siteLinks";
import { InquiryButton } from "@/components/contact/InquiryButton";
import Image from "next/image";

export const dynamic = "force-dynamic";

const DEFAULT_HERO_NOSOTROS = "/nosotros/hero.jpg";

const IMG_QUIENES = "/nosotros/quienes-somos.jpg";

const IMG_MISION = "/nosotros/nuestra-mision.jpg";

const IMG_VISION = "/nosotros/vision-escuela.jpg";

const IMG_STATS = "/nosotros/trayectoria.jpg";

export const metadata = {
  title: {
    absolute: "Nosotros — EAAM | La Academia de los Andes",
  },
  description:
    "Conocé la EAAM: quiénes somos, misión, visión, trayectoria y nuestro equipo docente.",
};

export default async function NosotrosPage() {
  const cfg = readImageConfig();
  const heroSrc = cfg["hero-nosotros"] ?? DEFAULT_HERO_NOSOTROS;

  return (
    <>
      <HeroSection
        title="Escuela Argentina de Actividades de Montaña"
        subtitle="Incorporada a la enseñanza oficial A-1530"
        imageSrc={heroSrc}
        imageAlt="Capacitación en terreno nevado — EAAM"
        gradient="secondarySoft"
        height="min-h-[80vh] h-[80vh]"
      >
        <InquiryButton
          intent="consulta"
          className="inline-block mt-8 bg-primary-container text-on-primary px-10 py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-primary transition-all cursor-pointer"
        >
          Consultar
        </InquiryButton>
      </HeroSection>

      <section className="py-24 md:py-32 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="md:col-span-7">
            <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-black tracking-tighter text-on-background mb-8">
              Quienes Somos
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-on-surface-variant max-w-2xl">
              <p>
                Somos la <strong>Escuela Argentina de Actividades de Montaña (EAAM)</strong>, una
                institución dedicada a la{" "}
                <strong>
                  formación profesional y capacitaciones en actividades de montaña, educación en la
                  naturaleza y turismo aventura.
                </strong>{" "}
                Nuestro equipo está integrado por docentes y profesionales con amplia experiencia en
                el ámbito educativo y en el ejercicio real de la actividad, lo que nos permite ofrecer
                una formación sólida, actualizada y vinculada al terreno.
              </p>
              <p>
                Creemos en el valor del trabajo en equipo, la mejora continua y la coherencia entre lo
                que enseñamos y lo que hacemos. Esa identidad se construye con el tiempo y se refleja
                en el desempeño de nuestros egresados, en la seriedad de nuestras propuestas y en el
                compromiso con una formación que deja huella.
              </p>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl relative">
              <Image
                src={IMG_QUIENES}
                alt="Grupo EAAM en la cumbre con bandera institucional"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 md:px-12 max-w-screen-2xl mx-auto border-t border-surface-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 md:order-1">
            <div className="aspect-video rounded-xl overflow-hidden shadow-xl relative">
              <Image
                src={IMG_MISION}
                alt="Montañista ascendiendo en terreno nevado"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 45vw, 100vw"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h3 className="font-[family-name:var(--font-headline)] text-3xl md:text-4xl font-black tracking-tighter text-secondary mb-6">
              Nuestra Misión
            </h3>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Brindar a la comunidad argentina <strong>formación profesional de calidad</strong>,
              formando personas capaces de desempeñarse con competencia, criterio y responsabilidad en
              las áreas de incumbencia de la EAAM. Acompañamos a cada integrante de nuestra comunidad
              educativa para que desarrolle al máximo su potencial, integrando saberes técnicos,
              humanos y sociales, y preparándose para afrontar con solvencia los desafíos propios del
              montañismo, la educación en la naturaleza y la promoción de una vida saludable.
            </p>
          </div>
        </div>
      </section>

      <section
        id="vision-de-la-escuela"
        className="py-24 md:py-32 px-6 md:px-12 max-w-screen-2xl mx-auto scroll-mt-28"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <h3 className="font-[family-name:var(--font-headline)] text-3xl md:text-4xl font-black tracking-tighter text-secondary mb-8">
              La Visión de la escuela
            </h3>
            <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
              <p>
                Consolidarnos como una <strong>institución de referencia a nivel nacional</strong> en
                la formación vinculada al montañismo, la educación en la naturaleza y la vida
                saludable, reconocida por su calidad académica, su fuerte impronta en la formación en
                terreno y su capacidad de adaptarse a los cambios pedagógicos y profesionales.
              </p>
              <p>
                Aspiramos a ampliar el acceso a nuestras propuestas más allá de las distancias
                geográficas y a formar profesionales comprometidos con el{" "}
                <strong>uso responsable y sustentable del ambiente</strong>, promoviendo el cuidado de
                los recursos naturales y culturales a través del ejemplo y la práctica cotidiana.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-72 sm:w-80 h-96 rounded-3xl overflow-hidden shadow-2xl rotate-3 relative">
              <Image
                src={IMG_VISION}
                alt="Montañistas en la cumbre sobre un mar de nubes"
                fill
                className="object-cover"
                sizes="320px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-surface-container-lowest">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="rounded-xl overflow-hidden shadow-2xl relative w-full h-[280px] md:h-[400px]">
              <Image
                src={IMG_STATS}
                alt="Montañistas ascendiendo en terreno nevado"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="grid grid-cols-1 gap-8 md:gap-10">
              {[
                { n: "+10", label: "Años de trayectoria" },
                { n: "+330", label: "Alumnos en 2019" },
                { n: "+10", label: "Provincias recorridas" },
                { n: "+10", label: "Instructores profesionales" },
              ].map((row) => (
                <div key={row.label} className="flex items-center gap-6">
                  <span className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-black text-secondary shrink-0">
                    {row.n}
                  </span>
                  <p className="text-xl md:text-2xl text-on-surface-variant">{row.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-black tracking-tighter mb-4">
            Conocé a nuestro staff de profesores
          </h2>
          <div className="h-1 w-24 bg-on-primary-container mx-auto rounded-full" />
        </div>
        <ProfesoresStaffPreview variant="cards" />
      </section>

      <section className="py-20 md:py-24 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-lg p-8 md:p-12 flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            <div className="md:w-1/3 text-center md:text-left">
              <h2 className="font-[family-name:var(--font-headline)] text-2xl md:text-3xl font-black text-secondary mb-6">
                Nuestro canal de Youtube
              </h2>
              <a
                href={YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-secondary text-secondary px-8 py-2 rounded-full font-bold hover:bg-secondary hover:text-on-secondary transition-all"
              >
                Visitar
              </a>
            </div>
            <div className="md:w-2/3 w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
              <iframe
                src={YOUTUBE_FEATURED_EMBED_URL}
                title="Video EAAM en YouTube"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
