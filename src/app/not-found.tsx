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
      <section className="relative flex min-h-[100svh] flex-col overflow-hidden lg:h-[calc(882*var(--u))] lg:min-h-0">
        <div aria-hidden className="nf-bg absolute inset-0 -z-10" />
        <header className="flex justify-center p-5 lg:pt-[calc(73*var(--u))] lg:pb-0">
          <Link
            href="/"
            aria-label="QUANTUM — на головну"
            className="inline-block transition-opacity hover:opacity-80"
          >
            <Image
              src="/hero/logo.svg"
              alt="QUANTUM"
              width={207}
              height={41}
              priority
              className="h-[28px] w-auto lg:h-[calc(41*var(--u))]"
            />
          </Link>
        </header>

        <div className="mt-[12vh] flex flex-1 flex-col items-center justify-center px-5 pb-[9vh] text-center lg:mt-[calc(45*var(--u))] lg:flex-none lg:justify-start lg:pb-0">
          <p className="font-heading text-[44vw] leading-[0.8] font-bold tracking-[-0.02em] text-white mix-blend-difference select-none lg:relative lg:top-[calc(2*var(--u))] lg:right-[calc(13*var(--u))] lg:text-[calc(612*var(--u))] lg:tracking-normal">
            404
          </p>

          <p className="mt-5 max-w-[560px] text-[15px] leading-[1.35] font-normal text-white lg:mt-[calc(20*var(--u))] lg:max-w-[calc(700*var(--u))] lg:text-[calc(22*var(--u))]">
            Ця сторінка як трафік який <br className="lg:hidden" />
            не конвертує — її тут немає.
          </p>

          <Link
            href="/"
            className="group relative mt-7 inline-flex h-[52px] items-center overflow-hidden rounded-[12px] bg-white px-7 text-ink shadow-sm transition-shadow hover:shadow-md lg:mt-[calc(14*var(--u))] lg:h-[calc(69*var(--u))] lg:rounded-[calc(10*var(--u))] lg:px-[calc(51*var(--u))]"
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
