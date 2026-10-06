# Technical Specification

## Executive Summary

The Fretadão homepage is implemented as a static SPA with **React 19 + Vite + TypeScript strict + Tailwind CSS v4**. All content is static: no CMS, no API, no SSR. The "Agendar reunião" CTA is an external link configurable through a Vite environment variable. The architecture follows a section-composition pattern: `App.tsx` is a pure composer, each section is an independent component, and theme tokens are defined before the components.

---

## System Architecture

### Component Overview

```
index.html                          ← entry point: loads Inter via Google Fonts
src/
  main.tsx                          ← mounts <App /> in the DOM
  App.tsx                           ← pure composer — no logic, composition only
  components/
    layout/
      Header.tsx                    ← fixed nav, CTA, mobile menu
      Footer.tsx                    ← 4 columns, copyright
    sections/
      HeroSection.tsx               ← hero + RouteWidget
      SocialProofSection.tsx
      SolutionsSection.tsx          ← 2×2 grid of cards
      HowItWorksSection.tsx         ← 3 numbered steps
      WhyFretadaoSection.tsx        ← dark background, 3 pillars
      ManifestoSection.tsx          ← quote with highlight
      CtaSection.tsx                ← final CTA card
    ui/
      Button.tsx                    ← variants: primary | ghost
      Card.tsx                      ← bordered wrapper
      SectionLabel.tsx              ← uppercase section label
      RouteWidget.tsx               ← illustrative route widget for the hero
  theme/
    colors.ts                       ← brand color tokens
    typography.ts                   ← type scale
    spacing.ts                      ← spacing scale
    index.ts                        ← re-exports all tokens
  constants/
    strings.ts                      ← all copy, centralized
    navigation.ts                   ← header and footer links
  types/
    content.types.ts                ← shared content types
```

**Data flow:** all data flows from `constants/` → section/component. No runtime fetch. The only external value is `VITE_BOOKING_URL` (env var).

---

## Implementation Design

### Main Interfaces

```typescript
// types/content.types.ts

export interface NavLink {
  label: string
  href: string
}

export interface SolutionCard {
  icon: React.ElementType   // Lucide icon component
  title: string
  description: string
}

export interface ProcessStep {
  number: string            // "01" | "02" | "03"
  title: string
  description: string
}

export interface ValuePillar {
  icon: React.ElementType
  title: string
  description: string
}

export interface FooterColumn {
  heading: string
  links: NavLink[]
}
```

```typescript
// components/ui/Button.tsx

interface ButtonProps {
  variant: 'primary' | 'ghost'
  href?: string             // becomes an <a> when provided
  children: React.ReactNode
  className?: string
}
```

### Data Models

All text content lives in `constants/strings.ts` and `constants/navigation.ts`. There is no database or API. Partial example:

```typescript
// constants/strings.ts
export const HERO = {
  badge: 'A solução nº1 em mobilidade corporativa no Brasil',
  headline: 'O caminho casa–trabalho–casa,\nmais humano.',
  subheadline: 'Transformamos o transporte corporativo...',
  ctaPrimary: 'Agendar reunião',
  ctaSecondary: 'Conhecer soluções',
} as const
```

### API Endpoints

Not applicable: the site is 100% static. The only "exit point" is the external scheduling link:

| Destination | Variable | Usage |
|---|---|---|
| External scheduling URL | `VITE_BOOKING_URL` | `href` on the CTA buttons |

Read in code via `import.meta.env.VITE_BOOKING_URL` (Vite convention: variables without the `VITE_` prefix are not exposed to the bundle).

---

## Integration Points

**Inter font (Google Fonts)**
- Loaded via `<link>` in `index.html` with `rel="preconnect"` and `display=swap`.
- No npm package dependency; the browser makes the request at runtime.

**External CTA**
- Every "Agendar reunião" button reads `import.meta.env.VITE_BOOKING_URL`.
- Fallback: `#contato` (in-page anchor) when the variable is not defined.
- No external scheduling SDK is installed.

**Icons (Lucide React)**
- `lucide-react` imported per component (tree-shakeable by Vite).
- Icons used: `Monitor`, `Activity`, `Heart` (pillars); `User`, `LayoutGrid`, `Bus`, `TrendingUp` (solutions); `Quote` (manifesto).

---

## Testing Approach

### Unit Tests

A static landing page with no business logic, so unit tests have low value. Only the `Button` component deserves an isolated test:

- `should render as anchor when href is provided`
- `should render as button when href is omitted`
- `should apply primary variant classes when variant is primary`

Tooling: Vitest + React Testing Library.

### Integration Tests

Not applicable: there are no runtime integrations to test.

### E2E Tests

Playwright covers the visitor's critical flows against the Vite dev server (`playwright.config.ts` → `webServer: { command: 'vite' }`):

**File:** `e2e/homepage.spec.ts`

