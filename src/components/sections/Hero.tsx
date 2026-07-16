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
        {/* Portrait background — art-directed framing per breakpoint.
          Height-based sizing keeps it full-height; fallback color blends any
          side gap on ultra-wide screens. */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[#a1a2a1] bg-[url('/hero/portrait.png')] bg-[length:auto_200%] bg-[position:50%_82%] bg-no-repeat lg:bg-[length:auto_265%] lg:bg-[position:50%_75%]"
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
                  y="170"
                  textLength="1097"
                  lengthAdjust="spacingAndGlyphs"
                  fontSize="200"
                  className="fill-white font-display font-extrabold"
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
