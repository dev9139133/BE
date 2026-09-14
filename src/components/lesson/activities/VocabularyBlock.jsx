export default function VocabularyBlock({ content }) {
  return (
    <div>
      <p className="font-tag text-xs font-medium uppercase tracking-wide text-sage-dark">
        Vocabulary
      </p>
      <ul className="mt-3 space-y-4">
        {content.words.map((w) => (
          <li key={w.term} className="rounded-card border border-ink/10 bg-white p-4">
            <p className="font-display text-base font-semibold text-ink">{w.term}</p>
            <p className="mt-0.5 font-body text-sm text-ink-soft">{w.meaning}</p>
            {w.example && (
              <p className="mt-1.5 font-body text-sm italic text-ink-faint">"{w.example}"</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
