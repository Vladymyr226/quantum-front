import { Hero } from "@/components/sections/Hero";
import { Courses } from "@/components/sections/Courses";
import { Lesson } from "@/components/sections/Lesson";
import { Articles } from "@/components/sections/Articles";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <main className="w-full min-w-0 flex-1">
      <Hero />
      <Courses />
      <Lesson />
      <Articles />
      <FinalCta />
    </main>
  );
}
