# PrachaLabs site — operating manual

This is not just a lab front: it is an **evolving canvas to learn, think, build, and scale
toward impact and value**. The site converges the lab's output over time; growth means adding
content, never redesigning.

## What this is

- **Thesis:** "Downstream of Intelligence." Charter in `LAB.md` (rendered at `/charter`);
  position essay at `posts/articles/downstream-of-intelligence.md` (`/writing/...`).
- **For now a project, not a company.** Never use company/founder language in present-tense
  copy. Venture-building is a possible future, phrased only as such.
- **Voice:** plain, confident, substance-first. The river/upstream/downstream frame is a
  subtle thought-process device — used sparingly, never layered on. No monument/history
  embellishments. One Cauvery mention in the essay is deliberate and enough.
- **Brand:** teal = abundance (user's rationale — do not propose changing it). One hue
  family: water-ink dark / warm-paper light, 2px accent ribbon at top, teal ramp
  (`--accent`, `--accent-strong`, `--accent-soft`, `--accent-deep`, `--accent-tint`).
- **Typography roles:** Source Serif 4 = body/reading; Cormorant Garamond = display
  (`font-display`, headlines only — it is illegible as body text); Space Mono = labels.

## Architecture (the evolving system)

- `content/posts.ts` — build-time glob over `posts/**/*.md`; frontmatter: title, date (ISO),
  tags, excerpt, type (article|note), streams ([1..6]). Slug = filename. No manifests.
- `content/streams.ts` — the six streams (source of truth: `LAB.md`); derived helpers
  `postsForStream` / `workForStream` / `artifactCountForStream`.
- `content/work.ts` — real outputs only (types: tool, experiment, venture, paper, demo,
  case-study, use-case, artifact). The standard: "If it could have been made by anyone with
  model access, it doesn't ship."
- `content/now.ts` — the current season; editing this one file updates Home's This Season
  block and the stream grid's "active" markers.
- `content/ecology.ts` — the Ecology canvas (`/ecology`): the downstream mapped as basin
  layers (source → flows → ground → inhabitants → growth → climate) plus open-territory
  possibilities. A thinking surface — add/merge/retire elements freely; it is meant to churn.
- Theme: explicit toggle persists to localStorage; otherwise hour-based (07–19 light).
- Routing: BrowserRouter + `public/404.html` spa-github-pages fallback; legacy `/tools`,
  `/canvas`, `/threads`, and `#/x` URLs redirect.
- `scripts/generate-feeds.mjs` runs on `prebuild` → `public/feed.xml` + `public/sitemap.xml`
  (both gitignored).
- MarkdownRenderer (react-markdown + GFM + KaTeX) is heavy — always import it via
  `React.lazy` (see Charter.tsx / Post.tsx).

## Commands

```bash
npm run dev        # localhost:3000
npm run typecheck  # tsc --noEmit, strict — runs in CI before build
npm run build      # prebuild feeds + vite build
```

Deploy: push to `main` → `.github/workflows/deploy.yml` → GitHub Pages.

## Workbench

`workbench/` is the gitignored local staging area — thoughts, drafts, quick notes before
anything publishes. Never commit it. Graduation path: drafts → `posts/`, work entries →
`content/work.ts`, ecology elements → `content/ecology.ts`. Put new working notes there,
not in the repo root.

## Recurring tasks

- **Publish writing:** drop a `.md` in `posts/articles/` or `posts/journal/` with
  frontmatter. Don't repeat the title as an H1 in the body.
- **Add work:** append to `content/work.ts` with `streams` tags.
- **Change season:** edit `content/now.ts` only.
- **Update charter:** `LAB.md` is the user's own document — never edit it unasked; if the
  six streams change there, mirror them in `content/streams.ts`.
