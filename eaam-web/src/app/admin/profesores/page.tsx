import { readProfesores } from "@/lib/profesoresData";
import { AdminNav } from "../AdminNav";
import { ProfesoresManager } from "./ProfesoresManager";

export const dynamic = "force-dynamic";

export default function AdminProfesoresPage() {
  const profesores = readProfesores();
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <AdminNav />
      <div className="mb-8">
        <h2 className="text-lg font-bold text-white">Profesores</h2>
        <p className="text-white/40 text-sm mt-1">Agregá, editá o eliminá profesores del equipo docente.</p>
      </div>
      <ProfesoresManager initialData={profesores} />
    </div>
  );
}
