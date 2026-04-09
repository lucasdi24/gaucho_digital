import fs from "fs";
import path from "path";

export interface CursoData {
  id: string;
  slug: string;
  title: string;
  badge: string;
  visible: boolean;
  icon: string;
  modalidad: string;
  duracion: string;
  diasCursada: string;
  horarios: string;
  comienzo: string;
  coordinador: string;
  imageSrc: string;
  descripcion: string;
  salidaTitulo: string;
  salidaIntro: string;
  salidaDuracion: string;
  salidaTipos: string;
  salidaDestinos: string;
  salidaActividades: string;
  salidaIncluye: string;
  salidaNoIncluye: string;
  salidaNotaFormativa: string;
  salidaFecha: string;
  salidaDestino: string;
}

const DATA_PATH = path.join(process.cwd(), "cursos-data.json");

export function readCursos(): CursoData[] {
  try {
    return JSON.parse(fs.readFileSync(DATA_PATH, "utf-8")) as CursoData[];
  } catch {
    return [];
  }
}

export function writeCursos(data: CursoData[]): void {
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), "utf-8");
}
