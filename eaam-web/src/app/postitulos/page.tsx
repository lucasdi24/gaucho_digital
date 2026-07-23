import Link from "next/link";
import { HeroSection } from "@/components/ui/HeroSection";
import { readPostitulos } from "@/lib/postitulosData";
import { readImageConfig } from "@/lib/imageConfig";
import { PAGE_HERO_DEFAULTS, pageHeroConfigKey } from "@/lib/pageHeroImages";

export const dynamic = "force-dynamic";
export const metadata = { title: "Postítulos" };

export default function PostitulosPage() {
  const postitulos = readPostitulos().filter((p) => p.visible);
  const cfg = readImageConfig();
  const heroSrc = cfg[pageHeroConfigKey("postitulos")] ?? PAGE_HERO_DEFAULTS.postitulos;

  return (
    <>
      <HeroSection
        badge="Especializaciones Académicas para Profesionales titulados."
        title="Postítulos"
        subtitle="La experiencia te llevó hasta aquí. La especialización te prepara para ir más lejos. Formación avanzada para quienes buscan convertirse en referentes de su campo profesional."
        imageSrc={heroSrc}
        imageAlt="Expedición en nieve — postítulos EAAM"
        gradient="secondary"
      />

      {/* Listing */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
          {postitulos.map((p) => (
            <article key={p.id} className="group bg-surface-container-lowest rounded-xl overflow-hidden flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(67,96,132,0.08)] transition-all duration-500 border border-outline-variant/10">
              <div className="relative h-52 md:h-64 overflow-hidden flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.imageSrc} alt={p.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-secondary px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full font-[family-name:var(--font-headline)]">
                    {p.modalidad}
                  </span>
                </div>
              </div>
              <div className="p-5 md:p-8 flex flex-col">
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
      <section className="bg-surface-container-low py-12 md:py-24 mb-12 md:mb-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {[
            { icon: "school", title: "Postítulos Oficiales", desc: "Nuestros postítulos cuentan con la certificación del Ministerio de Educación y la calidad académica que garantiza la EAAM.", desc2: "" },
            { icon: "verified", title: "Docentes especialistas altamente calificados", desc: "Un equipo docente integrado por especialistas y profesionales de las actividades en la naturaleza y la educación.", desc2: "La experiencia del terreno y la excelencia académica unidas para formar mejores profesionales." },
            { icon: "groups", title: "Comunidad Profesional", desc: "Acceso a una red nacional de egresados y profesionales del sector, fomentando el intercambio y las oportunidades laborales en todo el país.", desc2: "" },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="font-[family-name:var(--font-headline)] font-bold text-lg mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-on-primary-container">{item.icon}</span>
                {item.title}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
              {item.desc2 && <p className="text-on-surface-variant text-sm leading-relaxed mt-2">{item.desc2}</p>}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
