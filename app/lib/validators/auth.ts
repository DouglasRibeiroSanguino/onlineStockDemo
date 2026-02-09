import { z } from "zod";

export const authSchema = z.object({
  email: z
    .string()
    .email("Email inválido"),
  password: z.string()
    .min(8)
    .regex(/[A-Z]/, "Deve ter letra maiúscula")
    .regex(/[0-9]/, "Deve ter número")
});