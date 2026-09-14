const TONES = {
  marigold: 'bg-marigold-light text-marigold-dark',
  sage: 'bg-sage-light text-sage-dark',
  ink: 'bg-ink text-paper',
};

/**
 * Small pill label — used for course level, lesson category, etc.
 * Uses the monospace utility font so it reads like a margin annotation.
 */
export default function Tag({ children, tone = 'marigold' }) {
  return (
    <span
      className={`inline-flex items-center rounded-pill px-2.5 py-1 text-xs font-tag font-medium tracking-wide uppercase ${TONES[tone] ?? TONES.marigold}`}
    >
      {children}
    </span>
  );
}
