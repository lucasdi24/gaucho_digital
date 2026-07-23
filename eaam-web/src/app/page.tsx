import Image from "next/image";
import Link from "next/link";
import { readImageConfig } from "@/lib/imageConfig";
import { YOUTUBE_CHANNEL_URL } from "@/lib/siteLinks";
import { ProfesoresStaffPreview } from "@/components/ProfesoresStaffPreview";
import HeroCarousel from "./HeroCarousel";
import OpenEnrollmentSection from "./OpenEnrollmentSection";

export const dynamic = "force-dynamic";

const DEFAULTS = {
  heroHome:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDrxzorrMmrPnZemIBB63uT5Af2dP8cIqzwra5swuTAMaxJ-FvRrMRfR6EE6y91IWbsg99-Tf1UEqAU152DZ-e152nfzQ7xi7XelpBKQsCEKRTd3kEBhar5Unbri-UK5JqP2Rs-fnr0DX2PUcV9UfdxncBsUFmRMhgQkpJklk_NPOZfxANwF0xK49maqDom8YsxcOoAKmyArShtq2UpifLVomHmC0UNJTC1J5BdYtaWlJxC_PRMEu6Qg1jzjsR8r8tA3EbiB3-i",
  claimHome:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBoIKdf9RxQJz8XwwhPiaSqY12GYqvKR1x4J2ERLX6Nidi4brk13nZYVHf4eYFQuQ6IxyegNYUahZynh1U1YMZid8LrgisFCgatrSqDXBOfa5xz1qwFCIEIByLvIPdpUq6w6PiQsaLG6N46Y77cgHBxvZfWQkTNPZ5kJ-3o6fS_QWVw5oQ67H0i0dBK-kT_RuUx4DlfPu9FHFgGcsPJD3rMflHoPIqu-uDH_dIi4m940UYo2OFPPTErO0dy2xq-xekJTGbAfeKF",
  colCarreras:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCSt2zzwYrLmBayq_aTjFT8_oUUUHacJvZ84j8LoMvCweF0p30bQzO26i1F4H4YaXxsyhOVnXcn4jlgdUE33DWW27rs6qvHz9XEfOeSJmMgr2kxzy52ocQhfgyhv_t4zEoyMbZD77CawYNgxozKC1SgLwiMGRZh8bDr0KC6gV9oIA2oX54YVr2XagNYWZLQw8vBwSqNIXetK4em_HlUKbVPDkmSRhKzZBVeDEPpeMbKroJbhLWaX1EEMazeIO8eqvu8kWOculHH",
  colPostitulos:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBtQAEAeKwSfIZjA8ukYft5HsqD9Rrd2h0vowjvst8Okkb3ZzX6icB6eL_FZj7VGDHPvuH3naqRr4Zd_ba_FCwNkla0PdkyG1JZmu0PcDZRvTzsQQANtqDCxzytuWF9UD4g1uKuXFcwtTqvlr-BY3B8Q4s1PkunkKrbLuekx_LmLWGYMROQOA3HA6zEeKwzbIw1DVxrBgMTgwVoGf6qr5-csNJLGX_hKCC8wtl_q1IwLIazApUP9a_sfhDoXPq1IKtLZFLYpDFS",
  colCursos: "/home/col-cursos.jpg",
};

export default async function HomePage() {
  const cfg = readImageConfig();
  const claimSrc = cfg["claim-home"] ?? DEFAULTS.claimHome;
  const colCarrerasSrc = cfg["col-carreras"] ?? DEFAULTS.colCarreras;
  const colPostitutosSrc = cfg["col-postitulos"] ?? DEFAULTS.colPostitulos;
  const colCursosSrc = cfg["col-cursos"] ?? DEFAULTS.colCursos;
  return (
    <>
      <HeroCarousel />

      <OpenEnrollmentSection />

      {/* Institutional Claim */}
      <section className="relative py-20 md:py-48 overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{
            backgroundImage: `url('${claimSrc}')`,
          }}
        >
          <div className="absolute inset-0 bg-secondary/70 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h2 className="font-[family-name:var(--font-headline)] text-3xl md:text-6xl font-black text-white mb-4 leading-tight">
            EAAM – Donde tu sueño de ser guía se hace carrera.
          </h2>
          <p className="text-xl md:text-2xl text-white/80 font-light mb-4">
            Tu futuro como guía empieza hoy
          </p>
          <p className="text-base md:text-xl text-white/70 font-light leading-relaxed">
            Excelencia, práctica real en terreno y proyección laboral inmediata.
          </p>
        </div>
      </section>

      {/* 3-Column Cards */}
      <section className="py-14 md:py-32 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {[
            { title: "Carreras de guía", desc: "Modalidad Presencial y Mixto para todo el país", href: "/carreras", gradient: "from-primary via-primary/40 to-transparent", image: colCarrerasSrc },
            { title: "Postítulos Docentes", desc: "Modalidad Presencial", href: "/postitulos", gradient: "from-secondary via-secondary/40 to-transparent", image: colPostitutosSrc },
            { title: "Cursos", desc: "Modalidad Presencial y Semi-Presencial", href: "/cursos", gradient: "from-primary-container via-primary-container/40 to-transparent", image: colCursosSrc },
          ].map((col) => (
            <div key={col.title} className={`group relative h-72 md:h-[600px] rounded-2xl overflow-hidden shadow-xl ${col.title === "Postítulos" ? "md:translate-y-12" : ""}`}>
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${col.image}')` }} />
              <div className={`absolute inset-0 bg-gradient-to-t ${col.gradient}`} />
              <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
                <h3 className="text-white font-[family-name:var(--font-headline)] text-3xl md:text-4xl font-black mb-2 md:mb-4">{col.title}</h3>
                <p className="text-white/80 mb-4 md:mb-8 font-light text-sm md:text-base">{col.desc}</p>
                <Link href={col.href} className="block w-full py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-lg text-center hover:bg-white hover:text-primary transition-all">
                  Ver todas
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 md:py-32 bg-secondary text-white px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div
              className="rounded-2xl overflow-hidden h-56 md:h-[400px] bg-cover bg-center"
              style={{ backgroundImage: `url('${claimSrc}')` }}
            />
            <ul className="space-y-6">
              {[
                "+1300hs de formación en la montaña",
                "+ Beneficios en casas de venta, renta y alojamiento en todo el país",
                "+ Entrenamiento",
                "+ Contenidos propios (apuntes, videos y mas)",
                "+ Equipo Técnico para alumnos",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4 text-xl text-white/90 font-light">
                  <span className="text-on-primary-container font-bold text-2xl leading-none mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Professors Preview */}
      <section className="py-14 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-[1440px] mx-auto text-center mb-10 md:mb-20">
          <h2 className="font-[family-name:var(--font-headline)] text-3xl md:text-4xl font-black text-secondary mb-4">Conocé a nuestro staff de profesores</h2>
          <p className="text-on-surface-variant">Guías UIAGM y profesionales con décadas de experiencia internacional.</p>
        </div>
        <ProfesoresStaffPreview variant="circular" />
      </section>

      {/* YouTube */}
      <section className="py-10 md:py-20 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-[family-name:var(--font-headline)] text-3xl md:text-4xl font-black text-secondary mb-2 leading-tight">
              Nuestro canal<br />de Youtube
            </h2>
          </div>
          <Link
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-all shadow-lg"
          >
            <span className="material-symbols-outlined">play_circle</span>
            Visitar
          </Link>
        </div>
      </section>
    </>
  );
}
