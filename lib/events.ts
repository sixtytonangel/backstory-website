export type EventItem = {
  date: string;
  title: string;
  subtitle?: string;
  meta: string;
  href: string;
  img?: string;
  alt?: string;
  imgPosition?: string;
  past: boolean;
};

// Newest first. Upcoming events have past: false.
export const events: EventItem[] = [
  {
    date: "Wed 3 Dec 2026",
    title: "Hong Kong Stories Live Show",
    subtitle: "Stories on the theme “Done and Dusted”",
    meta: "Live show · Central",
    href: "https://www.eventbrite.com/e/hong-kong-stories-presents-done-and-dusted-tickets-2004274874102",
    img: "/images/event-done-and-dusted.jpg",
    alt: "Hong Kong Stories audience laughing during a live show",
    imgPosition: "object-top",
    past: false,
  },
  {
    date: "Sat 14 Nov 2026",
    title: "Offbeat Sparks HK: Bring Your Stories to Work",
    meta: "Talk · HKMA, Causeway Bay",
    href: "https://offbeat.works/offbeat-sparks-hk-2026",
    img: "/images/event-offbeat.jpg",
    alt: "Niharika speaking on stage",
    past: false,
  },
  {
    date: "Sat 10 Oct 2026",
    title: "Storigami: Paperfolding and Storytelling",
    meta: "Workshop · workshop ten, Kennedy Town",
    href: "https://workshopten.com/happenings/storigami-paperfolding-storytelling-workshop/",
    img: "/images/event-storigami.jpg",
    alt: "Story prompt cards on a table",
    past: true,
  },
  {
    date: "8 Aug",
    title: "Storytelling Workshop with Sanyuja Wellness",
    meta: "Workshop · Pune",
    href: "https://docs.google.com/forms/d/e/1FAIpQLScR1u2D7Yb5ik6pvQ2KNncQ4ipGABYR9pc1W_1drNZ-m5clBQ/viewform",
    img: "/images/event-pune.jpg",
    alt: "Participants laughing around a workshop table",
    past: true,
  },
  {
    date: "Sun 5 Jul 2026",
    title: "Storytelling Workshop: Love Letters",
    meta: "Writing workshop · Online",
    href: "https://www.eventbrite.hk/e/storytelling-workshop-love-letters-tickets-1991539149206",
    past: true,
  },
  {
    date: "Sat 21 Mar 2026",
    title: "Reading Hike",
    meta: "Social hike · from Tsuen Wan West MTR",
    href: "https://www.eventbrite.hk/e/reading-hike-tickets-1982613394032",
    past: true,
  },
  {
    date: "Sat 24 Jan 2026",
    title: "Photography Hike in Po Toi",
    meta: "Social hike · from Aberdeen",
    href: "https://www.eventbrite.hk/e/photography-hike-in-po-toi-tickets-1979957580422",
    past: true,
  },
  {
    date: "Sat 13 Dec 2025",
    title: "End-of-year Tea Hike",
    meta: "Social hike · from Sai Wan Ho MTR",
    href: "https://www.eventbrite.hk/e/end-of-year-tea-hike-tickets-1967620105703",
    past: true,
  },
];
