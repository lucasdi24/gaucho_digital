import Link from "next/link";
import { readCursos } from "@/lib/cursosData";

export const dynamic = "force-dynamic";
export const metadata = { title: "Cursos" };

const HERO_BG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDOYkar9uxeoGNMr8aOob_KBBKPLO4ydtdRZsoRfNktEZyp4VCQ1q84YmRqdwXeLzrycZApwkXWHqD6pUlLja83MwA-ieQbyuDNwOVZ6mjiLJF6By9HFxAMSq6JKyy0puzb34TXncSnJOVdp_8G67I4pG39qBcefwHdIymmtzH69ZXfKcAwQlU3xV4EXQt0hoPS52Zli15sFfn6cUDIChD-tPJLAVlrCZ3IakkhH3F2NrQN3DvYvI7WTiST7SbSTSn84DhRerHp";

const GRADIENT_FALLBACKS = [
  "from-orange-900 to-stone-900",
  "from-slate-800 to-stone-900",
  "from-amber-900 to-stone-900",
  "from-zinc-800 to-stone-900",
];

export default function CursosPage() {
  const allCursos = readCursos();
  const cursos = allCursos.filter((c) => c.visible);

  const isProximamente = (badge: string) => badge === "Próximamente";

  return (
    <>
      {/* Hero */}
      <section className="px-6 md:px-12 pt-20 md:pt-28 pb-6 md:pb-16 max-w-[1440px] mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-primary-container p-7 md:p-16 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `url('${HERO_BG}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-white font-[family-name:var(--font-headline)] text-4xl md:text-7xl font-extrabold tracking-tighter mb-4 md:mb-6">
              Cursos
            </h1>
            <p className="text-orange-100/90 text-lg md:text-xl leading-relaxed max-w-xl font-light">
              Capacitaciones en C.A.B.A. presenciales y semi-presenciales con
              salidas de aplicación en distintos puntos del país.
            </p>
          </div>
          <div className="relative z-10 flex flex-col items-end">
            <span className="text-white/40 font-[family-name:var(--font-headline)] font-bold text-9xl leading-none select-none hidden md:block">
              EAAM
            </span>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-12 md:mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-6 md:gap-y-10">
          {cursos.map((curso, idx) => {
            const prox = isProximamente(curso.badge);
            const gradClass =
              GRADIENT_FALLBACKS[idx % GRADIENT_FALLBACKS.length];
            return (
              <article
                key={curso.id}
                className={`group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                  prox ? "opacity-80" : ""
                }`}
              >
                {/* Image / fallback */}
                <div className="relative h-52 w-full overflow-hidden">
                  {curso.imageSrc ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={curso.imageSrc}
                      alt={curso.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div
                      className={`w-full h-full bg-gradient-to-br ${gradClass} flex items-center justify-center`}
                    >
                      <span className="material-symbols-outlined text-white/20 text-7xl">
                        {curso.icon}
                      </span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`backdrop-blur-md text-white text-[10px] font-extrabold px-3 py-1.5 rounded uppercase tracking-widest font-[family-name:var(--font-headline)] ${
                        prox ? "bg-slate-700/90" : "bg-secondary/90"
                      }`}
                    >
                      {curso.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-8 flex flex-col flex-grow border-x border-b border-outline-variant/10 rounded-b-xl">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-on-primary-container text-sm">
                      {curso.icon}
                    </span>
                    <span className="text-[10px] font-bold text-on-surface-variant font-[family-name:var(--font-headline)] uppercase tracking-wider">
                      {curso.modalidad}
                    </span>
                    {curso.diasCursada && (
                      <span className="text-[10px] text-on-surface-variant">
                        · {curso.diasCursada}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-[family-name:var(--font-headline)] font-extrabold text-on-background leading-tight mb-3">
                    {curso.title}
                  </h3>
                  {curso.comienzo && (
                    <p className="text-xs text-on-surface-variant mb-2">
                      <span className="font-semibold">Inicio:</span>{" "}
                      {curso.comienzo}
                    </p>
                  )}
                  {curso.horarios && (
                    <p className="text-xs text-on-surface-variant mb-4">
                      <span className="font-semibold">Horario:</span>{" "}
                      {curso.horarios}
                    </p>
                  )}
                  <div className="mt-auto flex items-center gap-3">
                    {prox ? (
                      <span className="flex-1 bg-surface-container text-on-surface-variant py-3 rounded-lg font-[family-name:var(--font-headline)] font-bold text-xs uppercase tracking-widest text-center">
                        Próximamente
                      </span>
                    ) : (
                      <Link
                        href={`/cursos/${curso.slug}`}
                        className="flex-1 bg-on-primary-container text-white py-3 rounded-lg font-[family-name:var(--font-headline)] font-bold text-xs uppercase tracking-widest transition-all hover:brightness-110 text-center"
                      >
                        Más información
                      </Link>
                    )}
                    <a
                      href="https://wa.me/5491100000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Consultar por WhatsApp"
                      className="px-4 py-3 rounded-lg border border-secondary/20 text-secondary hover:bg-secondary/5 transition-colors"
                    >
                      <span className="material-symbols-outlined">
                        chat_bubble
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {cursos.length === 0 && (
          <p className="text-center text-on-surface-variant py-20">
            No hay cursos disponibles en este momento.
          </p>
        )}
      </section>

      {/* CTA */}
      <section className="mt-6 md:mt-12 px-6 md:px-12 max-w-[1440px] mx-auto pb-12 md:pb-24">
        <div className="bg-secondary rounded-2xl p-8 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
            <span className="material-symbols-outlined text-[300px] absolute -top-10 -right-20">
              terrain
            </span>
          </div>
          <h2 className="text-white font-[family-name:var(--font-headline)] text-2xl md:text-5xl font-extrabold mb-4 md:mb-6 relative z-10">
            ¿Listo para comenzar tu expedición?
          </h2>
          <p className="text-white/75 text-base md:text-lg mb-7 md:mb-10 max-w-2xl mx-auto font-light leading-relaxed relative z-10">
            Nuestros coordinadores académicos están disponibles para asesorarte
            sobre el curso que mejor se adapte a tu nivel de experiencia.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a
              href="mailto:secretaria@eaam.com.ar"
              className="bg-orange-500 text-white px-10 py-4 rounded-lg font-[family-name:var(--font-headline)] font-bold text-sm uppercase tracking-widest hover:bg-orange-400 transition-colors shadow-lg"
            >
              Contactar a Secretaría
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
