import { About } from "@/components/about";
import { ClosingCta } from "@/components/closing-cta";
import { EventJsonLd } from "@/components/event-json-ld";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { MobileTicketBar } from "@/components/mobile-ticket-bar";
import { Schedule } from "@/components/schedule";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Tickets } from "@/components/tickets";
import { Videos } from "@/components/videos";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Marquee items={["Workshops", "Socials", "Top Artists", "Great Vibes"]} />
        <About />
        <Experience />
        <Schedule />
        <Tickets />
        <Videos />
        <ClosingCta />
      </main>
      <SiteFooter />
      <MobileTicketBar />
      <EventJsonLd />
    </>
  );
}
