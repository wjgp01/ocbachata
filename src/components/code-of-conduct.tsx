import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { codeOfConduct, contactEmail } from "@/content/event";

export function CodeOfConduct() {
  return (
    <section id="code-of-conduct" className="py-20 sm:py-28">
      <div className="wrap">
        <SectionHeading eyebrow="Code of conduct" title="Dance with respect">
          OC Bachata is for everyone. Follow these at every class and social so the whole weekend stays safe, welcoming
          and fun.
        </SectionHeading>

        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {codeOfConduct.map((rule, index) => (
            <li key={rule.title} className="reveal glass rounded-3xl p-6 sm:p-7">
              <span className="text-gradient-sunset inline-block pr-1 font-display text-5xl font-black italic leading-none">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-xl font-bold leading-snug">{rule.title}</h3>
              <p className="mt-2 text-sand/70">{rule.detail}</p>
            </li>
          ))}
          {/* The help card fills the last grid cell so the rules sit in even rows. */}
          <li className="reveal rounded-3xl bg-linear-to-br from-[#2b0f30] via-[#4f1030] to-[#8f1c1d] p-6 ring-1 ring-white/10 sm:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sun">Need help?</p>
            <h3 className="mt-4 text-xl font-bold leading-snug">Speak up</h3>
            <p className="mt-2 text-sand/80">
              If something feels wrong, for you or someone else, tell an organizer right away or email{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="font-semibold text-sand underline decoration-sun/60 underline-offset-4 hover:text-sun"
              >
                {contactEmail}
              </a>
              . We take every report seriously.
            </p>
          </li>
        </ol>

        <p className="mt-6 text-sm text-sand/60">
          Anyone who breaks this code may be removed from the event without a refund, as our{" "}
          <Link
            href="/terms-and-conditions"
            className="font-semibold text-sand underline decoration-sun/60 underline-offset-4 hover:text-sun"
          >
            Terms and Conditions
          </Link>{" "}
          explain.
        </p>
      </div>
    </section>
  );
}
