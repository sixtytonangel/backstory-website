import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outcomes = [
  {
    number: "01",
    title: "Faster integration",
    description: "New people and merged teams find common ground sooner.",
  },
  {
    number: "02",
    title: "Better collaboration",
    description: "Teams that know each other's stories work better together.",
  },
  {
    number: "03",
    title: "More effective management",
    description: "Managers who listen deeply lead with more empathy and impact.",
  },
  {
    number: "04",
    title: "More authentic communication",
    description:
      "Internally and externally - stories land in a way data rarely does.",
  },
];

const workshopFormats = [
  { title: "60 - 90 min", subtitle: "Focused session", description: "Fits inside a team meeting or event slot." },
  { title: "Half or full day", subtitle: "Deep dive", description: "Ideal for retreats, offsites, and intensive programmes." },
  { title: "Online or offline", subtitle: "Your space", description: "On campus, off campus, or fully remote." },
];

const workshopMenu = [
  { title: "Listening for Stories", number: "01" },
  { title: "Advocating with Stories", number: "02" },
  { title: "Networking with Stories", number: "03" },
  { title: "Mentoring with Stories", number: "04" },
  { title: "Engaging with Stories", number: "05" },
];

const processSteps = [
  {
    number: "01",
    title: "Start a conversation",
    description: "An open call to understand your team's context, goals, and timing.",
  },
  {
    number: "02",
    title: "Align on format",
    description: "We agree on the right workshop, duration, and delivery mode.",
  },
  {
    number: "03",
    title: "Host the workshop",
    description: "A carefully customised session - online or in-person.",
  },
  {
    number: "04",
    title: "Follow-up support",
    description: "Available for questions after the session to make sure it lands.",
  },
];

const contextCategories = [
  {
    number: "01",
    title: "Onboarding",
    tags: ["New joiners", "Graduate programmes", "Manager induction"],
    description: "Help people find their footing - and each other - from the very first week.",
  },
  {
    number: "02",
    title: "Collaborating",
    tags: ["Project kickoffs", "Team mergers", "Cross-divisional events", "Corporate offsites", "Network gatherings"],
    description: "Build trust between people who need to work together - quickly and genuinely.",
  },
  {
    number: "03",
    title: "Leading",
    tags: ["Manager training", "Sales training", "Mentoring programmes"],
    description: "Give people in leadership roles a more human way to connect, guide, and persuade.",
  },
];

const niharikaTags = [
  "7 yrs facilitation",
  "7 yrs storytelling performance",
  "Goldman Sachs · Airdev",
  "Based in Hong Kong",
];

