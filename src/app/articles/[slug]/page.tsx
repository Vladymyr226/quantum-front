import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticleInfo } from "@/components/article/ArticleInfo";
import { HomeButton } from "@/components/ui/HomeButton";
import { Lesson } from "@/components/sections/Lesson";
import { Footer } from "@/components/sections/Footer";
import { articles, getArticle } from "@/content/articles";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return { title: `${article.title} — QUANTUM` };
}

function Logo() {
  return (
    <span
      role="img"
      aria-label="QUANTUM"
      className="block h-[34px] w-[173px] shrink-0 bg-ink min-[440px]:h-[42px] min-[440px]:w-[213px] lg:h-[30px] lg:w-[152px]"
      style={{
        maskImage: "url(/hero/logo.svg)",
        WebkitMaskImage: "url(/hero/logo.svg)",
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "left center",
        WebkitMaskPosition: "left center",
      }}
    />
  );
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <main className="w-full min-w-0 flex-1">
      <div className="bg-[#f2f2f2] text-ink">
        <header className="flex items-center justify-between px-5 py-5 lg:px-10 lg:py-8">
          <Logo />
          <HomeButton />
        </header>

        <ArticleInfo {...article.info} />
      </div>

      <Lesson />

      <Footer />
    </main>
  );
}
