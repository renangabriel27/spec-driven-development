# Tarefa 1.0: Fundação do Projeto

<critical>Ler os arquivos de prd.md e techspec.md desta pasta, se você não ler esses arquivos sua tarefa será invalidada</critical>

## Visão Geral

Criar a base completa do projeto: scaffold Vite + React + TypeScript strict + Tailwind CSS v4, sistema de tokens de tema, constantes de conteúdo e tipos compartilhados, e todos os componentes UI primitivos reutilizáveis. Ao final desta tarefa, o projeto deve rodar no browser com o sistema de design configurado e os primitivos testados.

<requirements>
- Scaffold Vite com template react-ts, TypeScript strict: true
- Tailwind CSS v4 configurado via plugin @tailwindcss/vite
- Tokens de tema definidos em src/theme/ antes de qualquer componente
- Todo o copy centralizado em src/constants/strings.ts
- Links de navegação em src/constants/navigation.ts
- Tipos TypeScript compartilhados em src/types/content.types.ts
- Componentes Button, Card, SectionLabel e RouteWidget implementados
- Testes unitários do Button cobrindo as 3 variações de comportamento
- VITE_BOOKING_URL configurada no .env.local com fallback para #contato
</requirements>

## Subtarefas

- [ ] 1.1 Inicializar projeto: `npm create vite@latest fretadao-site -- --template react-ts`. Instalar dependências: `tailwindcss@4`, `@tailwindcss/vite`, `lucide-react`, `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `@vitejs/plugin-react`
- [ ] 1.2 Configurar Tailwind v4: adicionar `@tailwindcss/vite` ao `vite.config.ts` e substituir o CSS inicial por `@import "tailwindcss"` com a diretiva `@theme {}` no `src/index.css`
- [ ] 1.3 Configurar TypeScript: garantir `"strict": true` no `tsconfig.json`; remover arquivos de exemplo do scaffold (App.css, assets/)
- [ ] 1.4 Criar `src/theme/colors.ts`, `typography.ts`, `spacing.ts` e `index.ts` com tokens da marca (azul-marinho #0A1628, verde/turquesa de destaque, branco). Mapear tokens como custom properties CSS em `@theme {}`
- [ ] 1.5 Criar `src/constants/strings.ts` com todo o copy das 9 seções do PRD (HERO, SOCIAL_PROOF, SOLUTIONS, HOW_IT_WORKS, WHY_FRETADAO, MANIFESTO, CTA_FINAL, FOOTER)
- [ ] 1.6 Criar `src/constants/navigation.ts` com os links do header e as colunas do footer
- [ ] 1.7 Criar `src/types/content.types.ts` com as interfaces: NavLink, SolutionCard, ProcessStep, ValuePillar, FooterColumn
- [ ] 1.8 Implementar `src/components/ui/Button.tsx` (variantes primary | ghost; renderiza `<a>` quando href é fornecido, `<button>` caso contrário)
- [ ] 1.9 Implementar `src/components/ui/Card.tsx`, `SectionLabel.tsx` e `RouteWidget.tsx`
- [ ] 1.10 Criar `src/components/ui/Button.test.tsx` e rodar `vitest` — todos os testes devem passar
- [ ] 1.11 Criar `.env.local` com `VITE_BOOKING_URL=https://example.com/agendar` e adicionar `.env.local` ao `.gitignore`

## Detalhes de Implementação

Ver `techspec.md` — seções: **Arquitetura do Sistema** (estrutura de pastas), **Interfaces Principais** (tipos exatos), **Pontos de Integração** (VITE_BOOKING_URL e Tailwind v4), **Sequenciamento de Desenvolvimento** etapas 1–3.

## Critérios de Sucesso

- `npm run dev` sobe sem erros e abre página em branco no browser
- `npm run build` conclui sem erros de TypeScript
- Tokens do tema são importáveis: `import { colors } from '@/theme'`
- `Button` com `href` renderiza tag `<a>`; sem `href`, renderiza `<button>`
- Todos os testes unitários do `Button` passam: `npx vitest run`

## Testes da Tarefa

- [ ] `should render as anchor element when href prop is provided`
- [ ] `should render as button element when href prop is omitted`
- [ ] `should apply primary variant classes when variant is primary`

Ferramenta: Vitest + React Testing Library

<critical>SEMPRE CRIE E EXECUTE OS TESTES DA TAREFA ANTES DE CONSIDERÁ-LA FINALIZADA</critical>

## Arquivos relevantes

```
vite.config.ts
tsconfig.json
src/index.css                         ← @theme {} com tokens Tailwind v4
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
.env.local                            ← não commitar
.gitignore
```
