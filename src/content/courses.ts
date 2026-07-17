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

export type Course = {
  slug: string;
  title: string;
  hero: CourseHeroData;
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
