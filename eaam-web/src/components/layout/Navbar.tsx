"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/carreras", label: "Carreras" },
  { href: "/cursos", label: "Cursos" },
  { href: "/postitulos", label: "Postítulos" },
  { href: "/beneficios", label: "Beneficios" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 px-4 pt-3">
      <nav className="flex justify-between items-center px-5 md:px-8 h-13 max-w-[1440px] mx-auto bg-white/85 backdrop-blur-md border border-outline-variant/20 shadow-md rounded-2xl">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tighter text-institutional-blue font-[family-name:var(--font-headline)]"
        >
          EAAM
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
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

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="#"
            className="hidden lg:block text-on-surface-variant font-medium text-xs hover:text-primary transition-colors font-[family-name:var(--font-headline)]"
          >
            Campus Alumnos
          </Link>
          <Link
            href="#"
            className="bg-primary-container text-on-primary-container px-4 py-1.5 rounded-lg font-[family-name:var(--font-headline)] font-bold text-xs hover:brightness-110 transition-all active:scale-95"
          >
            Inscribite ahora
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-secondary hover:bg-surface-container rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menú"
          >
            <span className="material-symbols-outlined">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-outline-variant/20 px-6 py-6 space-y-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block text-lg font-[family-name:var(--font-headline)] font-semibold ${
                  isActive ? "text-mountain-orange" : "text-secondary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
