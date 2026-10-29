import Image from "next/image";
import logo from "@/assets/images/baychata-sensual-logo.png";
import { Facebook, Instagram, YouTube } from "@/components/icons";
import { footerLinks, legalLinks, links } from "@/content/event";

const socials = [
  { label: "Instagram", href: links.instagram, icon: Instagram },
  { label: "Facebook", href: links.facebook, icon: Facebook },
  { label: "YouTube", href: links.youtube, icon: YouTube },
];

export function SiteFooter() {
  return (
    <footer id="site-footer" className="border-t border-white/10 bg-night-950">
      <div className="wrap grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <a href={links.home} className="inline-block" aria-label="Baychata Sensual home">
            {/* Inverting then rotating hue turns the black lettering white while keeping the bridge red. */}
            <Image src={logo} alt="Baychata Sensual" className="h-20 w-auto invert hue-rotate-180" sizes="142px" />
          </a>
          <p className="mt-5 max-w-xs text-sand/70">The road to excellence begins with a single step.</p>
          <ul className="mt-6 flex gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-11 place-items-center rounded-full ring-1 ring-white/15 transition hover:bg-white/10 hover:text-sun"
                >
                  <Icon className="size-5" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href={links.facebookEvent}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block text-sm font-semibold text-sand/80 underline decoration-sun/60 underline-offset-4 hover:text-sun"
          >
            RSVP on the Facebook event
          </a>
        </div>

        <nav aria-label="Baychata Sensual" className="md:col-span-4">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-sun">Useful links</h2>
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

        <nav aria-label="Policies" className="md:col-span-3">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-sun">Policies</h2>
          <ul className="mt-5 space-y-3 text-sand/75">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition hover:text-sand">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/5">
        <div className="wrap flex flex-col gap-2 py-6 pb-28 text-xs text-sand/50 sm:flex-row sm:justify-between md:pb-6">
          <p>© 2026 Baychata Sensual. All rights reserved.</p>
          <p>OC Bachata Weekender · Nov 21–22, 2026 · Anaheim &amp; Costa Mesa</p>
        </div>
      </div>
    </footer>
  );
}
