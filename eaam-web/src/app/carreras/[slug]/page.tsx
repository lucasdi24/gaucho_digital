import { notFound } from "next/navigation";
import { readCarreras } from "@/lib/carrerasData";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const carrera = readCarreras().find((c) => c.slug === slug);
  if (!carrera) return { title: "Carrera no encontrada" };
  return { title: `${carrera.title} — ${carrera.modalidad} (${carrera.location})` };
}

function Paragraphs({ text }: { text: string }) {
  return (
    <div className="space-y-4">
      {text.split("\n\n").filter(Boolean).map((p, i) => (
        <p key={i} className="text-on-surface-variant leading-relaxed">{p}</p>
      ))}
    </div>
  );
}

function BulletList({ text }: { text: string }) {
  const items = text.split("\n").map(s => s.trim()).filter(Boolean);
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-on-surface-variant">
          <span className="material-symbols-outlined text-on-primary-container text-base mt-0.5 flex-shrink-0">check_circle</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function InfoRow({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="material-symbols-outlined text-on-primary-container text-base flex-shrink-0 mt-0.5">{icon}</span>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">{label}</p>
        <p className="text-sm text-on-background font-medium">{value}</p>
      </div>
    </div>
  );
}

export default async function CarreraDetailPage({ params }: Props) {
  const { slug } = await params;
  const carrera = readCarreras().find((c) => c.slug === slug && c.visible);
  if (!carrera) notFound();

  const isProximamente = carrera.badge === "Próximamente";

  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-0">
        <div className="relative overflow-hidden">
          {carrera.imageSrc ? (
            <div className="relative h-72 md:h-96">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={carrera.imageSrc} alt={carrera.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 max-w-[1440px] mx-auto pb-10">
                <HeroContent carrera={carrera} isProximamente={isProximamente} />
              </div>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-stone-900 to-slate-900 px-6 md:px-12 max-w-[1440px] mx-auto py-16">
              <div className="max-w-4xl">
                <HeroContent carrera={carrera} isProximamente={isProximamente} />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Main content */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-10 md:space-y-14">

            {/* Descripcion */}
            {carrera.descripcion && (
              <div>
                <h2 className="font-[family-name:var(--font-headline)] font-extrabold text-2xl md:text-3xl text-on-background mb-6">
                  Sobre la carrera
                </h2>
                <Paragraphs text={carrera.descripcion} />
              </div>
            )}

            {/* Sección secundaria */}
            {carrera.seccionTitulo && (
              <div className="border-t border-outline-variant/20 pt-8 md:pt-12">
                <h2 className="font-[family-name:var(--font-headline)] font-extrabold text-2xl md:text-3xl text-on-background mb-6">
                  {carrera.seccionTitulo}
                </h2>
                {carrera.seccionCuerpo && <Paragraphs text={carrera.seccionCuerpo} />}

                {/* Alcance del título */}
                {carrera.alcanceCuerpo && (
                  <div className="mt-8 bg-surface-container rounded-xl p-6">
                    <h3 className="font-[family-name:var(--font-headline)] font-bold text-sm uppercase tracking-widest text-on-surface-variant mb-3">
                      Alcance del título
                    </h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{carrera.alcanceCuerpo}</p>
                  </div>
                )}

                {/* ¿A quién está dirigida? */}
                {carrera.dirigidaItems && (
                  <div className="mt-8">
                    <h3 className="font-[family-name:var(--font-headline)] font-bold text-base text-on-background mb-4">
                      ¿A quién está dirigida la carrera?
                    </h3>
                    <BulletList text={carrera.dirigidaItems} />
                    {carrera.requisito && (
                      <p className="mt-4 text-sm text-on-surface-variant">
                        <span className="font-semibold text-on-background">Requisito de ingreso:</span> {carrera.requisito}
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Plan de salidas */}
            {carrera.salidaTitulo && carrera.salidaCuerpo && (
              <div className="border-t border-outline-variant/20 pt-8 md:pt-12">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-on-primary-container text-2xl">explore</span>
                  <h2 className="font-[family-name:var(--font-headline)] font-extrabold text-2xl md:text-3xl text-on-background">
                    {carrera.salidaTitulo}
                  </h2>
                </div>
                <Paragraphs text={carrera.salidaCuerpo} />
              </div>
            )}
          </div>

          {/* Right: sticky info card */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-surface-container rounded-2xl p-6 space-y-4">
              <h3 className="font-[family-name:var(--font-headline)] font-bold text-sm uppercase tracking-widest text-on-surface-variant mb-4">
                Información de la carrera
              </h3>
              <InfoRow icon="location_on" label="Sede" value={carrera.location} />
              <InfoRow icon="wifi" label="Modalidad" value={carrera.modalidad} />
              {carrera.duracion && <InfoRow icon="schedule" label="Duración" value={carrera.duracion} />}
              {carrera.diasCursada && <InfoRow icon="calendar_today" label="Días de cursada" value={carrera.diasCursada} />}
              {carrera.horarios && <InfoRow icon="access_time" label="Horarios" value={carrera.horarios} />}
              {carrera.comienzo && <InfoRow icon="play_arrow" label="Comienzo" value={carrera.comienzo} />}
              {carrera.coordinador && <InfoRow icon="person" label="Coordinador" value={carrera.coordinador} />}

              {!isProximamente && (
                <div className="pt-4 space-y-3 border-t border-outline-variant/20">
                  <a
                    href="mailto:secretaria@eaam.com.ar"
                    className="flex items-center justify-center gap-2 w-full border border-secondary/30 text-secondary py-3 rounded-xl font-[family-name:var(--font-headline)] font-bold text-sm uppercase tracking-widest hover:bg-secondary/5 transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">mail</span>
                    Consultar
                  </a>
                  <a
                    href="https://wa.me/5491100000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-on-primary-container text-white py-3 rounded-xl font-[family-name:var(--font-headline)] font-bold text-sm uppercase tracking-widest hover:brightness-110 transition-all"
                  >
                    <span className="material-symbols-outlined text-sm">assignment_turned_in</span>
                    Inscribite ahora
                  </a>
                </div>
              )}

              {isProximamente && (
                <div className="pt-4 border-t border-outline-variant/20">
                  <a
                    href="mailto:secretaria@eaam.com.ar"
                    className="flex items-center justify-center gap-2 w-full bg-surface-container-lowest text-on-surface-variant py-3 rounded-xl font-[family-name:var(--font-headline)] font-bold text-sm uppercase tracking-widest hover:bg-surface-container transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">mail</span>
                    Recibir novedades
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function HeroContent({ carrera, isProximamente }: {
  carrera: { title: string; badge: string; modalidad: string; location: string; subtitulo: string };
  isProximamente: boolean;
}) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4 flex-wrap">
        <span className={`text-[10px] font-extrabold px-3 py-1.5 rounded uppercase tracking-widest font-[family-name:var(--font-headline)] text-white ${
          isProximamente ? "bg-slate-700/90" : "bg-secondary/90"
        }`}>{carrera.badge}</span>
        <span className="text-xs text-white/60 font-semibold uppercase tracking-wider">
          {carrera.modalidad} · {carrera.location}
        </span>
      </div>
      <h1 className="font-[family-name:var(--font-headline)] font-extrabold text-3xl md:text-5xl text-white leading-tight tracking-tight mb-3">
        {carrera.title}
      </h1>
      {carrera.subtitulo && (
        <p className="text-white/70 text-lg font-light">{carrera.subtitulo}</p>
      )}
    </div>
  );
}
