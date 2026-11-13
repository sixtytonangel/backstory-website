import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "For organisations | Backstory",
  description:
    "Story circles, workshops, talks and 1:1 coaching that build storytelling skills and a sense of community at work.",
};

type Offer = {
  title: string;
  length: string;
  body: { label?: string; text: string }[];
  goodFor: string;
  card: string;
  accent: string;
};

const offers: Offer[] = [
  {
    title: "Story circles",
    length: "90 minutes",
    body: [
      {
        text: "A roundtable where I facilitate conversations that surface stories. Prompts can be open-ended, thematic (Baby Steps, Fresh Starts, Epic Fails), or tailored to your context (for Indiahikes: experiences connecting people to the mountains).",
      },
      {
        text: "People break the ice, learn new things about each other and find threads they didn't know connected them. They start putting a story lens on new experiences, filing them away to pull on when it matters.",
      },
    ],
    goodFor: "Onboarding, team building, wellness events, leadership gatherings, lunch and learns.",
    card: "bg-cream text-ink rounded-[28px_28px_28px_110px]",
    accent: "text-flame",
  },
  {
    title: "Workshops",
    length: "Starting at 3 hours",
    body: [
      {
        label: "How to tell your stories.",
        text: "This workshop focuses on the craft of turning our life experiences into stories that offer windows into our world. We'll brainstorm and sift through story ideas, then each participant will craft one into an engaging narrative. We will explore choices that make our personal stories interesting to listeners: what makes a story stick and when it falls flat. It's a skill that makes our conversations richer and our connections deeper. The workshop will equip participants to practise this skill with confidence and become better storytellers.",
      },
      {
        label: "Story listening.",
        text: "A good storyteller is a great listener. We'll do exercises to listen for stories around us: hold conversations, invite reflections, ask questions that help people open up, and hold space without judgement. It's a very collaborative experience where participants practice active listening and learn a lot about each other.",
      },
    ],
    goodFor:
      "Manager, mentor, leadership and communication training; sales and marketing teams discovering the stories that already exist rather than pushing narratives.",
    card: "bg-flame text-ink rounded-[28px]",
    accent: "text-cream",
  },
  {
    title: "Talks and keynotes",
    length: "20 to 40 minutes",
    body: [
      {
        text: "Entertaining, relatable stories that make people realise they have stories too, and so does everyone around them. They inspire people to open windows into their world with the people around them.",
      },
    ],
    goodFor:
      "Kicking off offsites and onsites, DE&I events, community programmes, onboarding and orientations.",
    card: "bg-sun text-ink rounded-[28px_110px_28px_28px]",
    accent: "text-ink",
  },
  {
    title: "1:1 coaching for leaders",
    length: "45-minute sessions",
    body: [
      {
        text: "For a keynote, town hall, presentation or performance where your story needs to connect with the room.",
      },
    ],
    goodFor:
      "Leaders preparing to speak, and speakers for your events. I do this for Creative Mornings Hong Kong speakers.",
    card: "bg-panel text-cream border border-line rounded-[28px]",
    accent: "text-sun",
  },
];

const projects = [
  {
    name: "Indiahikes",
    who: "India's leading trekking organisation",
    goal: "Find stories that illustrate Indiahikes' motto: Trekking Transforms Life.",
    format: "Online · 90 min · 12 participants",
    img: "/images/Indiahikes-Showcase-1.png",
    approach: [
      "Integrating stories in personal introductions before the trek.",
      "Introducing techniques to bring out stories in conversations during the trek.",
      "Covering techniques for reflections at the end of the trek that invite stories.",
    ],
    outcomes: [
      "Trek leaders crafted personal stories to use in their introductions with trekkers.",
      "Each leader left with a bank of story prompts for richer conversations on the trail.",
      "A story prompt from the session was turned into an Instagram post to which 100+ trekkers responded with stories showcasing Indiahikes' motto in action.",
    ],
    quote:
      "The first thing that stood out for me was how you had tailored the workshop for us! This wasn't just another template session that you would conduct for anyone else. Each element of the session, from the self introduction, to the prompts, the reflections and the discussion in the breakout room (right up to the proposal document!) was designed for Indiahikes.",
    by: "Rajan, Experience Leader, Indiahikes",
  },
  {
    name: "The MixedBag Company",
    who: "Event management company on behalf of a corporate client",
    goal: "Enable cross-divisional employees to mingle meaningfully at a team building cook-off.",
    format: "In-person · 60 min · ~60 participants",
    img: "/images/Mixedbag-showcase-1.png",
    approach: [
      "Niharika shared an entertaining story about her lunch box.",
      "Invited others to share stories through food related prompts in line with the event theme.",
      "Encouraged dialogue on the stories by facilitating questions from listeners.",
    ],
    outcomes: [
      "Even those who seemed shy and reluctant to participate at first shared stories.",
      "After the session, participants continued swapping stories.",
    ],
    quote:
      "In a high-energy corporate setting representing one of Asia's most diversified real estate groups we asked Niharika to facilitate a storytelling session… The session blended seamlessly into the larger event and left participants feeling energised, and more connected to one another.",
    by: "Tanvi Tilve, Founder, The MixedBag Company",
  },
  {
    name: "Vatavriksha",
    who: "A new wellness studio",
    goal: "Introduce the space to wellness practitioners in the city and build a community.",
    format: "In-person · 90 min · 10 participants",
    img: "/images/Vatavriksha-Showcase-1.png",
    approach: [
      "Group exercises to identify people who are part of their support network.",
      "Writing exercises to bring to life a key moment of finding support.",
      "Story shaping and sharing.",
    ],
    outcomes: [
      "Each participant left with a story tribute for someone who supported them.",
      "Participants stayed longer after the session brainstorming collaboration ideas.",
      "Most participants joined a group created by Vatavriksha to bring the community together.",
    ],
    quote:
      "The evening at Vatavriksha began with some reservation, as a storytelling workshop was not something we had done before in our yoga space. Our audience was curious but also a bit diffident but Niharika did a great job of putting them at ease and drawing out their stories… We knew the workshop was a success when we had to ask people to leave as it was time to shut the studio.",
    by: "Shilpa Padmanabhan, Founder, Vatavriksha",
  },
];

