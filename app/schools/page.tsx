import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "For schools | Backstory",
  description:
    "Talks and workshops that help students find creative inspiration in their lives and learn the craft of storytelling.",
};

const sessions = [
  {
    title: "Stories That Matter",
    meta: "45-minute talk · Up to 200 students",
    text: "An introduction to the what, why and how of telling stories from our lives. I share relatable, personal stories and break them down to reveal a simple storytelling structure. Interactive elements help students start spotting stories in their own lives, and leave them inspired to shape and share stories that matter to them.",
    card: "bg-cream text-ink rounded-[28px_28px_28px_110px]",
    accent: "text-flame",
  },
  {
    title: "Find Your Stories",
    meta: "90-minute workshop · Up to 30 students",
    text: "Students are led through the process of discovering story ideas from their lives and shaping them into narratives that engage listeners. They work together to help each other find plot and scene details that transport the listener to the centre of the story. At the end of the workshop, each student has a story to tell.",
    card: "bg-flame text-ink rounded-[28px]",
    accent: "text-cream",
  },
  {
    title: "Develop Your Story",
    meta: "90-minute workshop · Up to 30 students",
    text: "For students to get thoughtful, actionable feedback on their stories from the perspective of listeners. Students come with a loose narrative or skeleton of a story from their life. Working in pairs and groups, they swap stories and learn to listen with intention, guided by me. The group's questions, comments and observations give each storyteller new insight into the strengths and flaws of their story. Students leave equipped to polish it into a cohesive narrative. It's also a wonderful exercise to build trust in a classroom.",
    card: "bg-sun text-ink rounded-[28px_110px_28px_28px]",
    accent: "text-ink",
  },
  {
    title: "Find Your Voice",
    meta: "90-minute workshop · Up to 30 students",
    text: "Explores the idea of an artist's voice and invites students to notice and develop their own. A moderated discussion on what voice means, then exercises that reveal their voice across different forms of expression: spoken, written, visual. It ends with reflections on their own voice and ways to keep exploring it in their existing projects. A chance to build creative confidence and instincts, especially important in the AI era.",
    card: "bg-panel text-cream border border-line rounded-[28px]",
    accent: "text-sun",
  },
];

const schools = [
  "Malvern College",
  "Canadian International School",
  "Po Leung Kuk Centenary College",
  "PHC Wing Kwong College",
  "Renaissance College",
  "HKU",
  "HKMU",
  "PressStart Academy",
];

const quotes = [
  {
    text: "Niharika's workshop with our students exceeded our expectations. She instantly grabbed their attention and engaged their interest. The activities were thoughtful and challenging yet accessible. The students were highly engaged throughout the workshop and each came away with interesting material to work with. We definitely plan to get her to come back!!",
    by: "Juliette, Teacher, Canadian International School",
  },
  {
    text: "Niharika, with her superb storytelling techniques, demonstrated live how tiny moments in life can develop into bewitching stories… Students enjoyed the activity a lot and applied what they learned to construct narratives of their own that were appealing to all participants.",
    by: "Sally, Teacher, Po Leung Kuk Centenary College",
  },
  {
    text: "Niharika is a captivating storyteller who brings her stories to life with energy and charm. Throughout the talk she gave, she successfully kept even the less active students engaged from start to finish using her humor and emotion.",
    by: "Sam, Teacher, PHC Wing Kwong College",
  },
];

