import type { Metadata } from "next";
import { Lexend, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-lexend",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-source",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Backstory: personal storytelling with Niharika Aggarwal",
  description:
    "Experience the joy of sharing personal stories and become a better storyteller along the way. Story circles, workshops and talks for organisations, schools and communities in Hong Kong.",
  openGraph: {
    title: "Backstory: personal storytelling with Niharika Aggarwal",
    description:
      "Story circles, workshops and talks for organisations, schools and communities.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lexend.variable} ${sourceSans.variable}`}>
      <body className="bg-[#121110] font-body text-[#f6efe6] antialiased">
        {children}
      </body>
    </html>
  );
}
