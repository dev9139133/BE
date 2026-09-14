export default function SummaryBlock({ content }) {
  return (
    <div className="rounded-card border border-sage/30 bg-sage-light p-5">
      <p className="font-tag text-xs font-medium uppercase tracking-wide text-sage-dark">
        Before you go
      </p>
      <ul className="mt-2 space-y-1.5">
        {content.points.map((point, i) => (
          <li key={i} className="flex gap-2 font-body text-sm text-ink">
            <span className="text-sage-dark">&#8226;</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
