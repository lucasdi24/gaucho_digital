import fs from "fs";
import path from "path";

export interface EgresadoData {
  id: string;
  name: string;
  career: string;
  year: string;
  imageSrc: string;
}

const FILE_PATH = path.join(process.cwd(), "egresados-data.json");

export function readEgresados(): EgresadoData[] {
  if (!fs.existsSync(FILE_PATH)) return [];
  try {
    return JSON.parse(fs.readFileSync(FILE_PATH, "utf-8"));
  } catch {
    return [];
  }
}

export function writeEgresados(data: EgresadoData[]): void {
  fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
}
