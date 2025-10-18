import { createClient } from "@supabase/supabase-js";

// 1. Get environment variables and assert they are strings (non-null)
// You may need to adjust based on how you access env vars (e.g., import.meta.env)
const supabaseUrl: string = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey: string = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);