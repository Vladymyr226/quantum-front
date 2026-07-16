import { Hero } from "@/components/sections/Hero";
import { Courses } from "@/components/sections/Courses";
import { Lesson } from "@/components/sections/Lesson";

export default function Home() {
  return (
    <main className="w-full min-w-0 flex-1">
      <Hero />
      <Courses />
      <Lesson />
    </main>
  );
}
