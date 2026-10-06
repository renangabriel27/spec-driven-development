# Template de Especificação Técnica

## Resumo Executivo

A homepage da Fretadão é implementada como uma SPA estática com **React 19 + Vite + TypeScript strict + Tailwind CSS v4**. Todos os conteúdos são estáticos — sem CMS, sem API, sem SSR. O CTA "Agendar reunião" é um link externo configurável via variável de ambiente Vite. A arquitetura segue o padrão de composição por seções: `App.tsx` é um compositor puro, cada seção é um componente independente, e tokens de tema são definidos antes dos componentes.

---

## Arquitetura do Sistema

### Visão Geral dos Componentes

```
index.html                          ← ponto de entrada: carrega Inter via Google Fonts
src/
  main.tsx                          ← monta <App /> no DOM
  App.tsx                           ← compositor puro — sem lógica, só composição
  components/
    layout/
      Header.tsx                    ← nav fixa, CTA, menu mobile
      Footer.tsx                    ← 4 colunas, copyright
    sections/
      HeroSection.tsx               ← hero + RouteWidget
      SocialProofSection.tsx
      SolutionsSection.tsx          ← grade 2×2 de cards
      HowItWorksSection.tsx         ← 3 steps numerados
      WhyFretadaoSection.tsx        ← fundo escuro, 3 pilares
      ManifestoSection.tsx          ← quote com destaque
      CtaSection.tsx                ← CTA final card
    ui/
      Button.tsx                    ← variantes: primary | ghost
      Card.tsx                      ← wrapper com bordas
      SectionLabel.tsx              ← label de seção uppercase
      RouteWidget.tsx               ← widget ilustrativo de rota do hero
  theme/
    colors.ts                       ← tokens de cor da marca
    typography.ts                   ← escala tipográfica
    spacing.ts                      ← escala de espaçamento
    index.ts                        ← re-exporta todos tokens
  constants/
    strings.ts                      ← todo o copy centralizado
    navigation.ts                   ← links do header e footer
  types/
    content.types.ts                ← tipos compartilhados de conteúdo
```

**Fluxo de dados:** todos os dados fluem de `constants/` → seção/componente. Nenhum fetch em runtime. O único valor externo é `VITE_BOOKING_URL` (env var).

---

## Design de Implementação

### Interfaces Principais

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
  href?: string             // torna-se <a> se fornecido
  children: React.ReactNode
  className?: string
}
```

### Modelos de Dados

Todo o conteúdo textual vive em `constants/strings.ts` e `constants/navigation.ts`. Não há banco de dados nem API. Exemplo parcial:

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

### Endpoints de API

Não aplicável — site 100% estático. O único "ponto de saída" é o link externo de agendamento:

| Destino | Variável | Uso |
|---|---|---|
| URL de agendamento externo | `VITE_BOOKING_URL` | `href` nos botões CTA |

Leitura no código: `import.meta.env.VITE_BOOKING_URL` (padrão Vite — variáveis sem prefixo `VITE_` não são expostas ao bundle).

---

## Pontos de Integração

**Fonte Inter (Google Fonts)**
- Carregada via `<link>` no `index.html` com `rel="preconnect"` e `display=swap`.
- Sem dependência de pacote npm — requisição feita pelo browser em runtime.

**CTA externo**
- Todos os botões "Agendar reunião" leem `import.meta.env.VITE_BOOKING_URL`.
- Fallback: `#contato` (âncora na página) caso a variável não esteja definida.
- Nenhuma SDK externa de agendamento é instalada.

**Ícones (Lucide React)**
- `lucide-react` importada por componente (tree-shakeable pelo Vite).
- Ícones usados: `Monitor`, `Activity`, `Heart` (pilares); `User`, `LayoutGrid`, `Bus`, `TrendingUp` (soluções); `Quote` (manifesto).

---

## Abordagem de Testes

### Testes Unidade

Landing page estática sem lógica de negócio — testes unitários de baixo valor. Apenas o componente `Button` merece teste isolado:

- `should render as anchor when href is provided`
- `should render as button when href is omitted`
- `should apply primary variant classes when variant is primary`

Ferramenta: Vitest + React Testing Library.

### Testes de Integração

Não aplicável — sem integrações em runtime a testar.

### Testes de E2E

Playwright cobre os fluxos críticos do visitante com o servidor Vite dev (`playwright.config.ts` → `webServer: { command: 'vite' }`):

**Arquivo:** `e2e/homepage.spec.ts`

| Cenário | Assertion |
|---|---|
| Hero renderiza | `getByText('O caminho casa–trabalho–casa')` visível |
| CTAs presentes | Todos os botões "Agendar reunião" têm `href` não vazio |
| Seções presentes | Cada `<section>` existe no DOM via `data-section` attribute |
| Menu mobile | Clicar hambúrguer exibe os links de navegação (viewport 375px) |
| Links do footer | Links de navegação do rodapé são renderizados |

Atributo `data-section="hero"` em cada `<section>` garante seletores estáveis, independentes de texto.

---

## Sequenciamento de Desenvolvimento

