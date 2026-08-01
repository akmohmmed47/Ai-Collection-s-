# 🚀 Deploying AI Collection's — get your unique URL

The fastest, free way to put this site online is **Vercel** — the project was built for it
(a `vercel.json` with all environment variables and rewrites is already included).

---

## Option 1 — Vercel (recommended, ~2 minutes, free)

Your unique URL will be:

> **https://ai-collection-s.vercel.app** ✅ (verified available)

1. Go to **https://vercel.com** and click **Sign Up** → **Continue with GitHub**
   (free account, no credit card).
2. Click **Add New… → Project**.
3. Find and select **`akmohmmed47/Ai-Collection-s-`** (or wherever this repo is).
4. Vercel auto-detects **Vite** — do **not** change the build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
5. Add **one environment variable** (Project → Settings → Environment Variables,
   or in the deploy dialog):
   - `SUPABASE_SERVICE_ROLE_KEY` — the value from Supabase dashboard →
     Settings → API keys → `service_role` (see note below).
6. Most other variables are already in `vercel.json` — just click **Deploy**.
7. Done — your site is live at `https://ai-collection-s.vercel.app`.

> 💡 To change the URL: Project → **Settings → Domains** → add e.g. `ai-collections.vercel.app`
> (if free) or your own custom domain (see Option 3).

---

## Option 2 — Netlify (free alternative)

1. Sign up at **https://app.netlify.com** with GitHub.
2. **Add new site → Import an existing project → GitHub** → pick this repo.
3. Build command: `npm run build` — publish directory: `dist`.
4. Add these environment variables (Site settings → Environment variables):
   - `VITE_SUPABASE_URL` = `https://cygetbbvdjefdgnchojv.supabase.co`
   - `VITE_SUPABASE_ANON_KEY` = the `sb_publishable_…` key from `vercel.json`
   - `SUPABASE_SERVICE_ROLE_KEY` = your service-role key from Supabase dashboard
     (Settings → API keys → `service_role`)
   - `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` = same values as above
5. Deploy → your URL will be `https://ai-collection-s.netlify.app`.

---

## Option 3 — Custom domain (nice-to-have, optional)

Buy a domain at any registrar (Namecheap, GoDaddy, Porkbun, …). Suggestions:

- `aicollections.lk` or `aicollection.lk` (Sri Lankan — requires an SL registrar like
  Site.lk / LK Domain Registry)
- `aicollections.store` / `aicollection.store` (international, cheap ~$10/yr)
- `aiclk.shop` / `aicollectionshop.com`

Then in Vercel: **Project → Settings → Domains → Add** → enter the domain and follow the
DNS instructions shown.

---

## ⚠️ Important: use your Supabase secret key safely

The Supabase **service-role key** (`sb_secret_…`) is *not* committed in this repository
(it was removed — GitHub's secret-scanning push protection blocks it). It can read and
write your whole database, so keep it only in the deployment platform:

1. Go to **https://supabase.com/dashboard** → your project (`cygetbbvdjefdgnchojv`).
2. **Settings → API keys → service_role → Roll key** (this also invalidates the old key
   that was previously exposed in the repo's zip file).
3. Paste the new key into Vercel as the `SUPABASE_SERVICE_ROLE_KEY` environment variable
   (Project → Settings → Environment Variables).

The site itself keeps working with the public anon key; only the admin panel needs the
service-role key.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Products don't load | Open supabase.com/dashboard → the free project may have **paused** after ~7 days idle. Click **Restore** in the project list. |
| Deep links 404 (e.g. refresh on `/products`) | Only relevant on GitHub Pages; Vercel/Netlify handle SPA routing via `vercel.json` rewrites automatically. |
| Login fails | Admin uses email/password Supabase auth — check the user exists in Supabase → Authentication → Users. |
| Admin panel errors on upload | Check the `product-images` bucket exists in Supabase → Storage. |
