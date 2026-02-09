// lib/auth.ts
import { cookies } from "next/headers";

export async function getUserSession() {
  const session = (await cookies()).get("session");
  return session?.value;
}
