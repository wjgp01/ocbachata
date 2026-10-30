import Link from "next/link";
import { ArrowUpRight, Check } from "@/components/icons";
import { GomryCheckout } from "@/components/gomry-checkout";
import { PresaleNotice } from "@/components/presale-notice";
import { SectionHeading } from "@/components/section-heading";
import { fullPass, passes, tickets } from "@/content/event";

export function Tickets() {
  return (
    <section id="tickets" className="py-20 sm:py-28">
      <div className="wrap">
        <SectionHeading eyebrow="Passes" title="Secure your spot">
          <PresaleNotice fallback="Pick your pass and check out securely right here.">
            <strong className="text-sun">Pre-sale ends {tickets.presaleEnds}.</strong> Pick your pass and check out
            securely right here.
          </PresaleNotice>
        </SectionHeading>

        {/* On phones the checkout sits right under the Full Pass; on desktop it gets its own column. */}
        <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-8 lg:gap-y-4">
          <article className="reveal relative overflow-hidden rounded-3xl bg-linear-to-br from-[#2b0f30] via-[#4f1030] to-[#8f1c1d] p-6 ring-1 ring-white/10 sm:p-8 lg:col-span-7">
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 size-72 rounded-full bg-[radial-gradient(closest-side,rgb(255_178_56/0.45),transparent)]"
            />
            <div className="relative flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="inline-flex rounded-full bg-sun px-3 py-1 text-xs font-black uppercase tracking-[0.15em] text-night-950">
                  Best value
                </p>
                <h3 className="mt-3 font-display text-6xl font-black uppercase italic leading-none">{fullPass.name}</h3>
              </div>
              <p className="sm:text-right">
                <span className="font-display text-7xl font-black italic leading-none">${fullPass.price}</span>
                <span className="mt-1 block text-xs font-bold uppercase tracking-[0.2em] text-sand/70">
                  <PresaleNotice fallback={fullPass.label}>
                    {fullPass.label} · ends {tickets.presaleEndsShort}
                  </PresaleNotice>
                </span>
              </p>
            </div>

            <div aria-hidden="true" className="relative -mx-6 my-7 sm:-mx-8">
              <div className="mx-6 border-t-2 border-dashed border-white/20" />
              <span className="absolute -left-4 top-1/2 size-8 -translate-y-1/2 rounded-full bg-night-950" />
              <span className="absolute -right-4 top-1/2 size-8 -translate-y-1/2 rounded-full bg-night-950" />
            </div>

            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-sun">Full pass includes</h4>
            <ul className="mt-4 space-y-3.5">
              {fullPass.includes.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-white/10">
                    <Check className="size-3.5 text-sun" />
                  </span>
                  <span className="text-sand/85">
                    <strong className="text-sand">{item.title}</strong> {item.detail}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-sand/60">{fullPass.excludes}</p>
          </article>

          <div className="lg:sticky lg:top-24 lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1 lg:self-start">
            <div className="rounded-[1.75rem] bg-white p-2 text-night-950 shadow-[0_40px_100px_-40px_rgb(255_77_31/0.6)] ring-1 ring-white/20 sm:p-3">
              <GomryCheckout eventId={tickets.gomryEventId} />
            </div>
            <p className="mt-4 text-center text-sm text-sand/60">
              By buying a pass you agree to the{" "}
              <Link href="/terms-and-conditions" className="font-semibold text-sand underline decoration-sun/60 underline-offset-4 hover:text-sun">
                Terms and Conditions
              </Link>{" "}
              and{" "}
              <Link href="/refund-policy" className="font-semibold text-sand underline decoration-sun/60 underline-offset-4 hover:text-sun">
                Refund Policy
              </Link>
              .
            </p>
            <p className="mt-2 text-center text-sm text-sand/60">
              Checkout not loading?{" "}
              <a
                href={tickets.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-0.5 font-semibold text-sand underline decoration-sun/60 underline-offset-4 hover:text-sun"
              >
                Open it on Gomry
                <ArrowUpRight className="size-3.5" />
              </a>
            </p>
          </div>

          <div className="space-y-4 lg:col-span-7">
            <ul className="grid gap-4 sm:grid-cols-2">
              {passes.map((pass) => (
                <li key={pass.name} className="reveal glass flex flex-col rounded-3xl p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold leading-snug">{pass.name}</h3>
                    <p className="font-display text-3xl font-black italic leading-none">${pass.price}</p>
                  </div>
                  <p className="mt-2 text-sm text-sand/70">{pass.description}</p>
                  {pass.label ? (
                    <p className="mt-auto pt-3 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-sun">
                      {pass.label}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
            <p className="text-sm text-sand/50">Prices in USD. Gomry adds a service fee at checkout.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
