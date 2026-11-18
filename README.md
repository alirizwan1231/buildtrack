# BuildTrack — Construction Project Management System

BuildTrack is a complete **frontend demo** of a construction project management
system ("Construction OS") for contractors running multiple sites at once.
It is built with realistic demo data — no backend, no paid APIs, no external
images. Site "photos" are pure SVG blueprint-style panels rendered in code.

## Pages

| Route | Description |
| --- | --- |
| `/` | Landing page — hero, feature grid, horizontal project rail, workflow, client-portal spotlight, CTA |
| `/dashboard` | Portfolio overview — KPI cards (active projects, workers on site, material alerts, budget used), project progress board, planned-vs-actual chart, activity feed |
| `/projects` | All 6 demo projects with progress, budget, crew and deadline |
| `/projects/[id]` | Full site file — phase timeline, daily site reports, project materials, trade-by-trade crew attendance |
| `/portal/[id]` | Premium client-facing portal — progress ring, phase checklist, verified site updates |
| `/materials` | Inventory across all sites — stock bars, reserved quantities, low-stock & critical alerts |

## Features

- Daily site reports with dates, progress % and blueprint photo panels
- Phase timelines with animated progress bars
- Material inventory with safety levels and automatic alert states
- Crew attendance by trade with animated attendance ring
- Budget vs spend tracking per project and across the portfolio
- Scroll-reveal animations, animated counters of progress, horizontal snap rail
- Lucide-style inline SVG icons only — zero emojis, zero external assets

## Tech Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Demo data in `src/data/projects.ts` and `src/data/materials.ts`

## Run Locally

```bash
npm install
npm run dev     # http://localhost:3000
```

Production build:

```bash
npm run build
npm run start
```

## Design

Dark slate "industrial premium" theme with a safety-amber accent, blueprint
grid backdrops and hazard-stripe details — inspired by leading construction
dashboard concepts on Dribbble (ConstroVision, Building Plan UI) and modern
dark SaaS dashboards. A backend (auth, database, file uploads) can be wired
to the same data models later; the demo is intentionally frontend-only.
