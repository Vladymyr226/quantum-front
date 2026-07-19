"use client";

import { useState, useSyncExternalStore } from "react";
import Image from "next/image";

import type {
  CareerBadge,
  CareerJob,
  CourseCareerData,
} from "@/content/courses";

const iconBase = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function HryvniaIcon({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-flex shrink-0 items-center justify-center leading-none font-semibold ${className}`}
    >
      ₴
    </span>
  );
}

function CityIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...iconBase} aria-hidden>
      <path d="M3 21h18" />
      <path d="M5 21V6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v15" />
      <path d="M12 21V10a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v11" />
      <path d="M8 9h0M8 12.5h0M8 16h0M15 12.5h0M15 16h0" />
    </svg>
  );
}

function HeartIcon({
  className,
  filled = false,
}: {
  className?: string;
  filled?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      {...iconBase}
      fill={filled ? "currentColor" : "none"}
      aria-hidden
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
    </svg>
  );
}

const SAVED_JOBS_KEY = "quantum:saved-jobs";

function readSavedJobs(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(SAVED_JOBS_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

const savedJobsListeners = new Set<() => void>();

function subscribeSavedJobs(cb: () => void) {
  savedJobsListeners.add(cb);
  window.addEventListener("storage", cb);
  return () => {
    savedJobsListeners.delete(cb);
    window.removeEventListener("storage", cb);
  };
}

function toggleSavedJob(jobKey: string) {
  const list = readSavedJobs();
  const next = list.includes(jobKey)
    ? list.filter((k) => k !== jobKey)
    : [...list, jobKey];
  try {
    window.localStorage.setItem(SAVED_JOBS_KEY, JSON.stringify(next));
  } catch {
    /* storage unavailable (private mode / quota) — no-op */
  }
  savedJobsListeners.forEach((l) => l());
}

/** Toggle-saves the job to localStorage; persists across sessions. */
function SaveButton({ jobKey }: { jobKey: string }) {
  const saved = useSyncExternalStore(
    subscribeSavedJobs,
    () => readSavedJobs().includes(jobKey),
    () => false,
  );

  return (
    <button
      type="button"
      onClick={() => toggleSavedJob(jobKey)}
      aria-pressed={saved}
      className={`inline-flex items-center gap-1.5 transition-colors ${
        saved ? "text-ink" : "text-ink/55 hover:text-ink"
      }`}
    >
      <HeartIcon className="size-[18px]" filled={saved} />
      {saved ? "Збережено" : "Зберегти"}
    </button>
  );
}

function FlameIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
      fill="currentColor"
    >
      <path d="M12.8 2.3c.2 2.3-.9 3.6-2.1 4.9-1.3 1.4-2.8 3-2.8 5.6a6.1 6.1 0 1 0 12.2 0c0-2.2-1-3.8-2-5.1-.4 1-1.1 1.6-1.9 1.6-.2-3.1-1.7-5.2-3.4-7Z" />
    </svg>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...iconBase} aria-hidden>
      <rect x="5" y="10.5" width="14" height="9.5" rx="2.2" />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
    </svg>
  );
}

function TopBadge({ kind }: { kind: CareerBadge }) {
  if (kind === "hot") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ffe6dc] px-3 py-1.5 text-[13px] font-medium text-[#df5a2c]">
        <FlameIcon className="size-4" />
        Гаряча
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#dff2e6] px-3 py-1.5 text-[13px] font-medium text-[#2f9e63]">
      <LockIcon className="size-4" />
      Бронювання
    </span>
  );
}

function JobCard({ job }: { job: CareerJob }) {
  return (
    <div className="flex h-full flex-col rounded-[18px] bg-white p-7 text-ink shadow-[0_30px_60px_-24px_rgba(0,0,0,0.5)] lg:p-8">
      {job.badges && job.badges.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {job.badges.map((b) => (
            <TopBadge key={b} kind={b} />
          ))}
        </div>
      )}

      <h4 className="text-[22px] leading-[1.25] font-bold text-ink lg:text-[25px]">
        {job.title}
      </h4>

      <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[16px]">
        <span className="inline-flex items-center gap-2 font-medium text-ink">
          <HryvniaIcon className="size-[20px] text-[17px] text-ink/45" />
          {job.salary}
        </span>
        {job.salaryNote && (
          <span className="rounded-full bg-[#ece4fb] px-3 py-1 text-[13px] font-medium text-[#7a58d6]">
            {job.salaryNote}
          </span>
        )}
      </div>

      <div className="mt-3 flex items-center gap-2 text-[16px] text-ink/70">
        <CityIcon className="size-[20px] text-ink/45" />
        {job.location}
      </div>

      <p className="mt-5 line-clamp-3 text-[15px] leading-[1.6] text-ink/55 lg:line-clamp-4 lg:text-[16px]">
        {job.description}
      </p>

      <div className="mt-auto flex items-center justify-between pt-6 text-[14px] text-ink/45">
        <span>{job.posted ?? " "}</span>
        <SaveButton jobKey={job.title} />
      </div>
    </div>
  );
}

export function CourseCareer({
  heading,
  subtitle,
  positionsTitle,
  image,
  positions,
}: CourseCareerData) {
  const [active, setActive] = useState(0);

  return (
    <section className="relative -mt-px overflow-hidden bg-[#0a0a0a] text-white">
      <div className="absolute inset-x-0 top-[200px] h-[330px] lg:top-0 lg:h-full">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center grayscale"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1600px] flex-col px-5 py-14 lg:min-h-[900px] lg:px-10 lg:py-24">
        <div className="max-w-[560px]">
          <h2 className="font-heading text-[38px] leading-[0.98] font-bold tracking-[-0.01em] uppercase lg:text-[54px]">
            {heading.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-4 max-w-[350px] text-[15px] leading-[1.4] text-white/80">
            {subtitle.map((run, i) =>
              run.bold ? (
                <strong key={i} className="font-semibold text-white">
                  {run.text}
                </strong>
              ) : (
                <span key={i}>{run.text}</span>
              ),
            )}
          </p>
        </div>

        <div className="h-[220px] shrink-0 lg:hidden" />

        <div className="mt-8 flex flex-col-reverse gap-6 lg:mt-auto lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="relative h-[334px] w-full lg:h-[348px] lg:max-w-[600px]">
            {positions.map((position, i) => (
              <div
                key={i}
                aria-hidden={i !== active}
                className={`absolute inset-0 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                  i === active
                    ? "z-10 scale-100 opacity-100"
                    : "pointer-events-none z-0 scale-[0.98] opacity-0"
                }`}
              >
                <JobCard job={position.job} />
              </div>
            ))}
          </div>

          <div className="w-full rounded-[18px] bg-black/35 p-6 backdrop-blur-md lg:max-w-[430px] lg:p-8">
            <p className="text-[13px] text-white">{positionsTitle}</p>
            <ul className="mt-4 space-y-3.5 lg:mt-6 lg:space-y-4">
              {positions.map((position, i) => {
                const isActive = i === active;
                return (
                  <li key={position.label}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-pressed={isActive}
                      className={`text-left text-[18px] leading-[1.2] transition-colors lg:text-[22px] ${
                        isActive
                          ? "text-white"
                          : "text-white/55 hover:text-white/85"
                      }`}
                    >
                      {position.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
