import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const workshopFormats = [
  {
    title: "Listening for Stories",
    duration: "90 min",
    mode: "Online or in-person",
    description:
      "A focused session to help your team surface and recognise the stories that are already there — in everyday moments, conversations, and experiences on the job.",
  },
  {
    title: "Finding Your Voice",
    duration: "Half day",
    mode: "In-person",
    description:
      "A deeper workshop where participants craft and practise stories they can use in pitches, introductions, leadership moments, and team culture-building.",
  },
  {
    title: "Team Story Day",
    duration: "Full day",
    mode: "In-person",
    description:
      "A full-day immersive experience where the whole team builds a shared story vocabulary — and leaves with personal narratives aligned to a common purpose.",
  },
];

const principles = [
  {
    number: "01",
    title: "Built around your context",
    body: "Every workshop begins with understanding your team — your goals, your moment, your people. Nothing is off the shelf.",
  },
  {
    number: "02",
    title: "Story, not performance",
    body: "We're not teaching public speaking. We're helping people find and shape the stories that are already theirs to tell.",
  },
  {
    number: "03",
    title: "Practical and lasting",
    body: "Participants leave with real stories and prompts they can use immediately — in meetings, with clients, or with each other.",
  },
];

export default function HomePage() {
  return (
    <main className="w-full">
      <Navbar />

      {/* Hero */}
      <section className="w-full bg-[#f7f3ee] px-6 pb-24 pt-20 md:pt-28">
        <div className="mx-auto w-full max-w-[953px]">
          <p className="font-dm text-xs font-medium leading-[18px] tracking-[1.44px] text-[#b5471b] uppercase">
            Storytelling Workshops
          </p>
          <div className="mt-3 h-0.5 w-10 bg-[#b5471b]" />
          <h1 className="mt-6 font-playfair text-[52px] font-semibold leading-[1.15] tracking-tight text-[#2d2418] max-w-[700px] md:text-[64px]">
            Your team has stories worth telling
          </h1>
          <p className="mt-6 max-w-[560px] font-dm text-[17px] font-normal leading-[30px] text-[#2d2418] opacity-70">
            Backstory designs and delivers bespoke storytelling workshops for
            organisations — helping teams connect, communicate, and build culture
            through the power of personal narrative.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center rounded-sm bg-[#b5471b] px-8 py-[13px] font-dm text-[15.5px] font-medium leading-[23.3px] text-[#f7f3ee] transition-opacity hover:opacity-90"
            >
              Book a call
            </a>
            <Link
              href="/showcase"
              className="inline-flex items-center gap-2 border-b border-[#2d241880] pb-[3px] font-dm text-[14.4px] font-normal leading-[21.6px] text-[#2d2418] opacity-65 transition-opacity hover:opacity-100"
            >
              <span>See our work</span>
              <img src="/icon-2.svg" alt="" className="h-[13px] w-[13px]" />
            </Link>
          </div>
        </div>
      </section>

      {/* About / What we do */}
      <section
        id="about"
        className="w-full border-t border-[#2d241814] bg-[#f0ebe3] px-6 py-20"
      >
        <div className="mx-auto w-full max-w-[953px]">
          <p className="font-dm text-xs font-medium leading-[18px] tracking-[1.44px] text-[#b5471b] uppercase">
            The Work
          </p>
          <div className="mt-3 h-0.5 w-10 bg-[#b5471b]" />
          <h2 className="mt-6 font-playfair text-[38px] font-semibold leading-[1.2] text-[#2d2418] max-w-[620px] md:text-[44px]">
            Every workshop is built around your team
          </h2>
          <p className="mt-5 max-w-[580px] font-dm text-base font-normal leading-[28.8px] text-[#2d2418] opacity-70">
            We don&apos;t run off-the-shelf sessions. Each Backstory workshop is
            designed around your specific context — your people, your goals, your
            moment. No two are the same.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
            {principles.map((p) => (
              <div key={p.number} className="flex flex-col gap-3">
                <span className="font-dm text-[12px] font-medium tracking-[1.44px] text-[#b5471b] opacity-70">
                  {p.number}
                </span>
                <h3 className="font-playfair text-[20px] font-semibold leading-[30px] text-[#2d2418]">
                  {p.title}
                </h3>
                <p className="font-dm text-[14.5px] font-normal leading-[25px] text-[#2d2418] opacity-70">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Formats */}
      <section className="w-full border-t border-[#2d241814] bg-[#f7f3ee] px-6 py-20">
        <div className="mx-auto w-full max-w-[953px]">
          <p className="font-dm text-xs font-medium leading-[18px] tracking-[1.44px] text-[#b5471b] uppercase">
            Formats
          </p>
          <h2 className="mt-3 font-playfair text-[30.5px] font-semibold leading-[45.7px] text-[#2d2418]">
            Choose the format that fits your team
          </h2>

          <div className="mt-8 flex flex-col divide-y divide-[#2d241814]">
            {workshopFormats.map((format) => (
              <div
                key={format.title}
                className="flex flex-col gap-3 py-8 md:flex-row md:items-start md:gap-12"
              >
                <div className="shrink-0 md:w-[260px]">
                  <h3 className="font-playfair text-[20px] font-semibold leading-[30px] text-[#2d2418]">
                    {format.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="rounded-sm bg-[#ede8e1] px-3 py-[3px] font-dm text-[12.5px] text-[#2d2418] opacity-80">
                      {format.duration}
                    </span>
                    <span className="rounded-sm bg-[#ede8e1] px-3 py-[3px] font-dm text-[12.5px] text-[#2d2418] opacity-80">
                      {format.mode}
                    </span>
                  </div>
                </div>
                <p className="max-w-[500px] font-dm text-[15px] font-normal leading-[26px] text-[#2d2418] opacity-70">
                  {format.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <Link
              href="/showcase"
              className="inline-flex items-center gap-2 font-dm text-[14px] font-medium text-[#b5471b] transition-opacity hover:opacity-80"
            >
              <span>See workshops in action</span>
              <img src="/icon.svg" alt="" className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA — dark */}
      <section
        id="contact"
        className="relative w-full bg-[#2d2418] px-6 py-24"
      >
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
              href="/showcase"
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
