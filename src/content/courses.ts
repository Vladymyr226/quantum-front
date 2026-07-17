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

export type CourseAudienceItem = {
  image: string;
  caption: string;
};

export type CourseAudienceData = {
  heading: string;
  items: CourseAudienceItem[];
};

export type CourseProgramItem = {
  title: string;
  description: string;
};

export type CourseProgramData = {
  heading: string;
  label: string;
  items: CourseProgramItem[];
};

export type Course = {
  slug: string;
  title: string;
  hero: CourseHeroData;
  tasks?: CourseTasksData;
  payout?: CoursePayoutData;
  audience?: CourseAudienceData;
  program?: CourseProgramData;
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
    audience: {
      heading: "Для кого цей курс",
      items: [
        {
          image: "/courses/mediabuyer/audience/1.png",
          caption: "Пробував трафік але\nщось пішло не так",
        },
        {
          image: "/courses/mediabuyer/audience/2.png",
          caption: "Переїхав за кордон\nі шукаєш варіанти",
        },
        {
          image: "/courses/mediabuyer/audience/3.png",
          caption: "Мав бізнес,\nале все змінилось",
        },
        {
          image: "/courses/mediabuyer/audience/4.png",
          caption: "Вже в діджиталі\nале хочеш більше",
        },
        {
          image: "/courses/mediabuyer/audience/5.png",
          caption: "Продавав все життя\nі втомився від людей",
        },
      ],
    },
    program: {
      heading: "Програма курсу",
      label: "медіабаєр",
      items: [
        {
          title: "База",
          description:
            "Розберемось з теорією щоб розуміти про що говорять в ринку: компанії, команди, партнерки, конфи та ком'юніті. Як не потрапити на скам.",
        },
        {
          title: "Товари/послуги",
          description:
            "Де брати товари під рекламу, як визначити який товар рекламувати вигідно, де взяти готові сайти.",
        },
        {
          title: "Creo",
          description:
            "Робимо банери і відео (так, ти станеш дизайнером) під різні вертикалі. Робота зі спай сервісами. Де шукати ідеї. ШІ для дизайну.",
        },
        {
          title: "Технічка",
          description:
            "Інструменти і сервіси для роботи: де взяти, як обирати, як налаштувати.",
        },
        {
          title: "До запуску",
          description:
            "Соц, БМ, ФП, білінг, піксель, безпека, прогрів, політика.",
        },
        {
          title: "Запуск",
          description:
            "Робота з різними вертикалями: стратегії запуску, покрокові налаштування, що не потрібно робити.",
        },
        {
          title: "Після запуску",
          description: "Аналітика, показники, блокування, масштабування.",
        },
        {
          title: "Статистика",
          description:
            "Як вести звітність своєї роботи. Шаблони готових таблиць для комфорту у роботі.",
        },
        {
          title: "Старт кар'єри",
          description:
            "Резюме, портфоліо, на що звертають увагу роботодавці, як обрати кращі умови роботи.",
        },
        {
          title: "Дипломна робота",
          description:
            "Перевірка навичок після проходження курсу. Отримання диплома.",
        },
      ],
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
    audience: {
      heading: "Для кого цей курс",
      items: [
        {
          image: "/courses/affiliate/audience/1.png",
          caption: "Переїхав за кордон і шукаєш варіанти",
        },
        {
          image: "/courses/affiliate/audience/2.png",
          caption: "Кайфуєш від переговорів і нових знайомств",
        },
        {
          image: "/courses/affiliate/audience/3.png",
          caption: "Хочеш професію із подорожами по всьому світу",
        },
        {
          image: "/courses/affiliate/audience/4.png",
          caption: "Хочеш працювати віддалено і сам керувати своїм часом",
        },
        {
          image: "/courses/affiliate/audience/5.png",
          caption: "Хочеш в афілейт маркетинг але без запуску реклами",
        },
      ],
    },
    program: {
      heading: "Програма курсу",
      label: "афілейт",
      items: [
        {
          title: "База",
          description:
            "Розберемось з теорією щоб розуміти про що говорять в ринку: компанії, команди, партнерки, конфи та ком'юніті. Як заробляє афілейт менеджер. моделі оплати.",
        },
        {
          title: "Гео та вертикалі",
          description:
            "Специфіка роботи в різних вертикалях: ЦА, ставки, рекли, способи оплати. Специфіка ГЕО: Tier 1, 2, 3 і як це впливає на вибір оферу.",
        },
        {
          title: "Офери та партнерки",
          description:
            "Що таке офер і як читати його умови. Чек-лист перевірки оферу перед видачею байєру. Апрув, виплата, KPI — основні поінти оферу. Як визначити хорошу партнерку.",
        },
        {
          title: "Робота з вебами",
          description:
            "Де шукати байєрів. Як будувати довгострокові відносини. Робота з топами та новачками. Як контролювати заливи і масштабувати вебів. Як уникнути відтоку партнерів.",
        },
        {
          title: "Переговори",
          description:
            "Скрипти, продаж, заперечення, супровід та комунікація із медіабаєрами.",
        },
        {
          title: "Аналітика",
          description:
            "Основні метрики: CR, ROI, EPC. LTV, hold, approve, c2d. Як аналізувати трафік і оптимізувати результати. Як обсяг впливає на якість трафіку.",
        },
        {
          title: "Creo та зв'язки",
          description:
            "Що таке зв'язка: крео + ленд + офер. Основні типи креативів. Як допомагати медіабаєрам з ідеями. Робота зі spy-сервісами.",
        },
        {
          title: "Антифрод",
          description:
            "Типи фроду та як його визначати. Який трафік вважається якісним. Як не втратити гарного медіабаєра при підозрі від рекламодавця.",
        },
        {
          title: "Інструменти",
          description:
            "Трекери, CRM, таблиці для обліку байєрів, spy-сервіси, комунікаційні інструменти.",
        },
        {
          title: "Операційка",
          description:
            "Робочий день афілейт менеджера: щоденні задачі та пріоритети. Де і як шукати медіабаєрів. Типові помилки на старті. Як керувати великою базою медіабаєрів одночасно.",
        },
        {
          title: "Старт кар'єри",
          description:
            "Як скласти CV і пройти співбесіду. Типові питання від роботодавця. Де і як шукати роботу афілейт менеджера. Кар'єрний ріст в індустрії.",
        },
        {
          title: "Дипломна робота",
          description:
            "Перевірка навичок після проходження курсу. Отримання диплома.",
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
    audience: {
      heading: "Для кого цей курс",
      items: [
        {
          image: "/courses/smm/audience/1.png",
          caption: "Хочеш вести красиві акаунти і заробляти на цьому",
        },
        {
          image: "/courses/smm/audience/2.png",
          caption: "Ведеш SMM але хочеш заробляти більше",
        },
        {
          image: "/courses/smm/audience/3.png",
          caption: "Хочеш працювати віддалено і сам керувати своїм часом",
        },
        {
          image: "/courses/smm/audience/4.png",
          caption: "Переїхав за кордон і шукаєш варіанти",
        },
        {
          image: "/courses/smm/audience/5.png",
          caption: "Мама в декреті і шукаєш дохід з дому",
        },
      ],
    },
    program: {
      heading: "Програма курсу",
      label: "смм",
      items: [
        {
          title: "База",
          description:
            "Вивчення компанії, продукту, УТП, ЦА, заперечень — без цього весь контент буде мимо.",
        },
        {
          title: "Ідеї",
          description:
            "Де шукати ідеї, адаптація під бізнес, планування, тести гіпотез.",
        },
        {
          title: "Не стратегія",
          description:
            "Типові помилки SMM спеціалістів. Міфи про SMM стратегію. Як скласти SMM стратегію. Що реально очікує від тебе роботодавець.",
        },
        {
          title: "Планування",
          description:
            "Регулярність проти ідеальності. Система планування. Як все встигати щоб не горіти дедлайнами.",
        },
        {
          title: "Візуал і смак",
          description:
            "Надивленість як навичка. Як розрізняти хороший і поганий візуал. Референси, мудборди, обробка фото.",
        },
        {
          title: "Зйомка і монтаж",
          description:
            "Зйомка фото і відео. Монтаж. Швидкість та якість. Організація зйомок",
        },
        {
          title: "Тренди",
          description:
            "Моніторинг. Реалізація. Аналіз. Типи контенту під різні платформи.",
        },
        {
          title: "AI",
          description:
            "AI як помічник а не замінник. Як налаштувати AI під бренд клієнта. Генерація контенту, ідей і текстів.",
        },
        {
          title: "Інфлюєнсери",
          description:
            "Як знайти і оцінити інфлюєнсера. Комунікація і домовленості. Оцінка результатів співпраці. Як обрати кращі умови роботи.",
        },
        {
          title: "Інструменти",
          description:
            "Планувальники і сервіси для роботи. Кросплатформенність — економія часу. Блокування — як не потрапити і як вийти.",
        },
        {
          title: "Сфери",
          description:
            "17 найпопулярніших сфер бізнесу для SMM. Приклади, план роботи і специфіка кожної сфери.",
        },
        {
          title: "Робота в команді",
          description:
            "Як не бути «тим SMM який нічого не робить». Взаємодія з командою, керівництвом і підрядниками. Швидкість і лояльність як конкурентна перевага.",
        },
        {
          title: "Старт кар'єри",
          description:
            "Резюме і портфоліо які продають тебе. Де шукати роботу і як проходити співбесіди. Як коштувати на ринку і зростати в доходах.",
        },
        {
          title: "Дипломна робота",
          description:
            "Перевірка навичок після проходження курсу. Отримання диплома.",
        },
      ],
    },
  },
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
