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

    const payload = { course: slug, name, telegram, phone };

    try {
      // TODO: connect the per-course application endpoint here, e.g.
      //   const res = await fetch("/api/apply", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify(payload),
      //   });
      //   if (!res.ok) throw new Error("Request failed");
      void payload;
      router.push("/thanks");
    } catch {
      setStatus("error");
    }
  }

  const inputCls =
    "w-full border-b border-ink/15 bg-transparent py-5 text-center text-[16px] text-ink transition-colors placeholder:text-ink focus:border-ink/45 focus:outline-none lg:text-[18px]";

  return (
    <section id="apply" className="-mt-px scroll-mt-6 bg-white text-ink">
      <div className="mx-auto max-w-[820px] px-5 py-20 lg:py-28">
        <h2 className="text-center font-heading text-[38px] leading-[1.0] font-bold tracking-[-0.01em] uppercase lg:text-[clamp(40px,5.6vw,58px)]">
          Залишити заявку
        </h2>
        <p className="mx-auto mt-4 max-w-[640px] text-center text-[16px] leading-[1.4] text-ink/70 lg:mt-5 lg:max-w-none lg:text-[18px]">
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

        <form onSubmit={handleSubmit} className="mt-12 flex flex-col lg:mt-14">
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
            onChange={(e) => setPhone(e.target.value)}
            className={inputCls}
          />

          <button
            type="submit"
            disabled={status === "submitting"}
            className="group relative mx-auto mt-10 flex h-[70px] w-full items-center overflow-hidden rounded-[16px] bg-ink pr-[64px] pl-7 text-white lg:w-[280px]"
          >
            <span className="text-[20px] font-medium whitespace-nowrap transition-opacity duration-500 group-hover:opacity-0">
              {status === "submitting" ? "НАДСИЛАЄМО…" : "НАДІСЛАТИ"}
            </span>
            <i className="absolute top-1.5 right-1.5 bottom-1.5 z-10 grid w-[54px] place-items-center rounded-[10px] bg-white text-ink transition-all duration-500 group-hover:w-[calc(100%-0.75rem)] group-active:scale-95">
              <ArrowRight className="size-[18px]" />
            </i>
          </button>

          <p className="mx-auto mt-6 max-w-[420px] text-center text-[13px] leading-[1.4] text-ink/50 lg:max-w-none lg:text-[14px]">
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
