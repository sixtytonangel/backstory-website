"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type ProjectKey = "indiahikes" | "mixedbag" | "vatavriksha";

const workshopCards: {
  key: ProjectKey;
  title: string;
  subtitle: string;
  description: string;
}[] = [
    {
      key: "indiahikes",
      title: "Indiahikes",
      subtitle: "India's leading trekking organisation",
      description:
        "Explore and craft personal stories that illustrate why 'Trekking Transforms Life' - for trek leaders who carry that message every day.",
    },
    {
      key: "mixedbag",
      title: "The MixedBag Company",
      subtitle:
        "Event management company - facilitating a flagship employee event for a top-tier corporate client",
      description:
        "Create a genuinely fun and connecting activity for employees across divisions to mingle meaningfully - not just network.",
    },
    {
      key: "vatavriksha",
      title: "Vatavriksha",
      subtitle: "A new wellness studio",
      description:
        "Introduce a new wellness space to its community of practitioners and build real relationships between them from the start.",
    },
  ];

const projectData: Record<
  ProjectKey,
  {
    tagline: string;
    title: string;
    meta: string[];
    intro: string;
    contextImage: string;
    workshopImage: string;
    goal: string;
    format: string;
    approach: string[];
    outcomes: string[];
    quote: string;
    quoteName: string;
    quoteRole: string;
  }
> = {
  indiahikes: {
    tagline: "India's leading trekking organisation",
    title: "Indiahikes",
    meta: ["Online", "90 min", "12 participants"],
    intro:
      "Explore and craft personal stories that illustrate why 'Trekking Transforms Life' - for trek leaders who carry that message every day.",
    contextImage: "/imagewithfallback.png",
    workshopImage: "/imagewithfallback-1.png",
    goal: "Find and shape stories that illustrate Indiahikes' core motto 'Trekking Transforms Life'. Trek leaders are the faces of this mission - the workshop helped them find and tell personal stories that make that idea real for the trekkers they lead.",
    format:
      "A 90-minute online 'Listening for Stories' workshop for 12 selected trek leaders. Delivered virtually with small group exercises, reflective prompts, and guided story-sharing.",
    approach: [
      "Mapped touchpoints across the trek journey to identify where stories matter most",
      "Selected high-impact techniques and exercises aligned to those key moments",
      "Prompted leaders to surface stories from their own trekking experiences, not just scripted narratives",
    ],
    outcomes: [
      "Trek leaders crafted personal stories to use in their introductions with trekkers",
      "Each leader left with a bank of story prompts for richer conversations on the trail",
      "A story prompt from the session was turned into an Instagram post that generated many meaningful responses",
    ],
    quote:
      "The session opened up something we didn't know we were missing. Our leaders came out with stories they were genuinely proud to share - and it showed on the next trek.",
    quoteName: "Rajan",
    quoteRole: "Experience Leader, Indiahikes",
  },
  mixedbag: {
    tagline:
      "Event management company - facilitating a flagship employee event for a top-tier corporate client",
    title: "The MixedBag Company",
    meta: ["In-person", "90 min", "10 participants"],
    intro:
      "Create a genuinely fun and connecting activity for employees across divisions to mingle meaningfully - not just network.",
    contextImage: "/mixedbag-context.jpg",
    workshopImage: "/mixedbag-workshop.jpg",
    goal: "Design an engaging group activity for roughly 100 employees across levels and divisions, helping them connect in a meaningful way during an annual flagship event.",
    format:
      "A 60-minute facilitated story swap centred on food and cultural connection, designed to complement the event's cooking competition and food festival theme.",
    approach: [
      "Built story prompts around food memories and cultural identity to fit the event theme",
      "Structured the session so quieter participants were equally included from the start",
      "Used pair and small-group swaps to lower the stakes and invite genuine sharing",
    ],
    outcomes: [
      "Nearly everyone shared stories, including participants who started out hesitant",
      "Conversations continued well after the session ended, with many people staying back to talk",
      "The activity became a highlight of the event according to attendee feedback",
    ],
    quote:
      "Participants were still talking about it afterwards. It managed to be both fun and genuinely connecting - which is rare at large corporate events.",
    quoteName: "Tanvi Tilve",
    quoteRole: "Founder, The MixedBag Company",
  },
  vatavriksha: {
    tagline: "A new wellness studio",
    title: "Vatavriksha",
    meta: ["In-person", "90 min", "10 participants"],
    intro:
      "Introduce a new wellness space to its community of practitioners and build real relationships between them from the start.",
    contextImage: "/vatavriksha-context.jpg",
    workshopImage: "/vatavriksha-workshop.jpg",
    goal: "Help wellness practitioners gather meaningfully at a new studio launch - building genuine relationships with each other and with the space they would be working from.",
    format:
      "A 90-minute combined workshop drawing from 'Networking with Stories' and 'Advocating with Stories' formats, designed specifically for a small group of practitioners.",
    approach: [
      "Centred the session on 'story tributes' - stories about people who have shaped each participant's wellbeing journey",
      "Used personal narrative to bridge practitioners across disciplines (yoga, therapy, nutrition, etc.)",
      "Designed prompts that made advocacy feel authentic rather than performative",
    ],
    outcomes: [
      "Each participant left with a story they went on to share with a loved one that same evening",
      "Participants exchanged contacts and immediately began exploring collaboration ideas",
      "A WhatsApp group formed after the session and became an active ongoing community space",
    ],
    quote:
      "It felt like magic - people who had just met were sharing things that felt real and true. The connections that formed that evening have continued to grow.",
    quoteName: "Shilpa Padmanabhan",
    quoteRole: "Founder, Vatavriksha",
  },
};

