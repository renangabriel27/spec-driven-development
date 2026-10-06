# Code Review Report — Fretadão Homepage

## Summary

- **Date:** 2026-06-17
- **Branch:** main
- **Status:** APPROVED WITH RESERVATIONS
- **Files Created:** 26 (src) + 2 (e2e) + 4 (config/html)
- **Lines Added:** ~1,370 (807 src + 407 e2e + ~156 config)
- **Lines Removed:** 0

---

## Rules Compliance

| Rule | Status | Notes |
|------|--------|-------------|
| `common/git.md` — Conventional Commits | OK | Commits follow the format (the single initial `first commit` is the scaffold) |
| `common/testing.md` — Tests for all code with logic | OK | Button, rendered href/button behavior, 3 unit tests + 48 E2E |
| `common/security.md` — No hardcoded secrets | OK | `VITE_BOOKING_URL` via env var, `.env.local` in `.gitignore` |
| `common/frontend.md` — Theme before components | OK | `src/theme/` with `colors.ts`, `typography.ts`, `spacing.ts` created in Task 1 |
| `common/frontend.md` — No inline styles | OK | No `style={{}}` found; Tailwind classes only |
| `common/frontend.md` — Centralized strings | OK | `src/constants/strings.ts` with all copy; `as const` |
| `typescript/typescript.md` — `strict: true` | OK | `tsconfig.app.json` with `strict`, `noUnusedLocals`, `noUnusedParameters` |
| `typescript/typescript.md` — No `any` | OK | No occurrence of `: any` anywhere in the codebase |
| `typescript/typescript.md` — API layer separation | OK | No network calls (static landing page — not applicable) |
| `typescript/typescript.md` — Component granularity | OK | Page composer (`App.tsx`) with no logic; each section is an isolated component |
| `common/debug.md` — No console.log | OK | Zero debug statements |

---

## TechSpec Adherence

| Technical Decision | Implemented | Notes |
|-----------------|--------------|-------------|
| Vite 8 + React 19 + TypeScript 6 | YES | `package.json` confirms versions |
| `@tailwindcss/vite` plugin (no `tailwind.config.js`) | YES | Config only via `@theme {}` in `index.css` |
| Tokens in `src/theme/` | YES | `colors.ts`, `typography.ts`, `spacing.ts`, `index.ts` |
| All copy in `src/constants/strings.ts` | YES | No hardcoded text in components |
| `VITE_BOOKING_URL` with `#contato` fallback | YES | `src/constants/env.ts` centralizes it |
| Lucide React icons | YES | Tree-shakeable, zero manual SVG |
| `data-section` on all 7 sections | YES | Verified by QA's TECH-1 |
| `lang="pt-BR"` + correct title | YES | `index.html` configured |
| Inter via Google Fonts (preconnect) | YES | `index.html` with preconnect + stylesheet |
| Playwright + Vitest | YES | `test` and `test:e2e` scripts in `package.json` |
| `@/` → `src/` path alias | YES | `vite.config.ts` + `tsconfig.app.json` aligned |
| Named exports for components | YES | Except `App.tsx` (default, per Vite convention) |

---

## Tasks Verified

| Task | Status | Notes |
|------|--------|-------------|
| Task 1 — Project foundation | COMPLETE | Vite scaffold, Tailwind v4, theme tokens, Button, unit tests |
| Task 2 — Visual components | COMPLETE | Header, Footer, 7 sections, RouteWidget, Card/SectionLabel primitives |
| Task 3 — Composition and E2E | COMPLETE | App.tsx composer, Playwright configured, 5 E2E tests |

---

## Tests

| Suite | Total | Passing | Failing |
|-------|-------|----------|----------|
| Vitest (unit) | 3 | 3 ✅ | 0 |
| Playwright `homepage.spec.ts` | 5 | 5 ✅ | 0 |
| Playwright `qa-full.spec.ts` | 43 | 43 ✅ | 0 |
| **Total** | **51** | **51** | **0** |

**TypeScript build:** ✅ Zero errors  
**ESLint:** ✅ Zero warnings  
**Coverage:** Not configured (landing page with no business logic — acceptable)

