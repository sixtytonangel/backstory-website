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
  title: "Backstory — Storytelling Workshops for Organisations",
  description:
    "Backstory designs and delivers bespoke storytelling workshops for organisations. We help your people find, shape, and share stories that matter.",
  openGraph: {
    title: "Backstory — Storytelling Workshops for Organisations",
    description:
      "Backstory designs and delivers bespoke storytelling workshops for organisations.",
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
