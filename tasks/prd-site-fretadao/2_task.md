# Tarefa 2.0: Implementação Visual

<critical>Ler os arquivos de prd.md e techspec.md desta pasta, se você não ler esses arquivos sua tarefa será invalidada</critical>

## Visão Geral

Implementar todos os componentes visuais da homepage: Header (com menu mobile), Footer e as 7 seções de conteúdo. Cada componente é desenvolvido de forma isolada, consumindo tokens de `src/theme/` e copy de `src/constants/strings.ts`. Ao final, todas as peças visuais existem e são responsivas, mas ainda não estão montadas em `App.tsx`.

<requirements>
- Header fixo com logo, 4 links de navegação e CTA; menu hambúrguer funcional em mobile
- Footer com logo, tagline, 4 colunas de links e linha de copyright
- HeroSection: badge, headline, subtítulo, 2 CTAs, RouteWidget; fundo azul-marinho
- SocialProofSection: texto de confiança + 4 segmentos (Indústria, Logística, Varejo, Serviços)
- SolutionsSection: label + título + grade 2×2 de cards com ícone/título/descrição
- HowItWorksSection: label + título + 3 cards numerados (01, 02, 03); fundo cinza claro
- WhyFretadaoSection: label + título + 3 pilares com ícone; fundo azul-escuro
- ManifestoSection: ícone de aspas + quote com trecho destacado em turquesa
- CtaSection: headline + subtítulo + botão CTA; card com fundo escuro e bordas arredondadas
- Todos os componentes responsivos: desktop (≥1280px), tablet (768px–1279px), mobile (<768px)
- Atributo data-section em cada <section> para testes E2E estáveis
</requirements>

## Subtarefas

- [ ] 2.1 Implementar `src/components/layout/Header.tsx`: logo "FRETADÃO", links de navegação do `navigation.ts`, botão CTA lendo `import.meta.env.VITE_BOOKING_URL`, estado de menu mobile com `useState`
- [ ] 2.2 Implementar `src/components/layout/Footer.tsx`: logo, tagline, 4 colunas de links do `navigation.ts`, copyright e tagline lateral
- [ ] 2.3 Implementar `src/components/sections/HeroSection.tsx`: fundo azul-marinho, badge, headline com quebra de linha preservada, subtítulo, dois `<Button>`, `<RouteWidget>` à direita. `data-section="hero"`
- [ ] 2.4 Implementar `src/components/sections/SocialProofSection.tsx`: texto centralizado + 4 segmentos com ícone e nome. `data-section="social-proof"`
- [ ] 2.5 Implementar `src/components/sections/SolutionsSection.tsx`: label + título + subtítulo + grade 2×2 de `<Card>` com ícone Lucide, título e descrição. `data-section="solutions"`
- [ ] 2.6 Implementar `src/components/sections/HowItWorksSection.tsx`: label + título + 3 `<Card>` numerados em linha (desktop) / coluna (mobile). `data-section="how-it-works"`
- [ ] 2.7 Implementar `src/components/sections/WhyFretadaoSection.tsx`: fundo azul-escuro, label, título, 3 pilares com ícone Lucide, título e descrição. `data-section="why-fretadao"`
- [ ] 2.8 Implementar `src/components/sections/ManifestoSection.tsx`: ícone de aspas, quote com `<span>` em turquesa para "mais eficiente, seguro e humano.". `data-section="manifesto"`
- [ ] 2.9 Implementar `src/components/sections/CtaSection.tsx`: card com fundo escuro e bordas arredondadas, headline, subtítulo, `<Button variant="primary">`. `data-section="cta"`
- [ ] 2.10 Verificar responsividade de cada seção: abrir `npm run dev` e testar em viewport 375px (mobile), 768px (tablet) e 1280px (desktop)

## Detalhes de Implementação

Ver `techspec.md` — seções: **Arquitetura do Sistema** (lista completa de componentes), **Pontos de Integração** (ícones Lucide por seção), **Sequenciamento de Desenvolvimento** etapas 4–5. O PRD contém os requisitos funcionais numerados (1.x a 9.x) para cada seção.

## Critérios de Sucesso

- Cada componente importado individualmente em `main.tsx` renderiza sem erros no browser
- Menu mobile abre/fecha ao clicar no botão hambúrguer em viewport 375px
- CTA buttons possuem `href` apontando para `VITE_BOOKING_URL` ou fallback `#contato`
- Grade 2×2 das soluções colapsa para coluna única em mobile
- Cards numerados do "Como funciona" ficam em linha no desktop e em coluna no mobile
- Seção "Por que Fretadão" e Hero têm fundo azul-escuro com texto branco legível (contraste ≥ 4.5:1)
- Atributo `data-section` presente em cada `<section>`

## Testes da Tarefa

Testes visuais manuais (sem suite automatizada nesta tarefa — E2E cobre na tarefa 3.0):

- [ ] Abrir `npm run dev` e inspecionar cada seção em 375px, 768px e 1280px
- [ ] Verificar que menu mobile abre/fecha corretamente
- [ ] Verificar que todos os links de navegação e CTAs estão presentes e com href preenchido
- [ ] Verificar contraste visual nas seções com fundo escuro

<critical>SEMPRE CRIE E EXECUTE OS TESTES DA TAREFA ANTES DE CONSIDERÁ-LA FINALIZADA</critical>

## Arquivos relevantes

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
src/constants/strings.ts              ← fonte de todo o copy
src/constants/navigation.ts           ← fonte dos links
src/theme/index.ts                    ← tokens de cor e tipografia
src/components/ui/Button.tsx          ← usado por Header, Hero, CTA
src/components/ui/Card.tsx            ← usado por Solutions, HowItWorks
src/components/ui/SectionLabel.tsx    ← usado por todas as seções com label
src/components/ui/RouteWidget.tsx     ← usado pelo Hero
```
