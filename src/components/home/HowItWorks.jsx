const STEPS = [
  {
    title: 'Pick a lesson',
    body: 'Short, focused lessons — grammar, vocabulary, reading, or listening. No 2-hour videos.',
  },
  {
    title: 'Watch, read, practice',
    body: 'Every lesson mixes a short video, a quick explanation, and real examples you can use today.',
  },
  {
    title: 'Check yourself',
    body: 'A short quiz at the end tells you what stuck — and what to revisit.',
  },
];

export default function HowItWorks() {
  return (
    <section className="px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
          How Bewakoof English works
        </h2>

        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <div key={step.title} className="margin-rule">
              <span className="font-tag text-xs text-marigold-dark">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-1 font-display text-lg font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-1.5 font-body text-sm leading-relaxed text-ink-faint">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
