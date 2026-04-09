"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { href: "/admin", label: "Imágenes" },
  { href: "/admin/profesores", label: "Profesores" },
  { href: "/admin/egresados", label: "Egresados" },
  { href: "/admin/cursos", label: "Cursos" },
];

export function AdminNav() {
  const pathname = usePathname();
  return (
    <div className="flex gap-1 border-b border-white/10 mb-10">
      {TABS.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          className={`px-5 py-3 text-sm font-bold transition-colors border-b-2 -mb-px ${
            pathname === tab.href
              ? "border-[#E87C3E] text-white"
              : "border-transparent text-slate-500 hover:text-slate-300"
          }`}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
}
