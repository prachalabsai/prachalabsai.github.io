# PrachaLabs — Downstream of Intelligence

The site of PrachaLabs: an independent lab — for now a personal project, not a company. The charter lives in
[`LAB.md`](LAB.md) and is rendered at `/charter`; the position essay is the first entry
in `/writing`.

**Stack:** Vite 6 · React 19 · react-router 7 (BrowserRouter + GitHub Pages 404 fallback) ·
Tailwind CSS v4 (build-time, `@tailwindcss/vite`) · react-markdown + remark-gfm + KaTeX ·
self-hosted fonts (Cormorant Garamond, Space Mono). Deployed to GitHub Pages by
`.github/workflows/deploy.yml` on push to `main` (typecheck → build → deploy).

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # tsc --noEmit (also runs in CI)
npm run build && npm run preview
```

## Publishing writing

Drop a markdown file in `posts/articles/` (essays) or `posts/journal/` (notes) — that's
it. No manifest, no copy step; everything under `posts/` is compiled in at build time.

```markdown
---
title: The Title
date: 2026-08-03
tags: [Position, AI]
excerpt: One sentence shown in list views.
type: article        # optional — "note" for journal entries; defaults from directory
streams: [2, 6]      # optional — which of the six streams it belongs to
---

Body starts here. Don't repeat the title as an H1 — the page renders it from frontmatter.
```

The slug/URL comes from the filename: `posts/articles/my-essay.md` → `/writing/my-essay`.

## Adding work

Add an entry to `content/work.ts` (types: tool, experiment, venture, paper, demo,
case-study, use-case, artifact — each tagged with its streams).

## Changing the season

Edit `content/now.ts` — the Home page's "This Season" block and the stream grid's
"active" markers update from that single file.

## The streams

The six streams are defined in `content/streams.ts`, transcribed from `LAB.md` (the
source of truth). Posts and work declare stream membership; all stream views are derived.

## Analytics

Google Analytics (GA4) is enabled via the `GA_ID` constant in `index.html`
(currently `G-7665RVEEQF`). Route changes are tracked by GA4's enhanced measurement
(history events), so no SPA-specific code is needed.

## Notes

- Tailwind v4 targets modern browsers (Safari 16.4+).
- Theme: the toggle persists an explicit choice in `localStorage`; with no saved choice, the
  hour decides — 07:00–19:00 renders light (paper + teal), night renders dark (ink + teal).
- Teal ramp: `--accent` (primary), `--accent-strong` (hover), `--accent-soft` (secondary
  marks), `--accent-deep` (reserved dark shade), `--accent-tint` (surface wash).
