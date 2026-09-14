import { Link, useParams, Navigate } from 'react-router-dom';
import { getLessonById, getModuleWithCourse } from '../data/contentApi.js';
import ActivityRenderer from '../components/lesson/ActivityRenderer.jsx';
import Tag from '../components/ui/Tag.jsx';
import Button from '../components/ui/Button.jsx';

export default function LessonDetailPage() {
  const { lessonId } = useParams();
  const lesson = getLessonById(lessonId);

  if (!lesson) {
    return <Navigate to="/lessons" replace />;
  }

  const moduleInfo = getModuleWithCourse(lesson.moduleId);

  return (
    <section className="px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-3xl">
        {/* Breadcrumb */}
        {moduleInfo?.course && (
          <nav className="mb-4 font-body text-sm text-ink-faint">
            <Link to={`/courses/${moduleInfo.course.id}`} className="hover:text-ink">
              {moduleInfo.course.title}
            </Link>
            <span className="mx-1.5">/</span>
            <span>{moduleInfo.title}</span>
          </nav>
        )}

        <div className="flex flex-wrap items-center gap-2">
          <Tag>{lesson.category}</Tag>
          <span className="font-tag text-xs text-ink-faint">
            {lesson.estimatedMinutes} min
          </span>
        </div>

        <h1 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
          {lesson.title}
        </h1>
        <p className="mt-2 font-body text-base text-ink-soft">{lesson.description}</p>

        {/* Activities, rendered in order from data — nothing here is hard-coded per lesson */}
        <div className="mt-8 space-y-6">
          {lesson.activities.map((activity) => (
            <ActivityRenderer key={activity.id} activity={activity} />
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-ink/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-sm text-ink-faint">
            Nice work finishing this lesson.
          </p>
          <div className="flex gap-3">
            <Button to="/lessons" variant="ghost">
              Back to all lessons
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
