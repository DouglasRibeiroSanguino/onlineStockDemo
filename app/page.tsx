import { createProduct, getProducts, deleteProduct } from './actions/products';

export default async function Home() {
  const products = await getProducts();

  return (
    <main style={{ padding: 20 }}>
      <h1>Controle de Estoque</h1>

      <form action={createProduct} style={{ marginBottom: 20 }}>
        <input name="name" placeholder="Nome" required />
        <input name="type" placeholder="Tipo" />
        <input name="description" placeholder="Descrição" />
        <input name="quantity" type="number" placeholder="Qtd" required />
        <button type="submit">Adicionar</button>
      </form>

      <hr />

      {products.map((p: any) => (
        <div key={p.id} style={{ marginBottom: 10 }}>
          <b>{p.name}</b> — Qtd: {p.quantity}
          <form action={async () => {
            'use server';
            await deleteProduct(p.id);
          }}>
            <button>Excluir</button>
          </form>
        </div>
      ))}
    </main>
  );
}
