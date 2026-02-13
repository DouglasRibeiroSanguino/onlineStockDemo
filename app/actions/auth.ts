"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import { sql } from "@/app/lib/db";
import { authSchema } from "../lib/validators/auth";

/* =========================
   REGISTER
========================= */
export async function registerAction(
  prevState: { error?: string },
  formData: FormData
) {
  const parsed = authSchema.safeParse({
    email: String(formData.get("email") ?? ""),
    password: String(formData.get("password") ?? ""),
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0].message };
  }

  const { email, password } = parsed.data;

  const existing = await sql`
    SELECT id FROM users WHERE email = ${email}
  `;

  if (existing.length > 0) {
    return { error: "Não foi possível criar a conta, por favor tente novamente." };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await sql`
    INSERT INTO users (email, password)
    VALUES (${email}, ${hashedPassword})
  `;

  redirect("/dashboard");
}

/* =========================
   LOGIN
========================= */
export async function loginAction(
  prevState: { error?: string },
  formData: FormData
) {
  const parsed = authSchema.safeParse({
    email: String(formData.get("email") ?? ""),
    password: String(formData.get("password") ?? ""),
  });

  if (!parsed.success) {
    return { error: "Invalid email or password" };
  }

  const { email, password } = parsed.data;

  const users = await sql`
    SELECT password FROM users WHERE email = ${email}
  `;

  if (users.length === 0) {
    return { error: "Invalid email or password" };
  }

  const isValid = await bcrypt.compare(password, users[0].password);
  if (!isValid) {
    return { error: "Invalid email or password" };
  }

  (await cookies()).set("session", email, {
    httpOnly: true,
    path: "/",
  });

  redirect("/dashboard");
}

/* =========================
   LOGOUT
========================= */
export async function logoutAction() {
  (await cookies()).delete("session");
  redirect("/login");
}
