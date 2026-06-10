# AfriGlyph Website

This is the marketing site for [AfriGlyph](https://afriglyph.com) — the landing page, supporting pages, and everything needed to present the product to partners and investors.

The site is built as a fast, static website. When changes are pushed to the `main` branch, they deploy automatically.

## Live site

- **Production:** [afriglyph.com](https://afriglyph.com) *(once DNS is connected)*
- **Preview:** [sirstig.github.io/afriglyph](https://sirstig.github.io/afriglyph/)

## What's on the site

**Home** — The main landing page. Covers the problem (users leaving at the success screen), the product (one API call, culturally specific Glyphs), how it works in-app, the artist library, verified attribution, and the 30-day pilot offer.

**Creator attribution** — An example of what users see when they tap "Verified by AfriGlyph" inside a partner app. Shows how artist credit works in practice.

**Privacy** — Privacy policy placeholder. Ready to be filled in with final legal copy.

## Making changes

Content and design live in this repository. To update the site:

1. Edit the relevant files
2. Push to `main`
3. GitHub Actions builds and publishes the update (usually within a minute or two)

If you need a developer to make changes locally, the basics are:

```bash
npm install
npm run dev
```

That starts a local preview at [http://localhost:4321](http://localhost:4321).

## Custom domain

The site is configured for **afriglyph.com**. Once DNS is pointed at GitHub Pages and the domain is added in the repo's Pages settings, the preview URL above can be replaced by the live domain.

## Reference materials

The `Resources/` folder contains the original client prototype and reference files. Those files are not published — they're here for design and copy reference only.

## Questions

For product or pilot inquiries: [pilot@afriglyph.com](mailto:pilot@afriglyph.com)  
To book a demo: [cal.com/afriglyph/demo](https://cal.com/afriglyph/demo)
