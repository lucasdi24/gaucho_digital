import { HeroSection } from "@/components/ui/HeroSection";
import Image from "next/image";

export const metadata = { title: "Nosotros" };

export default function NosotrosPage() {
  return (
    <>
      <HeroSection
        badge="Nuestra Historia"
        title="La Escuela"
        subtitle="Más de 15 años formando a los mejores profesionales de montaña de Argentina y Latinoamérica."
        imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBoIKdf9RxQJz8XwwhPiaSqY12GYqvKR1x4J2ERLX6Nidi4brk13nZYVHf4eYFQuQ6IxyegNYUahZynh1U1YMZid8LrgisFCgatrSqDXBOfa5xz1qwFCIEIByLvIPdpUq6w6PiQsaLG6N46Y77cgHBxvZfWQkTNPZ5kJ-3o6fS_QWVw5oQ67H0i0dBK-kT_RuUx4DlfPu9FHFgGcsPJD3rMflHoPIqu-uDH_dIi4m940UYo2OFPPTErO0dy2xq-xekJTGbAfeKF"
        imageAlt="Expedición en los Andes"
        gradient="secondary"
      />

      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-[family-name:var(--font-headline)] text-4xl font-black text-secondary mb-8">Misión & Visión</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
              La Escuela Argentina de Artes y Oficios de la Montaña (EAAM) es una institución educativa incorporada a la enseñanza oficial, dedicada a la formación de profesionales en actividades de montaña.
            </p>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
              Nuestra misión es formar guías de montaña y profesionales del turismo aventura con los más altos estándares técnicos, éticos y de seguridad, contribuyendo al desarrollo sustentable de las actividades de montaña en Argentina.
            </p>
            <div className="flex items-center gap-8 mt-8">
              <div className="text-center">
                <p className="text-4xl font-black text-mountain-orange font-[family-name:var(--font-headline)]">A-1530</p>
                <p className="text-xs font-bold uppercase tracking-widest text-secondary mt-1">Resolución oficial</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-black text-mountain-orange font-[family-name:var(--font-headline)]">UIAGM</p>
                <p className="text-xs font-bold uppercase tracking-widest text-secondary mt-1">Estándar internacional</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRoUI5VlUeMm0VkSIYCegHc8bniGYNbg3hYkE211t1x9a1i3wsQVzhl9O34tMpcuPh0ZdX4rwrVwFv7H_5Y8ntx9I1emQYPTmpqxJEt3ZOuGwctDlMIzAlJ-gRDOA2oeVw70KN4_mzdsRWkEt5NNtyFdiDakZSyczB13V9QIOswBw5mZ7OlUvk_bMVA1jJ9ChFbVeI_CUfJcZTlVY8kMwNmCPgVCyX8boSNC_En3eCv4me9sRDGg0XdvwG_ytu_xX5WmT9wcJn"
              alt="Equipo EAAM en expedición"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      </section>
    </>
  );
}
