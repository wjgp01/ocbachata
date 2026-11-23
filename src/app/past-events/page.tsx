import type { Metadata } from "next";
import { PastEventCard } from "@/components/past-event-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { pastEvents } from "@/content/past-events";
import { openGraph } from "@/lib/site";

const description = "Every OC Bachata event so far, starting with our grand opening weekender in November 2026.";

export const metadata: Metadata = {
  title: "Past Events",
  description,
  alternates: { canonical: "/past-events" },
  openGraph: openGraph("Past Events · OC Bachata", description, "/past-events"),
};

export default function PastEventsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="wrap pb-24 pt-32 lg:pt-40">
        <header className="max-w-3xl">
          <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.25em] text-sun">
            <span className="h-px w-8 bg-sun/60" aria-hidden="true" />
            OC Bachata
          </p>
          <h1 className="mt-4 font-display text-5xl font-black uppercase italic leading-[0.9] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Past events
          </h1>
          <p className="mt-5 text-lg/relaxed text-pretty text-sand/70">
            Every OC Bachata event so far. Open one to see its lineup, schedule and videos.
          </p>
        </header>

        <div className="mt-14 space-y-6">
          {pastEvents.map((event) => (
            <PastEventCard key={event.href} event={event} />
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
