# Review: Task 2.0 - Implementação Visual

**Revisor**: AI Code Reviewer
**Data**: 2026-06-17
**Arquivo da task**: 2_task.md
**Status**: APPROVED WITH OBSERVATIONS

---

## Resumo

A implementação visual da homepage da Fretadão foi concluída com qualidade geral alta. Todos os 9 componentes exigidos foram criados (Header, Footer + 7 seções), o build de produção passa sem erros TypeScript, e os 3 testes unitários do `Button` estão verdes. O `App.tsx` é um compositor puro conforme a techspec.

Os problemas encontrados são majoritariamente menores: desvios pontuais em relação aos requisitos do PRD (Footer com 3 colunas em vez de 4; HowItWorksSection sem uso do primitivo `<Card>`), uma duplicação de constante entre arquivos e uma inconsistência de padrão na SocialProofSection. Nenhum bug crítico, nenhum uso de `any`, nenhuma violação de segurança.

---

## Arquivos Revisados

| Arquivo | Status | Problemas |
|---------|--------|-----------|
| `src/components/layout/Header.tsx` | OK | 0 |
| `src/components/layout/Footer.tsx` | Problemas | 1 |
| `src/components/sections/HeroSection.tsx` | OK | 0 |
| `src/components/sections/SocialProofSection.tsx` | Problemas | 1 |
| `src/components/sections/SolutionsSection.tsx` | OK | 0 |
| `src/components/sections/HowItWorksSection.tsx` | Problemas | 1 |
| `src/components/sections/WhyFretadaoSection.tsx` | OK | 0 |
| `src/components/sections/ManifestoSection.tsx` | OK | 0 |
| `src/components/sections/CtaSection.tsx` | Problemas | 1 |
| `src/App.tsx` | OK | 0 |
| `src/constants/strings.ts` | OK | 0 |
| `src/constants/navigation.ts` | OK | 0 |
| `src/components/ui/Button.tsx` | OK | 0 |
| `src/components/ui/Card.tsx` | OK | 0 |
| `src/components/ui/SectionLabel.tsx` | OK | 0 |
| `src/components/ui/RouteWidget.tsx` | OK | 0 |
| `src/components/ui/Button.test.tsx` | OK | 0 |
| `src/theme/colors.ts` | Problemas | 1 |
| `src/theme/index.ts` | OK | 0 |
| `src/index.css` | OK | 0 |
| `src/types/content.types.ts` | OK | 0 |

---

## Problemas Encontrados

### Críticos

Nenhum problema crítico encontrado.

---

### Maiores

**[MAIOR-1] Footer implementa 3 colunas em vez de 4 conforme PRD 9.2**

Arquivo: `src/components/layout/Footer.tsx`, linha 8

O PRD (requisito 9.2) especifica explicitamente **quatro** colunas: Soluções, Empresa, Contato e uma quarta coluna implícita (a área do logotipo/tagline conta como coluna de layout). A task 2.2 especifica: "logo, tagline, **4 colunas de links** do `navigation.ts`". O `navigation.ts` exporta apenas 3 `footerColumns` (Soluções, Empresa, Contato). O grid usa `lg:grid-cols-4` mas na prática exibe logotipo + 3 colunas de links, totalizando 4 células — o que é correto visualmente. Porém a task menciona "4 colunas de links", e o `navigation.ts` tem apenas 3 grupos.

Avaliação: o PRD (9.2) lista Soluções, Empresa e Contato — apenas 3 grupos de links de navegação (mais logo/tagline como coluna de layout). O grid `lg:grid-cols-4` com `lg:col-span-1` para o logotipo e 3 colunas de links preenche as 4 células corretamente. Isso é aceitável, mas a task 2.2 diz "4 colunas de links" literalmente. A implementação está alinhada com o PRD, mas diverge do enunciado literal da subtarefa.

Recomendação: verificar com o responsável pelo produto se "4 colunas de links" é um erro de redação na task ou se falta uma quarta coluna real (ex.: Legal / Política de privacidade). Se for erro de redação, nenhuma ação necessária.

---

**[MAIOR-2] HowItWorksSection não usa o primitivo `<Card>` conforme padrão da techspec**

Arquivo: `src/components/sections/HowItWorksSection.tsx`, linhas 20-29

