import type { ComponentType, SVGProps } from "react";
import { Calendar, MapPin, Sparkle } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/content/site";

const facts: { icon: ComponentType<SVGProps<SVGSVGElement>>; label: string; value: string }[] = [
  { icon: MapPin, label: "Based in", value: site.basedIn },
  { icon: Sparkle, label: "What we do", value: "Workshops, masterclasses & socials" },
  { icon: Calendar, label: "Since", value: "November 2026" },
];

const purpose = [
  {
    label: "Our mission",
    text: "To become a community of dancers who train, grow, and stay relevant with the latest Bachata moves.",
  },
  {
    label: "Our vision",
    text: "An academy with rotating resident instructors, inspirational talent, and continuous learning.",
  },
];

const values = [
  "Continuous Growth",
  "Passion for Dance",
  "Community",
  "Innovation",
  "Quality Education",
  "Respect",
  "Inclusivity",
  "Discipline & Dedication",
];

export function HomeAbout() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <SectionHeading eyebrow="Who we are" title="About us" />
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

      <div className="wrap mt-16 grid gap-4 lg:grid-cols-2">
        {purpose.map(({ label, text }) => (
          <div key={label} className="reveal glass rounded-3xl p-6 sm:p-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-sun">{label}</h3>
            <p className="mt-4 text-2xl font-bold leading-snug text-pretty">{text}</p>
          </div>
        ))}
      </div>

      <div className="wrap mt-16">
        <h3 className="reveal font-display text-4xl font-black uppercase italic leading-none tracking-tight sm:text-5xl">
          Our values
        </h3>
        <ol className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {values.map((value, index) => (
            <li key={value} className="reveal glass rounded-3xl p-5 sm:p-6">
              <span className="text-gradient-sunset inline-block pr-1 font-display text-4xl font-black italic leading-none">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-lg font-bold leading-snug">{value}</p>
            </li>
          ))}
        </ol>

        <p className="reveal mt-16 text-center font-display text-3xl font-black uppercase italic leading-tight text-balance sm:text-4xl lg:text-5xl">
          <span className="text-gradient-sunset pr-1">Train with purpose. Dance with passion. Grow with us.</span>
        </p>
      </div>
    </section>
  );
}
