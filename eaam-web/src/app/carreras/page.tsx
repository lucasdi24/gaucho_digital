import { HeroSection } from "@/components/ui/HeroSection";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { readCarreras } from "@/lib/carrerasData";
import Image from "next/image";

export const dynamic = "force-dynamic";
export const metadata = { title: "Carreras" };

export default function CarrerasPage() {
  const carreras = readCarreras().filter((c) => c.visible);

  return (
    <>
      <HeroSection
        badge="Academia de Altura"
        title="Carreras"
        subtitle="Formate profesionalmente en lo que más te gusta con el respaldo de la institución líder en montaña."
        imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDRoUI5VlUeMm0VkSIYCegHc8bniGYNbg3hYkE211t1x9a1i3wsQVzhl9O34tMpcuPh0ZdX4rwrVwFv7H_5Y8ntx9I1emQYPTmpqxJEt3ZOuGwctDlMIzAlJ-gRDOA2oeVw70KN4_mzdsRWkEt5NNtyFdiDakZSyczB13V9QIOswBw5mZ7OlUvk_bMVA1jJ9ChFbVeI_CUfJcZTlVY8kMwNmCPgVCyX8boSNC_En3eCv4me9sRDGg0XdvwG_ytu_xX5WmT9wcJn"
        imageAlt="Grupo de montañistas ascendiendo una ladera nevada en los Andes"
      />

      <main className="container mx-auto px-6 md:px-12 py-24 -mt-20 relative z-20">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <SectionHeading
            title="Nuestra Oferta Académica"
            subtitle="Programas diseñados para la excelencia técnica y la seguridad en terrenos agrestes. Convertí tu pasión en una carrera con validez nacional e internacional."
          />
          <div className="hidden md:block">
            <p className="text-sm font-bold text-secondary uppercase tracking-[0.2em]">
              Desplazate para explorar
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {carreras.map((carrera, i) => (
            <ProgramCard
              key={carrera.id}
              title={carrera.title}
              imageSrc={carrera.imageSrc}
              imageAlt={`${carrera.title} — ${carrera.modalidad}`}
              duration={carrera.duracion}
              modality={`${carrera.modalidad} (${carrera.location})`}
              href={`/carreras/${carrera.slug}`}
              offset={i % 2 === 1}
            />
          ))}
        </div>
      </main>

      {/* Quality CTA */}
      <section className="py-24 bg-surface-container-low overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="bg-white p-12 md:p-20 rounded-3xl shadow-sm flex flex-col md:flex-row items-center gap-16 relative">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-black text-on-surface leading-tight mb-8 font-[family-name:var(--font-headline)]">
                Nuestra excelencia académica en la cumbre
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                Contamos con un equipo de docentes certificados internacionalmente por UIAGM y UIMLA. No solo enseñamos técnica, formamos líderes capaces de gestionar riesgos en los entornos más desafiantes del planeta.
              </p>
              <div className="flex items-center gap-12">
                {[
                  { value: "15+", label: "Años de trayectoria" },
                  { value: "500+", label: "Graduados activos" },
                  { value: "UIAGM", label: "Certificación" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-4xl font-black text-mountain-orange">{stat.value}</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-secondary mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full h-80 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl rotate-2">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy29UAKAK8l1UWBSz8OKCLbig8C7WuTeexdTvqt7kn9dtoHJcMk46UOFG3GU-RrudRbL4WflJpDx88XGxq3Zeug1TS4KYj4Bmdq05_kjZxVfXhJgowvtgXlHzuTfvSnUZ7iOzBGW4FQrTDoslKcdDGZKiv_H9Otlt0UazAOPUbky7Kszvogchs0XWNqBgKDvGPKGQtg1rwJ2QQjTO1RCW4j0r_ndZaaJ2JoRcs2NZJehtKig95xGaJA-K-UyQgyzdr97f08NiU"
                alt="Vista panorámica de cumbres nevadas"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
