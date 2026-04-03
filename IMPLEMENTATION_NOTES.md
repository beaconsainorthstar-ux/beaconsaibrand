# Implementation notes

## Inferred from screenshots

Reference assets live in `beacons_brand_screens/` (see `README.txt` inside that folder for ordering). From the contact sheet and filenames we inferred:

1. **Campaign reporting** — KPI row (creators, posts, reach, engagement), reach-over-time bars, age breakdown, platform mix, share/send flow to clients.
2. **Creator CRM** — Dense table: status, reach, engagement, location, tags; filter/search affordances.
3. **Pitch decks / campaigns** — Brand + campaign title, budget range, selected creator avatars; generate/review steps.
4. **Roster / one-sheet** — Multiple creators in a grid with quick stats for comparison.
5. **Media kit** — Gradient/social-forward hero, follower totals, collaborate CTA, demographics and top content blocks.

## Assumptions

- **Single demo brand** (`brand-1`) powers dashboards and pitch cards; multi-brand accounts can reuse the same UI with a brand switcher later.
- **Dark theme** matches the dominant look in the references; light tokens exist in `globals.css` if you want a toggle (`next-themes` was noted as a TODO in Settings).
- **“Generate proposal” / “Send to client”** are **mock** actions (alerts, dialogs, local state only).
- **Approval queue** on the dashboard is illustrative copy linking to deliverables—not a separate data model yet.

## Screens added without a 1:1 screenshot

- **Global app shell** — Persistent sidebar + top search (search is non-functional beyond layout).
- **Settings** — Placeholder team and notification toggles.
- **Campaign setup** — Full form with mock “save” to illustrate draft persistence expectations.
- **Select posts** — Standalone route under each campaign when top posts exist in the linked report.
- **Empty / edge states** — Handled minimally (e.g. select-posts when no posts).

## What to improve next

- **Real filtering modals** for CRM (multi-select tags, upload/intake flow from screenshot 06).
- **PDF / share links** for roster one-sheet and reports.
- **Persistent client-side state** (e.g. Zustand) for setup drafts before backend exists.
- **Image pipeline** — Replace gradient/placeholder thumbnails with optimized media from storage.
- **Accessibility pass** — Table row selection, focus order in dialogs, chart color contrast.
- **Tests** — Smoke tests for navigation and data loaders once APIs exist.
