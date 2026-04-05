import { HeroSection } from "@/components/ui/HeroSection";

export const metadata = { title: "Beneficios" };

const beneficios = [
  { discount: "40% OFF", title: "Equipamiento Técnico", desc: "Descuentos en marcas como Ferrino, Garmont y Petzl para alumnos activos." },
  { discount: "25% OFF", title: "Seguros de Montaña", desc: "Cobertura especializada para actividades de montaña y rescate." },
  { discount: "10% OFF", title: "Salidas de Práctica", desc: "Descuentos en excursiones y salidas de campo organizadas por la escuela." },
  { discount: "20% OFF", title: "Cursos Complementarios", desc: "Precio especial en workshops y capacitaciones cortas para alumnos." },
  { discount: "15% OFF", title: "Alojamiento en Refugios", desc: "Convenios con refugios de montaña en las principales rutas del país." },
  { discount: "30% OFF", title: "Bibliografía Técnica", desc: "Descuentos en material de estudio y publicaciones especializadas." },
];

export default function BeneficiosPage() {
  return (
    <>
      <HeroSection
        badge="Comunidad EAAM"
        title="Beneficios"
        subtitle="Descuentos exclusivos y convenios para alumnos y egresados de la EAAM."
        imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCVdJX_aUVxonzEmGlU9j1Vur7v2YIRZbz-pJE5cIofzorvFdo_hQahgBeSi645vf831SgAMBPp4bfLySSsmqkTtslIgmraxKuz5wqJiWZ4rQ4fz1hM14QBORyoVhjxEcsy6ToANn4qfXp0VhSGJaR-AHLGTcETnzWKaFq7q5wg2YwcPT3ohW5GlhwZYrQkLNqy67dwtE_GLAAF2cZSY949gLS4j9qh0p-F4-Qnd53Drs1Yki7LX3ZoFmaQiqXrJPUkXX0TM9L_"
        imageAlt="Equipamiento de montaña"
        gradient="primary-container"
      />
      <section className="container mx-auto px-6 md:px-12 py-24 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beneficios.map((b) => (
            <div key={b.title} className="bg-surface-container-lowest p-8 rounded-xl hover:shadow-2xl transition-all duration-500">
              <span className="text-3xl font-black text-mountain-orange font-[family-name:var(--font-headline)]">{b.discount}</span>
              <h3 className="text-xl font-[family-name:var(--font-headline)] font-bold text-on-surface mt-4 mb-2">{b.title}</h3>
              <p className="text-on-surface-variant text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
