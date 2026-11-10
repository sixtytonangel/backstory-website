import type { Metadata } from "next";
import { Fraunces, Source_Sans_3, Caveat } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Backstory — Bring your stories to share",
  description:
    "Backstory hosts story circles, workshops, and talks centred on personal stories.",
  openGraph: {
    title: "Backstory — Bring your stories to share",
    description:
      "Story circles, workshops, and talks for people, organisations, and schools.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${sourceSans.variable} ${caveat.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
