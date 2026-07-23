import { readBeneficios } from "@/lib/beneficiosData";
import { BeneficiosManager } from "./BeneficiosManager";
import { AdminNav } from "../AdminNav";

export const dynamic = "force-dynamic";
export const metadata = { title: "Admin — Beneficios" };

export default function AdminBeneficiosPage() {
  const beneficios = readBeneficios();
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <AdminNav />
      <div className="mb-8">
        <p className="text-white/40 text-sm mt-1">Gestioná los beneficios: agregá, editá, ocultá o eliminá según sea necesario.</p>
      </div>
      <BeneficiosManager initialData={beneficios} />
    </div>
  );
}
