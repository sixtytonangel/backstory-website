import { Button } from "@/components/ui/button";

const navItems = ["Workshops", "Showcase", "About", "Contact"];

export const PrimaryNavSection = (): JSX.Element => {
  return (
    <header className="relative w-full border-b border-[#2d24181a] bg-[#f7f3ee]">
      <div className="flex min-h-[70px] w-full items-center justify-between gap-6 px-6 py-4">
        <a
          href="#"
          className="[font-family:'Playfair_Display',Helvetica] text-[21.6px] font-semibold leading-[32.4px] tracking-[-0.22px] text-[#2d2418]"
        >
          Backstory
        </a>
        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="[font-family:'DM_Sans',Helvetica] text-[15.2px] font-normal leading-[22.8px] text-[#2d2418] opacity-80 transition-opacity hover:opacity-100 focus:opacity-100"
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <Button
                type="button"
                className="h-auto rounded-sm bg-[#2d2418] px-5 py-[7px] [font-family:'DM_Sans',Helvetica] text-[14.4px] font-medium leading-[21.6px] text-[#f7f3ee] hover:bg-[#2d2418]/95"
              >
                Book a call
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
