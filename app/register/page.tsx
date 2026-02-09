"use client";

import styles from "./auth.module.css";
import { registerAction } from "../actions/auth";

export default function RegisterPage() {
  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>CREATE ACCOUNT</h1>

        <form action={registerAction} className={styles.form}>
          <div className={styles.field}>
            <input name="email" type="email" placeholder="Email ID" required />
          </div>

          <div className={styles.field}>
            <input
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </div>

          <button className={styles.button}>CREATE ACCOUNT</button>
        </form>

        <div className={styles.footer}>
          Já possui conta? <a href="/login">Entrar</a>
        </div>
      </div>
    </main>
  );
}
