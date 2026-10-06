# Product Requirements Document (PRD)

## Overview

Fretadão is the No. 1 corporate mobility solution in Brazil, combining technology, logistics, and care in a single experience. The product to be built is the **homepage of Fretadão's corporate website**: a high-conversion landing page that faithfully follows the approved design. It targets HR professionals and company managers who need to solve their teams' corporate commute.

The site communicates Fretadão's value proposition, presents its solutions, and leads the visitor to the main action: scheduling a meeting with the sales team.

---

## Goals

- Clearly communicate Fretadão's value proposition to companies (B2B)
- Generate conversions through the "Agendar reunião" ("Schedule a meeting") CTA as the main success metric
- Present the four solutions of the ecosystem (Passenger, Management, Transport Operator, HR) in an understandable way
- Build trust through social proof (customer segments) and a values manifesto
- Serve as a foundation for future expansion with internal pages

---

## User Stories

- As an **HR manager**, I want to quickly understand what Fretadão offers when I land on the site, so that I can assess whether it is relevant to my company.
- As an **HR manager**, I want to know how the hiring/rollout process works, so that I can estimate the adoption effort.
- As an **operations decision-maker**, I want to learn about the available solutions (passenger, management, transport operator, HR), so that I can identify which one applies to my problem.
- As a **qualified visitor**, I want to be able to schedule a meeting directly, so that I don't have to call or send an email manually.
- As a **mobile visitor**, I want to browse and read the content easily on a small screen, so that the experience is equivalent to desktop.

---

## Core Features

### 1. Navigation Header

The header is fixed at the top and contains the brand and the site's main shortcuts.

**Why it matters:** it orients the visitor and keeps the main CTA always accessible.

**Functional requirements:**
1.1. Display the "FRETADÃO" logo on the left.
1.2. Display navigation links: Soluções, Como funciona, Para o RH, Contato.
1.3. Display a prominent "Agendar reunião →" CTA button in the right corner.
1.4. On mobile screens, the navigation menu must be collapsible (hamburger or equivalent).

---

### 2. Hero Section

The above-the-fold section, responsible for the first impression and the value statement.

**Why it matters:** this is where the visitor decides whether to keep reading; it must communicate the "what" and the "for whom" within seconds.

**Functional requirements:**
2.1. Display a credibility badge: "A solução nº1 em mobilidade corporativa no Brasil".
2.2. Display the main headline: "O caminho casa–trabalho–casa, mais humano."
2.3. Display the subtitle: "Transformamos o transporte corporativo em uma experiência completa e inteligente — que cuida do passageiro, simplifica a gestão e torna o RH operacional em estratégico."
2.4. Display two action buttons: "Agendar reunião →" (primary) and "Conhecer soluções" ("Explore solutions", secondary).
2.5. Display an illustrative route widget ("Sua rota de hoje") with pickup point and destination, simulating the app experience.
2.6. The section background must use the dark (navy blue) palette of the visual identity.

---

### 3. Social Proof Bar

Credibility strip displayed right below the hero.

**Why it matters:** it reduces friction and builds trust by showing that real companies rely on Fretadão.

**Functional requirements:**
3.1. Display the text "Confiança de empresas que movem o Brasil todos os dias".
3.2. Display logos or icons representing the segments served: Indústria, Logística, Varejo, Serviços.

---

### 4. Solutions Section ("Quatro experiências, um só ecossistema")

Presentation of the four fronts of the Fretadão platform.

**Why it matters:** visitors with different profiles (passenger, manager, transport operator, HR) should recognize themselves in the product.

**Functional requirements:**
4.1. Display the section label "UMA SOLUÇÃO COMPLETA".
4.2. Display the title "Quatro experiências, um só ecossistema".
4.3. Display a descriptive subtitle.
4.4. Display four cards with icon, title, and description:
  - **A viagem do passageiro** — a safe, comfortable, and predictable experience with real-time tracking.
  - **A gestão do deslocamento** — full visibility of routes, fleet, and operations in one dashboard.
  - **A rotina do transportador** — schedules, drivers, and vehicles organized with less effort.
  - **O RH operacional → estratégico** — fewer spreadsheets and tickets; more metrics and predictability.
4.5. The cards must be laid out in a 2×2 grid (desktop) and a single column (mobile).

---

### 5. How It Works Section ("Do diagnóstico à operação cuidada")

Three-step onboarding process.

**Why it matters:** it removes objections by showing that adoption is structured and supported.

**Functional requirements:**
5.1. Display the label "COMO FUNCIONA".
5.2. Display the title "Do diagnóstico à operação cuidada".
5.3. Display three numbered cards (01, 02, 03) with title and description:
  - **01 – Diagnóstico:** routes, shifts, and the operation's real needs.
  - **02 – Implantação:** tailored fleet, technology, and support.
  - **03 – Operação cuidada:** ongoing monitoring with data, safety, and human care.