export default function Schools() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        {/* Intro */}
        <section className="relative">
          <div
            aria-hidden="true"
            className="absolute -right-32 -top-32 h-[280px] w-[280px] rounded-full bg-sun"
          />
          <div className="relative mx-auto flex max-w-[1200px] flex-wrap items-center gap-12 px-4 pb-16 pt-12 sm:px-6 md:pb-20 md:pt-16">
            <div className="min-w-0 flex-[1_1_440px]">
              <p className="font-display text-[14px] font-semibold uppercase tracking-[0.12em] text-sun">
                For schools
              </p>
              <h1 className="mt-3 font-display text-[30px] font-semibold leading-[1.18] tracking-[-0.02em] sm:text-[38px]">
                Talks and workshops that help students find creative inspiration in their lives and
                learn the craft of storytelling.
              </h1>
              <p className="mt-5 font-display text-[15px] font-medium text-muted">
                Ages 13+ · In English
              </p>
              <a
                href="#contact"
                className="mt-7 inline-flex min-h-[48px] items-center rounded-full bg-sun px-6 font-display text-[15px] font-semibold text-ink transition-opacity hover:opacity-90"
              >
                Let&apos;s chat
              </a>
            </div>
            <div className="relative min-w-0 flex-[1_1_380px]">
              <div
                aria-hidden="true"
                className="absolute -bottom-10 -left-10 h-[170px] w-[170px] rounded-full bg-flame"
              />
              <img
                src="/images/program-schools.jpg"
                alt="Students at a storytelling workshop"
                className="relative block aspect-[4/3] w-full rounded-[120px_24px_24px_24px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Sessions */}
        <section className="mx-auto max-w-[1200px] px-4 pb-16 sm:px-6 md:pb-20">
          <h2 className="font-display text-[26px] font-semibold tracking-[-0.01em] md:text-[30px]">
            Ways to work together
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {sessions.map((s) => (
              <article key={s.title} className={`${s.card} p-7 sm:p-8`}>
                <h3 className="font-display text-[22px] font-semibold">{s.title}</h3>
                <p className={`mt-1 font-display text-[15px] font-semibold ${s.accent}`}>{s.meta}</p>
                <p className="mt-4">{s.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-5 rounded-[28px] border border-line p-7 sm:p-8">
            <h3 className="font-display text-[22px] font-semibold">Longer programmes</h3>
            <p className="mt-3 max-w-[820px]">
              Multi-session courses that end in a show, like the storytelling workshop series at Malvern
              College. I also teach storytelling and creative writing in ECA programmes with PressStart
              Academy.
            </p>
          </div>
        </section>

        {/* Student Story Slam */}
        <section className="relative overflow-hidden bg-flame text-ink">
          <div
            aria-hidden="true"
            className="absolute -left-24 -bottom-24 h-[260px] w-[260px] rounded-full bg-sun"
          />
          <div className="relative mx-auto flex max-w-[1200px] flex-wrap items-center gap-10 px-4 py-16 sm:px-6 md:py-20">
            <div className="min-w-0 flex-[2_1_440px]">
              <h2 className="font-display text-[26px] font-semibold tracking-[-0.01em] md:text-[30px]">
                Student Story Slam
              </h2>
              <p className="mt-3 max-w-[620px] text-[19px]">
                An annual inter-school storytelling competition I organise with Hong Kong Stories. In
                2026, 96 students from 30 schools took part, with the final round at the Fringe Club.
              </p>
              <a
                href="https://www.hongkongstories.com/student-story-slam"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-[48px] items-center rounded-full bg-ink px-6 font-display text-[15px] font-semibold text-cream transition-opacity hover:opacity-90"
              >
                Learn about the Student Story Slam
              </a>
            </div>
            <dl className="flex min-w-0 flex-[1_1_260px] gap-10 font-display">
              <div>
                <dt className="text-[15px] font-medium">Students</dt>
                <dd className="text-[56px] font-bold leading-none">96</dd>
              </div>
              <div>
                <dt className="text-[15px] font-medium">Schools</dt>
                <dd className="text-[56px] font-bold leading-none">30</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Schools and quotes */}
        <section className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 md:py-20">
          <h2 className="font-display text-[26px] font-semibold tracking-[-0.01em] md:text-[30px]">
            Schools I&apos;ve worked with
          </h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {schools.map((s) => (
              <li
                key={s}
                className="rounded-full border border-line bg-panel px-4 py-2 font-display text-[15px]"
              >
                {s}
              </li>
            ))}
          </ul>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {quotes.map((q, i) => (
              <figure key={q.by} className="rounded-[28px] border border-line bg-panel p-7">
                <blockquote className="font-display text-[17px] font-light leading-[1.55]">
                  “{q.text}”
                </blockquote>
                <figcaption className={`mt-4 text-[15px] font-semibold ${i % 2 === 0 ? "text-flame" : "text-sun"}`}>
                  {q.by}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <ContactSection intro="Every session can be shaped around your students, your curriculum and the time you have. If you have something else in mind, let's chat." />
      </main>
      <Footer />
    </>
  );
}
