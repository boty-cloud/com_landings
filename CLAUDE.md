@AGENTS.md

# CLAUDE.md — Dynamic Proposals App (com_landings)

## Project Overview
Dynamic proposal landing page factory. Each commercial proposal is a Firestore document rendered by a single Next.js template via unique URLs (`/[id]`). Supports two brands:
- **Boty proposals:** AI implementation proposals (original purple/dark theme)
- **Auren proposals:** Professional services consulting proposals (Auren red/gray brand colors, following Auren corporate identity guidelines)

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
  globals.css             # All styles (Boty dark theme + Auren light theme)
  [id]/
    page.tsx              # SSR — fetches Firestore doc by ID, renders brand-specific sections
    not-found.tsx         # 404 for invalid proposal IDs

components/               # Reusable presentational Server Components
  Header.tsx, Hero.tsx, Intro.tsx, ModuleCards.tsx,
  IAHighlight.tsx, Pricing.tsx, Implementation.tsx, CTA.tsx, Footer.tsx
  auren/                  # Auren-specific components (for brand === "auren")
    CompanyUnderstanding.tsx  # 1. Entendimiento de la empresa
    NeedUnderstanding.tsx     # 2. Entendimiento de la necesidad
    Solution.tsx              # 3. Solución (fases de implementación)
    AboutUs.tsx               # 4. Quiénes somos
    Team.tsx                  # 6. Equipo de trabajo

lib/
  firebase.ts             # Client-side Firebase init (for future use)
  firebase-admin.ts       # Server-side admin SDK (used by SSR pages)
  firestore.ts            # getProposal(id) helper

types/
  proposal.ts             # Proposal, ModuleItem, PricingPlan interfaces

scripts/
  seed-lidherma.ts        # Seeds Lidherma proposal to Firestore (Boty brand)
  seed-oca.ts             # Seeds OCA LOG S.A. proposal to Firestore (Boty brand)
  seed-auren.ts           # Seeds Auren Latin America proposal to Firestore (Boty brand)
  seed-guayal.ts          # Seeds Guayal IA Assessment proposal to Firestore (Boty brand)
  seed-guayal-implementation.ts  # Seeds Guayal Implementation (End-to-End Framework) to Firestore (Boty brand)
  seed-auren-template.ts  # 🆕 Template for Auren-branded proposals (Auren brand)

public/logos/             # Client & Boty logo assets
  Boty/                   # Version negativo.png, Iso positivo.png, etc.
  Lidherma/               # Client logo image
  OCA/                    # OCA_Boty.png
  Auren/                  # Auren.jpeg
  Guayal/                 # Guayal.jpeg
```

## Commands
```bash
npm run dev               # Start dev server (localhost:3000)
npm run build             # Production build (Turbopack)
npm run start             # Start production server
npm run seed:lidherma     # Seed Lidherma proposal to Firestore
npm run seed:oca          # Seed OCA proposal to Firestore
npm run seed:auren        # Seed Auren proposal to Firestore
npm run seed:guayal       # Seed Guayal IA Assessment proposal to Firestore
npm run seed:guayal-implementation  # Seed Guayal Implementation proposal to Firestore
```

## How to Create a New Proposal

### Boty-Branded Proposal (Default)
1. Create a new seed script in `scripts/` (or duplicate `seed-lidherma.ts`)
2. Fill in the `Proposal` typed object with client-specific data (see `types/proposal.ts`)
3. Leave `brand` undefined or set to `"boty"`
4. Add client logos to `public/logos/<ClientName>/`
5. Run `npx tsx scripts/seed-<client>.ts` to push to Firestore
6. Share the link: `https://<domain>/<proposal-id>`
7. Add a `"seed:<client>"` script to `package.json`

### Auren-Branded Proposal
1. Duplicate `scripts/seed-auren-template.ts`
2. Set `brand: "auren"` in the Proposal object
3. Fill in Auren-specific sections:
   - `companyUnderstanding`: Descripción detallada del negocio del cliente
   - `needUnderstanding`: Problemática que necesita resolver
   - `solution`: Fases de implementación con entregables y tiempos
   - `aboutUs`: ¿Por qué elegir Auren? (fixed content, pre-filled)
   - `pricing`: Propuesta económica (modalidad, inversión)
   - `team`: Equipo de trabajo con fotos (Auren + Cliente)
