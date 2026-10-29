import Image, { type StaticImageData } from "next/image";
import angelLuna from "@/assets/images/artists/angel-luna.jpg";
import djs from "@/assets/images/artists/djs.jpg";
import jonnySami from "@/assets/images/artists/jonny-sami.jpg";
import leadStyling from "@/assets/images/videos/lead-styling-angel-garcia.jpg";
import { SectionHeading } from "@/components/section-heading";

function PhotoCard({
  image,
  alt,
  eyebrow,
  title,
  text,
  className = "",
}: {
  image: StaticImageData;
  alt: string;
  eyebrow: string;
  title: string;
  text: string;
  className?: string;
}) {
  return (
    <article
      className={`reveal group relative isolate flex min-h-[26rem] flex-col justify-end overflow-hidden rounded-3xl p-6 ring-1 ring-white/10 lg:min-h-0 ${className}`}
    >
      <Image
        src={image}
        alt={alt}
        fill
        placeholder="blur"
        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
        className="-z-10 object-cover object-top transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-night-950 via-night-950/45 to-transparent" />
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-sun">{eyebrow}</p>
      <h3 className="mt-2 font-display text-4xl font-black uppercase italic leading-[0.9] text-balance">{title}</h3>
      <p className="mt-2 text-sand/80">{text}</p>
    </article>
  );
}

function StatCard({ value, unit, title, text }: { value: string; unit: string; title: string; text: string }) {
  return (
    <article className="reveal glass flex flex-col justify-between gap-6 rounded-3xl p-6">
      <p className="flex items-baseline gap-1.5 font-display font-black uppercase italic leading-none">
        <span className="text-gradient-sunset pr-1 text-8xl">{value}</span>
        <span className="text-2xl text-sun">{unit}</span>
      </p>
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-1 text-sand/70">{text}</p>
      </div>
    </article>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="wrap">
        <SectionHeading eyebrow="What to expect" title="Come train. Level up. Connect.">
          World-class instruction from international and local artists, five hours of training, and two nights of
          dancing.
        </SectionHeading>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:auto-rows-[15.5rem] lg:grid-cols-4">
          <PhotoCard
            image={angelLuna}
            alt="Angel and Luna"
            eyebrow="🇪🇸 International Artists"
            title="Angel & Luna"
            text="Train with Angel & Luna from Spain."
            className="lg:row-span-2"
          />
          <PhotoCard
            image={jonnySami}
            alt="Jonny and Sami"
            eyebrow="🇺🇸 Local Artists"
            title="Jonny & Sami"
            text="Learn and dance with Jonny & Sami."
            className="lg:row-span-2"
          />
          <PhotoCard
            image={djs}
            alt="DJ Zoukchatero and DJ Jassy"
            eyebrow="Saturday Night Social"
            title={"DJ Jassy & DJ Zoukchatero"}
            text="On the decks Saturday night at Dance Precisions Dance Studio."
            className="md:row-span-2"
          />
          <StatCard
            value="5"
            unit="hrs"
            title="Hours of Training"
            text="Build your technique, connection, and confidence."
          />
          <StatCard
            value="3"
            unit="hr"
            title="Masterclass"
            text="Take a deeper dive into your Bachata journey."
          />

          <article className="reveal group relative isolate flex min-h-[20rem] flex-col justify-end overflow-hidden rounded-3xl p-6 ring-1 ring-white/10 sm:p-8 md:col-span-2 lg:col-span-4 lg:min-h-0">
            <Image
              src={leadStyling}
              alt="Angel leading a lead styling class"
              fill
              placeholder="blur"
              sizes="100vw"
              className="-z-10 object-cover object-[50%_30%] transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 -z-10 bg-linear-to-t from-night-950 via-night-950/70 to-night-950/20 lg:bg-linear-to-r lg:from-night-950 lg:via-night-950/75 lg:to-night-950/10" />
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-sun">Add-on workshop</p>
                <h3 className="mt-2 font-display text-4xl font-black uppercase italic leading-[0.9] sm:text-5xl">
                  Angel Lead Styling with Recording
                </h3>
                <p className="mt-3 text-sand/80">
                  Refine your movement, develop your style, and capture your progress.
                </p>
              </div>
              <p className="flex items-baseline gap-1.5 font-display font-black uppercase italic leading-none">
                <span className="text-gradient-sunset pr-1 text-8xl">90</span>
                <span className="text-2xl text-sun">min</span>
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
