import Link from "next/link";
import { readPostitulos } from "@/lib/postitulosData";

export const dynamic = "force-dynamic";
export const metadata = { title: "Postítulos" };

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCFKIsBQOT4UY5Q6FLoOIL9lhjVSz3xyEkvOhNL5RJ-kjOLpbRatRT8U7a7RnTgADtDQtB6XdcQpSY15qp3F0XMojlDVWggm1cjHR88NgKOkxAxgFucmb53-RyphYEagIa24sBL5MJpsYShO-ZK4KY24ycVlh5QFtxcA1qC7SkqzlekqR0SzP8M8mVMsDIHZVV4gMSWblXDDUGkfdlmshuWfVu1zwawDJzX4ypKIu6n4mtDmUBKltOBod0ot5eiuuCU85rkbNNs";

export default function PostitulosPage() {
  const postitulos = readPostitulos().filter((p) => p.visible);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-secondary overflow-hidden py-24">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={HERO_IMG} alt="Montañas andinas" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 pt-10">
          <div className="max-w-2xl">
            <span className="inline-block bg-primary-container text-on-primary-container text-xs font-bold tracking-[0.2em] uppercase px-3 py-1 mb-6 rounded-sm font-[family-name:var(--font-headline)]">
              Especialización Académica
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white font-[family-name:var(--font-headline)] tracking-tighter mb-4">
              Postítulos
            </h1>
            <p className="text-xl text-secondary-fixed-dim font-light leading-relaxed max-w-lg">
              Capacitaciones para crecer en tu profesión. Formación técnica avanzada con respaldo institucional.
            </p>
          </div>
        </div>
      </section>

      {/* Listing */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {postitulos.map((p) => (
            <article key={p.id} className="group bg-surface-container-lowest rounded-xl overflow-hidden flex flex-col md:flex-row shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(67,96,132,0.08)] transition-all duration-500 border border-outline-variant/10">
              <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.imageSrc} alt={p.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-secondary px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full font-[family-name:var(--font-headline)]">
                    {p.modalidad}
                  </span>
                </div>
              </div>
              <div className="md:w-3/5 p-8 flex flex-col">
                <div className="flex items-center gap-2 mb-4 text-primary font-bold text-xs font-[family-name:var(--font-headline)] tracking-wider uppercase">
                  <span className="material-symbols-outlined text-sm">timer</span>
                  <span>{p.duracion} de duración</span>
                </div>
                <h2 className="text-xl font-bold text-on-surface font-[family-name:var(--font-headline)] leading-tight mb-2">
                  {p.title}
                </h2>
                <p className="text-on-surface-variant text-xs font-semibold mb-3 uppercase tracking-wider">{p.modalidad} · {p.location}</p>
                {p.quote && (
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-grow italic">&ldquo;{p.quote}&rdquo;</p>
                )}
                <div className="flex items-center justify-between pt-6 border-t border-outline-variant/20 mt-auto">
                  <div className="text-xs font-semibold text-on-surface-variant">
                    <p className="text-[10px] uppercase tracking-widest mb-0.5">Comienzo</p>
                    <p className="text-on-surface font-bold">{p.comienzo || "A confirmar"}</p>
                  </div>
                  <Link href={`/postitulos/${p.slug}`} className="text-primary font-bold text-sm flex items-center gap-1 group/btn font-[family-name:var(--font-headline)]">
                    Ver programa
                    <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Reassurance */}
      <section className="bg-surface-container-low py-24 mb-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            { icon: "school", title: "Respaldo Ministerial", desc: "Nuestros postítulos cuentan con la certificación y supervisión del Ministerio de Educación, garantizando validez nacional y calidad académica institucional." },
            { icon: "verified", title: "Docentes Expertos", desc: "Cuerpo docente integrado por profesionales de montaña y académicos especializados en la didáctica de las actividades al aire libre." },
            { icon: "groups", title: "Comunidad Profesional", desc: "Acceso a una red nacional de egresados y profesionales del sector, fomentando el intercambio y las oportunidades laborales en todo el país." },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="font-[family-name:var(--font-headline)] font-bold text-lg mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-on-primary-container">{item.icon}</span>
                {item.title}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
