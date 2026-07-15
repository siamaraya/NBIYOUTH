# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

เว็บไซต์ www.nbiyouth.com — โครงการเยาวชนสร้างชาติ (NBI-Youth Club) ของสถาบันการสร้างชาติ. Static SPA, เนื้อหาภาษาไทยทั้งหมด. Source spec อยู่ในโฟลเดอร์แม่: `../โครงสร้างเว็บ www.nbiyouth.com.png` (sitemap 8 หมวด) และ `../ข้อมูล.pdf` (เนื้อหาต้นฉบับ).

## Commands

```bash
npm run dev        # dev server (http://localhost:5173)
npm run build      # tsc -b && vite build → dist/ (base "/")
npm run preview    # serve dist/
```

No tests, no linter configured. `tsc -b` (strict, noUnusedLocals) is the only check — run `npm run build` to verify changes.

### Production deploy (GitHub Pages)

Repo: `siamaraya/NBIYOUTH` · Live: https://siamaraya.github.io/NBIYOUTH/

Deploy is **manual via gh-pages branch** — the `siamaraya` OAuth token lacks `workflow` scope, so GitHub Actions files cannot be pushed (remote rejects them). Do NOT add `.github/workflows/` unless the token gets refreshed with `gh auth refresh -s workflow -u siamaraya`.

```bash
gh auth switch -u siamaraya   # if not already active
git push                      # source → main
GHPAGES=true npx vite build && cp dist/index.html dist/404.html && touch dist/.nojekyll
cd dist && git init -b gh-pages && git add -A && git commit -m "deploy" \
  && git push -f https://github.com/siamaraya/NBIYOUTH.git gh-pages && cd .. && rm -rf dist/.git
```

Git author for this repo: `Siam Araya <siamaraya.co@gmail.com>` (already set in local git config).

## Architecture

Vite 6 + React 18 + TypeScript + Tailwind CSS v4 + React Router v6. 9 routes defined in `src/App.tsx`, one file per page in `src/pages/`.

**Content lives in `src/data/`, not in components.** To update site content (camp videos, universities, map pins, reunions, council roles, nav/socials), edit these files only:
- `camps.ts` — 22 camp videos gen 1–18 (YouTube IDs; thumbnails come from img.youtube.com)
- `universities.ts` — 12 world universities (group names used in camps)
- `network.ts` — Thailand map pins (SVG coords), reunion table rows, council committee roles
- `site.ts` — nav menu + dropdown anchors, social links, the three pillars (คนดี/คนเก่ง/คนกล้า), pledge text

**Base-path rule (critical):** the site deploys under `/NBIYOUTH/` on GitHub Pages. Every reference to a file in `public/` MUST go through `asset()` from `src/lib/asset.ts` — never write `src="/images/..."`. Router gets `basename={import.meta.env.BASE_URL}` in `main.tsx`; `vite.config.ts` switches base on the `GHPAGES` env var. In `index.html` use `%BASE_URL%` prefix.

**Tailwind v4, no config file:** design tokens are declared in `@theme` inside `src/index.css` (colors: `forest pine moss leaf sprout teal lagoon coral sun mint cream ink`; fonts: Mitr display / Anuphan body). Never compose Tailwind class names at runtime (`hover:${x}` breaks the scanner) — store complete class strings in data/constants.

**Brand system:** tri-color identity from the club logo — teal = คนดี, sun = คนเก่ง, coral = คนกล้า — used consistently (navbar/footer strips, SectionHeading underline dots, pledge, pillar cards). No white borders anywhere; depth comes from shadows and tinted surfaces (`shadow-forest/8`, `bg-mint`). Page anatomy: `PageHeader` (forest hero + wave divider) → sections with `SectionHeading` + `Reveal` (IntersectionObserver scroll-in). Sections awaiting real data use `ComingSoon` — replace those as content arrives; keep visitor-facing text free of dev notes (file paths, TODO).
