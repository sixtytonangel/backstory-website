import Link from "next/link";

const navItems = [
  { label: "Programs", href: "/#programs" },
  { label: "Events", href: "/events" },
  { label: "About", href: "/#about" },
];

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
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-cream/85 transition-colors hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
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
