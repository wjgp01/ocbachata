"use client";

import { useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  window.addEventListener("resize", onChange);
  return () => {
    window.removeEventListener("scroll", onChange);
    window.removeEventListener("resize", onChange);
  };
}

// Visible once the hero is behind you, hidden while the checkout or footer is on screen.
function shouldShow() {
  if (window.scrollY < window.innerHeight * 0.9) return false;
  return !["tickets", "site-footer"].some((id) => {
    const rect = document.getElementById(id)?.getBoundingClientRect();
    return rect ? rect.top < window.innerHeight && rect.bottom > 0 : false;
  });
}

export function MobileTicketBar() {
  const visible = useSyncExternalStore(subscribe, shouldShow, () => false);

  return (
    <div
      inert={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition duration-300 md:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-night-900/90 p-2 pl-4 shadow-2xl backdrop-blur-xl">
        <div className="min-w-0 leading-tight">
          <p className="truncate font-display text-xl font-black uppercase italic">OC Bachata Weekender</p>
          <p className="text-xs text-sand/60">Nov 21–22 · Anaheim &amp; Costa Mesa</p>
        </div>
        <a href="#tickets" className="btn btn-primary shrink-0 px-5 py-3 text-sm">
          Get tickets
        </a>
      </div>
    </div>
  );
}
