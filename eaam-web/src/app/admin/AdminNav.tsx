"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { href: "/admin", label: "Imágenes", icon: "image" },
  { href: "/admin/profesores", label: "Profesores", icon: "group" },
  { href: "/admin/egresados", label: "Egresados", icon: "school" },
  { href: "/admin/carreras", label: "Carreras", icon: "landscape" },
  { href: "/admin/postitulos", label: "Postítulos", icon: "forest" },
  { href: "/admin/cursos", label: "Cursos", icon: "terrain" },
  { href: "/admin/beneficios", label: "Beneficios", icon: "card_giftcard" },
];

export function AdminNav() {
  const pathname = usePathname();
  return (
    <nav className="flex gap-1 mb-8 bg-white/[0.03] rounded-xl p-1 border border-white/[0.06]">
      {TABS.map((tab) => {
        const active = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              active
                ? "bg-[#E87C3E] text-white shadow-lg shadow-[#E87C3E]/20"
                : "text-white/40 hover:text-white/70 hover:bg-white/5"
            }`}
          >
            <span className="material-symbols-outlined text-base leading-none">{tab.icon}</span>
            <span className="hidden sm:inline">{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
