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
      <p className="col-start-2 row-start-2 mt-3 text-[13px] leading-[1.4] font-normal text-ink/65 lg:col-start-3 lg:row-start-1 lg:mt-0 lg:text-[14px]">
        {item.description}
      </p>
    </article>
  );
}

export function CourseProgram({ heading, label, items }: CourseProgramData) {
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
      </div>
    </section>
  );
}
