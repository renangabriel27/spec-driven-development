# Spec-Driven Development: Site Fretadão

Este repositório foi criado para uma **Tech Talk interna da Fretadão** sobre **Spec-Driven Development (SDD)**. O objetivo é mostrar, com um caso real e completo, como sair de um design aprovado e chegar a uma aplicação testada usando especificações como guia do trabalho com IA (Claude Code).

O site em si, o **`fretadao-site/`**, é o exemplo prático da apresentação: uma homepage institucional da Fretadão construída de ponta a ponta pelo fluxo PRD → Tech Spec → Tasks → Implementação → Review → QA. Cada etapa deixou seu artefato versionado em `tasks/prd-site-fretadao/`, então dá para acompanhar como cada documento alimentou o seguinte.

## Por que Spec-Driven Development

Em vez de pedir código direto para a IA, o SDD escreve primeiro **o que** precisa ser feito (PRD) e **como** (Tech Spec). Depois quebra o trabalho em tarefas pequenas e verificáveis. Na prática, isso traz:

- **Contexto explícito:** a IA trabalha a partir de documentos revisados por pessoas, não de um prompt solto.
- **Rastreabilidade:** cada requisito do PRD aparece na Tech Spec, nas tasks, nos testes e no relatório de QA.
- **Pontos de aprovação:** cada fase para e espera validação antes de seguir.
- **Qualidade verificável:** cada task traz testes, e review e QA fecham o ciclo com evidências.

> Este não é o site oficial da Fretadão: é material didático. Conteúdo e design servem só para ilustrar o processo.

## O `fretadao-site`

Landing page one-page de mobilidade corporativa, pensada para RH e gestores de empresas. Ela comunica a proposta de valor da Fretadão, apresenta as quatro soluções do ecossistema (Passageiro, Gestão, Transportador e RH) e leva o visitante ao CTA principal, **"Agendar reunião"**. É um site estático: sem backend, sem login e sem formulários.

![Hero do site no desktop](docs/screenshots/desktop-hero.png)

### Telas

<table>
  <tr>
    <td width="70%"><img src="docs/screenshots/section-solucoes.png" alt="Seção Quatro experiências, um só ecossistema"></td>
    <td width="30%" rowspan="2"><img src="docs/screenshots/mobile-hero.png" alt="Hero no mobile"></td>
  </tr>
  <tr>
    <td><img src="docs/screenshots/section-como-funciona.png" alt="Seção Como funciona"></td>
  </tr>
  <tr>
    <td><img src="docs/screenshots/section-por-que-fretadao.png" alt="Seção Por que Fretadão"></td>
    <td><img src="docs/screenshots/section-contato.png" alt="CTA final Agendar reunião"></td>
  </tr>
</table>

<details>
<summary>Página completa (desktop)</summary>

![Página completa no desktop](docs/screenshots/desktop-full.png)

</details>

### Do design ao código

O ponto de partida da Tech Talk foi o design aprovado em [`site/`](site/). Colocar os dois lado a lado mostra o que as specs preservaram (estrutura, textos e CTAs) e onde houve adaptação (paleta e detalhes do card de rota):

| Design aprovado | Implementado |
|-----------------|--------------|
| ![Design do hero](site/01-hero.jpg) | ![Hero implementado](docs/screenshots/desktop-hero.png) |

As capturas ficam em `docs/screenshots/` e foram geradas com Playwright: desktop em 1440×900 e mobile em 390×844.

**Status:** as três tasks foram concluídas e o QA foi aprovado. Os 28 requisitos do PRD foram atendidos e 48 testes E2E passaram. Veja [`qa-report.md`](tasks/prd-site-fretadao/qa-report.md).

### Seções da página

Montadas em `src/App.tsx`, nesta ordem:

1. `Header`: logo, navegação por âncoras (Soluções, Como funciona, Para o RH, Contato) e CTA
2. `HeroSection`: headline, CTAs e o widget "Sua rota de hoje"
3. `SocialProofSection`: segmentos atendidos (Indústria, Logística, Varejo, Serviços)
4. `SolutionsSection`: as quatro experiências do ecossistema
5. `HowItWorksSection`: Diagnóstico, Implantação e Operação
6. `WhyFretadaoSection`: Tecnologia, Logística e Cuidado
7. `ManifestoSection`: citação em destaque
8. `CtaSection`: chamada final para agendar reunião
9. `Footer`

