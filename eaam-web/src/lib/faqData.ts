export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "ubicacion",
    question: "¿Dónde está la escuela?",
    answer:
      "Nuestra sede se encuentra en Av. Olazábal 5151, Ciudad Autónoma de Buenos Aires. Podés comunicarte al 011 5120-6883 o escribirnos a info@eaam.com.ar.",
  },
  {
    id: "oficiales",
    question: "¿Las carreras son oficiales?",
    answer:
      "Nuestras carreras de Guía de Montaña y Guía de Trekking y Turismo Aventura, Senderos y Selva son oficiales, reconocidas por Dirección General de Escuelas de Gestión Privada, Ministerio de Educación y Parques Nacionales. Esto te permite, una vez finalizada, trabajar en cualquier parque Nacional.",
  },
  {
    id: "distancia",
    question: "¿Se puede cursar a distancia?",
    answer:
      "Varias propuestas se dictan en modalidad mixta o semi-presencial, combinando instancias presenciales —incluidas salidas al terreno— con actividades a distancia. La modalidad depende de cada carrera, curso o postítulo: consultá la ficha de la capacitación que te interese o escribinos y te asesoramos.",
  },
  {
    id: "expediciones",
    question: "¿Realizan expediciones?",
    answer:
      "Sí. En carreras y postítulos incorporamos salidas formativas y viajes al terreno que forman parte central del plan de estudios. Los cursos incluyen instancias presenciales en montaña según cada propuesta.",
  },
];

export const FAQ_CAPACITACION_OPTIONS = [
  "Carrera de Guía de Montaña",
  "Carrera de Guía de Trekking y Turismo Aventura",
  "Carrera Senderos y Selva",
  "Cursos",
  "Postítulos",
  "Otra consulta",
] as const;
