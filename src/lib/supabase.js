import { createClient } from '@supabase/supabase-js';

/**
 * Supabase client — not yet used by any page in this stage.
 * Set up now so the next stage (auth, enrollment, progress) can import
 * this directly instead of re-deciding how the client is configured.
 *
 * Requires VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file
 * (see .env.example). Both are safe to expose in frontend code — they are
 * public, rate-limited keys; row-level security in Supabase is what
 * actually protects data.
 */

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

if (!supabase && import.meta.env.DEV) {
  // eslint-disable-next-line no-console
  console.warn(
    '[supabase] VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY not set — Supabase features are inactive. This is expected in this build stage.'
  );
}