### Ordem de Construção

1. **Scaffold do projeto** — `npm create vite@latest` com template `react-ts`. Instala Tailwind v4, Lucide React, Vitest, Playwright. Configura `VITE_BOOKING_URL` no `.env.local`. *(base para tudo)*
2. **Tokens de tema** — `src/theme/` com cores, tipografia e espaçamento. *(regra: tema antes dos componentes)*
3. **Primitivos de UI** — `Button`, `Card`, `SectionLabel`. *(dependência de todas as seções)*
4. **`Header` + `Footer`** — estrutura do layout. *(seções dependem do layout)*
5. **Seções da homepage** — na ordem de cima para baixo: Hero → SocialProof → Solutions → HowItWorks → WhyFretadao → Manifesto → CTA.
6. **Composição em `App.tsx`** — importa e ordena as seções entre `<Header>` e `<Footer>`.
7. **Testes E2E** — Playwright cobre os cenários listados acima.

### Dependências Técnicas

| Pacote | Versão alvo | Finalidade |
|---|---|---|
| `vite` | 6.x | Bundler + dev server |
| `react` / `react-dom` | 19.x | UI runtime |
| `typescript` | 5.x | Tipagem strict |
| `tailwindcss` | 4.x | Estilos |
| `lucide-react` | latest | Ícones SVG |
| `@playwright/test` | latest | Testes E2E |
| `vitest` + `@testing-library/react` | latest | Testes unitários de Button |

---

## Monitoramento e Observabilidade

Não aplicável nesta fase — sem backend, sem deploy. Quando deploy for configurado, considerar:
- Log de cliques no CTA via `onClick` + `console.log` (base para futura integração de analytics)

---

## Considerações Técnicas

### Decisões Principais

**React + Vite vs Next.js**
Escolhido Vite por simplicidade: zero config de SSR/App Router, dev server imediato, sem conceitos de Server Components. Para uma landing page estática sem requisitos de SEO neste momento, o overhead do Next.js não se justifica. Migração futura para Next.js é possível sem reescrita dos componentes.

**Tailwind v4 vs v3**
Tailwind v4 (CSS-first config via `@theme` no CSS) elimina `tailwind.config.js` e integra-se nativamente ao Vite via plugin oficial `@tailwindcss/vite`. Escolhido por ser a versão atual e ter integração mais direta com Vite.

**Conteúdo em `constants/` vs CMS headless**
CMS foi explicitamente excluído do escopo. Centralizar em `constants/strings.ts` garante type-safety, facilita busca/replace futuro e habilita migração para CMS sem alterar componentes.

**`VITE_BOOKING_URL` vs hardcode**
URL de agendamento pode trocar de ferramenta (Calendly → HubSpot). Env var evita alterar o código para mudar o destino — basta atualizar o `.env`.

### Riscos Conhecidos

| Risco | Mitigação |
|---|---|
| Fonte Inter bloqueada (rede corporativa/CSP) | `font-display: swap` garante fallback de sistema |
| `VITE_BOOKING_URL` não definida em algum ambiente | Fallback para `#contato` implementado no `Button` |
| SPA sem SSR prejudica SEO futuro | Documentado como limitação; migração para Next.js é o caminho natural |

### Conformidade com Padrões

Regras do projeto aplicadas nesta Tech Spec:

- **`typescript/typescript.md` §1** — `App.tsx` é compositor puro; cada seção tem responsabilidade única
- **`typescript/typescript.md` §4** — `strict: true` obrigatório no `tsconfig.json`; sem `any`
- **`common/frontend.md` §1** — sem estilos inline; todos os valores de design em `src/theme/`
- **`common/frontend.md` §3** — tema definido antes dos componentes (etapa 2 do sequenciamento)
- **`common/frontend.md` §4** — todo copy em `src/constants/strings.ts`
- **`common/testing.md` §1** — testes E2E cobrem fluxos principais; `Button` tem teste unitário por ter lógica condicional
- **`common/testing.md` §2** — nomes de teste no formato `should [behavior] when [condition]`
- **`common/git.md` §2** — commits seguem Conventional Commits (`feat(hero): add route widget`, etc.)

### Arquivos relevantes e dependentes

```
index.html                              ← carrega Inter, ponto de entrada Vite
src/main.tsx                            ← monta App no DOM
src/App.tsx                             ← composição da homepage
src/theme/index.ts                      ← tokens: todos os componentes dependem
src/constants/strings.ts                ← copy: todas as seções dependem
src/constants/navigation.ts             ← links: Header e Footer dependem
src/components/ui/Button.tsx            ← usado por Header, Hero, CTA
src/components/layout/Header.tsx        ← dependência: Button, navigation
src/components/layout/Footer.tsx        ← dependência: navigation
src/components/sections/HeroSection.tsx ← dependência: Button, RouteWidget
src/components/ui/RouteWidget.tsx       ← isolado, sem deps externas
e2e/homepage.spec.ts                    ← testes E2E Playwright
.env.local                              ← VITE_BOOKING_URL (não commitar)
```
