import { useState } from 'react';

function Question({ question, index, onAnswer }) {
  const [selected, setSelected] = useState(null);
  const [checked, setChecked] = useState(false);

  const isCorrect = checked && selected === question.correctIndex;

  const handleCheck = () => {
    if (selected === null) return;
    setChecked(true);
    onAnswer(selected === question.correctIndex);
  };

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
          onClick={handleCheck}
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

/** Short, encouraging feedback based on score — never judgmental. */
function feedbackForScore(percentage) {
  if (percentage >= 80) return 'Excellent work!';
  if (percentage >= 60) return 'Good work! A little more practice will make this stronger.';
  return 'Keep practicing. Review the lesson and try again.';
}

export default function McqQuizBlock({ content }) {
  const total = content.questions.length;

  // `attempt` changes on "Try Again," which changes each Question's key below
  // and remounts them fresh — the simplest way to reset per-question state
  // without lifting selected/checked out of Question.
  const [attempt, setAttempt] = useState(0);
  const [answeredCorrect, setAnsweredCorrect] = useState([]);

  const answeredCount = answeredCorrect.length;
  const allAnswered = total > 0 && answeredCount === total;
  const correctCount = answeredCorrect.filter(Boolean).length;
  const percentage = allAnswered ? Math.round((correctCount / total) * 100) : 0;

  const handleAnswer = (isCorrect) => {
    setAnsweredCorrect((prev) => [...prev, isCorrect]);
  };

  const handleTryAgain = () => {
    setAnsweredCorrect([]);
    setAttempt((a) => a + 1);
  };

  return (
    <div>
      <p className="font-tag text-xs font-medium uppercase tracking-wide text-marigold-dark">
        Quick check
      </p>
      <div className="mt-3 space-y-4">
        {content.questions.map((q, i) => (
          <Question
            key={`${q.id}-${attempt}`}
            question={q}
            index={i}
            onAnswer={handleAnswer}
          />
        ))}
      </div>

      {allAnswered && (
        <div className="mt-4 flex flex-col items-center rounded-card border border-marigold/30 bg-marigold-light px-6 py-8 text-center">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-marigold-dark text-xl text-white">
            &#10003;
          </span>
          <h3 className="mt-3 font-display text-lg font-semibold text-ink">
            Quiz complete!
          </h3>
          <p className="mt-1 font-body text-2xl font-semibold text-ink">
            {correctCount} / {total} correct
          </p>
          <p className="font-tag text-xs uppercase tracking-wide text-ink-faint">
            {percentage}%
          </p>
          <p className="mt-3 max-w-xs font-body text-sm text-ink-soft">
            {feedbackForScore(percentage)}
          </p>
          <button
            onClick={handleTryAgain}
            className="mt-4 rounded-pill border border-ink/15 bg-white px-4 py-2 font-body text-sm font-semibold text-ink transition-colors hover:border-ink/40"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}