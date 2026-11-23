import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Users } from "@/components/icons";
import type { pastEvents } from "@/content/past-events";

// One past event, linking to its own page. Used on the Past Events page and the home page.
export function PastEventCard({ event }: { event: (typeof pastEvents)[number] }) {
  const facts = [
    { icon: Calendar, value: event.dates },
    { icon: MapPin, value: event.location },
    { icon: Users, value: event.featuring },
  ];

  return (
    <Link href={event.href} className="reveal group glass grid overflow-hidden rounded-3xl sm:grid-cols-5">
      <div className="relative aspect-[4/5] overflow-hidden sm:col-span-2 sm:aspect-auto sm:min-h-[26rem]">
        <Image
          src={event.image}
          alt={event.imageAlt}
          fill
          placeholder="blur"
          sizes="(min-width: 1280px) 480px, (min-width: 640px) 40vw, 100vw"
          className="object-cover object-top transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col p-6 sm:col-span-3 sm:p-8 lg:p-10">
        <p className="w-fit rounded-full bg-sun/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-sun">
          {event.label}
        </p>
        <h3 className="mt-4 font-display text-5xl font-black uppercase italic leading-[0.9] text-balance sm:text-6xl">
          {event.name}
        </h3>
        <ul className="mt-5 space-y-2 font-semibold text-sand/85">
          {facts.map(({ icon: Icon, value }) => (
            <li key={value} className="flex items-start gap-2">
              <Icon className="mt-1 size-4 shrink-0 text-sun" />
              {value}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sand/70">{event.summary}</p>
        <div className="mt-auto pt-8">
          <span className="btn btn-ghost">
            See the event
            <ArrowRight className="size-5 transition group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
