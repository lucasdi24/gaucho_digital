import { readPostitulos } from "@/lib/postitulosData";
import { PostitulosManager } from "./PostitulosManager";
import { AdminNav } from "../AdminNav";

export const dynamic = "force-dynamic";
export const metadata = { title: "Admin — Postítulos" };

export default function AdminPostitulosPage() {
  const postitulos = readPostitulos();
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <AdminNav />
      <div className="mb-8">
        <h2 className="text-lg font-bold text-white">Postítulos</h2>
        <p className="text-white/40 text-sm mt-1">Gestioná los postítulos docentes: contenido, imágenes, visibilidad y datos de inscripción.</p>
      </div>
      <PostitulosManager initialData={postitulos} />
    </div>
  );
}
