import { Link } from 'react-router-dom';
import Tag from '../ui/Tag.jsx';

const LEVEL_LABEL = {
  beginner: 'Beginner',
  elementary: 'Elementary',
  intermediate: 'Intermediate',
};

export default function CourseCard({ course }) {
  return (
    <Link
      to={`/courses/${course.id}`}
      className="group block rounded-card border border-ink/10 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-ink/20 hover:shadow-[0_6px_0_rgba(30,39,73,0.06)]"
    >
      <Tag tone={course.coverColor}>{LEVEL_LABEL[course.level] ?? course.level}</Tag>

      <h3 className="mt-4 font-display text-xl font-semibold text-ink group-hover:text-marigold-dark">
        {course.title}
      </h3>
      <p className="mt-1 font-body text-sm font-medium text-ink-soft">{course.tagline}</p>
      <p className="mt-3 font-body text-sm leading-relaxed text-ink-faint">
        {course.description}
      </p>

      <span className="mt-5 inline-flex items-center gap-1 font-body text-sm font-semibold text-ink">
        Explore course
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-0.5">
          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}
