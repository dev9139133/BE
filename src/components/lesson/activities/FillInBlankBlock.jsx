import { useState } from 'react';

/**
 * A single-blank fill-in-the-blank activity.
 * content shape: { prompt: string, answer: string, explanation?: string }
 *
 * Answer checking is deliberately simple: trim whitespace and compare
 * case-insensitively. No fuzzy matching, no multiple accepted answers —
 * keep the check obvious and predictable for a beginner learner.
 */
export default function FillInBlankBlock({ content }) {
  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(false);

  const trimmedValue = value.trim();
  const isCorrect =
    checked && trimmedValue.toLowerCase() === content.answer.trim().toLowerCase();

  const handleCheck = () => {
    if (!trimmedValue) return;
    setChecked(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !checked) {
      handleCheck();
    }
  };

  const handleTryAgain = () => {
    setValue('');
    setChecked(false);
  };

  return (
    <div className="rounded-card border border-ink/10 bg-white p-5">
      <p className="font-tag text-xs font-medium uppercase tracking-wide text-marigold-dark">
        Fill in the blank
      </p>
      <p className="mt-2 font-body text-base leading-relaxed text-ink">{content.prompt}</p>

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={checked}
        placeholder="Type your answer"
        aria-label="Your answer"
        className="mt-3 w-full rounded-lg border border-ink/15 bg-white px-3 py-2.5 font-body text-sm text-ink placeholder:text-ink-faint focus:border-marigold-dark disabled:bg-paper-dim disabled:text-ink-faint"
      />

      {!checked ? (
        <button
          onClick={handleCheck}
          disabled={!trimmedValue}
          className="mt-4 rounded-pill bg-ink px-4 py-2 font-body text-sm font-semibold text-paper disabled:cursor-not-allowed disabled:opacity-40"
        >
          Check Answer
        </button>
      ) : (
        <div className="mt-4">
          <p
            className={`font-body text-sm font-semibold ${
              isCorrect ? 'text-sage-dark' : 'text-redpen'
            }`}
          >
            {isCorrect ? 'Correct!' : `Not quite. The correct answer is "${content.answer}".`}
          </p>
          {content.explanation && (
            <p className="mt-1 font-body text-sm text-ink-faint">{content.explanation}</p>
          )}
          <button
            onClick={handleTryAgain}
            className="mt-3 rounded-pill border border-ink/15 bg-white px-4 py-2 font-body text-sm font-semibold text-ink transition-colors hover:border-ink/40"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}