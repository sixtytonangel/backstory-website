import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Showcase — Backstory",
  description:
    "Each project is a customised storytelling workshop — shaped around a specific team, a specific goal, and a specific moment. No two are the same.",
};

const workshopCards = [
  {
    title: "Indiahikes",
    subtitle: "India's leading trekking organisation",
    description:
      "Explore and craft personal stories that illustrate why 'Trekking Transforms Life' — for trek leaders who carry that message every day.",
    highlighted: true,
    hasBadge: true,
    cardBg: "bg-[#ede8e0]",
    cardBorder: "border-[#b5471b]",
    subtitleColor: "text-[#b5471b]",
    ctaColor: "text-[#b5471b]",
    href: "#indiahikes",
  },
  {
    title: "The MixedBag Company",
    subtitle:
      "Event management company — facilitating a flagship employee event for a top-tier corporate client",
    description:
      "Create a genuinely fun and connecting activity for employees across divisions to mingle meaningfully — not just network.",
    highlighted: false,
    hasBadge: false,
    cardBg: "bg-[#f0ebe3]",
    cardBorder: "border-[#2d24181a]",
    subtitleColor: "text-[#b5471b]",
    ctaColor: "text-[#2d2418] opacity-50",
    href: "#mixedbag",
  },
  {
    title: "Vatavriksha",
    subtitle: "A new wellness studio",
    description:
      "Introduce a new wellness space to its community of practitioners and build real relationships between them from the start.",
    highlighted: false,
    hasBadge: false,
    cardBg: "bg-[#f0ebe3]",
    cardBorder: "border-[#2d24181a]",
    subtitleColor: "text-[#b5471b]",
    ctaColor: "text-[#2d2418] opacity-50",
    href: "#vatavriksha",
  },
];

const metaItems = ["Online", "90 min", "12 participants"];

const detailColumns = [
  {
    title: "GOAL",
    content:
      "Find and shape stories that illustrate Indiahikes' core motto 'Trekking Transforms Life'. Trek leaders are the faces of this mission — the workshop helped them find and tell personal stories that make that idea real for the trekkers they lead.",
  },
  {
    title: "FORMAT",
    content:
      "A 90-minute online 'Listening for Stories' workshop for 12 selected trek leaders. Delivered virtually with small group exercises, reflective prompts, and guided story-sharing.",
  },
];

const approachItems = [
  "Mapped touchpoints across the trek journey to identify where stories matter most",
  "Selected high-impact techniques and exercises aligned to those key moments",
  "Prompted leaders to surface stories from their own trekking experiences, not just scripted narratives",
];

const outcomes = [
  "Trek leaders crafted personal stories to use in their introductions with trekkers",
  "Each leader left with a bank of story prompts for richer conversations on the trail",
  "A story prompt from the session was turned into an Instagram post that generated many meaningful responses",
];

