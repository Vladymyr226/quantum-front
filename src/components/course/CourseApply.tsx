"use client";

import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";

import type { CourseApplyData } from "@/content/courses";

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

const MAX_PHONE_DIGITS = 12;
function sanitizePhone(value: string) {
  let digits = 0;
  let out = "";
  for (const ch of value) {
    if (ch >= "0" && ch <= "9") {
      if (digits >= MAX_PHONE_DIGITS) continue;
      digits++;
      out += ch;
    } else if ("+()- ".includes(ch)) {
      out += ch;
    }
  }
  return out;
}

type CourseApplyProps = CourseApplyData & {
  slug: string;
};

type Status = "idle" | "submitting" | "error";

export function CourseApply({ slug, subtitle }: CourseApplyProps) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [telegram, setTelegram] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    const payload = {
      course: slug,
      name,
      telegram,
      phone,
      formType: "CourseApply",
    };

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
    "w-full border-b border-ink/15 bg-transparent py-5 text-center text-[16px] text-ink transition-colors placeholder:text-ink focus:border-ink/45 focus:outline-none lg:py-[calc(20*var(--u))] lg:text-[calc(22*var(--u))] lg:leading-[calc(25*var(--u))]";

  return (
    <section id="apply" className="-mt-px scroll-mt-6 bg-white text-ink">
      <div className="mx-auto max-w-[820px] px-5 py-20 lg:max-w-[calc(820*var(--u))] lg:px-0 lg:pt-[calc(194*var(--u))] lg:pb-[calc(177*var(--u))]">
        <h2 className="text-center font-heading text-[38px] leading-[1.0] font-bold tracking-[-0.01em] uppercase lg:text-[calc(70*var(--u))] lg:tracking-[-0.05em] lg:whitespace-nowrap">
          Залишити заявку
        </h2>
        <p className="mx-auto mt-4 max-w-[640px] text-center text-[16px] leading-[1.4] text-ink lg:mt-[calc(13*var(--u))] lg:max-w-none lg:text-[calc(22*var(--u))] lg:leading-[calc(28*var(--u))]">
          {subtitle.split("\n").map((line, i, arr) => (
            <span key={i}>
              {line}
              {i < arr.length - 1 && (
                <>
                  {" "}
                  <br className="lg:hidden" />
                </>
              )}
            </span>
          ))}
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col lg:mt-[calc(59*var(--u))]"
        >
          <input
            type="text"
            name="name"
            placeholder="Ім'я"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputCls}
          />
          <input
            type="text"
            name="telegram"
            placeholder="Telegram"
            value={telegram}
            onChange={(e) => setTelegram(e.target.value)}
            className={inputCls}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Номер телефону"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(sanitizePhone(e.target.value))}
            className={inputCls}
          />

          <button
            type="submit"
            disabled={status === "submitting"}
            className="group relative mx-auto mt-10 flex h-[70px] w-full items-center overflow-hidden rounded-[16px] bg-ink pr-[64px] pl-7 text-white lg:mt-[calc(52*var(--u))] lg:h-[calc(70*var(--u))] lg:w-[calc(280*var(--u))] lg:rounded-[calc(16*var(--u))] lg:pr-[calc(64*var(--u))] lg:pl-[calc(28*var(--u))]"
          >
            <span className="text-[20px] font-medium whitespace-nowrap transition-opacity duration-500 group-hover:opacity-0 lg:text-[calc(22*var(--u))]">
              {status === "submitting" ? "НАДСИЛАЄМО…" : "НАДІСЛАТИ"}
            </span>
            <i className="absolute top-1.5 right-1.5 bottom-1.5 z-10 grid w-[54px] place-items-center rounded-[10px] bg-white text-ink transition-all duration-500 group-hover:w-[calc(100%-0.75rem)] group-active:scale-95 lg:top-[calc(6*var(--u))] lg:right-[calc(6*var(--u))] lg:bottom-[calc(6*var(--u))] lg:w-[calc(54*var(--u))] lg:rounded-[calc(10*var(--u))]">
              <ArrowRight className="size-[18px] lg:size-[calc(18*var(--u))]" />
            </i>
          </button>

          <p className="mx-auto mt-6 max-w-[420px] text-center text-[13px] leading-[1.4] text-ink/50 lg:mt-[calc(15*var(--u))] lg:max-w-none lg:text-[calc(16*var(--u))] lg:leading-[calc(16*var(--u))]">
            Залишаючи заявку ви погоджуєтесь з умовами
            <br />
            <span className="underline underline-offset-2">
              договору-оферти
            </span>{" "}
            і{" "}
            <span className="underline underline-offset-2">
              політикою конфіденційності
            </span>
            .
          </p>
        </form>
      </div>
    </section>
  );
}
