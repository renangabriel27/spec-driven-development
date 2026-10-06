# Template de Documento de Requisitos de Produto (PRD)

## Visão Geral

A Fretadão é a solução nº1 em mobilidade corporativa no Brasil, oferecendo tecnologia, logística e cuidado em uma só experiência. O produto a desenvolver é a **homepage do site institucional da Fretadão** — uma landing page de alta conversão, com fidelidade ao design aprovado, voltada a profissionais de RH e gestores de empresas que buscam resolver o deslocamento corporativo de suas equipes.

O site comunica a proposta de valor da Fretadão, apresenta suas soluções e conduz o visitante à ação principal: agendar uma reunião com a equipe comercial.

---

## Objetivos

- Comunicar com clareza a proposta de valor da Fretadão para empresas (B2B)
- Gerar conversões via CTA "Agendar reunião" como principal métrica de sucesso
- Apresentar as quatro soluções do ecossistema (Passageiro, Gestão, Transportador, RH) de forma compreensível
- Transmitir confiança através de prova social (segmentos de clientes) e manifesto de valores
- Servir como base para expansão futura com páginas internas

---

## Histórias de Usuário

- Como **gestor de RH**, quero entender rapidamente o que a Fretadão oferece ao chegar no site, para que eu possa avaliar se é relevante para minha empresa.
- Como **gestor de RH**, quero saber como funciona o processo de contratação/implantação, para que eu possa estimar o esforço de adoção.
- Como **decisor de operações**, quero conhecer as soluções disponíveis (passageiro, gestão, transportador, RH), para que eu possa identificar qual se aplica ao meu problema.
- Como **visitante qualificado**, quero conseguir agendar uma reunião de forma direta, para que eu não precise ligar ou enviar e-mail manualmente.
- Como **visitante em mobile**, quero navegar e ler o conteúdo sem dificuldade em tela pequena, para que a experiência seja equivalente à do desktop.

---

## Funcionalidades Principais

### 1. Header de Navegação

O header é fixo no topo e contém a marca e os atalhos principais do site.

**Por que é importante:** orienta o visitante e mantém o CTA principal sempre acessível.

**Requisitos funcionais:**
1.1. Exibir logotipo "FRETADÃO" à esquerda.
1.2. Exibir links de navegação: Soluções, Como funciona, Para o RH, Contato.
1.3. Exibir botão de CTA "Agendar reunião →" em destaque no canto direito.
1.4. Em telas mobile, o menu de navegação deve ser colapsável (hambúrguer ou equivalente).

---

### 2. Seção Hero

A seção acima da dobra — responsável pela primeira impressão e pela declaração de valor.

**Por que é importante:** é onde o visitante decide se continua lendo; deve comunicar o "o quê" e o "para quem" em segundos.

**Requisitos funcionais:**
2.1. Exibir badge de credibilidade: "A solução nº1 em mobilidade corporativa no Brasil".
2.2. Exibir headline principal: "O caminho casa–trabalho–casa, mais humano."
2.3. Exibir subtítulo: "Transformamos o transporte corporativo em uma experiência completa e inteligente — que cuida do passageiro, simplifica a gestão e torna o RH operacional em estratégico."
2.4. Exibir dois botões de ação: "Agendar reunião →" (primário) e "Conhecer soluções" (secundário).
2.5. Exibir widget ilustrativo de rota ("Sua rota de hoje") com ponto de embarque e destino, simulando a experiência do app.
2.6. O fundo da seção deve usar a paleta escura (azul-marinho) da identidade visual.

---

### 3. Barra de Prova Social

Faixa de credibilidade exibida logo abaixo do hero.

**Por que é importante:** reduz fricção e constrói confiança ao mostrar que empresas reais confiam na Fretadão.

**Requisitos funcionais:**
3.1. Exibir texto "Confiança de empresas que movem o Brasil todos os dias".
3.2. Exibir logotipos ou ícones representando os segmentos atendidos: Indústria, Logística, Varejo, Serviços.

---

### 4. Seção Soluções ("Quatro experiências, um só ecossistema")

Apresentação das quatro frentes da plataforma Fretadão.

**Por que é importante:** visitantes com perfis diferentes (passageiro, gestor, transportador, RH) devem se reconhecer no produto.

**Requisitos funcionais:**
4.1. Exibir label de seção "UMA SOLUÇÃO COMPLETA".
4.2. Exibir título "Quatro experiências, um só ecossistema".
4.3. Exibir subtítulo descritivo.
4.4. Exibir quatro cards com ícone, título e descrição:
  - **A viagem do passageiro** — experiência segura, confortável e previsível com acompanhamento em tempo real.
  - **A gestão do deslocamento** — visibilidade total de rotas, frota e operação em um painel.
  - **A rotina do transportador** — escalas, motoristas e veículos organizados com menos esforço.
  - **O RH operacional → estratégico** — menos planilhas e chamados; mais indicadores e previsibilidade.
4.5. Os cards devem ser dispostos em grade 2×2 (desktop) e coluna única (mobile).

---

### 5. Seção Como Funciona ("Do diagnóstico à operação cuidada")

Processo de onboarding em três etapas.

**Por que é importante:** remove objeções ao mostrar que a adoção é estruturada e acompanhada.

**Requisitos funcionais:**
5.1. Exibir label "COMO FUNCIONA".
5.2. Exibir título "Do diagnóstico à operação cuidada".
5.3. Exibir três cards numerados (01, 02, 03) com título e descrição:
  - **01 – Diagnóstico:** rotas, turnos e necessidades reais da operação.
  - **02 – Implantação:** frota, tecnologia e suporte sob medida.
  - **03 – Operação cuidada:** acompanhamento contínuo com dados, segurança e cuidado humano.
