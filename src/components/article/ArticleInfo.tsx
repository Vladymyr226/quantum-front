import Image from "next/image";
import { Fragment } from "react";

import type { ArticleBlock, ArticleInfoData } from "@/content/articles";

function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split("\n").map((line, li, lines) => (
        <Fragment key={li}>
          {line.split("**").map((part, i) =>
            i % 2 === 1 ? (
              <strong key={i} className="font-bold text-ink">
                {part}
              </strong>
            ) : (
              <Fragment key={i}>{part}</Fragment>
            ),
          )}
          {li < lines.length - 1 && <br />}
        </Fragment>
      ))}
    </>
  );
}

const listItemCls =
  "flex gap-3 text-[15px] leading-[1.55] font-normal text-ink/85 lg:text-[17px]";

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "heading":
      return (
        <h2 className="mt-12 font-heading text-[22px] leading-[1.06] font-bold tracking-[-0.02em] text-balance text-ink uppercase lg:mt-[72px] lg:text-[24px]">
          <RichText text={block.text} />
        </h2>
      );
    case "text":
      return (
        <p className="mt-5 text-[15px] leading-[1.55] font-normal text-ink/85 lg:text-[17px]">
          <RichText text={block.text} />
        </p>
      );
    case "ordered":
      return (
        <ol className="mt-5 flex flex-col gap-3.5 lg:mt-6">
          {block.items.map((item, i) => (
            <li key={i} className={listItemCls}>
              <span className="shrink-0 font-medium text-ink tabular-nums">
                {i + 1}.
              </span>
              <span>
                <RichText text={item} />
              </span>
            </li>
          ))}
        </ol>
      );
    case "unordered":
      return (
        <ul className="mt-5 flex flex-col gap-3.5 lg:mt-6">
          {block.items.map((item, i) => (
            <li key={i} className={listItemCls}>
              <span
                aria-hidden
                className="mt-[0.62em] size-[6px] shrink-0 rounded-full bg-ink"
              />
              <span>
                <RichText text={item} />
              </span>
            </li>
          ))}
        </ul>
      );
  }
}

export function ArticleInfo({
  image,
  imageAlt,
  title,
  blocks,
}: ArticleInfoData) {
  return (
    <section className="pb-16 lg:pb-24">
      <div className="mx-auto max-w-[960px] px-5 lg:px-10">
        <div className="overflow-hidden rounded-[18px] lg:rounded-[26px]">
          <Image
            src={image}
            alt={imageAlt}
            width={1200}
            height={600}
            priority
            className="aspect-[2/1] w-full object-cover"
          />
        </div>

        <h1 className="mt-9 font-heading text-[27px] leading-[1.05] font-bold tracking-[-0.02em] text-ink uppercase lg:mt-12 lg:text-[30px]">
          <RichText text={title} />
        </h1>

        {blocks.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </div>
    </section>
  );
}
