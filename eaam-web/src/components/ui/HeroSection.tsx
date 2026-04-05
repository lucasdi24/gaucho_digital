import Image from "next/image";

interface HeroSectionProps {
  badge?: string;
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  gradient?: "primary" | "secondary" | "secondarySoft" | "primary-container";
  height?: string;
  children?: React.ReactNode;
}

const gradientMap = {
  primary: "from-primary/80 to-transparent",
  secondary: "from-secondary/80 to-transparent",
  secondarySoft: "from-secondary/60 to-transparent",
  "primary-container": "from-primary-container/80 to-transparent",
};

export function HeroSection({
  badge,
  title,
  subtitle,
  imageSrc,
  imageAlt,
  gradient = "secondary",
  height = "h-[716px]",
  children,
}: HeroSectionProps) {
  return (
    <header className={`relative ${height} w-full overflow-hidden flex items-center justify-start`}>
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${gradientMap[gradient]}`} />
      </div>
      <div className="container mx-auto px-6 md:px-12 relative z-10 pt-16">
        <div className="max-w-2xl">
          {badge && (
            <span className="inline-block py-1 px-3 bg-mountain-orange text-white text-xs font-bold tracking-widest uppercase mb-4 rounded-sm">
              {badge}
            </span>
          )}
          <h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter mb-6 text-shadow-md font-[family-name:var(--font-headline)]">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-slate-100 font-medium leading-relaxed max-w-lg">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </header>
  );
}
