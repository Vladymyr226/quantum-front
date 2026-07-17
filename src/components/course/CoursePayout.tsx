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
    <div className="flex items-center justify-between gap-3 rounded-[16px] bg-white px-6 py-4 shadow-[0_6px_22px_-12px_rgba(0,0,0,0.12)] lg:flex-1 lg:px-9 lg:py-5">
      <div className="flex min-w-0 items-center gap-2 lg:gap-4">
        <span className="w-4 shrink-0 text-right text-[12px] font-medium text-ink/45 tabular-nums lg:w-6 lg:text-[15px]">
          {tier.count}
        </span>
        <div className="flex items-center gap-[2px] lg:gap-1.5">
          {Array.from({ length: tier.count }).map((_, i) => (
            <Image
              key={i}
              src={personIcon}
              alt=""
              width={44}
              height={53}
              unoptimized
              className="h-[23px] w-auto lg:h-[clamp(28px,2.8vw,42px)]"
            />
          ))}
        </div>
      </div>
      <span className="shrink-0 font-heading text-[26px] font-normal tracking-[-0.01em] lg:text-[clamp(34px,3.2vw,52px)]">
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
      <div className="mx-auto max-w-[1600px] px-5 pt-[54px] pb-20 lg:px-10 lg:pt-[37px] lg:pb-[110px]">
        <h2 className="mx-auto max-w-[860px] text-center font-sans text-[20px] leading-[1.3] font-bold lg:text-[30px]">
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

        <div className="mt-10 flex flex-col items-center gap-14 lg:mt-14 lg:flex-row lg:items-stretch lg:justify-between lg:gap-0">
          <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-[16px] bg-black/[0.03] sm:max-w-[460px] lg:w-[27%] lg:max-w-[440px]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 27vw"
              className="object-cover"
            />
          </div>

          <Image
            src={arrowIcon}
            alt=""
            width={92}
            height={101}
            unoptimized
            className="h-12 w-auto shrink-0 rotate-90 self-center lg:h-[clamp(56px,5vw,80px)] lg:rotate-0"
          />

          <div className="flex w-full flex-col gap-3 lg:w-auto lg:gap-2">
            {tiers.map((tier) => (
              <PayoutCard
                key={tier.count}
                tier={tier}
                personIcon={personIcon}
              />
            ))}
          </div>
        </div>

        <h3 className="mt-12 text-center font-heading text-[34px] leading-[1.05] font-bold tracking-[-0.01em] uppercase lg:mt-16 lg:text-[52px]">
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
