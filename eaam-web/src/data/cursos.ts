export interface Curso {
  slug: string;
  title: string;
  badge: string;
  icon: string;
  locationLabel: string;
  modality: "Presencial" | "Semi-Presencial" | "Intensivo";
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
}

export const cursos: Curso[] = [
  {
    slug: "cim-trekking-semi",
    title: "Curso Integral de Montañismo y Trekking SEMI-PRESENCIAL (todo el país)",
    badge: "Marzo - Octubre",
    icon: "wifi",
    locationLabel: "Semi-Presencial",
    modality: "Semi-Presencial",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCUVTvHJcw8eeHBUoXb1sOM1VDFnRJ2A4biWxUgY64YnvlzTAMMQ0mVLZ6y4GpDTHTV377tRz5vqOKVvOUqywvyzPC3U29fGyPBjtiPX44nttf80m-ikjhFFyIKrV_JB0T7i-K00FIgombxygwGYiN_o5AaiDmOZrUN_edXc9dfEoRLs0ZWIEN1Jn8uAxN5eI5wptJmRdwE1W6LKh2G49-boKPJL8mx6lS2EYZz_LTsvqv-VxHsOYn-5kqsx7cgJl98CyCGjS_w",
    imageAlt: "Trekking en montañas",
  },
  {
    slug: "iniciacion-montanismo-semi",
    title: "Iniciación al Montañismo SEMI-PRESENCIAL",
    badge: "8 Clases",
    icon: "school",
    locationLabel: "Fundamentos",
    modality: "Semi-Presencial",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCRA6-hHxu7u3XrWsgl09YMsABFCnZdbIwXpGKHXYG1W4DPYpZ2ewTQ0f_lvkDocoktjCfyVJcxrfIBDF4f0Qddr2TJfwlg8TUNPpPzz8xZ2vDt_jA2drZZ28dDJkB6lBX3o_5zxrYsX8TY-yqQ9nO6owQvIuKkpukHrbgSxubR8HNguLJDTY3i1CGHIY4EWWJJ82maY7uluNAnCR4hNAhrOLLcCWZQ0OL-n8GGBmfwxBaP1fbdd7RNsZFHeuBjS7tedjSHVb7j",
    imageAlt: "Persona escalando",
  },
  {
    slug: "cim-trekking-presencial",
    title: "Curso Integral de Montañismo y Trekking PRESENCIAL",
    badge: "Marzo - Octubre",
    icon: "groups",
    locationLabel: "Presencial CABA",
    modality: "Presencial",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBZJWvBPLu_MhhaEQUTDHGWusM_Gme0TMI6XsfLx40T3EzKBD0_R7lyV4IOwsZE8HmmeszyGw1wXl8GXghRd9I7cbH3x4W4n7Lpseqi2x64QPEeD5xBy8xxV7_U87QxWrW2O277UxNTeKszhtEZt0U7H5nHtCRRkB9SIpb0U1ypWq_wfeQB2E2c1pJ3sKnsM3bDKesy6oiEdp3YzSZ20JGOCIIOZ0pTS85YKCoT-RyybG9x_QndmM4JyIkTZva3Qk9fydn8Hwdm",
    imageAlt: "Picos nevados de los Andes",
  },
  {
    slug: "iniciacion-montanismo-presencial",
    title: "Iniciación al Montañismo PRESENCIAL",
    badge: "8 Clases",
    icon: "location_on",
    locationLabel: "Sede Central",
    modality: "Presencial",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA4tG3zUvjK7SiLXm_84vYM6d08IW_5NQwQ3QZIWusxdjl-o8nkMTMJSxS3sx_-ZZyPEQAn9jKJ8YIfORExX_fEJS3WQBltZOBhO9kF1Hc1ce4wFkNOMsb12yFa0T_OyDOUwS_C9VvgLBH15foS2LOU2GIC2n7r5Yz9ZPKcKanMPRiZASi18shyku_S3CdbOlIwT6akmjBTtG-N8nrgD62P_Fs3oOevx7gYXCy8mkFL7BkYjiz3I_pE0xDQL8dQttMDf1P4CbcS",
    imageAlt: "Equipo de montañismo",
  },
  {
    slug: "invernal-ushuaia",
    title: "INVERNAL – Taller Intensivo USHUAIA (C.I.M. 2)",
    badge: "Salida 9 días",
    icon: "ac_unit",
    locationLabel: "Invernal - Ushuaia",
    modality: "Intensivo",
    subtitle: "Incluye 2 encuentros previos por zoom.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCMp6ss3b1YZgbBkrhzt-_5XD2HOHNw2UimhDRNT6GQ18kQQANpaYgAEkilbMqR13tB_t1wR_13ntxiclEholqs6uHVedn1jf2qfca-21y-QRSp337wLPEyPQ0lfJP8vRJXeUKctJtCujOh03chW-1yhAKkSBZ0PhEaqRv3GPTGXX3Xw3wED7BOoX2lGGMMuUoqiKA4T-QwCg6FmdQaXDIvY0dbQK8BWKbq53AMJc-8T6FmfzEkfKdsE8ClH4Yz9Qn5Zj5MCt2K",
    imageAlt: "Paisaje invernal en Ushuaia",
  },
  {
    slug: "altura-san-francisco",
    title: "ALTURA – Taller Intensivo San Francisco 6040mts. (C.I.M.2)",
    badge: "Salida 6 días",
    icon: "altitude",
    locationLabel: "Altura - Catamarca",
    modality: "Intensivo",
    subtitle: "Incluye 2 encuentros previos por zoom.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB3sVif-R01NMB8G6vY-IP3wTSRhNSAbcOBk9w-KaFczM78nfMvk02yI6c1QTTErhV8J_PZvON1tX4HnM4ySGqUb8GBWS8BubUe_4CMfuztPvEdmA1XYlL5cTeNQ2ea1yPsLA94IXUsimJOK_Zb-mqqBjsay8Tfu4b9qe0tQd2N65-terVRT4DRDBYCpiR-oQYlL2oGplIPdukGbEo2cX7D612MAZHZHmBQgCf1jzG_f1V-TnLeJxUTkJvMnMIrERx0vP9MBz94",
    imageAlt: "Cumbres de altura en Catamarca",
  },
  {
    slug: "tecnico-cuerdas-cordoba",
    title: "TÉCNICO – Taller Intensivo Trabajo con Cuerdas (C.I.M.2)",
    badge: "Salida 4 días",
    icon: "hardware",
    locationLabel: "Técnico - Córdoba",
    modality: "Intensivo",
    subtitle: "Incluye 3 encuentros previos por zoom.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCTdugxgEKi467T8ITfbhbi-mgEA7dMh5nPXbvGU5Y-y8XmDc5mvjCV3gfnG1lOyDVOPvjc89-_Oadn1dbevZDhfYJCvawj8EFwDT7PfQ_Q-URw_3IABypG5ZIKay7zybgBJTTAsiwTwz1DvhwSm-tS7PDz5twUG6TjJmbYC7BB2tI-niYyUr2qDC2D9TnHwCmAQHbadVh5R9g2buF3P375occXzbr7Pqb6G55fTYCPDeknLq3rIA-0CWLgq2dqMljUdNqvlknt",
    imageAlt: "Técnicas de trabajo con cuerdas",
  },
];
