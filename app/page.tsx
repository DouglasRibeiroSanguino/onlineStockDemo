import Link from "next/link";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <span className={styles.badge}>Online Stock</span>

        <h1 className={styles.title}>
          Controle total do seu <span>Estoque</span>
        </h1>

        <p className={styles.subtitle}>
          Gerencie produtos, entradas e saídas com segurança, rapidez e uma
          interface profissional.
        </p>

        <div className={styles.actions}>
          <Link href="/login" className={styles.primary}>
            Entrar
          </Link>

          <Link href="/register" className={styles.secondary}>
            Criar conta
          </Link>
        </div>
      </div>
    </main>
  );
}
