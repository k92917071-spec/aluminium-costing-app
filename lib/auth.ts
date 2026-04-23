import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function login(email: string, password: string) {
  return await supabase.auth.signInWithPassword({ email, password });
}

export async function logout() {
  return await supabase.auth.signOut();
}