A techspec lista `Card.tsx` como dependência de `HowItWorksSection`. O `Card` é um primitivo justamente para encapsular `rounded-2xl border p-6`, mas a seção duplica essas classes inline com `rounded-2xl border border-brand-gray-200 bg-white p-8`. A inconsistência não gera bug, mas viola o princípio de usar primitivos para garantir consistência e facilitar manutenção futura.

Correção sugerida:
```tsx
// Antes (HowItWorksSection.tsx linha 22)
<div
  key={step.number}
  className="flex flex-col gap-4 rounded-2xl border border-brand-gray-200 bg-white p-8"
>

// Depois
import { Card } from '@/components/ui/Card'
// ...
<Card key={step.number} className="border-brand-gray-200 bg-white p-8">
  <div className="flex flex-col gap-4">
```

---

### Menores

**[MENOR-1] `bookingUrl` declarada como constante de módulo em 3 arquivos separados**

Arquivos: `Header.tsx` (linha 6), `HeroSection.tsx` (linha 5), `CtaSection.tsx` (linha 4)

```ts
const bookingUrl = import.meta.env.VITE_BOOKING_URL || '#contato'
```

A mesma constante é declarada três vezes com o mesmo valor. Essa lógica deveria estar centralizada — por exemplo em `src/constants/bookingUrl.ts` ou em `src/constants/strings.ts` — e importada por cada componente. Qualquer mudança no fallback exige editar 3 arquivos.

Correção sugerida:
```ts
// src/constants/strings.ts — adicionar ao final
export const BOOKING_URL = import.meta.env.VITE_BOOKING_URL || '#contato'
```

---

**[MENOR-2] SocialProofSection usa `iconMap` baseado em string para resolver ícones Lucide**

Arquivo: `src/components/sections/SocialProofSection.tsx`, linhas 5-11

O padrão de `iconMap: Record<string, ElementType>` com strings do `strings.ts` funciona, mas perde a type-safety que os tipos do `content.types.ts` deveriam garantir. O tipo `SolutionCard` definido em `content.types.ts` tem `icon: ElementType` (componente diretamente), mas `strings.ts` armazena strings (`'Factory'`, `'Truck'`) e os componentes de seção fazem o mapeamento manual. Há uma discrepância entre o tipo definido na techspec e o que está sendo usado na prática — os tipos `SolutionCard`, `ValuePillar` em `content.types.ts` declaram `icon: ElementType`, mas os dados em `strings.ts` usam strings de nome de ícone.

Isso é uma inconsistência de design: ou os tipos devem ser atualizados para `icon: string`, ou os dados devem importar os ícones diretamente. Ambas as abordagens são válidas, mas devem ser consistentes. O padrão atual com `iconMap` não é errado, apenas não é o que os tipos prometem.

---

**[MENOR-3] Dupla duplicação de tokens no `theme/colors.ts` vs `src/index.css`**

Arquivo: `src/theme/colors.ts` e `src/index.css`

As mesmas cores de marca são definidas tanto em `src/theme/colors.ts` quanto como variáveis CSS no bloco `@theme` do `src/index.css`. Os componentes usam apenas as classes Tailwind (`bg-brand-navy`, `text-brand-teal`) que vêm do CSS, mas o `theme/colors.ts` exporta os mesmos valores sem ser consumido por nenhum componente (o `theme/index.ts` re-exporta, mas nenhum componente importa de `@/theme`). Isso significa que `colors.ts`, `typography.ts` e `spacing.ts` existem como artefatos de documentação/referência, sem uso real no código.

Isso não é um bug, mas é tech debt: se `theme/colors.ts` não é consumido pelos componentes, ele pode criar divergência futura (alguém atualiza o `.css` mas esquece o `.ts`). Seria melhor remover os arquivos de tema TypeScript se não são usados, ou documentar que são apenas referência.

---

**[MENOR-4] `App.tsx` usa `export default` enquanto todos os demais componentes usam named exports**

Arquivo: `src/App.tsx`, linha 29

Todos os componentes usam named exports (`export function Header()`, `export function Footer()`, etc.), mas `App.tsx` usa `export default App`. Isso é gerado pelo template Vite e é convencional para o componente raiz, mas cria inconsistência no padrão do projeto. Não é um problema funcional.

---

## Destaques Positivos

