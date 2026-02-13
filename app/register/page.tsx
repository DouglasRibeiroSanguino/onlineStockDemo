"use client";

import styles from "./auth.module.css";
import { registerAction } from "../actions/auth";
import Link from "next/link";
import { useState } from "react";
import React from "react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [state, formAction] = React.useActionState(registerAction, {
    error: "",
  });

  return (
    <main className={styles.container}>

      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        rel="stylesheet"
      />

      <div className={styles.card}>
        <h1 className={styles.title}>CREATE ACCOUNT</h1>

        <form action={formAction} className={styles.form}>
          <div className={styles.field}>
            <input
              name="email"
              type="email"
              required
              placeholder=" "
            />

            <label>Email</label>
          </div>

          <div className={styles.fieldColumn}>
            <div className={styles.passwordWrapper}>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder=" "
                required
                pattern="^(?=.*[A-Z])(?=.*\d).{8,}$"
                title="Password must contain at least 8 characters, one uppercase letter and one number"
              />

              <label>Password</label>

              <button
                type="button"
                className={styles.toggle}
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Toggle password visibility"
              >
                <span className="material-symbols-outlined">
                  {showPassword ? "visibility_off" : "visibility"}
                </span>
              </button>
            </div>

            <ul className={styles.passwordRules}>
              <li>At least 8 characters</li>
              <li>One uppercase letter</li>
              <li>One number</li>
            </ul>
          </div>

          {/* Mensagem de erro */}
          {state?.error && (
            <p className={styles.error}>{state.error}</p>
          )}

          <button className={styles.button}>CREATE ACCOUNT</button>
        </form>

        <div className={styles.footer}>
          Já possui conta? <a href="/login">Entrar</a>
        </div>
      </div>

      <div className={styles.back}>
        <Link href="/">← Voltar para Home</Link>
      </div>
    </main>
  );
}
