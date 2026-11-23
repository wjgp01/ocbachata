import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { PastEventCard } from "@/components/past-event-card";
import { SectionHeading } from "@/components/section-heading";
import { pastEvents } from "@/content/past-events";

// The latest past events on the home page; the Past Events tab lists them all.
export function PastEventsPreview() {
  return (
    <section id="past-events" className="py-20 sm:py-28">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Our events" title="Past events" />
          <Link href="/past-events" className="reveal btn btn-ghost">
            All past events
            <ArrowRight className="size-5" />
          </Link>
        </div>
        <div className="mt-14 space-y-6">
          {pastEvents.slice(0, 2).map((event) => (
            <PastEventCard key={event.href} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
