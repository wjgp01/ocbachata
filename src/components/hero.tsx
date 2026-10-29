import Image from "next/image";
import flyer from "@/assets/images/oc-bachata-weekender-flyer.jpg";
import { Countdown } from "@/components/countdown";
import { ArrowRight, Calendar, Download, MapPin, Play, Sparkle } from "@/components/icons";
import { event } from "@/content/event";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="sunset-sky absolute inset-0" />
        <div className="sunset-sun absolute bottom-[9%] left-1/2 size-[min(120vw,640px)] -translate-x-1/2 lg:bottom-[13%] lg:left-auto lg:right-[3%] lg:translate-x-0" />
        <div className="sunset-sea absolute inset-x-0 bottom-0 h-[11%] lg:h-[15%]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(7_4_13/0.75)_0%,rgb(7_4_13/0.25)_45%,transparent_70%)] lg:bg-[linear-gradient(90deg,rgb(7_4_13/0.9)_0%,rgb(7_4_13/0.55)_42%,transparent_72%)]" />
        <div className="grain absolute inset-0 opacity-[0.07] mix-blend-overlay" />
      </div>

      <div className="wrap grid items-center gap-14 pb-20 pt-28 lg:min-h-[min(100svh,1000px)] lg:grid-cols-12 lg:gap-10 lg:pb-32 lg:pt-32">
        <div className="lg:col-span-7">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-sun backdrop-blur-md">
            <Sparkle className="size-3.5" />
            {event.tagline}
          </p>

          <h1 className="mt-6 font-display font-black uppercase leading-[0.8] tracking-tight">
            <span className="text-gradient-sunset block pb-2 pr-3 text-[clamp(4.75rem,19vw,11.5rem)] italic lg:text-[clamp(7rem,10.2vw,10rem)]">
              OC Bachata
            </span>
            <span className="block text-[clamp(2rem,8.4vw,5.5rem)] font-extrabold tracking-[0.2em] text-sand lg:text-[clamp(3.5rem,5.6vw,5.5rem)]">
              Weekender
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg/relaxed text-pretty text-sand/85 sm:text-xl/relaxed">
            A weekend of Bachata, world-class training, and social dancing with{" "}
            <strong className="text-sand">Angel &amp; Luna</strong> from Spain and local favorites{" "}
            <strong className="text-sand">Jonny &amp; Sami</strong>.
          </p>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-sand/90 sm:text-base">
            <li className="flex items-center gap-2">
              <Calendar className="size-4 text-sun" />
              {event.dates}
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-sun" />
              <span className="text-balance">{event.location}</span>
            </li>
          </ul>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#tickets" className="btn btn-primary">
              Get your pass
              <ArrowRight className="size-5" />
            </a>
            <a href="#videos" className="btn btn-ghost">
              <Play className="size-4" />
              Watch the artists
            </a>
          </div>

          <Countdown className="mt-11" startsAt={event.startsAt} endsAt={event.endsAt} />
        </div>

        <div className="lg:col-span-5">
          <figure className="relative mx-auto w-full max-w-[25rem] rotate-[2.5deg] transition duration-500 hover:rotate-0">
            <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-[radial-gradient(closest-side,rgb(255_122_31/0.55),transparent)] blur-2xl" />
            <Image
              src={flyer}
              alt="OC Bachata Weekender flyer with Jonny & Sami, Angel & Luna, DJ Zoukchatero and DJ Jassy, November 21–22, 2026 at Dance Precisions Dance Studio in Anaheim"
              placeholder="blur"
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 1024px) 400px, 90vw"
              className="h-auto w-full rounded-[1.25rem] shadow-[0_40px_90px_-30px_rgb(0_0_0/0.9)] ring-1 ring-white/15"
            />
          </figure>
          <a
            href={flyer.src}
            download="OC-Bachata-Weekender-flyer.jpg"
            className="mx-auto mt-6 flex w-fit items-center gap-2 rounded-full bg-night-950/55 px-4 py-2 text-sm font-semibold text-sand ring-1 ring-white/10 backdrop-blur-md transition hover:text-sun"
          >
            <Download className="size-4" />
            Download the flyer
          </a>
        </div>
      </div>
    </section>
  );
}
