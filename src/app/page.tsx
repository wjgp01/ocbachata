import type { Metadata } from "next";
import { ClosingCta } from "@/components/closing-cta";
import { CodeOfConduct } from "@/components/code-of-conduct";
import { HomeAbout } from "@/components/home/about";
import { HomeHero } from "@/components/home/hero";
import { PastEventsPreview } from "@/components/home/past-events-preview";
import { Upcoming } from "@/components/home/upcoming";
import { Marquee } from "@/components/marquee";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <HomeHero />
        <Marquee items={["Workshops", "Masterclasses", "Socials", "Top Artists", "Great Vibes"]} />
        <HomeAbout />
        <Upcoming />
        <PastEventsPreview />
        <CodeOfConduct />
        <ClosingCta />
      </main>
      <SiteFooter />
    </>
  );
}
