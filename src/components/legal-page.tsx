import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

// Shared shell for the Terms and Conditions and Refund Policy pages.
export function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main id="main" className="wrap pb-24 pt-32 lg:pt-40">
        <article className="mx-auto max-w-3xl">
          <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.25em] text-sun">
            <span className="h-px w-8 bg-sun/60" aria-hidden="true" />
            OC Bachata
          </p>
          <h1 className="mt-4 font-display text-5xl font-black uppercase italic leading-[0.9] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-5 text-sm text-sand/50">Last updated {updated}</p>

          <div className="legal-copy mt-12 text-pretty">{children}</div>

          <Link href="/#tickets" className="btn btn-primary mt-14">
            Back to passes
            <ArrowRight className="size-5" />
          </Link>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
