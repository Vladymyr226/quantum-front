import Image from "next/image";

import type { CourseProgramData, CourseProgramItem } from "@/content/courses";

function ProgramRow({
  index,
  item,
}: {
  index: number;
  item: CourseProgramItem;
}) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <article className="grid grid-cols-[auto_1fr] items-start gap-x-3 border-t border-ink/12 py-12 first:border-t-0 lg:grid-cols-[52px_1fr_clamp(220px,20vw,300px)] lg:items-center lg:gap-x-8 lg:py-6">
      <span className="col-start-1 row-start-1 self-start pt-[3px] text-[11px] font-normal text-ink/40 tabular-nums lg:pt-1 lg:text-[13px]">
        {num}
      </span>
      <h3 className="col-start-2 row-start-1 font-heading text-[32px] leading-[0.95] font-bold tracking-[-0.02em] text-ink uppercase lg:text-center lg:text-[clamp(42px,4.8vw,72px)]">
        {item.title}
      </h3>
      <p className="col-start-2 row-start-2 mt-3 text-[13px] leading-[1.4] font-normal text-[#262626] lg:col-start-3 lg:row-start-1 lg:mt-0 lg:text-[14px]">
        {item.description}
      </p>
    </article>
  );
}

export function CourseProgram({
  heading,
  label,
  items,
  bonusTitle,
  bonuses,
}: CourseProgramData) {
  return (
    <section className="-mt-px bg-[#f2f2f2] text-ink">
      <div className="mx-auto max-w-[1600px] px-5 py-20 lg:px-10 lg:py-[110px]">
        <div className="flex items-center justify-between text-[12px] font-normal text-ink/55 lg:text-[13px]">
          <span>{heading}</span>
          <span>{label}</span>
        </div>

        <div className="mt-6 border-b border-ink/12 lg:mt-8">
          {items.map((item, i) => (
            <ProgramRow key={i} index={i} item={item} />
          ))}
        </div>

        {bonuses && bonuses.length > 0 && (
          <div className="mt-14 lg:mt-20">
            {bonusTitle && (
              <p className="text-center text-[16px] font-normal text-[#262626] lg:text-[20px]">
                {bonusTitle}
              </p>
            )}
            <div className="mt-5 flex flex-col items-center justify-center gap-x-14 gap-y-5 lg:mt-6 lg:flex-row">
              {bonuses.map((bonus, i) => (
                <div
                  key={i}
                  className="flex items-center gap-[0.42em] text-[24px] lg:text-[clamp(34px,3.4vw,48px)]"
                >
                  <span className="relative aspect-square h-[0.85em] shrink-0 rounded-[0.16em] bg-[#262626]">
                    <Image
                      src="/icons/gift.svg"
                      alt=""
                      fill
                      unoptimized
                      className="object-contain p-[20%] lg:p-[28%]"
                    />
                  </span>
                  <span className="font-heading leading-[0.95] font-bold tracking-[-0.02em] text-ink uppercase">
                    {bonus}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
