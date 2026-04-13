import { notFound } from "next/navigation";
import { readCursos } from "@/lib/cursosData";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const cursos = readCursos();
  const curso = cursos.find((c) => c.slug === slug);
  if (!curso) return { title: "Curso no encontrado" };
  return { title: curso.title };
}

function LineList({ text, label }: { text: string; label?: string }) {
  const items = text
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
  if (items.length === 0) return null;
  return (
    <div>
      {label && (
        <h4 className="font-[family-name:var(--font-headline)] font-bold text-sm uppercase tracking-widest text-on-surface-variant mb-3">
          {label}
        </h4>
      )}
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-on-surface-variant">
            <span className="material-symbols-outlined text-on-primary-container text-base mt-0.5 flex-shrink-0">
              check_circle
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DescripcionParagraphs({ text }: { text: string }) {
  const paragraphs = text.split("\n\n").filter(Boolean);
  return (
    <div className="space-y-4">
      {paragraphs.map((p, i) => (
        <p key={i} className="text-on-surface-variant leading-relaxed">
          {p}
        </p>
      ))}
    </div>
  );
}

export default async function CursoDetailPage({ params }: Props) {
  const { slug } = await params;
  const cursos = readCursos();
  const curso = cursos.find((c) => c.slug === slug && c.visible);
  if (!curso) notFound();

  const isProximamente = curso.badge === "Próximamente";

  return (
    <>
      {/* Hero */}
      <section className="pt-20 md:pt-24 pb-0">
        <div className="relative overflow-hidden">
          {curso.imageSrc ? (
            <div className="relative h-72 md:h-96">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={curso.imageSrc}
                alt={curso.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 max-w-[1440px] mx-auto pb-10">
                <HeroContent curso={{ title: curso.title, badge: curso.badge, icon: curso.icon, modalidad: curso.modalidad }} isProximamente={isProximamente} />
              </div>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-stone-900 to-slate-900 px-6 md:px-12 max-w-[1440px] mx-auto py-16">
              <div className="max-w-4xl">
                <HeroContent curso={{ title: curso.title, badge: curso.badge, icon: curso.icon, modalidad: curso.modalidad }} isProximamente={isProximamente} />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Main content */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Left: content */}
          <div className="lg:col-span-2 space-y-8 md:space-y-12">
            {/* Descripcion */}
            {curso.descripcion && (
              <div>
                <h2 className="font-[family-name:var(--font-headline)] font-extrabold text-2xl md:text-3xl text-on-background mb-6">
                  Sobre el curso
                </h2>
                <DescripcionParagraphs text={curso.descripcion} />
              </div>
            )}

            {/* Salidas section */}
            {curso.salidaTitulo && (
              <div className="border-t border-outline-variant/20 pt-8 md:pt-12">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-on-primary-container text-2xl">
                    explore
                  </span>
                  <h2 className="font-[family-name:var(--font-headline)] font-extrabold text-2xl md:text-3xl text-on-background">
                    Salidas al terreno
                  </h2>
                </div>
                <h3 className="font-[family-name:var(--font-headline)] font-bold text-lg text-secondary mb-4">
                  {curso.salidaTitulo}
                </h3>

                {curso.salidaIntro && (
                  <div className="space-y-3 mb-8">
                    {curso.salidaIntro.split("\n\n").filter(Boolean).map((p, i) => (
                      <p key={i} className="text-on-surface-variant leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                )}

                {/* Datos de salida box */}
                {(curso.salidaFecha || curso.salidaDestino) && (
                  <div className="bg-surface-container rounded-xl p-6 mb-8 flex flex-wrap gap-6">
                    {curso.salidaFecha && (
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">
                          Fecha
                        </p>
                        <p className="text-on-background font-semibold text-sm">
                          {curso.salidaFecha}
                        </p>
                      </div>
                    )}
                    {curso.salidaDestino && (
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">
                          Destino
                        </p>
                        <p className="text-on-background font-semibold text-sm">
                          {curso.salidaDestino}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {curso.salidaDuracion && (
                    <LineList text={curso.salidaDuracion} label="Duración" />
                  )}
                  {curso.salidaTipos && (
                    <LineList text={curso.salidaTipos} label="Tipos de salida" />
                  )}
                  {curso.salidaDestinos && (
                    <LineList text={curso.salidaDestinos} label="Destinos" />
                  )}
                  {curso.salidaActividades && (
                    <LineList text={curso.salidaActividades} label="Actividades" />
                  )}
                  {curso.salidaIncluye && (
                    <LineList text={curso.salidaIncluye} label="Incluye" />
                  )}
                </div>

                {/* No incluye info box */}
                {curso.salidaNoIncluye && (
                  <div className="mt-8 bg-surface-container-low border border-outline-variant/20 rounded-xl p-5">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-on-surface-variant text-xl flex-shrink-0 mt-0.5">
                        info
                      </span>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">
                          No incluye
                        </p>
                        <p className="text-sm text-on-surface-variant">
                          {curso.salidaNoIncluye}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Nota formativa */}
                {curso.salidaNotaFormativa && (
                  <div className="mt-6 bg-on-primary-container/10 border border-on-primary-container/20 rounded-xl p-5">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-on-primary-container text-xl flex-shrink-0 mt-0.5">
                        school
                      </span>
                      <p className="text-sm text-on-surface-variant italic">
                        {curso.salidaNotaFormativa}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right: sticky info card */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-surface-container rounded-2xl p-6 space-y-4">
              <h3 className="font-[family-name:var(--font-headline)] font-bold text-sm uppercase tracking-widest text-on-surface-variant mb-4">
                Información del curso
              </h3>
              <InfoRow icon="location_on" label="Modalidad" value={curso.modalidad} />
              {curso.duracion && (
                <InfoRow icon="schedule" label="Duración" value={curso.duracion} />
              )}
              {curso.diasCursada && (
                <InfoRow icon="calendar_today" label="Días de cursada" value={curso.diasCursada} />
              )}
              {curso.horarios && (
                <InfoRow icon="access_time" label="Horarios" value={curso.horarios} />
              )}
              {curso.comienzo && (
                <InfoRow icon="play_arrow" label="Comienzo" value={curso.comienzo} />
              )}
              {curso.coordinador && (
                <InfoRow icon="person" label="Coordinador" value={curso.coordinador} />
              )}

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
                    <span className="material-symbols-outlined text-sm">
                      assignment_turned_in
                    </span>
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

function HeroContent({
  curso,
  isProximamente,
}: {
  curso: { title: string; badge: string; icon: string; modalidad: string };
  isProximamente: boolean;
}) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <span
          className={`text-[10px] font-extrabold px-3 py-1.5 rounded uppercase tracking-widest font-[family-name:var(--font-headline)] text-white ${
            isProximamente ? "bg-slate-700/90" : "bg-secondary/90"
          }`}
        >
          {curso.badge}
        </span>
        <span className="text-xs text-white/60 font-semibold uppercase tracking-wider">
          {curso.modalidad}
        </span>
      </div>
      <h1 className="font-[family-name:var(--font-headline)] font-extrabold text-3xl md:text-5xl text-white leading-tight tracking-tight">
        {curso.title}
      </h1>
    </div>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="material-symbols-outlined text-on-primary-container text-base flex-shrink-0 mt-0.5">
        {icon}
      </span>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
          {label}
        </p>
        <p className="text-sm text-on-background font-medium">{value}</p>
      </div>
    </div>
  );
}
