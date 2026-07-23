import { HeroSection } from "@/components/ui/HeroSection";
import { readBeneficios, type BeneficioData } from "@/lib/beneficiosData";
import { readImageConfig } from "@/lib/imageConfig";
import { PAGE_HERO_DEFAULTS, pageHeroConfigKey } from "@/lib/pageHeroImages";

export const dynamic = "force-dynamic";
export const metadata = { title: "Beneficios" };

function formatDiscount(discount?: string) {
  if (!discount?.trim()) return "";
  const d = discount.trim();
  if (/×|x\s*\d/i.test(d)) return d;
  if (/OFF/i.test(d)) return d.replace(/off/i, "OFF");
  if (/%/.test(d)) return `${d} OFF`;
  return d;
}

function BeneficioItem({ b, label }: { b: BeneficioData; label: string }) {
  const content = (
    <>
      <div className="relative mb-5 md:mb-6">
        <div
          className="absolute inset-0 rounded-full bg-mountain-orange/0 group-hover:bg-mountain-orange/15 blur-xl scale-110 transition-all duration-500"
          aria-hidden
        />
        <div
          className={`relative w-[7.5rem] h-[7.5rem] md:w-[9.5rem] md:h-[9.5rem] rounded-full overflow-hidden bg-black shadow-[0_8px_30px_rgba(0,0,0,0.12)] ring-4 ring-white transition-all duration-300 flex items-center justify-center p-5 md:p-6 ${
            b.url ? "group-hover:ring-mountain-orange/40 group-hover:scale-[1.02]" : "group-hover:ring-mountain-orange/30"
          }`}
        >
          {b.imageSrc ? (
            // img directo: evita caché vieja de next/image tras renombrar archivos en /public/beneficios
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={b.imageSrc}
              alt={b.title}
              width={152}
              height={152}
              className="w-full h-full object-contain"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <span className="material-symbols-outlined text-4xl text-white/30">store</span>
          )}
        </div>
      </div>

      {label && (
        <span
          className={`inline-flex items-center justify-center gap-1 min-w-[6.25rem] px-5 py-2 rounded-full border-2 border-secondary/15 bg-white shadow-sm font-[family-name:var(--font-headline)] text-sm md:text-base font-extrabold tracking-wide text-secondary transition-all duration-300 ${
            b.url ? "group-hover:border-mountain-orange group-hover:text-mountain-orange group-hover:shadow-md" : ""
          }`}
        >
          {label}
          {b.url && (
            <span className="material-symbols-outlined text-base opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all">
              open_in_new
            </span>
          )}
        </span>
      )}
    </>
  );

  if (b.url) {
    return (
      <a
        href={b.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mountain-orange focus-visible:ring-offset-2 rounded-2xl"
        title={`${b.title} — abrir sitio`}
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex flex-col items-center group" title={b.title}>
      {content}
    </div>
  );
}

export default function BeneficiosPage() {
  const beneficios = readBeneficios().filter((b) => b.visible);
  const cfg = readImageConfig();
  const heroSrc = cfg[pageHeroConfigKey("beneficios")] ?? PAGE_HERO_DEFAULTS.beneficios;

  return (
    <>
      <HeroSection
        badge="Comunidad EAAM"
        title="Beneficios"
        subtitle="Descuentos exclusivos y convenios para alumnos y egresados de la EAAM."
        imageSrc={heroSrc}
        imageAlt="Grupo de egresados EAAM en la montaña"
        gradient="primary-container"
      />
      <section className="py-12 md:py-24 px-6 md:px-12 bg-surface">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-10 md:mb-16 max-w-2xl mx-auto">
            <p className="font-[family-name:var(--font-headline)] text-xs font-bold uppercase tracking-[0.2em] text-on-primary-container mb-3">
              Convenios
            </p>
            <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
              Presentá tu credencial EAAM y accedé a estos descuentos. Hacé clic en cada marca para visitar su web.
            </p>
          </div>

          {beneficios.length === 0 ? (
            <div className="text-center py-20 text-on-surface-variant">
              <span className="material-symbols-outlined text-5xl mb-4 block opacity-30">card_giftcard</span>
              <p className="text-lg font-medium opacity-50">No hay beneficios disponibles en este momento.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-14">
              {beneficios.map((b) => (
                <BeneficioItem key={b.id} b={b} label={formatDiscount(b.discount)} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
