# Beacons-style brand app (prototype)

High-fidelity **Next.js (App Router)** front-end for a brand-side creator marketing workflow: discovery, shortlists, campaigns, deliverables, and reporting. All data is **local JSON** in the repo—no database or external APIs.

## Quick start

```bash
cd web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). You will be redirected to `/dashboard`. Use **Login** at `/login` and **Continue as Demo Brand User** (no real authentication).

Production build:

```bash
cd web
npm run build
npm start
```

## Repository layout

| Path | Purpose |
|------|---------|
| `web/` | Next.js 15 application (TypeScript, Tailwind, shadcn-style UI, Recharts) |
| `web/app/` | App Router routes and layouts |
| `web/components/` | Shared UI and feature components (`AppShell`, tables, cards, charts) |
| `web/data/` | JSON “storage layer” (brands, creators, campaigns, reports, etc.) |
| `web/lib/` | Types, formatters, constants, and `data.ts` accessors (swap for Supabase later) |
| `web/public/assets/` | Placeholder brand logo, thumbnails |
| `beacons_brand_screens/` | Reference screenshots used to infer UX (not bundled into the app by default) |

## Route map

| Route | Description |
|-------|-------------|
| `/` | Redirects to `/dashboard` |
| `/login` | Mock login; demo button → `/dashboard` |
| `/dashboard` | Summary cards, active campaigns, top creators, recent reports |
| `/creators` | Discovery grid + CRM-style table, filters |
| `/creators/[id]` | Creator detail + media-kit-style hero |
| `/shortlists` | Shortlist cards |
| `/shortlists/[id]` | Roster / comparison cards |
| `/campaigns` | Campaign list with Draft / Active / Completed tabs |
| `/campaigns/[id]` | Overview, pitch preview, tabbed creators / deliverables / approvals / report |
| `/campaigns/[id]/setup` | Campaign setup form (mock save) |
| `/campaigns/[id]/deliverables` | Deliverable tracking table |
| `/campaigns/[id]/select-posts` | Post picker for reports (mock confirm) |
| `/reports` | Report index |
| `/reports/[id]` | Report detail: KPIs, charts, platform/creator/post tabs, send-to-client dialog |
| `/settings` | Mock brand, team, notifications |

## Mock data structure

Data is loaded via static JSON imports in `web/lib/data.ts`. Main files:

- `web/data/brands/brand-1.json` — demo brand (Away-inspired name)
- `web/data/creators.json` — 16 creators (platform stats, audience, tags)
- `web/data/campaigns.json` — campaigns with `creatorIds`, `deliverableIds`, `reportId`
- `web/data/deliverables.json` — deliverables linked by `campaignId` / `creatorId`
- `web/data/reports.json` — metrics, time series, demographics, top posts
- `web/data/shortlists.json` — shortlists of creator IDs
- `web/data/messages/thread-1.json` — sample thread
- `web/data/notifications.json` — sample notifications

To add per-creator files (e.g. `creators/creator-1.json`), split the JSON and extend `data.ts` to aggregate imports—the types in `web/lib/types.ts` stay the source of truth.

## Replacing file storage with a real backend

1. **Keep `lib/types.ts`** as your domain model (or generate types from your DB schema).
2. **Replace functions in `lib/data.ts`** (`getCreators`, `getCampaignById`, etc.) with async calls to Supabase, REST, or tRPC. Server Components can `await` these directly; Client Components should receive data via props or React Query/SWR later.
3. **Auth** — swap `/login` for your provider; protect `(main)` routes with middleware once sessions exist.
4. **Images** — point `avatarUrl` / `thumbnailUrl` to Supabase Storage or a CDN; keep fallbacks in `CreatorAvatar`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Run production server |
| `npm run lint` | ESLint |
