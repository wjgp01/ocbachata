import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <div className={`reveal max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      <p
        className={`flex items-center gap-3 text-sm font-bold uppercase tracking-[0.25em] text-sun ${centered ? "justify-center" : ""}`}
      >
        <span className="h-px w-8 bg-sun/60" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-5xl font-black uppercase italic leading-[0.9] tracking-tight text-balance sm:text-6xl lg:text-7xl">
        {title}
      </h2>
      {children ? <div className="mt-5 text-lg/relaxed text-pretty text-sand/70">{children}</div> : null}
    </div>
  );
}
