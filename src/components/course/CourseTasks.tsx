import Image from "next/image";

import type { CourseTask, CourseTasksData } from "@/content/courses";

const CARD_WIDTH = "20.3%";
const CARD_ASPECT = "5 / 7";

const SCATTER = [
  { left: "7.9%", top: "12%" },
  { left: "40.8%", top: "0%" },
  { left: "71.8%", top: "9%" },
  { left: "27%", top: "53%" },
  { left: "58.6%", top: "60%" },
] as const;

function ProgressDots({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-[5px]">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="size-[8px] rounded-[2px] border border-ink/25 lg:size-[9px]"
        />
      ))}
    </div>
  );
}

/** Card header */
function CardHeader({ number, index }: { number: string; index: number }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[13px] font-medium text-ink/45 tabular-nums lg:text-[14px]">
        {number}
      </span>
      <ProgressDots count={index + 1} />
    </div>
  );
}

const CARD_TITLE =
  "font-sans font-normal text-ink leading-[1.14] tracking-[-0.01em]";

/** Stacked card  */
function StackedCard({ task, index }: { task: CourseTask; index: number }) {
  return (
    <div className="rounded-[16px] bg-white p-5 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.12)]">
      <CardHeader number={task.number} index={index} />
      <h3 className={`mt-4 text-[22px] ${CARD_TITLE}`}>{task.title}</h3>
      <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-[12px]">
        <Image
          src={task.image}
          alt={task.imageAlt}
          fill
          quality={90}
          sizes="100vw"
          className="object-contain"
        />
      </div>
    </div>
  );
}

/** Scatter card */
function ScatterCard({
  task,
  index,
  slot,
}: {
  task: CourseTask;
  index: number;
  slot: (typeof SCATTER)[number];
}) {
  return (
    <div
      className="absolute flex flex-col rounded-[18px] bg-white p-4 shadow-[0_16px_50px_-16px_rgba(0,0,0,0.16)] xl:p-5"
      style={{
        left: slot.left,
        top: slot.top,
        width: CARD_WIDTH,
        aspectRatio: CARD_ASPECT,
      }}
    >
      <CardHeader number={task.number} index={index} />
      <h3
        className={`mt-3.5 min-h-[2.28em] text-[18px] xl:text-[21px] ${CARD_TITLE}`}
      >
        {task.title}
      </h3>
      <div className="relative mt-3.5 min-h-0 flex-1 overflow-hidden rounded-[12px]">
        <Image
          src={task.image}
          alt={task.imageAlt}
          fill
          quality={90}
          sizes="25vw"
          className="object-contain"
        />
      </div>
    </div>
  );
}

const CENTER_TITLE =
  "font-heading font-bold uppercase leading-[0.98] tracking-[-0.01em] text-ink";

export function CourseTasks({
  heading,
  description,
  centerTitle,
  tasks,
}: CourseTasksData) {
  return (
    <section className="bg-[#f2f2f2] text-ink">
      <div className="mx-auto max-w-[1600px] px-5 pt-20 pb-[106px] lg:px-10 lg:pt-[120px] lg:pb-20">
        <div>
          <h2 className="font-heading text-[36px] leading-[1.02] font-bold tracking-[-0.02em] whitespace-pre-line uppercase lg:text-[48px]">
            {heading}
          </h2>
          <div className="mt-4 max-w-[740px] space-y-1 text-[18px] leading-[1.35] text-ink/70 lg:mt-5 lg:text-[22px]">
            {description.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>

        <h3 className={`mt-14 text-[34px] ${CENTER_TITLE} lg:hidden`}>
          {centerTitle}
        </h3>

        <div className="mt-8 flex flex-col gap-6 lg:hidden">
          {tasks.map((task, i) => (
            <StackedCard key={task.number} task={task} index={i} />
          ))}
        </div>

        <div className="relative mt-8 hidden aspect-[1333/1040] w-full lg:block">
          {tasks.slice(0, SCATTER.length).map((task, i) => (
            <ScatterCard
              key={task.number}
              task={task}
              index={i}
              slot={SCATTER[i]}
            />
          ))}

          <h3
            className={`absolute text-center text-[clamp(2rem,3.7vw,3.3rem)] ${CENTER_TITLE}`}
            style={{ left: "50%", top: "40%", transform: "translateX(-50%)" }}
          >
            {centerTitle.split(" ").map((word, i) => (
              <span key={i} className="block">
                {word}
              </span>
            ))}
          </h3>
        </div>
      </div>
    </section>
  );
}
