'use client';

import styles from "../register/auth.module.css";
import { loginAction } from "../actions/auth";
import Link from "next/link";
import { useState } from "react";
import { useFormState } from "react-dom";
import { any } from "zod";
import React from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [state, formAction] = React.useActionState(loginAction, {
    error: "",
  });

  return (
    <main className={styles.container}>

      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        rel="stylesheet"
      />

      <div className={styles.card}>
        <h1 className={styles.title}>CUSTOMER LOGIN</h1>

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
          </div>

          {/* Mensagem de erro */}
          {state?.error && (
            <p className={styles.error}>{state.error}</p>
          )}

          <button className={styles.button}>LOGIN</button>
        </form>

        <div className={styles.footer}>
          Não tem conta? <a href="/register">Criar conta</a>
        </div>
      </div>

      <div className={styles.back}>
        <Link href="/">← Voltar para Home</Link>
      </div>
    </main>
  );
}
