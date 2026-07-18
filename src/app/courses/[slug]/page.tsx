import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CourseHero } from "@/components/course/CourseHero";
import { CourseTasks } from "@/components/course/CourseTasks";
import { CoursePayout } from "@/components/course/CoursePayout";
import { CourseAudience } from "@/components/course/CourseAudience";
import { CourseProgram } from "@/components/course/CourseProgram";
import { CourseCareer } from "@/components/course/CourseCareer";
import { courses, getCourse } from "@/content/courses";
import { Footer } from "@/components/sections/Footer";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  return {
    title: `${course.title} — QUANTUM`,
    description: course.hero.subtitle,
  };
}

export default async function CoursePage({ params }: Params) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  return (
    <main className="w-full min-w-0 flex-1">
      <CourseHero {...course.hero} />
      {course.tasks && <CourseTasks {...course.tasks} />}
      {course.payout && <CoursePayout {...course.payout} />}
      {course.audience && <CourseAudience {...course.audience} />}
      {course.program && <CourseProgram {...course.program} />}
      {course.career && <CourseCareer {...course.career} />}
      <Footer />
    </main>
  );
}
