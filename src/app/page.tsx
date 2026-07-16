import { Hero } from "@/components/sections/Hero";
import { Courses } from "@/components/sections/Courses";

export default function Home() {
  return (
    <main className="w-full min-w-0 flex-1">
      <Hero />
      <Courses />
    </main>
  );
}
