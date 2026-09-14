import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

const NAV_LINKS = [
  { to: '/lessons', label: 'Lessons' },
  { to: '/courses', label: 'Courses' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-xl font-semibold text-ink">
            Bewakoof<span className="text-marigold-dark">.</span>English
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 sm:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-body text-sm font-medium transition-colors ${
                  isActive ? 'text-marigold-dark' : 'text-ink-soft hover:text-ink'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/signin"
            className="font-body text-sm font-medium text-ink-soft hover:text-ink"
          >
            Sign in
          </NavLink>
          <Link
            to="/signup"
            className="rounded-pill bg-ink px-4 py-2 font-body text-sm font-semibold text-paper transition-colors hover:bg-ink-soft"
          >
            Start free
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink sm:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav panel */}
      {open && (
        <nav className="flex flex-col gap-1 border-t border-ink/10 bg-paper px-4 py-3 sm:hidden">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2.5 font-body text-sm font-medium ${
                  isActive ? 'bg-marigold-light text-marigold-dark' : 'text-ink-soft'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/signin"
            onClick={() => setOpen(false)}
            className="rounded-lg px-3 py-2.5 font-body text-sm font-medium text-ink-soft"
          >
            Sign in
          </NavLink>
          <Link
            to="/signup"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-pill bg-ink px-4 py-2.5 text-center font-body text-sm font-semibold text-paper"
          >
            Start free
          </Link>
        </nav>
      )}
    </header>
  );
}
