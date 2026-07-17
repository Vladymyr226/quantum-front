import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter-tight",
  display: "swap",
});

// The Figma display face — Aktiv Grotesk Ex (licensed, self-hosted). Used for
// the QUANTUM wordmark and every section/course heading. Has full Cyrillic.
const aktivGroteskEx = localFont({
  src: [
    { path: "../fonts/AktivGroteskEx_Bd.ttf", weight: "700", style: "normal" },
    { path: "../fonts/AktivGroteskEx_XBd.ttf", weight: "800", style: "normal" },
    { path: "../fonts/AktivGroteskEx_Blk.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-aktiv",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quantum — Навчальний центр афілейт маркетингу",
  description:
    "Курси медіабаєра, афілейт менеджера і SMM спеціаліста. Навчання онлайн з практикою і підтримкою.",
  openGraph: {
    title: "Quantum — Навчальний центр афілейт маркетингу",
    description:
      "Курси медіабаєра, афілейт менеджера і SMM спеціаліста. Навчання онлайн з практикою і підтримкою.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk"
      className={`${interTight.variable} ${aktivGroteskEx.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
