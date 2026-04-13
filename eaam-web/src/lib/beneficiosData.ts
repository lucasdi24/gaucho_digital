import fs from "fs";
import path from "path";

export interface BeneficioData {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  visible: boolean;
}

const DATA_PATH = path.join(process.cwd(), "beneficios-data.json");

export function readBeneficios(): BeneficioData[] {
  try {
    return JSON.parse(fs.readFileSync(DATA_PATH, "utf-8")) as BeneficioData[];
  } catch {
    return [];
  }
}

export function writeBeneficios(data: BeneficioData[]): void {
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), "utf-8");
}
