import type { ComponentType, SVGProps } from "react";
import { Calendar, MapPin, Users } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { event } from "@/content/event";

const facts: { icon: ComponentType<SVGProps<SVGSVGElement>>; label: string; value: string }[] = [
  { icon: Calendar, label: "Dates", value: event.dates },
  { icon: MapPin, label: "Location", value: event.location },
  { icon: Users, label: "Featuring", value: event.featuring },
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <SectionHeading eyebrow="Welcome" title={event.tagline} />
          <div className="reveal mt-7 space-y-5 text-lg/relaxed text-pretty text-sand/75">
            <p>
              Get ready for an unforgettable weekend of Bachata, world-class training, and social dancing! We’re
              bringing together international artists <strong className="text-sand">Angel &amp; Luna from Spain</strong> and local
              favorites <strong className="text-sand">Jonny &amp; Sami</strong> for an exciting weekend dedicated to
              learning, growing, and connecting through dance.
            </p>
            <p>
              Whether you’re looking to sharpen your technique, elevate your musicality, improve your styling, or simply
              immerse yourself in the Bachata community, this is your chance to train with amazing artists and take your
              dancing to the next level!
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
