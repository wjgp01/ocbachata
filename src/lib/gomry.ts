import { cacheLife } from "next/cache";
import { fullPass, tickets } from "@/content/event";

export type GomryOffer = { name: string; price: number; currency: string; availability: string };

// Live pass prices from the schema.org Event data on Gomry's public event page, re-checked every 15 minutes.
// Returns null when Gomry can't be read, so the site shows no price rather than a stale one.
export async function getGomryOffers(): Promise<GomryOffer[] | null> {
  "use cache";
  cacheLife({ revalidate: 15 * 60, expire: 24 * 60 * 60 });

  try {
    const response = await fetch(tickets.url);
    if (!response.ok) throw new Error(`Gomry responded ${response.status}`);
    const html = await response.text();

    for (const [, json] of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
      const data = JSON.parse(json);
      const items: Record<string, unknown>[] = Array.isArray(data) ? data : (data["@graph"] ?? [data]);
      const offers = items.find((item) => item["@type"] === "Event" && Array.isArray(item.offers))?.offers;
      if (!Array.isArray(offers)) continue;

      return offers.map((offer) => {
        const price = Number(offer.price);
        if (typeof offer.name !== "string" || !Number.isFinite(price)) throw new Error("Unexpected Gomry offer");
        return {
          name: offer.name,
          price,
          currency: offer.priceCurrency ?? "USD",
          availability: offer.availability ?? "https://schema.org/InStock",
        };
      });
    }
    throw new Error("No ticket offers on the Gomry event page");
  } catch (error) {
    console.error("Couldn't read Gomry prices:", error);
    return null;
  }
}

// Gomry names the Full Pass with its current tier, e.g. "Full Pass (Early-Bird)".
export async function getFullPassPrice(): Promise<{ price: number; label?: string } | null> {
  const offers = await getGomryOffers();
  const pattern = new RegExp(`^${fullPass.name}(?:\\s*\\((.+)\\))?$`);
  for (const offer of offers ?? []) {
    const match = offer.name.match(pattern);
    if (!match) continue;
    return { price: offer.price, label: offer.availability.endsWith("SoldOut") ? "Sold out" : match[1] };
  }
  return null;
}
