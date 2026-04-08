import Image from "next/image";
import Link from "next/link";
import { readImageConfig } from "@/lib/imageConfig";

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
  colCursos:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAjGCPV3OcuG633-8G9XHeXtlM8UIHwO7unbmflUh-ySLJxIN1QeJ6XbKv3mgCnaKpNlzlqMIFHseBKVJ2HPwzExs_UiwSqNC3FSivbDiteXH1ooTEF0Yk9DSk8HHRLO4lXbUSwj-U7yLhZilMn1867XN5BnphC6VjIx7IaM27EZ9xF5h3TllD81149Hd6nC5c_Mv3ZFBN15w-OXL4gbtyL5c0siStQSvBI2nNxdcp6YYyyMDx9j3GLTy_-w4N7LfbCFIxOOQXQ",
};

export default async function HomePage() {
  const cfg = readImageConfig();
  const heroSrc = cfg["hero-home"] ?? DEFAULTS.heroHome;
  const claimSrc = cfg["claim-home"] ?? DEFAULTS.claimHome;
  const colCarrerasSrc = cfg["col-carreras"] ?? DEFAULTS.colCarreras;
  const colPostitutosSrc = cfg["col-postitulos"] ?? DEFAULTS.colPostitulos;
  const colCursosSrc = cfg["col-cursos"] ?? DEFAULTS.colCursos;
  const profImgs = {
    "Pablo González": cfg["prof-pablo-gonzalez"] ?? "https://lh3.googleusercontent.com/aida-public/AB6AXuDhhWEVSgqqajymG73-7cJarTmA1jlAureYX1doCltXLQubxP0XGix-bfEW0do1kOieYa-xRtH3RJ_A0ZpcGMSU7WyIGQPOieYqD62JjhDkTmQkuIwO69jgA7-KT0-WiUg5tHTivRB0dxVtMUrw9WZtJCsuSy0ySRfcvqxm6F8x3YPDOYHmRPLILGCNWjyl5xlIgFCMtI8ZPSoxWVC_xuKqHoXAhr8yRgZo2HZnvkvoFDz2b8ZLOw2piW8V2zT8170bkB8-Tzrm",
    "Lucía Martínez": cfg["prof-lucia-martinez"] ?? "https://lh3.googleusercontent.com/aida-public/AB6AXuC77W3u6fJgGU_9l29x4Rv22HCDIwh00_5lCEoOCUTVGrYorDhnbuUY81YMGGIE-b6lY8KZfIO7nAfzzySfqRbQHYMinnYwarYDyIHpKtX5-CA0kwyrUefQOmvhMlgaPqWFE8xm_FT-93WkfXrtbzGGSZ6lz2n07eBl-G5FDbScC6zi1swAYTwdznfzd_vWkIqBZ_ti_ZdDp1eoI5EVusyoYfIAsWjfn9sbzzoTGgwsu1yleBswYK-b4Xc2Sk8KA2QP3LFEh0qt",
    "Andrés Riva": cfg["prof-andres-riva"] ?? "https://lh3.googleusercontent.com/aida-public/AB6AXuAJw7eqAf3cPF7k7YyB5qoQFQf4s79SaWtRSeY29SPvlBI8c0FKxMr5zSjEXbVjEVw84-GAlIf2NN3Jyh8IlZFSRJrYOFmHhVzi11G1HD_AnCyVi5b3d7caSyU--hP3tXggOPVsWuUgYCGhLLF6m-OpnPR3xO-tDrsLBiQ7Abm2TXm7KInI8FojXB9ohcEc0FKsqQQAv2fO-BZdrc-TzM5tXMlt_-HQA2sx4DCUHRCjxDzqSbRoFHaQEOlMdX_nfwbp",
    "Martín Castro": cfg["prof-martin-castro"] ?? "https://lh3.googleusercontent.com/aida-public/AB6AXuCjb6SFR8yw9rZiaFKB1H58CwUMes-zeJ3SU_biLxnfblLcG5tUZF2G50JQCYqDGvNvrJLT3o5buEyuhrJq_VYUP-1gz7WZwlPbpSQ25VXzQ7MHLUZpR7Zod4H3g4q1mB3NepawNG5RRwx1XvjLWFbPoK3wkFkhF_pxXAzAc_tCTGqXSMwWJ1VWuCzbacyLuGbhXJxWJbxLHRbXxkdVcRPOKvWxV58NSS8Puxo_-3WGL22JWbEjawuO_8taisGaWQDAoyO773SXK",
  };
  return (
    <>
      {/* Hero */}
      <section className="relative h-[921px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${heroSrc}')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-container/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1440px] w-full px-6 md:px-12">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-on-primary-container text-white text-xs font-bold tracking-widest uppercase rounded-full mb-6">
              Becas
            </span>
            <h1 className="font-[family-name:var(--font-headline)] text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6 text-shadow-md">
              Becas Para Estudiantes
            </h1>
            <p className="text-xl text-white/90 font-light mb-10 max-w-xl leading-relaxed">
              Nuestra aula es la montaña. Formando profesionales con los estándares más altos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#"
                className="bg-on-primary-container text-white px-8 py-4 rounded-lg font-[family-name:var(--font-headline)] font-bold text-lg hover:brightness-110 transition-all shadow-xl text-center"
              >
                Inscribite ahora
              </Link>
              <Link
                href="/carreras"
                className="border-2 border-white/40 text-white backdrop-blur-sm px-8 py-4 rounded-lg font-[family-name:var(--font-headline)] font-bold text-lg hover:bg-white/10 transition-all text-center"
              >
                Conocé nuestras carreras
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="relative -mt-16 z-20 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "school", title: "Becas Para Estudiantes", desc: "Oportunidades de financiamiento para alumnos destacados y proyectos sociales.", bg: "bg-secondary" },
            { icon: "public", title: "Estudiá desde cualquier parte del país", desc: "Plataforma virtual híbrida con prácticas intensivas presenciales en terreno.", bg: "bg-primary" },
            { icon: "sell", title: "Descuentos y beneficios", desc: "En casas de montaña para nuestros estudiantes.", bg: "bg-secondary" },
          ].map((card) => (
            <div
              key={card.title}
              className={`${card.bg} p-8 rounded-xl text-white flex flex-col justify-between h-64 hover:translate-y-[-8px] transition-transform duration-300 shadow-xl`}
            >
              <span className="material-symbols-outlined text-4xl text-on-primary-container">{card.icon}</span>
              <h3 className="text-2xl font-[family-name:var(--font-headline)] font-bold">{card.title}</h3>
              <p className="text-white/80">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Enrollment */}
      <section className="py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="font-[family-name:var(--font-headline)] font-bold text-on-primary-container tracking-widest uppercase text-sm block mb-2">
                Oferta Académica
              </span>
              <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-black text-secondary">
                Inscripciones abiertas
              </h2>
            </div>
            <div className="flex gap-2 p-1 bg-surface-container rounded-full">
              {["Todos", "Carreras", "Cursos", "Postítulos"].map((tab, i) => (
                <button
                  key={tab}
                  className={`px-6 py-2 rounded-full font-[family-name:var(--font-headline)] font-semibold text-sm transition-colors ${
                    i === 0
                      ? "bg-white text-secondary shadow-sm font-bold"
                      : "text-on-surface-variant hover:text-secondary"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { type: "Carrera", title: "Guía de Montaña – Mixto (Todo el país)", duration: "3 Años", modality: "Mixto", href: "/carreras" },
              { type: "Postítulo", title: "Postítulo en Actividades y Deportes en la Naturaleza – Mixto (Todo el País)", duration: "6 Meses", modality: "Mixto", href: "/postitulos" },
              { type: "Curso", title: "Curso Integral de Montañismo y Trekking SEMI-PRESENCIAL (todo el país)", duration: "80 Hs", modality: "Semi-Presencial", href: "/cursos" },
              { type: "Curso", title: "Curso Integral de Montañismo y Trekking PRESENCIAL", duration: "80 Hs", modality: "Presencial", href: "/cursos" },
              { type: "Curso", title: "Iniciación al Montañismo PRESENCIAL", duration: "40 Hs", modality: "Presencial", href: "/cursos" },
              { type: "Curso", title: "Iniciación al Montañismo SEMI-PRESENCIAL", duration: "40 Hs", modality: "Semi-Presencial", href: "/cursos" },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="bg-surface-container-lowest p-8 rounded-xl group hover:shadow-2xl transition-all duration-500 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="bg-surface-container-high px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest text-secondary">
                      {item.type}
                    </span>
                    <span className="material-symbols-outlined text-outline group-hover:text-on-primary-container transition-colors">
                      arrow_outward
                    </span>
                  </div>
                  <h4 className="text-2xl font-[family-name:var(--font-headline)] font-bold text-primary mb-4 leading-tight">
                    {item.title}
                  </h4>
                </div>
                <div className="flex items-center gap-4 text-xs font-bold text-secondary uppercase tracking-widest mt-4">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">schedule</span> {item.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">location_on</span> {item.modality}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Claim */}
      <section className="relative py-48 overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{
            backgroundImage: `url('${claimSrc}')`,
          }}
        >
          <div className="absolute inset-0 bg-secondary/70 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h2 className="font-[family-name:var(--font-headline)] text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
            EAAM – Donde tu sueño de ser guía se hace carrera.
          </h2>
          <p className="text-2xl text-white/80 font-light mb-4">
            Tu futuro como guía empieza hoy
          </p>
          <p className="text-xl text-white/70 font-light leading-relaxed">
            Excelencia, práctica real en terreno y proyección laboral inmediata.
          </p>
        </div>
      </section>

      {/* 3-Column Cards */}
      <section className="py-32 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: "Carreras de guía", desc: "Modalidad Presencial y Mixto para todo el país", href: "/carreras", gradient: "from-primary via-primary/40 to-transparent", image: colCarrerasSrc },
            { title: "Postítulos Docentes", desc: "Modalidad Presencial", href: "/postitulos", gradient: "from-secondary via-secondary/40 to-transparent", image: colPostitutosSrc },
            { title: "Cursos", desc: "Modalidad Presencial y Semi-Presencial", href: "/cursos", gradient: "from-primary-container via-primary-container/40 to-transparent", image: colCursosSrc },
          ].map((col) => (
            <div key={col.title} className={`group relative h-[600px] rounded-2xl overflow-hidden shadow-xl ${col.title === "Postítulos" ? "md:translate-y-12" : ""}`}>
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${col.image}')` }} />
              <div className={`absolute inset-0 bg-gradient-to-t ${col.gradient}`} />
              <div className="absolute bottom-0 left-0 p-10 w-full">
                <h3 className="text-white font-[family-name:var(--font-headline)] text-4xl font-black mb-4">{col.title}</h3>
                <p className="text-white/80 mb-8 font-light">{col.desc}</p>
                <Link href={col.href} className="block w-full py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-lg text-center hover:bg-white hover:text-primary transition-all">
                  Ver todas
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-secondary text-white px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div
              className="rounded-2xl overflow-hidden h-[400px] bg-cover bg-center"
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
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-[1440px] mx-auto text-center mb-20">
          <h2 className="font-[family-name:var(--font-headline)] text-4xl font-black text-secondary mb-4">Conocé a nuestro staff de profesores</h2>
          <p className="text-on-surface-variant">Guías UIAGM y profesionales con décadas de experiencia internacional.</p>
        </div>
        <div className="max-w-[1440px] mx-auto flex flex-wrap justify-center gap-12">
          {[
            { name: "Pablo González", role: "Guía UIAGM", img: profImgs["Pablo González"] },
            { name: "Lucía Martínez", role: "Especialista en Rescate", img: profImgs["Lucía Martínez"] },
            { name: "Andrés Riva", role: "Medicina de Montaña", img: profImgs["Andrés Riva"] },
            { name: "Martín Castro", role: "Cartografía Avanzada", img: profImgs["Martín Castro"] },
          ].map((prof) => (
            <div key={prof.name} className="flex flex-col items-center group">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-surface-container-high group-hover:border-on-primary-container transition-colors mb-6">
                <Image src={prof.img} alt={prof.name} width={160} height={160} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-[family-name:var(--font-headline)] font-bold text-primary text-xl">{prof.name}</h4>
              <p className="text-sm text-on-surface-variant font-bold uppercase tracking-widest mt-1">{prof.role}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link href="/profesores" className="bg-surface-container-high text-secondary px-8 py-3 rounded-lg font-bold hover:bg-secondary hover:text-white transition-all">Ver más</Link>
        </div>
      </section>

      {/* YouTube */}
      <section className="py-20 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-[family-name:var(--font-headline)] text-3xl md:text-4xl font-black text-secondary mb-2 leading-tight">
              Nuestro canal<br />de Youtube
            </h2>
          </div>
          <Link
            href="https://www.youtube.com/@eaam"
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
