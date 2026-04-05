export interface Curso {
  slug: string;
  title: string;
  duration: string;
  modality: string;
  category: "Presencial" | "Semi-Presencial" | "Intensivo";
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export const cursos: Curso[] = [
  {
    slug: "curso-integral-de-montanismo",
    title: "Curso Integral de Montañismo",
    duration: "120 Horas",
    modality: "Presencial",
    category: "Presencial",
    description:
      "Formación completa en técnicas de montañismo para entusiastas que quieren dar el siguiente paso.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCSt2zzwYrLmBayq_aTjFT8_oUUUHacJvZ84j8LoMvCweF0p30bQzO26i1F4H4YaXxsyhOVnXcn4jlgdUE33DWW27rs6qvHz9XEfOeSJmMgr2kxzy52ocQhfgyhv_t4zEoyMbZD77CawYNgxozKC1SgLwiMGRZh8bDr0KC6gV9oIA2oX54YVr2XagNYWZLQw8vBwSqNIXetK4em_HlUKbVPDkmSRhKzZBVeDEPpeMbKroJbhLWaX1EEMazeIO8eqvu8kWOculHH",
    imageAlt: "Montañista en pared de roca técnica",
  },
  {
    slug: "primeros-auxilios-wfa",
    title: "Primeros Auxilios WFA",
    duration: "80 Horas",
    modality: "Intensivo",
    category: "Intensivo",
    description:
      "Protocolos internacionales para la atención de emergencias en zonas remotas y agrestes.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAjGCPV3OcuG633-8G9XHeXtlM8UIHwO7unbmflUh-ySLJxIN1QeJ6XbKv3mgCnaKpNlzlqMIFHseBKVJ2HPwzExs_UiwSqNC3FSivbDiteXH1ooTEF0Yk9DSk8HHRLO4lXbUSwj-U7yLhZilMn1867XN5BnphC6VjIx7IaM27EZ9xF5h3TllD81149Hd6nC5c_Mv3ZFBN15w-OXL4gbtyL5c0siStQSvBI2nNxdcp6YYyyMDx9j3GLTy_-w4N7LfbCFIxOOQXQ",
    imageAlt: "Clase de primeros auxilios en entorno de montaña",
  },
  {
    slug: "orientacion-y-cartografia",
    title: "Orientación y Cartografía",
    duration: "40 Horas",
    modality: "Híbrido",
    category: "Semi-Presencial",
    description:
      "Domina las herramientas técnicas de navegación terrestre en entornos sin señal.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBtQAEAeKwSfIZjA8ukYft5HsqD9Rrd2h0vowjvst8Okkb3ZzX6icB6eL_FZj7VGDHPvuH3naqRr4Zd_ba_FCwNkla0PdkyG1JZmu0PcDZRvTzsQQANtqDCxzytuWF9UD4g1uKuXFcwtTqvlr-BY3B8Q4s1PkunkKrbLuekx_LmLWGYMROQOA3HA6zEeKwzbIw1DVxrBgMTgwVoGf6qr5-csNJLGX_hKCC8wtl_q1IwLIazApUP9a_sfhDoXPq1IKtLZFLYpDFS",
    imageAlt: "Estudiantes usando mapas topográficos en montaña",
  },
];
