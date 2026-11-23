import { ArrowUpRight } from "@/components/icons";
import { nextEventSurveyUrl } from "@/content/site";

// Shown while nothing is announced yet; swap in the next event's details once it's on sale.
export function Upcoming() {
  return (
    <section id="upcoming" className="py-6 sm:py-10">
      <div className="wrap">
        <div className="reveal relative overflow-hidden rounded-3xl bg-linear-to-br from-[#2b0f30] via-[#4f1030] to-[#8f1c1d] p-6 ring-1 ring-white/10 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 size-72 rounded-full bg-[radial-gradient(closest-side,rgb(255_178_56/0.45),transparent)]"
          />
          <div className="relative max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sun">Help shape our next event</p>
            <h2 className="mt-3 font-display text-5xl font-black uppercase italic leading-[0.9] text-balance sm:text-6xl">
              Next event coming soon
            </h2>
            <p className="mt-4 text-lg/relaxed text-pretty text-sand/80">
              We’re planning our next weekend of workshops and socials. Tell us what you’d like to see in our quick
              form.
            </p>
          </div>
          <a
            href={nextEventSurveyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary relative mt-8 shrink-0 lg:mt-0"
          >
            Share your ideas
            <ArrowUpRight className="size-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
