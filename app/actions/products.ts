'use server';

import { sql } from '../lib/db';
import { revalidatePath } from 'next/cache';

export async function getProducts() {
  const products = await sql`SELECT * FROM products ORDER BY id DESC`;
  return products;
}

export async function createProduct(formData: FormData) {
  const name = formData.get('name') as string;
  const type = formData.get('type') as string;
  const description = formData.get('description') as string;
  const quantity = Number(formData.get('quantity'));

  await sql`
    INSERT INTO products (name, type, description, quantity)
    VALUES (${name}, ${type}, ${description}, ${quantity})
  `;

  revalidatePath('/');
}

export async function deleteProduct(id: number) {
  await sql`DELETE FROM products WHERE id = ${id}`;
  revalidatePath('/');
}
