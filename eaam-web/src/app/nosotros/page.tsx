import { HeroSection } from "@/components/ui/HeroSection";
import Image from "next/image";
import Link from "next/link";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCSpg888RQCK3YpYA5jvwBABjHDu3DUJhz5b9cDwrrNrbub_7HaPiQfG-sMg8qwdbE-Z3_xBi-qJyLtoP4IXkQDCopLLfuo_wZ-S0UETHUxYFzQbo1qXTG0WxTD8GBQtfx0FtwxJDagcu3Ral074PjQ1SI4NTX5DuaG369wfUgWp-DjW1hgaMYM1VIix_MkYZCN7ACEkyzJnaajhAdUSl_-K9I6HEZd37444BUjMEzFLkV8L_REvvu35sjigRmRZFl1Dl9fsNEr";

const IMG_QUIENES =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDDd1J5_LZzF634_ItLMPpyyXTtEW1yik5x99b3oK2GbbMZ4hoR82Tx-hqzs7lO8gGZGQa6XVXc50A5JtGEHu9N-FGnstQAr665A7WbOsF8-Ev1evY_OcxiD_eNKQkVkCin5IOSHhqpgKXp55GYLrqrnnXMP0a8QEM2y4Rh3XuZdPoRF2XayUyhq-CQg6L1uNy6s139NQgjm1PgnPNLbyqy0B1sN8u7fWukAxXt1fI1kAWGK_svGQEyskCwhe5BQVFJe-g2vAh0";

const IMG_MISION =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDgr-HkJji_R7tmamFL-Ocq6NV2IHPVnzH0DTl5uhyg0GsSmW_AL0yzrFXcmYhQUPhoyOW3w7osHQNa0Ql8YA7CwxwTpX9eF1yt3vA9cw4tI7Cc6VzqF2qLMV8kfJ_YbEXGX8ueCFO0-LoGpvgrCpxaKXudtbQJJq_2Mw8Q3dY9LqZWyPsusabEWWbXnNUirxZXZfvz6c3pwxJ0HLROlql04sN3tR9cx23PnUvdDhD6MYIdefU0LOyOukGWNhiyOlpanSiHXojJ";

const IMG_BRUJULA =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCcIOu2MH8hjL5FLwyvGxenz_91UvkMKZDlUCIYacTVjcFRWFfwho_r8D9Qz14osM0uyglElD1JQvopeBVdfGkm9qNMOKGtMUhSFpRbWjLB60bMWc3iNbYSiC_mBwYoUvxdgB-pQTus1X2SWbBnDYs3JwCVs24Uf7fwusFbVZT_4RBtYtSEPOp9w0sSUQfrmfR4Y25dseTNskWIvEP5_2dJ9bnnsUnNM8XmB8hz0kZekbV26xsn7IneCCuUuCL504Ytj5nDDWZq";

const IMG_STATS =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDWJ8VslT3fgBTJH0r0TEQyVNJ7YseCKgjYeX9hDFTKB5GxP5zKTpew8lXIFSqzjQXG1d7n-LtUHqNMrjwdoXaUvoJApZHeip5QeyoC3uk_-PbEq_dAnQDebQG8WlLRPAa8LdJV_8TYh8eady2Yi6Vcxij4UPRv8_gYYF1uYj6iWcYephZeadVSHoHeZ8eRVSq9bVnuRNz_y45yjnixsI0BcK3hv3w4s5xTw29txa45veTSYzOfy-ZtwFZOSYkalacIQo44_ml0";

const YOUTUBE_CHANNEL = "https://www.youtube.com";