- **Acessibilidade bem implementada no Header**: uso correto de `aria-label` no logo, `aria-label` dinâmico no botão hambúrguer (`'Fechar menu'` / `'Abrir menu'`) e `aria-expanded` no toggle. Demonstra cuidado com UX.

- **`Button.tsx` com separação correta de responsabilidade**: a lógica de renderizar `<a>` vs `<button>` baseada na presença de `href` é clara, limpa e corretamente testada nos 3 cenários previstos na techspec.

- **Todos os `data-section` presentes e corretos**: todos os 7 elementos `<section>` têm o atributo `data-section` com o valor esperado pela suite E2E da task 3.0.

- **Copy 100% externalizado**: nenhuma string de conteúdo está hardcoded nos componentes — tudo vem de `strings.ts`. Inclusive o `RouteWidget` usa `HERO.routeWidget` do arquivo de constantes.

- **Tailwind v4 com `@theme` configurado corretamente**: o `index.css` define todos os tokens de cor da marca como variáveis CSS no bloco `@theme`, que é a forma idiomática para Tailwind v4, sem necessidade de `tailwind.config.js`.

- **`strict: true` e `noUnusedLocals/noUnusedParameters` habilitados** no `tsconfig.app.json`. O build passa sem erros, confirmando tipagem correta em todo o código.

- **`HeroSection` com `whitespace-pre-line`**: a headline usa `whitespace-pre-line` para preservar a quebra de linha do string `'O caminho casa–trabalho–casa,\nmais humano.'` conforme exigido na subtarefa 2.3.

- **ManifestoSection fiel ao PRD 7.3**: o trecho destacado em turquesa usa exatamente o texto especificado no PRD (`'mais eficiente, seguro e humano.'`) via `MANIFESTO.highlight` constante.

- **Responsividade implementada corretamente**: grade 2×2 das Soluções colapsa para 1 coluna com `grid-cols-1 md:grid-cols-2`; cards do HowItWorks ficam em linha no desktop com `md:grid-cols-3`; layout do Hero usa `lg:grid-cols-2`.

---

## Conformidade com Padrões

| Padrão | Status |
|--------|--------|
| Code Standards (nomenclatura, tamanho, sem magic numbers) | OK |
| TypeScript/Node.js (strict, sem `any`, `import`/`export`) | OK |
| Frontend (tema antes de componentes, sem inline, copy centralizado) | OK com observações |
| React (componentes funcionais, responsabilidade única, props explícitas) | OK |
| Testes (Vitest, AAA, nomes descritivos, cobertura do Button) | OK |

---

## Recomendações

1. **[PRIORITÁRIA]** Centralizar `bookingUrl` em `strings.ts` ou em um arquivo `env.ts` dedicado e importar nos 3 componentes que a usam. Elimina o risco de divergência entre arquivos.

2. **[PRIORITÁRIA]** Usar o primitivo `<Card>` em `HowItWorksSection` em vez de duplicar as classes Tailwind inline. Mantém a consistência com `SolutionsSection`.

3. **[BAIXA]** Alinhar o tipo `icon` em `content.types.ts` com a estratégia de dados em `strings.ts`: ou muda-se `icon: ElementType` para `icon: string` nos tipos (e mantém o `iconMap`), ou passa-se a importar os componentes Lucide diretamente nas constantes. A inconsistência atual não causa erro mas confunde.

4. **[BAIXA]** Avaliar se `src/theme/colors.ts`, `typography.ts` e `spacing.ts` devem ser mantidos como documentação de referência ou removidos, já que não são consumidos por nenhum componente. Se mantidos, comentar explicitamente que são apenas referência e que o `index.css` é a fonte da verdade para os tokens.

5. **[BAIXA]** Confirmar com o produto se o Footer deve ter 3 ou 4 colunas de links. A implementação atual (3 grupos de links + logotipo) está alinhada com o PRD mas diverge da letra da task 2.2.

---

## Veredicto

A task 2.0 está **APROVADA COM OBSERVAÇÕES**. A implementação visual está completa, responsiva, com TypeScript correto e sem problemas críticos. Os desvios encontrados são pontuais e não bloqueiam a progressão para a task 3.0 (testes E2E). As recomendações 1 e 2 são as mais importantes e devem ser endereçadas na primeira oportunidade — preferencialmente antes do deploy em produção.
