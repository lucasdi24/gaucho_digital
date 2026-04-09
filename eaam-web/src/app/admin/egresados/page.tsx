import { readEgresados } from "@/lib/egresadosData";
import { AdminNav } from "../AdminNav";
import { EgresadosManager } from "./EgresadosManager";

export const dynamic = "force-dynamic";

export default function AdminEgresadosPage() {
  const egresados = readEgresados();
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <AdminNav />
      <div className="mb-8">
        <h2 className="text-lg font-bold text-white">Egresados</h2>
        <p className="text-white/40 text-sm mt-1">Agregá, editá o eliminá egresados de la comunidad.</p>
      </div>
      <EgresadosManager initialData={egresados} />
    </div>
  );
}