const staffDestacado = [
  {
    name: "Matías Marin",
    role: "Guía de Montaña en Altitud",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC70dltehI1fBdmNubs7IbJY53MM0oWTjn2egumLBGtrUMuf0pA6Gs2FMU8_nx2AVOzwxH0Yxf7_hcvtWGmrKofsJBRcENxuASurCTT0tNee_mS1EkWeMq5usLbFk8DEX-MSg7pUPGaBHETemMFWvjKXj0h6YAR3QVGI1HOEw3ok1v00MprFLG-3nnrfisWqzJr1EOo3RhxBbG4hAyfDXqXqgq_zbMwxrcNS9y5t4N2nxyiRqrtGlAmCyQHD1oRcqhn1SKlJaWr",
  },
  {
    name: "Carla Céspedes",
    role: "Guía de Montaña",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADlTtCNmZUtWmSyw9X30BATdOEIA6L56LSaIAd5R3Vvs3zQttGWQZD4tYaNGzJ985tMLfT_JoWjpQMbLO_AtyUsYli5O73n0i9WwkaPw2exaMDzSwDuFEUFAdslH-FNMFj3WQ5COLYWlb-bZm2gKz3l44_uXdshpp2ao3a08SWtdH4Dr8mVuvJSJ7ZcVI12OmNPysod3LWGfBv7ZRB7HxIdIixlIZfsK_yj9OHMvXT5R631YuRH0CZTYhFFysmXEsEWWLp1fvJ",
  },
  {
    name: "Adrian Silva",
    role: "Guía de montaña",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC70dltehI1fBdmNubs7IbJY53MM0oWTjn2egumLBGtrUMuf0pA6Gs2FMU8_nx2AVOzwxH0Yxf7_hcvtWGmrKofsJBRcENxuASurCTT0tNee_mS1EkWeMq5usLbFk8DEX-MSg7pUPGaBHETemMFWvjKXj0h6YAR3QVGI1HOEw3ok1v00MprFLG-3nnrfisWqzJr1EOo3RhxBbG4hAyfDXqXqgq_zbMwxrcNS9y5t4N2nxyiRqrtGlAmCyQHD1oRcqhn1SKlJaWr",
  },
  {
    name: "Damián Romeo",
    role: "Guía de Montaña",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAIp0_qOQyKxcs7BLjRIWgXGcjdbhaFkPRqjx3TkV-1WaIrMtiuV2ZophCp2_5fXcfJOdUrd6O0L1ysD0oDp5RL9KhHSTxVI_hZrJuR4xRFHuYCUcnfNV3-DgMSvDWRSOfU8tQvt8Pr604R4453xaXGHk5HOEGu0WEhxE-gX1qz3kRkElSbRVy7kac4Jzi0r4p0qQQ3STkflic7o3KaVp093IoiWv1uX-652FVHLkbAwu5d4fhfzCjGWHxjW4CClcJFBlOtTG6l",
  },
] as const;

export const metadata = {
  title: {
    absolute: "Nosotros — EAAM | La Academia de los Andes",
  },
  description:
    "Conocé la EAAM: quiénes somos, misión, visión, trayectoria y nuestro equipo docente.",
};

export default function NosotrosPage() {
  return (
    <>
      <HeroSection
        title="Escuela Argentina de Actividades en la Montaña"
        subtitle="Incorporada a la enseñanza oficial A-1530"
        imageSrc={HERO_IMAGE}
        imageAlt="Fondo montaña"
        gradient="secondarySoft"
        height="min-h-[80vh] h-[80vh]"
      >
        <Link
          href="mailto:info@eaam.com.ar"
          className="inline-block mt-8 bg-primary-container text-on-primary px-10 py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-primary transition-all"
        >
          Consultar
        </Link>
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
                alt="Grupo EAAM"
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
                alt="Montañista en la nieve"
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

      <section className="py-24 md:py-32 px-6 md:px-12 max-w-screen-2xl mx-auto">
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
                src={IMG_BRUJULA}
                alt="Brújula"
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
                alt="Equipo en la cumbre"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {staffDestacado.map((p) => (
            <div
              key={p.name}
              className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-surface-container"
            >
              <div className="aspect-square overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 relative">
                <Image src={p.imageSrc} alt={p.name} fill className="object-cover" sizes="280px" />
              </div>
              <div className="p-6">
                <h4 className="font-[family-name:var(--font-headline)] text-xl font-bold text-primary mb-1">
                  {p.name}
                </h4>
                <p className="text-on-surface-variant text-sm">{p.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/profesores"
            className="text-sm font-bold text-on-surface-variant hover:text-on-surface transition-colors uppercase tracking-widest border-b border-surface-container-highest pb-1"
          >
            Ver más
          </Link>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-lg p-8 md:p-12 flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            <div className="md:w-1/3 text-center md:text-left">
              <h2 className="font-[family-name:var(--font-headline)] text-2xl md:text-3xl font-black text-secondary mb-6">
                Nuestro canal de Youtube
              </h2>
              <a
                href={YOUTUBE_CHANNEL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-secondary text-secondary px-8 py-2 rounded-full font-bold hover:bg-secondary hover:text-on-secondary transition-all"
              >
                Visitar
              </a>
            </div>
            <div className="md:w-2/3 w-full">
              <a
                href={YOUTUBE_CHANNEL}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-video bg-black rounded-xl overflow-hidden relative group cursor-pointer"
              >
                <Image
                  src={IMG_BRUJULA}
                  alt="Miniatura del canal de YouTube"
                  fill
                  className="object-cover opacity-60 group-hover:opacity-70 transition-opacity"
                  sizes="(min-width: 768px) 60vw, 100vw"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="material-symbols-outlined text-white text-6xl md:text-7xl opacity-80 group-hover:scale-110 transition-transform">
                    play_circle
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
