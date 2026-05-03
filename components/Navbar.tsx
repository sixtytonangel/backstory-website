"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Workshops", href: "/" },
  { label: "Showcase", href: "/showcase" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If clicking Workshops while on landing page, scroll to top
    if (href === "/" && pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    
    // If clicking a hash link while on landing page, smooth scroll
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#2d24181a] bg-[#f7f3ee]">
      <div className="flex min-h-[70px] w-full items-center justify-between gap-6 px-6 py-4">
        <Link
          href="/"
          onClick={handleLogoClick}
          className="font-playfair text-[21.6px] font-semibold leading-[32.4px] tracking-[-0.22px] text-[#2d2418]"
        >
          Backstory
        </Link>

        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href.split("#")[0]) &&
                    item.href.split("#")[0] !== "/";
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`font-dm text-[15.2px] leading-[22.8px] text-[#2d2418] transition-opacity hover:opacity-100 focus:opacity-100 ${
                      isActive ? "opacity-100 font-medium" : "opacity-70 font-normal"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <a
                href="/#contact"
                className="inline-flex h-auto items-center rounded-sm bg-[#2d2418] px-5 py-[7px] font-dm text-[14.4px] font-medium leading-[21.6px] text-[#f7f3ee] transition-opacity hover:opacity-90"
              >
                Book a call
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile menu */}
        <div className="flex items-center gap-4 md:hidden">
          <a
            href="/#contact"
            className="inline-flex h-auto items-center rounded-sm bg-[#2d2418] px-4 py-[6px] font-dm text-[13px] font-medium leading-[20px] text-[#f7f3ee]"
          >
            Book a call
          </a>
        </div>
      </div>
    </header>
  );
}
