import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Дякуємо — QUANTUM",
  robots: { index: false, follow: false },
};

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function Logo() {
  return (
    <Link
      href="/"
      aria-label="QUANTUM — на головну"
      className="inline-block shrink-0 transition-opacity hover:opacity-80"
    >
      <span
        aria-hidden
        className="block h-[28px] w-[142px] shrink-0 bg-ink lg:h-[calc(41*var(--u))] lg:w-[calc(207*var(--u))]"
        style={{
          maskImage: "url(/hero/logo.svg)",
          WebkitMaskImage: "url(/hero/logo.svg)",
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
      />
    </Link>
  );
}

export default function ThanksPage() {
  return (
    <main className="w-full min-w-0 flex-1">
      <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-surface text-ink lg:h-[calc(784*var(--u))] lg:min-h-0">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 hidden opacity-[0.04] lg:block"
          style={{
            backgroundImage: "url(/thanks/q-desktop-v2.svg)",
            backgroundSize: "calc(1708 * var(--u)) calc(1052 * var(--u))",
            backgroundPosition: "calc(110 * var(--u)) calc(3 * var(--u))",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 bg-[url('/thanks/q-mobile.svg')] bg-cover bg-top bg-no-repeat opacity-[0.07] lg:hidden"
        />

        <header className="relative z-10 flex justify-center p-5 lg:pt-[calc(73*var(--u))] lg:pb-0">
          <Logo />
        </header>

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pb-[9vh] text-center lg:mt-[calc(154*var(--u))] lg:flex-none lg:justify-start lg:pb-0">
          <h1 className="font-heading text-[14vw] leading-[0.85] font-bold tracking-[-0.02em] text-ink uppercase select-none lg:text-[calc(142*var(--u))] lg:tracking-[-0.05em]">
            Дякуємо
          </h1>

          <p className="mt-6 max-w-[620px] text-[14px] leading-[1.45] font-normal text-ink lg:mt-[calc(46*var(--u))] lg:max-w-none lg:text-[calc(22*var(--u))] lg:leading-[calc(24*var(--u))]">
            Менеджер Quantum вже бачить твою заявку. <br />
            Він зв&apos;яжеться з тобою, розкаже про курс <br />і відповість на
            всі питання.
          </p>

          <Link
            href="/"
            className="group relative mt-8 inline-flex h-[52px] items-center overflow-hidden rounded-[12px] bg-white px-7 text-ink shadow-sm transition-shadow hover:shadow-md lg:mt-[calc(56*var(--u))] lg:h-[calc(69*var(--u))] lg:rounded-[calc(10*var(--u))] lg:px-[calc(51*var(--u))]"
          >
            <span
              aria-hidden
              className="absolute inset-0 origin-left scale-x-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-x-100"
            />
            <span className="relative z-10 text-[15px] font-medium whitespace-nowrap transition-colors duration-300 group-hover:text-white lg:text-[calc(22*var(--u))]">
              На головну
            </span>
            <ArrowRight className="relative z-10 ml-2.5 size-[16px] shrink-0 transition-all duration-500 ease-out group-hover:translate-x-1.5 group-hover:text-white lg:ml-[calc(3*var(--u))] lg:size-[calc(22*var(--u))]" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
