"use client";

import { useSyncExternalStore } from "react";

function subscribeToClock(onTick: () => void) {
  const id = window.setInterval(onTick, 1000);
  return () => window.clearInterval(id);
}

// Whole seconds keep the snapshot stable between renders within the same tick.
const nowInSeconds = () => Math.floor(Date.now() / 1000);

export function Countdown({
  startsAt,
  endsAt,
  className = "",
}: {
  startsAt: string;
  endsAt: string;
  className?: string;
}) {
  // The server renders placeholders; the browser fills in the live time after hydration.
  const now = useSyncExternalStore(subscribeToClock, nowInSeconds, () => null);
  const start = Date.parse(startsAt) / 1000;
  const end = Date.parse(endsAt) / 1000;

  if (now !== null && now >= start) {
    return (
      <p className={`font-display text-3xl font-black uppercase italic text-sun ${className}`}>
        {now >= end ? "Thank you for dancing with us!" : "The weekend is on — see you on the dance floor!"}
      </p>
    );
  }

  const remaining = now === null ? null : start - now;
  const units = [
    { label: "Days", value: remaining === null ? null : Math.floor(remaining / 86400) },
    { label: "Hours", value: remaining === null ? null : Math.floor((remaining % 86400) / 3600) },
    { label: "Minutes", value: remaining === null ? null : Math.floor((remaining % 3600) / 60) },
    { label: "Seconds", value: remaining === null ? null : remaining % 60 },
  ];

  return (
    <div className={className}>
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-sand/60">The weekend starts in</p>
      <div className="mt-3 flex gap-2 sm:gap-3" aria-hidden="true">
        {units.map((unit) => (
          <div key={unit.label} className="glass w-[4.6rem] rounded-2xl px-2 py-3 text-center sm:w-20">
            <span className="block font-display text-4xl font-black leading-none tabular-nums sm:text-5xl">
              {unit.value === null ? "--" : String(unit.value).padStart(2, "0")}
            </span>
            <span className="mt-1.5 block text-[0.65rem] font-bold uppercase tracking-widest text-sand/60">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
      <p className="sr-only">Starts Saturday, November 21, 2026 at 7:00 PM Pacific Time.</p>
    </div>
  );
}
