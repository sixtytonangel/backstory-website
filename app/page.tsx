import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const workshopFormats = [
  { title: "60 - 90 min", subtitle: "Focused session", description: "Fits inside a team meeting or event slot." },
  { title: "6 - 60 people", subtitle: "Hands on", description: "Adapted as per your team size." },
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
    description: "An open call to understand your team's context and goals.",
  },
  {
    number: "02",
    title: "Align on format",
    description: "We agree on the right workshop, duration, and delivery mode.",
  },
  {
    number: "03",
    title: "Host the workshop",
    description: "A reasearched and customised session to align with your needs.",
  },
  {
    number: "04",
    title: "Follow-up support",
    description: "Resources and support to carry the practice forward.",
  },
];

const contextCategories = [
  {
    number: "01",
    title: "Onboarding",
    tags: ["Graduate Programs", "New Teams", "Mergers & Acquisitions"],
    description: "Help people build their community from the very first week.",
  },
  {
    number: "02",
    title: "Collaborating",
    tags: ["Project kickoffs", "Retrospectives", "Innovation sprints"],
    description: "Understand each other's perspectives and build trust.",
  },
  {
    number: "03",
    title: "Leading",
    tags: ["Manager orientations", "Mentorship programs", "Strategy offsites"],
    description: "Listen for stories and find common language to guide and align.",
  },
];

const niharikaTags = [
  "7 yrs facilitation",
  "7 yrs live performance",
  "Goldman Sachs · Airdev",
  "Based in Hong Kong",
];

const testimonials = [
  {
    quote: "Immediately after your session, I had the opportunity to lead a trek and I actually used this with my team - it worked like a charm. It helped me get to know my team at a deeper level and actually brought us closer.",
    name: "Ramon Rajan",
    role: "Team Lead, Indiahikes",
    logo: "/images/logo-indiahikes.jpeg",
    href: "/showcase#indiahikes",
  },
  {
    quote: "What made the experience special was her ability to create a safe, engaging space where participants could exchange stories with ease and authenticity. Her facilitation was thoughtful and inclusive, making storytelling feel natural rather than performative.",
    name: "Tanvi Tilve",
    role: "Founder, The MixedBag Company",
    logo: "/images/logo-mixedbag.avif",
    href: "/showcase#mixedbag",
  },
  {
    quote: "We knew the workshop was a success when we had to ask people to leave as it was time to shut the studio... the ice had truly broken... The otherwise shy-to-open-up people had big smiles on their faces.",
    name: "Shilpa Padmanabhan",
    role: "Founder, Vatavriksha",
    logo: "/images/logo-vatavriksha.jpg",
    href: "/showcase#vatavriksha",
  },
];

const workshopMoments = [
  { src: "/images/workshop-feast-story-swap.jpg", alt: "FEAST Workshop Story Swap" },
  { src: "/images/workshop-feast-korea.jpg", alt: "FEAST Korea wrap up" },
  { src: "/images/workshop-pune-banter.jpg", alt: "Pune workshops banter" },
  { src: "/images/workshop-udaipur.jpeg", alt: "Udaipur Tales storytelling workshop" },
];

