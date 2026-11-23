import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/oc-bachata-logo.png";
import { ArrowRight, MapPin } from "@/components/icons";
import { site } from "@/content/site";

export function HomeHero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="sunset-sky absolute inset-0" />
        <div className="sunset-sun absolute -bottom-[min(42vw,300px)] left-1/2 size-[min(110vw,720px)] -translate-x-1/2 opacity-80 lg:-bottom-[470px]" />
        <div className="sunset-sea absolute inset-x-0 bottom-0 h-[9%]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(7_4_13/0.8)_0%,rgb(7_4_13/0.35)_50%,transparent_80%)]" />
        <div className="grain absolute inset-0 opacity-[0.07] mix-blend-overlay" />
      </div>

      <div className="wrap grid items-center gap-12 pb-28 pt-28 lg:min-h-[min(100svh,920px)] lg:grid-cols-12 lg:gap-10 lg:pb-40 lg:pt-32">
        <div className="lg:col-span-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-sun backdrop-blur-md">
            <MapPin className="size-3.5" />
            {site.region}
          </p>

          <h1 className="mt-6 font-display font-black uppercase leading-[0.8] tracking-tight">
            <span className="text-gradient-sunset block pb-2 pr-3 text-[clamp(4.5rem,21vw,11.5rem)] italic lg:text-[clamp(7rem,10.5vw,10.5rem)]">
              Bachata
            </span>
            <span className="block text-[clamp(1.75rem,7.6vw,4.25rem)] font-extrabold tracking-[0.12em] text-sand lg:text-[clamp(2.5rem,4.2vw,4.25rem)]">
              in Orange County
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg/relaxed text-pretty text-sand/85 sm:text-xl/relaxed">
            World-class Bachata workshops, masterclasses and socials with international and local artists. We opened
            with the <strong className="text-sand">OC Bachata Weekender</strong> in November 2026, and there’s more on
            the way.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/past-events" className="btn btn-primary">
              See past events
              <ArrowRight className="size-5" />
            </Link>
            <Link href="/#contact" className="btn btn-ghost">
              Contact us
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative mx-auto w-full max-w-[36rem]">
            <div className="absolute -inset-10 -z-10 bg-[radial-gradient(closest-side,rgb(255_122_31/0.35),transparent)] blur-2xl" />
            <Image
              src={logo}
              alt="OC Bachata"
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 1024px) 576px, 90vw"
              className="h-auto w-full drop-shadow-[0_30px_50px_rgb(0_0_0/0.6)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
