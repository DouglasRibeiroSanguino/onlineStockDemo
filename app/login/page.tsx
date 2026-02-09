import styles from "../register/auth.module.css";
import { loginAction } from "../actions/auth";

export default function LoginPage() {
  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>CUSTOMER LOGIN</h1>

        <form action={loginAction} className={styles.form}>
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

          <button className={styles.button}>LOGIN</button>
        </form>

        <div className={styles.footer}>
          Não tem conta? <a href="/register">Criar conta</a>
        </div>
      </div>
    </main>
  );
}
