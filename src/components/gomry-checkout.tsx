import Script from "next/script";

// Gomry's embed script turns this container into its compact checkout iframe.
export function GomryCheckout({ eventId }: { eventId: string }) {
  return (
    <>
      <div
        data-gomry-checkout-compact={eventId}
        data-color="#dc1c13"
        data-bg-color="#ffffff"
        data-lang="en"
        data-border-radius="16px"
        className="empty:min-h-[31rem] empty:animate-pulse empty:rounded-2xl empty:bg-neutral-100"
      />
      <Script id="gomry-checkout" src="https://www.gomry.com/gomry-embed.js" strategy="afterInteractive" />
    </>
  );
}
