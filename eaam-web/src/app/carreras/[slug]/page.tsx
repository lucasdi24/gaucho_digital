import { notFound } from "next/navigation";
import { carreras } from "@/data/carreras";
import { HeroSection } from "@/components/ui/HeroSection";
import Link from "next/link";

export function generateStaticParams() {
  return carreras.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const carrera = carreras.find((c) => c.slug === slug);
    return { title: carrera?.title ?? "Carrera" };
  });
}

export default async function CarreraDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const carrera = carreras.find((c) => c.slug === slug);
  if (!carrera) notFound();

  return (
    <>
      <HeroSection
        badge={`${carrera.modality} · ${carrera.location}`}
        title={carrera.title}
        subtitle={carrera.description}
        imageSrc={carrera.imageSrc}
        imageAlt={carrera.imageAlt}
        gradient="primary-container"
      />

      <section className="py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: "schedule", label: "Duración", value: carrera.duration },
              { icon: "location_on", label: "Modalidad", value: carrera.modality },
              { icon: "school", label: "Título", value: "Oficial con validez nacional" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-surface-container-lowest p-6 rounded-xl text-center"
              >
                <span className="material-symbols-outlined text-mountain-orange text-3xl mb-2">
                  {item.icon}
                </span>
                <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-1">
                  {item.label}
                </p>
                <p className="text-lg font-bold text-on-surface font-[family-name:var(--font-headline)]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="prose prose-lg max-w-none mb-16">
            <h2 className="font-[family-name:var(--font-headline)] text-3xl font-black text-secondary">
              Sobre esta carrera
            </h2>
            <p className="text-on-surface-variant leading-relaxed">{carrera.longDescription}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#"
              className="flex-1 py-4 px-8 rounded-lg bg-mountain-orange text-white font-bold text-center shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 font-[family-name:var(--font-headline)]"
            >
              Inscribirme Ahora
            </Link>
            <Link
              href="#"
              className="flex-1 py-4 px-8 rounded-lg border-2 border-secondary/20 text-secondary font-bold text-center hover:bg-secondary hover:text-white transition-all duration-300 font-[family-name:var(--font-headline)]"
            >
              Recibir Información
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
