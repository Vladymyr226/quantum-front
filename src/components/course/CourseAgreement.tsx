import Image from "next/image";

export function CourseAgreement() {
  return (
    <section className="bg-[#f2f2f2] text-ink">
      <div className="mx-auto max-w-[1320px] px-5 py-16 lg:max-w-[calc(1280*var(--u))] lg:px-0 lg:pt-[calc(139*var(--u))] lg:pb-[calc(150*var(--u))]">
        <h2 className="text-center font-heading text-[34px] leading-[0.98] font-bold tracking-[-0.01em] uppercase lg:-ml-[calc(5*var(--u))] lg:text-left lg:text-[calc(69*var(--u))] lg:leading-[1] lg:tracking-[-0.04em] lg:whitespace-nowrap">
          Ми навчаємо <br className="lg:hidden" />
          за договором
        </h2>

        <div className="mt-8 flex flex-col items-center gap-9 lg:mt-[calc(41*var(--u))] lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          <p className="max-w-[480px] text-center text-[16px] leading-[1.5] text-ink/85 lg:max-w-none lg:text-left lg:text-[calc(32*var(--u))] lg:leading-[calc(35*var(--u))]">
            Всі умови навчання — зафіксовані
            <br className="lg:hidden" /> юридично.
            <br className="hidden lg:block" /> Підписуємо онлайн —
            <br className="lg:hidden" /> швидко та офіційно.
          </p>

          <div className="flex items-center gap-7 lg:gap-0">
            <Image
              src="/agreement/sign.png"
              alt="Електронний підпис"
              width={170}
              height={170}
              unoptimized
              className="size-[84px] object-contain lg:size-[calc(168*var(--u))]"
            />
            <span
              className="mx-6 w-px self-stretch bg-ink lg:mx-0 lg:ml-[calc(60*var(--u))] lg:h-[calc(153*var(--u))] lg:self-auto"
              aria-hidden
            />
            <Image
              src="/agreement/diia.png"
              alt="Дія"
              width={155}
              height={155}
              unoptimized
              className="size-[84px] object-contain lg:ml-[calc(70*var(--u))] lg:size-[calc(155*var(--u))]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
