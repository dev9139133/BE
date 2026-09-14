export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper-dim">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-lg font-semibold text-ink">
              Bewakoof<span className="text-marigold-dark">.</span>English
            </p>
            <p className="mt-1 max-w-sm font-body text-sm text-ink-faint">
              Learn English, one honest mistake at a time.
            </p>
          </div>

          <div className="flex gap-6 font-body text-sm text-ink-soft">
            <a
              href="https://www.youtube.com/@BewakoofEnglish"
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink"
            >
              YouTube
            </a>
            <a
              href="https://bewakoofenglish.blogspot.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink"
            >
              Blog
            </a>
          </div>
        </div>

        <p className="mt-8 font-body text-xs text-ink-faint">
          &copy; {new Date().getFullYear()} Bewakoof English. Made with chai and patience in Punjab.
        </p>
      </div>
    </footer>
  );
}
