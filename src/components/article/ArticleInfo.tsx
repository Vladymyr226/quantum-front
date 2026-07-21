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

const bodyCls =
  "text-[15px] leading-[1.55] font-normal text-ink lg:text-[calc(22*var(--u))] lg:leading-[calc(24*var(--u))]";

function topMargin(block: ArticleBlock, prev?: ArticleBlock["type"]) {
  if (block.type === "heading") return "mt-12 lg:mt-[calc(61*var(--u))]";
  if (prev === undefined) return "mt-5 lg:mt-[calc(20*var(--u))]";
  if (prev === "heading") return "mt-5 lg:mt-[calc(21*var(--u))]";
  return "mt-5 lg:mt-[calc(24*var(--u))]";
}

function Block({
  block,
  prev,
}: {
  block: ArticleBlock;
  prev?: ArticleBlock["type"];
}) {
  const mt = topMargin(block, prev);

  switch (block.type) {
    case "heading":
      return (
        <h2
          className={`${mt} font-heading text-[22px] leading-[1.06] font-bold tracking-[-0.02em] text-balance text-ink uppercase lg:text-[calc(33.5*var(--u))]`}
        >
          <RichText text={block.text} />
        </h2>
      );
    case "text":
      return (
        <p className={`${mt} ${bodyCls}`}>
          <RichText text={block.text} />
        </p>
      );
    case "ordered":
      return (
        <ol
          className={`${mt} flex flex-col gap-3.5 lg:gap-[calc(24*var(--u))] lg:pl-[calc(6.5*var(--u))]`}
        >
          {block.items.map((item, i) => (
            <li
              key={i}
              className={`flex gap-3 lg:gap-x-[calc(9*var(--u))] ${bodyCls}`}
            >
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
        <ul
          className={`${mt} flex flex-col gap-3.5 lg:gap-[calc(24*var(--u))] lg:pl-[calc(15*var(--u))]`}
        >
          {block.items.map((item, i) => (
            <li
              key={i}
              className={`flex gap-3 lg:gap-x-[calc(13*var(--u))] ${bodyCls}`}
            >
              <span
                aria-hidden
                className="mt-[0.62em] size-[6px] shrink-0 rounded-full bg-ink lg:mt-[calc(10*var(--u))] lg:size-[calc(7*var(--u))]"
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
      <div className="mx-auto max-w-[960px] px-5 lg:max-w-[calc(1196*var(--u))] lg:px-0">
        <div className="overflow-hidden rounded-[18px] lg:rounded-[calc(12*var(--u))]">
          <Image
            src={image}
            alt={imageAlt}
            width={1200}
            height={600}
            priority
            className="aspect-[2/1] w-full object-cover"
          />
        </div>

        <h1 className="mt-9 font-heading text-[27px] leading-[1.05] font-bold tracking-[-0.02em] text-ink uppercase lg:mt-[calc(57*var(--u))] lg:text-[calc(43*var(--u))]">
          <RichText text={title} />
        </h1>

        {blocks.map((block, i) => (
          <Block key={i} block={block} prev={blocks[i - 1]?.type} />
        ))}
      </div>
    </section>
  );
}
