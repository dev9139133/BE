import { getCourses } from '../data/contentApi.js';
import CourseCard from '../components/course/CourseCard.jsx';

export default function CoursesPage() {
  const courses = getCourses();

  return (
    <section className="px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          Courses
        </h1>
        <p className="mt-2 max-w-xl font-body text-base text-ink-soft">
          Structured paths, built from modules and lessons, that take you
          from where you are to where you want to be.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