export default function HomePage() {
  return (
    <main className="w-full">
      <Navbar />

      {/* Hero */}
      <section className="w-full bg-[#f7f3ee] px-6 pb-24 pt-20 md:pt-28">
        <div className="mx-auto flex w-full max-w-[953px] flex-col md:flex-row md:items-center md:justify-between md:gap-12">
          <div className="flex-1">
            <p className="font-dm text-xs font-medium leading-[18px] tracking-[1.44px] text-[#b5471b] uppercase">
              Storytelling Workshops
            </p>
            <h1 className="mt-4 font-playfair text-[48px] font-semibold leading-[1.15] tracking-tight text-[#2d2418] max-w-[480px] md:text-[56px]">
              Storytelling workshops for organisations
            </h1>
            <p className="mt-6 max-w-[520px] font-dm text-[17px] font-normal leading-[30px] text-[#2d2418] opacity-70">
              Backstory uses personal stories from real life experiences - not
              presentation technique or data - to build deep and genuine
              connections within teams.
            </p>
            <p className="mt-4 font-dm text-[17px] font-medium leading-[30px] text-[#b5471b] italic">
              Your team has stories worth sharing.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center rounded-sm bg-[#2d2418] px-8 py-[13px] font-dm text-[15.5px] font-medium leading-[23.3px] text-[#f7f3ee] transition-opacity hover:opacity-90"
              >
                Book a call
              </a>
              <Link
                href="/showcase"
                className="inline-flex items-center gap-2 border-b border-[#2d241880] pb-[3px] font-dm text-[14.4px] font-normal leading-[21.6px] text-[#2d2418] transition-opacity hover:opacity-80"
              >
                <span>See workshop examples</span>
                <svg className="h-[13px] w-[13px]" viewBox="0 0 13 13" fill="none">
                  <path
                    d="M2.5 6.5H10.5M10.5 6.5L6.5 2.5M10.5 6.5L6.5 10.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
          {/* Hero illustration placeholder */}
          <div className="mt-12 flex-shrink-0 md:mt-0">
            <div className="relative h-[300px] w-[300px] rounded-full bg-[#ede8e0] md:h-[380px] md:w-[380px]">
              {/* Abstract people illustration - placeholder circles */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute -left-16 -top-8 h-16 w-16 rounded-full bg-[#a8a090]" />
                  <div className="absolute -right-16 -top-8 h-16 w-16 rounded-full bg-[#b5a995]" />
                  <div className="absolute -bottom-12 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-[#8a8070]" />
                  <div className="absolute left-0 top-8 h-14 w-14 rounded-full bg-[#9a9080]" />
                  {/* Speech bubble placeholders */}
                  <div className="absolute -left-20 -top-16 h-6 w-10 rounded-full bg-white" />
                  <div className="absolute -right-20 -top-16 h-6 w-10 rounded-full bg-white" />
                  {/* Dotted connection lines would go here */}
                </div>
              </div>
              {/* Small accent dots */}
              <div className="absolute right-8 top-8 h-2 w-2 rounded-full bg-[#c9bfb0]" />
              <div className="absolute bottom-12 left-4 h-2 w-2 rounded-full bg-[#c9bfb0]" />
              <div className="absolute bottom-8 right-16 h-2 w-2 rounded-full bg-[#c9bfb0]" />
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes - Why it works */}
      <section className="w-full border-t border-[#2d241814] bg-[#2d2418] px-6 py-20">
        <div className="mx-auto w-full max-w-[953px]">
          <p className="font-dm text-xs font-medium leading-[18px] tracking-[1.44px] text-[#b5471b] uppercase">
            Outcomes
          </p>
          <div className="mt-3 h-0.5 w-10 bg-[#b5471b]" />
          <h2 className="mt-6 font-playfair text-[38px] font-semibold leading-[1.2] text-[#f7f3ee] md:text-[44px]">
            Why it works
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">
            {outcomes.map((item) => (
              <div key={item.number} className="flex flex-col gap-3">
                <span className="font-dm text-[12px] font-medium tracking-[1.44px] text-[#b5471b]">
                  {item.number}
                </span>
                <h3 className="font-playfair text-[22px] font-semibold leading-[32px] text-[#f7f3ee]">
                  {item.title}
                </h3>
                <p className="font-dm text-[14.5px] font-normal leading-[25px] text-[#f7f3ee] opacity-60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="w-full border-t border-[#2d241814] bg-[#2d2418] px-6 py-20">
        <div className="mx-auto w-full max-w-[953px]">
          <p className="font-dm text-xs font-medium leading-[18px] tracking-[1.44px] text-[#f7f3ee52] uppercase">
            Offerings
          </p>
          <div className="mt-3 h-0.5 w-10 bg-[#f7f3ee30]" />

          <div className="mt-10 grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Left - Designed around your team */}
            <div>
              <h2 className="font-playfair text-[30px] font-semibold leading-[1.3] text-[#f7f3ee]">
                Designed around your team
              </h2>
              <div className="mt-8 flex flex-col gap-6">
                {workshopFormats.map((format) => (
                  <div key={format.title} className="border-l-2 border-[#f7f3ee30] pl-5">
                    <h3 className="font-dm text-[16px] font-semibold leading-[24px] text-[#f7f3ee]">
                      {format.title}
                    </h3>
                    <p className="mt-1 font-dm text-[13px] font-normal leading-[20px] text-[#f7f3ee] opacity-50">
                      {format.subtitle}
                    </p>
                    <p className="mt-1 font-dm text-[14px] font-normal leading-[22px] text-[#f7f3ee] opacity-70">
                      {format.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Workshop menu */}
            <div>
              <h2 className="font-playfair text-[30px] font-semibold leading-[1.3] text-[#f7f3ee]">
                Workshop menu
              </h2>
              <p className="mt-4 font-dm text-[14px] font-normal leading-[24px] text-[#f7f3ee] opacity-60">
                Each workshop can be run as a standalone session or combined
                into a programme.
              </p>
              <div className="mt-6 flex flex-col">
                {workshopMenu.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center justify-between border-b border-[#f7f3ee20] py-4"
                  >
                    <span className="font-dm text-[15px] font-medium leading-[22px] text-[#f7f3ee]">
                      {item.title}
                    </span>
                    <span className="font-dm text-[13px] font-medium leading-[20px] text-[#b5471b]">
                      {item.number}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-6 font-dm text-[13px] font-normal leading-[20px] text-[#f7f3ee] opacity-50">
                All workshops are customised to your context. Reach out to discuss.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process - How it works */}
      <section className="w-full border-t border-[#2d241814] bg-[#f7f3ee] px-6 py-20">
        <div className="mx-auto w-full max-w-[953px]">
          <p className="font-dm text-xs font-medium leading-[18px] tracking-[1.44px] text-[#b5471b] uppercase">
            Process
          </p>
          <div className="mt-3 h-0.5 w-10 bg-[#b5471b]" />
          <h2 className="mt-6 font-playfair text-[38px] font-semibold leading-[1.2] text-[#2d2418] md:text-[44px]">
            How it works
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">
            {processSteps.map((step) => (
              <div key={step.number} className="flex flex-col gap-3">
                <span className="font-dm text-[12px] font-medium tracking-[1.44px] text-[#b5471b]">
                  {step.number}
                </span>
                <h3 className="font-playfair text-[20px] font-semibold leading-[30px] text-[#2d2418]">
                  {step.title}
                </h3>
                <p className="font-dm text-[14.5px] font-normal leading-[25px] text-[#2d2418] opacity-70">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Niharika */}
      <section
        id="about"
        className="w-full border-t border-[#2d241814] bg-[#f0ebe3] px-6 py-20"
      >
        <div className="mx-auto w-full max-w-[953px]">
          <p className="font-dm text-xs font-medium leading-[18px] tracking-[1.44px] text-[#b5471b] uppercase">
            The Person Behind It
          </p>
          <div className="mt-3 h-0.5 w-10 bg-[#b5471b]" />

          <div className="mt-10 flex flex-col gap-10 md:flex-row md:gap-16">
            {/* Photo placeholder */}
            <div className="flex-shrink-0">
              <div className="h-[280px] w-[220px] rounded-sm bg-[#d5cfc4]">
                <div className="flex h-full w-full items-center justify-center">
                  <div className="h-20 w-20 rounded-full bg-[#c5bfb4]" />
                </div>
              </div>
              <p className="mt-2 font-dm text-[12px] font-normal leading-[18px] text-[#2d2418] opacity-40">
                Photo placeholder
              </p>
            </div>

            {/* Bio content */}
            <div className="flex-1">
              <h2 className="font-playfair text-[36px] font-semibold leading-[1.2] text-[#2d2418]">
                About Niharika
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {niharikaTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm border border-[#2d241830] px-3 py-[5px] font-dm text-[13px] font-normal leading-[19px] text-[#2d2418]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-4">
                <p className="font-dm text-[15px] font-normal leading-[26px] text-[#2d2418] opacity-80">
                  I&apos;m Niharika - a facilitator, storyteller, and the person
                  behind Backstory. I co-run Hong Kong Stories, and have spent 7
                  years performing and facilitating personal storytelling in live
                  settings.
                </p>
                <p className="font-dm text-[15px] font-normal leading-[26px] text-[#2d2418] opacity-80">
                  Before this, I spent 10 years in professional roles at Goldman
                  Sachs and Airdev - so I understand the pressures and
                  communication challenges that teams in organisations actually
                  face.
                </p>
                <p className="font-dm text-[15px] font-normal leading-[26px] text-[#2d2418] opacity-80">
                  I started Backstory in 2024 to apply storytelling to business
                  contexts - focusing on life-experience stories as a tool for
                  genuine connection. I work with teams globally.
                </p>
                <p className="mt-2 font-dm text-[15px] font-medium leading-[26px] text-[#b5471b] italic">
                  Every workshop is designed and delivered by me personally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Context - Where it works */}
      <section className="w-full border-t border-[#2d241814] bg-[#f0ebe3] px-6 py-20">
        <div className="mx-auto w-full max-w-[953px]">
          <p className="font-dm text-xs font-medium leading-[18px] tracking-[1.44px] text-[#b5471b] uppercase">
            Context
          </p>
          <div className="mt-3 h-0.5 w-10 bg-[#b5471b]" />

          <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-16">
            <h2 className="font-playfair text-[38px] font-semibold leading-[1.2] text-[#2d2418] md:text-[44px]">
              Where it works
            </h2>
            <p className="max-w-[480px] font-dm text-[15px] font-normal leading-[26px] text-[#2d2418] opacity-70">
              Wherever authentic connection leads to better outcomes - which is
              to say, in almost every team context.
            </p>
          </div>

          <div className="mt-12 flex flex-col divide-y divide-[#2d241820]">
            {contextCategories.map((category) => (
              <div
                key={category.number}
                className="flex flex-col gap-4 py-10 md:flex-row md:items-start md:gap-16"
              >
                <div className="shrink-0 md:w-[180px]">
                  <span className="font-dm text-[12px] font-medium tracking-[1.44px] text-[#b5471b]">
                    {category.number}
                  </span>
                  <h3 className="mt-2 font-playfair text-[24px] font-semibold leading-[34px] text-[#2d2418]">
                    {category.title}
                  </h3>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {category.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-sm border border-[#2d241830] px-3 py-[5px] font-dm text-[13px] font-normal leading-[19px] text-[#2d2418]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 font-dm text-[15px] font-normal leading-[26px] text-[#2d2418] opacity-70">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials placeholder */}
      <section className="w-full border-t border-[#2d241814] bg-[#f7f3ee] px-6 py-20">
        <div className="mx-auto w-full max-w-[953px]">
          <p className="font-dm text-xs font-medium leading-[18px] tracking-[1.44px] text-[#b5471b] uppercase">
            Testimonials
          </p>
          <div className="mt-3 h-0.5 w-10 bg-[#b5471b]" />
          <h2 className="mt-6 font-playfair text-[38px] font-semibold leading-[1.2] text-[#2d2418] md:text-[44px]">
            What participants say
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Testimonial placeholder 1 */}
            <div className="rounded-sm border border-[#2d241820] bg-[#f0ebe3] p-8">
              <div className="h-4 w-24 rounded bg-[#d5cfc4]" />
              <div className="mt-4 space-y-2">
                <div className="h-4 w-full rounded bg-[#d5cfc4]" />
                <div className="h-4 w-5/6 rounded bg-[#d5cfc4]" />
                <div className="h-4 w-4/6 rounded bg-[#d5cfc4]" />
              </div>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#d5cfc4]" />
                <div>
                  <div className="h-3 w-20 rounded bg-[#d5cfc4]" />
                  <div className="mt-1 h-2 w-24 rounded bg-[#ddd6cb]" />
                </div>
              </div>
            </div>

            {/* Testimonial placeholder 2 */}
            <div className="rounded-sm border border-[#2d241820] bg-[#f0ebe3] p-8">
              <div className="h-4 w-24 rounded bg-[#d5cfc4]" />
              <div className="mt-4 space-y-2">
                <div className="h-4 w-full rounded bg-[#d5cfc4]" />
                <div className="h-4 w-4/5 rounded bg-[#d5cfc4]" />
                <div className="h-4 w-3/5 rounded bg-[#d5cfc4]" />
              </div>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#d5cfc4]" />
                <div>
                  <div className="h-3 w-16 rounded bg-[#d5cfc4]" />
                  <div className="mt-1 h-2 w-28 rounded bg-[#ddd6cb]" />
                </div>
              </div>
            </div>
          </div>
          <p className="mt-8 text-center font-dm text-[13px] font-normal leading-[20px] text-[#2d2418] opacity-50">
            Testimonial placeholders - content to be added
          </p>
        </div>
      </section>

      {/* Photos placeholder */}
      <section className="w-full border-t border-[#2d241814] bg-[#f0ebe3] px-6 py-20">
        <div className="mx-auto w-full max-w-[953px]">
          <p className="font-dm text-xs font-medium leading-[18px] tracking-[1.44px] text-[#b5471b] uppercase">
            In Action
          </p>
          <div className="mt-3 h-0.5 w-10 bg-[#b5471b]" />
          <h2 className="mt-6 font-playfair text-[38px] font-semibold leading-[1.2] text-[#2d2418] md:text-[44px]">
            Workshop moments
          </h2>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {/* Photo placeholders */}
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-sm bg-[#d5cfc4] flex items-center justify-center"
              >
                <svg
                  className="h-8 w-8 text-[#c0b8aa]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center font-dm text-[13px] font-normal leading-[20px] text-[#2d2418] opacity-50">
            Photo placeholders - workshop images to be added
          </p>
        </div>
      </section>

      {/* CTA - Get Started */}
      <section
        id="contact"
        className="relative w-full bg-[#2d2418] px-6 py-24"
      >
        <div className="mx-auto flex w-full max-w-[953px] flex-col items-center text-center">
          <p className="font-dm text-xs font-medium leading-[18px] tracking-[1.44px] text-[#f7f3ee8c] uppercase">
            Get Started
          </p>
          <h2 className="mt-3 font-playfair text-[40.6px] font-semibold leading-[61px] text-[#f7f3ee] max-sm:text-[32px] max-sm:leading-[44px]">
            Let&apos;s talk about your team
          </h2>
          <p className="mt-4 max-w-[520px] font-dm text-base font-normal leading-6 text-[#f7f3ee] opacity-65">
            The best first step is a short conversation. Tell me what you&apos;re
            working towards - I&apos;ll suggest what might work.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:hello@backstory.co"
              className="inline-flex items-center rounded-sm bg-[#b5471b] px-8 py-[13px] font-dm text-[15.5px] font-medium leading-[23.3px] text-[#f7f3ee] transition-opacity hover:opacity-90"
            >
              Book a call
            </a>
            <a
              href="mailto:hello@backstory.co"
              className="inline-flex items-center border-b border-[#f7f3ee4c] pb-[3px] font-dm text-[14.4px] font-normal leading-[21.6px] text-[#f7f3ee] opacity-80 transition-opacity hover:opacity-100"
            >
              Or email me at hello@backstory.co
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
