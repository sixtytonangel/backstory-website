import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import EventCard from "@/components/EventCard";
import { events } from "@/lib/events";

export const metadata: Metadata = {
  title: "Events | Backstory",
  description:
    "Events from our community collaborations. Open to everyone.",
};

export default function Events() {
  const upcoming = events.filter((e) => !e.past);
  const past = events.filter((e) => e.past);

  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <section className="relative">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-[180px] w-[180px] rounded-full bg-ember md:h-[260px] md:w-[260px]"
          />
          <div className="relative mx-auto max-w-[1200px] px-4 pb-10 pt-12 sm:px-6 md:pt-16">
            <h1 className="font-display text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] sm:text-[40px]">
              Community events
            </h1>
            <p className="mt-4 max-w-[640px] text-[19px]">
              Events from our community collaborations. Open to everyone.
            </p>
          </div>
        </section>

        <section className="bg-cream text-ink">
          <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 md:py-16">
            {upcoming.length > 0 && (
              <>
                <h2 className="font-display text-[24px] font-semibold md:text-[28px]">Upcoming</h2>
                <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {upcoming.map((e) => (
                    <EventCard key={e.title} event={e} />
                  ))}
                </div>
              </>
            )}
            <h2 className="mt-14 font-display text-[24px] font-semibold md:text-[28px]">Past events</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {past.map((e) => (
                <EventCard key={e.title} event={e} />
              ))}
            </div>
          </div>
        </section>

        <ContactSection intro="Want to host an event with your community or space? We'd love to hear about it." />
      </main>
      <Footer />
    </>
  );
}
