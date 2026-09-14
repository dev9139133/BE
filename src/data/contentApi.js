/**
 * CONTENT API — the only place UI code should import content from.
 * ---------------------------------------------------------------
 * Right now this reads from static local files (src/data/content/*.js).
 * Later, when we move to Supabase, every function body here changes to
 * a supabase query — but the function names/signatures stay the same,
 * so no component code needs to change. Components must NOT import
 * from src/data/content/*.js directly.
 */

import { courses } from './content/courses.js';
import { modules } from './content/modules.js';
import { lessons } from './content/lessons.js';

/** @returns {import('./schema.js').Course[]} */
export function getCourses() {
  return courses;
}

/** @returns {import('./schema.js').Course | undefined} */
export function getCourseById(courseId) {
  return courses.find((c) => c.id === courseId);
}

/** @returns {import('./schema.js').Module[]} */
export function getModulesByCourse(courseId) {
  return modules
    .filter((m) => m.courseId === courseId)
    .sort((a, b) => a.order - b.order);
}

/** @returns {import('./schema.js').Lesson[]} */
export function getLessonsByModule(moduleId) {
  return lessons
    .filter((l) => l.moduleId === moduleId)
    .sort((a, b) => a.order - b.order);
}

/** @returns {import('./schema.js').Lesson | undefined} */
export function getLessonById(lessonId) {
  return lessons.find((l) => l.id === lessonId);
}

/**
 * Returns all lessons across all courses, optionally filtered.
 * Used by the public lesson library / search page.
 * @returns {import('./schema.js').Lesson[]}
 */
export function getAllLessons({ category, query } = {}) {
  let result = lessons;

  if (category) {
    result = result.filter((l) => l.category === category);
  }

  if (query) {
    const q = query.toLowerCase();
    result = result.filter(
      (l) =>
        l.title.toLowerCase().includes(q) ||
        l.description.toLowerCase().includes(q)
    );
  }

  return result;
}

/**
 * Convenience: module + its parent course, for breadcrumbs.
 */
export function getModuleWithCourse(moduleId) {
  const mod = modules.find((m) => m.id === moduleId);
  if (!mod) return undefined;
  const course = getCourseById(mod.courseId);
  return { ...mod, course };
}
