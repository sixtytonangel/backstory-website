import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const reasons = [
  {
    n: "01",
    title: "To reflect",
    line: "Looking back at moments from our lives as stories gives us perspective.",
    card: "bg-cream rounded-[28px_28px_28px_110px]",
    num: "text-flame",
  },
  {
    n: "02",
    title: "To connect",
    line: "Share a story from your life and you're usually handed one back. That happened to me too! We are same same but different.",
    card: "bg-flame rounded-[28px]",
    num: "text-cream",
  },
  {
    n: "03",
    title: "To practice",
    line: "When a story lands, gahh it feels so good, for the teller and the listener.",
    card: "bg-sun rounded-[28px_110px_28px_28px]",
    num: "text-ink",
  },
];

const programs = [
  {
    title: "For organisations",
    text: "Story circles, workshops and talks that build storytelling skills and a sense of community at work.",
    href: "/organisations",
    cta: "Explore programs for organisations",
    img: "/images/program-organisations.jpg",
    alt: "Workshop participants raising their hands",
    dot: "bg-flame",
    link: "text-flame",
  },
  {
    title: "For schools",
    text: "Talks, workshops and competitions that help students find personal stories and develop creative confidence.",
    href: "/schools",
    cta: "Explore programs for schools",
    img: "/images/program-schools.jpg",
    alt: "Students at a storytelling workshop",
    dot: "bg-sun",
    link: "text-sun",
  },
];

const featuredEvents = [
  {
    date: "Sat 14 Nov 2026",
    title: "Offbeat Sparks HK: Bring Your Stories to Work",
    meta: "Talk · HKMA, Causeway Bay",
    status: "Registration full",
    href: "https://offbeat.works/offbeat-sparks-hk-2026",
    img: "/images/event-offbeat.jpg",
    alt: "Niharika speaking on stage",
    past: false,
  },
  {
    date: "Sat 10 Oct 2026",
    title: "Storigami: Paperfolding and Storytelling",
    meta: "Workshop · workshop ten, Kennedy Town",
    status: "Past event",
    href: "https://workshopten.com/happenings/storigami-paperfolding-storytelling-workshop/",
    img: "/images/event-storigami.jpg",
    alt: "Story prompt cards on a table",
    past: true,
  },
  {
    date: "8 Aug",
    title: "Storytelling Workshop with Sanyuja Wellness",
    meta: "Workshop · Pune",
    status: "Past event",
    href: "https://docs.google.com/forms/d/e/1FAIpQLScR1u2D7Yb5ik6pvQ2KNncQ4ipGABYR9pc1W_1drNZ-m5clBQ/viewform",
    img: "/images/event-pune.jpg",
    alt: "Participants laughing around a workshop table",
    past: true,
  },
];

const moreEvents = [
  {
    date: "Sun 5 Jul 2026",
    title: "Storytelling Workshop: Love Letters",
    meta: "Writing workshop · Online",
    href: "https://www.eventbrite.hk/e/storytelling-workshop-love-letters-tickets-1991539149206",
  },
  {
    date: "Sat 21 Mar 2026",
    title: "Reading Hike",
    meta: "Social hike · from Tsuen Wan West MTR",
    href: "https://www.eventbrite.hk/e/reading-hike-tickets-1982613394032",
  },
  {
    date: "Sat 24 Jan 2026",
    title: "Photography Hike in Po Toi",
    meta: "Social hike · from Aberdeen",
    href: "https://www.eventbrite.hk/e/photography-hike-in-po-toi-tickets-1979957580422",
  },
  {
    date: "Sat 13 Dec 2025",
    title: "End-of-year Tea Hike",
    meta: "Social hike · from Sai Wan Ho MTR",
    href: "https://www.eventbrite.hk/e/end-of-year-tea-hike-tickets-1967620105703",
  },
];

const quotes = [
  {
    text: "Her facilitation was thoughtful, inclusive, and engaging, making storytelling feel natural rather than performative.",
    name: "Tanvi Tilve",
    role: "Founder, The MixedBag Company",
  },
  {
    text: "She instantly grabbed their attention and engaged their interest. The activities were thoughtful and challenging yet accessible.",
    name: "Juliette",
    role: "Teacher, Canadian International School",
  },
  {
    text: "Within 3 folded flowers, I went from being confused and frustrated to joyful and at ease.",
    name: "Simon",
    role: "Storigami participant",
  },
  {
    text: "She listened, asked questions, was able to identify themes, connect ideas, and provide a narrative arc to the jumble of ideas I threw at her.",
    name: "Shamima Yasmine",
    role: "Creative Mornings speaker",
  },
  {
    text: "The chop-chop editing where necessary and the oodles of patience… and the wild dancing in the wings to battle nerves. That was 100% fun!",
    name: "Shraddha",
    role: "Storyteller coached for an international show",
  },
];

