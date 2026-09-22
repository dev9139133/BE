import { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { getLessonById, getModuleWithCourse, getNextLesson } from '../data/contentApi.js';
import ActivityRenderer from '../components/lesson/ActivityRenderer.jsx';
import Tag from '../components/ui/Tag.jsx';
import Button from '../components/ui/Button.jsx';

export default function LessonDetailPage() {
  const { lessonId } = useParams();
  const lesson = getLessonById(lessonId);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  // Reset the stepper whenever the learner navigates to a different lesson.
  // (State adjustment during render, per React's guidance, rather than an
  // effect — avoids an extra render pass just to reset two values.)
  const [trackedLessonId, setTrackedLessonId] = useState(lessonId);
  if (lessonId !== trackedLessonId) {
    setTrackedLessonId(lessonId);
    setCurrentIndex(0);
    setFinished(false);
  }

  if (!lesson) {
    return <Navigate to="/lessons" replace />;
  }

  const moduleInfo = getModuleWithCourse(lesson.moduleId);
  const nextLesson = getNextLesson(lesson.id);
  const total = lesson.activities.length;
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === total - 1;
  const progressPercent = finished
    ? 100
    : Math.round(((currentIndex + 1) / total) * 100);

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

        {/* Progress: activity count + bar */}
        <div className="mt-7">
          <div className="flex items-center justify-between">
            <span className="font-tag text-xs uppercase tracking-wide text-ink-faint">
              {finished ? 'Lesson complete' : `Activity ${currentIndex + 1} of ${total}`}
            </span>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-pill bg-paper-dim">
            <div
              className="h-full rounded-pill bg-marigold transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* One activity at a time, rendered through the existing ActivityRenderer —
            still fully data-driven, no lesson-specific branching. */}
        {!finished ? (
          <>
            <div className="mt-6">
              <ActivityRenderer
                key={lesson.activities[currentIndex].id}
                activity={lesson.activities[currentIndex]}
              />
            </div>

            <div className="mt-8 flex items-center gap-3">
              <Button
                variant="ghost"
                onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
                disabled={isFirst}
                className={isFirst ? 'invisible' : ''}
              >
                &larr; Previous
              </Button>

              <div className="ml-auto">
                {isLast ? (
                  <Button variant="accent" onClick={() => setFinished(true)}>
                    Finish Lesson
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    onClick={() => setCurrentIndex((i) => Math.min(total - 1, i + 1))}
                  >
                    Next &rarr;
                  </Button>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="mt-6 flex flex-col items-center rounded-card border border-sage/30 bg-sage-light px-6 py-12 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-dark text-2xl text-white">
              &#10003;
            </span>
            <h2 className="mt-4 font-display text-2xl font-semibold text-ink">
              Lesson complete!
            </h2>
            <p className="mt-1.5 font-body text-base text-ink-soft">
              Nice work. You've finished this lesson.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {nextLesson ? (
                <>
                  <Button to={`/lessons/${nextLesson.id}`} variant="accent">
                    Next Lesson &rarr;
                  </Button>
                  {moduleInfo?.course && (
                    <Button to={`/courses/${moduleInfo.course.id}`} variant="ghost">
                      Back to {moduleInfo.course.title}
                    </Button>
                  )}
                </>
              ) : (
                <>
                  {moduleInfo?.course && (
                    <Button to={`/courses/${moduleInfo.course.id}`} variant="primary">
                      Back to {moduleInfo.course.title}
                    </Button>
                  )}
                  <Button to="/lessons" variant="ghost">
                    Browse all lessons
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}