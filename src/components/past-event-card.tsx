import Image from "next/image";
import type { pastEvents } from "@/content/past-events";

// One past event, shown as its flyer. Used on the Past Events page and the home page.
export function PastEventCard({ event }: { event: (typeof pastEvents)[number] }) {
  return (
    <div className="reveal glass overflow-hidden rounded-3xl">
      <Image
        src={event.image}
        alt={event.imageAlt}
        placeholder="blur"
        sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
        className="h-auto w-full"
      />
    </div>
  );
}
