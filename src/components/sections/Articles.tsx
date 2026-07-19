import Image from "next/image";
import Link from "next/link";

type Article = {
  img: string;
  alt: string;
  title: string;
  desc: string;
  href?: string;
};

const ARTICLES: Article[] = [
  {
    img: "/marketing/Frame2.jpg",
    alt: "Еволюція людини до афілейт-маркетолога за ноутбуком",
    title: "Як з'явився афілейт маркетинг",
    desc: "Історія сфери яка змінила діджитал",
    href: "/articles/arbitrage-history",
  },
  {
    img: "/marketing/Frame3.jpg",
    alt: "Товари для реклами — худі, протеїн, гаджети",
    title: "Гід по афілейт маркетингу",
    desc: "Все що потрібно знати перед стартом",
    href: "/articles/affiliate-guide",
  },
];

/**
 * Articles block — two preview cards (image + uppercase heading + caption).
 * Light section, two columns on desktop, stacked on mobile. Cards with an
 * `href` link to their article page (subtle image-zoom hover); the rest are
 * static. Figma: MOB 30:613 (PC mirrors under 30:2).
 */
export function Articles() {
  return (
    <section className="bg-surface text-ink">
      <div className="mx-auto grid max-w-[1920px] gap-x-[70px] gap-y-14 px-5 py-20 lg:grid-cols-2 lg:px-[70px] lg:py-[130px]">
        {ARTICLES.map((a) => {
          const inner = (
            <>
              <div className="relative aspect-796/393 w-full overflow-hidden rounded-[12px] bg-black/5">
                <Image
                  src={a.img}
                  alt={a.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 855px"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>

              <h3 className="mt-10 font-heading text-[clamp(30px,10.5vw,49px)] leading-[1.05] font-bold tracking-[-0.03em] uppercase transition-opacity duration-300 group-hover:opacity-70 lg:text-[50px]">
                {a.title}
              </h3>
              <p className="mt-6 text-[18px] text-ink/60 lg:text-[22px]">
                {a.desc}
              </p>
            </>
          );

          return a.href ? (
            <Link key={a.title} href={a.href} className="group block min-w-0">
              {inner}
            </Link>
          ) : (
            <article key={a.title} className="min-w-0">
              {inner}
            </article>
          );
        })}
      </div>
    </section>
  );
}
