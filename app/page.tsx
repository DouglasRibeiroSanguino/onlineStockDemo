import Link from "next/link";
import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <span className={styles.badge}>Online Stock</span>

        <h1 className={styles.title}>
          Controle profissional do seu <span>Estoque</span>
        </h1>

        <p className={styles.subtitle}>
          Cadastre produtos, acompanhe entradas e saídas e tenha relatórios
          claros para tomar decisões melhores.
        </p>

        <div className={styles.actions}>
          <Link href="/register" className={styles.primary}>
            Criar conta
          </Link>

          <Link href="/login" className={styles.secondary}>
            Entrar
          </Link>
        </div>

        {/* Preview discreto */}
        <div className={styles.preview}>
          <Image
            src="/dashboard-preview.png"
            alt="Preview do sistema Online Stock"
            width={420}
            height={260}
          />
        </div>

        {/* benefícios */}
        <ul className={styles.features}>
          <li>📦 Controle de produtos</li>
          <li>📊 Relatórios inteligentes</li>
          <li>☁️ Acesso online e seguro</li>
        </ul>
      </div>
    </main>
  );
}
