import fs from "fs";
import path from "path";

export interface ProfesorData {
  id: string;
  name: string;
  role: string;
  imageSrc: string;
}

const FILE_PATH = path.join(process.cwd(), "profesores-data.json");

export function readProfesores(): ProfesorData[] {
  if (!fs.existsSync(FILE_PATH)) return INITIAL_PROFESORES;
  try {
    return JSON.parse(fs.readFileSync(FILE_PATH, "utf-8"));
  } catch {
    return INITIAL_PROFESORES;
  }
}

export function writeProfesores(data: ProfesorData[]): void {
  fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
}

const INITIAL_PROFESORES: ProfesorData[] = [
  { id: "matias-marin", name: "Matías Marín", role: "Guía de Montaña en Altitud", imageSrc: "/profesores/matias-marin.webp" },
  { id: "carla-cespedes", name: "Carla Céspedes", role: "Guía de Montaña", imageSrc: "/profesores/carla-cespedes.webp" },
  { id: "adrian-silva", name: "Adrian Silva", role: "Guía de montaña", imageSrc: "/profesores/adrian-silva.webp" },
  { id: "damian-romeo", name: "Damián Romeo", role: "Guía de Montaña", imageSrc: "/profesores/damian-romeo.webp" },
  { id: "matias-genovese", name: "Matias Genovese", role: "Guía de Montaña", imageSrc: "/profesores/matias-genovese.webp" },
  { id: "muriel-ribeiro", name: "Muriel Ribeiro Herbón", role: "Técnica superior en guía de montaña", imageSrc: "/profesores/muriel-ribeiro.webp" },
  { id: "sebastian-pilar", name: "Sebastian Pilar", role: "Guía de Montaña", imageSrc: "/profesores/sebastian-pilar.webp" },
  { id: "pablo-kuntz", name: "Pablo Kuntz", role: "Técnico superior guía de montaña", imageSrc: "/profesores/pablo-kuntz.webp" },
  { id: "juan-cruz-genta", name: "Juan Cruz Genta", role: "Guía de Montaña", imageSrc: "/profesores/juan-cruz-genta.webp" },
  { id: "maria-belen-anauati", name: "María Belén Anauati", role: "Guía de Trekking y Turismo Aventura", imageSrc: "/profesores/maria-belen-anauati.webp" },
  { id: "lucas-llohis", name: "Lucas Llohis", role: "Guía de montaña", imageSrc: "/profesores/lucas-llohis.webp" },
  { id: "andres-gavilan", name: "Andres Gavilan", role: "Guía de Montaña y Guía de Turismo Aventura Senderos y Selva", imageSrc: "/profesores/andres-gavilan.webp" },
  { id: "sergio-mahnic", name: "Sergio Mahnic", role: "Profesor de Educación Física", imageSrc: "/profesores/sergio-mahnic.webp" },
  { id: "pablo-ferrari", name: "Pablo Ferrari", role: "Guía de Montaña", imageSrc: "/profesores/pablo-ferrari.webp" },
  { id: "cintia-peredo", name: "Cintia Peredo", role: "Guía de Trekking en cordillera", imageSrc: "/profesores/cintia-peredo.webp" },
  { id: "gabriel-tano-benenati", name: "Gabriel Tano Benenati", role: "Guía de Trekking y Turismo Aventura", imageSrc: "/profesores/gabriel-tano-benenati.webp" },
  { id: "ariel-maraulo", name: "Ariel Maraulo", role: "Licenciado en actividad física y deportes en la naturaleza", imageSrc: "/profesores/ariel-maraulo.webp" },
  { id: "federico-tortarolo", name: "Federico Tortarolo", role: "GTC", imageSrc: "/profesores/federico-tortarolo.webp" },
  { id: "lautaro-clerici", name: "Lautaro Clerici", role: "Guía de Turismo Aventura", imageSrc: "/profesores/lautaro-clerici.webp" },
  { id: "pablo-chiardi", name: "Pablo Chiardi", role: "Especialidad en Deportes y Actividades en la Naturaleza", imageSrc: "/profesores/pablo-chiardi.webp" },
];
