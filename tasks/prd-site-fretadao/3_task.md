# Task 3.0: Final Composition and E2E Tests

<critical>Read the prd.md and techspec.md files in this folder; if you do not read these files, your task will be invalidated</critical>

## Overview

Assemble the complete homepage in `App.tsx` by composing all the components from the previous tasks, configure Playwright and write the E2E test suite that validates the visitor's critical flows. By the end, the homepage is functionally complete and the tests pass.

<requirements>
- App.tsx is a pure composer: no logic, it only imports and orders Header, sections and Footer
- index.html loads the Inter font via Google Fonts with rel="preconnect" and font-display=swap
- Playwright installed and configured with webServer pointing to the Vite server
- E2E suite covers: hero rendering, presence and href of the CTAs, data-section attributes of each section, mobile menu and footer links
- All E2E tests pass with npx playwright test
</requirements>

## Subtasks

- [ ] 3.1 Update `index.html`: add `<link rel="preconnect" href="https://fonts.googleapis.com">` and the Inter font `<link>` with `display=swap`; apply `font-family: 'Inter', sans-serif` in the base CSS
- [ ] 3.2 Implement `src/App.tsx` as a pure composer: import `<Header>`, all sections in the design's order and `<Footer>`. Zero logic, zero state
- [ ] 3.3 Install Playwright: `npm init playwright@latest`. Select TypeScript, folder `e2e/`, add `webServer` to `playwright.config.ts` with `command: 'vite'` and `url: 'http://localhost:5173'`
- [ ] 3.4 Create `e2e/homepage.spec.ts` with the 5 test scenarios described in the Tech Spec
- [ ] 3.5 Run `npx playwright test` — all tests must pass
- [ ] 3.6 Final check: open `npm run dev`, scroll through the page from top to footer and confirm fidelity to the design (`site/*.jpg`)

## Implementation Details

See `techspec.md` — sections: **System Architecture** (`App.tsx` and `index.html`), **Integration Points** (Inter font), **E2E Tests** (scenario table and `webServer` configuration).

`App.tsx` structure:

```tsx
// App.tsx — pure composer, no logic
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import SocialProofSection from './components/sections/SocialProofSection'
import SolutionsSection from './components/sections/SolutionsSection'
import HowItWorksSection from './components/sections/HowItWorksSection'
import WhyFretadaoSection from './components/sections/WhyFretadaoSection'
import ManifestoSection from './components/sections/ManifestoSection'
import CtaSection from './components/sections/CtaSection'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SocialProofSection />
        <SolutionsSection />
        <HowItWorksSection />
        <WhyFretadaoSection />
        <ManifestoSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
```

## Success Criteria

- `npm run dev` displays the complete homepage, faithful to the reference design in `site/`
- `npm run build` completes without TypeScript errors
- `npx playwright test` passes all 5 scenarios (0 failures)
- The Inter font loads visually (text with the correct typeface)

## Task Tests

Playwright suite in `e2e/homepage.spec.ts`:

- [ ] `should display hero headline when page loads` — `getByText('O caminho casa–trabalho–casa')` visible
- [ ] `should have non-empty href on all CTA buttons` — every `<a>` with the text "Agendar reunião" ("Schedule a meeting") has a non-empty `href`
- [ ] `should render all page sections` — `[data-section]` returns 7 elements in the DOM
- [ ] `should toggle mobile menu when hamburger is clicked` — 375px viewport, click the hamburger, navigation links become visible
- [ ] `should render footer navigation links` — links "Passageiro", "Gestão", "Sobre", "Carreiras" present in the footer

<critical>ALWAYS CREATE AND RUN THE TASK TESTS BEFORE CONSIDERING IT DONE</critical>

## Relevant files

```
index.html                            ← Inter Google Fonts
src/main.tsx                          ← mounts <App /> in the DOM
src/App.tsx                           ← pure composer
playwright.config.ts                  ← webServer: vite
e2e/homepage.spec.ts                  ← 5 E2E scenarios
```
