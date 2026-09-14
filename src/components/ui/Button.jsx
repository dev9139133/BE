import { Link } from 'react-router-dom';

const VARIANTS = {
  primary:
    'bg-ink text-paper hover:bg-ink-soft active:bg-ink-soft',
  accent:
    'bg-marigold text-ink hover:bg-marigold-dark hover:text-paper',
  ghost:
    'bg-transparent text-ink border border-ink/15 hover:border-ink/40',
};

/**
 * Shared button. Renders as a <Link> when `to` is given, otherwise a <button>.
 */
export default function Button({
  children,
  to,
  variant = 'primary',
  className = '',
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-pill px-5 py-2.5 font-body font-semibold text-sm transition-colors duration-150 ${VARIANTS[variant] ?? VARIANTS.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