export default function Organisations() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        {/* Intro */}
        <section className="relative">
          <div
            aria-hidden="true"
            className="absolute -right-32 -top-32 h-[280px] w-[280px] rounded-full bg-flame"
          />
          <div className="relative mx-auto flex max-w-[1200px] flex-wrap items-center gap-12 px-4 pb-16 pt-12 sm:px-6 md:pb-20 md:pt-16">
            <div className="min-w-0 flex-[1_1_440px]">
              <p className="font-display text-[14px] font-semibold uppercase tracking-[0.12em] text-sun">
                For organisations
              </p>
              <h1 className="mt-3 font-display text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] sm:text-[40px]">
                Stories emerge when we make room for them.
              </h1>
              <p className="mt-5 max-w-[560px] text-[19px]">
                Sharing our stories helps us build trust and agency, gain perspective, and become better
                communicators.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex min-h-[48px] items-center rounded-full bg-flame px-6 font-display text-[15px] font-semibold text-ink transition-opacity hover:opacity-90"
              >
                Let&apos;s chat
              </a>
            </div>
            <div className="relative min-w-0 flex-[1_1_380px]">
              <div
                aria-hidden="true"
                className="absolute -bottom-10 -left-10 h-[170px] w-[170px] rounded-full bg-sun"
              />
              <img
                src="/images/workshop-feast-story-swap.jpg"
                alt="A circle of people swapping stories at a workshop"
                className="relative block aspect-[4/3] w-full rounded-[24px_120px_24px_24px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Ways to work together */}
        <section className="mx-auto max-w-[1200px] px-4 pb-16 sm:px-6 md:pb-20">
          <h2 className="font-display text-[26px] font-semibold tracking-[-0.01em] md:text-[30px]">
            Ways to work together
          </h2>
          <p className="mt-1 font-display text-[17px] font-light text-cream/90">
            Pick what fits your people and your occasion.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {offers.map((o) => (
              <article key={o.title} className={`${o.card} flex flex-col p-7 sm:p-8`}>
                <h3 className="font-display text-[22px] font-semibold">{o.title}</h3>
                <p className={`mt-1 font-display text-[15px] font-semibold ${o.accent}`}>{o.length}</p>
                <div className="mt-4 space-y-3">
                  {o.body.map((b, i) => (
                    <p key={i}>
                      {b.label && <strong className="font-semibold">{b.label} </strong>}
                      {b.text}
                    </p>
                  ))}
                </div>
                <p className="mt-auto pt-5 text-[16px]">
                  <strong className="font-semibold">Good for: </strong>
                  {o.goodFor}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Featured projects */}
        <section id="projects" className="bg-cream text-ink">
          <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 md:py-20">
            <h2 className="font-display text-[26px] font-semibold tracking-[-0.01em] md:text-[30px]">
              Featured projects
            </h2>
            <p className="mt-2 max-w-[640px]">
              Each workshop featured below was designed around the organisation&apos;s goal and the
              participants&apos; contexts.
            </p>
            <div className="mt-10 space-y-8">
              {projects.map((p, i) => (
                <article
                  key={p.name}
                  className="flex flex-wrap gap-8 overflow-hidden rounded-[28px] bg-white p-6 sm:p-8"
                >
                  <div className="min-w-0 flex-[1_1_300px]">
                    <img
                      src={p.img}
                      alt={`${p.name} workshop`}
                      className={`block aspect-[4/3] w-full object-cover ${
                        i % 2 === 0 ? "rounded-[20px_20px_20px_90px]" : "rounded-[20px_90px_20px_20px]"
                      }`}
                    />
                  </div>
                  <div className="min-w-0 flex-[2_1_420px]">
                    <h3 className="font-display text-[22px] font-semibold">{p.name}</h3>
                    <p className="text-[16px] text-[#5c554d]">{p.who}</p>
                    <p className="mt-3 font-semibold">{p.goal}</p>
                    <p className="mt-2 inline-block rounded-full bg-sun px-3 py-1 font-display text-[14px] font-medium">
                      {p.format}
                    </p>
                    <div className="mt-5 grid gap-6 sm:grid-cols-2">
                      <div>
                        <h4 className="font-display text-[15px] font-semibold uppercase tracking-[0.08em] text-flame">
                          Approach
                        </h4>
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-[16px]">
                          {p.approach.map((a) => (
                            <li key={a}>{a}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-display text-[15px] font-semibold uppercase tracking-[0.08em] text-flame">
                          Outcomes
                        </h4>
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-[16px]">
                          {p.outcomes.map((o) => (
                            <li key={o}>{o}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <figure className="mt-6 border-t border-[#e6dccd] pt-5">
                      <blockquote className="font-display text-[16px] font-light leading-[1.55]">
                        “{p.quote}”
                      </blockquote>
                      <figcaption className="mt-2 text-[15px] font-semibold">{p.by}</figcaption>
                    </figure>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ContactSection intro="Every session is shaped around your people and your occasion. If you have an idea that doesn't fit these, let's chat." />
      </main>
      <Footer />
    </>
  );
}
