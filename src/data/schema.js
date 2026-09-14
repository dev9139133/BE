/**
 * CONTENT DATA MODEL — Bewakoof English
 * ---------------------------------------------------------------
 * This file documents the shape of our content, using JSDoc typedefs.
 * We are plain JS (not TypeScript) to keep V1 simple, but these types
 * give editor autocomplete/hints and act as the source of truth for
 * what a "lesson," "course," etc. actually is.
 *
 * Why this shape:
 * - A Course has Modules. A Module has Lessons. A Lesson has Activities.
 * - A Lesson is NOT one fixed template — it's an ordered list of
 *   Activity blocks. Different lessons can mix different activity types
 *   in any order (video, then vocab, then quiz — or reading, then quiz).
 * - This mirrors how the data will eventually live in Supabase:
 *     courses, modules, lessons tables (relational, 1-to-many)
 *     lessons.activities as a JSONB column (flexible, ordered blocks)
 *   so moving from static JS to Supabase later is a data-source swap,
 *   not a redesign.
 *
 * NOTHING in the UI should hard-code lesson content. Components read
 * an activity's `type` and render the matching block — see
 * src/components/lesson/activities/*.
 */

/**
 * @typedef {'goal' | 'explanation' | 'video' | 'vocabulary' | 'reading' | 'mcqQuiz' | 'summary'} ActivityType
 * V1 supports these 7 activity types. More (speaking, writing, matching, etc.)
 * can be added later by adding a new type + a new renderer component —
 * existing lessons and courses are unaffected.
 */

/**
 * @typedef {Object} Activity
 * @property {string} id            - Unique within the lesson, e.g. "act-1"
 * @property {ActivityType} type
 * @property {Object} content       - Shape depends on `type` (see below)
 */

/**
 * Content shape per activity type (informal, since we're in plain JS):
 *
 * goal:         { text: string }
 * explanation:  { heading?: string, body: string }
 * video:        { youtubeId: string, caption?: string }
 * vocabulary:   { words: { term: string, meaning: string, example?: string }[] }
 * reading:      { title?: string, paragraphs: string[] }
 * mcqQuiz:      { questions: { id: string, question: string, options: string[], correctIndex: number, explanation?: string }[] }
 * summary:      { points: string[] }
 */

/**
 * @typedef {Object} Lesson
 * @property {string} id            - Unique slug, e.g. "present-simple-intro"
 * @property {string} moduleId
 * @property {string} title
 * @property {string} description   - One-liner shown in lesson lists/cards
 * @property {number} order         - Position within its module
 * @property {number} estimatedMinutes
 * @property {'grammar'|'vocabulary'|'reading'|'listening'} category
 * @property {Activity[]} activities
 */

/**
 * @typedef {Object} Module
 * @property {string} id            - Unique slug, e.g. "tenses-basics"
 * @property {string} courseId
 * @property {string} title
 * @property {string} description
 * @property {number} order
 */

/**
 * @typedef {Object} Course
 * @property {string} id            - Unique slug, e.g. "english-foundations"
 * @property {string} title
 * @property {string} tagline
 * @property {string} description
 * @property {'beginner'|'elementary'|'intermediate'} level
 * @property {string} coverColor    - one of the theme accent tokens, for card styling
 */

// This file has no runtime exports — it exists purely to document the
// shape of data living in src/data/content/*.js (V1) and, later, in
// Supabase tables of the same names.
export {};
