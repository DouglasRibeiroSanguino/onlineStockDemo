import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import styles from "./dashboard.module.css";
import UserMenu from "./UserMenu";
import Link from "next/link";

export default async function Dashboard() {
  const session = (await cookies()).get("session");

  if (!session) {
    redirect("/login");
  }

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Dashboard</h1>

        <div className={styles.headerActions}>
          <Link href="/products" className={styles.productsBtn}>
            📦 Produtos
          </Link>

          <UserMenu email={session.value} />
        </div>
      </header>

      <section className={styles.cards}>
        <div className={styles.card}>
          <span>Total de produtos</span>
          <strong>128</strong>
        </div>

        <div className={styles.card}>
          <span>Produtos em estoque</span>
          <strong>102</strong>
        </div>

        <div className={styles.card}>
          <span>Estoque baixo</span>
          <strong className={styles.low}>6</strong>
        </div>

        <div className={styles.card}>
          <span>Última atualização</span>
          <strong>Hoje</strong>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Resumo do estoque</h2>

        <div className={styles.list}>
          <div className={styles.item}>
            <span>Teclado Mecânico</span>
            <span className={styles.ok}>34 un</span>
          </div>

          <div className={styles.item}>
            <span>Mouse Gamer</span>
            <span className={styles.low}>3 un</span>
          </div>

          <div className={styles.item}>
            <span>Monitor 24"</span>
            <span className={styles.ok}>12 un</span>
          </div>

          <div className={styles.item}>
            <span>Headset</span>
            <span className={styles.low}>2 un</span>
          </div>
        </div>
      </section>
    </main>
  );
}