export default function HomePage() {
  return (
    <main className="w-full">
      <Navbar />

      {/* Hero */}
      <section className="w-full bg-[#f7f3ee] px-6 pb-24 pt-20 md:pt-28">
        <div className="mx-auto flex w-full max-w-[953px] flex-col md:flex-row md:items-center md:justify-between md:gap-12">
          <div className="flex-1">
            <p className="font-dm text-s font-medium leading-[26px] tracking-[1.44px] text-[#b5471b] uppercase">
              Storytelling Workshops
            </p>
            <h1 className="mt-4 font-playfair text-[48px] font-semibold leading-[1.15] tracking-tight text-[#2d2418] max-w-[480px] md:text-[56px]">
              You have stories worth sharing
            </h1>
            <p className="mt-6 max-w-[520px] font-dm text-[17px] font-normal leading-[30px] text-[#2d2418] opacity-70">
              Find stories hidden in life experiences to build deep and genuine connections.
            </p>
            <p className="mt-4 font-dm text-[17px] font-medium leading-[30px] text-[#b5471b] italic">
              Not speech outlines. Not data stories. Just real anecdotes.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://calendly.com/aggarwal-niharikaa/story-workshop-consultation"
                target="_blank"
                rel="noopener noreferrer"
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
          {/* Hero image */}
          <div className="mt-12 flex-shrink-0 md:mt-0">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/images/cards-hero.jpg"
                alt="Workshop activity - Pick a card that describes you best"
                width={380}
                height={380}
                quality={95}
                priority
                className="h-[300px] w-[300px] object-cover md:h-[380px] md:w-[380px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Context - Value / Why it works */}
      <section className="w-full border-t border-[#2d241814] bg-[#f0ebe3] px-6 py-20">
        <div className="mx-auto w-full max-w-[953px]">
          <p className="font-dm text-xs font-medium leading-[18px] tracking-[1.44px] text-[#b5471b] uppercase">
            Value
          </p>
          <div className="mt-3 h-0.5 w-10 bg-[#b5471b]" />
          <h2 className="mt-6 font-playfair text-[38px] font-semibold leading-[1.2] text-[#2d2418] md:text-[44px]">
            Why it works
          </h2>

          <div className="mt-12 flex flex-col divide-y divide-[#2d241820]">
            {contextCategories.map((category) => (
              <div
                key={category.number}
                className="flex flex-col gap-4 py-10 first:pt-0 md:flex-row md:items-start md:gap-16"
              >
                <div className="shrink-0 md:w-[180px]">
                  <h3 className="font-playfair text-[24px] font-semibold leading-[34px] text-[#2d2418]">
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
                All workshops are customised to your context.
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

          <div className="mt-10 flex flex-col gap-10 md:flex-row md:items-center md:gap-16">
            {/* Photo */}
            <div className="flex-shrink-0 self-center md:self-center">
              <Image
                src="/images/niharika-profile.jpg"
                alt="Niharika - Facilitator and Storyteller"
                width={220}
                height={280}
                className="h-[280px] w-[220px] rounded-sm object-cover"
                quality={90}
              />
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
                  behind Backstory. I have spent 7 years performing and facilitating personal stories on stage as well as in workshops. I co-run Hong Kong Stories, a non-profit organisation to help Hong Kongers tell their stories.
                </p>
                <p className="font-dm text-[15px] font-normal leading-[26px] text-[#2d2418] opacity-80">
                  Before this, I spent 10 years in professional roles at Goldman
                  Sachs and Airdev. I understand the pressures and
                  communication challenges that teams face.
                </p>
                <p className="font-dm text-[15px] font-normal leading-[26px] text-[#2d2418] opacity-80">
                  I started Backstory in 2024 to apply storytelling to business
                  contexts - focusing on life-experience stories as a tool for
                  genuine connection.
                </p>
                <p className="mt-2 font-dm text-[15px] font-medium leading-[26px] text-[#b5471b] italic">
                  I am keen to work with team leads to explore how storytelling can benefit their teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full border-t border-[#2d241814] bg-[#f7f3ee] px-6 py-20">
        <div className="mx-auto w-full max-w-[953px]">
          <p className="font-dm text-xs font-medium leading-[18px] tracking-[1.44px] text-[#b5471b] uppercase">
            Testimonials
          </p>
          <div className="mt-3 h-0.5 w-10 bg-[#b5471b]" />
          <h2 className="mt-6 font-playfair text-[38px] font-semibold leading-[1.2] text-[#2d2418] md:text-[44px]">
            What clients say
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Link
                key={testimonial.name}
                href={testimonial.href}
                className="group flex flex-col rounded-sm border border-[#2d241820] bg-[#f0ebe3] p-6 transition-all hover:border-[#b5471b40] hover:shadow-sm"
              >
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.logo}
                    alt={testimonial.role}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-5 flex-1 font-dm text-[14px] font-normal leading-[24px] text-[#2d2418] opacity-80">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-5 pt-4 border-t border-[#2d241815]">
                  <p className="font-dm text-[14px] font-semibold leading-[20px] text-[#2d2418]">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 font-dm text-[12px] font-normal leading-[18px] text-[#2d2418] opacity-60">
                    {testimonial.role}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop moments */}
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
            {workshopMoments.map((photo) => (
              <div
                key={photo.src}
                className="relative aspect-square overflow-hidden rounded-sm"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
            ))}
          </div>
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
            Let&apos;s plan workshops for your team
          </h2>
          <p className="mt-4 max-w-[520px] font-dm text-base font-normal leading-6 text-[#f7f3ee] opacity-65">
            The best first step is a short conversation. Tell me what your team needs - I&apos;ll suggest what might work.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://calendly.com/aggarwal-niharikaa/story-workshop-consultation"
              target="_blank"
              rel="noopener noreferrer"
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
