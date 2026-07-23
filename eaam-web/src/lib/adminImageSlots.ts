import { readCarreras } from "@/lib/carrerasData";
import { readCursos } from "@/lib/cursosData";
import { readEgresados } from "@/lib/egresadosData";
import { readPostitulos } from "@/lib/postitulosData";
import { PAGE_HERO_DEFAULTS } from "@/lib/pageHeroImages";
import { readProfesores } from "@/lib/profesoresData";

export type EntityType = "carrera" | "curso" | "postitulo" | "profesor" | "egresado";

export type ConfigImageSlot = {
  kind: "config";
  key: string;
  label: string;
  fallback: string;
};

export type EntityImageSlot = {
  kind: "entity";
  entity: EntityType;
  id: string;
  label: string;
  subtitle: string;
  imageSrc: string;
};

export type ImageSlot = ConfigImageSlot | EntityImageSlot;

export type ImageSlotGroup = {
  category: string;
  hint?: string;
  slots: ImageSlot[];
};

const STATIC_GROUPS: ImageSlotGroup[] = [
  {
    category: "Inicio",
    slots: [
      {
        kind: "config",
        key: "hero-home",
        label: "Hero Principal",
        fallback:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDrxzorrMmrPnZemIBB63uT5Af2dP8cIqzwra5swuTAMaxJ-FvRrMRfR6EE6y91IWbsg99-Tf1UEqAU152DZ-e152nfzQ7xi7XelpBKQsCEKRTd3kEBhar5Unbri-UK5JqP2Rs-fnr0DX2PUcV9UfdxncBsUFmRMhgQkpJklk_NPOZfxANwF0xK49maqDom8YsxcOoAKmyArShtq2UpifLVomHmC0UNJTC1J5BdYtaWlJxC_PRMEu6Qg1jzjsR8r8tA3EbiB3-i",
      },
      {
        kind: "config",
        key: "claim-home",
        label: "Sección Institucional",
        fallback:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBoIKdf9RxQJz8XwwhPiaSqY12GYqvKR1x4J2ERLX6Nidi4brk13nZYVHf4eYFQuQ6IxyegNYUahZynh1U1YMZid8LrgisFCgatrSqDXBOfa5xz1qwFCIEIByLvIPdpUq6w6PiQsaLG6N46Y77cgHBxvZfWQkTNPZ5kJ-3o6fS_QWVw5oQ67H0i0dBK-kT_RuUx4DlfPu9FHFgGcsPJD3rMflHoPIqu-uDH_dIi4m940UYo2OFPPTErO0dy2xq-xekJTGbAfeKF",
      },
      {
        kind: "config",
        key: "col-carreras",
        label: "Columna Carreras",
        fallback:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCSt2zzwYrLmBayq_aTjFT8_oUUUHacJvZ84j8LoMvCweF0p30bQzO26i1F4H4YaXxsyhOVnXcn4jlgdUE33DWW27rs6qvHz9XEfOeSJmMgr2kxzy52ocQhfgyhv_t4zEoyMbZD77CawYNgxozKC1SgLwiMGRZh8bDr0KC6gV9oIA2oX54YVr2XagNYWZLQw8vBwSqNIXetK4em_HlUKbVPDkmSRhKzZBVeDEPpeMbKroJbhLWaX1EEMazeIO8eqvu8kWOculHH",
      },
      {
        kind: "config",
        key: "col-postitulos",
        label: "Columna Postítulos",
        fallback:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBtQAEAeKwSfIZjA8ukYft5HsqD9Rrd2h0vowjvst8Okkb3ZzX6icB6eL_FZj7VGDHPvuH3naqRr4Zd_ba_FCwNkla0PdkyG1JZmu0PcDZRvTzsQQANtqDCxzytuWF9UD4g1uKuXFcwtTqvlr-BY3B8Q4s1PkunkKrbLuekx_LmLWGYMROQOA3HA6zEeKwzbIw1DVxrBgMTgwVoGf6qr5-csNJLGX_hKCC8wtl_q1IwLIazApUP9a_sfhDoXPq1IKtLZFLYpDFS",
      },
      {
        kind: "config",
        key: "col-cursos",
        label: "Columna Cursos",
        fallback: "/home/col-cursos.jpg",
      },
    ],
  },
  {
    category: "Heroes (páginas internas)",
    slots: [
      {
        kind: "config",
        key: "hero-carreras",
        label: "Hero Carreras",
        fallback: PAGE_HERO_DEFAULTS.carreras,
      },
      {
        kind: "config",
        key: "hero-cursos",
        label: "Hero Cursos",
        fallback: PAGE_HERO_DEFAULTS.cursos,
      },
      {
        kind: "config",
        key: "hero-nosotros",
        label: "Hero Nosotros",
        fallback: "/nosotros/hero.jpg",
      },
      {
        kind: "config",
        key: "hero-profesores",
        label: "Hero Profesores",
        fallback: PAGE_HERO_DEFAULTS.profesores,
      },
      {
        kind: "config",
        key: "hero-egresados",
        label: "Hero Egresados",
        fallback: PAGE_HERO_DEFAULTS.egresados,
      },
      {
        kind: "config",
        key: "hero-beneficios",
        label: "Hero Beneficios",
        fallback: PAGE_HERO_DEFAULTS.beneficios,
      },
      {
        kind: "config",
        key: "hero-postitulos",
        label: "Hero Postítulos",
        fallback: PAGE_HERO_DEFAULTS.postitulos,
      },
    ],
  },
];

function entitySlots(
  entity: EntityType,
  items: { id: string; label: string; subtitle: string; imageSrc: string }[]
): ImageSlot[] {
  return items.map((item) => ({
    kind: "entity" as const,
    entity,
    id: item.id,
    label: item.label,
    subtitle: item.subtitle,
    imageSrc: item.imageSrc || "",
  }));
}

export function getAdminImageSlotGroups(): ImageSlotGroup[] {
  const carreras = readCarreras().map((c) => ({
    id: c.id,
    label: c.title,
    subtitle: c.slug,
    imageSrc: c.imageSrc,
  }));

  const cursos = readCursos().map((c) => ({
    id: c.id,
    label: c.title,
    subtitle: c.visible ? c.slug : `${c.slug} · oculto`,
    imageSrc: c.imageSrc,
  }));

  const postitulos = readPostitulos().map((p) => ({
    id: p.id,
    label: p.title,
    subtitle: p.slug,
    imageSrc: p.imageSrc,
  }));

  const profesores = readProfesores().map((p) => ({
    id: p.id,
    label: p.name,
    subtitle: p.role,
    imageSrc: p.imageSrc,
  }));

  const egresados = readEgresados().map((e) => ({
    id: e.id,
    label: e.name,
    subtitle: `${e.career}${e.year ? ` · ${e.year}` : ""}`,
    imageSrc: e.imageSrc,
  }));

  return [
    ...STATIC_GROUPS,
    {
      category: "Carreras",
      hint: "Imágenes de cada ficha de carrera (datos en carreras-data.json).",
      slots: entitySlots("carrera", carreras),
    },
    {
      category: "Cursos",
      hint: "Imágenes de cada curso. Para editar textos, usá la pestaña Cursos.",
      slots: entitySlots("curso", cursos),
    },
    {
      category: "Postítulos",
      slots: entitySlots("postitulo", postitulos),
    },
    {
      category: "Profesores",
      hint: "Fotos del equipo docente. Para editar nombre y rol, usá la pestaña Profesores.",
      slots: entitySlots("profesor", profesores),
    },
    {
      category: "Egresados",
      slots: entitySlots("egresado", egresados),
    },
  ];
}
