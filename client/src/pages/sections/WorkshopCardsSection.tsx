import { Card, CardContent } from "@/components/ui/card";

const workshopCards = [
  {
    title: "Indiahikes",
    subtitle: "India's leading trekking organisation",
    description:
      "Explore and craft personal stories that illustrate why 'Trekking Transforms Life' — for trek leaders who carry that message every day.",
    highlighted: true,
    titleIcon: "/figmaAssets/text.svg",
    ctaIcon: "/figmaAssets/icon.svg",
    cardClassName: "bg-[#ede8e0] border-[#b5471b]",
    titleRowClassName: "pt-[44.2px]",
    ctaClassName: "text-[#b5471b]",
  },
  {
    title: "The MixedBag Company",
    subtitle:
      "Event management company — facilitating a flagship employee event for a top-tier corporate client",
    description:
      "Create a genuinely fun and connecting activity for employees across divisions to mingle meaningfully — not just network.",
    highlighted: false,
    titleIcon: null,
    ctaIcon: "/figmaAssets/icon.svg",
    cardClassName: "bg-[#f0ebe3] border-[#2d24181a]",
    titleRowClassName: "pt-[25px]",
    ctaClassName: "text-[#2d2418] opacity-50",
  },
  {
    title: "Vatavriksha",
    subtitle: "A new wellness studio",
    description:
      "Introduce a new wellness space to its community of practitioners and build real relationships between them from the start.",
    highlighted: false,
    titleIcon: null,
    ctaIcon: "/figmaAssets/icon.svg",
    cardClassName: "bg-[#f0ebe3] border-[#2d24181a]",
    titleRowClassName: "pt-[44.2px]",
    ctaClassName: "text-[#2d2418] opacity-50",
  },
];

export const WorkshopCardsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#f7f3ee] px-6 py-16">
      <div className="w-full">
        <header className="max-w-[953px]">
          <p className="[font-family:'DM_Sans',Helvetica] text-xs font-medium leading-[18px] tracking-[1.44px] text-[#b5471b]">
            PROJECTS
          </p>
          <h2 className="mt-3 [font-family:'Playfair_Display',Helvetica] text-[30.5px] font-semibold leading-[45.7px] text-[#2d2418] max-md:text-[26px] max-md:leading-[38px]">
            Three workshops, three very different teams
          </h2>
        </header>
        <div className="mt-8 grid w-full max-w-[953px] grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {workshopCards.map((card) => (
            <Card
              key={card.title}
              className={`rounded-sm border shadow-none ${card.cardClassName}`}
            >
              <CardContent className="flex h-full min-h-[283.73px] flex-col px-[25px] pb-6">
                <div
                  className={`flex items-start justify-between gap-4 ${card.titleRowClassName}`}
                >
                  <h3 className="[font-family:'Playfair_Display',Helvetica] text-[17.6px] font-semibold leading-[26.4px] text-[#2d2418]">
                    {card.title}
                  </h3>
                  {card.titleIcon ? (
                    <img
                      className="mt-1 h-4 w-4 shrink-0"
                      alt=""
                      src={card.titleIcon}
                    />
                  ) : null}
                </div>
                <p className="mt-2 [font-family:'DM_Sans',Helvetica] text-[12.8px] font-medium leading-[19.2px] text-[#b5471b]">
                  {card.subtitle}
                </p>
                <p className="mt-3 flex-1 opacity-70 [font-family:'DM_Sans',Helvetica] text-[13.6px] font-medium leading-[22.4px] text-[#2d2418]">
                  {card.description}
                </p>
                <button
                  type="button"
                  className={`mt-5 inline-flex w-fit items-center gap-1 [font-family:'DM_Sans',Helvetica] text-[12.8px] font-medium leading-[19.2px] ${card.ctaClassName}`}
                >
                  <span>View project</span>
                  <img
                    className="mt-[1px] h-3 w-3 shrink-0"
                    alt=""
                    src={card.ctaIcon}
                  />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
