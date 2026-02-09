import Link from "next/link";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <h1>Online Stock</h1>
        <p>Gerencie seu estoque com simplicidade e controle total.</p>

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
