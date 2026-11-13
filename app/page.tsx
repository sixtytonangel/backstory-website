import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import EventCard from "@/components/EventCard";
import { events } from "@/lib/events";

const reasons = [
  {
    n: "01",
    title: "To reflect",
    lines: [
      "Stories help us make sense of the world.",
      "Looking back at moments from our lives as stories gives us perspective.",
    ],
    card: "bg-cream",
    num: "text-[#9c4320]",
  },
  {
    n: "02",
    title: "To connect",
    lines: [
      "The shortest distance between two people is a story.",
      "When we tell a story from our lives, we often hear one in return.",
    ],
    card: "bg-ember",
    num: "text-cream",
  },
  {
    n: "03",
    title: "To learn the craft",
    lines: [
      "Our intuition for storytelling builds with practice.",
      "Stories that matter to us are a great place to start.",
    ],
    card: "bg-sun",
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
    dot: "bg-ember",
    link: "text-ember",
  },
  {
    title: "For schools",
    text: "Talks, workshops and competitions that help students discover their personal stories and build creative confidence.",
    href: "/schools",
    cta: "Explore programs for schools",
    img: "/images/program-schools.jpg",
    alt: "A student sharing a story with the group during a school talk",
    dot: "bg-sun",
    link: "text-sun",
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
    text: "She listened, asked questions, was able to identify themes, connect ideas, and provide a narrative arc to the jumble of ideas I threw at her.",
    name: "Shamima Yasmine",
    role: "Creative Mornings speaker",
  },
];

const formats = ["Story Circles", "Workshops", "Live Shows"];

export default function Home() {
  const featuredEvents = events.slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        {/* Hero */}
        <section className="relative">
          <div
            aria-hidden="true"
            className="absolute -left-24 -top-24 h-[150px] w-[150px] rounded-full bg-ember md:-left-36 md:-top-36 md:h-[300px] md:w-[300px]"
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
                  className="inline-flex min-h-[48px] items-center rounded-md bg-ember px-6 font-display text-[15px] font-semibold text-ink transition-opacity hover:opacity-90"
                >
                  Explore Programs
                </a>
                <a
                  href="#events"
                  className="inline-flex min-h-[48px] items-center rounded-md bg-sun px-6 font-display text-[15px] font-semibold text-ink transition-opacity hover:opacity-90"
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
                className="relative block aspect-[4/3] w-full rounded-xl object-cover"
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
              <article key={r.n} className={`${r.card} rounded-xl p-7 text-ink`}>
                <p className={`font-display text-[26px] font-bold leading-none ${r.num}`}>{r.n}</p>
                <h3 className="mb-2 mt-3 font-display text-[22px] font-semibold leading-[1.25]">{r.title}</h3>
                {r.lines.map((l, i) => (
                  <p key={i} className={i === 0 ? "font-semibold" : "mt-2"}>
                    {l}
                  </p>
                ))}
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
                className="group flex flex-col overflow-hidden rounded-xl border border-line bg-panel"
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
              Everyone is invited to experience our open events and collaborations.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {featuredEvents.map((e) => (
                <EventCard key={e.title} event={e} />
              ))}
            </div>
            <Link
              href="/events"
              className="mt-8 inline-flex min-h-[46px] items-center rounded-md border-[1.5px] border-ink px-6 font-display text-[15px] font-semibold hover:bg-ink hover:text-cream"
            >
              Show more events
            </Link>
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
              className="absolute -left-8 -top-8 h-[160px] w-[160px] rounded-full bg-ember"
            />
            <img
              src="/images/niharika-mic.jpg"
              alt="Niharika Aggarwal telling a story at the microphone"
              className="relative block aspect-square w-full rounded-xl object-cover object-[30%_center]"
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
                className="inline-flex min-h-[46px] items-center rounded-md border-[1.5px] border-sun px-6 font-display text-[15px] font-semibold text-sun hover:bg-sun hover:text-ink"
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
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {quotes.map((q, i) => (
              <figure key={q.name} className="rounded-xl border border-line bg-panel p-7">
                <blockquote className="font-display text-[18px] font-light leading-[1.5]">
                  “{q.text}”
                </blockquote>
                <figcaption className="mt-4 text-[15px] text-muted">
                  <strong className={i % 2 === 0 ? "text-ember" : "text-sun"}>{q.name}</strong>, {q.role}
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
