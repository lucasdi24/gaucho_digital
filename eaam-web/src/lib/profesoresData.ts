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
  { id: "pablo-gonzalez", name: "Pablo González", role: "Guía UIAGM", imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhhWEVSgqqajymG73-7cJarTmA1jlAureYX1doCltXLQubxP0XGix-bfEW0do1kOieYa-xRtH3RJ_A0ZpcGMSU7WyIGQPOieYqD62JjhDkTmQkuIwO69jgA7-KT0-WiUg5tHTivRB0dxVtMUrw9WZtJCsuSy0ySRfcvqxm6F8x3YPDOYHmRPLILGCNWjyl5xlIgFCMtI8ZPSoxWVC_xuKqHoXAhr8yRgZo2HZnvkvoFDz2b8ZLOw2piW8V2zT8170bkB8-Tzrm" },
  { id: "lucia-martinez", name: "Lucía Martínez", role: "Especialista en Rescate", imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuC77W3u6fJgGU_9l29x4Rv22HCDIwh00_5lCEoOCUTVGrYorDhnbuUY81YMGGIE-b6lY8KZfIO7nAfzzySfqRbQHYMinnYwarYDyIHpKtX5-CA0kwyrUefQOmvhMlgaPqWFE8xm_FT-93WkfXrtbzGGSZ6lz2n07eBl-G5FDbScC6zi1swAYTwdznfzd_vWkIqBZ_ti_ZdDp1eoI5EVusyoYfIAsWjfn9sbzzoTGgwsu1yleBswYK-b4Xc2Sk8KA2QP3LFEh0qt" },
  { id: "andres-riva", name: "Andrés Riva", role: "Medicina de Montaña", imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJw7eqAf3cPF7k7YyB5qoQFQf4s79SaWtRSeY29SPvlBI8c0FKXFLRXxMr5zSjEXbVjEVw84-GAlIf2NN3Jyh8IlZFSRJrYOFmHlMGhVzi11G1HD_AnCyVi5b3d7caSyU--hP3tXggOPVsWuUgYCGhLLF6m-OpnPR3xO-tDrsLBiQ7Abm2TXm7KInI8FojXB9ohcEc0FKsqQQAv2fO-BZdrc-TzM5tXMlt_-HQA2sx4DCUHRCjxDzqSbRoFHaQEOlMdX_nfwbp" },
  { id: "martin-castro", name: "Martín Castro", role: "Cartografía Avanzada", imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjb6SFR8yw9rZiaFKB1H58CwUMes-zeJ3SU_biLxnfblLcG5tUZF2G50JQCYqDGvNvrJLT3o5buEyuhrJq_VYUP-1gz7WZwlPbpSQ25VXzQ7MHLUZpR7Zod4H3g4q1mB3NepawNG5RRwx1XvjLWFbPoK3wkFkhF_pxXAzAc_tCTGqXSMwWJ1VWuCzbacyLuGbhXJxWJwLHRbXxkdVcRPOKvWxV58NSS8Puxo_-3WGL22JWbEjawuO_8taisGaWQDAoyO773SXK" },
];
