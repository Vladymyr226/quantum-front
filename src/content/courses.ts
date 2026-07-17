export type CourseHeroData = {
  title: string;
  subtitle: string;
  tags: string[];
  image: string;
  imageAlt: string;
  ctaLabel: string;
  ctaHref: string;
  background?: string;
  vectorColor?: string;
};

export type CourseTask = {
  number: string;
  title: string;
  image: string;
  imageAlt: string;
};

export type CourseTasksData = {
  heading: string;
  description: string[];
  centerTitle: string;
  tasks: CourseTask[];
};

export type CoursePayoutTier = {
  count: number;
  amount: string;
};

export type CoursePayoutData = {
  heading: string[];
  headingMobile: string[];
  image: string;
  imageAlt: string;
  personIcon: string;
  arrowIcon: string;
  tiers: CoursePayoutTier[];
  footer: string;
  footerMobile: string[];
};

export type Course = {
  slug: string;
  title: string;
  hero: CourseHeroData;
  tasks?: CourseTasksData;
  payout?: CoursePayoutData;
};

const BG_DARK =
  "radial-gradient(115% 95% at 80% -12%, #2f2f2f 0%, #262626 46%, #202020 100%)";
const BG_BLUE =
  "radial-gradient(120% 100% at 82% -12%, #6379db 0%, #5165d0 50%, #4a5cc6 100%)";

export const courses: Course[] = [
  {
    slug: "mediabuyer",
    title: "Медіабаєр",
    hero: {
      title: "Медіабаєр",
      subtitle:
        "Практичний курс по генерації трафіку, орієнтований на результат та ефективність",
      tags: ["11 модулів", "2 місяці", "практика", "джоб-офер"],
      image: "/courses/mediabuyer/hero.png",
      imageAlt: "Студент курсу «Медіабаєр»",
      ctaLabel: "Дізнайся про формати та ціни",
      ctaHref: "#formats",
      background: BG_DARK,
    },
    tasks: {
      heading: "Медіабаєр — це маркетолог",
      description: [
        "Його завдання — рекламувати товари інших бізнесів.",
        "Без продажів, переговорів і доставки — це все завдання бізнесу.",
      ],
      centerTitle: "Завдання медіабаєра:",
      tasks: [
        {
          number: "01",
          title: "Обрати вигідний товар",
          image: "/courses/mediabuyer/tasks/1.png",
          imageAlt: "Обрати вигідний товар",
        },
        {
          number: "02",
          title: "Підготувати креатив",
          image: "/courses/mediabuyer/tasks/2.png",
          imageAlt: "Підготувати креатив",
        },
        {
          number: "03",
          title: "Вибрати готовий сайт",
          image: "/courses/mediabuyer/tasks/3.png",
          imageAlt: "Вибрати готовий сайт",
        },
        {
          number: "04",
          title: "Налаштувати рекламу",
          image: "/courses/mediabuyer/tasks/4.png",
          imageAlt: "Налаштувати рекламу",
        },
        {
          number: "05",
          title: "Проаналізувати результати",
          image: "/courses/mediabuyer/tasks/5.png",
          imageAlt: "Проаналізувати результати",
        },
      ],
    },
    payout: {
      heading: [
        "Медіабаєр привів клієнта з рекламами,",
        "клієнт купив товар — медіабаєр отримав виплату",
      ],
      headingMobile: [
        "Медіабаєр привів клієнта",
        "з рекламами, клієнт купив товар —",
        "медіабаєр отримав виплату",
      ],
      image: "/courses/mediabuyer/payout/creative.png",
      imageAlt: "Рекламний креатив CARDIOTENS",
      personIcon: "/courses/mediabuyer/payout/person.svg",
      arrowIcon: "/courses/mediabuyer/payout/arrow.svg",
      tiers: [
        { count: 1, amount: "20$" },
        { count: 3, amount: "60$" },
        { count: 10, amount: "200$" },
      ],
      footer: "Більше покупок = більше доходу",
      footerMobile: ["Більше", "покупок =", "більше доходу"],
    },
  },
  {
    slug: "affiliate",
    title: "Афілейт спеціаліст",
    hero: {
      title: "Афілейт спеціаліст",
      subtitle:
        "Навчись працювати з оферами і партнерками та монетизуй трафік в десятки разів",
      tags: ["12 модулів", "2 місяці", "практика", "джоб-офер"],
      image: "/courses/affiliate/hero.png",
      imageAlt: "Студенти курсу «Афілейт спеціаліст»",
      ctaLabel: "Дізнайся про формати та ціни",
      ctaHref: "#formats",
      background: BG_BLUE,
    },
    tasks: {
      heading: "Афілейт менеджер —\nце менеджер підтримки",
      description: [
        "Його завдання — підібрати медіабаєру вигідні товари для реклами.",
        "Якщо медіабаєр заробляє — заробляє і афілейт менеджер.",
      ],
      centerTitle: "Завдання афілейта:",
      tasks: [
        {
          number: "01",
          title: "Підібрати вигідні товари для реклами",
          image: "/courses/affiliate/tasks/1.png",
          imageAlt: "Підібрати вигідні товари для реклами",
        },
        {
          number: "02",
          title: "Допомогти в організаційних моментах",
          image: "/courses/affiliate/tasks/2.png",
          imageAlt: "Допомогти в організаційних моментах",
        },
        {
          number: "03",
          title: "Перевірити результати медіабаєра",
          image: "/courses/affiliate/tasks/3.png",
          imageAlt: "Перевірити результати медіабаєра",
        },
        {
          number: "04",
          title: "Допомогти зарахувати винагороду",
          image: "/courses/affiliate/tasks/4.png",
          imageAlt: "Допомогти зарахувати винагороду",
        },
        {
          number: "05",
          title: "Розширювати базу партнерів медіабаєрів",
          image: "/courses/affiliate/tasks/5.png",
          imageAlt: "Розширювати базу партнерів медіабаєрів",
        },
      ],
    },
  },
  {
    slug: "smm",
    title: "SMM спеціаліст",
    hero: {
      title: "SMM спеціаліст",
      subtitle:
        "Курс для тих, хто хоче вести соцмережі професійно і коштувати на ринку",
      tags: ["14 модулів", "2 місяці", "практика", "джоб-офер"],
      image: "/courses/smm/hero.png",
      imageAlt: "Студентки курсу «SMM спеціаліст»",
      ctaLabel: "Дізнайся про формати та ціни",
      ctaHref: "#formats",
      background: BG_DARK,
    },
  },
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
