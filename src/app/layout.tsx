import type { Metadata } from "next";
import { Inter_Tight, Archivo, Wix_Madefor_Display } from "next/font/google";
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

// Cyrillic-capable display face for section headings (neutral, Helvetica-like
// stand-in for the commercial "Aktiv Grotesk Ex").
const wixMadefor = Wix_Madefor_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-wix-madefor",
  weight: ["700", "800"],
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
      className={`${interTight.variable} ${archivo.variable} ${wixMadefor.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
