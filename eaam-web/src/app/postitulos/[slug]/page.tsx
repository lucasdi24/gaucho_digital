import { notFound } from "next/navigation";
import { postitulos } from "@/data/postitulos";

export function generateStaticParams() {
  return postitulos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = postitulos.find((x) => x.slug === slug);
  return { title: p?.title ?? "Postítulo" };
}

export default async function PostituloDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = postitulos.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <main>
      {/* Hero */}
      <section
        className="relative min-h-[600px] flex items-center overflow-hidden bg-secondary"
        style={{ paddingTop: "56px" }}
      >
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={p.imageSrc}
            alt={p.imageAlt}
            className="w-full h-full object-cover opacity-60 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 py-24">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-on-primary-container text-white font-[family-name:var(--font-headline)] text-xs font-bold uppercase tracking-widest mb-6">
            <span className="material-symbols-outlined text-[14px]">fiber_manual_record</span>
            {p.status}
          </span>
          <h1 className="text-white font-[family-name:var(--font-headline)] font-black text-3xl md:text-5xl lg:text-7xl leading-[1.1] tracking-tighter mb-8 max-w-4xl">
            {p.title}
          </h1>
          <p className="text-secondary-fixed font-light text-xl md:text-2xl max-w-2xl leading-relaxed italic border-l-4 border-on-primary-container pl-6">
            &ldquo;{p.quote}&rdquo;
          </p>
        </div>
      </section>

      {/* Editorial Introduction */}
      <section className="bg-surface py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <h2 className="font-[family-name:var(--font-headline)] font-extrabold text-primary text-4xl mb-8 leading-tight">
                Liderando la evolución pedagógica en entornos naturales.
              </h2>
              <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
                <p>{p.introP1}</p>
                <p>{p.introP2}</p>
              </div>
              <div className="mt-12 flex flex-wrap gap-4">
                <button className="bg-primary-container text-on-primary-container px-8 py-4 rounded-lg font-[family-name:var(--font-headline)] font-bold hover:brightness-110 transition-all shadow-md flex items-center gap-3">
                  Descargar Plan de Estudios
                  <span className="material-symbols-outlined">download</span>
                </button>
                <button className="border-2 border-secondary/20 text-secondary px-8 py-4 rounded-lg font-[family-name:var(--font-headline)] font-bold hover:bg-secondary/5 transition-all">
                  Consultar por WhatsApp
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.imageEditorial}
                  alt="Formación en campo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-xl shadow-xl max-w-[220px]">
                <p className="text-primary font-[family-name:var(--font-headline)] font-black text-4xl mb-1">{p.stat}</p>
                <p className="text-on-surface-variant text-sm uppercase tracking-wider">{p.statLabel}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <span className="text-on-primary-container font-[family-name:var(--font-headline)] text-sm font-bold uppercase tracking-[0.2em]">
              Metodología Académica
            </span>
            <h2 className="font-[family-name:var(--font-headline)] font-extrabold text-on-surface text-4xl mt-4">
              ¿De qué se trata la especialización?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {p.areas.map((area, i) => (
              <div
                key={area.title}
                className={`bg-surface-container-lowest p-10 rounded-2xl shadow-sm border-t-4 ${
                  i % 2 === 0 ? "border-secondary" : "border-on-primary-container"
                }`}
              >
                <span className={`material-symbols-outlined text-4xl mb-6 block ${i % 2 === 0 ? "text-secondary" : "text-on-primary-container"}`}>
                  {area.icon}
                </span>
                <h3 className="font-[family-name:var(--font-headline)] font-bold text-xl mb-4 text-primary">
                  {area.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfil del Egresado */}
      <section className="py-24 bg-surface">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.imageProfile}
                alt="Perfil del egresado"
                className="rounded-[2.5rem] shadow-2xl border-8 border-surface-container w-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-headline)] font-extrabold text-primary text-4xl mb-12">
                Perfil del Egresado
              </h2>
              <div className="space-y-4">
                {p.competencias.map((comp) => (
                  <div
                    key={comp}
                    className="flex items-start gap-4 p-4 hover:bg-surface-container-low rounded-xl transition-colors"
                  >
                    <div className="bg-secondary-fixed text-on-secondary-container p-2 rounded-lg flex-shrink-0">
                      <span className="material-symbols-outlined">verified</span>
                    </div>
                    <p className="text-on-surface-variant font-medium pt-1">{comp}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ficha Técnica + CTA */}
      <section className="py-24 bg-secondary">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            {/* Left panel */}
            <div className="lg:w-1/3 bg-primary p-12 text-white">
              <h3 className="font-[family-name:var(--font-headline)] font-black text-3xl mb-8">
                Información Clave
              </h3>
              <div className="space-y-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-on-primary-container mb-2 font-bold">
                    Puntaje Docente
                  </p>
                  <p className="text-2xl font-bold">{p.puntaje}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-on-primary-container mb-2 font-bold">
                    Duración
                  </p>
                  <p className="text-2xl font-bold">{p.duration}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-on-primary-container mb-2 font-bold">
                    Horarios
                  </p>
                  <p className="text-2xl font-bold">{p.horarios}</p>
                </div>
              </div>
            </div>
            {/* Right panel */}
            <div className="lg:w-2/3 p-12 lg:p-20 bg-surface-container-lowest">
              <h4 className="font-[family-name:var(--font-headline)] font-extrabold text-primary text-3xl mb-6">
                Reserva tu vacante hoy mismo
              </h4>
              <p className="text-on-surface-variant text-lg mb-12 max-w-xl">
                Las inscripciones para el ciclo lectivo 2024 están abiertas con cupos limitados por
                cada región del país para garantizar la calidad pedagógica.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-on-primary-container text-white px-10 py-5 rounded-xl font-[family-name:var(--font-headline)] font-black text-lg hover:brightness-110 transition-all shadow-xl active:scale-95">
                  Inscribirme Ahora
                </button>
                <button className="bg-secondary-fixed text-on-secondary-container px-10 py-5 rounded-xl font-[family-name:var(--font-headline)] font-black text-lg hover:bg-secondary-container transition-all active:scale-95">
                  Recibir Información
                </button>
              </div>
              <p className="mt-8 text-on-surface-variant/60 text-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">info</span>
                Descuento del 20% para egresados de EAAM y socios activos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
