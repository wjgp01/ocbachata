// OC Bachata itself: who we are, how to reach us and the house rules. Shown on every page.
// Each event's own details live in its own file, e.g. weekender-2026.ts.

export const site = {
  name: "OC Bachata",
  region: "Orange County, California",
  title: "OC Bachata · Bachata workshops & socials in Orange County",
  description:
    "OC Bachata brings world-class Bachata workshops, masterclasses and socials to Orange County, California. See what’s next, relive our past events and read our code of conduct.",
};

// Tabs in the header.
export const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/past-events", label: "Past Events" },
  { href: "/#code-of-conduct", label: "Code of Conduct" },
];

export const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Past Events", href: "/past-events" },
  { label: "Code of Conduct", href: "/#code-of-conduct" },
  { label: "Contact", href: "/#contact" },
];

// House rules for every class and social, shown in the Code of Conduct section.
export const codeOfConduct = [
  {
    title: "Ask, and accept a no",
    detail:
      "Anyone can ask anyone to dance, and anyone can say no or end a dance at any time. Take a “no, thank you” gracefully, without asking why.",
  },
  {
    title: "Let your partner set the closeness",
    detail:
      "Bachata sensual is close. Match your partner’s comfort level, and give them more space the moment they ask for it or seem unsure.",
  },
  {
    title: "Keep the floor safe",
    detail:
      "Save lifts, drops and deep dips for partners who have agreed to them, and watch out for the couples around you.",
  },
  {
    title: "No harassment, ever",
    detail:
      "No unwanted touching, comments or attention. Everyone is welcome, whatever their gender, race, sexuality, age, body or dance level.",
  },
  {
    title: "Come fresh",
    detail: "Shower, wear deodorant, keep mints handy and bring a spare shirt for the socials.",
  },
  {
    title: "No alcohol allowed inside Dance Precision’s Dance Studio",
    detail:
      "This is a dance studio for kids. Don’t leave alcohol bottles or trash outside the studio, either. Cameras are monitoring, and anyone caught bringing alcohol inside will be removed without a refund.",
  },
];

// Where people write about events, transfers, cancellations, refunds and conduct concerns.
export const contactEmail = "ocbachata@gmail.com";

// Google Form for safety reports, linked from the Code of Conduct section.
export const safetyReportUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSfZYjn99q3EpS2EcPajvgsb-Fyb6x0hxkvdUW-zkpxw91vBYw/viewform";

// Google Form for lost items, linked from the Code of Conduct section.
export const lostAndFoundUrl = "https://forms.gle/DQyK3iaU2snFA9bk9";

export const legalLinks = [
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
  { label: "Refund Policy", href: "/refund-policy" },
];
