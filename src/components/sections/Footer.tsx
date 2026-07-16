import Image from "next/image";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
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
  { label: "Медіабаєр", href: "#courses" },
  { label: "Афілейт спеціаліст", href: "#courses" },
  { label: "SMM спеціаліст", href: "#courses" },
];

const LEGAL_LINKS = [
  { label: "Публічна оферта", href: "#" },
  { label: "Політика конфіденційності", href: "#" },
];

const linkCls = "transition-opacity hover:opacity-70";
const headingCls = "mb-6 text-[14px] text-muted lg:mb-8";
const itemCls = "text-[18px] leading-snug lg:text-[22px]";

/**
 * Site footer — logo + copyright, and three link columns
 * (курси / контакти / відповідальність). Figma: MOB 30:647.
 */
export function Footer() {
  return (
    <footer className="bg-[#2b2b2b] text-foreground">
      <div className="mx-auto max-w-[1920px] px-5 py-14 lg:px-[70px] lg:py-[70px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:justify-between lg:gap-10">
          {/* Logo + copyright */}
          <div className="flex flex-col items-start justify-between gap-16 lg:gap-10">
            <Image
              src="/hero/logo.svg"
              alt="QUANTUM"
              width={207}
              height={41}
              className="h-[32px] w-auto lg:h-[40px]"
            />
            <p className="text-[13px] text-muted">
              © 2026 Quantum. Всі права захищені.
            </p>
          </div>

          {/* курси */}
          <nav className="flex flex-col">
            <p className={headingCls}>/ курси</p>
            <ul className="space-y-3">
              {COURSE_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className={`${itemCls} ${linkCls}`}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* контакти */}
          <div className="flex flex-col">
            <p className={headingCls}>/ контакти</p>
            <a
              href="https://t.me/quantum_info"
              target="_blank"
              rel="noreferrer"
              className={`${itemCls} ${linkCls}`}
            >
              @quantum_info
            </a>
            <div className="mt-6 flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid size-11 place-items-center rounded-[10px] bg-white text-[#2b2b2b] transition-opacity hover:opacity-85"
              >
                <InstagramIcon className="size-6" />
              </a>
              <a
                href="https://t.me/quantum_info"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                className="grid size-11 place-items-center rounded-[10px] bg-white text-[#2b2b2b] transition-opacity hover:opacity-85"
              >
                <TelegramIcon className="size-6" />
              </a>
            </div>
          </div>

          {/* відповідальність */}
          <nav className="flex flex-col">
            <p className={headingCls}>/ відповідальність</p>
            <ul className="space-y-3">
              {LEGAL_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className={`${itemCls} ${linkCls}`}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
