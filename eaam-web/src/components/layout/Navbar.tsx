"use client";

import Link from "next/link";
import { InstitutionalLogos } from "@/components/layout/InstitutionalLogos";
import { InquiryButton } from "@/components/contact/InquiryButton";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/carreras", label: "Carreras" },
  { href: "/cursos", label: "Cursos" },
  { href: "/postitulos", label: "Postítulos" },
  { href: "/beneficios", label: "Beneficios" },
];

const nosotrosSubmenu = [
  { href: "/nosotros#vision-de-la-escuela", label: "La escuela" },
  { href: "/profesores", label: "Profesores" },
  { href: "/egresados", label: "Egresados" },
] as const;

function isNosotrosActive(pathname: string) {
  return (
    pathname === "/nosotros" ||
    pathname.startsWith("/profesores") ||
    pathname.startsWith("/egresados")
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [nosotrosOpen, setNosotrosOpen] = useState(false);
  const nosotrosActive = isNosotrosActive(pathname);

  return (
    <header className="fixed top-0 w-full z-50 px-4 pt-3">
      <nav className="flex justify-between items-center gap-3 px-4 sm:px-5 md:px-8 min-h-[3.75rem] lg:min-h-[4.25rem] py-2.5 max-w-[1440px] mx-auto bg-white/85 backdrop-blur-md border border-outline-variant/20 shadow-md rounded-2xl">
        <InstitutionalLogos variant="navbar" />

        <div className="hidden md:flex items-center gap-6">
          {/* Nosotros + submenu */}
          <div
            className="relative"
            onMouseEnter={() => setNosotrosOpen(true)}
            onMouseLeave={() => setNosotrosOpen(false)}
          >
            <Link
              href="/nosotros"
              className={`inline-flex items-center gap-1 text-sm font-[family-name:var(--font-headline)] font-medium tracking-tight transition-all duration-200 ${
                nosotrosActive
                  ? "text-institutional-blue border-b border-primary pb-0.5"
                  : "text-on-surface-variant hover:text-institutional-blue"
              }`}
            >
              Nosotros
              <span
                className={`material-symbols-outlined text-base transition-transform ${nosotrosOpen ? "rotate-180" : ""}`}
              >
                expand_more
              </span>
            </Link>
            {nosotrosOpen && (
              <div className="absolute left-0 top-full pt-2 min-w-[220px]">
                <div className="bg-white/95 backdrop-blur-md border border-outline-variant/20 shadow-lg rounded-xl py-2 overflow-hidden">
                  {nosotrosSubmenu.map((item) => {
                    const isActive =
                      item.href === "/nosotros#vision-de-la-escuela"
                        ? pathname === "/nosotros"
                        : pathname === item.href || pathname.startsWith(item.href + "/");
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-4 py-2.5 text-sm font-[family-name:var(--font-headline)] font-medium transition-colors ${
                          isActive
                            ? "text-institutional-blue bg-surface-container"
                            : "text-on-surface-variant hover:text-institutional-blue hover:bg-surface-container/60"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-[family-name:var(--font-headline)] font-medium tracking-tight transition-all duration-200 ${
                  isActive
                    ? "text-institutional-blue border-b border-primary pb-0.5"
                    : "text-on-surface-variant hover:text-institutional-blue"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-3 shrink-0">
          <InquiryButton
            intent="inscripcion"
            className="bg-primary-container text-on-primary-container px-4 py-1.5 rounded-lg font-[family-name:var(--font-headline)] font-bold text-xs hover:brightness-110 transition-all active:scale-95 cursor-pointer"
          >
            Inscribite ahora
          </InquiryButton>
        </div>
      </nav>
    </header>
  );
}
