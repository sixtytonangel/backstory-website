import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-ink">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-4 py-10 text-[15px] text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          <Link href="/" className="font-display font-semibold text-cream">
            Backstory
          </Link>{" "}
          · Niharika Aggarwal · Hong Kong
        </p>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/organisations" className="hover:text-cream">
            For organisations
          </Link>
          <Link href="/schools" className="hover:text-cream">
            For schools
          </Link>
          <Link href="/events" className="hover:text-cream">
            Events
          </Link>
          <a href="mailto:niharika@backstory.pro" className="hover:text-cream">
            niharika@backstory.pro
          </a>
        </nav>
      </div>
    </footer>
  );
}
