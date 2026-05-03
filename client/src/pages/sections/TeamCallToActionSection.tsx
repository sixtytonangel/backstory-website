import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const navigationItems = ["Showcase", "About", "Contact"];

export const TeamCallToActionSection = (): JSX.Element => {
  return (
    <>
      <p className="sr-only">
        The image shows a dark brown full-width footer section with the
        Backstory brand on the left, a small navigation column on the right, and
        a thin top border above the copyright row at the bottom.
      </p>
      <footer className="relative w-full bg-[#2d2418] px-6 pt-12 pb-6 text-[#f7f3ee]">
        <Card className="h-auto w-full border-0 bg-transparent shadow-none rounded-none">
          <CardContent className="p-0">
            <div className="flex min-h-[160px] flex-col gap-10">
              <div className="flex w-full flex-col justify-between gap-10 sm:flex-row sm:items-start">
                <section
                  aria-labelledby="team-call-to-action-brand"
                  className="flex max-w-[266.27px] flex-col items-start gap-2"
                >
                  <h2
                    id="team-call-to-action-brand"
                    className="[font-family:'Playfair_Display',Helvetica] text-[22.4px] font-semibold leading-[33.6px] tracking-[0] text-[#f7f3ee]"
                  >
                    Backstory
                  </h2>
                  <p className="max-w-[266.27px] opacity-70 [font-family:'DM_Sans',Helvetica] text-[14.4px] font-normal leading-[21.6px] tracking-[0] text-[#f7f3ee]">
                    Storytelling workshops for organisations
                  </p>
                </section>
                <nav
                  aria-label="Footer navigation"
                  className="flex w-full max-w-[70.77px] flex-col items-start gap-3"
                >
                  <p className="opacity-50 [font-family:'DM_Sans',Helvetica] text-[12.8px] font-normal leading-[19.2px] tracking-[1.02px] text-[#f7f3ee]">
                    NAVIGATE
                  </p>
                  <div className="flex flex-col items-start gap-2">
                    {navigationItems.map((item) => (
                      <Button
                        key={item}
                        variant="ghost"
                        className="h-auto justify-start p-0 opacity-75 text-left hover:bg-transparent hover:text-[#f7f3ee] focus-visible:ring-0 focus-visible:ring-offset-0"
                      >
                        <span className="[font-family:'DM_Sans',Helvetica] text-[15.2px] font-normal leading-[22.8px] tracking-[0] text-[#f7f3ee]">
                          {item}
                        </span>
                      </Button>
                    ))}
                  </div>
                </nav>
              </div>
              <div className="flex w-full flex-col gap-3 border-t border-[#f7f3ee26] pt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                <p className="opacity-50 [font-family:'DM_Sans',Helvetica] text-[13.1px] font-normal leading-[19.7px] tracking-[0] text-[#f7f3ee]">
                  © 2025 Backstory. All rights reserved.
                </p>
                <p className="opacity-50 text-left [font-family:'DM_Sans',Helvetica] text-[13.1px] font-normal leading-[19.7px] tracking-[0] text-[#f7f3ee] sm:text-right">
                  Based in Hong Kong, working with teams globally.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </footer>
    </>
  );
};
