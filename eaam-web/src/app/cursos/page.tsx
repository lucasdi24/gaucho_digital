import { CursoGrid } from "./CursoGrid";

export const metadata = { title: "Cursos" };

const HERO_BG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDOYkar9uxeoGNMr8aOob_KBBKPLO4ydtdRZsoRfNktEZyp4VCQ1q84YmRqdwXeLzrycZApwkXWHqD6pUlLja83MwA-ieQbyuDNwOVZ6mjiLJF6By9HFxAMSq6JKyy0puzb34TXncSnJOVdp_8G67I4pG39qBcefwHdIymmtzH69ZXfKcAwQlU3xV4EXQt0hoPS52Zli15sFfn6cUDIChD-tPJLAVlrCZ3IakkhH3F2NrQN3DvYvI7WTiST7SbSTSn84DhRerHp";

export default function CursosPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 md:px-12 py-16 max-w-[1440px] mx-auto pt-28">
        <div className="relative overflow-hidden rounded-2xl bg-primary-container p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Background texture */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ backgroundImage: `url('${HERO_BG}')`, backgroundSize: "cover", backgroundPosition: "center" }}
          />
          {/* Text */}
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-white font-[family-name:var(--font-headline)] text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
              Cursos
            </h1>
            <p className="text-orange-100/90 text-lg md:text-xl leading-relaxed max-w-xl font-light">
              Capacitaciones en C.A.B.A. presenciales y semi-presenciales con salidas de aplicación
              en distintos puntos del país.
            </p>
          </div>
          {/* Watermark */}
          <div className="relative z-10 flex flex-col items-end">
            <span className="text-white/40 font-[family-name:var(--font-headline)] font-bold text-9xl leading-none select-none hidden md:block">
              EAAM
            </span>
          </div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-20">
        <CursoGrid />
      </section>

      {/* CTA */}
      <section className="mt-12 px-6 md:px-12 max-w-[1440px] mx-auto pb-24">
        <div className="bg-secondary rounded-2xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
            <span className="material-symbols-outlined text-[300px] absolute -top-10 -right-20">
              terrain
            </span>
          </div>
          <h2 className="text-white font-[family-name:var(--font-headline)] text-3xl md:text-5xl font-extrabold mb-6 relative z-10">
            ¿Listo para comenzar tu expedición?
          </h2>
          <p className="text-white/75 text-lg mb-10 max-w-2xl mx-auto font-light leading-relaxed relative z-10">
            Nuestros coordinadores académicos están disponibles para asesorarte sobre el curso que
            mejor se adapte a tu nivel de experiencia.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <button className="bg-orange-500 text-white px-10 py-4 rounded-lg font-[family-name:var(--font-headline)] font-bold text-sm uppercase tracking-widest hover:bg-orange-400 transition-colors shadow-lg">
              Contactar a Secretaría
            </button>
            <button className="bg-transparent border border-white/20 text-white px-10 py-4 rounded-lg font-[family-name:var(--font-headline)] font-bold text-sm uppercase tracking-widest hover:bg-white/5 transition-colors">
              Ver Calendario 2024
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