### Stack

| Camada | Tecnologia |
|--------|------------|
| Build / dev server | Vite 8 |
| UI | React 19 + TypeScript 6 (`strict`) |
| Estilo | Tailwind CSS 4 + tokens em `src/theme/` |
| Ícones | `lucide-react` |
| Testes unitários | Vitest 4 + React Testing Library (jsdom) |
| Testes E2E | Playwright (Chromium) |
| Lint | ESLint 10 + typescript-eslint |

### Rodando localmente

```bash
cd fretadao-site
npm install
echo "VITE_BOOKING_URL=https://link-de-agendamento" > .env.local
npm run dev            # http://localhost:5173
```

| Variável | Descrição |
|----------|-----------|
| `VITE_BOOKING_URL` | URL da ferramenta de agendamento usada pelos botões "Agendar reunião". Sem ela, os botões caem no fallback `#contato`. |

### Scripts

| Comando | O que faz |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Checagem de tipos (`tsc -b`) + build estático em `dist/` |
| `npm run preview` | Serve o build gerado |
| `npm run lint` | ESLint |
| `npm test` | Testes unitários (Vitest) |
| `npm run test:e2e` | Testes E2E em `e2e/` (sobe o `vite` automaticamente) |

Antes do primeiro E2E, instale os navegadores com `npx playwright install chromium`.

### Estrutura

```
fretadao-site/
  e2e/                     # homepage.spec.ts, qa-full.spec.ts
  public/                  # favicon e sprites de ícones
  src/
    theme/                 # tokens de cor, tipografia e espaçamento
    constants/             # strings, navegação e env (bookingUrl)
    types/                 # tipos de conteúdo
    components/
      ui/                  # primitivos: Button, Card, SectionLabel, RouteWidget
      layout/              # Header, Footer
      sections/            # uma seção da página por arquivo
    App.tsx                # composição das seções
```

Imports usam o alias `@/` → `src/`.

## Estrutura do repositório

```
.claude/
  agents/      # task-reviewer: revisa cada task concluída
  commands/    # comandos do fluxo SDD
  rules/       # padrões: git, testes, segurança, frontend, debug, TypeScript
site/          # design aprovado (screenshots de referência de cada seção)
templates/     # templates de PRD, Tech Spec, tasks e task
tasks/
  prd-site-fretadao/
    prd.md, techspec.md, tasks.md, N_task.md
    N_task_review.md, review-report.md, qa-report.md
fretadao-site/ # a aplicação
```

## Fluxo de desenvolvimento (SDD)

Comandos em `.claude/commands/`, usados no Claude Code nesta ordem:

1. **`/criar-prd`**: requisitos a partir do design em `site/`, gerando `prd.md`
2. **`/criar-techspec`**: decisões técnicas e arquitetura, gerando `techspec.md`
3. **`/criar-tasks`**: tarefas incrementais, cada uma com testes, gerando `tasks.md` e `N_task.md`
4. **`/executar-task`**: implementa uma task; o agente `task-reviewer` gera `N_task_review.md`
5. **`/executar-review`**: code review geral, gerando `review-report.md`
6. **`/executar-qa`**: validação com Playwright, WCAG 2.2 e análise visual, gerando `qa-report.md`
7. **`/executar-bugfix`**: corrige o que estiver em `bugs.md`, com testes de regressão

## Convenções

Regras completas em `.claude/rules/`. Em resumo:

- **Tema antes de componentes**: nada de estilo, cor ou fonte inline; textos centralizados em `constants/strings.ts`
- **TypeScript**: `strict: true`, sem `any`
- **Testes**: `should <comportamento> when <condição>`, Arrange-Act-Assert, RTL testando o que o usuário vê
- **Git**: Conventional Commits e branches `feature/…`, `fix/…`, `chore/…`
