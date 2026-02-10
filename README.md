This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
#

Controle de Estoque — Full Stack (Online)

🔗 Site em produção:
-> https://online-stock.vercel.app/

Sistema de controle de estoque desenvolvido em Full Stack, com frontend e backend integrados em Next.js, utilizando Server Actions e banco de dados PostgreSQL (Neon), com deploy na Vercel.

- Tecnologias Utilizadas
🖥️ Frontend

Next.js (App Router)

React

TypeScript

CSS (Dark UI)

⚙️ Backend

Next.js Server Actions

Node.js (runtime serverless da Vercel)

💾 Banco de Dados

PostgreSQL (Neon – Serverless)

☁️ Deploy

Vercel

- Funcionalidades

- Listar produtos

- Cadastrar produtos

- Excluir produtos

💾 Persistência em banco PostgreSQL online

⚡ Operações via Server Actions (sem API REST)

📁 Estrutura do Projeto
Estoque Web/
│
├── app/
│   ├── actions/
│   │   └── products.ts
│   ├── lib/
│   │   └── db.ts
│   └── page.tsx
│
├── public/
├── package.json
├── tsconfig.json
└── next.config.js

▶️ Como Executar Localmente
1️⃣ Clonar o repositório
git clone <url-do-repositorio>
cd Estoque-Web

2️⃣ Instalar dependências
npm install

3️⃣ Configurar variáveis de ambiente

Crie um arquivo:

.env.local


Com:

DATABASE_URL=postgresql://USER:PASSWORD@HOST/DATABASE?sslmode=require

4️⃣ Rodar o projeto
npm run dev


Acesse:

👉 http://localhost:3000

🗃️ Banco de Dados
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT,
  description TEXT,
  quantity INTEGER NOT NULL
);


Driver utilizado:

@neondatabase/serverless

- Ideias Futuras

- Edição de produtos

- Busca e filtros

📊 Dashboard

🖼 Upload de imagens

🔐 Autenticação

👨‍💻 Autor

Desenvolvido por Douglas R. S.
📱 Google Play Developer:
https://play.google.com/store/apps/developer?id=Douglas+R.+S.+Developer
