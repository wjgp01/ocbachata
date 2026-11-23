import type { StaticImageData } from "next/image";
import weekenderFlyer from "@/assets/images/oc-bachata-weekender-flyer.jpg";

// Every event we've held, newest first. Each one gets a card on the Past Events page and the home page,
// and `href` points at its own page under src/app/past-events/.
export const pastEvents: {
  name: string;
  label: string;
  dates: string;
  location: string;
  featuring: string;
  summary: string;
  image: StaticImageData;
  imageAlt: string;
  href: string;
}[] = [
  {
    name: "OC Bachata Weekender",
    label: "Grand opening",
    dates: "November 21–22, 2026",
    location: "Dance Precision’s Dance Studio, Anaheim",
    featuring: "Angel & Luna, Jonny & Sami",
    summary:
      "Our grand opening: two days of workshops and masterclasses with Angel & Luna from Spain and local favorites Jonny & Sami, plus two nights of social dancing.",
    image: weekenderFlyer,
    imageAlt: "OC Bachata Weekender flyer with Jonny & Sami, Angel & Luna, DJ Zoukchatero and DJ Jassy",
    href: "/past-events/oc-bachata-weekender-2026",
  },
];
