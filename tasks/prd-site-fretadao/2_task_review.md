# Review: Task 2.0 - Visual Implementation

**Reviewer**: AI Code Reviewer
**Date**: 2026-06-17
**Task file**: 2_task.md
**Status**: APPROVED WITH OBSERVATIONS

---

## Summary

The visual implementation of the Fretadão homepage was completed with high overall quality. All 9 required components were created (Header, Footer + 7 sections), the production build passes with no TypeScript errors, and the 3 `Button` unit tests are green. `App.tsx` is a pure composer, as defined in the techspec.

The issues found are mostly minor: isolated deviations from the PRD requirements (Footer with 3 columns instead of 4; HowItWorksSection not using the `<Card>` primitive), a constant duplicated across files and a pattern inconsistency in SocialProofSection. No critical bugs, no use of `any`, no security violations.

---

## Files Reviewed

| File | Status | Issues |
|---------|--------|-----------|
| `src/components/layout/Header.tsx` | OK | 0 |
| `src/components/layout/Footer.tsx` | Issues | 1 |
| `src/components/sections/HeroSection.tsx` | OK | 0 |
| `src/components/sections/SocialProofSection.tsx` | Issues | 1 |
| `src/components/sections/SolutionsSection.tsx` | OK | 0 |
| `src/components/sections/HowItWorksSection.tsx` | Issues | 1 |
| `src/components/sections/WhyFretadaoSection.tsx` | OK | 0 |
| `src/components/sections/ManifestoSection.tsx` | OK | 0 |
| `src/components/sections/CtaSection.tsx` | Issues | 1 |
| `src/App.tsx` | OK | 0 |
| `src/constants/strings.ts` | OK | 0 |
| `src/constants/navigation.ts` | OK | 0 |
| `src/components/ui/Button.tsx` | OK | 0 |
| `src/components/ui/Card.tsx` | OK | 0 |
| `src/components/ui/SectionLabel.tsx` | OK | 0 |
| `src/components/ui/RouteWidget.tsx` | OK | 0 |
| `src/components/ui/Button.test.tsx` | OK | 0 |
| `src/theme/colors.ts` | Issues | 1 |
| `src/theme/index.ts` | OK | 0 |
| `src/index.css` | OK | 0 |
| `src/types/content.types.ts` | OK | 0 |

---

## Issues Found

### Critical

No critical issues found.

---

### Major

**[MAJOR-1] Footer implements 3 columns instead of 4 as per PRD 9.2**

File: `src/components/layout/Footer.tsx`, line 8

The PRD (requirement 9.2) explicitly specifies **four** columns: Soluções (Solutions), Empresa (Company), Contato (Contact) and an implicit fourth column (the logo/tagline area counts as a layout column). Task 2.2 specifies: "logo, tagline, **4 link columns** from `navigation.ts`". `navigation.ts` exports only 3 `footerColumns` (Soluções, Empresa, Contato). The grid uses `lg:grid-cols-4`, but in practice it shows the logo + 3 link columns, for a total of 4 cells — which is visually correct. However, the task mentions "4 link columns", and `navigation.ts` has only 3 groups.

Assessment: the PRD (9.2) lists Soluções, Empresa and Contato — only 3 navigation link groups (plus logo/tagline as a layout column). The `lg:grid-cols-4` grid with `lg:col-span-1` for the logo and 3 link columns fills the 4 cells correctly. This is acceptable, but task 2.2 literally says "4 link columns". The implementation is aligned with the PRD but diverges from the literal wording of the subtask.

Recommendation: check with the product owner whether "4 link columns" is a wording mistake in the task or whether a real fourth column is missing (e.g. Legal / Política de privacidade). If it is a wording mistake, no action is needed.

---

**[MAJOR-2] HowItWorksSection does not use the `<Card>` primitive as per the techspec pattern**

File: `src/components/sections/HowItWorksSection.tsx`, lines 20-29

The techspec lists `Card.tsx` as a dependency of `HowItWorksSection`. `Card` is a primitive precisely to encapsulate `rounded-2xl border p-6`, but the section duplicates these classes inline with `rounded-2xl border border-brand-gray-200 bg-white p-8`. The inconsistency does not cause a bug, but it violates the principle of using primitives to ensure consistency and ease future maintenance.

Suggested fix:
```tsx
// Before (HowItWorksSection.tsx line 22)
<div
  key={step.number}
  className="flex flex-col gap-4 rounded-2xl border border-brand-gray-200 bg-white p-8"
>

// After
import { Card } from '@/components/ui/Card'
// ...
<Card key={step.number} className="border-brand-gray-200 bg-white p-8">
  <div className="flex flex-col gap-4">
```

---

### Minor

**[MINOR-1] `bookingUrl` declared as a module constant in 3 separate files**

Files: `Header.tsx` (line 6), `HeroSection.tsx` (line 5), `CtaSection.tsx` (line 4)

```ts
const bookingUrl = import.meta.env.VITE_BOOKING_URL || '#contato'
```

The same constant is declared three times with the same value. This logic should be centralized — for example in `src/constants/bookingUrl.ts` or in `src/constants/strings.ts` — and imported by each component. Any change to the fallback requires editing 3 files.

Suggested fix:
```ts
// src/constants/strings.ts — add at the end
export const BOOKING_URL = import.meta.env.VITE_BOOKING_URL || '#contato'
```

---

**[MINOR-2] SocialProofSection uses a string-based `iconMap` to resolve Lucide icons**

File: `src/components/sections/SocialProofSection.tsx`, lines 5-11

