import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-[200] bg-[#0c0c0e] overflow-y-auto">
      {/* Topbar */}
      <header className="sticky top-0 z-10 bg-[#0c0c0e]/95 backdrop-blur border-b border-white/[0.06] px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded bg-[#E87C3E] flex items-center justify-center">
            <span className="text-white text-xs font-black">E</span>
          </div>
          <span className="text-white font-bold text-sm tracking-wide">EAAM</span>
          <span className="text-white/20 text-xs">·</span>
          <span className="text-white/40 text-xs font-medium">Panel de administración</span>
        </div>
        <Link
          href="/"
          target="_blank"
          className="text-xs text-white/40 hover:text-white/80 border border-white/10 hover:border-white/20 rounded-lg px-3 py-1.5 transition-all flex items-center gap-1.5"
        >
          Ver sitio
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 8L8 2M8 2H4M8 2v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        </Link>
      </header>
      {children}
    </div>
  );
}
