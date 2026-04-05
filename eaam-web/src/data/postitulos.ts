export interface Postitulo {
  slug: string;
  title: string;
  quote: string;
  duration: string;
  modality: string;
  location: string;
  locationIcon: string;
  hours: string;
  status: string;
  description: string;
  introP1: string;
  introP2: string;
  stat: string;
  statLabel: string;
  areas: { icon: string; title: string; desc: string }[];
  competencias: string[];
  puntaje: string;
  horarios: string;
  imageSrc: string;
  imageAlt: string;
  imageEditorial: string;
  imageProfile: string;
}

export const postitulos: Postitulo[] = [
  {
    slug: "actividades-naturaleza",
    title: "Postítulo en Actividades y Deportes en la Naturaleza — Mixto (Todo el País)",
    quote: "Cuando la Educación Física sale del aula, nace una nueva forma de enseñar.",
    duration: "1 Año",
    modality: "Mixto",
    location: "Todo el País",
    locationIcon: "public",
    hours: "19:00 a 23:00",
    status: "Abierto",
    description: "Especialización para guías graduados en gestión de riesgos, dinámicas de grupo y educación ambiental.",
    introP1:
      "El entorno natural no es solo un escenario, es una herramienta pedagógica viva. Este postítulo está diseñado para profesionales que buscan trascender los límites convencionales de la enseñanza, integrando la técnica deportiva con una profunda conciencia ambiental.",
    introP2:
      "A través de una modalidad mixta que combina la flexibilidad digital con experiencias de campo intensivas en diversos puntos del país, formamos líderes capaces de gestionar grupos en condiciones dinámicas, priorizando la seguridad y la excelencia educativa.",
    stat: "100%",
    statLabel: "Habilitación Oficial",
    areas: [
      {
        icon: "landscape",
        title: "Gestión de Riesgos",
        desc: "Protocolos de seguridad avanzados y toma de decisiones en entornos de montaña y agrestes, garantizando la integridad de los grupos.",
      },
      {
        icon: "diversity_3",
        title: "Dinámicas de Grupo",
        desc: "Estrategias de liderazgo y cohesión grupal aplicadas a expediciones y actividades de larga duración en la naturaleza.",
      },
      {
        icon: "eco",
        title: "Educación Ambiental",
        desc: "Interpretación del patrimonio natural y técnicas de mínimo impacto (Leave No Trace) para una enseñanza sustentable.",
      },
    ],
    competencias: [
      "Liderazgo pedagógico en entornos naturales y actividades de riesgo controlado.",
      "Capacidad técnica en deportes de montaña, escalada, trekking y orientación.",
      "Diseño de proyectos educativos interdisciplinarios para instituciones escolares.",
      "Gestión integral de logística y seguridad para campamentos y travesías.",
      "Competencias en primeros auxilios en áreas silvestres y remotas (WFR).",
      "Análisis y evaluación del impacto ambiental en proyectos recreativos.",
      "Especialización en inclusión y adaptación de actividades naturales.",
    ],
    puntaje: "Oficial y Habilitante",
    horarios: "19:00 a 23:00",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDlrhRh4U5qbqN6gcgOLrQzuxxrrbASH37DAeS6qEP-4UYcBbqHPMpRkZNixRDkGtXYvQAicdPQ17gT4t8yqTe5EWg--NUmmB-JNT8EHDxlAfIznNvx9gFKyCM84S23HpTZtOpgZBp5kQXWYPRVndJytOa-oMHxhKNxouWqNMJJDO_o_Xk_khYC9kV_MClSnTxWnDRVxpgwPtcJxm6ibHRoKvX4T0TYiEeksehuYM7QBg9uRhuEInv4SB1YVdh_y-42xr73L942",
    imageAlt: "Majestic high mountain range peaks",
    imageEditorial:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAs7Hqc6uYP9-0umhL9y_4JkBgtzB6KT1nYrXjvb2ss1D7-gv_yPfgeaJPY-YCaNzlUpJAHAA_qmysFnSsRUpFrYrkRICJtzMUYwVqhHeVvcPtm1hUup37bQRTQVAq1-BkgQymrbMnqs5JUFhDssyZ-Z1uVog-kg613imXOUJw0oEcC8nn8NKSKY4DzNwTGFkq1Tg-bNT2Ee5NC6xtf5W7RUrCz3u8GXKKpcuVNEdJKAa2gNaU05yvQw1Xlr6Wj68zRWJamcRvA",
    imageProfile:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAjB9NaGjXClYWKDqwu76P0l8SYHjuG1QwI2OTzc6cuYdkuw25118r6e6wY26re0gBAJ9pqm6VvgzZluscPVcc4Fu_CM_N6LZUGJOPbhkQiNtQvL0tC6v6TSkrf64i7Ry5T37Z8-6oVZelTttf394F-byU4UgvOMFjlKPFVqhvK_Eue82dj4MlzetCDcHlv-SBcUUo6sNLSrsB4AI5Alm4m-p4TXjI-JKSyN755V2awUcyXW7JGrZYImxq_dIrljwbC9Hjv0l1Y",
  },
  {
    slug: "actividades-naturaleza-caba",
    title: "Postítulo en Actividades y Deportes en la Naturaleza (C.A.B.A.)",
    quote: "Formación técnica con base en la Ciudad de Buenos Aires.",
    duration: "1 Año",
    modality: "Presencial",
    location: "C.A.B.A.",
    locationIcon: "location_on",
    hours: "19:00 a 23:00",
    status: "Abierto",
    description: "Formación técnica con base en la Ciudad de Buenos Aires, enfocada en la pedagogía y seguridad de las prácticas corporales en ambientes naturales.",
    introP1:
      "El entorno natural no es solo un escenario, es una herramienta pedagógica viva. Este postítulo presencial en CABA está diseñado para profesionales que buscan trascender los límites convencionales de la enseñanza.",
    introP2:
      "Con clases presenciales y prácticas intensivas en terreno, formamos líderes capaces de gestionar grupos en condiciones dinámicas, priorizando la seguridad y la excelencia educativa.",
    stat: "100%",
    statLabel: "Habilitación Oficial",
    areas: [
      {
        icon: "landscape",
        title: "Gestión de Riesgos",
        desc: "Protocolos de seguridad avanzados y toma de decisiones en entornos de montaña y agrestes.",
      },
      {
        icon: "diversity_3",
        title: "Dinámicas de Grupo",
        desc: "Estrategias de liderazgo y cohesión grupal aplicadas a expediciones y actividades de larga duración.",
      },
      {
        icon: "eco",
        title: "Educación Ambiental",
        desc: "Técnicas de mínimo impacto (Leave No Trace) para una enseñanza sustentable.",
      },
    ],
    competencias: [
      "Liderazgo pedagógico en entornos naturales y actividades de riesgo controlado.",
      "Capacidad técnica en deportes de montaña, escalada, trekking y orientación.",
      "Diseño de proyectos educativos interdisciplinarios para instituciones escolares.",
      "Gestión integral de logística y seguridad para campamentos y travesías.",
      "Competencias en primeros auxilios en áreas silvestres y remotas (WFR).",
      "Análisis y evaluación del impacto ambiental en proyectos recreativos.",
    ],
    puntaje: "Oficial y Habilitante",
    horarios: "19:00 a 23:00",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCQsUrgvlFsdvZ8RnqMazt0wPEFQTx-PpTk12yc1rNgpXSEhogciEvhA4tatcQJ75uB0dUZHOdefxDDrQO28jjeouwluwEzsP2glXEXIrvAI0ARRcG5yK0ijzkKKd81imC325elbNSdTR45VTC5d4ny43MmRV0oEgcPhvi9U-XkQUNtfWyX8Ph_Cv8e7wvJ38mHLw6uIhSlVirhuyG3pN78CIqG1yATxp8t2too20r5PKSqAj1o0Xv_SZhOR3lu6XRmcCZ70t5l",
    imageAlt: "Formación presencial CABA",
    imageEditorial:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAs7Hqc6uYP9-0umhL9y_4JkBgtzB6KT1nYrXjvb2ss1D7-gv_yPfgeaJPY-YCaNzlUpJAHAA_qmysFnSsRUpFrYrkRICJtzMUYwVqhHeVvcPtm1hUup37bQRTQVAq1-BkgQymrbMnqs5JUFhDssyZ-Z1uVog-kg613imXOUJw0oEcC8nn8NKSKY4DzNwTGFkq1Tg-bNT2Ee5NC6xtf5W7RUrCz3u8GXKKpcuVNEdJKAa2gNaU05yvQw1Xlr6Wj68zRWJamcRvA",
    imageProfile:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAjB9NaGjXClYWKDqwu76P0l8SYHjuG1QwI2OTzc6cuYdkuw25118r6e6wY26re0gBAJ9pqm6VvgzZluscPVcc4Fu_CM_N6LZUGJOPbhkQiNtQvL0tC6v6TSkrf64i7Ry5T37Z8-6oVZelTttf394F-byU4UgvOMFjlKPFVqhvK_Eue82dj4MlzetCDcHlv-SBcUUo6sNLSrsB4AI5Alm4m-p4TXjI-JKSyN755V2awUcyXW7JGrZYImxq_dIrljwbC9Hjv0l1Y",
  },
  {
    slug: "rescate-tecnico",
    title: "Rescate Técnico con Cuerdas",
    quote: "La preparación es la diferencia entre una emergencia y una tragedia.",
    duration: "6 Meses",
    modality: "Híbrido",
    location: "CABA / Virtual",
    locationIcon: "location_on",
    hours: "Fines de semana",
    status: "Abierto",
    description: "Especialización avanzada en sistemas de rescate complejos para entornos de montaña vertical.",
    introP1:
      "El rescate técnico en montaña requiere un conjunto de habilidades que van más allá de la fuerza física. Este postítulo forma especialistas capaces de planificar, ejecutar y dirigir operaciones de rescate en terrenos verticales de alta complejidad.",
    introP2:
      "Con una metodología práctica e intensiva, los participantes dominan sistemas de poleas, anclajes avanzados, evacuaciones y primeros auxilios especializados, todo en entornos reales bajo supervisión de instructores certificados internacionalmente.",
    stat: "95%",
    statLabel: "Inserción Laboral",
    areas: [
      {
        icon: "emergency",
        title: "Sistemas de Rescate",
        desc: "Diseño y ejecución de sistemas de poleas, anclajes y evacuaciones en paredes verticales y terrenos complejos.",
      },
      {
        icon: "medical_services",
        title: "Primeros Auxilios",
        desc: "Atención pre-hospitalaria en terreno, manejo de politraumatizados y protocolos de evacuación de emergencia.",
      },
      {
        icon: "safety_check",
        title: "Seguridad en Roca",
        desc: "Evaluación de riesgos objetivos y subjetivos, planificación de operaciones y comandos de incidente.",
      },
    ],
    competencias: [
      "Planificación y dirección de operaciones de rescate en montaña.",
      "Dominio de sistemas de poleas mecánicas y anclajes multiusos.",
      "Evacuaciones en terreno vertical con pacientes inmovilizados.",
      "Triage y atención de emergencias en entornos de difícil acceso.",
      "Coordinación de equipos de rescate y comunicación de emergencia.",
      "Gestión de recursos en operaciones de largo aliento.",
    ],
    puntaje: "Oficial y Habilitante",
    horarios: "Sábados y domingos",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDlrhRh4U5qbqN6gcgOLrQzuxxrrbASH37DAeS6qEP-4UYcBbqHPMpRkZNixRDkGtXYvQAicdPQ17gT4t8yqTe5EWg--NUmmB-JNT8EHDxlAfIznNvx9gFKyCM84S23HpTZtOpgZBp5kQXWYPRVndJytOa-oMHxhKNxouWqNMJJDO_o_Xk_khYC9kV_MClSnTxWnDRVxpgwPtcJxm6ibHRoKvX4T0TYiEeksehuYM7QBg9uRhuEInv4SB1YVdh_y-42xr73L942",
    imageAlt: "Rescate técnico en montaña",
    imageEditorial:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAs7Hqc6uYP9-0umhL9y_4JkBgtzB6KT1nYrXjvb2ss1D7-gv_yPfgeaJPY-YCaNzlUpJAHAA_qmysFnSsRUpFrYrkRICJtzMUYwVqhHeVvcPtm1hUup37bQRTQVAq1-BkgQymrbMnqs5JUFhDssyZ-Z1uVog-kg613imXOUJw0oEcC8nn8NKSKY4DzNwTGFkq1Tg-bNT2Ee5NC6xtf5W7RUrCz3u8GXKKpcuVNEdJKAa2gNaU05yvQw1Xlr6Wj68zRWJamcRvA",
    imageProfile:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAjB9NaGjXClYWKDqwu76P0l8SYHjuG1QwI2OTzc6cuYdkuw25118r6e6wY26re0gBAJ9pqm6VvgzZluscPVcc4Fu_CM_N6LZUGJOPbhkQiNtQvL0tC6v6TSkrf64i7Ry5T37Z8-6oVZelTttf394F-byU4UgvOMFjlKPFVqhvK_Eue82dj4MlzetCDcHlv-SBcUUo6sNLSrsB4AI5Alm4m-p4TXjI-JKSyN755V2awUcyXW7JGrZYImxq_dIrljwbC9Hjv0l1Y",
  },
  {
    slug: "gestion-riesgo-nieve",
    title: "Gestión del Riesgo en Nieve",
    quote: "La nieve no perdona a quien no la estudia.",
    duration: "4 Meses",
    modality: "Virtual",
    location: "Todo el País",
    locationIcon: "public",
    hours: "A distancia",
    status: "Próximamente",
    description: "Protocolos de seguridad y evaluación de avalanchas para profesionales del invierno.",
    introP1:
      "La nieve es un medio con reglas propias que exige formación especializada y criterio técnico riguroso. Este postítulo forma profesionales capaces de operar con seguridad en entornos nivales, dominando la evaluación del manto nivoso y los protocolos de respuesta ante avalanchas.",
    introP2:
      "Combinando teoría avalanchológica avanzada con prácticas en campo durante la temporada invernal, los egresados están preparados para tomar decisiones de vida o muerte en contextos de alta montaña y pistas de ski.",
    stat: "4 Meses",
    statLabel: "Formación Intensiva",
    areas: [
      {
        icon: "ac_unit",
        title: "Avalanchología",
        desc: "Estudio del manto nivoso, clasificación de avalanchas, factores de riesgo y metodologías de evaluación del terreno.",
      },
      {
        icon: "search",
        title: "Búsqueda y Rescate",
        desc: "Uso de ARVA, sonda y pala para operaciones de búsqueda y rescate en víctimas de alud con protocolos ICAR.",
      },
      {
        icon: "thermostat",
        title: "Meteorología Nival",
        desc: "Interpretación de boletines de avalanchas, modelos meteorológicos y planificación de actividades según condiciones.",
      },
    ],
    competencias: [
      "Evaluación profesional del peligro de aludes en terreno.",
      "Gestión de grupos en entornos de nieve y glaciares.",
      "Dominio de equipos de búsqueda y rescate en avalanchas (ARVA).",
      "Interpretación de perfiles estratigráficos del manto nivoso.",
      "Planificación de rutas en terreno de avalanchas.",
      "Coordinación de operaciones de búsqueda y rescate.",
    ],
    puntaje: "Habilitante",
    horarios: "Modalidad virtual",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDlrhRh4U5qbqN6gcgOLrQzuxxrrbASH37DAeS6qEP-4UYcBbqHPMpRkZNixRDkGtXYvQAicdPQ17gT4t8yqTe5EWg--NUmmB-JNT8EHDxlAfIznNvx9gFKyCM84S23HpTZtOpgZBp5kQXWYPRVndJytOa-oMHxhKNxouWqNMJJDO_o_Xk_khYC9kV_MClSnTxWnDRVxpgwPtcJxm6ibHRoKvX4T0TYiEeksehuYM7QBg9uRhuEInv4SB1YVdh_y-42xr73L942",
    imageAlt: "Montaña nevada",
    imageEditorial:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAs7Hqc6uYP9-0umhL9y_4JkBgtzB6KT1nYrXjvb2ss1D7-gv_yPfgeaJPY-YCaNzlUpJAHAA_qmysFnSsRUpFrYrkRICJtzMUYwVqhHeVvcPtm1hUup37bQRTQVAq1-BkgQymrbMnqs5JUFhDssyZ-Z1uVog-kg613imXOUJw0oEcC8nn8NKSKY4DzNwTGFkq1Tg-bNT2Ee5NC6xtf5W7RUrCz3u8GXKKpcuVNEdJKAa2gNaU05yvQw1Xlr6Wj68zRWJamcRvA",
    imageProfile:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAjB9NaGjXClYWKDqwu76P0l8SYHjuG1QwI2OTzc6cuYdkuw25118r6e6wY26re0gBAJ9pqm6VvgzZluscPVcc4Fu_CM_N6LZUGJOPbhkQiNtQvL0tC6v6TSkrf64i7Ry5T37Z8-6oVZelTttf394F-byU4UgvOMFjlKPFVqhvK_Eue82dj4MlzetCDcHlv-SBcUUo6sNLSrsB4AI5Alm4m-p4TXjI-JKSyN755V2awUcyXW7JGrZYImxq_dIrljwbC9Hjv0l1Y",
  },
];