The `iconMap: Record<string, ElementType>` pattern with strings from `strings.ts` works, but it loses the type safety that the types in `content.types.ts` are supposed to guarantee. The `SolutionCard` type defined in `content.types.ts` has `icon: ElementType` (the component itself), but `strings.ts` stores strings (`'Factory'`, `'Truck'`) and the section components do the mapping manually. There is a mismatch between the type defined in the techspec and what is actually used — the `SolutionCard` and `ValuePillar` types in `content.types.ts` declare `icon: ElementType`, but the data in `strings.ts` uses icon name strings.

This is a design inconsistency: either the types should be updated to `icon: string`, or the data should import the icons directly. Both approaches are valid, but they must be consistent. The current `iconMap` pattern is not wrong, it just isn't what the types promise.

---

**[MINOR-3] Token duplication between `theme/colors.ts` and `src/index.css`**

File: `src/theme/colors.ts` and `src/index.css`

The same brand colors are defined both in `src/theme/colors.ts` and as CSS variables in the `@theme` block of `src/index.css`. The components only use the Tailwind classes (`bg-brand-navy`, `text-brand-teal`) that come from the CSS, but `theme/colors.ts` exports the same values without being consumed by any component (`theme/index.ts` re-exports them, but no component imports from `@/theme`). This means `colors.ts`, `typography.ts` and `spacing.ts` exist as documentation/reference artifacts with no real use in the code.

This is not a bug, but it is tech debt: if `theme/colors.ts` is not consumed by the components, it can drift in the future (someone updates the `.css` but forgets the `.ts`). It would be better to remove the TypeScript theme files if they are unused, or document that they are reference only.

---

**[MINOR-4] `App.tsx` uses `export default` while all other components use named exports**

File: `src/App.tsx`, line 29

All components use named exports (`export function Header()`, `export function Footer()`, etc.), but `App.tsx` uses `export default App`. This comes from the Vite template and is conventional for the root component, but it creates an inconsistency in the project's pattern. It is not a functional problem.

---

## Positive Highlights

- **Well-implemented accessibility in the Header**: correct use of `aria-label` on the logo, a dynamic `aria-label` on the hamburger button (`'Fechar menu'` / `'Abrir menu'`) and `aria-expanded` on the toggle. Shows care for UX.

- **`Button.tsx` with correct separation of responsibilities**: the logic for rendering `<a>` vs `<button>` based on the presence of `href` is clear, clean and correctly tested in the 3 scenarios defined in the techspec.

- **All `data-section` attributes present and correct**: all 7 `<section>` elements have the `data-section` attribute with the value expected by the task 3.0 E2E suite.

- **Copy 100% externalized**: no content string is hardcoded in the components — everything comes from `strings.ts`. Even `RouteWidget` uses `HERO.routeWidget` from the constants file.

- **Tailwind v4 with `@theme` configured correctly**: `index.css` defines all brand color tokens as CSS variables in the `@theme` block, which is the idiomatic approach for Tailwind v4, with no need for `tailwind.config.js`.

- **`strict: true` and `noUnusedLocals/noUnusedParameters` enabled** in `tsconfig.app.json`. The build passes with no errors, confirming correct typing across the codebase.

- **`HeroSection` with `whitespace-pre-line`**: the headline uses `whitespace-pre-line` to preserve the line break in the string `'O caminho casa–trabalho–casa,\nmais humano.'` as required by subtask 2.3.

- **ManifestoSection faithful to PRD 7.3**: the teal-highlighted excerpt uses exactly the text specified in the PRD (`'mais eficiente, seguro e humano.'`) via the `MANIFESTO.highlight` constant.

- **Responsiveness implemented correctly**: the 2×2 Solutions grid collapses to 1 column with `grid-cols-1 md:grid-cols-2`; the HowItWorks cards sit in a row on desktop with `md:grid-cols-3`; the Hero layout uses `lg:grid-cols-2`.

---

## Standards Compliance

| Standard | Status |
|--------|--------|
| Code Standards (naming, size, no magic numbers) | OK |
| TypeScript/Node.js (strict, no `any`, `import`/`export`) | OK |
| Frontend (theme before components, no inline, centralized copy) | OK with observations |
| React (functional components, single responsibility, explicit props) | OK |
| Tests (Vitest, AAA, descriptive names, Button coverage) | OK |

---

## Recommendations

1. **[HIGH PRIORITY]** Centralize `bookingUrl` in `strings.ts` or in a dedicated `env.ts` file and import it in the 3 components that use it. Removes the risk of drift between files.

2. **[HIGH PRIORITY]** Use the `<Card>` primitive in `HowItWorksSection` instead of duplicating the Tailwind classes inline. Keeps it consistent with `SolutionsSection`.

3. **[LOW]** Align the `icon` type in `content.types.ts` with the data strategy in `strings.ts`: either change `icon: ElementType` to `icon: string` in the types (and keep the `iconMap`), or import the Lucide components directly in the constants. The current inconsistency does not cause errors but is confusing.

4. **[LOW]** Decide whether `src/theme/colors.ts`, `typography.ts` and `spacing.ts` should be kept as reference documentation or removed, since no component consumes them. If kept, add an explicit comment that they are reference only and that `index.css` is the source of truth for the tokens.

5. **[LOW]** Confirm with product whether the Footer should have 3 or 4 link columns. The current implementation (3 link groups + logo) is aligned with the PRD but diverges from the letter of task 2.2.

---

## Verdict

Task 2.0 is **APPROVED WITH OBSERVATIONS**. The visual implementation is complete, responsive, correctly typed and free of critical issues. The deviations found are isolated and do not block moving on to task 3.0 (E2E tests). Recommendations 1 and 2 are the most important and should be addressed at the first opportunity — preferably before the production deploy.
