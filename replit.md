# Backstory — Next.js Website

## Overview
Static marketing website for **Backstory**, a storytelling workshops company. Two pages: a landing/workshops page and a showcase/projects page. Faithful to Figma designs.

## Stack
- **Framework**: Next.js 14 (App Router), TypeScript
- **Styling**: Tailwind CSS v3 + PostCSS (CommonJS configs)
- **Fonts**: Playfair Display (headings) + DM Sans (body) via `next/font/google`
- **No backend, no database, no state management** — purely static

## Running the App
The workflow runs a **production build** then serves it:
```
npx next build && npx next start -p 5000
```
This is intentional — production mode eliminates CSS injection issues and WebSocket HMR problems that occur in Replit's proxied dev environment.

> **After any code change**, restart the "Start application" workflow to rebuild and serve the updated site.

## Project Structure
```
app/
  layout.tsx        — Root layout (fonts, metadata, Navbar + Footer)
  globals.css       — Tailwind directives + global CSS variables
  page.tsx          — Landing / Workshops page
  showcase/
    page.tsx        — Showcase / Projects page
components/
  Navbar.tsx        — Sticky nav with active-link detection
  Footer.tsx        — Site footer
public/             — Static assets (images from Figma)
Dockerfile          — Multi-stage Alpine build for deployment
.github/workflows/  — CI/CD (lint, build, Docker, Vercel deploy)
postcss.config.cjs  — PostCSS config (CommonJS — required for Next.js)
tailwind.config.cjs — Tailwind config (CommonJS)
next.config.mjs     — Next.js config
```

## Design Tokens
| Token    | Value     | Usage                    |
|----------|-----------|--------------------------|
| bg       | `#f7f3ee` | Page background          |
| dark     | `#2d2418` | Headings, logo           |
| accent   | `#b5471b` | Labels, borders, arrows  |
| cream    | `#f0ebe3` | Section backgrounds      |
| muted    | `#6b5f52` | Body text                |

## Key Notes
- `postcss.config.cjs` **must** be `.cjs` (CommonJS) — using `.js` in a `"type":"module"` project silently breaks PostCSS in Next.js
- `tailwind.config.cjs` has no plugins to keep loading reliable
- `output: standalone` was removed from `next.config.mjs` since it conflicts with `next start`; Dockerfile uses `next build` then `node .next/standalone/server.js`
