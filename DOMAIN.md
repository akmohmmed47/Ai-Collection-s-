# 🌐 Free Custom Domain: aicollection.is-a.dev

Your free custom domain: **https://aicollection.is-a.dev** — free forever, no renewal fees,
backed by Cloudflare DNS, and it works perfectly with Vercel (which hosts your site).

---

## ⚠️ Read this first (2 honest notes)

1. **Real domains (.com, .lk, .store…) are never free.** The old free domain service
   (Freenom — .tk/.ml/.ga) shut down. The best *completely free* option left is a free
   subdomain like `aicollection.is-a.dev`, which is what this guide sets up. It looks
   professional and works exactly like a normal domain for visitors.

2. **is-a.dev is aimed at personal/dev projects.** They say commercial websites *may* be
   closed at review time. Your store is a business site, so there's a small chance the
   request is declined. If that happens, use **Plan B or C** at the bottom. It costs
   nothing to try — the whole request takes ~5 minutes.

---

## What you'll need

- ✅ Your site deployed on Vercel (see **[DEPLOY.md](DEPLOY.md)** first — you need the
  Vercel dashboard for step 1)
- ✅ A GitHub account (you have one: `akmohmmed47`)

---

## Step 1 — Add the domain in Vercel (2 minutes)

1. Go to your Vercel dashboard → open your project
   (**AI Collection's** — the one deployed from this repo).
2. Click **Settings → Domains**.
3. Click **Add Domain** and type:

   ```
   aicollection.is-a.dev
   ```

4. ⛔ **Disable** the "Redirect aicollection.is-a.dev to www.aicollection.is-a.dev"
   option if you see it — you only want the main domain.
5. Click through until you see **"Continue manually"** — click it.
6. You'll see a **TXT verification value** (looks like `vercel-domain-verification=...`)
   and the DNS record Vercel wants (usually a **CNAME → `cname.vercel-dns.com`**,
   or an **A record → an IP like `216.198.79.1`**).
7. **Copy both values somewhere** — you need them in Step 3.
   (Leave the Vercel page open; don't delete the domain there.)

---

## Step 2 — Fork the is-a.dev register repo (30 seconds)

1. Open: **https://github.com/is-a-dev/register/fork**
2. Click **Create fork** (defaults are fine).

---

## Step 3 — Create 2 small files in your fork (3 minutes)

In your fork, open the **`domains`** folder, click **Add file → Create new file**, and
create these two files:

### File 1: `domains/aicollection.json`

```json
{
  "owner": {
    "username": "akmohmmed47",
    "email": "akmohmmed47@gmail.com"
  },
  "records": {
    "CNAME": "cname.vercel-dns.com"
  }
}
```

> ✏️ **Replace the records with exactly what Vercel showed you in Step 1.**
> If Vercel gave you an **A record with an IP** instead of a CNAME, use:
> ```json
> "records": {
>   "A": ["216.198.79.1"]
> }
> ```
> (`email` is optional — leave it out if you prefer, `username` is the required part.)

### File 2: `domains/_vercel.aicollection.json`

```json
{
  "owner": {
    "username": "akmohmmed47",
    "email": "akmohmmed47@gmail.com"
  },
  "records": {
    "TXT": "PASTE-THE-TXT-VALUE-FROM-VERCEL-HERE"
  }
}
```

> ✏️ Replace `PASTE-THE-TXT-VALUE-FROM-VERCEL-HERE` with the `vercel-domain-verification=…`
> string you copied in Step 1 (keep the quotes).

Commit both files (use the default "Create a new branch" option).

---

## Step 4 — Open the pull request (2 minutes)

1. Back on your fork's main page, GitHub shows a banner:
   **"This branch is 1 commit ahead of is-a-dev:main"** → click
   **Contribute → Open pull request**.
2. **Fill in the pull request template** (they read this!):
   - Domain: `aicollection.is-a.dev`
   - Link: `https://ai-collection-s.vercel.app`
   - Add a **screenshot** of your website in the description (take one, drag & drop it).
   - A short honest description, e.g.:
     > "Online store for AI Collection's — electronics, home appliances & accessories
     > (Sri Lanka). React + Vite site hosted on Vercel."
3. Click **Create pull request**.
4. *(Optional, speeds things up a lot)* Join their Discord — **https://discord.gg/is-a-dev-830872854677422150** — and post your PR link **once** in **#pull-requests**.

---

## Step 5 — Wait & enjoy (usually a few hours to 2 days)

- When a maintainer **merges your PR**, the DNS records go live within minutes.
- Vercel automatically verifies the TXT record and issues a free **HTTPS certificate**.
- Your store is now live at: **https://aicollection.is-a.dev** 🎉

> If it doesn't work immediately, wait 30–60 min (DNS propagation) and clear your cache.
> Check the PR comments — if a maintainer asked for changes, fix them promptly.

---

## Optional cleanup

In Vercel → **Settings → Domains**, you can set the old URL
(`ai-collection-s.vercel.app`) to **redirect** to `aicollection.is-a.dev` so every old
link keeps working.

---

## Plan B — if is-a.dev declines (also free)

**eu.org** gives free domains like `aicollection.eu.org`:

1. Go to **https://nic.eu.org** → **Register** (free account).
2. Request the domain `aicollection.eu.org` (mention your website).
3. Approval takes a few days to ~2 weeks.
4. Once approved, add `aicollection.eu.org` in Vercel → Settings → Domains, copy the
   records Vercel gives you, and create the same CNAME/TXT entries in eu.org's DNS panel.

## Plan C — a real domain for the price of a coffee (~$2–10/year)

If you ever want a true ".com-style" domain, registrars like **Porkbun**, **Namecheap** or
**Cloudflare Registrar** often sell `.xyz` / `.store` / `.online` for **~$1–3 the first
year** (no free lunch, but nearly). Connect it in Vercel the same way (Settings → Domains →
Add → follow the DNS instructions).

> 💡 Skip `.lk` domains for now — they cost ~$40+/year in Sri Lanka. Great for later when
> the shop grows, not needed to start.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| PR closed with "commercial" note | That's Plan B or C territory — don't re-submit, just use eu.org or a cheap domain. |
| Vercel says "Invalid Configuration" | DNS hasn't propagated yet — wait up to an hour. |
| "TXT not found" in Vercel | Check you pasted the full TXT value into `_vercel.aicollection.json` and the PR was merged. |
| Site loads but no lock icon | Wait — Vercel issues the certificate automatically within minutes of verification. |
