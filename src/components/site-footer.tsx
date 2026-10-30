import Image from "next/image";
import logo from "@/assets/images/oc-bachata-logo.png";
import { event, footerLinks, venues } from "@/content/event";

export function SiteFooter() {
  return (
    <footer id="site-footer" className="border-t border-white/10 bg-night-950">
      <div className="wrap grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <a href="#top" className="inline-block" aria-label="OC Bachata Weekender, back to top">
            <Image src={logo} alt="OC Bachata Weekender" className="h-20 w-auto" sizes="160px" />
          </a>
          <p className="mt-5 max-w-xs text-sand/70">Workshops · Socials · Top Artists · Great Vibes</p>
          <a href="#tickets" className="btn btn-primary mt-6">
            Get your pass
          </a>
        </div>

        <nav aria-label="Footer" className="md:col-span-4">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-sun">Explore</h2>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sand/75">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition hover:text-sand">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-sun">Venues</h2>
          <ul className="mt-5 space-y-4 text-sand/75">
            {venues.map((venue) => (
              <li key={venue.name}>
                <a
                  href={venue.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-sand transition hover:text-sun"
                >
                  {venue.name}
                </a>
                <p className="mt-0.5 text-sm">
                  {venue.address.street}, {venue.address.city}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="wrap flex flex-col gap-2 py-6 pb-28 text-xs text-sand/50 sm:flex-row sm:justify-between md:pb-6">
          <p>© 2026 OC Bachata. All rights reserved.</p>
          <p>OC Bachata Weekender · Nov 21–22, 2026 · {event.city}</p>
        </div>
      </div>
    </footer>
  );
}
