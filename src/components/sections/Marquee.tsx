const PHRASE =
  "Онлайн-реклама потрібна завжди. Опануй цю навичку раз і на все життя.";

/** One seamless copy of the ticker content — repeated enough to exceed any
    viewport width so the loop has no gap. */
function Track() {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden="true">
      {Array.from({ length: 6 }).map((_, i) => (
        <li key={i} className="flex items-center whitespace-nowrap uppercase">
          <span>{PHRASE}</span>
          <span className="px-[1.4em]">{"//"}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Full-width scrolling ticker under the hero (moves left, loops forever).
 * Figma: PC 30:82 (h60, 18px), MOB 30:550 (h50, 14px).
 */
export function Marquee() {
  return (
    <section
      aria-label={PHRASE}
      className="flex h-[50px] items-center overflow-hidden bg-ink text-[14px] font-normal text-foreground lg:h-[60px] lg:text-[18px]"
    >
      <div className="flex min-w-max animate-marquee motion-reduce:animate-none">
        <Track />
        <Track />
      </div>
    </section>
  );
}
