import flyer from "@/assets/images/oc-bachata-weekender-flyer.jpg";
import { event, tickets, venues } from "@/content/event";
import { getGomryOffers } from "@/lib/gomry";
import { siteUrl } from "@/lib/site";

// Structured data so search engines can show the event with dates, venues and prices.
export async function EventJsonLd() {
  const offers = await getGomryOffers();
  const data = {
    "@context": "https://schema.org",
    "@type": "DanceEvent",
    name: event.name,
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
    organizer: { "@type": "Organization", name: "OC Bachata", url: siteUrl },
    offers: offers?.map((offer) => ({
      "@type": "Offer",
      name: offer.name,
      price: offer.price,
      priceCurrency: offer.currency,
      url: tickets.url,
      availability: offer.availability,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
