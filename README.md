# Bewakoof English — V1 Foundation 

An English-learning platform built around Dev Kumar's existing YouTube and
blog content. This is Stage 1: the foundation only (see report below for
what's implemented vs. what's next).

## Stack

- **Vite + React 19** — fast dev server, simple build, no framework lock-in
- **React Router v7** — client-side routing
- **Tailwind CSS v4** — CSS-first theme config (see `src/index.css`)
- **Supabase** (client installed, not yet wired) — Postgres + auth for the next stage

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Building for production

```bash
npm run build
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  data/
    schema.js          # JSDoc data model reference (Course/Module/Lesson/Activity)
    content/            # Static seed content (courses, modules, lessons)
    contentApi.js       # The ONLY interface UI reads content through
  components/
    ui/                 # Button, Tag — shared primitives
    layout/              # Header, Footer, SiteLayout
    home/                # Homepage sections
    course/              # CourseCard
    lesson/
      ActivityRenderer.jsx   # Maps activity.type -> component
      activities/             # One renderer per activity type
  pages/                 # Route-level pages
  lib/
    supabase.js         # Supabase client (inactive until env vars are set)
```

## Environment variables

Copy `.env.example` to `.env` and fill in Supabase credentials when you're
ready for the next stage (accounts, enrollment, progress). Not required
for this stage — the app runs fully without them.
