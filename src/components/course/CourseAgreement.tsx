import Image from "next/image";

export function CourseAgreement() {
  return (
    <section className="bg-[#f2f2f2] text-ink">
      <div className="mx-auto max-w-[1320px] px-5 py-16 lg:px-10 lg:py-24">
        <div className="lg:mx-auto lg:w-fit">
          <h2 className="text-center font-heading text-[34px] leading-[0.98] font-bold tracking-[-0.01em] uppercase lg:text-[clamp(38px,4.7vw,62px)]">
            Ми навчаємо <br className="lg:hidden" />
            за договором
          </h2>

          <div className="mt-8 flex flex-col items-center gap-9 lg:mt-12 lg:flex-row lg:justify-between lg:gap-10">
            <p className="max-w-[480px] text-center text-[16px] leading-[1.5] text-ink/70 lg:max-w-[560px] lg:text-left lg:text-[24px]">
              Всі умови навчання — зафіксовані
              <br className="lg:hidden" /> юридично.
              <br className="hidden lg:block" /> Підписуємо онлайн —
              <br className="lg:hidden" /> швидко та офіційно.
            </p>

            <div className="flex items-center gap-7 lg:gap-9">
              <Image
                src="/agreement/sign.png"
                alt="Електронний підпис"
                width={112}
                height={112}
                unoptimized
                className="size-[84px] object-contain lg:size-[104px]"
              />
              <span className="w-px self-stretch bg-[#262626]" aria-hidden />
              <Image
                src="/agreement/diia.png"
                alt="Дія"
                width={112}
                height={112}
                unoptimized
                className="size-[84px] object-contain lg:size-[104px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
