// Every event detail shown on the site lives in this file.
// Update dates, prices, venues, or videos here and the whole page follows.

export const event = {
  name: "OC Bachata Weekender",
  tagline: "Grand Opening of OC Bachata",
  description:
    "The grand opening of OC Bachata: a weekend of world-class Bachata training and social dancing with Angel & Luna from Spain and Jonny & Sami. November 21–22, 2026 at Dance Precision’s Dance Studio in Anaheim, California.",
  dates: "November 21–22, 2026",
  shortDates: "Nov 21–22, 2026",
  // Studio name as the organizer spells it (the flyer has a typo); the weekend is based here.
  location: "Dance Precision’s Dance Studio, 5468 E La Palma Ave, Anaheim, CA 92807",
  city: "Anaheim, California",
  featuring: "Angel & Luna, Jonny & Sami",
  // Saturday workshops kick off at 7:00 PM Pacific; drives the countdown and search data.
  startsAt: "2026-11-21T19:00:00-08:00",
  endsAt: "2026-11-22T23:00:00-08:00",
};

export const tickets = {
  // Gomry event behind the embedded checkout widget.
  gomryEventId: "SYiIdo96vO736jG11W0h",
  url: "https://www.gomry.com/event/OC-Bachata-Weekender-Nov-21-22-SYiIdo96vO736jG11W0h",
  // Pre-sale messaging hides itself once this moment passes (end of day Pacific time).
  presaleEndsAt: "2026-10-31T23:59:59-07:00",
  presaleEnds: "October 31, 2026",
};

export const venues = [
  {
    name: "Dance Precision’s Dance Studio",
    role: "Main venue",
    address: { street: "5468 E La Palma Ave", city: "Anaheim", state: "CA", zip: "92807" },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Dance+Precision%27s+Dance+Studio%2C+5468+E+La+Palma+Ave%2C+Anaheim%2C+CA+92807",
  },
  {
    name: "Cafe Sevilla",
    role: "Sunday Night Social",
    address: { street: "1870 Harbor Blvd", city: "Costa Mesa", state: "CA", zip: "92627" },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Cafe+Sevilla%2C+1870+Harbor+Blvd%2C+Costa+Mesa%2C+CA+92627",
  },
];

export const schedule = [
  {
    day: "Saturday",
    date: "Nov 21",
    theme: "Fall colors",
    items: [
      {
        time: "7:00 – 8:00 PM",
        title: "Angel & Luna Workshop",
        detail: "Bachata Sensual Partner Work Technique",
        venue: "Dance Precision’s Dance Studio, Anaheim",
      },
      {
        time: "8:00 – 9:00 PM",
        title: "Jonny & Sami Workshop",
        detail: "Partnered Footwork",
        venue: "Dance Precision’s Dance Studio, Anaheim",
      },
      {
        time: "9:00 PM – 1:00 AM",
        title: "Saturday Night Social",
        detail:
          "Where Zoukchata used to be, featuring DJ Jassy & DJ Zoukchatero. Full Pass holders get priority dancing with the instructors.",
        venue: "Dance Precision’s Dance Studio, Anaheim",
      },
    ],
  },
  {
    day: "Sunday",
    date: "Nov 22",
    items: [
      {
        time: "2:00 – 3:30 PM",
        title: "Footwork & Musicality",
        detail: "Masterclass with Angel & Luna",
        venue: "Dance Precision’s Dance Studio, Anaheim",
      },
      {
        time: "3:30 – 4:00 PM",
        title: "Break",
      },
      {
        time: "4:00 – 5:30 PM",
        title: "Trending Moves",
        detail: "Masterclass with Angel & Luna",
        venue: "Dance Precision’s Dance Studio, Anaheim",
      },
      {
        time: "5:30 – 7:00 PM",
        title: "Lead Styling (with recording)",
        detail:
          "With Angel, sold separately. Being in the recording is optional, so you can choose not to participate.",
        venue: "Dance Precision’s Dance Studio, Anaheim",
      },
      {
        time: "7:00 – 11:00 PM",
        title: "Sunday Night Social",
        detail: "$5 entrance fee covered for Full Pass holders",
        venue: "Cafe Sevilla, Costa Mesa",
      },
    ],
  },
];

// Mirrors the Full Pass on Gomry, so update it whenever Gomry's price or tier changes.
export const fullPass = {
  name: "Full Pass",
  price: 165,
  label: "Early-Bird",
  includes: [
    {
      title: "5 hours of training",
      detail: "2 HR intensive workshops + 3 HR masterclass with Angel & Luna",
    },
    {
      title: "Saturday Night Social",
      detail: "at Dance Precision’s Dance Studio, featuring DJ Jassy and DJ Zoukchatero",
    },
    {
      title: "Sunday Night Social",
      detail: "at Cafe Sevilla in Costa Mesa",
    },
    {
      title: "Priority dancing",
      detail: "with the instructors at the Saturday Night Social",
    },
  ],
  excludes: "Does not include the Lead Styling workshop, which is sold separately.",
};

export const videos = [
  { id: "9VjQlGfrupk", title: "Lead Styling with Angel Garcia", thumbnail: "lead-styling-angel-garcia" },
  { id: "DZmG6wVnDLo", title: "Luna with Francis", thumbnail: "luna-with-francis" },
  { id: "UQTLO8RvVEA", title: "Angel – Baila Conmigo", thumbnail: "angel-baila-conmigo" },
  { id: "htHLC4M5Bq8", title: "Jonny & Sami", thumbnail: "jonny-and-sami" },
] as const;

// Where pass holders write about transfers, cancellations and refunds.
export const contactEmail = "infinito.dance@gmail.com";

export const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Schedule", href: "/#schedule" },
  { label: "Passes", href: "/#tickets" },
  { label: "Videos", href: "/#videos" },
];

export const legalLinks = [
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
  { label: "Refund Policy", href: "/refund-policy" },
];
