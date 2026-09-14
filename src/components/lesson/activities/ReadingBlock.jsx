export default function ReadingBlock({ content }) {
  return (
    <div className="rounded-card border border-ink/10 bg-white p-5 sm:p-6">
      {content.title && (
        <h2 className="font-display text-xl font-semibold text-ink">{content.title}</h2>
      )}
      <div className="mt-3 space-y-4">
        {content.paragraphs.map((para, i) => (
          <p key={i} className="font-body text-base leading-relaxed text-ink-soft">
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}
