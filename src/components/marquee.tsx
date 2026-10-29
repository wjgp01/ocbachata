import { Sparkle } from "@/components/icons";

export function Marquee({ items }: { items: string[] }) {
  // Each half repeats the list twice so the loop stays seamless on wide screens.
  const half = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-8">
      <div className="-mx-[5vw] -rotate-2 bg-linear-to-r from-sun via-flame to-brand py-4 text-night-950 shadow-[0_20px_60px_-20px_rgb(255_90_31/0.6)]">
        <p className="sr-only">{items.join(" · ")}</p>
        <div className="flex w-max animate-marquee motion-reduce:animate-none" aria-hidden="true">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0 items-center">
              {half.map((item, index) => (
                <li
                  key={`${item}-${index}`}
                  className="flex items-center gap-8 pr-8 font-display text-3xl font-black uppercase italic tracking-wide sm:text-4xl"
                >
                  {item}
                  <Sparkle className="size-5 sm:size-6" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
