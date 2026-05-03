import { Button } from "@/components/ui/button";

const sectionContent = {
  eyebrow: "YOUR TEAM",
  title: "Imagine this for your team",
  description:
    "Every workshop is built around your specific context. Let's talk about what that could look like for your organisation.",
  primaryAction: "Book a call",
  secondaryAction: "See workshop formats",
  secondaryIcon: "/figmaAssets/icon-2.svg",
};

export const TestimonialQuoteSection = (): JSX.Element => {
  return (
    <section className="relative w-full self-stretch bg-[#2d2418] px-6 py-24">
      <div className="mx-auto flex w-full max-w-[953px] flex-col items-center text-center">
        <p className="[font-family:'DM_Sans',Helvetica] text-xs font-medium leading-[18px] tracking-[1.44px] text-[#f7f3ee8c]">
          {sectionContent.eyebrow}
        </p>
        <h2 className="mt-3 [font-family:'Playfair_Display',Helvetica] text-[40.6px] font-semibold leading-[61px] tracking-[0] text-[#f7f3ee] max-sm:text-[32px] max-sm:leading-[44px]">
          {sectionContent.title}
        </h2>
        <p className="mt-4 max-w-[483px] [font-family:'DM_Sans',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#f7f3ee] opacity-65">
          {sectionContent.description}
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button
            type="button"
            className="h-auto rounded-sm bg-[#b5471b] px-8 py-[13px] [font-family:'DM_Sans',Helvetica] text-[15.5px] font-medium leading-[23.3px] tracking-[0] text-[#f7f3ee] hover:bg-[#a34018]"
          >
            {sectionContent.primaryAction}
          </Button>
          <button
            type="button"
            className="flex h-auto items-center gap-[10px] border-b border-[#f7f3ee4c] pb-[3px] [font-family:'DM_Sans',Helvetica] text-[14.4px] font-normal leading-[21.6px] tracking-[0] text-[#f7f3ee] opacity-60 transition-opacity hover:opacity-100"
          >
            <span>{sectionContent.secondaryAction}</span>
            <img
              className="h-[13px] w-[13px]"
              alt="Icon"
              src={sectionContent.secondaryIcon}
            />
          </button>
        </div>
      </div>
    </section>
  );
};
