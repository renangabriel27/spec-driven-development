# Review: Task 1.0 - Project Foundation

**Reviewer**: AI Code Reviewer
**Date**: 2026-06-17
**Task file**: 1_task.md
**Status**: APPROVED WITH OBSERVATIONS

---

## Summary

Task 1.0 successfully delivered the full project scaffold: Vite + React 19 + TypeScript strict + Tailwind CSS v4, the theme token system, content constants, shared types and the four primitive UI components (`Button`, `Card`, `SectionLabel`, `RouteWidget`). All unit tests pass, the build completes with no TypeScript errors and the dev server starts without issues.

The implementation follows most of the TechSpec and task requirements. 4 quality observations were identified — none critical — and they should be addressed before or during the next task.

---

## Files Reviewed

| File | Status | Issues |
|---------|--------|-----------|
| `vite.config.ts` | OK | 0 |
| `tsconfig.json` / `tsconfig.app.json` | OK | 0 |
| `src/index.css` | OK | 0 |
| `src/App.tsx` | Observation | 1 |
| `src/main.tsx` | OK | 0 |
| `index.html` | Observation | 2 |
| `src/theme/colors.ts` | OK | 0 |
| `src/theme/typography.ts` | OK | 0 |
| `src/theme/spacing.ts` | OK | 0 |
| `src/theme/index.ts` | OK | 0 |
| `src/constants/strings.ts` | OK | 0 |
| `src/constants/navigation.ts` | OK | 0 |
| `src/types/content.types.ts` | OK | 0 |
| `src/components/ui/Button.tsx` | Observation | 1 |
| `src/components/ui/Card.tsx` | Observation | 1 |
| `src/components/ui/SectionLabel.tsx` | Observation | 1 |
| `src/components/ui/RouteWidget.tsx` | OK | 0 |
| `src/components/ui/Button.test.tsx` | OK | 0 |
| `src/test/setup.ts` | OK | 0 |
| `.env.local` | OK | 0 |
| `.gitignore` | OK | 0 |

---

## Issues Found

### Critical

No critical issues found.

---

### Major

**1. `React.ReactNode` used without an explicit import in three components**

- **Files**: `src/components/ui/Button.tsx` (line 4), `src/components/ui/Card.tsx` (line 2), `src/components/ui/SectionLabel.tsx` (line 2)
- **Description**: All three files reference `React.ReactNode` as the type of `children`, but none of them imports `React`. TypeScript accepts it because `@types/react` exports `React` as a UMD namespace (`export as namespace React`), which allows global use in some contexts. However, with `verbatimModuleSyntax: true` and `moduleDetection: "force"` enabled, the correct approach is to import it explicitly. The TechSpec convention (`typescript.md §4`) requires type clarity, and relying on an implicit namespace makes the intent ambiguous.
- **Suggested fix**:
  ```typescript
  // Button.tsx, Card.tsx, SectionLabel.tsx — add at the top of the file:
  import type { ReactNode } from 'react'

  // And replace React.ReactNode with ReactNode in the interfaces:
  interface ButtonProps {
    variant: 'primary' | 'ghost'
    href?: string
    children: ReactNode
    className?: string
  }
  ```

---

### Minor

**2. `index.html` with `lang="en"` — site is in Portuguese**

- **File**: `index.html` (line 2)
- **Description**: The `lang` attribute of the `<html>` tag is set to `"en"`, but all of the site's content is in Portuguese. This affects accessibility (screen readers use this attribute to pick the speech synthesis language) and SEO.
- **Suggested fix**: `<html lang="pt-BR">`

**3. `index.html` does not load Google Fonts Inter**

