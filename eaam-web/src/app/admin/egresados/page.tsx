import { readEgresados } from "@/lib/egresadosData";
import { AdminNav } from "../AdminNav";
import { EgresadosManager } from "./EgresadosManager";

export const dynamic = "force-dynamic";

export default function AdminEgresadosPage() {
  const egresados = readEgresados();
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex justify-between items-center mb-10 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-[#E87C3E] text-xl">▲</span>
              <h1 className="text-2xl font-black">EAAM — Gestión de Egresados</h1>
            </div>
            <p className="text-slate-500 text-sm">Agregá, editá o eliminá egresados de la comunidad.</p>
          </div>
          <a href="/" target="_blank" className="text-sm text-slate-400 hover:text-white border border-white/10 rounded-lg px-4 py-2 transition-colors">Ver sitio →</a>
        </div>
        <AdminNav />
        <EgresadosManager initialData={egresados} />
      </div>
    </div>
  );
}
