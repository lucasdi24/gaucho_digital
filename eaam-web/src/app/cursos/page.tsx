import { HeroSection } from "@/components/ui/HeroSection";
import { cursos } from "@/data/cursos";
import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Cursos" };

export default function CursosPage() {
  return (
    <>
      <HeroSection
        badge="Formación Continua"
        title="Cursos"
        subtitle="Capacitaciones cortas y workshops específicos para entusiastas y profesionales."
        imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAjGCPV3OcuG633-8G9XHeXtlM8UIHwO7unbmflUh-ySLJxIN1QeJ6XbKv3mgCnaKpNlzlqMIFHseBKVJ2HPwzExs_UiwSqNC3FSivbDiteXH1ooTEF0Yk9DSk8HHRLO4lXbUSwj-U7yLhZilMn1867XN5BnphC6VjIx7IaM27EZ9xF5h3TllD81149Hd6nC5c_Mv3ZFBN15w-OXL4gbtyL5c0siStQSvBI2nNxdcp6YYyyMDx9j3GLTy_-w4N7LfbCFIxOOQXQ"
        imageAlt="Aula de montaña con estudiantes"
      />
      <section className="container mx-auto px-6 md:px-12 py-24 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cursos.map((curso) => (
            <div key={curso.slug} className="bg-surface-container-lowest rounded-xl overflow-hidden group hover:shadow-2xl transition-all duration-500">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={curso.imageSrc} alt={curso.imageAlt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute top-4 left-4">
                  <span className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-xs font-bold">{curso.category}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-[family-name:var(--font-headline)] font-bold text-on-surface mb-2">{curso.title}</h3>
                <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">{curso.description}</p>
                <div className="flex items-center gap-4 text-xs font-bold text-secondary uppercase tracking-widest mb-6">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> {curso.duration}</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">location_on</span> {curso.modality}</span>
                </div>
                <div className="flex gap-3">
                  <Link href={`/cursos/${curso.slug}`} className="flex-1 py-2.5 px-4 rounded-lg border-2 border-secondary/20 text-secondary font-bold text-sm text-center hover:bg-secondary hover:text-white transition-all">Más info</Link>
                  <Link href="#" className="flex-1 py-2.5 px-4 rounded-lg bg-mountain-orange text-white font-bold text-sm text-center hover:shadow-lg transition-all">Consultar</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
