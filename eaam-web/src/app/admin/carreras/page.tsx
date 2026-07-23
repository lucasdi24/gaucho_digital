import { readCarreras } from "@/lib/carrerasData";
import { CarrerasManager } from "./CarrerasManager";
import { AdminNav } from "../AdminNav";

export const dynamic = "force-dynamic";
export const metadata = { title: "Admin — Carreras" };

export default function AdminCarrerasPage() {
  const carreras = readCarreras();
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <AdminNav />
      <div className="mb-8">
        <h2 className="text-lg font-bold text-white">Carreras</h2>
        <p className="text-white/40 text-sm mt-1">Gestioná las carreras: contenido, imágenes, visibilidad y datos de inscripción.</p>
      </div>
      <CarrerasManager initialData={carreras} />
    </div>
  );
}
