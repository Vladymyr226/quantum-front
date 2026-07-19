import Link from "next/link";

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

export function HomeButton({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group relative inline-flex h-[48px] shrink-0 items-center overflow-hidden rounded-[12px] bg-white pr-6 pl-7 text-ink shadow-sm transition-shadow hover:shadow-md lg:h-[54px] ${className}`}
    >
      <span
        aria-hidden
        className="absolute inset-0 origin-left scale-x-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-x-100"
      />
      <span className="relative z-10 text-[14px] font-medium whitespace-nowrap transition-colors duration-300 group-hover:text-white lg:text-[16px]">
        На головну
      </span>
      <ArrowRight className="relative z-10 ml-2.5 size-[16px] shrink-0 transition-all duration-500 ease-out group-hover:translate-x-1.5 group-hover:text-white" />
    </Link>
  );
}
