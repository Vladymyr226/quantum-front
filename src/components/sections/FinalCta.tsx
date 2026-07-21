"use client";

import { useRouter } from "next/navigation";
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

/**
 * Final CTA — «ОНЛАЙН-РЕКЛАМА ПОТРІБНА ЗАВЖДИ!» + lead form.
 * Light section; course photos trail the cursor behind the heading.
 * Submit is a stub: navigates to the /thanks page.
 * Figma: MOB 30:625 (PC mirrors under 30:2).
 */
export function FinalCta() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [telegram, setTelegram] = useState("");
  const [phone, setPhone] = useState("");

  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    const payload = { name, telegram, phone, formType: "FinalCta" };

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");

      router.push("/thanks");
    } catch {
      setStatus("error");
    }
  }

  const inputCls =
    "w-full border-b border-ink bg-transparent py-3 text-center text-[18px] text-ink placeholder:text-ink focus:outline-none lg:text-[20px]";

  return (
    <section className="bg-white text-ink">
      <div className="mx-auto max-w-[1920px] p-5 lg:p-[70px]">
        {/* Trail zone — the cursor only spawns photos over the heading + subtitle */}
        <ImageTrail
          images={COURSE_PHOTOS}
          className="relative flex min-h-[42svh] flex-col items-center justify-center lg:min-h-[48svh]"
        >
          <h2 className="text-center font-heading text-[clamp(40px,15vw,67px)] leading-[1.0] font-bold tracking-[-0.1em] text-balance uppercase lg:text-[110px]">
            Онлайн-реклама потрібна завжди!
          </h2>

          <p className="mt-8 text-center text-[18px] leading-[1.1] text-ink/70 lg:mt-10 lg:text-[22px]">
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
            className={inputCls}
            required
          />
          <input
            type="text"
            placeholder="Telegram"
            value={telegram}
            onChange={(e) => setTelegram(e.target.value)}
            className={`${inputCls} mt-[-20px]`}
            required
          />
          <input
            type="tel"
            placeholder="Номер телефону"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={`${inputCls} mt-[-20px]`}
            required
          />
          {status === "error" && (
            <p className="text-sm text-red-600">
              Помилка відправки. Спробуйте ще раз.
            </p>
          )}

          {/* Same button as the Lesson form (inverted for the light section) */}
          <button
            type="submit"
            disabled={status === "submitting"}
            className="group relative mt-8 flex h-[70px] w-full items-center overflow-hidden rounded-[16px] bg-ink pr-[64px] pl-7 text-white disabled:opacity-70 lg:w-[280px]"
          >
            <span className="text-[22px] font-medium whitespace-nowrap transition-opacity duration-500 group-hover:opacity-0">
              {status === "submitting" ? "ВІДПРАВКА..." : "НАДІСЛАТИ"}
            </span>
            <i className="absolute top-1.5 right-1.5 bottom-1.5 z-10 grid w-[54px] place-items-center rounded-[10px] bg-white text-ink transition-all duration-500 group-hover:w-[calc(100%-0.75rem)] group-active:scale-95">
              <ArrowRight className="size-[18px]" />
            </i>
          </button>

          <p className="mt-2 text-center text-[14px] text-ink/50 lg:text-[16px]">
            Залишаючи заявку ви погоджуєтесь з умовами
            <br />
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
    </section>
  );
}
