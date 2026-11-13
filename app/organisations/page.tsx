import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import OfferCards, { type Offer } from "@/components/OfferCards";

export const metadata: Metadata = {
  title: "For organisations | Backstory",
  description:
    "Story circles, workshops, talks and 1:1 coaching. A real story, told well, brings people closer.",
};

const offers: Offer[] = [
  {
    title: "Story circles",
    length: "90 minutes",
    goodFor: "Onboarding, team building, wellness events, leadership gatherings, lunch and learns.",
    text: [
      "A roundtable of facilitated conversations that surface stories. Prompts can be open-ended, thematic (Baby Steps, Fresh Starts, Epic Fails), or tailored to your context (e.g. for Indiahikes: experiences connecting people to the mountains).",
      "People break the ice, learn new things about each other and find threads they didn't know connected them. They start putting a story lens on new experiences, filing them away to pull on when it matters.",
    ],
    card: "bg-cream text-ink",
    accent: "text-[#9c4320]",
  },
  {
    title: "Workshops",
    length: "Starting at 3 hours",
    goodFor:
      "Communication, leadership, manager and mentor training; sales and marketing teams discovering the stories that already exist.",
    parts: [
      {
        title: "Storytelling",
        goodFor: "Communication training and leadership training.",
        text: "This workshop focuses on the craft of turning our life experiences into stories that offer windows into our world. We'll brainstorm and sift through story ideas, then each participant will craft one into an engaging narrative. We will explore choices that make our personal stories interesting to listeners: what makes a story stick and when it falls flat. It's a skill that makes our conversations richer and our connections deeper. The workshop will equip participants to practise this skill with confidence and become better storytellers.",
      },
      {
        title: "Story listening",
        goodFor:
          "Manager, mentor and leadership training; sales and marketing teams discovering the stories that already exist rather than pushing narratives.",
        text: "A good storyteller is a great listener. We'll do exercises to listen for stories around us: hold conversations, invite reflections, ask questions that help people open up, and hold space without judgement. It's a very collaborative experience where participants practice active listening and learn a lot about each other.",
      },
    ],
    card: "bg-ember text-ink",
    accent: "text-ink",
  },
  {
    title: "Talks and keynotes",
    length: "20 to 40 minutes",
    goodFor:
      "Kicking off offsites and onsites, DE&I events, community programmes, onboarding and orientations.",
    text: [
      "Entertaining, relatable stories that make people realise they have stories too, and so does everyone around them. They inspire people to open windows into their world with the people around them.",
    ],
    card: "bg-sun text-ink",
    accent: "text-ink",
  },
  {
    title: "1:1 coaching for leaders",
    length: "45-minute sessions",
    goodFor:
      "Leaders preparing to speak, and speakers for your events.",
    text: [
      "For a keynote, town hall, presentation or performance where your story needs to connect with the room. Also offered to Creative Mornings Hong Kong speakers.",
    ],
    card: "bg-panel text-cream border border-line",
    accent: "text-sun",
  },
];

