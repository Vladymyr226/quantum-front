"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Course = {
  n: string;
  slug: string;
  title: string;
  desc: string;
  photos: string[];
};

const COURSES: Course[] = [
  {
    n: "01",
    slug: "mediabuyer",
    title: "Медіабаєр",
    desc: "Практичний курс по генерації трафіку, орієнтований на результат та ефективність",
    photos: [
      "/courses/mediabuyer/01.jpg",
      "/courses/mediabuyer/02.jpg",
      "/courses/mediabuyer/03.jpg",
      "/courses/mediabuyer/04.jpg",
      "/courses/mediabuyer/05.jpg",
      "/courses/mediabuyer/06.jpg",
      "/courses/mediabuyer/07.jpg",
      "/courses/mediabuyer/08.jpg",
      "/courses/mediabuyer/09.jpg",
      "/courses/mediabuyer/10.jpg",
      "/courses/mediabuyer/11.jpg",
      "/courses/mediabuyer/12.jpg",
      "/courses/mediabuyer/13.jpg",
      "/courses/mediabuyer/14.jpg",
      "/courses/mediabuyer/15.jpg",
    ],
  },
  {
    n: "02",
    slug: "affiliate",
    title: "Афілейт спеціаліст",
    desc: "Навчись працювати з оферами і партнерками та монетизуй трафік в десятки разів",
    photos: [
      "/courses/affiliate/01.jpg",
      "/courses/affiliate/02.jpg",
      "/courses/affiliate/03.jpg",
      "/courses/affiliate/04.jpg",
      "/courses/affiliate/05.jpg",
      "/courses/affiliate/06.jpg",
      "/courses/affiliate/07.jpg",
      "/courses/affiliate/08.jpg",
      "/courses/affiliate/09.jpg",
    ],
  },
  {
    n: "03",
    slug: "smm",
    title: "SMM спеціаліст",
    desc: "Курс для тих, хто хоче вести соцмережі професійно і коштувати на ринку",
    photos: [
      "/courses/smm/01.jpg",
      "/courses/smm/02.jpg",
      "/courses/smm/03.jpg",
      "/courses/smm/04.jpg",
      "/courses/smm/05.jpg",
      "/courses/smm/06.jpg",
      "/courses/smm/07.jpg",
      "/courses/smm/08.jpg",
      "/courses/smm/09.jpg",
      "/courses/smm/10.jpg",
      "/courses/smm/11.jpg",
      "/courses/smm/12.jpg",
      "/courses/smm/13.jpg",
      "/courses/smm/14.jpg",
      "/courses/smm/15.jpg",
      "/courses/smm/16.jpg",
      "/courses/smm/17.jpg",
      "/courses/smm/18.jpg",
      "/courses/smm/19.jpg",
      "/courses/smm/20.jpg",
    ],
  },
];

const DEFAULT_INDEX = 2; // desktop photo shown before the first hover

// Photo-swap interval in ms — this controls the CYCLE SPEED. Lower = faster.
// (The `duration-*` classes are only the fade length, not the speed.)
const CYCLE_MS = 500;

/**
 * A stack of category photos. All images are rendered (so they preload) and the
 * current frame is shown via opacity — swaps are instant, no load flicker.
 */
