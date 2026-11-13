"use client";

import { useEffect, useState } from "react";

export type OfferPart = { title: string; goodFor: string; text: string };

export type Offer = {
  title: string;
  length: string;
  goodFor: string;
  text?: string[];
  parts?: OfferPart[];
  card: string;
  accent: string;
};

export default function OfferCards({ offers }: { offers: Offer[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const active = open === null ? null : offers[open];

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {offers.map((o, i) => (
          <button
            key={o.title}
            type="button"
            onClick={() => setOpen(i)}
            className={`${o.card} group flex flex-col rounded-xl p-7 text-left transition-transform hover:-translate-y-0.5 sm:p-8`}
          >
            <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <span className="font-display text-[22px] font-semibold">{o.title}</span>
              <span className={`font-display text-[15px] font-semibold ${o.accent}`}>{o.length}</span>
            </span>
            <span className="mt-3 text-[16px]">
              <strong className="font-semibold">Good for: </strong>
              {o.goodFor}
            </span>
            <span className="mt-auto pt-5 font-display text-[15px] font-semibold underline underline-offset-4">
              Read more
            </span>
          </button>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-4"
          onClick={() => setOpen(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-[860px] overflow-y-auto rounded-xl bg-cream p-7 text-ink sm:p-9"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-[26px] font-semibold">{active.title}</h3>
                <p className="mt-1 font-display text-[15px] font-semibold text-[#9c4320]">{active.length}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(null)}
                aria-label="Close"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#d8cdbd] text-[22px] leading-none hover:bg-white"
              >
                ×
              </button>
            </div>

            {active.parts ? (
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {active.parts.map((p) => (
                  <div key={p.title} className="rounded-lg bg-white p-6">
                    <h4 className="font-display text-[19px] font-semibold">{p.title}</h4>
                    <p className="mt-2 text-[16px]">
                      <strong className="font-semibold">Good for: </strong>
                      {p.goodFor}
                    </p>
                    <p className="mt-3">{p.text}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-5 space-y-3">
                <p className="text-[16px]">
                  <strong className="font-semibold">Good for: </strong>
                  {active.goodFor}
                </p>
                {active.text?.map((t, i) => (
                  <p key={i}>{t}</p>
                ))}
              </div>
            )}

            <a
              href="#contact"
              onClick={() => setOpen(null)}
              className="mt-7 inline-flex min-h-[48px] items-center rounded-md bg-ember px-6 font-display text-[15px] font-semibold text-ink transition-opacity hover:opacity-90"
            >
              Find out more
            </a>
          </div>
        </div>
      )}
    </>
  );
}
