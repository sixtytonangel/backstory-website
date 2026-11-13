import type { EventItem } from "@/lib/events";

export default function EventCard({ event }: { event: EventItem }) {
  const e = event;
  return (
    <article
      className={`relative flex flex-col overflow-hidden rounded-xl transition-shadow hover:shadow-lg ${
        e.past ? "border border-line bg-panel/70 text-muted" : "border border-line bg-panel text-cream"
      }`}
    >
      <div className="relative">
        {e.img ? (
          <img
            src={e.img}
            alt={e.alt ?? ""}
            className={`block aspect-[3/2] w-full object-cover ${e.imgPosition ?? ""} ${e.past ? "grayscale-[70%]" : ""}`}
          />
        ) : (
          <div
            aria-hidden="true"
            className="relative aspect-[3/2] w-full overflow-hidden bg-[#2b2825]"
          >
            <span className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-ember/70" />
            <span className="absolute -left-6 -top-6 h-20 w-20 rounded-full bg-sun/70" />
          </div>
        )}
        <span
          className={`absolute left-4 top-4 rounded-md px-3 py-1.5 font-display text-[14px] font-semibold ${
            e.past ? "bg-ink/85 text-muted" : "bg-sun text-ink"
          }`}
        >
          {e.date}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-1 px-6 pb-6 pt-5">
        <h3 className="font-display text-[19px] font-medium leading-[1.3]">{e.title}</h3>
        {e.subtitle && <p className="text-[16px] italic">{e.subtitle}</p>}
        <p className="text-[16px]">{e.meta}</p>
        <div className="mt-auto pt-4">
          <a
            href={e.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex min-h-[42px] items-center rounded-md px-5 font-display text-[15px] font-semibold after:absolute after:inset-0 after:content-[''] ${
              e.past
                ? "border border-line text-muted hover:bg-ink hover:text-cream"
                : "bg-sun text-ink hover:opacity-90"
            }`}
          >
            {e.past ? "View event" : "Sign up"}
            <span className="sr-only">: {e.title}</span>
          </a>
        </div>
      </div>
    </article>
  );
}
