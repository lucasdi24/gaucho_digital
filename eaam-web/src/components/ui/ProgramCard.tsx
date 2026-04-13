import Image from "next/image";
import Link from "next/link";

interface ProgramCardProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  duration: string;
  modality: string;
  href: string;
  offset?: boolean;
}

export function ProgramCard({
  title,
  imageSrc,
  imageAlt,
  duration,
  modality,
  href,
  offset = false,
}: ProgramCardProps) {
  return (
    <div className={`flex flex-col group ${offset ? "md:mt-12" : ""}`}>
      <div className="relative rounded-xl overflow-hidden mb-5 md:mb-8 aspect-[16/10] bg-surface-container-high shadow-lg transition-transform duration-500 group-hover:-translate-y-2">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute top-6 left-6 flex flex-col gap-2">
          <span className="bg-tertiary-container text-on-tertiary-container px-4 py-1.5 rounded-full text-xs font-bold shadow-sm flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">schedule</span>{" "}
            {duration}
          </span>
          <span className="bg-white/90 backdrop-blur-sm text-on-surface px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">
            {modality}
          </span>
        </div>
      </div>
      <div className="px-2">
        <h3 className="text-2xl md:text-3xl font-extrabold text-on-surface mb-4 md:mb-6 group-hover:text-mountain-orange transition-colors font-[family-name:var(--font-headline)]">
          {title}
        </h3>
        <div className="flex gap-4">
          <Link
            href={href}
            className="flex-1 py-3 px-6 rounded-lg border-2 border-secondary/20 text-secondary font-bold text-sm text-center hover:bg-secondary hover:text-white transition-all duration-300"
          >
            Más información
          </Link>
          <Link
            href="#"
            className="flex-1 py-3 px-6 rounded-lg bg-mountain-orange text-white font-bold text-sm text-center shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            Consultar
          </Link>
        </div>
      </div>
    </div>
  );
}
