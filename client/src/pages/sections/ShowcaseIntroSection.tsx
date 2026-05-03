import { Card, CardContent } from "@/components/ui/card";

const showcaseIntroContent = {
  eyebrow: "WORK IN PRACTICE",
  title: "Showcase",
  description:
    "Each project below is a customised storytelling workshop — shaped around a specific team, a specific goal, and a specific moment. No two are the same.",
};

export const ShowcaseIntroSection = (): JSX.Element => {
  return (
    <section className="relative w-full self-stretch border-b border-[#2d241814] bg-[#f0ebe3] px-6 pb-px pt-20">
      <Card className="h-auto w-full border-0 bg-transparent shadow-none rounded-none">
        <CardContent className="flex min-h-[209.79px] w-full max-w-[953px] flex-col items-start p-0">
          <p className="[font-family:'DM_Sans',Helvetica] text-xs font-medium leading-[18px] tracking-[1.44px] text-[#b5471b]">
            {showcaseIntroContent.eyebrow}
          </p>
          <div className="mt-3 h-0.5 w-10 bg-[#b5471b]" />
          <h2 className="mt-6 [font-family:'Playfair_Display',Helvetica] text-[50.8px] font-semibold leading-[76.2px] tracking-[0] text-[#2d2418] max-sm:text-[40px] max-sm:leading-[1.15]">
            {showcaseIntroContent.title}
          </h2>
          <p className="mt-5 max-w-[604px] [font-family:'DM_Sans',Helvetica] text-base font-normal leading-[28.8px] tracking-[0] text-[#2d2418]/70">
            {showcaseIntroContent.description}
          </p>
        </CardContent>
      </Card>
    </section>
  );
};
