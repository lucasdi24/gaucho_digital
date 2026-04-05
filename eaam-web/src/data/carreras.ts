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
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBZKV-ZKIrvDXaofz4OjBh9__Sf1fNWxZyG5sGRoLUfUWbEEuR9hQO6kpi09I8ZCO07IJbAjQUM6HHnqa_ahCKRj700CFgHla0Kk3S9aMi0R0hJYEZuuI2cX7ETHJhpv_OGfQwNoNbQ_CntOXx4qicLSW1LL5AcZZL2bWtOishSIfeiTz72bNDzkES9N8KxGtH7j7yiLOALW-z0qz8M2dT1RaJFqyj49LZ2gV5X-HBrJMLhECbzhDROQw4KDmCi1K66lPmuTZRc",
    imageAlt: "Guía de montaña liderando una expedición en terreno técnico",
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
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDf1md15WwVGJFleS0A7HzQZflZBVCtNsUED5gp3x7aPO2C6VpICYdYAOcbNzrdEbX07KwYEHS1B8t7AMWYKnjSqsCCrOAFY80bUnE2P-u5H6t9kxnI2C11D_YlWb2bML0Q2c5A5NpHkA4TaFNo6N3On1bI4ulxtZj2oV1JE1rdOCR1nuSEYjDwXuous16Kqm_KofVRQhRfpUFCI2-Tl8jr22JgPYpooNGCXJX8uSV-9xcrusJocTqpH7Fnb5MFVoVxXcjFsoov",
    imageAlt: "Grupo de trekking en un sendero de montaña patagónico",
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
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCmj2yKYYesBHAtJtH8flAfBVn0nHjQRnZpGULtRkAHSv3puki3JwnCO7gtvwYfopKp7wuNqezD6Wa7UwiWrdFtQgn0EkrjuqQH1usVZl7zt8k3u2nFmj3SC-dJZWwlZwqTFwA5upAi4GjhASftv99iGyLcMxCypE3MA-A3-viPKrqNUoS96YpGG2Mnv5T5rFMXchwirSgbcoT1Tkov99SMugqPYvohGI4xWEI-7fiyN2bCeHvF35qZjOhE3g4j3a_gd8uZtjxi",
    imageAlt: "Montañista escalando pared de roca al atardecer",
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
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCVdJX_aUVxonzEmGlU9j1Vur7v2YIRZbz-pJE5cIofzorvFdo_hQahgBeSi645vf831SgAMBPp4bfLySSsmqkTtslIgmraxKuz5wqJiWZ4rQ4fz1hM14QBORyoVhjxEcsy6ToANn4qfXp0VhSGJaR-AHLGTcETnzWKaFq7q5wg2YwcPT3ohW5GlhwZYrQkLNqy67dwtE_GLAAF2cZSY949gLS4j9qh0p-F4-Qnd53Drs1Yki7LX3ZoFmaQiqXrJPUkXX0TM9L_",
    imageAlt: "Expedición de alta montaña en terreno glaciar",
  },
];
