import Image from "next/image";
import Link from "next/link";
import { ProfesoresStaffCarousel } from "@/components/ProfesoresStaffCarousel";
import { readProfesores } from "@/lib/profesoresData";

const PREVIEW_COUNT = 4;

type Props = {
  variant?: "circular" | "cards";
};

export function ProfesoresStaffPreview({ variant = "circular" }: Props) {
  const profesores = readProfesores().slice(0, PREVIEW_COUNT);

  if (variant === "cards") {
    return (
      <>
        <div className="md:hidden max-w-[1440px] mx-auto">
          <ProfesoresStaffCarousel profesores={profesores} variant="cards" />
        </div>
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {profesores.map((p) => (
            <div
              key={p.id}
              className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-surface-container"
            >
              <div className="aspect-square overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 relative">
                <Image src={p.imageSrc} alt={p.name} fill className="object-cover" sizes="280px" />
              </div>
              <div className="p-6">
                <h4 className="font-[family-name:var(--font-headline)] text-xl font-bold text-primary mb-1">
                  {p.name}
                </h4>
                <p className="text-on-surface-variant text-sm">{p.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/profesores"
            className="cursor-pointer text-sm font-bold text-on-surface-variant hover:text-on-surface transition-colors uppercase tracking-widest border-b border-surface-container-highest pb-1"
          >
            Ver más
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="md:hidden max-w-[1440px] mx-auto">
        <ProfesoresStaffCarousel profesores={profesores} variant="circular" />
      </div>
      <div className="hidden md:flex max-w-[1440px] mx-auto flex-wrap justify-center gap-12">
        {profesores.map((prof) => (
          <div key={prof.id} className="flex flex-col items-center group">
            <div className="w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-surface-container-high group-hover:border-on-primary-container transition-colors mb-4 md:mb-6">
              <Image
                src={prof.imageSrc}
                alt={prof.name}
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-[family-name:var(--font-headline)] font-bold text-primary text-base md:text-xl text-center">
              {prof.name}
            </h4>
            <p className="text-xs md:text-sm text-on-surface-variant font-bold uppercase tracking-widest mt-1 text-center">
              {prof.role}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-10 md:mt-16 text-center">
        <Link
          href="/profesores"
          className="cursor-pointer bg-surface-container-high text-secondary px-8 py-3 rounded-lg font-bold hover:bg-secondary hover:text-white transition-all"
        >
          Ver más
        </Link>
      </div>
    </>
  );
}
