"use client";

import Link from "next/link";
import { InquiryButton } from "@/components/contact/InquiryButton";
import {
  INSTITUTIONAL_LOGO_PATHS,
  eaamLogoClass,
} from "@/lib/institutionalLogoSizes";
import { mobileMenuItems, mobileTabItems } from "@/lib/mobileNav";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

function isTabActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isMenuItemActive(pathname: string, href: string) {
  if (href.includes("#")) return pathname === href.split("#")[0];
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileAppNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen, closeMenu]);

  if (pathname.startsWith("/admin")) return null;

  const moreOnlyPrefixes = ["/postitulos", "/beneficios", "/contacto", "/faq", "/profesores", "/egresados"];
  const moreActive =
    menuOpen ||
    moreOnlyPrefixes.some((p) => pathname === p || pathname.startsWith(`${p}/`));

  return (
    <>
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 z-[70] bg-white flex flex-col animate-mobile-sheet"
          role="dialog"
          aria-modal="true"
          aria-label="Menú"
        >
          <div className="shrink-0 flex items-center justify-between gap-4 px-5 pt-[max(1rem,env(safe-area-inset-top))] pb-4 border-b border-outline-variant/20">
            <Link href="/" onClick={closeMenu} className="shrink-0 min-w-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={INSTITUTIONAL_LOGO_PATHS.eaam}
                alt="EAAM"
                className={eaamLogoClass("mobile")}
              />
            </Link>
            <button
              type="button"
              onClick={closeMenu}
              className="p-2 -mr-2 text-secondary hover:text-institutional-blue rounded-lg cursor-pointer"
              aria-label="Cerrar menú"
            >
              <span className="material-symbols-outlined text-[1.75rem]">close</span>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto overscroll-contain px-5 py-2">
            <ul className="divide-y divide-outline-variant/10">
              {mobileMenuItems.map((item) => {
                const active = isMenuItemActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={`flex items-center gap-4 py-4 text-[1.05rem] font-[family-name:var(--font-headline)] font-medium transition-colors ${
                        active ? "text-institutional-blue" : "text-secondary"
                      }`}
                    >
                      <span
                        className={`material-symbols-outlined text-[1.65rem] shrink-0 ${
                          active ? "text-institutional-blue" : "text-secondary"
                        }`}
                        aria-hidden
                      >
                        {item.icon}
                      </span>
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="shrink-0 px-5 py-4 border-t border-outline-variant/15 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <InquiryButton
              intent="inscripcion"
              onClick={closeMenu}
              className="flex items-center justify-center w-full bg-primary-container text-on-primary-container px-4 py-3.5 rounded-xl font-[family-name:var(--font-headline)] font-bold text-sm hover:brightness-110 transition-all cursor-pointer"
            >
              Inscribite ahora
            </InquiryButton>
          </div>
        </div>
      )}

      <nav
        className="md:hidden fixed inset-x-0 bottom-0 z-[55] bg-white border-t border-outline-variant/25 pb-[env(safe-area-inset-bottom)]"
        aria-label="Navegación principal"
      >
        <div className="grid grid-cols-5 h-[3.75rem]">
          {mobileTabItems.map((tab) => {
            const active = isTabActive(pathname, tab.href);
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`flex flex-col items-center justify-center gap-0.5 min-w-0 px-1 transition-colors ${
                  active ? "text-institutional-blue" : "text-secondary"
                }`}
              >
                <span className="material-symbols-outlined text-[1.35rem] leading-none" aria-hidden>
                  {tab.icon}
                </span>
                <span className="text-[0.65rem] font-[family-name:var(--font-headline)] font-medium leading-tight truncate max-w-full">
                  {tab.label}
                </span>
              </Link>
            );
          })}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className={`flex flex-col items-center justify-center gap-0.5 min-w-0 px-1 cursor-pointer transition-colors ${
              moreActive ? "text-institutional-blue" : "text-secondary"
            }`}
            aria-label="Ver más opciones"
            aria-expanded={menuOpen}
          >
            <span className="material-symbols-outlined text-[1.35rem] leading-none" aria-hidden>
              menu
            </span>
            <span className="text-[0.65rem] font-[family-name:var(--font-headline)] font-medium leading-tight">
              Ver más
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}
