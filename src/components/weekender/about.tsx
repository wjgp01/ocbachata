import type { ComponentType, ReactNode, SVGProps } from "react";
import { Calendar, MapPin, Users } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { event, instagram } from "@/content/weekender-2026";

const facts: { icon: ComponentType<SVGProps<SVGSVGElement>>; label: string; value: string }[] = [
  { icon: Calendar, label: "Dates", value: event.dates },
  { icon: MapPin, label: "Location", value: event.location },
  { icon: Users, label: "Featuring", value: event.featuring },
];

// Artist names link to their Instagram profiles in a new tab.
function Profile({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-sun/60 underline-offset-4 transition hover:text-sun"
    >
      {children}
    </a>
  );
}

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <SectionHeading eyebrow="About the event" title={event.tagline} />
          <div className="reveal mt-7 space-y-5 text-lg/relaxed text-pretty text-sand/75">
            <p>
              Our grand opening was an unforgettable weekend of Bachata, world-class training, and social dancing! We
              brought together international artists{" "}
              <strong className="text-sand">
                <Profile href={instagram.angel}>Angel</Profile> &amp; <Profile href={instagram.luna}>Luna</Profile> from
                Spain
              </strong>{" "}
              and local favorites <strong className="text-sand">Jonny &amp; Sami</strong> for a weekend dedicated to
              learning, growing, and connecting through dance. Angel Garcia is the younger brother of Luis
              Garcia from{" "}
              <strong className="text-sand">
                <Profile href={instagram.luisYAndrea}>Luis y Andrea</Profile>
              </strong>
              .
            </p>
            <p>
              Thank you to everyone who came to sharpen their technique, elevate their musicality, improve their
              styling, or simply immerse themselves in the Bachata community. See you at the next one!
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
