import { ArrowRight } from "@/components/icons";

export function ClosingCta() {
  return (
    <section className="relative isolate overflow-hidden pb-40 pt-24 sm:pb-52 sm:pt-32">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="sunset-sky absolute inset-0" />
        <div className="sunset-sun absolute -bottom-[min(44vw,290px)] left-1/2 size-[min(90vw,620px)] -translate-x-1/2" />
        <div className="sunset-sea absolute inset-x-0 bottom-0 h-[11%]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--color-night-950)_0%,rgb(7_4_13/0.55)_40%,transparent_75%)]" />
        <div className="grain absolute inset-0 opacity-[0.07] mix-blend-overlay" />
      </div>

      <div className="wrap reveal text-center">
        <p className="mx-auto max-w-4xl font-display text-3xl font-extrabold uppercase leading-[1.05] text-balance sm:text-5xl">
          A grand opening. Incredible artists. Next-level training. Two nights of dancing. One amazing Bachata
          community.
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-lg/relaxed text-pretty text-sand/80">
          Let’s kick off this new chapter with great energy, unforgettable moments, and a dance floor full of passion!
        </p>
        <h2 className="text-gradient-sunset mx-auto mt-12 max-w-5xl pb-2 font-display text-[clamp(3.25rem,11vw,8.5rem)] font-black uppercase italic leading-[0.85] text-balance">
          Come train. Level up. Connect. Dance with us.
        </h2>
        <a href="#tickets" className="btn btn-primary mt-12 px-8 py-4 text-lg">
          Get your pass
          <ArrowRight className="size-5" />
        </a>
        <p className="mx-auto mt-8 w-fit max-w-full rounded-2xl bg-night-950/60 px-5 py-3 font-semibold text-sand ring-1 ring-white/10 backdrop-blur-md">
          OC Bachata Weekender — Let’s make our grand opening one to remember! 💃🕺
        </p>
      </div>
    </section>
  );
}
