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
