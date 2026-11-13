import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-line/60 bg-ink/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-x-6 gap-y-3 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-3 font-display text-[22px] font-semibold text-cream"
        >
          <span aria-hidden="true" className="block h-5 w-5 rounded-full bg-ember" />
          Backstory
        </Link>
        <nav aria-label="Main">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 font-display text-[15px]">
            <li className="relative">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center gap-1.5 text-cream/85 transition-colors hover:text-cream [&::-webkit-details-marker]:hidden">
                  Programs
                  <span aria-hidden="true" className="text-[11px] transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <div className="absolute left-0 top-full z-50 mt-3 w-56 overflow-hidden rounded-lg border border-line bg-panel shadow-xl">
                  <Link
                    href="/organisations"
                    className="block px-4 py-3 text-cream/90 hover:bg-ink hover:text-cream"
                  >
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
              <Link href="/events" className="text-cream/85 transition-colors hover:text-cream">
                Events
              </Link>
            </li>
            <li>
              <Link href="/#about" className="text-cream/85 transition-colors hover:text-cream">
                About
              </Link>
            </li>
            <li>
              <a
                href="#contact"
                className="inline-flex min-h-[40px] items-center rounded-md bg-sun px-4 font-medium text-ink transition-opacity hover:opacity-90"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
