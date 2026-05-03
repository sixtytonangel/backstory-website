# Backstory — Next.js Website

## Overview
A Next.js TypeScript website for **Backstory**, a storytelling workshop service based in Hong Kong. Built from Figma designs with two pages: a landing (Workshops) page and a Showcase projects page.

## Architecture
- **Framework**: Next.js 14 (App Router), TypeScript
- **Styling**: Tailwind CSS v3, Google Fonts (Playfair Display + DM Sans via `next/font`)
- **No backend**: Static content only — no API routes, no database, no state management
- **Assets**: Figma-exported images/icons in `public/` directory

## Key Directories
- `app/` — Next.js App Router pages
  - `app/layout.tsx` — Root layout with font setup and metadata
  - `app/globals.css` — Global Tailwind base styles
  - `app/page.tsx` — Landing/Workshops page
  - `app/showcase/page.tsx` — Showcase projects page
- `components/` — Shared React components
  - `components/Navbar.tsx` — Sticky navigation with active link state
  - `components/Footer.tsx` — Footer with links and copyright
- `public/` — Static assets (Figma SVG icons and PNG images)

## Pages
1. **`/`** — Landing page: Hero, What We Do, Workshop Formats, CTA, Footer
2. **`/showcase`** — Showcase: Intro, Project Cards (3), Featured Project (Indiahikes detail), CTA, Footer

## Design Tokens
- Background: `#f7f3ee` (warm off-white), `#f0ebe3` (slightly darker cream)
- Dark brand: `#2d2418` (dark brown)
- Accent: `#b5471b` (terracotta)
- Fonts: `font-playfair` (headings), `font-dm` (body)

## Scripts
- `npx next dev -p 5000` — Development server (used by Replit workflow)
- `npm run build` — Production build
- `npm run start` — Production server on port 5000
- `npm run lint` — ESLint check

## Config Files
- `next.config.mjs` — Next.js config with `output: "standalone"` for Docker
- `tailwind.config.cjs` — Tailwind config (CommonJS, required by Tailwind's jiti loader)
- `tsconfig.json` — TypeScript config for Next.js App Router

## Deployment
- **Docker**: `Dockerfile` uses multi-stage build (deps → builder → runner). Produces a minimal Alpine image.
- **Vercel**: Ready to deploy. Add `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` secrets to GitHub.
- **GitHub Actions**: `.github/workflows/ci.yml` runs lint + build on every push, builds Docker image on main, and deploys to Vercel on main.

## Notes
- `tailwind.config.cjs` must stay as CommonJS — Tailwind's `jiti` loader doesn't support top-level await
- Old Express/Vite files (`server/`, `client/`, `shared/`) are preserved but unused
- Workflow command: `npx next dev -p 5000` (port 5000 required by Replit)
