"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const prompts = [
  "You lost something — a race, a job, a ring.",
  "You took a baby step.",
  "You took a leap of faith.",
  "You changed your mind.",
  "You almost said something, but didn’t.",
  "A stranger changed your day.",
  "You found yourself somewhere unexpected.",
  "You were completely wrong.",
];

const tabs = {
  Connect: { headline: "Stories make strangers feel less strange.", body: "When someone shares a real experience, we stop relating through roles and start relating through humanity. A story circle creates the conditions for listening without fixing, judging, or interrupting." },
  Reflect: { headline: "Your life already contains the material.", body: "You do not need a dramatic story to have a meaningful one. Through prompts, reflection, and gentle shaping, you begin to notice the moments that changed how you see yourself and the world." },
  Entertain: { headline: "True stories can be wildly entertaining.", body: "Personal stories are not only serious or sentimental. They can be absurd, surprising, tender, awkward, and funny. Backstory celebrates the full range of what it means to be human." },
};

const events = [
  { title: "Storigami", date: "10 Oct", type: "Workshop", image: "/images/workshop-feast-story-swap.jpg", cta: "Reserve a chair" },
  { title: "Offbeat Sparks", date: "14 Nov", type: "Talk", image: "/images/workshop-pune-banter.jpg", cta: "Reserve a chair" },
  { title: "The Story Swap", date: "TBC", type: "Story circle", image: "/images/workshop-udaipur.jpeg", cta: "Join the waitlist" },
];

const testimonials = [
  ["I’ve worked with these people for three years. I had no idea.", "Participant name · Workshop participant"],
  ["I thought I had nothing interesting to say. Then I remembered something I’d buried.", "Participant name · Story circle attendee"],
  ["It felt less like training and more like being seen.", "Participant name · Organisation workshop"],
  ["The room felt safe enough to be honest, and playful enough to enjoy it.", "Participant name · School programme"],
];

