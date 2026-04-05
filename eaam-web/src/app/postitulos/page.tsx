import { HeroSection } from "@/components/ui/HeroSection";
import Link from "next/link";

export const metadata = { title: "Postítulos" };

const postitulos = [
  { slug: "actividades-naturaleza", title: "Postítulo en Actividades y Deportes en la Naturaleza", duration: "1 Año", modality: "Mixto", description: "Especialización para guías graduados en gestión de riesgos, dinámicas de grupo y educación ambiental." },
  { slug: "rescate-tecnico", title: "Rescate Técnico con Cuerdas", duration: "6 Meses", modality: "Híbrido", description: "Especialización avanzada en sistemas de rescate complejos para entornos de montaña vertical." },
  { slug: "gestion-riesgo-nieve", title: "Gestión del Riesgo en Nieve", duration: "4 Meses", modality: "Virtual", description: "Protocolos de seguridad y evaluación de avalanchas para profesionales del invierno." },
];

export default function PostitulosPage() {
  return (
    <>
      <HeroSection
        badge="Especializaciones"
        title="Postítulos"
        subtitle="Especializaciones técnicas para guías graduados que buscan el siguiente nivel."
        imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBtQAEAeKwSfIZjA8ukYft5HsqD9Rrd2h0vowjvst8Okkb3ZzX6icB6eL_FZj7VGDHPvuH3naqRr4Zd_ba_FCwNkla0PdkyG1JZmu0PcDZRvTzsQQANtqDCxzytuWF9UD4g1uKuXFcwtTqvlr-BY3B8Q4s1PkunkKrbLuekx_LmLWGYMROQOA3HA6zEeKwzbIw1DVxrBgMTgwVoGf6qr5-csNJLGX_hKCC8wtl_q1IwLIazApUP9a_sfhDoXPq1IKtLZFLYpDFS"
        imageAlt="Rescate técnico en montaña"
      />
      <section className="container mx-auto px-6 md:px-12 py-24 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {postitulos.map((p) => (
            <div key={p.slug} className="bg-surface-container-lowest p-8 rounded-xl group hover:shadow-2xl transition-all duration-500 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-surface-container-high px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest text-secondary">Postítulo</span>
                  <span className="material-symbols-outlined text-outline group-hover:text-on-primary-container transition-colors">arrow_outward</span>
                </div>
                <h3 className="text-2xl font-[family-name:var(--font-headline)] font-bold text-primary mb-4 leading-tight">{p.title}</h3>
                <p className="text-on-surface-variant text-sm mb-8">{p.description}</p>
              </div>
              <div className="flex items-center gap-4 text-xs font-bold text-secondary uppercase tracking-widest">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> {p.duration}</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">location_on</span> {p.modality}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
