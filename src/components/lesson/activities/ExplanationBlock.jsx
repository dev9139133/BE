export default function ExplanationBlock({ content }) {
  return (
    <div className="margin-rule">
      {content.heading && (
        <h2 className="font-display text-xl font-semibold text-ink">{content.heading}</h2>
      )}
      <div className="mt-2 space-y-3">
        {content.body.split('\n\n').map((para, i) => (
          <p key={i} className="font-body text-base leading-relaxed text-ink-soft">
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}
