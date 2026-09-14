import { Link } from 'react-router-dom';
import Tag from '../ui/Tag.jsx';

const CATEGORY_TONE = {
  grammar: 'marigold',
  vocabulary: 'sage',
  reading: 'ink',
  listening: 'sage',
};

export default function LessonCard({ lesson }) {
  return (
    <Link
      to={`/lessons/${lesson.id}`}
      className="group flex flex-col rounded-card border border-ink/10 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-ink/20 hover:shadow-[0_6px_0_rgba(30,39,73,0.06)]"
    >
      <div className="flex items-center justify-between gap-2">
        <Tag tone={CATEGORY_TONE[lesson.category] ?? 'marigold'}>{lesson.category}</Tag>
        <span className="font-tag text-xs text-ink-faint">{lesson.estimatedMinutes} min</span>
      </div>

      <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-ink group-hover:text-marigold-dark">
        {lesson.title}
      </h3>
      <p className="mt-1.5 font-body text-sm leading-relaxed text-ink-faint">
        {lesson.description}
      </p>
    </Link>
  );
}