| Scenario | Assertion |
|---|---|
| Hero renders | `getByText('O caminho casa–trabalho–casa')` is visible |
| CTAs present | Every "Agendar reunião" button has a non-empty `href` |
| Sections present | Each `<section>` exists in the DOM via the `data-section` attribute |
| Mobile menu | Clicking the hamburger shows the navigation links (375px viewport) |
| Footer links | The footer navigation links are rendered |

A `data-section="hero"` attribute on each `<section>` guarantees stable selectors that do not depend on text.

---

## Development Sequencing

### Build Order

1. **Project scaffold** — `npm create vite@latest` with the `react-ts` template. Install Tailwind v4, Lucide React, Vitest, Playwright. Configure `VITE_BOOKING_URL` in `.env.local`. *(foundation for everything)*
2. **Theme tokens** — `src/theme/` with colors, typography, and spacing. *(rule: theme before components)*
3. **UI primitives** — `Button`, `Card`, `SectionLabel`. *(dependency of every section)*
4. **`Header` + `Footer`** — layout structure. *(sections depend on the layout)*
5. **Homepage sections** — in top-to-bottom order: Hero → SocialProof → Solutions → HowItWorks → WhyFretadao → Manifesto → CTA.
6. **Composition in `App.tsx`** — imports and orders the sections between `<Header>` and `<Footer>`.
7. **E2E tests** — Playwright covers the scenarios listed above.

### Technical Dependencies

| Package | Target version | Purpose |
|---|---|---|
| `vite` | 6.x | Bundler + dev server |
| `react` / `react-dom` | 19.x | UI runtime |
| `typescript` | 5.x | Strict typing |
| `tailwindcss` | 4.x | Styling |
| `lucide-react` | latest | SVG icons |
| `@playwright/test` | latest | E2E tests |
| `vitest` + `@testing-library/react` | latest | Button unit tests |

---

## Monitoring and Observability

Not applicable in this phase: no backend, no deploy. Once deployment is set up, consider:
- Logging CTA clicks via `onClick` + `console.log` (groundwork for a future analytics integration)

---

## Technical Considerations

### Key Decisions

**React + Vite vs Next.js**
Vite was chosen for simplicity: zero SSR/App Router configuration, an instant dev server, and no Server Components concepts. For a static landing page with no SEO requirements at this point, the overhead of Next.js is not justified. A future migration to Next.js is possible without rewriting the components.

**Tailwind v4 vs v3**
Tailwind v4 (CSS-first config via `@theme` in CSS) removes `tailwind.config.js` and integrates natively with Vite through the official `@tailwindcss/vite` plugin. Chosen because it is the current version and has a more direct Vite integration.

**Content in `constants/` vs headless CMS**
CMS was explicitly excluded from scope. Centralizing content in `constants/strings.ts` ensures type safety, makes future search/replace easier, and enables a migration to a CMS without changing components.

**`VITE_BOOKING_URL` vs hardcoding**
The scheduling URL may switch tools (Calendly → HubSpot). An env var avoids code changes to update the destination; updating `.env` is enough.

### Known Risks

| Risk | Mitigation |
|---|---|
| Inter font blocked (corporate network/CSP) | `font-display: swap` ensures a system font fallback |
| `VITE_BOOKING_URL` not defined in some environment | Fallback to `#contato` implemented in `Button` |
| SPA without SSR hurts future SEO | Documented as a limitation; migrating to Next.js is the natural path |

### Standards Compliance

Project rules applied in this Tech Spec:

- **`typescript/typescript.md` §1** — `App.tsx` is a pure composer; each section has a single responsibility
- **`typescript/typescript.md` §4** — `strict: true` required in `tsconfig.json`; no `any`
- **`common/frontend.md` §1** — no inline styles; all design values in `src/theme/`
- **`common/frontend.md` §3** — theme defined before components (step 2 of the sequencing)
- **`common/frontend.md` §4** — all copy in `src/constants/strings.ts`
- **`common/testing.md` §1** — E2E tests cover the main flows; `Button` has a unit test because it has conditional logic
- **`common/testing.md` §2** — test names follow the `should [behavior] when [condition]` format
- **`common/git.md` §2** — commits follow Conventional Commits (`feat(hero): add route widget`, etc.)

### Relevant and Dependent Files

```
index.html                              ← loads Inter, Vite entry point
src/main.tsx                            ← mounts App in the DOM
src/App.tsx                             ← homepage composition
src/theme/index.ts                      ← tokens: every component depends on it
src/constants/strings.ts                ← copy: every section depends on it
src/constants/navigation.ts             ← links: Header and Footer depend on it
src/components/ui/Button.tsx            ← used by Header, Hero, CTA
src/components/layout/Header.tsx        ← depends on: Button, navigation
src/components/layout/Footer.tsx        ← depends on: navigation
src/components/sections/HeroSection.tsx ← depends on: Button, RouteWidget
src/components/ui/RouteWidget.tsx       ← isolated, no external deps
e2e/homepage.spec.ts                    ← Playwright E2E tests
.env.local                              ← VITE_BOOKING_URL (do not commit)
```
