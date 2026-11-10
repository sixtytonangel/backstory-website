import type { Metadata } from "next";
import { Lora, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Lora({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
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
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="bg-[#f7f3ee] text-[#2d2418] antialiased">{children}</body>
    </html>
  );
}
