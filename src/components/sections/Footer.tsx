import Image from "next/image";
import Link from "next/link";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
    </svg>
  );
}

const COURSE_LINKS = [
  { label: "Медіабаєр", href: "/courses/mediabuyer" },
  { label: "Афілейт спеціаліст", href: "/courses/affiliate" },
  { label: "SMM спеціаліст", href: "/courses/smm" },
];

const LEGAL_LINKS = [
  { label: "Публічна оферта", href: "#" },
  { label: "Політика конфіденційності", href: "#" },
];

const linkCls = "transition-opacity hover:opacity-70";
const headingCls =
  "mb-6 text-[14px] text-muted lg:mb-[calc(14*var(--u))] lg:text-[calc(14*var(--u))]";
const itemCls =
  "text-[18px] leading-snug lg:text-[calc(22*var(--u))] lg:leading-[1.41]";

function Logo() {
  return (
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
        className="h-[36px] w-auto lg:h-[calc(42*var(--u))]"
      />
    </Link>
  );
}

function LinkNav({
  title,
  links,
  clickable = true,
}: {
  title: string;
  links: { label: string; href: string }[];
  clickable?: boolean;
}) {
  return (
    <nav className="flex flex-col lg:pt-[calc(13*var(--u))]">
      <p className={headingCls}>{title}</p>
      <ul className="space-y-3 lg:space-y-0">
        {links.map((l) => (
          <li key={l.label}>
            {clickable ? (
              <a href={l.href} className={`${itemCls} ${linkCls}`}>
                {l.label}
              </a>
            ) : (
              <span className={itemCls}>{l.label}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Contacts() {
  return (
    <div className="flex flex-col lg:pt-[calc(13*var(--u))]">
      <p className={headingCls}>/ контакти</p>
      <a
        href="https://t.me/quantum_aff"
        target="_blank"
        rel="noreferrer"
        className={`${itemCls} ${linkCls}`}
      >
        @quantum_aff
      </a>
      <div className="mt-6 flex gap-3 lg:mt-[calc(16*var(--u))] lg:gap-[calc(8*var(--u))]">
        <span
          aria-hidden
          className="grid size-11 place-items-center rounded-[10px] bg-white text-[#262626] lg:size-[calc(40*var(--u))] lg:rounded-[calc(10*var(--u))]"
        >
          <InstagramIcon className="size-6 lg:size-[calc(24*var(--u))]" />
        </span>
        <span
          aria-hidden
          className="grid size-11 place-items-center rounded-[10px] bg-white text-[#262626] lg:size-[calc(40*var(--u))] lg:rounded-[calc(10*var(--u))]"
        >
          <TelegramIcon className="size-6 lg:size-[calc(24*var(--u))]" />
        </span>
      </div>
    </div>
  );
}

function Copyright() {
  return (
    <p className="text-[14px] whitespace-nowrap text-muted lg:text-[calc(13*var(--u))]">
      © 2026 Quantum.
      <br className="lg:hidden" /> Всі права захищені.
    </p>
  );
}

export function Footer() {
  return (
    <footer className="footer-bg text-foreground">
      <div className="mx-auto max-w-[1920px] px-5 py-14 lg:px-[calc(70*var(--u))] lg:pt-[calc(68*var(--u))] lg:pb-[calc(63*var(--u))]">
        <div className="lg:hidden">
          <Logo />
          <div className="mt-14 flex gap-6 min-[420px]:gap-[50px]">
            <div className="flex min-w-0 flex-col gap-12">
              <LinkNav title="/ курси" links={COURSE_LINKS} />
              <LinkNav
                title="/ відповідальність"
                links={LEGAL_LINKS}
                clickable={false}
              />
            </div>
            <div className="flex min-w-0 shrink-0 flex-col">
              <Contacts />
              <div className="mt-auto pt-12">
                <Copyright />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex lg:items-stretch lg:justify-between lg:gap-[calc(40*var(--u))]">
          <div className="flex flex-col items-start justify-between gap-10 lg:gap-[calc(40*var(--u))]">
            <Logo />
            <Copyright />
          </div>
          <LinkNav title="/ курси" links={COURSE_LINKS} />
          <Contacts />
          <LinkNav
            title="/ відповідальність"
            links={LEGAL_LINKS}
            clickable={false}
          />
        </div>
      </div>
    </footer>
  );
}
