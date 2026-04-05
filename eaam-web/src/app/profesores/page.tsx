import { readProfesores } from "@/lib/profesoresData";
import { HeroSection } from "@/components/ui/HeroSection";
import Image from "next/image";

export const dynamic = "force-dynamic";
export const metadata = { title: "Profesores" };

export default async function ProfesoresPage() {
  const profesores = readProfesores();
  return (
    <>
      <HeroSection
        badge="Staff Académico"
        title="Profesores"
        subtitle="Guías UIAGM y profesionales con décadas de experiencia internacional en montañismo y rescate."
        imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDRoUI5VlUeMm0VkSIYCegHc8bniGYNbg3hYkE211t1x9a1i3wsQVzhl9O34tMpcuPh0ZdX4rwrVwFv7H_5Y8ntx9I1emQYPTmpqxJEt3ZOuGwctDlMIzAlJ-gRDOA2oeVw70KN4_mzdsRWkEt5NNtyFdiDakZSyczB13V9QIOswBw5mZ7OlUvk_bMVA1jJ9ChFbVeI_CUfJcZTlVY8kMwNmCPgVCyX8boSNC_En3eCv4me9sRDGg0XdvwG_ytu_xX5WmT9wcJn"
        imageAlt="Equipo docente EAAM"
        gradient="primary"
      />
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          {profesores.map((prof) => (
            <div key={prof.id} className="flex flex-col items-center group">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-surface-container-high group-hover:border-on-primary-container transition-colors mb-6">
                <Image src={prof.imageSrc} alt={prof.name} width={160} height={160} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-[family-name:var(--font-headline)] font-bold text-primary text-xl text-center">{prof.name}</h4>
              <p className="text-sm text-on-surface-variant font-bold uppercase tracking-widest mt-1 text-center">{prof.role}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
