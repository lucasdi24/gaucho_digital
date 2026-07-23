/** Rutas por defecto de los banners (hero) de páginas internas. */
export const PAGE_HERO_DEFAULTS = {
  carreras: "/carreras/hero.jpg",
  cursos: "/cursos/hero.jpg",
  profesores: "/profesores/hero.png",
  egresados: "/egresados/hero.png",
  beneficios: "/beneficios/hero.png",
  postitulos: "/postitulos/hero.png",
} as const;

export type PageHeroKey = keyof typeof PAGE_HERO_DEFAULTS;

export function pageHeroConfigKey(page: PageHeroKey): string {
  return `hero-${page}`;
}
