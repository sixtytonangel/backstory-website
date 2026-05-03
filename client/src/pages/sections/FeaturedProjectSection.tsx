import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const metaItems = ["Online", "90 min", "12 participants"];

const imageCards = [
  {
    label: "Context",
    imageClass:
      "[background:url(..//figmaAssets/imagewithfallback.png)_50%_50%_/_cover]",
    bgClass: "bg-[#ddd6cb]",
  },
  {
    label: "Workshop in progress",
    imageClass:
      "[background:url(..//figmaAssets/imagewithfallback-1.png)_50%_50%_/_cover]",
    bgClass: "bg-[#cec5b5]",
  },
];

const detailColumns = [
  {
    title: "GOAL",
    content:
      "Find and shape stories that illustrate Indiahikes' core motto 'Trekking Transforms Life'. Trek leaders are the faces of this mission — the workshop helped them find and tell personal stories that make that idea real for the trekkers they lead.",
  },
  {
    title: "FORMAT",
    content:
      "A 90-minute online 'Listening for Stories' workshop for 12 selected trek leaders. Delivered virtually with small group exercises, reflective prompts, and guided story-sharing.",
  },
];

const approachItems = [
  "Mapped touchpoints across the trek journey to identify where stories matter most",
  "Selected high-impact techniques and exercises aligned to those key moments",
  "Prompted leaders to surface stories from their own trekking experiences, not just scripted narratives",
];

const outcomes = [
  "Trek leaders crafted personal stories to use in their introductions with trekkers",
  "Each leader left with a bank of story prompts for richer conversations on the trail",
  "A story prompt from the session was turned into an Instagram post that generated many meaningful responses",
];

