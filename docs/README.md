# Kairos Lux Works Website

This repo contains the Kairos Lux Works marketing site (Vite + React + Tailwind).

## Quick links
- **Staging site:** https://beta.kairoslux.ai
- **Docs (north star):** ./docs/README.md
- **Master control spec:** ./docs/KLW_MASTER_CONTROL_SPEC.md
- **Canonical site copy:** ./docs/KLW_WEBSITE_COPY_CANONICAL.md
- **Revision history:** ./docs/KLW_REVISION_HISTORY.md

## Editing workflow (non-technical friendly)
1. Edit files directly in GitHub (web editor) and commit to `main`.
2. Cloudflare Pages automatically rebuilds and deploys the site.
3. Confirm changes by visiting the staging URL and taking screenshots for review.

## Local development (optional)
```bash
npm install
npm run dev
```

## Build

npm run build

Output directory: dist
Deployment

This site is deployed via Cloudflare Pages from the main branch.
Build command: npm run build
Build output directory: dist
How we avoid “context drift”

Before making content changes:

    Read docs/KLW_MASTER_CONTROL_SPEC.md

    Use only approved language from docs/KLW_WEBSITE_COPY_CANONICAL.md

After making changes:

    Update docs/KLW_REVISION_HISTORY.md with what changed and why.
