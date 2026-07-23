import { readCursos } from "@/lib/cursosData";
import { CursosManager } from "./CursosManager";
import { AdminNav } from "../AdminNav";

export const dynamic = "force-dynamic";
export const metadata = { title: "Admin — Cursos" };

export default function AdminCursosPage() {
  const cursos = readCursos();
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <AdminNav />
      <div className="mb-8">
        <h2 className="text-lg font-bold text-white">Cursos</h2>
        <p className="text-white/40 text-sm mt-1">Gestioná los cursos: agregá, editá, ocultá o eliminá según sea necesario.</p>
      </div>
      <CursosManager initialData={cursos} />
    </div>
  );
}
