import { useParams, Navigate } from 'react-router-dom';
import {
  getCourseById,
  getModulesByCourse,
  getLessonsByModule,
} from '../data/contentApi.js';
import LessonCard from '../components/lesson/LessonCard.jsx';
import Tag from '../components/ui/Tag.jsx';

const LEVEL_LABEL = {
  beginner: 'Beginner',
  elementary: 'Elementary',
  intermediate: 'Intermediate',
};

export default function CourseDetailPage() {
  const { courseId } = useParams();
  const course = getCourseById(courseId);

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  const modules = getModulesByCourse(course.id);

  return (
    <section className="px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <Tag tone={course.coverColor}>{LEVEL_LABEL[course.level] ?? course.level}</Tag>

        <h1 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
          {course.title}
        </h1>
        <p className="mt-1 font-body text-base font-medium text-ink-soft">
          {course.tagline}
        </p>
        <p className="mt-3 max-w-2xl font-body text-base leading-relaxed text-ink-faint">
          {course.description}
        </p>

        <div className="mt-10 space-y-8">
          {modules.map((mod) => {
            const lessons = getLessonsByModule(mod.id);
            return (
              <div key={mod.id}>
                <h2 className="font-display text-xl font-semibold text-ink">
                  {mod.title}
                </h2>
                <p className="mt-1 font-body text-sm text-ink-faint">{mod.description}</p>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {lessons.map((lesson) => (
                    <LessonCard key={lesson.id} lesson={lesson} />
                  ))}
                </div>
              </div>
            );
          })}

          {modules.length === 0 && (
            <div className="rounded-card border border-dashed border-ink/20 px-6 py-10 text-center">
              <p className="font-body text-sm text-ink-faint">
                Modules for this course are coming soon.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
