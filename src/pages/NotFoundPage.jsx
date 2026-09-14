import Button from '../components/ui/Button.jsx';

export default function NotFoundPage() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="font-tag text-sm text-marigold-dark">404</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-ink">
        This page went missing
      </h1>
      <p className="mt-2 max-w-sm font-body text-base text-ink-faint">
        Even we make mistakes sometimes. Let's get you back on track.
      </p>
      <Button to="/" variant="accent" className="mt-6">
        Back to home
      </Button>
    </section>
  );
}
