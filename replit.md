# Backstory — Replit Project

## Overview
A landing page for **Backstory**, a storytelling workshop service. Built as a full-stack TypeScript app with a React frontend and Express backend.

## Architecture
- **Frontend**: React 18 + Vite, Tailwind CSS v3, Framer Motion, Radix UI / Shadcn components, Wouter routing, TanStack Query
- **Backend**: Express 5, Drizzle ORM, PostgreSQL (`pg`), Passport.js (scaffolded, not actively used)
- **Shared**: Drizzle schema + Zod validation in `shared/schema.ts`
- **Styling**: Tailwind CSS v3 config lives in `tailwind.config.cjs` (CommonJS, required by Tailwind's jiti loader)

## Key Directories
- `client/src/pages/` — Main page (`BackstoryCopy.tsx`) and 404
- `client/src/pages/sections/` — Modular landing page sections (Nav, Showcase, Workshop Cards, Featured Project, Testimonial, CTA)
- `client/src/components/ui/` — Shadcn UI component library
- `server/` — Express server, routes (placeholder), storage interface
- `shared/` — Database schema shared between client and server
- `client/public/figmaAssets/` — Design assets imported from Figma

## Scripts
- `npm run dev` — Start development server on port 5000
- `npm run build` — Build for production (`dist/`)
- `npm run start` — Run production build
- `npm run db:push` — Push Drizzle schema to PostgreSQL

## Database
PostgreSQL via Replit's built-in database. Schema defined with Drizzle ORM in `shared/schema.ts`. Run `npm run db:push` after schema changes.

## Notes
- Tailwind config must stay as `tailwind.config.cjs` (CommonJS) because Tailwind's `jiti` loader doesn't support top-level `await` / ESM imports in config files
- No active auth flow despite Passport.js being installed — auth routes are not yet registered
- No external third-party API integrations