4. Add client logos to `public/logos/<ClientName>/`
5. Add team photos to `public/logos/Auren/team/` and `public/logos/<ClientName>/team/`
6. Run `npx tsx scripts/seed-<client>.ts` to push to Firestore
7. Share the link: `https://<domain>/<proposal-id>`

**Important:** Auren proposals follow `.claude/rules/Propuestas_Auren.md` structure and use Auren brand colors (Pantone 485 C red, Pantone 426 C gray) per `.claude/rules/manual_marca_auren.md`

## Data Model (Firestore)
- **Collection:** `proposals`
- **Document ID:** Slug like `lidherma-belgrano-2026` or `auren-clientname-2026` (or UUID for extra security)
- **Shape:** See `types/proposal.ts` — sections are typed fields
- **Brand field:** `brand?: "boty" | "auren"` (defaults to "boty" if undefined)
  - **Boty proposals:** Use `intro`, `modules`, `iaHighlight?`, `pricing?`, `implementation`, `cta`, `footer`
  - **Auren proposals:** Use `companyUnderstanding`, `needUnderstanding`, `solution`, `aboutUs`, `pricing?`, `team?`, `implementation`, `cta`, `footer`
- All sections are optional via `?` — components conditionally render
- HTML is allowed in string fields (rendered via `dangerouslySetInnerHTML`) — safe because data is internal, not user-submitted

## Key Conventions
- **Language:** All proposals in Argentine Spanish (voseo: "tenés", "podés", "conocé")
- **SEO:** All proposal pages have `robots: { index: false, follow: false }` — private links only
- **Logos:** Always stored in `public/logos/<ClientName>/`, referenced in Firestore as `/logos/<ClientName>/filename`
- **Brand Detection:** The page wrapper uses `data-brand="auren"` attribute to apply Auren CSS theme via attribute selectors
- **Boty Theme:** Dark background (#0a0a0f), purple gradients (#6c5ce7, #a855f7), rounded corners (16px)
- **Auren Theme:** Light background (#ffffff), Pantone 485 C red (#e2231a), Pantone 426 C gray (#262729), sharp corners (0px), Verdana font
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
- **OCA:** `oca-logistica-2026` — Enterprise AI for logistics (4 modules: client integration, smart remitos, 360° traceability, dynamic routing; 3-phase pricing)
- **Auren:** `auren-latam-2026` — AI strategy for professional services firm (5 modules: Audit 2.0, predictive tax, legal velocity, new revenue verticals, ecosystem governance; 3-phase pricing)
- **Auren+Boty Alliance:** `auren-boty-alliance-2026` — Strategic partnership: Auren consults & identifies AI opportunities across industries, Boty implements solutions (5 modules: discovery, implementation, industry verticals, revenue model, ongoing support; 3-tier pricing per project)
- **Guayal IA Assessment:** `guayal-ia-assessment-2026` — 4-week AI readiness assessment for companies (co-branded with Auren & Guayal): discovery workshops, data/systems audit, impact matrix, roadmap deliverables; no pricing (handled separately by Auren)
- **Guayal Implementation:** `guayal-implementation-2026` — End-to-End implementation framework (co-branded with Auren & Guayal): 5 phases from discovery to continuous optimization, based on proyectos_ia.md methodology (Discovery & Viability, Solution Architecture, MVP Development, Deployment & Change Management, Continuous Optimization); no pricing (handled separately by Auren)
- **Reynoso Inmobiliaria (Auren):** `reynoso-inmobiliaria-2026` — Automation & AI for real estate + urban developments (loteos) in Salta/NOA + Paraguay; 3 phases (omnichannel lead capture + smart assignment + auto-quoting in Odoo, lead reactivation + post-sale automation, web/portal sync + Paraguay funnel); Auren pricing (30% upfront U$D 10.500 + 5× U$D 4.900, 4 months) with optional unified website add-on +U$D 5.000. Seed: `npm run seed:reynoso-auren`
