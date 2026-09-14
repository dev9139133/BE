import { getCourses } from '../../data/contentApi.js';
import CourseCard from '../course/CourseCard.jsx';

export default function FeaturedCourses() {
  const courses = getCourses();

  return (
    <section className="px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Pick a course, start today
          </h2>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
