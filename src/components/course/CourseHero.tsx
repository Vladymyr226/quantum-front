import Image from "next/image";
import Link from "next/link";

import type { CourseHeroData } from "@/content/courses";
import { ArrowButton } from "@/components/ui/ArrowButton";

const DEFAULT_BACKGROUND =
  "radial-gradient(115% 95% at 80% -12%, #2f2f2f 0%, #262626 46%, #202020 100%)";

export function CourseHero({
  title,
  subtitle,
  tags,
  image,
  imageAlt,
  ctaLabel,
  ctaHref,
  background,
  vectorColor = "#F2F2F2",
}: CourseHeroData) {
  const cta = (
    <ArrowButton href={ctaHref} variant="light">
      {ctaLabel}
    </ArrowButton>
  );

  return (
    <section
      className="relative flex min-h-[100svh] flex-col overflow-hidden text-foreground"
      style={{ background: background ?? DEFAULT_BACKGROUND }}
    >
      <div
        className="pointer-events-none absolute top-0 right-0 z-0 hidden h-full w-[100%] max-w-[1200px] opacity-20 lg:block"
        style={{
          backgroundColor: vectorColor,
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
        className="pointer-events-none absolute right-0 bottom-0 left-0 z-0 h-[60%] w-full opacity-20 lg:hidden"
        style={{
          backgroundColor: vectorColor,
          maskImage: "url(/vectorMobileHero.svg)",
          WebkitMaskImage: "url(/vectorMobileHero.svg)",
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskPosition: "center bottom",
          WebkitMaskPosition: "center bottom",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}
      />

      <header className="relative z-10 p-5 lg:px-[70px] lg:pt-[70px]">
        <Link
          href="/"
          aria-label="QUANTUM — на головну"
          className="inline-block transition-opacity hover:opacity-80"
        >
          <Image
            src="/hero/logo.svg"
            alt="QUANTUM"
            width={207}
            height={41}
            priority
            className="h-[30px] w-auto lg:h-[40px]"
          />
        </Link>
      </header>

      <div className="relative z-10 flex flex-1 flex-col px-5 pb-8 lg:flex-row lg:items-stretch lg:gap-[70px] lg:px-[70px] lg:pb-[70px]">
        <div className="flex min-w-0 flex-col lg:flex-1 lg:justify-center">
          <ul className="grid w-fit grid-cols-[auto_auto] gap-x-6 gap-y-3 text-[14px] text-white/80 lg:flex lg:w-auto lg:gap-x-7 lg:text-[18px]">
            {tags.map((t) => (
              <li key={t} className="flex items-center gap-2 whitespace-nowrap">
                <span className="text-white/50">[</span>
                <span>{t}</span>
                <span className="text-white/50">]</span>
              </li>
            ))}
          </ul>

          <h1 className="mt-5 font-heading text-[clamp(2.75rem,6.2vw,7rem)] leading-[1.1] font-bold tracking-[-0.1em] uppercase lg:mt-7">
            {title.split(" ").map((word, i) => (
              <span key={i} className="block">
                {word}
              </span>
            ))}
          </h1>

          <p className="mt-3 max-w-[520px] text-[19px] leading-[1.1] text-white/80 lg:mt-6 lg:max-w-[500px] lg:text-[23px]">
            {subtitle.split("\n").map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && (
                  <>
                    {" "}
                    <br className="lg:hidden" />
                  </>
                )}
              </span>
            ))}
          </p>
          <div className="absolute bottom-18 left-18 hidden lg:inline">
            {cta}
          </div>
        </div>

        <div className="mt-8 shrink-0 lg:mt-0 lg:w-[41%] lg:max-w-[620px]">
          <div className="relative aspect-square w-full overflow-hidden rounded-[16px] bg-white/5 lg:aspect-auto lg:h-full">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 41vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="mt-2 pt-8 lg:mt-auto lg:hidden">{cta}</div>
      </div>
    </section>
  );
}
