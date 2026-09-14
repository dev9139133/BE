import { Link } from 'react-router-dom';
import { getAllLessons } from '../../data/contentApi.js';
import LessonCard from '../lesson/LessonCard.jsx';

export default function FeaturedLessons() {
  const lessons = getAllLessons().slice(0, 3);

  return (
    <section className="bg-paper-dim px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Try a lesson right now
          </h2>
          <Link
            to="/lessons"
            className="hidden font-body text-sm font-semibold text-ink hover:text-marigold-dark sm:inline"
          >
            See all lessons &rarr;
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>

        <Link
          to="/lessons"
          className="mt-6 inline-block font-body text-sm font-semibold text-ink hover:text-marigold-dark sm:hidden"
        >
          See all lessons &rarr;
        </Link>
      </div>
    </section>
  );
}