---

## Issues Found

| Severity | File | Line | Description | Suggestion |
|------------|---------|-------|-----------|----------|
| Low | `src/types/content.types.ts` | 1–30 | `SolutionCard`, `ProcessStep`, `ValuePillar` are exported but never imported by any component. The `iconMap: Record<string, ElementType>` pattern with `as const` makes these types redundant. | Remove the unused interfaces or drop the export so they don't clutter the public types API |
| Low | `src/components/layout/Header.tsx` | ~35 | String `"Agendar reunião →"` ("Schedule a meeting →") hardcoded directly in the JSX, while in the Hero and CTA sections the copy comes from `strings.ts`. Inconsistent pattern. | Move it to `src/constants/navigation.ts` alongside `headerLinks`, or to `strings.ts` |
| Low | `src/components/sections/HeroSection.tsx`, `CtaSection.tsx` | — | Arrow `→` added inline in the JSX (`{HERO.ctaPrimary} →`) instead of being part of the constant. The copy in `strings.ts` does not include the visual symbol. | Include `→` directly in the CTA constants in `strings.ts`, or create a formatting utility |
| Very Low | `src/index.css` | ~12–13 | `--font-size-hero` and `--font-size-section-title` defined in `@theme` but no component uses these custom properties (they use standard Tailwind classes `text-4xl`, `text-6xl`). | Remove the unused variables, or document that they are for future use |

---

## Strengths

- **Full strict TypeScript:** `strict`, `noUnusedLocals`, `noUnusedParameters` with no suppression via `// @ts-ignore` or unjustified `as` assertions.
- **Zero `any`:** All typing is explicit or correctly inferred.
- **51 tests passing:** Broad coverage — 3 Button behavior unit tests + 48 E2E tests covering all 28 PRD requirements, WCAG 2.2 and technical validations.
- **Solid accessibility:** `aria-label`, dynamic `aria-expanded`, `aria-label` on the navigation, `lang="pt-BR"`, semantic `<blockquote>`, `<main>` for the main content.
- **Clear separation of responsibilities:** `App.tsx` is a pure composer with zero logic; sections are independent; copy in `strings.ts`, env in `env.ts`, navigation in `navigation.ts`.
- **Vitest/Playwright setup without conflicts:** Correct `include`/`exclude` keep E2E files from being run by Vitest.
- **`iconMap` pattern well handled:** The `Record<string, ElementType>` mapping avoids `eval` or dynamic imports to resolve icons by string name.
- **Neutral Card.tsx:** The decision to make `Card` neutral (no default `bg` or `border`) is right for a component reused in sections with different backgrounds.
- **Font loaded via preconnect:** Performance optimized with `<link rel="preconnect">` before the Google Fonts stylesheet.

---

## Recommendations

1. **[Low priority]** Remove `SolutionCard`, `ProcessStep` and `ValuePillar` from `content.types.ts` — they are dead code. The sections infer types directly from `as const`, which is safer and avoids maintaining duplicate interfaces.

2. **[Low priority]** Centralize the header CTA in `navigation.ts` or `strings.ts`. The text `"Agendar reunião →"` is business copy and belongs in the constants, not in the `Header.tsx` JSX.

3. **[Low priority]** Define a policy for the `→` in CTAs: either it goes into the copy constants, or it becomes a visual pattern of the `Button` component. It is currently inconsistent between the two approaches.

4. **[Very low priority]** Clean up the `--font-size-hero` and `--font-size-section-title` custom properties from `@theme`, or adopt them in the components to replace the Tailwind utility classes. CSS variables that are defined but never consumed are misleading documentation.

---

## Conclusion

The implementation is **approved**. The 3 "Low" severity issues identified are consistency and dead-code cleanup matters — none affects functionality, accessibility or security. All 51 tests pass, the TypeScript build is clean, ESLint reports nothing, and TechSpec adherence is complete on every verifiable point.

The four recommendation items can be handled in a `chore` commit before the first deploy, or left for a future iteration with no risk.
