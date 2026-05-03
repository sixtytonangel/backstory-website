import { Card, CardContent } from "@/components/ui/card";
import { FeaturedProjectSection } from "./sections/FeaturedProjectSection";
import { PrimaryNavSection } from "./sections/PrimaryNavSection";
import { ShowcaseIntroSection } from "./sections/ShowcaseIntroSection";
import { TeamCallToActionSection } from "./sections/TeamCallToActionSection";
import { TestimonialQuoteSection } from "./sections/TestimonialQuoteSection";
import { WorkshopCardsSection } from "./sections/WorkshopCardsSection";

const sections = [
  {
    id: "primary-nav",
    Component: PrimaryNavSection,
    wrapperClassName: "w-full",
  },
  {
    id: "showcase-intro",
    Component: ShowcaseIntroSection,
    wrapperClassName: "w-full",
  },
  {
    id: "workshop-cards",
    Component: WorkshopCardsSection,
    wrapperClassName: "w-full",
  },
  {
    id: "featured-project",
    Component: FeaturedProjectSection,
    wrapperClassName: "w-full",
  },
  {
    id: "testimonial-quote",
    Component: TestimonialQuoteSection,
    wrapperClassName: "w-full",
  },
  {
    id: "team-call-to-action",
    Component: TeamCallToActionSection,
    wrapperClassName: "w-full",
  },
];

export const BackstoryCopy = (): JSX.Element => {
  return (
    <main className="w-full bg-[#f7f3ee] text-foreground">
      <Card className="h-auto w-full rounded-none border-0 bg-transparent shadow-none">
        <CardContent className="flex w-full flex-col items-stretch gap-0 p-0">
          {sections.map(({ id, Component, wrapperClassName }) => (
            <section key={id} id={id} className={wrapperClassName}>
              <Component />
            </section>
          ))}
        </CardContent>
      </Card>
    </main>
  );
};
