import type { ComponentType, SVGProps } from "react";
import { Calendar, MapPin, Sparkle } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/content/site";

const facts: { icon: ComponentType<SVGProps<SVGSVGElement>>; label: string; value: string }[] = [
  { icon: MapPin, label: "Based in", value: site.region },
  { icon: Sparkle, label: "What we do", value: "Workshops, masterclasses & socials" },
  { icon: Calendar, label: "Grand opening", value: "November 21–22, 2026" },
];

export function HomeAbout() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <SectionHeading eyebrow="About us" title="Bachata, made in Orange County" />
          <div className="reveal mt-7 space-y-5 text-lg/relaxed text-pretty text-sand/75">
            <p>
              OC Bachata brings international and local artists to Orange County for workshops, masterclasses, and
              nights of social dancing.
            </p>
            <p>
              Whether you want to sharpen your technique, elevate your musicality, improve your styling, or simply
              immerse yourself in the Bachata community, there’s a place for you on our dance floor.
            </p>
          </div>
        </div>

        <dl className="grid gap-4 self-end sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
          {facts.map(({ icon: Icon, label, value }) => (
            <div key={label} className="reveal glass flex items-start gap-4 rounded-3xl p-5">
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-linear-to-br from-flame to-brand text-white">
                <Icon className="size-5" />
              </span>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.2em] text-sun">{label}</dt>
                <dd className="mt-1 text-lg font-bold leading-snug">{value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
