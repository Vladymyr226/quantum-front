import type { Metadata } from "next";
import { Inter_Tight, Archivo, Unbounded } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter-tight",
  display: "swap",
});

// Stand-in for the Figma display face "Aktiv Grotesk Ex" (commercial).
// Swap for the licensed font later without touching component code.
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

// Cyrillic-capable display face for section headings (stand-in for the
// commercial "Aktiv Grotesk Ex" — wide, bold).
const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  variable: "--font-unbounded",
  weight: ["700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "QUANTUM — Навчальний центр афілейт маркетингу",
  description:
    "Курси головних професій афілейт маркетингу: медіабаєр, афілейт спеціаліст, SMM спеціаліст.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk"
      className={`${interTight.variable} ${archivo.variable} ${unbounded.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
