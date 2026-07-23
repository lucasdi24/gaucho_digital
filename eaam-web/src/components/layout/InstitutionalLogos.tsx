import Link from "next/link";
import {
  INSTITUTIONAL_LOGO_PATHS,
  eaamLogoClass,
  partnerLogoClass,
} from "@/lib/institutionalLogoSizes";

type Variant = "navbar" | "footer";

function LogoImg({
  src,
  alt,
  className,
  title,
  priority,
}: {
  src: string;
  alt: string;
  className: string;
  title?: string;
  priority?: boolean;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      title={title}
      className={className}
      decoding="async"
      fetchPriority={priority ? "high" : undefined}
    />
  );
}

function EaamBrand({ variant }: { variant: Variant }) {
  const isNavbar = variant === "navbar";

  return (
    <Link
      href="/"
      className={`flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mountain-orange focus-visible:ring-offset-2 rounded-lg ${
        isNavbar ? "" : "hover:opacity-90 transition-opacity"
      }`}
      aria-label="EAAM — Escuela Argentina de Actividades de Montaña"
    >
      {isNavbar ? (
        <>
          <LogoImg
            src={INSTITUTIONAL_LOGO_PATHS.eaam}
            alt="EAAM — Escuela Argentina de Actividades de Montaña"
            priority
            className={`${eaamLogoClass("navbarMobile")} lg:hidden`}
          />
          <LogoImg
            src={INSTITUTIONAL_LOGO_PATHS.eaam}
            alt="EAAM — Escuela Argentina de Actividades de Montaña"
            priority
            className={`${eaamLogoClass("navbar")} hidden lg:block`}
          />
        </>
      ) : (
        <LogoImg
          src={INSTITUTIONAL_LOGO_PATHS.eaamWhite}
          alt="EAAM — Escuela Argentina de Actividades de Montaña"
          className={eaamLogoClass("footer")}
        />
      )}
    </Link>
  );
}

export function InstitutionalLogos({ variant }: { variant: Variant }) {
  const isNavbar = variant === "navbar";

  return (
    <div
      className={`flex items-center shrink-0 min-w-0 ${isNavbar ? "gap-3 lg:gap-4" : ""}`}
    >
      <EaamBrand variant={variant} />

      {isNavbar && (
      <div
        className="flex items-center shrink-0 gap-2 pl-2 border-l border-outline-variant/25 lg:gap-4 lg:pl-4"
        aria-label="Instituciones asociadas"
      >
          <LogoImg
            src={INSTITUTIONAL_LOGO_PATHS.ministerio}
            alt="Ministerio de Educación"
            title="Ministerio de Educación de la Nación"
            className={`${partnerLogoClass("ministerio", "navbarMobile")} lg:hidden`}
          />
          <LogoImg
            src={INSTITUTIONAL_LOGO_PATHS.parquesNacionales}
            alt="Administración de Parques Nacionales Argentina"
            title="Parques Nacionales Argentina"
            className={`${partnerLogoClass("parquesNacionales", "navbarMobile")} lg:hidden`}
          />
          <LogoImg
            src={INSTITUTIONAL_LOGO_PATHS.ministerio}
            alt="Ministerio de Educación"
            title="Ministerio de Educación de la Nación"
            className={`${partnerLogoClass("ministerio", "navbar")} hidden lg:block`}
          />
          <LogoImg
            src={INSTITUTIONAL_LOGO_PATHS.parquesNacionales}
            alt="Administración de Parques Nacionales Argentina"
            title="Parques Nacionales Argentina"
            className={`${partnerLogoClass("parquesNacionales", "navbar")} hidden lg:block`}
          />
      </div>
      )}
    </div>
  );
}