export default function ShowcasePage() {
  return (
    <main className="w-full">
      <Navbar />

      {/* Showcase Intro */}
      <section className="relative w-full border-b border-[#2d241814] bg-[#f0ebe3] px-6 pb-8 pt-20">
        <div className="mx-auto w-full max-w-[953px]">
          <p className="font-dm text-xs font-medium leading-[18px] tracking-[1.44px] text-[#b5471b] uppercase">
            Work in Practice
          </p>
          <div className="mt-3 h-0.5 w-10 bg-[#b5471b]" />
          <h1 className="mt-6 font-playfair text-[50.8px] font-semibold leading-[76.2px] text-[#2d2418] max-sm:text-[40px] max-sm:leading-[1.15]">
            Showcase
          </h1>
          <p className="mt-5 max-w-[604px] font-dm text-base font-normal leading-[28.8px] text-[#2d2418] opacity-70">
            Each project below is a customised storytelling workshop — shaped
            around a specific team, a specific goal, and a specific moment. No
            two are the same.
          </p>
        </div>
      </section>

      {/* Workshop Cards */}
      <section className="w-full bg-[#f7f3ee] px-6 py-16">
        <div className="mx-auto w-full max-w-[953px]">
          <header>
            <p className="font-dm text-xs font-medium leading-[18px] tracking-[1.44px] text-[#b5471b] uppercase">
              Projects
            </p>
            <h2 className="mt-3 font-playfair text-[30.5px] font-semibold leading-[45.7px] text-[#2d2418] max-md:text-[26px] max-md:leading-[38px]">
              Three workshops, three very different teams
            </h2>
          </header>

          <div className="mt-8 grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {workshopCards.map((card) => (
              <div
                key={card.title}
                className={`flex flex-col rounded-sm border shadow-none ${card.cardBg} ${card.cardBorder}`}
              >
                <div className="flex h-full min-h-[283px] flex-col px-[25px] pb-6 pt-[44px]">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-playfair text-[17.6px] font-semibold leading-[26.4px] text-[#2d2418]">
                      {card.title}
                    </h3>
                    {card.hasBadge && (
                      <img
                        className="mt-1 h-4 w-4 shrink-0"
                        alt=""
                        src="/text.svg"
                      />
                    )}
                  </div>
                  <p className={`mt-2 font-dm text-[12.8px] font-medium leading-[19.2px] ${card.subtitleColor}`}>
                    {card.subtitle}
                  </p>
                  <p className="mt-3 flex-1 font-dm text-[13.6px] font-medium leading-[22.4px] text-[#2d2418] opacity-70">
                    {card.description}
                  </p>
                  <a
                    href={card.href}
                    className={`mt-5 inline-flex w-fit items-center gap-1 font-dm text-[12.8px] font-medium leading-[19.2px] ${card.ctaColor}`}
                  >
                    <span>View project</span>
                    <img className="mt-[1px] h-3 w-3 shrink-0" alt="" src="/icon.svg" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project — Indiahikes */}
      <section
        id="indiahikes"
        className="relative w-full border-t border-[#2d241814] bg-[#f0ebe3] px-3 py-12 sm:px-6"
      >
        <div className="mx-auto flex w-full max-w-[953px] flex-col">
          <header className="mb-6 flex flex-col gap-3">
            <p className="font-dm text-xs font-medium leading-[18px] tracking-[1.44px] text-[#b5471b] uppercase">
              Featured Project
            </p>
            <div className="h-0.5 w-10 bg-[#b5471b]" />
          </header>

          <div className="overflow-hidden rounded-sm border-0 border-t-[3px] border-[#b5471b] bg-[#f7f3ee]">
            <article className="flex flex-col">
              {/* Header */}
              <header className="px-6 pb-8 pt-10 sm:px-12">
                <p className="font-dm text-xs font-medium leading-[18px] tracking-[1.44px] text-[#b5471b] uppercase">
                  India&apos;s leading trekking organisation
                </p>
                <h2 className="mt-2 font-playfair text-[30.5px] font-semibold leading-[45.7px] text-[#2d2418]">
                  Indiahikes
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {metaItems.map((item) => (
                    <span
                      key={item}
                      className="rounded-sm bg-[#ede8e1] px-3 py-[3px] font-dm text-[12.5px] font-normal leading-[18.7px] text-[#2d2418] opacity-85"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <p className="mt-5 max-w-[638px] font-dm text-[15.5px] font-normal leading-[27.2px] text-[#2d2418] opacity-75">
                  Explore and craft personal stories that illustrate why
                  &apos;Trekking Transforms Life&apos; — for trek leaders who
                  carry that message every day.
                </p>
              </header>

              {/* Images */}
              <div className="grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-1">
                <figure className="flex flex-col">
                  <div
                    className="h-[297px] w-full bg-[#ddd6cb]"
                    style={{
                      background: `url(/imagewithfallback.png) 50% 50% / cover`,
                    }}
                  />
                  <figcaption className="px-4 py-[5px] font-dm text-xs font-normal leading-[18px] text-[#2d2418] opacity-40">
                    Context
                  </figcaption>
                </figure>
                <figure className="flex flex-col">
                  <div
                    className="h-[297px] w-full bg-[#cec5b5]"
                    style={{
                      background: `url(/imagewithfallback-1.png) 50% 50% / cover`,
                    }}
                  />
                  <figcaption className="px-4 py-[5px] font-dm text-xs font-normal leading-[18px] text-[#2d2418] opacity-40">
                    Workshop in progress
                  </figcaption>
                </figure>
              </div>

              {/* Goal & Format */}
              <div className="grid grid-cols-1 gap-8 border-t border-[#2d241814] px-6 py-10 sm:px-12 md:grid-cols-2">
                {detailColumns.map((item) => (
                  <div key={item.title} className="flex flex-col gap-3">
                    <h3 className="font-dm text-[11.5px] font-medium leading-[17.3px] tracking-[1.15px] text-[#b5471b] uppercase">
                      {item.title}
                    </h3>
                    <p className="font-dm text-[14.9px] font-normal leading-[26px] text-[#2d2418] opacity-80">
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>

              {/* Approach */}
              <div className="border-t border-[#2d241814] bg-[#f0ebe3] px-6 py-[33px] sm:px-12">
                <h3 className="font-dm text-[11.5px] font-medium leading-[17.3px] tracking-[1.15px] text-[#b5471b] uppercase">
                  Approach
                </h3>
                <h4 className="mt-3 font-playfair text-[17.6px] font-semibold leading-[26.4px] text-[#2d2418]">
                  Customisation
                </h4>
                <ul className="mt-4 flex flex-col gap-2">
                  {approachItems.map((item) => (
                    <li key={item} className="flex items-start gap-[14px] opacity-[0.78]">
                      <span className="mt-[10px] h-[5px] w-[5px] shrink-0 rounded-[2.5px] bg-[#b5471b] opacity-70" />
                      <span className="font-dm text-[14.7px] font-normal leading-[25px] text-[#2d2418]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes */}
              <div className="border-t border-[#2d241814] px-6 py-[33px] sm:px-12">
                <h3 className="font-dm text-[11.5px] font-medium leading-[17.3px] tracking-[1.15px] text-[#b5471b] uppercase">
                  Outcomes
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {outcomes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="font-dm text-[14.4px] font-semibold leading-[24.5px] text-[#b5471b]">
                        →
                      </span>
                      <span className="font-dm text-[14.9px] font-normal leading-[25.3px] text-[#2d2418]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quote */}
              <div className="border-t border-[#2d24181f] bg-[#2d2418] px-6 py-[41px] sm:px-12">
                <h3 className="font-dm text-[11.5px] font-medium leading-[17.3px] tracking-[1.15px] text-[#f7f3ee73] uppercase">
                  In their words
                </h3>
                <blockquote className="mt-5 border-l-[3px] border-[#b5471b] pl-[27px]">
                  <p className="font-playfair text-xl font-normal italic leading-[34px] text-[#f7f3ee]">
                    &ldquo;The session opened up something we didn&apos;t know
                    we were missing. Our leaders came out with stories they were
                    genuinely proud to share — and it showed on the next
                    trek.&rdquo;
                  </p>
                  <footer className="mt-5">
                    <cite className="not-italic">
                      <span className="block font-playfair text-[15.2px] font-semibold leading-[22.8px] text-[#f7f3ee]">
                        Rajan
                      </span>
                      <span className="font-dm text-[13.3px] font-normal leading-[19.9px] text-[#f7f3ee8c]">
                        Experience Leader, Indiahikes
                      </span>
                    </cite>
                  </footer>
                </blockquote>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA — dark */}
      <section className="relative w-full bg-[#2d2418] px-6 py-24">
        <div className="mx-auto flex w-full max-w-[953px] flex-col items-center text-center">
          <p className="font-dm text-xs font-medium leading-[18px] tracking-[1.44px] text-[#f7f3ee8c] uppercase">
            Your team
          </p>
          <h2 className="mt-3 font-playfair text-[40.6px] font-semibold leading-[61px] text-[#f7f3ee] max-sm:text-[32px] max-sm:leading-[44px]">
            Imagine this for your team
          </h2>
          <p className="mt-4 max-w-[483px] font-dm text-base font-normal leading-6 text-[#f7f3ee] opacity-65">
            Every workshop is built around your specific context. Let&apos;s
            talk about what that could look like for your organisation.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:hello@backstory.hk"
              className="inline-flex items-center rounded-sm bg-[#b5471b] px-8 py-[13px] font-dm text-[15.5px] font-medium leading-[23.3px] text-[#f7f3ee] transition-opacity hover:opacity-90"
            >
              Book a call
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-[10px] border-b border-[#f7f3ee4c] pb-[3px] font-dm text-[14.4px] font-normal leading-[21.6px] text-[#f7f3ee] opacity-60 transition-opacity hover:opacity-100"
            >
              <span>See workshop formats</span>
              <img src="/icon-2.svg" alt="" className="h-[13px] w-[13px]" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
