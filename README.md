# Real Estate Academy

Marketing site for Real Estate Academy — pre-licensing real estate education across **Arizona, California, and Nevada**.

## What this is

A modern, fast, fully-static marketing site. No build step, no database — just HTML, CSS, and JavaScript. Loads instantly anywhere.

## Pages

- `index.html` — Home page (the homepage, loads at the root of your domain)
- `Get Licensed Arizona.html` — Arizona pre-licensing course details + register link
- `Get Licensed California.html` — California pre-licensing course details + register link
- `Get Licensed Nevada.html` — Nevada pre-licensing course details + register link

## Structure

```
/
├── index.html                       # Home page
├── Get Licensed Arizona.html        # AZ pre-licensing
├── Get Licensed California.html     # CA pre-licensing
├── Get Licensed Nevada.html         # NV pre-licensing
├── styles.css                       # Shared brand styles
├── get-licensed.css                 # Get-Licensed page styles
├── *.jsx                            # React components (in-browser JSX via Babel)
├── image-slot.js                    # Drag-and-drop image placeholder web component
├── tweaks-panel.jsx                 # In-page tweaks UI (toggle from toolbar)
└── assets/                          # Logos, hero photo, why-cards, state photos
```

## How to deploy

### Option 1 — Vercel (recommended)

1. Push this repo to GitHub
2. Sign in to [vercel.com](https://vercel.com) with GitHub
3. Import the repo → Deploy
4. Add custom domain in Project Settings → Domains
5. Update DNS at your domain registrar to Vercel's records

### Option 2 — Netlify

1. Push to GitHub
2. [Netlify](https://netlify.com) → Import → choose repo → Deploy
3. Same domain step

### Option 3 — Traditional shared hosting (GoDaddy cPanel, etc.)

1. Upload **all** files (including the `assets/` folder) into `public_html/`
2. Visit your domain — `index.html` loads automatically

## Local preview

```bash
npm start         # serves at http://localhost:3000
```

Or just double-click `index.html` in a browser.

## Editing content

- **Brand text + headlines** — search `sections-a.jsx`, `sections-b.jsx`, `hero.jsx`
- **State-specific data** (courses, prices, training centers, contact info) — top of `get-licensed.jsx`, `STATE_DATA` object
- **Testimonials** — top of `sections-a.jsx`, `TESTIMONIALS` array
- **Register-for-class URLs** — each state's `registerUrl` in `STATE_DATA`
- **Images** — replace files in `assets/` (keep filenames the same)

## Tech notes

- React 18 + JSX, compiled in-browser via Babel Standalone (no build step)
- Web components: `<image-slot>` for drag-and-drop image placeholders
- Pinned, integrity-checked CDN scripts for React + Babel
- Privacy: OneTrust DSAR forms linked in footer for CA + NV CCPA compliance
- DMCA-protected badge in footer
- Mobile responsive
- No tracking scripts (add your own if needed)

## License

All rights reserved. © Real Estate Academy.
