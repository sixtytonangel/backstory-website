import Link from "next/link";

const linkClass = "text-cream/85 transition-colors hover:text-cream";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-line/60 bg-ink/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-2 px-3 py-4 sm:gap-6 sm:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 font-display text-[17px] font-semibold text-cream sm:gap-3 sm:text-[22px]"
        >
          <span aria-hidden="true" className="hidden h-3.5 w-3.5 rounded-full bg-ember min-[380px]:block sm:h-5 sm:w-5" />
          Backstory
        </Link>
        <nav aria-label="Main">
          <ul className="flex items-center gap-x-2.5 whitespace-nowrap font-display text-[13px] sm:gap-x-6 sm:text-[15px]">
            <li className="relative">
              <details className="group">
                <summary
                  className={`flex cursor-pointer list-none items-center gap-1 ${linkClass} [&::-webkit-details-marker]:hidden`}
                >
                  Programs
                  <span aria-hidden="true" className="text-[9px] transition-transform group-open:rotate-180 sm:text-[11px]">
                    ▼
                  </span>
                </summary>
                <div className="absolute left-0 top-full z-50 mt-3 w-52 overflow-hidden rounded-lg border border-line bg-panel shadow-xl">
                  <Link href="/organisations" className="block px-4 py-3 text-cream/90 hover:bg-ink hover:text-cream">
                    For organisations
                  </Link>
                  <Link
                    href="/schools"
                    className="block border-t border-line px-4 py-3 text-cream/90 hover:bg-ink hover:text-cream"
                  >
                    For schools
                  </Link>
                </div>
              </details>
            </li>
            <li>
              <Link href="/events" className={linkClass}>
                Events
              </Link>
            </li>
            <li>
              <Link href="/#about" className={linkClass}>
                About
              </Link>
            </li>
            <li>
              <a href="#contact" className={linkClass}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
