"use client";

import { useState, useSyncExternalStore } from "react";
import { Close, Menu, SunMark } from "@/components/icons";

const nav = [
  { href: "#experience", label: "Experience" },
  { href: "#schedule", label: "Schedule" },
  { href: "#tickets", label: "Passes" },
  { href: "#videos", label: "Videos" },
];

function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY > 24,
    () => false,
  );
  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "border-b border-white/10 bg-night-950/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-full focus:bg-sand focus:px-4 focus:py-2 focus:text-night-950"
      >
        Skip to content
      </a>
      <div className="wrap flex h-16 items-center justify-between gap-4 lg:h-20">
        <a href="#top" className="flex items-center gap-2.5" aria-label="OC Bachata Weekender, back to top">
          <SunMark className="size-9" />
          <span className="font-display text-2xl font-black uppercase italic leading-[0.8] tracking-wide">
            OC Bachata
            <span className="block text-[0.6rem] not-italic tracking-[0.42em] text-sun">Weekender</span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-semibold text-sand/80">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition hover:text-sun">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href="#tickets" className="btn btn-primary px-5 py-2.5 text-sm">
            Get tickets
          </a>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full text-sand ring-1 ring-white/15 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <Close className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-white/10 md:hidden">
          <ul className="wrap space-y-1 py-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-2xl px-3 py-3 font-display text-3xl font-black uppercase italic hover:bg-white/5"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
