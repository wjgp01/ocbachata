import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/oc-bachata-logo.png";
import { ArrowUpRight } from "@/components/icons";
import { contactEmail, footerLinks, legalLinks, lostAndFoundUrl, safetyReportUrl } from "@/content/site";

const contactLinks = [
  { label: "Community safety report", href: safetyReportUrl },
  { label: "Lost and found", href: lostAndFoundUrl },
];

export function SiteFooter() {
  return (
    <footer id="site-footer" className="border-t border-white/10 bg-night-950">
      <div className="wrap grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link href="/" className="inline-block">
            <Image src={logo} alt="OC Bachata home" className="h-20 w-auto" sizes="160px" />
          </Link>
          <p className="mt-5 max-w-xs text-sand/70">Workshops · Socials · Top Artists · Great Vibes</p>
          <Link href="/past-events" className="btn btn-primary mt-6">
            See past events
          </Link>
        </div>

        <nav aria-label="Footer" className="md:col-span-4">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-sun">Explore</h2>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sand/75">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="transition hover:text-sand">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-sun">Contact</h2>
          <ul className="mt-5 space-y-3 text-sand/75">
            <li>
              <a href={`mailto:${contactEmail}`} className="font-semibold text-sand transition hover:text-sun">
                {contactEmail}
              </a>
            </li>
            {contactLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 transition hover:text-sand"
                >
                  {link.label}
                  <ArrowUpRight className="size-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="wrap flex flex-col gap-3 py-6 text-xs text-sand/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 OC Bachata. All rights reserved.</p>
          <nav aria-label="Policies">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-sand">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
