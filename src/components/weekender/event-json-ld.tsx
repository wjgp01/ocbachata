import flyer from "@/assets/images/oc-bachata-weekender-flyer.jpg";
import { site } from "@/content/site";
import { event, venues } from "@/content/weekender-2026";
import { siteUrl } from "@/lib/site";

// Structured data so search engines can show the event with its dates and venues.
export function EventJsonLd({ path }: { path: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "DanceEvent",
    name: event.name,
    url: new URL(path, siteUrl).toString(),
    description: event.description,
    startDate: event.startsAt,
    endDate: event.endsAt,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    image: [new URL(flyer.src, siteUrl).toString()],
    location: venues.map((venue) => ({
      "@type": "Place",
      name: venue.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: venue.address.street,
        addressLocality: venue.address.city,
        addressRegion: venue.address.state,
        postalCode: venue.address.zip,
        addressCountry: "US",
      },
    })),
    performer: [
      { "@type": "PerformingGroup", name: "Angel & Luna" },
      { "@type": "PerformingGroup", name: "Jonny & Sami" },
    ],
    organizer: { "@type": "Organization", name: site.name, url: siteUrl },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
