import supabase from "@/lib/supabase.ts";

export async function signUp({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const response = await supabase.auth.signUp({
    email,
    password,
  });
}
