"use client";

import Image from "next/image";
import { type FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
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
      className={className}
    >
      <path d="M6 6 18 18M18 6 6 18" />
    </svg>
  );
}

/**
 * "Що таке афілейт маркетинг?" — free-lesson section (dark block).
 * Clicking the video reveals a caption (the video itself does not play).
 * PC 30:103, MOB 30:583.
 */
export function Lesson() {
  const router = useRouter();
  const [showCaption, setShowCaption] = useState(false);
  const [telegram, setTelegram] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    const payload = {
      name: "Клієнт з уроку",
      phone: "Не вказано",
      telegram,
      formType: "Lesson",
    };

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");

      setSubmitted(true);
      setShowThanks(true);
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="lesson-bg relative overflow-hidden text-foreground">
      {/* Background Q mark (downloaded SVG — faint overlay), desktop only,
        raised toward the heading. */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-[62%] right-[1%] hidden aspect-840/751 h-[76%] -translate-y-1/2 bg-[url('/marketing/Vector-v2.svg')] bg-contain bg-no-repeat opacity-[2%] lg:block"
      />

      <div className="relative mx-auto max-w-[1920px] space-y-10 px-5 py-20 lg:grid lg:grid-cols-[calc(615*var(--u))_1fr] lg:grid-rows-[auto_1fr] lg:space-y-0 lg:gap-x-[calc(75*var(--u))] lg:gap-y-12 lg:px-[calc(70*var(--u))] lg:py-[calc(150*var(--u))]">
        {/* Text — top-right on desktop, first on mobile */}
        <div className="min-w-0 lg:col-start-2 lg:row-start-1">
          <h2 className="font-heading text-[clamp(30px,10.5vw,50px)] leading-[1.1] font-bold tracking-[-0.03em] uppercase lg:-mt-[calc(14*var(--u))] lg:-ml-[calc(5*var(--u))] lg:text-[calc(70*var(--u))] lg:tracking-[-0.05em]">
            Що таке афілейт маркетинг?
          </h2>

          <div className="mt-8 flex items-center gap-3 lg:mt-[calc(25*var(--u))] lg:gap-[calc(21*var(--u))]">
            <span className="size-[15px] shrink-0 rounded-[4px] bg-foreground lg:size-[calc(17*var(--u))] lg:rounded-[calc(4*var(--u))]" />
            <span className="text-[28px] font-bold lg:text-[calc(32*var(--u))]">
              Безкоштовний урок
            </span>
          </div>

          <dl className="mt-8 space-y-6 lg:mt-[calc(32*var(--u))] lg:space-y-[calc(18*var(--u))]">
            <div>
              <dt className="text-[14px] tracking-[-0.01em] text-muted">
                / про що
              </dt>
              <dd className="mt-1.5 text-[22px] leading-[1.2] whitespace-pre-line lg:mt-0 lg:text-[calc(32*var(--u))] lg:whitespace-normal">
                {"Пояснює як влаштована сфера\nі де тут гроші"}
              </dd>
            </div>
            <div>
              <dt className="text-[14px] tracking-[-0.01em] text-muted">
                / тривалість
              </dt>
              <dd className="mt-1.5 text-[22px] leading-[1.2] lg:mt-0 lg:text-[calc(32*var(--u))]">
                40 хв
              </dd>
            </div>
          </dl>
        </div>

        {/* Video — left column (spans both rows) on desktop, middle on mobile */}
        <div className="min-w-0 lg:col-start-1 lg:row-span-2 lg:row-start-1">
          <button
            type="button"
            onClick={() => setShowCaption((v) => !v)}
            className="group relative block aspect-615/600 w-full overflow-hidden rounded-[16px] bg-black/40"
          >
            <Image
              src="/marketing/Frame1.png"
              alt="Безкоштовний урок — що таке афілейт маркетинг"
              fill
              quality={90}
              sizes="(max-width: 1024px) 100vw, 615px"
              className="object-cover"
            />

            {/* Play button (decorative — the video does not play) */}
            <span className="pointer-events-none absolute inset-0 grid place-items-center">
              <span className="grid size-[76px] place-items-center rounded-full bg-white text-[#262626] shadow-lg transition-transform duration-300 group-hover:scale-110 lg:size-[calc(149*var(--u))]">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  aria-hidden="true"
                  className="size-10 translate-x-0.5 lg:size-[calc(97*var(--u))]"
                >
                  <path d="M9 6.5 18.5 12 9 17.5Z" />
                </svg>
              </span>
            </span>

            {/* Caption — appears on click */}
            <span
              className={`absolute inset-x-12 bottom-12 rounded-[10px] bg-black/85 px-12 py-4 text-center text-[14px] text-white backdrop-blur-sm transition-all duration-300 lg:text-[22px] ${
                showCaption
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none translate-y-3 opacity-0"
              }`}
            >
              Щоб отримати урок{" "}
              <span className="font-semibold">залиш твій Telegram</span>
            </span>
          </button>
        </div>

        {/* Form — bottom-right on desktop, last on mobile */}
        <div className="min-w-0 lg:col-start-2 lg:row-start-2 lg:self-end">
          <form
            onSubmit={handleSubmit}
            className="relative flex w-full max-w-[626px] flex-col gap-3 sm:block"
          >
            <input
              type="text"
              placeholder="@Твій Telegram"
              value={telegram}
              onChange={(e) => setTelegram(e.target.value)}
              className="h-[70px] w-full rounded-[16px] border border-white bg-transparent px-6 text-center text-[20px] text-foreground placeholder:text-white focus:border-white/40 focus:outline-none sm:pr-[343px] lg:text-[22px]"
              required
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="group relative flex h-[70px] w-full items-center overflow-hidden rounded-[16px] bg-surface pr-[64px] pl-7 text-ink disabled:opacity-70 sm:absolute sm:inset-y-0 sm:right-0 sm:w-[307px] sm:rounded-[12px] sm:pl-[39px]"
            >
              <span className="text-[18px] font-medium whitespace-nowrap transition-opacity duration-500 group-hover:opacity-0">
                {status === "submitting"
                  ? "ВІДПРАВКА..."
                  : submitted
                    ? "НАДІСЛАНО"
                    : "ОТРИМАТИ УРОК"}
              </span>
              <i className="absolute top-1.5 right-1.5 bottom-1.5 z-10 grid w-[54px] place-items-center rounded-[10px] bg-[#262626] text-white transition-all duration-500 group-hover:w-[calc(100%-0.75rem)] group-active:scale-95">
                {submitted ? (
                  <CheckIcon className="size-[18px]" />
                ) : (
                  <ArrowRight className="size-[18px]" />
                )}
              </i>
            </button>
          </form>
          {status === "error" && (
            <p className="mt-2 text-sm text-red-400">
              Помилка відправки. Спробуйте ще раз.
            </p>
          )}
        </div>
      </div>

      {/* Thank-you toast */}
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
              Менеджер надішле урок найближчим часом.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