const projects = [
  {
    name: "Indiahikes",
    who: "India's leading trekking organisation",
    logo: "/images/logo-indiahikes.jpeg",
    goal: "Find stories that illustrate the company motto: Trekking Transforms Life.",
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
    logo: "/images/logo-mixedbag.avif",
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
      "…we asked Niharika to facilitate a storytelling session… The session blended seamlessly into the larger event and left participants feeling energised, and more connected to one another.",
    by: "Tanvi Tilve, Founder, The MixedBag Company",
  },
  {
    name: "Vatavriksha",
    who: "A new wellness studio",
    logo: "/images/logo-vatavriksha.jpg",
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
            className="absolute -right-32 -top-32 h-[200px] w-[200px] rounded-full bg-ember md:h-[280px] md:w-[280px]"
          />
          <div className="relative mx-auto flex max-w-[1200px] flex-wrap items-center gap-12 px-4 pb-16 pt-12 sm:px-6 md:pb-20 md:pt-16">
            <div className="min-w-0 flex-[1_1_440px]">
              <h1 className="font-display text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] sm:text-[40px]">
                A real story, told well, brings people closer.
              </h1>
              <p className="mt-5 max-w-[560px] font-display text-[20px] font-light">
                We create spaces for stories to emerge.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex min-h-[48px] items-center rounded-md bg-ember px-6 font-display text-[15px] font-semibold text-ink transition-opacity hover:opacity-90"
                >
                  Plan a session
                </a>
                <a
                  href="#projects"
                  className="inline-flex min-h-[48px] items-center rounded-md border-[1.5px] border-cream/60 px-6 font-display text-[15px] font-semibold text-cream transition-colors hover:border-cream"
                >
                  See featured projects
                </a>
              </div>
            </div>
            <div className="relative min-w-0 flex-[1_1_380px]">
              <div
                aria-hidden="true"
                className="absolute -bottom-10 -left-10 h-[170px] w-[170px] rounded-full bg-sun"
              />
              <img
                src="/images/workshop-feast-story-swap.jpg"
                alt="A circle of people swapping stories at a workshop"
                className="relative block aspect-[4/3] w-full rounded-xl object-cover"
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
          <OfferCards offers={offers} />
        </section>

        {/* Featured projects */}
        <section id="projects" className="bg-cream text-ink">
          <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 md:py-20">
            <h2 className="font-display text-[26px] font-semibold tracking-[-0.01em] md:text-[30px]">
              Featured projects
            </h2>
            <div className="mt-8 space-y-8">
              {projects.map((p) => (
                <article
                  key={p.name}
                  className="flex flex-wrap gap-8 overflow-hidden rounded-xl bg-white p-6 sm:p-8"
                >
                  <div className="min-w-0 flex-[1_1_280px]">
                    <img
                      src={p.img}
                      alt={`${p.name} workshop`}
                      className="block aspect-square w-full rounded-lg object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-[2_1_420px]">
                    <div className="flex items-center gap-3">
                      <img
                        src={p.logo}
                        alt=""
                        className="h-10 w-10 rounded-md border border-[#e6dccd] bg-white object-contain p-1"
                      />
                      <div>
                        <p className="font-display text-[15px] font-semibold">{p.name}</p>
                        <p className="text-[14px] text-[#5c554d]">{p.who}</p>
                      </div>
                    </div>
                    <h3 className="mt-4 font-display text-[24px] font-semibold leading-[1.25] tracking-[-0.01em]">
                      {p.goal}
                    </h3>
                    <figure className="mt-5 border-l-4 border-sun pl-5">
                      <blockquote className="font-display text-[17px] font-light leading-[1.55]">
                        “{p.quote}”
                      </blockquote>
                      <figcaption className="mt-2 text-[15px] font-semibold">{p.by}</figcaption>
                    </figure>
                    <details className="group mt-5">
                      <summary className="inline-flex cursor-pointer list-none items-center gap-2 rounded-md border border-[#d8cdbd] px-4 py-2 font-display text-[15px] font-semibold hover:bg-cream [&::-webkit-details-marker]:hidden">
                        See how it went
                        <span aria-hidden="true" className="transition-transform group-open:rotate-90">
                          →
                        </span>
                      </summary>
                      <div className="mt-5 grid gap-6 sm:grid-cols-2">
                        <div>
                          <h4 className="font-display text-[14px] font-semibold uppercase tracking-[0.08em] text-[#9c4320]">
                            Approach
                          </h4>
                          <ul className="mt-2 list-disc space-y-1 pl-5 text-[16px]">
                            {p.approach.map((a) => (
                              <li key={a}>{a}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-display text-[14px] font-semibold uppercase tracking-[0.08em] text-[#9c4320]">
                            Outcomes
                          </h4>
                          <ul className="mt-2 list-disc space-y-1 pl-5 text-[16px]">
                            {p.outcomes.map((o) => (
                              <li key={o}>{o}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </details>
                    <p className="mt-5 text-[14px] text-[#6f665b]">{p.format}</p>
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
