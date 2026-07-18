import Image from "next/image";
import Link from "next/link";

import { Footer } from "@/components/sections/Footer";

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

export default function NotFound() {
  return (
    <main className="w-full min-w-0 flex-1">
      <section className="relative flex min-h-[100svh] flex-col overflow-hidden">
        <div aria-hidden className="nf-bg absolute inset-0 -z-10" />
        <header className="flex justify-center p-5 lg:pt-[50px]">
          <Image
            src="/hero/logo.svg"
            alt="QUANTUM"
            width={207}
            height={41}
            priority
            className="h-[28px] w-auto lg:h-[40px]"
          />
        </header>

        <div className="flex flex-1 flex-col items-center justify-center px-5 pb-[9vh] text-center">
          <p className="font-heading text-[44vw] leading-[0.8] font-bold tracking-[-0.02em] text-white/75 mix-blend-difference select-none lg:text-[clamp(320px,33vw,560px)]">
            404
          </p>

          <p className="mt-5 max-w-[560px] text-[15px] leading-[1.35] font-normal text-white/85 lg:mt-7 lg:text-[17px]">
            Ця сторінка як трафік який <br className="lg:hidden" />
            не конвертує — її тут немає.
          </p>

          <Link
            href="/"
            className="group relative mt-7 inline-flex h-[52px] items-center overflow-hidden rounded-[12px] bg-white px-7 text-ink shadow-sm transition-shadow hover:shadow-md lg:mt-8 lg:h-[54px]"
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
