import { useMemo, useState } from 'react';
import { getAllLessons } from '../data/contentApi.js';
import LessonCard from '../components/lesson/LessonCard.jsx';

const CATEGORIES = [
  { value: '', label: 'All' },
  { value: 'grammar', label: 'Grammar' },
  { value: 'vocabulary', label: 'Vocabulary' },
  { value: 'reading', label: 'Reading' },
  { value: 'listening', label: 'Listening' },
];

export default function LessonsPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');

  const lessons = useMemo(
    () => getAllLessons({ query, category: category || undefined }),
    [query, category]
  );

  return (
    <section className="px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          All lessons
        </h1>
        <p className="mt-2 max-w-xl font-body text-base text-ink-soft">
          Short, focused lessons you can finish in a coffee break.
        </p>

        {/* Search + filter */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1 sm:max-w-xs">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search lessons..."
              className="w-full rounded-pill border border-ink/15 bg-white px-4 py-2.5 font-body text-sm text-ink placeholder:text-ink-faint focus:border-marigold-dark"
              aria-label="Search lessons"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c.value}
                onClick={() => setCategory(c.value)}
                className={`rounded-pill px-3.5 py-1.5 font-body text-sm font-medium transition-colors ${
                  category === c.value
                    ? 'bg-ink text-paper'
                    : 'bg-white text-ink-soft border border-ink/10 hover:border-ink/30'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mt-8">
          {lessons.length === 0 ? (
            <div className="rounded-card border border-dashed border-ink/20 px-6 py-14 text-center">
              <p className="font-display text-lg font-semibold text-ink">
                No lessons match that search
              </p>
              <p className="mt-1 font-body text-sm text-ink-faint">
                Try a different word, or clear the filter above.
              </p>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {lessons.map((lesson) => (
                <LessonCard key={lesson.id} lesson={lesson} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