const formats = ["Story circles", "Workshops", "Talks", "Live shows", "Student Story Slam"];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        {/* Hero */}
        <section className="relative">
          <div
            aria-hidden="true"
            className="absolute -left-24 -top-24 h-[150px] w-[150px] rounded-full bg-flame md:-left-36 md:-top-36 md:h-[300px] md:w-[300px]"
          />
          <div className="relative mx-auto flex max-w-[1200px] flex-wrap items-center gap-12 px-4 pb-20 pt-12 sm:px-6 md:pb-24 md:pt-16">
            <div className="min-w-0 flex-[1_1_440px]">
              <h1 className="font-display text-[34px] font-semibold leading-[1.12] tracking-[-0.02em] sm:text-[42px]">
                Experience the joy of sharing personal stories
              </h1>
              <p className="mt-4 font-display text-[19px] font-light leading-[1.4] sm:text-[20px]">
                and become a better storyteller along the way
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#programs"
                  className="inline-flex min-h-[48px] items-center rounded-full bg-flame px-6 font-display text-[15px] font-semibold text-ink transition-opacity hover:opacity-90"
                >
                  Explore Programs
                </a>
                <a
                  href="#events"
                  className="inline-flex min-h-[48px] items-center rounded-full bg-sun px-6 font-display text-[15px] font-semibold text-ink transition-opacity hover:opacity-90"
                >
                  Join Events
                </a>
              </div>
            </div>
            <div className="relative min-w-0 flex-[1_1_380px]">
              <div
                aria-hidden="true"
                className="absolute -bottom-12 -right-12 h-[200px] w-[200px] rounded-full bg-sun"
              />
              <img
                src="/images/hks-audience.jpg"
                alt="A Hong Kong Stories audience laughing during a live show"
                className="relative block aspect-square w-full rounded-[999px_999px_24px_999px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Formats strip */}
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 bg-sun px-4 py-3 font-display text-[15px] font-medium text-ink">
          {formats.map((f, i) => (
            <span key={f} className="flex items-center gap-5">
              {i > 0 && <span aria-hidden="true">•</span>}
              {f}
            </span>
          ))}
        </div>

        {/* Why personal stories */}
        <section className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 md:py-20">
          <h2 className="font-display text-[26px] font-semibold tracking-[-0.01em] md:text-[30px]">
            Why personal stories
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {reasons.map((r) => (
              <article key={r.n} className={`${r.card} p-7 text-ink`}>
                <p className={`font-display text-[26px] font-bold leading-none ${r.num}`}>{r.n}</p>
                <h3 className="mb-2 mt-3 font-display text-[22px] font-semibold">{r.title}</h3>
                <p className="font-semibold">{r.line}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Programs */}
        <section id="programs" className="mx-auto max-w-[1200px] px-4 pb-16 sm:px-6 md:pb-20">
          <h2 className="font-display text-[26px] font-semibold tracking-[-0.01em] md:text-[30px]">
            Programs
          </h2>
          <p className="mt-1 font-display text-[17px] font-light text-cream/90">
            Signature and tailored programs for private groups
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {programs.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="group flex flex-col overflow-hidden rounded-[28px] border border-line bg-panel"
              >
                <span className="relative block overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.alt}
                    className="block aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-12 -right-12 h-[120px] w-[120px] rounded-full ${p.dot}`}
                  />
                </span>
                <span className="flex flex-col gap-2 px-7 pb-8 pt-6">
                  <span className="font-display text-[22px] font-semibold">{p.title}</span>
                  <span>{p.text}</span>
                  <span className={`mt-2 font-display font-semibold ${p.link}`}>{p.cta} →</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Community events */}
        <section id="events" className="bg-cream text-ink">
          <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 md:py-20">
            <h2 className="font-display text-[26px] font-semibold tracking-[-0.01em] md:text-[30px]">
              Community events
            </h2>
            <p className="mt-2 max-w-[640px]">
              I partner with communities and spaces to host open events that bring people together to
              swap stories, try something new, and make genuine connections.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {featuredEvents.map((e) => (
                <a
                  key={e.title}
                  href={e.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col overflow-hidden rounded-3xl ${
                    e.past ? "bg-[#ece4d8] text-[#5c554d]" : "bg-white"
                  }`}
                >
                  <span className="relative block">
                    <img
                      src={e.img}
                      alt={e.alt}
                      className={`block aspect-[3/2] w-full object-cover ${e.past ? "grayscale-[70%]" : ""}`}
                    />
                    <span
                      className={`absolute left-4 top-4 rounded-full px-3 py-1.5 font-display text-[14px] font-semibold ${
                        e.past ? "bg-cream text-[#5c554d]" : "bg-sun text-ink"
                      }`}
                    >
                      {e.date}
                    </span>
                  </span>
                  <span className="flex flex-1 flex-col gap-1 px-6 pb-6 pt-5">
                    <span className="font-display text-[19px] font-medium leading-[1.3]">{e.title}</span>
                    <span className="text-[16px]">{e.meta}</span>
                    <span className="mt-auto pt-3 text-[15px] font-semibold">{e.status}</span>
                  </span>
                </a>
              ))}
            </div>
            <details className="group mt-6">
              <summary className="inline-flex cursor-pointer list-none items-center gap-2 font-display font-semibold [&::-webkit-details-marker]:hidden">
                More past events
                <span aria-hidden="true" className="transition-transform group-open:rotate-90">
                  →
                </span>
              </summary>
              <ul className="mt-4 border-t border-[#d8cdbd]">
                {moreEvents.map((e) => (
                  <li key={e.title} className="border-b border-[#d8cdbd]">
                    <a
                      href={e.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-wrap items-baseline gap-x-6 gap-y-1 py-4 text-[#5c554d] hover:text-ink"
                    >
                      <span className="w-[150px] shrink-0 font-semibold">{e.date}</span>
                      <span className="min-w-0 flex-1 font-display font-medium">{e.title}</span>
                      <span className="text-[15px]">{e.meta}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-14 px-4 py-16 sm:px-6 md:py-20"
        >
          <div className="relative min-w-0 max-w-[400px] flex-[1_1_300px]">
            <div
              aria-hidden="true"
              className="absolute -left-8 -top-8 h-[180px] w-[180px] rounded-br-full bg-flame"
            />
            <img
              src="/images/niharika-mic.jpg"
              alt="Niharika Aggarwal telling a story at the microphone"
              className="relative block aspect-square w-full rounded-full object-cover object-[30%_center]"
            />
          </div>
          <div className="min-w-0 flex-[1_1_480px]">
            <p className="font-display text-[14px] font-semibold uppercase tracking-[0.12em] text-sun">
              About the facilitator
            </p>
            <h2 className="mb-5 mt-2 font-display text-[26px] font-semibold tracking-[-0.01em]">
              Meet Niharika
            </h2>
            <div className="space-y-4">
              <p>
                I am a professional storyteller. In the last 8 years I have performed in over 100 live
                shows around the world, and learnt what brings the listeners into the story.
              </p>
              <p>
                I co-run Hong Kong Stories, a non-profit organisation that hosts free workshops and
                curates live shows.
              </p>
              <p>
                My focus as facilitator is to help people recognise the wealth of stories we all have and
                how powerful a well told story is.
              </p>
              <p>
                I have hosted over fifty workshops where we shaped thousands of stories. Some of them
                became a hit on the stage, some of them energized conversations in office pantries and
                family living rooms, many of them made someone feel seen.
              </p>
              <p className="text-muted">
                Before this, I spent a decade in finance and tech at Goldman Sachs and Airdev.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href="https://open.spotify.com/playlist/6PfJVXSECghFJgpD9IrrNf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center rounded-full border-[1.5px] border-sun px-6 font-display text-[15px] font-semibold text-sun hover:bg-sun hover:text-ink"
              >
                Listen to my stories
              </a>
              <a
                href="https://www.instagram.com/niharika.stories"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-[15px] font-medium underline underline-offset-4 hover:text-sun"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/niharika-aggarwal-3ab0b891/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-[15px] font-medium underline underline-offset-4 hover:text-sun"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Quotes */}
        <section className="mx-auto max-w-[1200px] px-4 pb-16 sm:px-6 md:pb-20">
          <h2 className="font-display text-[26px] font-semibold tracking-[-0.01em] md:text-[30px]">
            What people say
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {quotes.map((q, i) => (
              <figure key={q.name} className="rounded-[28px] border border-line bg-panel p-7">
                <blockquote className="font-display text-[18px] font-light leading-[1.5]">
                  “{q.text}”
                </blockquote>
                <figcaption className="mt-4 text-[15px] text-muted">
                  <strong className={i % 2 === 0 ? "text-flame" : "text-sun"}>{q.name}</strong>, {q.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