export default function ShowcasePage() {
  const [activeProject, setActiveProject] = useState<ProjectKey>("indiahikes");
  const project = projectData[activeProject];
  const router = useRouter();
  const featuredRef = useRef<HTMLElement>(null);

  // Handle hash on mount and hash changes
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "") as ProjectKey;
      if (hash && projectData[hash]) {
        setActiveProject(hash);
        // Small delay to ensure state is updated before scrolling
        setTimeout(() => {
          featuredRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    };

    // Check hash on mount
    handleHash();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const handleProjectClick = (key: ProjectKey) => {
    setActiveProject(key);
    router.push(`/showcase#${key}`, { scroll: false });
    setTimeout(() => {
      featuredRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

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
            Each workshop featured below was designed around the organisation's goal and the participant's contexts.
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
            {workshopCards.map((card) => {
              const isActive = activeProject === card.key;
              return (
                <button
                  key={card.key}
                  onClick={() => handleProjectClick(card.key)}
                  className={`flex flex-col rounded-sm border text-left transition-all ${isActive
                      ? "bg-[#ede8e0] border-[#b5471b]"
                      : "bg-[#f0ebe3] border-[#2d24181a] hover:border-[#b5471b66]"
                    }`}
                >
                  <div className="flex h-full min-h-[283px] flex-col px-[25px] pb-6 pt-[44px]">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-playfair text-[17.6px] font-semibold leading-[26.4px] text-[#2d2418]">
                        {card.title}
                      </h3>
                      {isActive && (
                        <svg
                          className="mt-1 h-4 w-4 shrink-0"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M4 12L12 4M12 4H6M12 4V10"
                            stroke="#2d2418"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                    <p className="mt-2 font-dm text-[12.8px] font-medium leading-[19.2px] text-[#b5471b]">
                      {card.subtitle}
                    </p>
                    <p className="mt-3 flex-1 font-dm text-[13.6px] font-medium leading-[22.4px] text-[#2d2418] opacity-70">
                      {card.description}
                    </p>
                    <span
                      className={`mt-5 inline-flex w-fit items-center gap-1 font-dm text-[12.8px] font-medium leading-[19.2px] ${isActive
                          ? "text-[#b5471b]"
                          : "text-[#2d2418] opacity-50"
                        }`}
                    >
                      <span>View project</span>
                      <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section
        ref={featuredRef}
        id="featured-project"
        className="relative w-full border-t border-[#2d241814] bg-[#f0ebe3] px-3 py-12 sm:px-6 scroll-mt-20"
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
                  {project.tagline}
                </p>
                <h2 className="mt-2 font-playfair text-[30.5px] font-semibold leading-[45.7px] text-[#2d2418]">
                  {project.title}
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.meta.map((item) => (
                    <span
                      key={item}
                      className="rounded-sm bg-[#ede8e1] px-3 py-[3px] font-dm text-[12.5px] font-normal leading-[18.7px] text-[#2d2418] opacity-85"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <p className="mt-5 max-w-[638px] font-dm text-[15.5px] font-normal leading-[27.2px] text-[#2d2418] opacity-75">
                  {project.intro}
                </p>
              </header>

              {/* Images */}
              <div className="grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-1">
                <figure className="flex flex-col">
                  <div
                    className="h-[297px] w-full bg-[#ddd6cb]"
                    style={{
                      background: `url(${project.contextImage}) 50% 50% / cover`,
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
                      background: `url(${project.workshopImage}) 50% 50% / cover`,
                    }}
                  />
                  <figcaption className="px-4 py-[5px] font-dm text-xs font-normal leading-[18px] text-[#2d2418] opacity-40">
                    Workshop in progress
                  </figcaption>
                </figure>
              </div>

              {/* Goal & Format */}
              <div className="grid grid-cols-1 gap-8 border-t border-[#2d241814] px-6 py-10 sm:px-12 md:grid-cols-2">
                <div className="flex flex-col gap-3">
                  <h3 className="font-dm text-[11.5px] font-medium leading-[17.3px] tracking-[1.15px] text-[#b5471b] uppercase">
                    Goal
                  </h3>
                  <p className="font-dm text-[14.9px] font-normal leading-[26px] text-[#2d2418] opacity-80">
                    {project.goal}
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-dm text-[11.5px] font-medium leading-[17.3px] tracking-[1.15px] text-[#b5471b] uppercase">
                    Format
                  </h3>
                  <p className="font-dm text-[14.9px] font-normal leading-[26px] text-[#2d2418] opacity-80">
                    {project.format}
                  </p>
                </div>
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
                  {project.approach.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-[14px] opacity-[0.78]"
                    >
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
                  {project.outcomes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="font-dm text-[14.4px] font-semibold leading-[24.5px] text-[#b5471b]">
                        &rarr;
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
                    &ldquo;{project.quote}&rdquo;
                  </p>
                  <footer className="mt-5">
                    <cite className="not-italic">
                      <span className="block font-playfair text-[15.2px] font-semibold leading-[22.8px] text-[#f7f3ee]">
                        {project.quoteName}
                      </span>
                      <span className="font-dm text-[13.3px] font-normal leading-[19.9px] text-[#f7f3ee8c]">
                        {project.quoteRole}
                      </span>
                    </cite>
                  </footer>
                </blockquote>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA - dark */}
      <section className="relative w-full bg-[#2d2418] px-6 py-24">
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
            <Link
              href="/"
              className="inline-flex items-center gap-[10px] border-b border-[#f7f3ee4c] pb-[3px] font-dm text-[14.4px] font-normal leading-[21.6px] text-[#f7f3ee] opacity-60 transition-opacity hover:opacity-100"
            >
              <span>See workshop formats</span>
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
      </section>

      <Footer />
    </main>
  );
}
