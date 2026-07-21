import Image from "next/image";
import Link from "next/link";

import type { CourseHeroData } from "@/content/courses";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { CourseHeroGallery } from "@/components/course/CourseHeroGallery";

const DEFAULT_BACKGROUND = "#262626";

export function CourseHero({
  title,
  subtitle,
  tags,
  image,
  images,
  imageAlt,
  ctaLabel,
  ctaHref,
  background,
  vectorColor = "#F2F2F2",
}: CourseHeroData) {
  const frames = images && images.length > 0 ? images : [image];
  const cta = (
    <ArrowButton href={ctaHref} variant="light">
      {ctaLabel}
    </ArrowButton>
  );

  return (
    <section
      className="relative flex min-h-[100svh] flex-col overflow-hidden text-foreground lg:h-[calc(872*var(--u))] lg:min-h-0"
      style={{ background: background ?? DEFAULT_BACKGROUND }}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 hidden opacity-[1.5%] lg:block"
        style={{
          backgroundColor: vectorColor,
          maskImage: "url(/vectorDesktopHero-v2.svg)",
          WebkitMaskImage: "url(/vectorDesktopHero-v2.svg)",
          maskSize: "calc(1325 * var(--u)) calc(384 * var(--u))",
          WebkitMaskSize: "calc(1325 * var(--u)) calc(384 * var(--u))",
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

      <header className="relative z-10 p-5 lg:px-[calc(72*var(--u))] lg:pt-[calc(70*var(--u))]">
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
            className="h-[30px] w-auto lg:h-[calc(41*var(--u))]"
          />
        </Link>
      </header>

      <div className="relative z-10 flex flex-1 flex-col px-5 pb-8 lg:contents">
        <div className="flex min-w-0 flex-col lg:absolute lg:top-[calc(286*var(--u))] lg:left-[calc(72*var(--u))] lg:z-10">
          <ul className="grid w-fit grid-cols-[auto_auto] gap-x-6 gap-y-3 text-[14px] text-white/80 lg:flex lg:w-auto lg:gap-x-[calc(37*var(--u))] lg:text-[calc(22*var(--u))]">
            {tags.map((t) => (
              <li key={t} className="flex items-center gap-2 whitespace-nowrap">
                <span className="text-white/50">[</span>
                <span>{t}</span>
                <span className="text-white/50">]</span>
              </li>
            ))}
          </ul>

          <h1 className="mt-5 font-heading text-[clamp(2.75rem,6.2vw,7rem)] leading-[1.1] font-bold tracking-[-0.1em] uppercase lg:mt-[calc(23*var(--u))] lg:-ml-[calc(12*var(--u))] lg:text-[calc(142*var(--u))]">
            {title.split(" ").map((word, i) => (
              <span key={i} className="block">
                {word}
              </span>
            ))}
          </h1>

          <p className="mt-3 max-w-[520px] text-[19px] leading-[1.1] text-white/80 lg:mt-[calc(22*var(--u))] lg:max-w-[calc(700*var(--u))] lg:text-[calc(32*var(--u))] lg:leading-[calc(34*var(--u))]">
            {subtitle.split("\n").map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && (
                  <>
                    {" "}
                    <br />
                  </>
                )}
              </span>
            ))}
          </p>
        </div>

        <div className="mt-8 shrink-0 lg:absolute lg:top-[calc(70*var(--u))] lg:right-[calc(70*var(--u))] lg:z-10 lg:mt-0 lg:w-[calc(733*var(--u))]">
          <CourseHeroGallery images={frames} alt={imageAlt} />
        </div>

        <div className="mt-2 pt-8 lg:absolute lg:bottom-[calc(66*var(--u))] lg:left-[calc(72*var(--u))] lg:z-10 lg:mt-0 lg:pt-0">
          {cta}
        </div>
      </div>
    </section>
  );
}
