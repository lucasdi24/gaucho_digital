export interface Carrera {
  slug: string;
  title: string;
  duration: string;
  modality: string;
  location: string;
  description: string;
  longDescription: string;
  imageSrc: string;
  imageAlt: string;
}

export const carreras: Carrera[] = [
  {
    slug: "guia-de-montana",
    title: "Guía de Montaña",
    duration: "2 años y medio",
    modality: "Presencial",
    location: "C.A.B.A.",
    description:
      "Formación integral para liderar ascensos técnicos en alta montaña con certificación UIAGM.",
    longDescription:
      "La carrera de Guía de Montaña de la EAAM es la formación más completa del país. Con más de 1300 horas de capacitación teórica y práctica, nuestros egresados están preparados para liderar expediciones en los terrenos más exigentes del planeta. El plan de estudios incluye técnicas de escalada en roca, hielo y mixto, gestión del riesgo en montaña, primeros auxilios avanzados, meteorología y orientación.",
    imageSrc: "/carreras/guia-de-montana.jpg",
    imageAlt: "Grupo de guías en travesía por la nieve en alta montaña",
  },
  {
    slug: "guia-de-trekking",
    title: "Guía de Trekking & Turismo Aventura",
    duration: "2 años y medio",
    modality: "Mixto",
    location: "Todo el país",
    description:
      "Capacitación profesional para liderar travesías y actividades de turismo aventura.",
    longDescription:
      "La carrera de Guía de Trekking y Turismo Aventura forma profesionales capaces de diseñar, organizar y liderar travesías en entornos naturales. El programa combina formación teórica virtual con intensivas prácticas presenciales en los principales circuitos de trekking del país.",
    imageSrc: "/carreras/guia-de-trekking.jpg",
    imageAlt: "Grupo de guías en trekking por la cordillera",
  },
  {
    slug: "guia-de-trekking-presencial",
    title: "Guía de Trekking & Turismo Aventura",
    duration: "2 años y medio",
    modality: "Presencial",
    location: "C.A.B.A.",
    description:
      "La misma formación de excelencia en formato presencial completo en nuestra sede de Buenos Aires.",
    longDescription:
      "Versión presencial completa de nuestra carrera de Guía de Trekking, con clases en la sede de CABA y salidas de práctica semanales a los entornos naturales cercanos.",
    imageSrc: "/carreras/guia-de-trekking.jpg",
    imageAlt: "Grupo de guías en trekking por la cordillera",
  },
  {
    slug: "guia-de-montana-mixto",
    title: "Guía de Montaña",
    duration: "2 años y medio",
    modality: "Mixto",
    location: "Todo el país",
    description:
      "Formación de Guía de Montaña en modalidad mixta, combinando teoría virtual y práctica presencial.",
    longDescription:
      "La modalidad mixta de la carrera de Guía de Montaña permite a estudiantes de todo el país acceder a la formación de excelencia de la EAAM. Las clases teóricas se dictan de forma virtual y las prácticas se realizan en intensivos presenciales.",
    imageSrc: "/carreras/guia-de-montana.jpg",
    imageAlt: "Grupo de guías en travesía por la nieve en alta montaña",
  },
];
