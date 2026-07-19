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
    <span
      role="img"
      aria-label="QUANTUM"
      className="block h-[28px] w-[142px] shrink-0 bg-ink lg:h-[30px] lg:w-[152px]"
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
  );
}

export default function ThanksPage() {
  return (
    <main className="w-full min-w-0 flex-1">
      <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#ededed] text-ink">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 hidden bg-[url('/thanks/q-desktop-v2.svg')] bg-[length:auto_100%] bg-center bg-no-repeat opacity-[0.055] lg:block"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 bg-[url('/thanks/q-mobile.svg')] bg-cover bg-top bg-no-repeat opacity-[0.07] lg:hidden"
        />

        <header className="relative z-10 flex justify-center p-5 lg:pt-[50px]">
          <Logo />
        </header>

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pb-[9vh] text-center">
          <h1 className="font-heading text-[14vw] leading-[0.85] font-bold tracking-[-0.02em] text-ink uppercase select-none lg:text-[clamp(120px,13vw,190px)]">
            Дякуємо
          </h1>

          <p className="mt-6 max-w-[620px] text-[14px] leading-[1.45] font-normal text-ink lg:mt-8 lg:text-[18px]">
            Менеджер Quantum вже бачить твою заявку. <br />
            Він зв&apos;яжеться з тобою, розкаже про курс <br />і відповість на
            всі питання.
          </p>

          <Link
            href="/"
            className="group relative mt-8 inline-flex h-[52px] items-center overflow-hidden rounded-[12px] bg-white px-7 text-ink shadow-sm transition-shadow hover:shadow-md lg:mt-10 lg:h-[54px]"
          >
            <span
              aria-hidden
              className="absolute inset-0 origin-left scale-x-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-x-100"
            />
            <span className="relative z-10 text-[15px] font-medium whitespace-nowrap transition-colors duration-300 group-hover:text-white lg:text-[16px]">
              На головну
            </span>
            <ArrowRight className="relative z-10 ml-2.5 size-[16px] shrink-0 transition-all duration-500 ease-out group-hover:translate-x-1.5 group-hover:text-white" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
