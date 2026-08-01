# AI Collection's — Online Store (Sri Lanka)

Official website for **AI Collection's** — electronics, home appliances & accessories.
A React + TypeScript + Vite single-page app with a Supabase backend and a Sri Lankan
LKR / WhatsApp ordering flow.

## Features

- 🏠 Home page with featured products
- 🛍️ Product catalog with categories, search & product detail pages
- 📦 Admin dashboard (`/ak-admin` → `/admin`) to add/edit/delete products, categories & images
- 📝 Blog with posts
- 💬 WhatsApp order & inquiry links (`+94 76 402 5965`)
- 🌙 Dark / light theme, mobile-friendly Tailwind CSS design
- 🔐 Email/password admin login via Supabase Auth

## Tech stack

| Layer     | Tech                                  |
|-----------|---------------------------------------|
| Frontend  | React 19, TypeScript, Vite 7, Tailwind CSS 4, Framer Motion, React Router |
| Backend   | Vercel serverless functions (`/api/*`) |
| Database  | Supabase (PostgreSQL + Storage)       |
| Auth      | Supabase Auth (email/password)        |

## Running locally

```bash
npm install
npm run dev        # dev server at http://localhost:5173
npm run build      # production build → dist/
```

Serverless API functions in `api/` need their env vars (see `vercel.json`).

## Deploying

👉 See **[DEPLOY.md](DEPLOY.md)** for step-by-step instructions (Vercel is recommended —
the project ships with a ready-made `vercel.json`).

## Free custom domain

👉 Want a free custom domain like **aicollection.is-a.dev**? See **[DOMAIN.md](DOMAIN.md)**.
