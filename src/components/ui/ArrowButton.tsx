import type { ReactNode } from "react";

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

const VARIANTS = {
  light: { base: "bg-surface text-ink", box: "bg-ink text-white" },
  dark: { base: "bg-ink text-white", box: "bg-white text-ink" },
} as const;

export type ArrowButtonProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof VARIANTS;
  className?: string;
};

export function ArrowButton({
  href,
  children,
  variant = "light",
  className = "",
}: ArrowButtonProps) {
  const v = VARIANTS[variant];
  return (
    <a
      href={href}
      className={`group relative inline-flex min-h-[72px] w-full items-center overflow-hidden rounded-[14px] py-2.5 pr-[112px] pl-6 text-[16px] leading-[1.1] font-normal tracking-normal sm:w-auto sm:pr-[118px] sm:pl-7 ${v.base} ${className}`}
    >
      <span className="text-balance uppercase transition-opacity duration-500 group-hover:opacity-0">
        {children}
      </span>
      <i
        className={`absolute top-2 right-2 bottom-2 z-10 grid w-[52px] place-items-center rounded-[10px] transition-all duration-500 group-hover:w-[calc(100%-1rem)] group-active:scale-95 sm:w-[56px] ${v.box}`}
      >
        <ArrowRight className="size-[18px]" />
      </i>
    </a>
  );
}
