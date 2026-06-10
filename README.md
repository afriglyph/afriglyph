# AfriGlyph Website

Production marketing site for [AfriGlyph](https://afriglyph.com) — cultural infrastructure for African fintech. Built with Astro 6 (static output).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Build

```bash
SITE_URL=https://afriglyph.com npm run build
```

Output is written to `dist/`. Set `SITE_URL` to your production domain before building so canonical URLs and the sitemap are correct.

```bash
npm run preview
```

## Deploy

The build is a static site — upload `dist/` to any static host.

### GitHub Pages (recommended)

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and deploys on every push to `main`.

**One-time setup:**

1. Push this repo to GitHub.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to `main` (or run the workflow manually from the **Actions** tab).

The site deploys to GitHub Pages. `public/CNAME` is set to `afriglyph.com` for a custom domain.

**Custom domain (`afriglyph.com`):**

1. In **Settings → Pages → Custom domain**, enter `afriglyph.com` and save.
2. At your DNS provider, add the records GitHub shows (usually an `A` record to GitHub IPs, or a `CNAME` to `<user>.github.io`).
3. Enable **Enforce HTTPS** once DNS has propagated.

**Repository variables** (optional, **Settings → Secrets and variables → Actions → Variables**):

| Variable | Default | Purpose |
|----------|---------|---------|
| `SITE_URL` | `https://afriglyph.com` | Canonical URLs and sitemap |
| `BASE_PATH` | _(empty)_ | Only if serving from `username.github.io/repo-name` without a custom domain — set to `afriglyph` |

With a custom domain at the repo root, leave `BASE_PATH` unset.

### Vercel

```bash
npm i -g vercel
vercel
```

Set environment variable `SITE_URL` to your production URL in the Vercel dashboard.

### Netlify

```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

Build command: `npm run build`  
Publish directory: `dist`  
Environment: `SITE_URL=https://yourdomain.com`

### Cloudflare Pages

Build command: `npm run build`  
Build output directory: `dist`  
Environment variable: `SITE_URL=https://yourdomain.com`

### Generic static hosting

1. Run `SITE_URL=https://yourdomain.com npm run build`
2. Upload the contents of `dist/` to your host (S3, GitHub Pages, etc.)
3. Point DNS at the host and enable HTTPS

## Project structure

```
src/
  components/     Nav, Footer, landing sections
  layouts/        BaseLayout (SEO, fonts, meta)
  pages/          /, /creator-attribution, /privacy
  styles/         Design tokens + global CSS
  scripts/        Scroll animations, mobile nav, glyph carousel
public/
  images/         Logo and glyph assets (extracted from client prototype)
  robots.txt
  llms.txt        AI crawler summary
```

Client reference materials remain in `Resources/` and are not deployed.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Main landing page |
| `/creator-attribution` | Example artist attribution shell |
| `/privacy` | Privacy policy placeholder |
