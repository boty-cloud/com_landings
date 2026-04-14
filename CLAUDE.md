@AGENTS.md

# CLAUDE.md — Dynamic Proposals App (com_landings)

## Project Overview
Dynamic proposal landing page factory. Each commercial proposal is a Firestore document rendered by a single Next.js template via unique URLs (`/proposals/[id]`). Built for Boty's sales team to send client-specific AI/CRM implementation proposals.

## Tech Stack
- **Framework:** Next.js 16 (App Router, TypeScript, Server Components)
- **Database:** Firestore (collection: `proposals`)
- **Hosting:** Google Cloud Run (GCP project: `boty-app`, region: `us-central1`)
- **CI/CD:** Cloud Build (`cloudbuild.yaml`) — builds Docker image, deploys to Cloud Run, invalidates CDN
- **Font:** Inter (via `next/font/google`)
- **Styling:** Vanilla CSS with CSS custom properties (`app/globals.css`)

## Project Structure
```
app/
  layout.tsx              # Root layout (Inter font, noindex for all pages)
  page.tsx                # Root "/" — minimal landing, proposals need direct links
  globals.css             # All styles (dark theme, gradient accents, responsive)
  proposals/[id]/
    page.tsx              # SSR — fetches Firestore doc by ID, renders all sections
    not-found.tsx         # 404 for invalid proposal IDs

components/               # Reusable presentational Server Components
  Header.tsx, Hero.tsx, Intro.tsx, ModuleCards.tsx,
  IAHighlight.tsx, Pricing.tsx, Implementation.tsx, CTA.tsx, Footer.tsx

lib/
  firebase.ts             # Client-side Firebase init (for future use)
  firebase-admin.ts       # Server-side admin SDK (used by SSR pages)
  firestore.ts            # getProposal(id) helper

types/
  proposal.ts             # Proposal, ModuleItem, PricingPlan interfaces

scripts/
  seed-lidherma.ts        # Seeds Lidherma proposal to Firestore

public/logos/             # Client & Boty logo assets
  Boty/                   # Version negativo.png, Iso positivo.png, etc.
  Lidherma/               # Client logo image
```

## Commands
```bash
npm run dev               # Start dev server (localhost:3000)
npm run build             # Production build (Turbopack)
npm run start             # Start production server
npm run seed:lidherma     # Seed Lidherma proposal to Firestore
```

## How to Create a New Proposal
1. Create a new seed script in `scripts/` (or duplicate `seed-lidherma.ts`)
2. Fill in the `Proposal` typed object with client-specific data (see `types/proposal.ts`)
3. Add client logos to `public/logos/<ClientName>/`
4. Run `npx tsx scripts/seed-<client>.ts` to push to Firestore
5. Share the link: `https://<domain>/proposals/<proposal-id>`
6. Add a `"seed:<client>"` script to `package.json`

## Data Model (Firestore)
- **Collection:** `proposals`
- **Document ID:** Slug like `lidherma-belgrano-2026` (or UUID for extra security)
- **Shape:** See `types/proposal.ts` — sections are typed fields (hero, intro, modules, iaHighlight?, pricing, implementation, cta, footer)
- All sections are optional via `?` — components conditionally render
- HTML is allowed in string fields (rendered via `dangerouslySetInnerHTML`) — safe because data is internal, not user-submitted

## Key Conventions
- **Language:** All proposals in Argentine Spanish (voseo: "tenés", "podés", "conocé")
- **SEO:** All proposal pages have `robots: { index: false, follow: false }` — private links only
- **Logos:** Always stored in `public/logos/<ClientName>/`, referenced in Firestore as `/logos/<ClientName>/filename`
- **Components:** All are React Server Components (no `"use client"`) — purely presentational, receive props from page
- **Image paths:** In Firestore data use `/logos/...` (no `public/` prefix — Next.js serves `public/` at root)
- **Firebase Admin:** Only used server-side in `lib/firebase-admin.ts`. Never import in client components
- **Auth:** For local dev, set `GOOGLE_APPLICATION_CREDENTIALS` env var to service account JSON path. In Cloud Run, credentials are automatic

## Environment Variables
- Firebase config: `NEXT_PUBLIC_FIRESTORE_*` vars in `.env.local`
- GCP: `GOOGLE_CLOUD_PROJECT=boty-app`, `GOOGLE_CLOUD_LOCATION=us-central1`
- See `.env.local` for full list (secrets — do not commit)

## Deployment
- Push to repo triggers Cloud Build (`cloudbuild.yaml`)
- Builds Docker image → pushes to GCR → deploys to Cloud Run → invalidates CDN cache
- Dockerfile expects standard Next.js output (`.next/`, `package.json`, `public/`)

## Existing Proposals
- **Lidherma:** `lidherma-belgrano-2026` — CRM+AI for cosmetics distributor (5 modules, 2 pricing tiers)