5.4. The cards must be laid out in a row (desktop) and a column (mobile).

---

### 6. Why Fretadão Section ("Conectamos tecnologia, logística e cuidado")

Differentiated value proposition on a dark background.

**Why it matters:** it articulates Fretadão's three competitive pillars against market alternatives.

**Functional requirements:**
6.1. Display the label "POR QUE FRETADÃO".
6.2. Display the title "Conectamos tecnologia, logística e cuidado".
6.3. Display three pillars with icon, title, and description:
  - **Tecnologia** — app, telemetry, and data that bring predictability to the operation and peace of mind to the passenger.
  - **Logística** — smart routes, the right fleet, and efficient schedules for every shift and need.
  - **Cuidado** — people at the center of everything; every trip is the routine of someone who matters.
6.4. The section must use a dark blue background, keeping adequate contrast with the text.

---

### 7. Manifesto Section (Quote)

Fretadão's positioning statement.

**Why it matters:** it humanizes the brand and sets its positioning apart from purely operational competitors.

**Functional requirements:**
7.1. Display a quotation mark icon.
7.2. Display the full text: "Para muitos, o transporte corporativo é um quebra-cabeça. Para nós, é a oportunidade de tornar o percurso casa–trabalho–casa mais eficiente, seguro e humano."
7.3. The excerpt "mais eficiente, seguro e humano." must be highlighted in the brand's accent color (green/turquoise).

---

### 8. Final CTA Section ("Quer uma solução completa de mobilidade na sua empresa?")

High-intent call to action before the footer.

**Why it matters:** it captures visitors who reached the end of the page and are ready to talk.

**Functional requirements:**
8.1. Display the headline "Quer uma solução completa de mobilidade na sua empresa?"
8.2. Display the subtitle "Agende uma reunião com os nossos consultores e descubra o melhor caminho para a sua operação."
8.3. Display the "Agendar reunião →" button.
8.4. The section must have a dark background with rounded corners (glassmorphism-style card, as in the design).

---

### 9. Footer

Corporate navigation and company information.

**Why it matters:** users exploring the site expect to find second-level links in the footer.

**Functional requirements:**
9.1. Display the logo and the tagline "A solução nº1 em mobilidade corporativa no Brasil. Tecnologia, logística e cuidado em uma só experiência."
9.2. Display four columns of links:
  - **Soluções:** Passageiro, Gestão, Transportador, RH
  - **Empresa:** Sobre, Como funciona, Carreiras
  - **Contato:** Agendar reunião, Fale conosco, Seja um parceiro
9.3. Display the copyright line: "© 2026 Fretadão. Todos os direitos reservados."
9.4. Display the side tagline: "Mobilidade corporativa · Brasil".

---

## User Experience

**Primary persona:** HR professional or operations manager at a company with 100+ employees who needs to solve corporate transportation. Motivation: operational efficiency and less administrative burden. Objection: "is it going to be complicated to roll out?"

**Secondary persona:** Decision-making executive (C-level) researching alternatives before approving a sales meeting.

**Main journey:**
1. Visitor arrives via search or referral → reads the hero → understands the value proposition → clicks "Agendar reunião" or keeps scrolling.
2. Visitor explores the solutions → identifies their specific pain point → interest is reinforced.
3. Visitor reads "Como funciona" → complexity objection removed → converts on the final CTA.

**UX requirements:**
- Responsive layout: desktop (≥1280px), tablet (768–1279px), and mobile (<768px).
- Palette as per the design: dark navy blue (approximately #0A1628) as the primary background color of the highlight sections; white for text; green/turquoise as the action and accent color.
- Sans-serif typography, with a clear hierarchy between headlines, subtitles, and body text.
- Minimum accessibility: text contrast ≥ 4.5:1 (WCAG AA), working keyboard navigation, alt text on images.

---

## High-Level Technical Constraints

- The "Agendar reunião" CTA must integrate with a scheduling tool or lead capture form; the technical solution will be defined in the Tech Spec.
- The site must be hostable on static deployment platforms (Vercel, Netlify, or similar).
- There are no mandatory CMS requirements in this scope; content can be static in the first version.
- The visual identity (colors, typography, icons) must be faithfully reproduced from the design approved in the reference images (`site/`).

---

## Out of Scope

- Internal pages: Sobre, Carreiras, Fale conosco, Seja um parceiro, individual Solutions pages.
- Logged-in area / customer or transport operator portal.
- Blog or content section.
- Integrations with CRM, analytics, or marketing automation tools.
- Advanced SEO (sitemap, schema markup, Core Web Vitals optimization).
- Mobile app (iOS/Android).
- Native scheduling system; only the entry point (CTA) is in scope.
