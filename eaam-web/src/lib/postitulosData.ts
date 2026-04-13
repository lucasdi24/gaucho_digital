import fs from "fs";
import path from "path";

export interface PostituloData {
  id: string;
  slug: string;
  title: string;
  badge: string;
  visible: boolean;
  icon: string;
  modalidad: string;
  location: string;
  duracion: string;
  diasCursada: string;
  horarios: string;
  comienzo: string;
  coordinador: string;
  puntajeDocente: string;
  imageSrc: string;
  quote: string;
  intro: string;
  seccionTitulo: string;
  seccionCuerpo: string;
  perfilItems: string;
  salidaTitulo: string;
  salidaCuerpo: string;
}

const DATA_PATH = path.join(process.cwd(), "postitulos-data.json");

export function readPostitulos(): PostituloData[] {
  try {
    return JSON.parse(fs.readFileSync(DATA_PATH, "utf-8")) as PostituloData[];
  } catch {
    return [];
  }
}

export function writePostitulos(data: PostituloData[]): void {
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), "utf-8");
}
