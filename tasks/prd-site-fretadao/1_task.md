# Task 1.0: Project Foundation

<critical>Read the prd.md and techspec.md files in this folder; if you do not read these files, your task will be invalidated</critical>

## Overview

Create the complete project foundation: Vite + React + TypeScript strict + Tailwind CSS v4 scaffold, theme token system, content constants and shared types, and all reusable primitive UI components. By the end of this task, the project must run in the browser with the design system configured and the primitives tested.

<requirements>
- Vite scaffold with the react-ts template, TypeScript strict: true
- Tailwind CSS v4 configured via the @tailwindcss/vite plugin
- Theme tokens defined in src/theme/ before any component
- All copy centralized in src/constants/strings.ts
- Navigation links in src/constants/navigation.ts
- Shared TypeScript types in src/types/content.types.ts
- Button, Card, SectionLabel and RouteWidget components implemented
- Button unit tests covering the 3 behavior variations
- VITE_BOOKING_URL configured in .env.local with a fallback to #contato
</requirements>

## Subtasks

- [ ] 1.1 Initialize the project: `npm create vite@latest fretadao-site -- --template react-ts`. Install dependencies: `tailwindcss@4`, `@tailwindcss/vite`, `lucide-react`, `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `@vitejs/plugin-react`
- [ ] 1.2 Configure Tailwind v4: add `@tailwindcss/vite` to `vite.config.ts` and replace the initial CSS with `@import "tailwindcss"` plus the `@theme {}` directive in `src/index.css`
- [ ] 1.3 Configure TypeScript: ensure `"strict": true` in `tsconfig.json`; remove the scaffold's example files (App.css, assets/)
- [ ] 1.4 Create `src/theme/colors.ts`, `typography.ts`, `spacing.ts` and `index.ts` with the brand tokens (navy blue #0A1628, green/teal accent, white). Map the tokens as CSS custom properties in `@theme {}`
- [ ] 1.5 Create `src/constants/strings.ts` with all the copy for the 9 PRD sections (HERO, SOCIAL_PROOF, SOLUTIONS, HOW_IT_WORKS, WHY_FRETADAO, MANIFESTO, CTA_FINAL, FOOTER)
- [ ] 1.6 Create `src/constants/navigation.ts` with the header links and the footer columns
- [ ] 1.7 Create `src/types/content.types.ts` with the interfaces: NavLink, SolutionCard, ProcessStep, ValuePillar, FooterColumn
- [ ] 1.8 Implement `src/components/ui/Button.tsx` (variants primary | ghost; renders `<a>` when href is provided, `<button>` otherwise)
- [ ] 1.9 Implement `src/components/ui/Card.tsx`, `SectionLabel.tsx` and `RouteWidget.tsx`
- [ ] 1.10 Create `src/components/ui/Button.test.tsx` and run `vitest` — all tests must pass
- [ ] 1.11 Create `.env.local` with `VITE_BOOKING_URL=https://example.com/agendar` and add `.env.local` to `.gitignore`

## Implementation Details

See `techspec.md` — sections: **System Architecture** (folder structure), **Main Interfaces** (exact types), **Integration Points** (VITE_BOOKING_URL and Tailwind v4), **Development Sequencing** steps 1–3.

## Success Criteria

- `npm run dev` starts without errors and opens a blank page in the browser
- `npm run build` completes without TypeScript errors
- Theme tokens are importable: `import { colors } from '@/theme'`
- `Button` with `href` renders an `<a>` tag; without `href`, it renders `<button>`
- All `Button` unit tests pass: `npx vitest run`

## Task Tests

- [ ] `should render as anchor element when href prop is provided`
- [ ] `should render as button element when href prop is omitted`
- [ ] `should apply primary variant classes when variant is primary`

Tool: Vitest + React Testing Library

<critical>ALWAYS CREATE AND RUN THE TASK TESTS BEFORE CONSIDERING IT DONE</critical>

## Relevant files

```
vite.config.ts
tsconfig.json
src/index.css                         ← @theme {} with Tailwind v4 tokens
src/theme/colors.ts
src/theme/typography.ts
src/theme/spacing.ts
src/theme/index.ts
src/constants/strings.ts
src/constants/navigation.ts
src/types/content.types.ts
src/components/ui/Button.tsx
src/components/ui/Button.test.tsx
src/components/ui/Card.tsx
src/components/ui/SectionLabel.tsx
src/components/ui/RouteWidget.tsx
.env.local                            ← do not commit
.gitignore
```
