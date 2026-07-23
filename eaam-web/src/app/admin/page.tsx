import { getAdminImageSlotGroups } from "@/lib/adminImageSlots";
import { readImageConfig } from "@/lib/imageConfig";
import { ImageUploader } from "./ImageUploader";
import { EntityImageUploader } from "./EntityImageUploader";
import { AdminNav } from "./AdminNav";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const config = readImageConfig();
  const groups = getAdminImageSlotGroups();

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <AdminNav />

      <div className="mb-8">
        <h2 className="text-lg font-bold text-white">Imágenes del sitio</h2>
        <p className="text-white/40 text-sm mt-1">
          Subí una imagen y hacé clic en &quot;Guardar&quot;. Las secciones de abajo muestran el
          contenido actual de cada carrera, curso, profesor, etc.
        </p>
      </div>

      {groups.map((group) => (
        <div key={group.category} className="mb-12">
          <h2 className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-2 flex items-center gap-3">
            <span>{group.category}</span>
            <span className="flex-1 h-px bg-white/10" />
          </h2>
          {group.hint && (
            <p className="text-slate-600 text-xs mb-4 max-w-2xl">{group.hint}</p>
          )}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {group.slots.map((slot) =>
              slot.kind === "config" ? (
                <ImageUploader
                  key={slot.key}
                  imageKey={slot.key}
                  label={slot.label}
                  currentSrc={config[slot.key] ?? null}
                  fallbackSrc={slot.fallback}
                />
              ) : (
                <EntityImageUploader
                  key={`${slot.entity}-${slot.id}`}
                  entity={slot.entity}
                  id={slot.id}
                  label={slot.label}
                  subtitle={slot.subtitle}
                  imageSrc={slot.imageSrc}
                />
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
