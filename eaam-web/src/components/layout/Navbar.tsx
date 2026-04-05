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
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md editorial-shadow">
      <nav className="flex justify-between items-center px-6 md:px-12 h-20 max-w-[1440px] mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tighter text-institutional-blue font-[family-name:var(--font-headline)]"
        >
          EAAM
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-[family-name:var(--font-headline)] font-semibold tracking-tight transition-all duration-300 ${
                  isActive
                    ? "text-institutional-blue border-b-2 border-primary pb-1"
                    : "text-secondary hover:text-institutional-blue"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="hidden lg:block text-secondary font-semibold text-sm hover:text-primary transition-colors font-[family-name:var(--font-headline)]"
          >
            Campus Alumnos
          </Link>
          <Link
            href="#"
            className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-lg font-[family-name:var(--font-headline)] font-bold text-sm shadow-sm hover:brightness-110 transition-all active:scale-95"
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