export const FeaturedProjectSection = (): JSX.Element => {
  return (
    <section className="relative w-full self-stretch border-t border-[#2d241814] bg-[#f0ebe3] px-3 py-12 sm:px-6">
      <div className="mx-auto flex w-full max-w-[953px] flex-col">
        <header className="mb-6 flex flex-col gap-3">
          <p className="[font-family:'DM_Sans',Helvetica] text-xs font-medium leading-[18px] tracking-[1.44px] text-[#b5471b]">
            FEATURED PROJECT
          </p>
          <div className="h-0.5 w-10 bg-[#b5471b]" />
        </header>
        <Card className="overflow-hidden rounded-sm border-0 border-t-[3px] border-[#b5471b] bg-[#f7f3ee] shadow-none">
          <CardContent className="p-0">
            <article className="flex flex-col">
              <header className="px-6 pb-8 pt-10 sm:px-12">
                <p className="[font-family:'DM_Sans',Helvetica] text-xs font-medium leading-[18px] tracking-[1.44px] text-[#b5471b]">
                  INDIA&apos;S LEADING TREKKING ORGANISATION
                </p>
                <h2 className="mt-2 [font-family:'Playfair_Display',Helvetica] text-[30.5px] font-semibold leading-[45.7px] text-[#2d2418]">
                  Indiahikes
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {metaItems.map((item) => (
                    <Badge
                      key={item}
                      variant="secondary"
                      className="h-auto rounded-sm border-0 bg-[#ede8e1] px-3 py-[3px] [font-family:'DM_Sans',Helvetica] text-[12.5px] font-normal leading-[18.7px] text-[#2d2418] opacity-85 hover:bg-[#ede8e1]"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
                <p className="mt-5 max-w-[638px] [font-family:'DM_Sans',Helvetica] text-[15.5px] font-normal leading-[27.2px] text-[#2d2418] opacity-75">
                  Explore and craft personal stories that illustrate why
                  &apos;Trekking Transforms Life&apos; — for trek leaders who
                  carry that message every day.
                </p>
              </header>
              <section className="grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-1">
                {imageCards.map((item) => (
                  <figure key={item.label} className="flex flex-col">
                    <div className={`h-[297px] w-full ${item.bgClass}`}>
                      <div className={`h-full w-full ${item.imageClass}`} />
                    </div>
                    <figcaption className="px-4 py-[5px] [font-family:'DM_Sans',Helvetica] text-xs font-normal leading-[18px] text-[#2d2418] opacity-40">
                      {item.label}
                    </figcaption>
                  </figure>
                ))}
              </section>
              <section className="grid grid-cols-1 gap-8 border-t border-[#2d241814] px-6 py-10 sm:px-12 md:grid-cols-2">
                {detailColumns.map((item) => (
                  <div key={item.title} className="flex flex-col gap-3">
                    <h3 className="[font-family:'DM_Sans',Helvetica] text-[11.5px] font-medium leading-[17.3px] tracking-[1.15px] text-[#b5471b]">
                      {item.title}
                    </h3>
                    <p className="[font-family:'DM_Sans',Helvetica] text-[14.9px] font-normal leading-[26px] text-[#2d2418] opacity-80">
                      {item.content}
                    </p>
                  </div>
                ))}
              </section>
              <section className="border-t border-[#2d241814] bg-[#f0ebe3] px-6 py-[33px] sm:px-12">
                <h3 className="[font-family:'DM_Sans',Helvetica] text-[11.5px] font-medium leading-[17.3px] tracking-[1.15px] text-[#b5471b]">
                  APPROACH
                </h3>
                <h4 className="mt-3 [font-family:'Playfair_Display',Helvetica] text-[17.6px] font-semibold leading-[26.4px] text-[#2d2418]">
                  Customisation
                </h4>
                <ul className="mt-4 flex flex-col gap-2">
                  {approachItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-[14.2px] opacity-[0.78]"
                    >
                      <span className="mt-[10px] h-[5px] w-[5px] rounded-[2.5px] bg-[#b5471b] opacity-70" />
                      <span className="[font-family:'DM_Sans',Helvetica] text-[14.7px] font-normal leading-[25px] text-[#2d2418]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
              <section className="border-t border-[#2d241814] px-6 py-[33px] sm:px-12">
                <h3 className="[font-family:'DM_Sans',Helvetica] text-[11.5px] font-medium leading-[17.3px] tracking-[1.15px] text-[#b5471b]">
                  OUTCOMES
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {outcomes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="[font-family:'DM_Sans',Helvetica] text-[14.4px] font-semibold leading-[24.5px] text-[#b5471b]">
                        →
                      </span>
                      <span className="[font-family:'DM_Sans',Helvetica] text-[14.9px] font-normal leading-[25.3px] text-[#2d2418]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
              <section className="border-t border-[#2d24181f] bg-[#2d2418] px-6 py-[41px] sm:px-12">
                <h3 className="[font-family:'DM_Sans',Helvetica] text-[11.5px] font-medium leading-[17.3px] tracking-[1.15px] text-[#f7f3ee73]">
                  IN THEIR WORDS
                </h3>
                <blockquote className="mt-5 border-l-[3px] border-[#b5471b] pl-[27px]">
                  <p className="[font-family:'Playfair_Display',Helvetica] text-xl font-normal italic leading-[34px] text-[#f7f3ee]">
                    &quot;The session opened up something we didn&apos;t know we
                    were missing. Our leaders came out with stories they were
                    genuinely proud to share — and it showed on the next
                    trek.&quot;
                  </p>
                  <footer className="mt-5">
                    <cite className="not-italic">
                      <span className="block [font-family:'Playfair_Display',Helvetica] text-[15.2px] font-semibold leading-[22.8px] text-[#f7f3ee]">
                        Rajan
                      </span>
                      <span className="[font-family:'DM_Sans',Helvetica] text-[13.3px] font-normal leading-[19.9px] text-[#f7f3ee8c]">
                        Experience Leader, Indiahikes
                      </span>
                    </cite>
                  </footer>
                </blockquote>
              </section>
            </article>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
