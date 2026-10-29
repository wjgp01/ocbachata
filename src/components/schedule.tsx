import { ArrowUpRight, MapPin } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { schedule, venues } from "@/content/event";

export function Schedule() {
  return (
    <section id="schedule" className="relative py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/3 -z-10 h-2/3 bg-[radial-gradient(50%_50%_at_50%_50%,rgb(110_18_51/0.35),transparent)]"
      />
      <div className="wrap">
        <SectionHeading eyebrow="The weekend" title="Two days of training. Two nights of dancing." />

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          {schedule.map((day) => (
            <article key={day.day} className="reveal glass rounded-3xl p-6 sm:p-8">
              <header className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-5">
                <h3 className="font-display text-5xl font-black uppercase italic leading-none">{day.day}</h3>
                <p className="font-display text-2xl font-black uppercase italic text-sun">{day.date}</p>
              </header>
              <ol className="mt-6 space-y-7 border-l border-white/15 pl-6">
                {day.items.map((item) => (
                  <li key={item.title} className="relative">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[1.84rem] top-1 size-3 rounded-full bg-flame shadow-[0_0_0_4px_var(--color-night-900),0_0_16px_rgb(255_122_31/0.8)]"
                    />
                    <p className="text-sm font-bold uppercase tracking-[0.15em] text-sun">{item.time}</p>
                    <p className="mt-1 text-2xl font-bold leading-tight">{item.title}</p>
                    <p className="mt-1 text-sand/70">{item.detail}</p>
                    <p className="mt-2 flex items-center gap-1.5 text-sm font-semibold text-sand/60">
                      <MapPin className="size-3.5" />
                      {item.venue}
                    </p>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {venues.map((venue) => (
            <a
              key={venue.name}
              href={venue.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal glass group flex items-start gap-4 rounded-3xl p-6 transition hover:bg-white/[0.08]"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-linear-to-br from-flame to-brand text-white">
                <MapPin className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-bold uppercase tracking-[0.2em] text-sun">{venue.role}</span>
                <span className="mt-1 block text-xl font-bold">{venue.name}</span>
                <span className="mt-1 block text-sand/70">
                  {venue.address.street}, {venue.address.city}, {venue.address.state} {venue.address.zip}
                </span>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold transition group-hover:text-sun">
                  Open in Maps
                  <ArrowUpRight className="size-4" />
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
