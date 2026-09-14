import Button from '../ui/Button.jsx';

const CORRECTIONS = [
  { wrong: 'I am knowing him.', right: 'I know him.' },
  { wrong: 'She is having two cats.', right: 'She has two cats.' },
  { wrong: 'I go market yesterday.', right: 'I went to the market yesterday.' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-14 sm:px-6 sm:pt-20 lg:pt-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <span className="inline-flex items-center rounded-pill bg-marigold-light px-3 py-1 font-tag text-xs font-medium uppercase tracking-wide text-marigold-dark">
            No judgement. Just English.
          </span>

          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
            It's okay to be
            <br />
            <span className="text-marigold-dark">bewakoof.</span> That's how
            <br />
            you learn.
          </h1>

          <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-ink-soft">
            Real lessons, real mistakes, real fixes — built from years of
            actually teaching English, not a textbook that's never seen a
            classroom.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button to="/lessons" variant="accent">
              Start learning free
            </Button>
            <Button to="/courses" variant="ghost">
              Browse courses
            </Button>
          </div>
        </div>

        {/* Signature element: corrections revealed like red-pen marks on a notebook */}
        <div className="relative rounded-card border border-ink/10 bg-white p-6 shadow-[0_2px_0_rgba(30,39,73,0.06)] sm:p-8">
          <p className="font-tag text-xs uppercase tracking-wide text-ink-faint">
            Corrected in class
          </p>
          <ul className="mt-4 space-y-5">
            {CORRECTIONS.map((c, i) => (
              <li key={i} className="group">
                <p className="font-body text-base text-ink-faint line-through decoration-redpen/70 decoration-2">
                  {c.wrong}
                </p>
                <p className="mt-1 flex items-start gap-2 font-body text-base font-medium text-ink">
                  <span className="mt-0.5 font-display italic text-redpen">
                    &#10003;
                  </span>
                  {c.right}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
