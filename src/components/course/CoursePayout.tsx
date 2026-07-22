import Image from "next/image";

import type { CoursePayoutData, CoursePayoutTier } from "@/content/courses";

function PayoutCard({
  tier,
  personIcon,
}: {
  tier: CoursePayoutTier;
  personIcon: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-[16px] bg-white px-6 py-4 shadow-[0_6px_22px_-12px_rgba(0,0,0,0.12)] lg:flex-1 lg:rounded-[calc(10*var(--u))] lg:py-0 lg:pr-[calc(64*var(--u))] lg:pl-[calc(40*var(--u))]">
      <div className="flex min-w-0 items-center gap-2 lg:gap-[calc(30*var(--u))]">
        <span className="w-4 shrink-0 text-right text-[12px] font-medium text-ink/45 tabular-nums lg:w-[calc(42*var(--u))] lg:text-[calc(22*var(--u))]">
          {tier.count}
        </span>
        <div className="flex items-center gap-[2px] lg:gap-[calc(8*var(--u))]">
          {Array.from({ length: tier.count }).map((_, i) => (
            <Image
              key={i}
              src={personIcon}
              alt=""
              width={44}
              height={53}
              unoptimized
              className="h-[23px] w-auto lg:h-[calc(53*var(--u))]"
            />
          ))}
        </div>
      </div>
      <span className="shrink-0 font-heading text-[26px] font-normal tracking-[-0.01em] lg:text-[calc(66*var(--u))]">
        ={tier.amount}
      </span>
    </div>
  );
}

export function CoursePayout({
  heading,
  headingMobile,
  image,
  imageAlt,
  personIcon,
  arrowIcon,
  tiers,
  footer,
  footerMobile,
}: CoursePayoutData) {
  return (
    <section className="-mt-px bg-[#f2f2f2] text-ink">
      <div className="mx-auto max-w-[1600px] px-5 pt-[54px] pb-20 lg:max-w-none lg:px-[calc(72*var(--u))] lg:pt-[calc(37*var(--u))] lg:pb-[calc(110*var(--u))]">
        <h2 className="mx-auto max-w-[860px] text-center font-sans text-[20px] leading-[1.3] font-bold lg:max-w-none lg:text-[calc(45*var(--u))] lg:leading-[calc(49*var(--u))]">
          <span className="lg:hidden">
            {headingMobile.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </span>
          <span className="hidden lg:block">
            {heading.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </span>
        </h2>

        <div className="mt-10 flex flex-col items-center gap-14 lg:mt-[calc(92*var(--u))] lg:flex-row lg:items-stretch lg:gap-[calc(104*var(--u))]">
          <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-[16px] bg-black/[0.03] sm:max-w-[460px] lg:w-[calc(550*var(--u))] lg:max-w-none lg:rounded-[calc(12*var(--u))]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              quality={90}
              sizes="(max-width: 1024px) 100vw, 29vw"
              className="object-cover"
            />
          </div>

          <Image
            src={arrowIcon}
            alt=""
            width={92}
            height={101}
            unoptimized
            className="h-12 w-auto shrink-0 rotate-90 self-center lg:h-[calc(101*var(--u))] lg:rotate-0"
          />

          <div className="flex w-full flex-col gap-3 lg:w-auto lg:flex-1 lg:gap-[calc(18*var(--u))]">
            {tiers.map((tier) => (
              <PayoutCard
                key={tier.count}
                tier={tier}
                personIcon={personIcon}
              />
            ))}
          </div>
        </div>

        <h3 className="mt-12 text-center font-heading text-[34px] leading-[1.05] font-bold tracking-[-0.01em] uppercase lg:mt-[calc(89*var(--u))] lg:text-[calc(66*var(--u))]">
          <span className="lg:hidden">
            {footerMobile.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </span>
          <span className="hidden lg:inline">{footer}</span>
        </h3>
      </div>
    </section>
  );
}
