import { ArrowRight, Check } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { contactEmail } from "@/content/site";

const checklist = [
  "Your name, or your partner’s too if you teach as a couple",
  "Where you’re based",
  "Your Instagram or website",
  "Videos of you dancing and teaching",
  "What you teach and the dates you’re available",
];

// The email opens with the checklist filled in as headings, so artists only fill in the blanks.
const hireHref = `mailto:${contactEmail}?subject=${encodeURIComponent("Artist / teacher inquiry")}&body=${encodeURIComponent(
  "Name(s):\nBased in:\nInstagram or website:\nVideo links:\nWhat I teach:\nAvailability:\n",
)}`;

export function Artists() {
  return (
    <section id="artists" className="py-20 sm:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-6">
          <SectionHeading eyebrow="Artists & teachers" title="Teach with us">
            Are you an instructor, performer or DJ? We’re always looking for artists to hire for our workshops,
            masterclasses and socials. Tell us about yourself and we’ll be in touch.
          </SectionHeading>
          <a href={hireHref} className="reveal btn btn-primary mt-8">
            Email us about teaching
            <ArrowRight className="size-5" />
          </a>
        </div>

        <div className="reveal glass rounded-3xl p-6 sm:p-8 lg:col-span-6">
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-sun">What to send us</h3>
          <ul className="mt-5 space-y-3.5">
            {checklist.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-white/10">
                  <Check className="size-3.5 text-sun" />
                </span>
                <span className="text-sand/85">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-sand/60">
            Or write to{" "}
            <a
              href={`mailto:${contactEmail}`}
              className="font-semibold text-sand underline decoration-sun/60 underline-offset-4 hover:text-sun"
            >
              {contactEmail}
            </a>{" "}
            directly.
          </p>
        </div>
      </div>
    </section>
  );
}