5.4. Os cards devem ser dispostos em linha (desktop) e coluna (mobile).

---

### 6. Seção Por que Fretadão ("Conectamos tecnologia, logística e cuidado")

Proposta de valor diferenciada com fundo escuro.

**Por que é importante:** articula os três pilares competitivos da Fretadão frente a alternativas de mercado.

**Requisitos funcionais:**
6.1. Exibir label "POR QUE FRETADÃO".
6.2. Exibir título "Conectamos tecnologia, logística e cuidado".
6.3. Exibir três pilares com ícone, título e descrição:
  - **Tecnologia** — app, telemetria e dados que dão previsibilidade à operação e tranquilidade ao passageiro.
  - **Logística** — rotas inteligentes, frota certa e escalas eficientes para cada turno e necessidade.
  - **Cuidado** — pessoas no centro de tudo; cada trajeto é a rotina de alguém que importa.
6.4. A seção deve usar fundo azul-escuro, mantendo contraste adequado com o texto.

---

### 7. Seção Manifesto (Quote)

Declaração de posicionamento da Fretadão.

**Por que é importante:** humaniza a marca e diferencia seu posicionamento de concorrentes puramente operacionais.

**Requisitos funcionais:**
7.1. Exibir ícone de aspas.
7.2. Exibir o texto completo: "Para muitos, o transporte corporativo é um quebra-cabeça. Para nós, é a oportunidade de tornar o percurso casa–trabalho–casa mais eficiente, seguro e humano."
7.3. O trecho "mais eficiente, seguro e humano." deve ser destacado na cor de destaque da marca (verde/turquesa).

---

### 8. Seção CTA Final ("Quer uma solução completa de mobilidade na sua empresa?")

Chamada para ação de alta intenção antes do rodapé.

**Por que é importante:** captura visitantes que chegaram ao final da página e estão prontos para conversar.

**Requisitos funcionais:**
8.1. Exibir headline "Quer uma solução completa de mobilidade na sua empresa?"
8.2. Exibir subtítulo "Agende uma reunião com os nossos consultores e descubra o melhor caminho para a sua operação."
8.3. Exibir botão "Agendar reunião →".
8.4. A seção deve ter fundo escuro com bordas arredondadas (card estilo glassmorphism conforme design).

---

### 9. Rodapé

Navegação institucional e informações da empresa.

**Por que é importante:** usuários que exploram o site esperam encontrar links de segunda camada no rodapé.

**Requisitos funcionais:**
9.1. Exibir logotipo e tagline "A solução nº1 em mobilidade corporativa no Brasil. Tecnologia, logística e cuidado em uma só experiência."
9.2. Exibir quatro colunas de links:
  - **Soluções:** Passageiro, Gestão, Transportador, RH
  - **Empresa:** Sobre, Como funciona, Carreiras
  - **Contato:** Agendar reunião, Fale conosco, Seja um parceiro
9.3. Exibir linha de copyright: "© 2026 Fretadão. Todos os direitos reservados."
9.4. Exibir tagline lateral: "Mobilidade corporativa · Brasil".

---

## Experiência do Usuário

**Persona primária:** Profissional de RH ou gestor de operações de empresa com 100+ colaboradores que precisa resolver o transporte corporativo. Motivação: eficiência operacional e redução de carga administrativa. Objeção: "vai ser complicado de implantar?"

**Persona secundária:** Executivo de decisão (C-level) pesquisando alternativas antes de aprovar uma reunião comercial.

**Jornada principal:**
1. Visitante chega via busca ou indicação → lê hero → entende proposta de valor → clica em "Agendar reunião" ou continua descendo.
2. Visitante explora soluções → identifica sua dor específica → reforça interesse.
3. Visitante lê "Como funciona" → objeção de complexidade removida → converte no CTA final.

**Requisitos de UX:**
- Layout responsivo: desktop (≥1280px), tablet (768–1279px) e mobile (<768px).
- Paleta conforme design: azul-marinho escuro (#0A1628 aproximado) como cor primária de fundo das seções de destaque; branco para texto; verde/turquesa como cor de ação e destaque.
- Tipografia sem serifa, hierarquia clara entre headlines, subtítulos e corpo.
- Acessibilidade mínima: contraste de texto ≥ 4.5:1 (WCAG AA), navegação por teclado funcional, textos alternativos em imagens.

---

## Restrições Técnicas de Alto Nível

- O CTA "Agendar reunião" deve integrar com uma ferramenta de agendamento ou formulário de captura — a solução técnica será definida na Tech Spec.
- O site deve ser hospedável em plataformas de deploy estático (Vercel, Netlify ou similar).
- Não há requisitos obrigatórios de CMS neste escopo; o conteúdo pode ser estático na primeira versão.
- A identidade visual (cores, tipografia, ícones) deve ser fielmente reproduzida a partir do design aprovado nas imagens de referência (`site/`).

---

## Fora de Escopo

- Páginas internas: Sobre, Carreiras, Fale conosco, Seja um parceiro, páginas de Soluções individuais.
- Área logada / portal do cliente ou do transportador.
- Blog ou seção de conteúdo.
- Integrações com CRM, analytics ou ferramentas de automação de marketing.
- SEO avançado (sitemap, schema markup, otimização de Core Web Vitals).
- App mobile (iOS/Android).
- Sistema de agendamento nativo — apenas o ponto de entrada (CTA) está no escopo.