- **File**: `index.html`
- **Description**: The TechSpec explicitly states: _"index.html — entry point: loads Inter via Google Fonts"_ and _"Loaded via `<link>` in `index.html` with `rel="preconnect"` and `display=swap`"_. The current file has no `<link>` to Google Fonts. The `--font-sans: 'Inter', system-ui` token in the CSS only takes effect when the font is available in the browser; without explicit loading, the page will always render with the `system-ui` fallback.
- **Suggested fix**:
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
    rel="stylesheet"
  />
  ```

**4. `index.html` `<title>` lacks the proper product name**

- **File**: `index.html` (line 7)
- **Description**: The page title is `fretadao-site` (the project's technical name) instead of a proper product name. Although it is not a formal requirement of Task 1.0, it affects SEO and the browser tab experience from day one.
- **Suggested fix**: `<title>Fretadão — Mobilidade Corporativa</title>`

**5. Comment in `App.tsx`**

- **File**: `src/App.tsx` (line 7)
- **Description**: The file contains the comment `{/* Sections will be composed here in Task 2.0 */}`. Per the `common/code-standards` rule — and in line with the rules' guidance that code should be self-explanatory — "what comes next" explanatory comments should not be committed. The fact that App.tsx is empty, together with the task context, already documents this.
- **Suggested fix**: Remove the comment. The placeholder `<section>` is enough to show that the composer is still under construction.

---

## Strengths

- **TypeScript strict correctly enabled**: `tsconfig.app.json` with `"strict": true`, `"noUnusedLocals": true`, `"noUnusedParameters": true` and `"noFallthroughCasesInSwitch": true` — an exemplary setup.
- **Tailwind v4 correctly configured**: `@tailwindcss/vite` plugin in `vite.config.ts` and `@theme {}` in `src/index.css` with all color tokens, no `tailwind.config.js`, following the CSS-first approach documented in the TechSpec.
- **Well-structured theme tokens**: `src/theme/` with `colors.ts`, `typography.ts`, `spacing.ts` and `index.ts` — strictly following the `common/frontend.md §1` and `§3` rule of theme before components.
- **`Button` with correct conditional logic**: when `href` is present it renders `<a>`, when absent it renders `<button type="button">` — exactly as specified in the TechSpec. Using `type="button"` prevents accidental form submits.
- **`Button` tests complete and well named**: The 3 tests cover the 3 required behaviors, with names in the `should [behavior] when [condition]` format per `common/testing.md §2`.
- **Correct `.gitignore`**: The `*.local` pattern covers `.env.local` without exposing the file.
- **`strings.ts` with all 8 PRD sections**: Complete, centralized content, with `as const` for type safety.
- **`navigation.ts` with types imported from `content.types.ts`**: Correct use of `import type`, separating runtime dependencies from type dependencies.
- **`RouteWidget` decoupled via `strings.ts`**: The component has no hardcoded strings — it imports everything from `@/constants/strings`.
- **`@/` path alias configured**: In both `vite.config.ts` and `tsconfig.app.json`, enabling clean imports without deep relative paths.
- **Scaffold example files removed**: `App.css` and `src/assets/` removed as per subtask 1.3.

---

## Standards Compliance

| Standard | Status | Notes |
|----------|--------|-------------|
| TypeScript strict | OK | `strict: true`, no `any`, no arbitrary `as` |
| No `require` imports | OK | Only ES module `import`/`export` |
| Functional components | OK | No class components |
| Theme before components | OK | `src/theme/` created before the components |
| Centralized strings | OK | All copy in `constants/strings.ts` |
| `should...when` test names | OK | All 3 tests follow the format |
| No inline styles | OK | Tailwind classes only |
| `import type` for types | Partial | `navigation.ts` uses it correctly; `content.types.ts` could use `import type { ElementType }` instead of `import type { ElementType } from 'react'` — already correct |
| React imported explicitly | NOK | `React.ReactNode` without import in 3 files |
| Google Fonts Inter | NOK | Missing from `index.html` |
| HTML `lang` | NOK | `"en"` instead of `"pt-BR"` |

---

## Subtask Verification

| Subtask | Status | Notes |
|-----------|--------|-------------|
| 1.1 Vite scaffold + dependencies | Complete | All deps installed; `lucide-react`, `vitest`, `@testing-library/react` present |
| 1.2 Tailwind v4 configured | Complete | Plugin and `@theme {}` correct |
| 1.3 TypeScript strict + removal of examples | Complete | `App.css` and `assets/` removed |
| 1.4 Theme tokens in `src/theme/` | Complete | Tokens mapped in CSS and exported via `index.ts` |
| 1.5 `strings.ts` with section copy | Complete | 8 sections present (HERO, SOCIAL_PROOF, SOLUTIONS, HOW_IT_WORKS, WHY_FRETADAO, MANIFESTO, CTA_FINAL, FOOTER) |
| 1.6 `navigation.ts` with links | Complete | Header and footer columns present |
| 1.7 `content.types.ts` with interfaces | Complete | NavLink, SolutionCard, ProcessStep, ValuePillar, FooterColumn |
| 1.8 `Button.tsx` with variants | Complete | primary/ghost, `<a>` with href, `<button>` without href |
| 1.9 `Card.tsx`, `SectionLabel.tsx`, `RouteWidget.tsx` | Complete | All implemented |
| 1.10 `Button.test.tsx` with 3 passing tests | Complete | 3/3 tests passing |
| 1.11 `.env.local` + `.gitignore` | Complete | `VITE_BOOKING_URL` configured; `*.local` pattern in `.gitignore` |

---

## Test Results

```
Test Files  1 passed (1)
      Tests  3 passed (3)
   Duration  710ms
```

- Total tests: 3
- Passing: 3
- Failing: 0
- TypeScript build: no errors

---

## Recommendations (by priority)

1. **[Major]** Add `import type { ReactNode } from 'react'` to `Button.tsx`, `Card.tsx` and `SectionLabel.tsx`, replacing `React.ReactNode` with `ReactNode`. This ensures clarity and removes the dependency on the implicit UMD namespace.

2. **[Major — TechSpec]** Add the Google Fonts Inter `<link>` tags to `index.html` with `rel="preconnect"` and `display=swap`, as explicitly defined in the TechSpec. Without this, the Inter font will never load.

3. **[Minor]** Change `<html lang="en">` to `<html lang="pt-BR">` in `index.html`.

4. **[Minor]** Change `<title>fretadao-site</title>` to `<title>Fretadão — Mobilidade Corporativa</title>`.

5. **[Minor]** Remove the comment `{/* Sections will be composed here in Task 2.0 */}` from `App.tsx`.

---

## Conclusion

The Task 1.0 implementation is **solid**: correct scaffold, TypeScript strict, Tailwind v4 configured via plugin, a well-structured theme token system, complete content constants, UI components implemented per the specification and passing tests. The success criteria defined in the task were met.

The **APPROVED WITH OBSERVATIONS** status is due to two TechSpec-traceable points that were not implemented (Inter font in `index.html` and the correct `lang` attribute) and to an import pattern that should be standardized across the UI components. Nothing blocks the start of Task 2.0, but recommendation items 1, 2 and 3 should preferably be resolved before committing the next task's code.
