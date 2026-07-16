"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Course = {
  n: string;
  title: string;
  desc: string;
  photos: string[];
};

const COURSES: Course[] = [
  {
    n: "01",
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

const DEFAULT_INDEX = 2; // desktop photo shown when nothing is hovered

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
 * category's shots. Mobile: each course's photo loops on its own.
 * Figma: PC 30:85, MOB 30:553.
 */
export function Courses() {
  const [hover, setHover] = useState<number | null>(null);
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => f + 1), CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="courses" className="scroll-mt-5 bg-surface text-ink lg:scroll-mt-[70px]">
      <div className="mx-auto max-w-[1920px] px-5 py-20 lg:px-16 lg:py-[130px]">
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:gap-[70px]">
          {/* Course list */}
          <ul className="min-w-0 flex-1">
            {COURSES.map((c, i) => (
              <li
                key={c.n}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                className="border-t border-[#dddddc] pt-7 pb-8 lg:pt-[50px] lg:pb-[34px]"
              >
                <h3 className="font-heading text-[46px] leading-[1.1] font-bold tracking-[-0.05em] uppercase lg:text-[70px]">
                  {c.title}
                </h3>

                <div className="mt-2 flex items-start justify-between gap-6 lg:mt-3 lg:items-center">
                  <p className="max-w-[300px] text-[16px] leading-[1.1] lg:max-w-[460px] lg:text-[22px]">
                    {c.desc}
                  </p>
                  <span className="shrink-0 text-[14px] text-muted lg:text-[22px]">
                    / {c.n}
                  </span>
                </div>

                {/* Mobile photo — loops through the category */}
                <PhotoStack
                  photos={c.photos}
                  frame={frame}
                  sizes="100vw"
                  className="relative mt-6 aspect-[380/372] overflow-hidden rounded-[8px] bg-muted lg:hidden"
                />
              </li>
            ))}
          </ul>

          {/* Desktop photo — hovered category cycles, default is static */}
          <div className="hidden shrink-0 self-stretch lg:block lg:w-[615px]">
            <div className="relative h-full min-h-[600px] overflow-hidden rounded-[12px] bg-muted">
              {COURSES.map((c, i) => {
                const visible =
                  hover === null ? i === DEFAULT_INDEX : hover === i;
                return (
                  <PhotoStack
                    key={c.n}
                    photos={c.photos}
                    frame={hover === i ? frame : 0}
                    sizes="615px"
                    className={`absolute inset-0 transition-opacity duration-100 ${
                      visible ? "opacity-100" : "opacity-0"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
