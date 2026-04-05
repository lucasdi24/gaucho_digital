import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative w-full bg-institutional-blue text-white">
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-10">
          {/* Branding */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-black tracking-tighter font-[family-name:var(--font-headline)] flex items-center">
                <span className="text-mountain-orange mr-2">▲</span>EAAM
              </h2>
              <p className="text-slate-300 text-lg font-light leading-relaxed max-w-sm">
                Escuela Argentina de Artes y Oficios de la Montaña.{" "}
                <br />
                <span className="font-semibold text-white">
                  Excelencia técnica en terrenos desafiantes.
                </span>
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <span className="text-xs uppercase tracking-widest text-slate-400 font-[family-name:var(--font-headline)] font-bold">
                Seguinos
              </span>
              <div className="flex space-x-5">
                {["social_leaderboard", "photo_camera", "play_circle"].map((icon) => (
                  <a
                    key={icon}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-mountain-orange transition-all duration-300"
                  >
                    <span className="material-symbols-outlined text-xl">{icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-mountain-orange font-[family-name:var(--font-headline)]">
                Institucional
              </h4>
              <nav className="flex flex-col space-y-3">
                <Link href="/nosotros" className="text-slate-300 hover:text-white transition-colors">Sobre Nosotros</Link>
                <Link href="/carreras" className="text-slate-300 hover:text-white transition-colors">Carreras</Link>
                <Link href="/cursos" className="text-slate-300 hover:text-white transition-colors">Cursos</Link>
                <Link href="/profesores" className="text-slate-300 hover:text-white transition-colors">Profesores</Link>
              </nav>
            </div>
            <div className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-mountain-orange font-[family-name:var(--font-headline)]">
                Alumnos
              </h4>
              <nav className="flex flex-col space-y-3">
                <Link href="/egresados" className="text-slate-300 hover:text-white transition-colors">Egresados</Link>
                <Link href="/beneficios" className="text-slate-300 hover:text-white transition-colors">Beneficios</Link>
                <Link href="#" className="text-slate-300 hover:text-white transition-colors">Reglamento</Link>
                <Link href="#" className="text-slate-300 hover:text-white transition-colors">Contacto</Link>
              </nav>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4 bg-black/20 p-8 rounded-2xl border border-white/5 space-y-6">
            <div>
              <h4 className="text-xl font-bold font-[family-name:var(--font-headline)] mb-2">
                Mantenete conectado
              </h4>
              <p className="text-slate-400 text-sm">
                Recibí novedades sobre expediciones y nuevas cohortes.
              </p>
            </div>
            <form className="flex flex-col space-y-3">
              <input
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-mountain-orange focus:border-transparent outline-none transition-all placeholder:text-slate-500"
                placeholder="Tu email"
                type="email"
              />
              <button
                type="submit"
                className="w-full bg-mountain-orange hover:bg-[#d16c34] text-white font-bold py-3 rounded-lg transition-colors font-[family-name:var(--font-headline)] text-sm uppercase tracking-wider"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-white/10 border-b py-6">
          {[
            { icon: "location_on", label: "Ubicación", value: "Avda Olazábal 5151, CABA" },
            { icon: "call", label: "Llamanos", value: "011 5120-6883" },
            { icon: "mail", label: "Email", value: "info@eaam.com.ar" },
            { icon: "chat", label: "Whatsapp", value: "011 5852-9787" },
          ].map((item) => (
            <div key={item.icon} className="flex items-center space-x-4 group">
              <div className="w-12 h-12 shrink-0 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-mountain-orange/20 transition-colors">
                <span className="material-symbols-outlined text-mountain-orange">{item.icon}</span>
              </div>
              <div>
                <p className="text-[10px] uppercase text-slate-500 font-bold tracking-widest">
                  {item.label}
                </p>
                <p className="text-sm font-medium">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <div className="px-3 py-1 border border-mountain-orange/50 rounded text-mountain-orange text-[10px] font-bold uppercase tracking-widest">
              Incorporada a la enseñanza oficial A-1530
            </div>
            <p className="text-slate-500 text-[11px]">
              © 2024 Escuela Argentina de Artes y Oficios de la Montaña. Todos
              los derechos reservados.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-[11px] text-slate-500 hover:text-white uppercase tracking-widest">
              Privacidad
            </Link>
            <span className="text-slate-700">•</span>
            <Link href="#" className="text-[11px] text-slate-500 hover:text-white uppercase tracking-widest">
              Términos
            </Link>
            <span className="text-slate-700">•</span>
            <Link href="/admin" className="text-[11px] text-slate-700 hover:text-slate-400 uppercase tracking-widest">
              Admin
            </Link>
          </div>
        </div>
      </div>

      {/* Background depth layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,140,0,0.03),transparent_40%)] pointer-events-none" />
    </footer>
  );
}
