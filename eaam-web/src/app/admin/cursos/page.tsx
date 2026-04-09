import { readCursos } from "@/lib/cursosData";
import { CursosManager } from "./CursosManager";

export const dynamic = "force-dynamic";
export const metadata = { title: "Admin — Cursos" };

export default function AdminCursosPage() {
  const cursos = readCursos();
  return (
    <div>
      <h2 className="text-white text-xl font-bold mb-6">Cursos</h2>
      <CursosManager initialData={cursos} />
    </div>
  );
}
