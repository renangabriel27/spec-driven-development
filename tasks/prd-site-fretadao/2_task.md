# Task 2.0: Visual Implementation

<critical>Read the prd.md and techspec.md files in this folder; if you do not read these files, your task will be invalidated</critical>

## Overview

Implement all the visual components of the homepage: Header (with mobile menu), Footer and the 7 content sections. Each component is developed in isolation, consuming tokens from `src/theme/` and copy from `src/constants/strings.ts`. By the end, all visual pieces exist and are responsive, but they are not yet assembled in `App.tsx`.

<requirements>
- Fixed header with logo, 4 navigation links and CTA; working hamburger menu on mobile
- Footer with logo, tagline, 4 link columns and a copyright line
- HeroSection: badge, headline, subtitle, 2 CTAs, RouteWidget; navy blue background
- SocialProofSection: trust text + 4 segments (Indústria, Logística, Varejo, Serviços)
- SolutionsSection: label + title + 2×2 grid of cards with icon/title/description
- HowItWorksSection: label + title + 3 numbered cards (01, 02, 03); light gray background
- WhyFretadaoSection: label + title + 3 pillars with icon; dark blue background
- ManifestoSection: quotation mark icon + quote with a highlighted excerpt in teal
- CtaSection: headline + subtitle + CTA button; card with dark background and rounded corners
- All components responsive: desktop (≥1280px), tablet (768px–1279px), mobile (<768px)
- data-section attribute on every <section> for stable E2E tests
</requirements>

## Subtasks

- [ ] 2.1 Implement `src/components/layout/Header.tsx`: "FRETADÃO" logo, navigation links from `navigation.ts`, CTA button reading `import.meta.env.VITE_BOOKING_URL`, mobile menu state with `useState`
- [ ] 2.2 Implement `src/components/layout/Footer.tsx`: logo, tagline, 4 link columns from `navigation.ts`, copyright and side tagline
- [ ] 2.3 Implement `src/components/sections/HeroSection.tsx`: navy blue background, badge, headline with preserved line break, subtitle, two `<Button>`s, `<RouteWidget>` on the right. `data-section="hero"`
- [ ] 2.4 Implement `src/components/sections/SocialProofSection.tsx`: centered text + 4 segments with icon and name. `data-section="social-proof"`
- [ ] 2.5 Implement `src/components/sections/SolutionsSection.tsx`: label + title + subtitle + 2×2 grid of `<Card>` with Lucide icon, title and description. `data-section="solutions"`
- [ ] 2.6 Implement `src/components/sections/HowItWorksSection.tsx`: label + title + 3 numbered `<Card>`s in a row (desktop) / column (mobile). `data-section="how-it-works"`
- [ ] 2.7 Implement `src/components/sections/WhyFretadaoSection.tsx`: dark blue background, label, title, 3 pillars with Lucide icon, title and description. `data-section="why-fretadao"`
- [ ] 2.8 Implement `src/components/sections/ManifestoSection.tsx`: quotation mark icon, quote with a teal `<span>` for "mais eficiente, seguro e humano.". `data-section="manifesto"`
- [ ] 2.9 Implement `src/components/sections/CtaSection.tsx`: card with dark background and rounded corners, headline, subtitle, `<Button variant="primary">`. `data-section="cta"`
- [ ] 2.10 Check the responsiveness of each section: open `npm run dev` and test at 375px (mobile), 768px (tablet) and 1280px (desktop) viewports

## Implementation Details

See `techspec.md` — sections: **System Architecture** (full list of components), **Integration Points** (Lucide icons per section), **Development Sequencing** steps 4–5. The PRD contains the numbered functional requirements (1.x to 9.x) for each section.

## Success Criteria

- Each component imported individually in `main.tsx` renders without errors in the browser
- Mobile menu opens/closes when clicking the hamburger button at a 375px viewport
- CTA buttons have an `href` pointing to `VITE_BOOKING_URL` or the `#contato` fallback
- The 2×2 solutions grid collapses to a single column on mobile
- The numbered "Como funciona" cards sit in a row on desktop and in a column on mobile
- The "Por que Fretadão" section and the Hero have a dark blue background with legible white text (contrast ≥ 4.5:1)
- `data-section` attribute present on every `<section>`

## Task Tests

Manual visual tests (no automated suite in this task — E2E covers it in task 3.0):

- [ ] Open `npm run dev` and inspect each section at 375px, 768px and 1280px
- [ ] Verify that the mobile menu opens/closes correctly
- [ ] Verify that all navigation links and CTAs are present and have a populated href
- [ ] Verify visual contrast in the dark-background sections

<critical>ALWAYS CREATE AND RUN THE TASK TESTS BEFORE CONSIDERING IT DONE</critical>

## Relevant files

```
src/components/layout/Header.tsx
src/components/layout/Footer.tsx
src/components/sections/HeroSection.tsx
src/components/sections/SocialProofSection.tsx
src/components/sections/SolutionsSection.tsx
src/components/sections/HowItWorksSection.tsx
src/components/sections/WhyFretadaoSection.tsx
src/components/sections/ManifestoSection.tsx
src/components/sections/CtaSection.tsx
src/constants/strings.ts              ← source of all copy
src/constants/navigation.ts           ← source of the links
src/theme/index.ts                    ← color and typography tokens
src/components/ui/Button.tsx          ← used by Header, Hero, CTA
src/components/ui/Card.tsx            ← used by Solutions, HowItWorks
src/components/ui/SectionLabel.tsx    ← used by every section with a label
src/components/ui/RouteWidget.tsx     ← used by the Hero
```
