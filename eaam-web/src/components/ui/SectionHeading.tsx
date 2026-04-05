interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({ badge, title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {badge && (
        <span className="font-[family-name:var(--font-headline)] font-bold text-on-primary-container tracking-widest uppercase text-sm block mb-2">
          {badge}
        </span>
      )}
      <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-black text-secondary mb-4">
        {title}
      </h2>
      {!centered && <div className="h-1 w-20 bg-mountain-orange mb-6" />}
      {subtitle && (
        <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
