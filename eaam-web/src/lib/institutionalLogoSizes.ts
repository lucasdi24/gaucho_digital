/**
 * Tamaños de los logos del header/footer.
 * Editá las clases de cada logo por separado (navbar = barra desktop, navbarMobile = barra móvil, footer = pie, mobile = menú Ver más).
 *
 * Tips:
 * - Logos horizontales (Ministerio): usá h- + max-w-
 * - Logos circulares (APN): usá h- y w- con el mismo valor (ej. h-14 w-14)
 */

/** Rutas en `public/logos/` — los nombres de archivo deben coincidir con la institución. */
export const INSTITUTIONAL_LOGO_PATHS = {
  eaam: "/logos/eaam-mark.png",
  /** Logo blanco para el footer (fondo oscuro) */
  eaamWhite: "/logos/eaam-mark-white.png",
  ministerio: "/logos/ministerio-educacion.png",
  parquesNacionales: "/logos/parques-nacionales.png",
} as const;

export const LOGO_SIZE_CLASSES = {
  eaam: {
    /** Header móvil con los 3 logos en fila */
    navbarMobile: "h-10 w-auto max-w-[min(115px,32vw)]",
    navbar: "h-12 sm:h-14 md:h-[3.75rem] w-auto max-w-[min(260px,48vw)]",
    footer: "h-16 md:h-[4.5rem] w-auto max-w-[min(320px,85vw)]",
    mobile: "h-12 w-auto max-w-[220px]",
    adminLogin: "h-16 w-auto max-w-[280px]",
  },
  /** Logo ancho (Ministerio de Educación) */
  ministerio: {
    navbarMobile: "h-11 w-auto min-w-[115px] max-w-[min(175px,38vw)]",
    navbar: "h-11 w-auto min-w-[150px] max-w-[220px]",
    footer: "h-12 w-auto min-w-[160px] max-w-[240px]",
    mobile: "h-10 w-auto min-w-[140px] max-w-[200px]",
  },
  /** Logo circular (Parques Nacionales / APN) */
  parquesNacionales: {
    navbarMobile: "h-12 w-12",
    navbar: "h-16 w-16",
    footer: "h-[4.5rem] w-[4.5rem]",
    mobile: "h-14 w-14",
  },
} as const;

export type LogoSizeVariant = "navbar" | "navbarMobile" | "footer" | "mobile";

export function partnerLogoClass(
  logo: keyof typeof LOGO_SIZE_CLASSES,
  variant: LogoSizeVariant
): string {
  if (logo === "eaam") return LOGO_SIZE_CLASSES.eaam[variant];
  const base = "object-contain mix-blend-multiply shrink-0";
  const size = LOGO_SIZE_CLASSES[logo][variant];
  return `${size} ${base}`;
}

export function eaamLogoClass(variant: LogoSizeVariant | "adminLogin"): string {
  return `${LOGO_SIZE_CLASSES.eaam[variant]} object-contain object-left`;
}
