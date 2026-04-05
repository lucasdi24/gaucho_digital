import { HeroSection } from "@/components/ui/HeroSection";
import { readEgresados } from "@/lib/egresadosData";
import Image from "next/image";

export const dynamic = "force-dynamic";
export const metadata = { title: "Egresados" };

export default async function EgresadosPage() {
  const egresados = readEgresados();
  return (
    <>
      <HeroSection
        badge="Comunidad EAAM"
        title="Egresados"
        subtitle="Nuestra comunidad de guías profesionales activos en todo el mundo."
        imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDf1md15WwVGJFleS0A7HzQZflZBVCtNsUED5gp3x7aPO2C6VpICYdYAOcbNzrdEbX07KwYEHS1B8t7AMWYKnjSqsCCrOAFY80bUnE2P-u5H6t9kxnI2C11D_YlWb2bML0Q2c5A5NpHkA4TaFNo6N3On1bI4ulxtZj2oV1JE1rdOCR1nuSEYjDwXuous16Kqm_KofVRQhRfpUFCI2-Tl8jr22JgPYpooNGCXJX8uSV-9xcrusJocTqpH7Fnb5MFVoVxXcjFsoov"
        imageAlt="Grupo de egresados EAAM"
        gradient="secondary"
      />
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-[family-name:var(--font-headline)] text-4xl font-black text-secondary mb-8">+500 graduados activos</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-12">
            Nuestros egresados trabajan como guías profesionales en los principales destinos de montaña de Argentina, Chile, Perú, Nepal y Europa. La red de egresados EAAM es una de las comunidades profesionales más activas del sector.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { stat: "500+", label: "Guías activos" },
              { stat: "15+", label: "Países con presencia" },
              { stat: "95%", label: "Inserción laboral" },
            ].map((item) => (
              <div key={item.label} className="bg-surface-container-lowest p-8 rounded-xl">
                <p className="text-4xl font-black text-mountain-orange font-[family-name:var(--font-headline)]">{item.stat}</p>
                <p className="text-xs font-bold uppercase tracking-widest text-secondary mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {egresados.length > 0 ? (
          <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
            {egresados.map((egresado) => (
              <div key={egresado.id} className="flex flex-col items-center group">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-surface-container-high group-hover:border-on-primary-container transition-colors mb-6 bg-surface-container-lowest flex items-center justify-center">
                  {egresado.imageSrc ? (
                    <Image src={egresado.imageSrc} alt={egresado.name} width={160} height={160} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-4xl font-black text-on-surface-variant">{egresado.name.charAt(0)}</span>
                  )}
                </div>
                <h4 className="font-[family-name:var(--font-headline)] font-bold text-primary text-xl text-center">{egresado.name}</h4>
                <p className="text-sm text-on-surface-variant font-bold uppercase tracking-widest mt-1 text-center">{egresado.career}</p>
                {egresado.year && <p className="text-xs text-on-surface-variant/60 mt-0.5 text-center">{egresado.year}</p>}
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-on-surface-variant/50 text-lg">Los perfiles de egresados estarán disponibles próximamente.</p>
          </div>
        )}
      </section>
    </>
  );
}
