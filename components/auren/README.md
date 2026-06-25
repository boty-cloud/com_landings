# Auren Components — Proposal Sub-Factory

This directory contains React Server Components specific to Auren-branded proposals.

## When These Components Are Used
Only when `proposal.brand === "auren"` in the Firestore document. The router (`app/[id]/page.tsx`) conditionally renders these instead of the default Boty components.

## Component Overview

### 1. CompanyUnderstanding.tsx
**Purpose:** Section 1 of Auren proposal structure  
**Props:** `{ title: string, paragraphs: string[] }`  
**Renders:** "Descripción de la Empresa" — business overview, trajectory, operations  
**Theme:** Light section (`section--light`)  

**Example:**
```typescript
companyUnderstanding: {
  title: "Descripción de la Empresa",
  paragraphs: [
    "ACME Corp es una empresa argentina especializada en logística...",
    "<strong>Perfil:</strong> Pyme familiar con 25 años de trayectoria...",
  ]
}
```

### 2. NeedUnderstanding.tsx
**Purpose:** Section 2 of Auren proposal structure  
**Props:** `{ title: string, paragraphs: string[] }`  
**Renders:** "Entendimiento de las Necesidades" — pain points, why automation  
**Theme:** Default dark section  

**Example:**
```typescript
needUnderstanding: {
  title: "Entendimiento de las Necesidades",
  paragraphs: [
    "<strong>Puntos de dolor actuales:</strong>",
    "<ul><li><strong>Control:</strong> ...</li></ul>",
  ]
}
```

### 3. Solution.tsx
**Purpose:** Section 3 of Auren proposal structure  
**Props:** `{ title, subtitle?, description?, phases[], methodology? }`  
**Renders:** Implementation phases with deliverables, timeline  
**Theme:** Light section with numbered cards  

**Key feature:** Displays phases as numbered cards (01, 02, 03...) with:
- Phase title & description
- Deliverables list (checkmarks)
- Duration badge (⏱ icon)

**Example:**
```typescript
solution: {
  title: "Propuesta de Trabajo",
  subtitle: "Objetivo: Implementar sistema ERP...",
  methodology: {
    title: "Metodología",
    description: "Framework End-to-End..."
  },
  phases: [
    {
      title: "Mes 1: Diagnóstico",
      description: "Assessment operativo...",
      deliverables: ["Documento de brechas", "Diseño de procesos"],
      duration: "4 semanas"
    }
  ]
}
```

### 4. AboutUs.tsx
**Purpose:** Section 4 of Auren proposal structure  
**Props:** `{ title: string, paragraphs: string[], logo?: string }`  
**Renders:** "¿Por qué elegir Auren?" — company credibility, values  
**Theme:** Dark section (`section--dark`) with centered Auren logo  

**Note:** This content is usually **fixed** across all Auren proposals (pre-filled in template).

**Example:**
```typescript
aboutUs: {
  title: "¿Por qué elegir Auren?",
  logo: "/logos/Auren/Auren.jpeg",
  paragraphs: [
    "Auren es una firma internacional con presencia en más de 90 países...",
    "<strong>Enfoque boutique</strong> con respaldo metodológico...",
  ]
}
```

### 5. Team.tsx
**Purpose:** Section 6 of Auren proposal structure  
**Props:** `{ title: string, members: { name, role, photo? }[] }`  
**Renders:** Team grid with photos (circular avatars)  
**Theme:** Light section with card grid  

**Key feature:** Auto-responsive grid (200px min per card)

**Example:**
```typescript
team: {
  title: "Equipo de Trabajo",
  members: [
    { name: "Micaela Puebla", role: "Líder Auren", photo: "/logos/Auren/team/micaela.jpg" },
    { name: "Juan Pérez", role: "Gerente IT Cliente", photo: "/logos/ACME/team/juan.jpg" },
  ]
}
```

## Shared Components (Used by Both Brands)
These are NOT in this directory, but work for both Boty and Auren proposals:
- `Pricing.tsx` — Pricing plans (adapts to theme via CSS)
- `Implementation.tsx` — Implementation steps (4-card grid)
- `Header.tsx` — Top logo bar (uses `data-brand` attribute)
- `Footer.tsx` — Footer with logo & copyright
- `Hero.tsx` — Hero section (gradient adapts to theme)

## Styling
All Auren components use **global CSS classes** from `app/globals.css`:
- `.section`, `.section--light`, `.section--dark`
- `.container`, `.container--narrow`
- `.section__title`, `.section__subtitle`
- `.card`, `.card__number`, `.card__title`, `.card__features`

Theme is controlled by `[data-brand="auren"]` attribute on page wrapper, which overrides:
```css
[data-brand="auren"] {
  --color-bg: #ffffff;
  --color-accent: #e2231a; /* Pantone 485 C */
  --color-text: #262729; /* Pantone 426 C */
  --radius: 0px; /* Sharp corners */
  font-family: Verdana;
}
```

## HTML Rendering
All components use `dangerouslySetInnerHTML` for paragraph content to support:
- `<strong>`, `<em>` — Text formatting
- `<ul>`, `<ol>`, `<li>` — Lists
- Line breaks and inline styles

**Security:** Safe because proposal data is authored internally, not user-submitted.

## Component Architecture
- **All are Server Components** (no `"use client"`)
- **No state** — purely presentational
- **Receive props from page** — data comes from Firestore via `getProposal(id)`
- **Type-safe** — Props match TypeScript interfaces in `types/proposal.ts`

## File Naming Convention
- `CompanyUnderstanding` (PascalCase, descriptive)
- Each component is one section of the Auren proposal structure
- Component name matches the proposal field name (camelCase → PascalCase)

## Testing
Components render correctly when:
1. Firestore doc has `brand: "auren"`
2. Section data exists (e.g., `companyUnderstanding` is not `undefined`)
3. Images exist at specified paths (`public/logos/...`)

Test by seeding a proposal and viewing in browser:
```bash
npm run seed:auren-template
# Visit: http://localhost:3000/auren-client-template-2026
```

## Adding New Auren Sections
To add a new section:
1. Add field to `Proposal` interface in `types/proposal.ts`
2. Create component in `components/auren/NewSection.tsx`
3. Import in `app/[id]/page.tsx`
4. Add conditional render in Auren brand block
5. Update seed template with example data

---

**Related Docs:**
- `.claude/rules/Propuestas_Auren.md` — Auren proposal structure
- `.claude/rules/manual_marca_auren.md` — Auren brand guidelines
- `.claude/rules/auren_factory_usage.md` — Usage guide
- `scripts/seed-auren-template.ts` — Seed template
