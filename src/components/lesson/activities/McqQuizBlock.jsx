import { useState } from 'react';

function Question({ question, index }) {
  const [selected, setSelected] = useState(null);
  const [checked, setChecked] = useState(false);

  const isCorrect = checked && selected === question.correctIndex;

  return (
    <div className="rounded-card border border-ink/10 bg-white p-5">
      <p className="font-body text-base font-semibold text-ink">
        {index + 1}. {question.question}
      </p>

      <div className="mt-3 space-y-2">
        {question.options.map((option, i) => {
          const isSelected = selected === i;
          const showAsCorrect = checked && i === question.correctIndex;
          const showAsWrong = checked && isSelected && i !== question.correctIndex;

          return (
            <button
              key={i}
              onClick={() => {
                if (checked) return;
                setSelected(i);
              }}
              disabled={checked}
              className={`flex w-full items-center gap-3 rounded-lg border px-4 py-2.5 text-left font-body text-sm transition-colors ${
                showAsCorrect
                  ? 'border-sage bg-sage-light text-sage-dark'
                  : showAsWrong
                    ? 'border-redpen bg-redpen-light text-redpen'
                    : isSelected
                      ? 'border-marigold-dark bg-marigold-light text-ink'
                      : 'border-ink/15 text-ink-soft hover:border-ink/30'
              } ${checked ? 'cursor-default' : 'cursor-pointer'}`}
            >
              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-xs ${
                  showAsCorrect
                    ? 'border-sage-dark bg-sage-dark text-white'
                    : showAsWrong
                      ? 'border-redpen bg-redpen text-white'
                      : isSelected
                        ? 'border-marigold-dark bg-marigold-dark text-white'
                        : 'border-ink/25'
                }`}
              >
                {showAsCorrect ? '\u2713' : showAsWrong ? '\u2715' : ''}
              </span>
              {option}
            </button>
          );
        })}
      </div>

      {!checked ? (
        <button
          onClick={() => setChecked(true)}
          disabled={selected === null}
          className="mt-4 rounded-pill bg-ink px-4 py-2 font-body text-sm font-semibold text-paper disabled:cursor-not-allowed disabled:opacity-40"
        >
          Check answer
        </button>
      ) : (
        <div className="mt-4">
          <p
            className={`font-body text-sm font-semibold ${
              isCorrect ? 'text-sage-dark' : 'text-redpen'
            }`}
          >
            {isCorrect ? 'Correct!' : 'Not quite.'}
          </p>
          {question.explanation && (
            <p className="mt-1 font-body text-sm text-ink-faint">{question.explanation}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default function McqQuizBlock({ content }) {
  return (
    <div>
      <p className="font-tag text-xs font-medium uppercase tracking-wide text-marigold-dark">
        Quick check
      </p>
      <div className="mt-3 space-y-4">
        {content.questions.map((q, i) => (
          <Question key={q.id} question={q} index={i} />
        ))}
      </div>
    </div>
  );
}
