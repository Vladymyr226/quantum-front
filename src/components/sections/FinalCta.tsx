"use client";

import { type FormEvent, useState } from "react";
import { ImageTrail } from "@/components/ui/ImageTrail";

// Every course photo (the same sets shown in the Courses section) — these are
// what trail the cursor across the CTA. Files live in public/courses/<cat>/NN.jpg.
const pad = (i: number) => String(i + 1).padStart(2, "0");
const COURSE_PHOTOS: string[] = [
  ...Array.from({ length: 15 }, (_, i) => `/courses/mediabuyer/${pad(i)}.jpg`),
  ...Array.from({ length: 9 }, (_, i) => `/courses/affiliate/${pad(i)}.jpg`),
  ...Array.from({ length: 20 }, (_, i) => `/courses/smm/${pad(i)}.jpg`),
];

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

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M5 12.5 10 17.5 19 7" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
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
      <path d="M6 6 18 18M18 6 6 18" />
    </svg>
  );
}

/**
 * Final CTA — «ОНЛАЙН-РЕКЛАМА ПОТРІБНА ЗАВЖДИ!» + lead form.
 * Light section; course photos trail the cursor behind the heading.
 * Submit is a stub: swaps the button to «НАДІСЛАНО ✓» and shows a thank-you toast.
 * Figma: MOB 30:625 (PC mirrors under 30:2).
 */
export function FinalCta() {
  const [name, setName] = useState("");
  const [telegram, setTelegram] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showThanks, setShowThanks] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setShowThanks(true);
  }

  const inputCls =
    "w-full border-b border-ink bg-transparent py-3 text-center text-[18px] text-ink placeholder:text-ink focus:outline-none lg:text-[20px]";

  return (
    <section className="bg-white text-ink">
      <div className="mx-auto max-w-[1920px] p-5 lg:p-[70px]">
        {/* Trail zone — the cursor only spawns photos over the heading + subtitle */}
        <ImageTrail
          images={COURSE_PHOTOS}
          className="relative flex min-h-[58svh] flex-col items-center justify-center lg:min-h-[62svh]"
        >
          <h2 className="text-center font-heading text-[67px] leading-[0.95] font-extrabold tracking-[-0.03em] text-balance uppercase lg:text-[110px]">
            Онлайн-реклама потрібна завжди!
          </h2>

          <p className="mt-16 text-center text-[18px] text-ink/70 lg:text-[22px]">
            Залиш контакт — підберемо курс для тебе
          </p>
        </ImageTrail>

        {/* Form zone — no trail here or below */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-4 flex w-full max-w-[818px] flex-col items-center gap-5"
        >
          <input
            type="text"
            placeholder="Ім'я"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={ inputCls}
          />
          <input
            type="text"
            placeholder="Telegram"
            value={telegram}
            onChange={(e) => setTelegram(e.target.value)}
            className={`${inputCls} mt-[-20px]`}
          />
          <input
            type="tel"
            placeholder="Номер телефону"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={`${inputCls} mt-[-20px]`}
          />

          {/* Same button as the Lesson form (inverted for the light section) */}
          <button
            type="submit"
            className="group relative mt-8 flex h-[70px] w-full lg:w-[280px] items-center overflow-hidden rounded-[16px] bg-ink pr-[64px] pl-7 text-white"
          >
            <span className="text-[22px] font-medium whitespace-nowrap transition-opacity duration-500 group-hover:opacity-0">
              {submitted ? "НАДІСЛАНО" : "НАДІСЛАТИ"}
            </span>
            <i className="absolute top-1.5 right-1.5 bottom-1.5 z-10 grid w-[54px] place-items-center rounded-[10px] bg-white text-ink transition-all duration-500 group-hover:w-[calc(100%-0.75rem)] group-active:scale-95">
              {submitted ? (
                <CheckIcon className="size-[18px]" />
              ) : (
                <ArrowRight className="size-[18px]" />
              )}
            </i>
          </button>

          <p className="mt-2 text-center text-[14px] text-ink/50 lg:text-[16px]">
            Залишаючи заявку ви погоджуєтесь з умовами{" "}
            <a href="#" className="underline underline-offset-2 hover:text-ink">
              договору-оферти
            </a>{" "}
            і{" "}
            <a href="#" className="underline underline-offset-2 hover:text-ink">
              політикою конфіденційності
            </a>
            .
          </p>
        </form>
      </div>

      {/* Thank-you toast (stub submit) — bottom-right on desktop, bottom on mobile */}
      {showThanks && (
        <div
          role="status"
          aria-live="polite"
          className="fixed right-5 bottom-5 left-5 z-50 animate-toast-in sm:left-auto sm:w-[590px]"
        >
          <div className="relative rounded-[16px] bg-white p-10 text-[#262626] shadow-2xl lg:p-16">
            <button
              type="button"
              onClick={() => setShowThanks(false)}
              aria-label="Закрити"
              className="absolute top-4 right-4 grid size-8 place-items-center transition-opacity hover:opacity-60"
            >
              <CloseIcon className="size-6" />
            </button>
            <p className="pr-8 text-[32px] leading-tight">Дякуємо!</p>
            <p className="mt-2 text-[22px] text-[#262626]/70">
              Менеджер зв&apos;яжеться з тобою найближчим часом.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