function ScrollRow({ children, label }: { children: React.ReactNode; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (direction: number) => ref.current?.scrollBy({ left: direction * 320, behavior: "smooth" });
  return <div className="scroll-shell"><div className="scroll-controls" aria-label={`${label} controls`}><button type="button" onClick={() => move(-1)} aria-label={`Previous ${label}`}>←</button><button type="button" onClick={() => move(1)} aria-label={`Next ${label}`}>→</button></div><div ref={ref} className="scroll-row">{children}</div></div>;
}

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<keyof typeof tabs>("Connect");
  return <main>
    <Navbar />
    <section className="hero section-pad"><div className="hero-grid"><div className="hero-copy"><p className="eyebrow handwritten">Pull up a chair.</p><h1>Bring your stories<br /><em>to share.</em></h1><p className="hero-lede">We host story circles, workshops, and talks centred on personal stories.</p><div className="button-row"><a className="button button-red" href="#events">See what’s on</a><a className="button button-outline" href="#host">Host your own <span>↗</span></a></div></div><div className="hero-collage"><div className="hero-photo"><Image src="/images/cards-hero.jpg" alt="People gathering around a table for a storytelling activity" fill priority sizes="(max-width: 768px) 85vw, 420px" /></div><div className="prompt-card prompt-one">What did you<br />almost forget?</div><div className="prompt-card prompt-two">Tell us about<br />a turning point.</div><span className="scribble">stories<br />live here ↗</span></div></div><div className="thread-line" /></section>

    <section className="prompt-section section-pad"><div className="section-intro"><p className="eyebrow">About that time when…</p><h2>Stories about <span className="accent-underline">everything.</span></h2><p>Small moments. Big feelings. The things you didn’t think were stories until someone asked.</p></div><ScrollRow label="story prompts">{prompts.map((prompt, index) => <article className={`prompt-tile tile-${index % 4}`} key={prompt}><span className="tile-number">0{index + 1}</span><p>{prompt}</p></article>)}<a href="#host" className="prompt-tile final-tile"><span className="tile-number">↗</span><p>We create thematic prompts based on the event.</p></a></ScrollRow></section>

    <section className="why-section section-pad"><div className="why-heading"><p className="eyebrow">Why stories?</p><h2>Find the stories hiding in your life experiences.</h2><p>And listen for them in the people around you.</p></div><div className="tab-wrap"><div className="tabs" role="tablist" aria-label="Why stories matter">{(Object.keys(tabs) as Array<keyof typeof tabs>).map((tab) => <button key={tab} type="button" role="tab" aria-selected={activeTab === tab} className={activeTab === tab ? "active" : ""} onClick={() => setActiveTab(tab)}><span>to</span> {tab}</button>)}</div><div className="tab-panel" role="tabpanel"><p className="eyebrow">{activeTab}</p><h3>{tabs[activeTab].headline}</h3><p>{tabs[activeTab].body}</p></div></div></section>

    <section id="events" className="events-section section-pad"><div className="section-header"><div><p className="eyebrow">Make a date with a story</p><h2>What’s on</h2><p>Upcoming and recent gatherings, open to everyone.</p></div><a className="text-link" href="#contact">See all events →</a></div><ScrollRow label="events">{events.map((event) => <article className="event-card" key={event.title}><div className="event-image"><Image src={event.image} alt={`${event.title} storytelling gathering`} fill sizes="(max-width: 768px) 78vw, 30vw" /></div><div className="event-body"><div><span className="event-date">{event.date}</span><span className="event-type">{event.type}</span></div><h3>{event.title}</h3><a href="#contact" className="text-link">{event.cta} →</a></div></article>)}</ScrollRow></section>

    <section className="voices-section section-pad"><div className="section-intro"><p className="eyebrow">A few words from the room</p><h2>What participants say</h2></div><div className="voices-grid">{testimonials.map(([quote, attribution], index) => <figure className={index === 0 ? "quote-card featured-quote" : "quote-card"} key={quote}><blockquote>“{quote}”</blockquote><figcaption><cite>{attribution}</cite><small>Placeholder attribution</small></figcaption></figure>)}</div></section>

    <section id="host" className="host-section section-pad"><div className="host-heading"><p className="eyebrow">Bring Backstory to you</p><h2>Got a room full<br /><em>of stories?</em></h2><p>Choose your starting point. We’ll shape the rest together.</p></div><div className="host-list"><article><span>01</span><div><h3>For organisations</h3><p>Teams, leaders, and communities who want more than small talk.</p></div><a href="#contact">Explore ↗</a></article><article><span>02</span><div><h3>For schools</h3><p>Students, educators, and school communities finding voice and connection.</p></div><a href="#contact">Explore ↗</a></article><article><span>03</span><div><h3>For individuals</h3><p>One-on-one sessions to work on a story for talks, memoirs, interviews or fun.</p></div><a href="#contact">Explore ↗</a></article></div></section>

    <section id="about" className="about-section section-pad"><div className="about-image"><Image src="/images/niharika-profile-hks2.JPG" alt="Niharika, Backstory facilitator and storyteller" fill sizes="(max-width: 768px) 80vw, 360px" /></div><div className="about-copy"><p className="eyebrow handwritten">A note from the host</p><h2>Hi, I’m Niharika.</h2><p className="about-lede">I’m a facilitator and storyteller who believes everyone has a story worth hearing—not because it is dramatic or polished, but because it is true.</p><ul><li>I design and facilitate story circles, workshops, and talks</li><li>I create spaces for people to listen closely and speak honestly</li><li>I work with organisations, schools, and communities</li><li>I believe a good question can change a room</li></ul><a href="#contact" className="text-link">More about me →</a></div></section>

    <section id="contact" className="contact-section section-pad"><div className="contact-copy"><p className="eyebrow">Let’s talk</p><h2>Got a room full of stories?</h2><p>Tell me a little about your people, and we’ll design something that fits.</p><span className="contact-note handwritten">No big brief required.</span></div><form className="contact-form" onSubmit={(e) => e.preventDefault()}><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@example.com" /></label><label>Interest<select name="interest" defaultValue=""><option value="" disabled>Select one</option><option>Story circle</option><option>Workshop</option><option>Talk</option><option>Something else</option></select></label><label>Message<textarea required name="message" rows={4} placeholder="Tell me a little about the room…" /></label><button className="button button-red" type="submit">Send <span>↗</span></button></form></section>
    <Footer />
  </main>;
}
