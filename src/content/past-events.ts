import type { StaticImageData } from "next/image";
import weekenderFlyer from "@/assets/images/oc-bachata-weekender-flyer.jpg";

// Every event we've held, newest first. Each one shows as its flyer on the Past Events page and the home page.
export const pastEvents: {
  name: string;
  image: StaticImageData;
  imageAlt: string;
}[] = [
  {
    name: "OC Bachata Weekender",
    image: weekenderFlyer,
    imageAlt: "OC Bachata Weekender flyer, November 21–22, 2026 in Anaheim, California",
  },
];
