import fs from "fs";
import path from "path";

export interface CarreraData {
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
  imageSrc: string;
  subtitulo: string;
  descripcion: string;
  seccionTitulo: string;
  seccionCuerpo: string;
  alcanceCuerpo: string;
  dirigidaItems: string;
  requisito: string;
  salidaTitulo: string;
  salidaCuerpo: string;
}

const DATA_PATH = path.join(process.cwd(), "carreras-data.json");

export function readCarreras(): CarreraData[] {
  try {
    return JSON.parse(fs.readFileSync(DATA_PATH, "utf-8")) as CarreraData[];
  } catch {
    return [];
  }
}

export function writeCarreras(data: CarreraData[]): void {
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), "utf-8");
}
