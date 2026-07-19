import Image from "next/image";

import { Marquee } from "./Marquee";

/** Course category labels shown in the bottom row of the hero. */
const CATEGORIES = ["Медіабаєр", "Афілейт спеціаліст", "SMM"] as const;

/**
 * Top hero section — the QUANTUM landing intro.
 * Responsive: mobile layout at the base breakpoint, desktop at `lg`.
 * Matches Figma nodes PC 30:3 and MOB 30:525.
 */
export function Hero() {
  return (
    // Hero + ticker together fill exactly one screen (marquee visible without
    // scrolling): the hero section grows, the ticker sits at the bottom.
    <div className="flex min-h-[100svh] flex-col">
      <section className="relative flex w-full flex-1 flex-col overflow-hidden">
        {/* Layer 0 — flat fill for the sides the backdrop photo can't reach. */}
        <div aria-hidden className="absolute inset-0 -z-[40] bg-[#a1a2a1]" />

        {/* Layer 1 — backdrop photo (grey + the man). Same pixel canvas as the
          front portrait below, sized/positioned identically so the two men line
          up pixel-for-pixel. The Q vector then sits between them. */}
        <div
          aria-hidden
          className="absolute inset-0 -z-[30] bg-[url('/hero/backdrop-mobile.png')] bg-[length:auto_100%] bg-[position:50%_50%] bg-no-repeat lg:bg-[url('/hero/backdrop.png')]"
        />

        {/* Layer 2 — brand Q vector (#F2F2F2), placed *behind* the front portrait
          so it only shows through the grey negative space around the figure.
          Desktop keeps the course-hero placement (top-right); mobile uses the
          dedicated cropped Q pressed to the right, behind the man's back. */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 right-0 -z-[20] hidden h-full w-full max-w-[1200px] opacity-50 lg:block"
          style={{
            backgroundColor: "#f2f2f2",
            maskImage: "url(/vectorDesktopHero.svg)",
            WebkitMaskImage: "url(/vectorDesktopHero.svg)",
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskPosition: "right top",
            WebkitMaskPosition: "right top",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 -z-[20] w-full opacity-[0.18] lg:hidden"
          style={{
            backgroundColor: "#f2f2f2",
            maskImage: "url(/vectorHeroMobile-v3.svg)",
            WebkitMaskImage: "url(/vectorHeroMobile-v3.svg)",
            maskSize: "auto 54%",
            WebkitMaskSize: "auto 54%",
            maskPosition: "right 63%",
            WebkitMaskPosition: "right 63%",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        />

        {/* Layer 3 — front portrait (transparent PNG). Same canvas/sizing as the
          backdrop, so it re-covers the man and pushes the Q behind him. */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[url('/hero/portrait-mobile.png')] bg-[length:auto_100%] bg-[position:50%_50%] bg-no-repeat lg:bg-[url('/hero/portrait-v2.png')]"
        />

        {/* Content column */}
        <div className="relative flex w-full flex-1 flex-col">
          {/* Top bar: logo + КУРСИ */}
          <header className="flex w-full items-center justify-between p-5 lg:px-[70px] lg:pt-[70px]">
            <Image
              src="/hero/logo.svg"
              alt="QUANTUM"
              width={207}
              height={41}
              priority
              className="h-[26px] w-auto shrink-0 lg:h-[41px]"
            />
            <a
              href="#courses"
              className="inline-flex h-[43px] w-[124px] shrink-0 items-center justify-center rounded-[6px] bg-surface text-[14px] font-normal text-ink transition-opacity hover:opacity-90 lg:h-[70px] lg:w-[202px] lg:rounded-[10px] lg:text-[22px]"
            >
              КУРСИ
            </a>
          </header>

          <div className="flex-1" />

          {/* Headline block, anchored to the bottom.
            Subtitle and QUANTUM share the same left start (as in the design). */}
          <div className="min-w-0 px-5 lg:px-[70px]">
            <div className="flex items-start gap-[28px] lg:gap-[22px]">
              <span className="mt-1.5 block size-[15px] shrink-0 rounded-[4px] bg-foreground lg:mt-2 lg:size-[17px]" />
              <p className="text-[24px] leading-[1.1] font-bold tracking-[-0.02em] lg:text-[32px]">
                Навчальний центр
                <br />
                афілейт маркетингу
              </p>
            </div>

            {/* QUANTUM wordmark as SVG: textLength makes it fill the container
              width exactly, identically on mobile and desktop. Explicit
              width/height attrs set the intrinsic aspect so w-full/h-auto scale
              it by width (not height). */}
            <h1
              aria-label="QUANTUM"
              className="mt-[28px] w-full min-w-0 overflow-hidden"
            >
              <svg
                viewBox="0 27 1097 166"
                className="block aspect-[1097/166] w-full mix-blend-difference"
                aria-hidden="true"
              >
                <text
                  x="0"
                  y="180"
                  textLength="1097"
                  lengthAdjust="spacingAndGlyphs"
                  fontSize="200"
                  className="fill-white font-display font-bold tracking-[-0.1em]"
                >
                  QUANTUM
                </text>
              </svg>
            </h1>
          </div>

          {/* Bottom category labels */}
          <div className="mt-[13vh] flex w-full items-center justify-between p-5 text-[11px] text-muted lg:mt-6 lg:px-[70px] lg:pb-6 lg:text-[12px]">
            {CATEGORIES.map((label, i) => (
              <span
                key={label}
                className={`tracking-[-0.02em] ${i !== 1 ? "lg:text-foreground" : ""}`}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Ticker at the bottom of the first screen (part of the hero block). */}
      <Marquee />
    </div>
  );
}