function PhotoStack({
  photos,
  frame,
  className,
  sizes,
}: {
  photos: string[];
  frame: number;
  className: string;
  sizes: string;
}) {
  const cur = ((frame % photos.length) + photos.length) % photos.length;
  return (
    <div className={className}>
      {photos.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          quality={90}
          sizes={sizes}
          className={`object-cover transition-opacity duration-100 ${
            i === cur ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}

/**
 * Courses list section (light block after the hero).
 * Desktop: list on the left; the photo on the right cycles through the hovered
 * title's shots. Mobile: only the course currently filling the screen animates.
 * Figma: PC 30:85, MOB 30:553.
 */
export function Courses() {
  const [active, setActive] = useState(DEFAULT_INDEX);
  const [hovered, setHovered] = useState<number | null>(null);
  const [frozen, setFrozen] = useState(0);
  const [frame, setFrame] = useState(0);

  // Desktop: the ticker only runs while a title is under the cursor.
  useEffect(() => {
    if (hovered === null) return;
    const id = setInterval(() => setFrame((f) => f + 1), CYCLE_MS);
    return () => clearInterval(id);
  }, [hovered]);

  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [onScreen, setOnScreen] = useState<number | null>(null);
  const [mobileFrames, setMobileFrames] = useState(() => COURSES.map(() => 0));

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    let io: IntersectionObserver | null = null;

    const stop = () => {
      io?.disconnect();
      io = null;
      setOnScreen(null);
    };

    const start = () => {
      const ratios = new Map<Element, number>();
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) ratios.set(e.target, e.intersectionRatio);
          let best: Element | null = null;
          let bestRatio = 0.35;
          ratios.forEach((r, el) => {
            if (r > bestRatio) {
              bestRatio = r;
              best = el;
            }
          });
          setOnScreen(
            best === null
              ? null
              : itemRefs.current.indexOf(best as HTMLLIElement),
          );
        },
        { threshold: [0, 0.2, 0.35, 0.5, 0.65, 0.8, 1] },
      );
      for (const el of itemRefs.current) if (el) io.observe(el);
    };

    const sync = () => {
      stop();
      if (mq.matches) start();
    };

    sync();
    mq.addEventListener("change", sync);
    return () => {
      mq.removeEventListener("change", sync);
      stop();
    };
  }, []);

  useEffect(() => {
    if (onScreen === null) return;
    const id = setInterval(() => {
      setMobileFrames((prev) =>
        prev.map((f, i) => (i === onScreen ? f + 1 : f)),
      );
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, [onScreen]);

  const enterTitle = (i: number) => {
    setActive(i);
    setHovered(i);
  };
  const leaveTitle = () => {
    setFrozen(frame);
    setHovered(null);
  };

  return (
    <section
      id="courses"
      className="scroll-mt-5 bg-surface text-ink lg:scroll-mt-[70px]"
    >
      <div className="mx-auto max-w-[1920px] px-5 py-20 lg:px-[calc(70*var(--u))] lg:pt-[calc(148*var(--u))] lg:pb-[calc(98*var(--u))]">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-[calc(70*var(--u))]">
          {/* Course list */}
          <ul className="min-w-0 flex-1">
            {COURSES.map((c, i) => (
              <li
                key={c.n}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                className="border-t border-[#dddddc] pt-7 pb-8 lg:pt-[calc(38*var(--u))] lg:pb-[calc(46*var(--u))]"
              >
                <Link href={`/courses/${c.slug}`} className="group block">
                  <h3
                    onMouseEnter={() => enterTitle(i)}
                    onMouseLeave={leaveTitle}
                    className="w-fit font-heading text-[clamp(28px,12vw,46px)] leading-[1.1] font-bold tracking-[-0.05em] uppercase transition-opacity group-hover:opacity-60 lg:-ml-[calc(6*var(--u))] lg:text-[calc(70*var(--u))]"
                  >
                    {c.title}
                  </h3>

                  <div className="mt-2 flex items-start justify-between gap-6 lg:mt-[calc(5*var(--u))] lg:items-end">
                    <p className="max-w-[300px] text-[16px] leading-[1.1] lg:max-w-[calc(460*var(--u))] lg:text-[calc(22*var(--u))]">
                      {c.desc}
                    </p>
                    <span className="shrink-0 text-[14px] text-muted lg:relative lg:top-[calc(7*var(--u))] lg:text-[calc(22*var(--u))]">
                      / {c.n}
                    </span>
                  </div>
                </Link>

                {/* Mobile photo — loops through the category */}
                <PhotoStack
                  photos={c.photos}
                  frame={mobileFrames[i]}
                  sizes="100vw"
                  className="relative mt-6 aspect-[380/372] overflow-hidden rounded-[8px] bg-muted lg:hidden"
                />
              </li>
            ))}
          </ul>

          {/* Desktop photo — hovered category cycles, default is static */}
          <div className="hidden shrink-0 lg:block lg:w-[calc(615*var(--u))]">
            <div className="relative h-[calc(601*var(--u))] overflow-hidden rounded-[calc(12*var(--u))] bg-muted">
              {COURSES.map((c, i) => (
                <PhotoStack
                  key={c.n}
                  photos={c.photos}
                  frame={hovered === i ? frame : frozen}
                  sizes="615px"
                  className={`absolute inset-0 transition-opacity duration-100 ${
                    i === active ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
