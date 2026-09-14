export default function GoalBlock({ content }) {
  return (
    <div className="rounded-card bg-marigold-light p-5">
      <p className="font-tag text-xs font-medium uppercase tracking-wide text-marigold-dark">
        Learning goal
      </p>
      <p className="mt-2 font-body text-base leading-relaxed text-ink">
        {content.text}
      </p>
    </div>
  );
}
