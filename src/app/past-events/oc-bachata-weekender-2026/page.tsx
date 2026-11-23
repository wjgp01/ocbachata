import type { Metadata } from "next";
import { ClosingCta } from "@/components/closing-cta";
import { Marquee } from "@/components/marquee";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { About } from "@/components/weekender/about";
import { EventJsonLd } from "@/components/weekender/event-json-ld";
import { Experience } from "@/components/weekender/experience";
import { Hero } from "@/components/weekender/hero";
import { Schedule } from "@/components/weekender/schedule";
import { Videos } from "@/components/weekender/videos";
import { event } from "@/content/weekender-2026";
import { openGraph } from "@/lib/site";

const path = "/past-events/oc-bachata-weekender-2026";
const title = "OC Bachata Weekender 2026";

export const metadata: Metadata = {
  title,
  description: event.description,
  alternates: { canonical: path },
  openGraph: openGraph(`${title} · OC Bachata`, event.description, path),
};

export default function WeekenderPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Marquee items={["Workshops", "Socials", "Top Artists", "Great Vibes"]} />
        <About />
        <Experience />
        <Schedule />
        <Videos />
        <ClosingCta />
      </main>
      <SiteFooter />
      <EventJsonLd path={path} />
    </>
  );
}
