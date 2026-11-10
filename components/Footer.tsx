import Link from "next/link";

const navigationItems = [
  { label: "Showcase", href: "/showcase" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#2d2418] px-6 pt-12 pb-6 text-[#f7f3ee]">
      <div className="mx-auto w-full max-w-[953px]">
        <div className="flex min-h-[160px] flex-col gap-10">
          <div className="flex w-full flex-col justify-between gap-10 sm:flex-row sm:items-start">
            <div className="flex max-w-[266px] flex-col items-start gap-2">
              <Link
                href="/"
                className="font-playfair text-[22.4px] font-semibold leading-[33.6px] text-[#f7f3ee]"
              >
                Backstory
              </Link>
              <p className="max-w-[266px] opacity-70 font-dm text-[14.4px] font-normal leading-[21.6px] text-[#f7f3ee]">
                Storytelling workshops for organisations
              </p>
            </div>

            <nav aria-label="Footer navigation" className="flex flex-col items-start gap-3">
              <p className="opacity-50 font-dm text-[12.8px] font-normal leading-[19.2px] tracking-[1.02px] text-[#f7f3ee] uppercase">
                Navigate
              </p>
              <div className="flex flex-col items-start gap-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="opacity-75 font-dm text-[15.2px] font-normal leading-[22.8px] text-[#f7f3ee] transition-opacity hover:opacity-100"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>

          <div className="flex w-full flex-col gap-3 border-t border-[#f7f3ee26] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="opacity-50 font-dm text-[13.1px] font-normal leading-[19.7px] text-[#f7f3ee]">
              © 2025 Backstory. All rights reserved.
            </p>
            <p className="opacity-50 font-dm text-[13.1px] font-normal leading-[19.7px] text-[#f7f3ee] sm:text-right">
              Based in Hong Kong, working with teams globally.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
