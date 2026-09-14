import Button from '../components/ui/Button.jsx';

export default function SignInPage() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 py-14 sm:px-6">
      <div className="w-full max-w-sm rounded-card border border-ink/10 bg-white p-6 sm:p-8">
        <h1 className="font-display text-2xl font-semibold text-ink">Sign in</h1>
        <p className="mt-1 font-body text-sm text-ink-faint">
          Track your progress and pick up where you left off.
        </p>

        <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="email" className="font-body text-sm font-medium text-ink">
              Email
            </label>
            <input
              id="email"
              type="email"
              disabled
              placeholder="you@example.com"
              className="mt-1 w-full rounded-lg border border-ink/15 bg-paper-dim px-3 py-2.5 font-body text-sm text-ink-faint"
            />
          </div>
          <div>
            <label htmlFor="password" className="font-body text-sm font-medium text-ink">
              Password
            </label>
            <input
              id="password"
              type="password"
              disabled
              placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
              className="mt-1 w-full rounded-lg border border-ink/15 bg-paper-dim px-3 py-2.5 font-body text-sm text-ink-faint"
            />
          </div>

          <Button type="submit" variant="primary" className="w-full" disabled>
            Sign in
          </Button>
        </form>

        <p className="mt-5 rounded-lg bg-marigold-light px-3 py-2 font-body text-xs text-marigold-dark">
          Accounts are coming in the next build stage. This screen shows the
          planned layout only.
        </p>
      </div>
    </section>
  );
}
