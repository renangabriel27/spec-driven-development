# Tarefa 3.0: Composição Final e Testes E2E

<critical>Ler os arquivos de prd.md e techspec.md desta pasta, se você não ler esses arquivos sua tarefa será invalidada</critical>

## Visão Geral

Montar a homepage completa em `App.tsx` compondo todos os componentes das tarefas anteriores, configurar o Playwright e escrever a suite de testes E2E que valida os fluxos críticos do visitante. Ao final, a homepage está funcionalmente completa e os testes passam.

<requirements>
- App.tsx é um compositor puro: sem lógica, apenas importa e ordena Header, seções e Footer
- index.html carrega a fonte Inter via Google Fonts com rel="preconnect" e font-display=swap
- Playwright instalado e configurado com webServer apontando para o servidor Vite
- Suite E2E cobre: renderização do hero, presença e href dos CTAs, atributos data-section de cada seção, menu mobile e links do footer
- Todos os testes E2E passam com npx playwright test
</requirements>

## Subtarefas

- [ ] 3.1 Atualizar `index.html`: adicionar `<link rel="preconnect" href="https://fonts.googleapis.com">` e `<link>` da fonte Inter com `display=swap`; aplicar `font-family: 'Inter', sans-serif` no CSS base
- [ ] 3.2 Implementar `src/App.tsx` como compositor puro: importar `<Header>`, todas as seções na ordem do design e `<Footer>`. Zero lógica, zero estado
- [ ] 3.3 Instalar Playwright: `npm init playwright@latest`. Selecionar TypeScript, pasta `e2e/`, adicionar `webServer` no `playwright.config.ts` com `command: 'vite'` e `url: 'http://localhost:5173'`
- [ ] 3.4 Criar `e2e/homepage.spec.ts` com os 5 cenários de teste descritos na Tech Spec
- [ ] 3.5 Rodar `npx playwright test` — todos os testes devem passar
- [ ] 3.6 Verificação final: abrir `npm run dev`, percorrer a página do topo ao rodapé e confirmar fidelidade ao design (`site/*.jpg`)

## Detalhes de Implementação

Ver `techspec.md` — seções: **Arquitetura do Sistema** (`App.tsx` e `index.html`), **Pontos de Integração** (fonte Inter), **Testes de E2E** (tabela de cenários e configuração do `webServer`).

Estrutura do `App.tsx`:

```tsx
// App.tsx — compositor puro, sem lógica
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

## Critérios de Sucesso

- `npm run dev` exibe a homepage completa, fiel ao design de referência em `site/`
- `npm run build` conclui sem erros de TypeScript
- `npx playwright test` passa todos os 5 cenários (0 falhas)
- Fonte Inter carrega visualmente (texto com a tipagem correta)

## Testes da Tarefa

Suite Playwright em `e2e/homepage.spec.ts`:

- [ ] `should display hero headline when page loads` — `getByText('O caminho casa–trabalho–casa')` visível
- [ ] `should have non-empty href on all CTA buttons` — todos os `<a>` com texto "Agendar reunião" têm `href` não vazio
- [ ] `should render all page sections` — `[data-section]` retorna 7 elementos no DOM
- [ ] `should toggle mobile menu when hamburger is clicked` — viewport 375px, clicar hambúrguer, links de navegação ficam visíveis
- [ ] `should render footer navigation links` — links "Passageiro", "Gestão", "Sobre", "Carreiras" presentes no footer

<critical>SEMPRE CRIE E EXECUTE OS TESTES DA TAREFA ANTES DE CONSIDERÁ-LA FINALIZADA</critical>

## Arquivos relevantes

```
index.html                            ← Inter Google Fonts
src/main.tsx                          ← monta <App /> no DOM
src/App.tsx                           ← compositor puro
playwright.config.ts                  ← webServer: vite
e2e/homepage.spec.ts                  ← 5 cenários E2E
```
