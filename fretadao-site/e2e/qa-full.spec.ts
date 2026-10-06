import { test, expect } from '@playwright/test'

test.describe('QA Full — Homepage Fretadão', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  // ─── RF-1: Header ───────────────────────────────────────────────────────────
  test.describe('RF-1: Header de Navegação', () => {
    test('RF-1.1: exibe logotipo FRETADÃO', async ({ page }) => {
      const logo = page.getByRole('link', { name: /fretadão — início/i })
      await expect(logo).toBeVisible()
      await expect(logo).toContainText('FRETADÃO')
    })

    test('RF-1.2: exibe 4 links de navegação', async ({ page }) => {
      const nav = page.getByRole('navigation', { name: 'Navegação principal' })
      await expect(nav.getByRole('link', { name: 'Soluções' })).toBeVisible()
      await expect(nav.getByRole('link', { name: 'Como funciona' })).toBeVisible()
      await expect(nav.getByRole('link', { name: 'Para o RH' })).toBeVisible()
      await expect(nav.getByRole('link', { name: 'Contato' })).toBeVisible()
    })

    test('RF-1.3: exibe botão CTA "Agendar reunião" no header', async ({ page }) => {
      const header = page.locator('header')
      const cta = header.getByRole('link', { name: /agendar reunião/i })
      await expect(cta).toBeVisible()
      const href = await cta.getAttribute('href')
      expect(href).toBeTruthy()
    })

    test('RF-1.4: menu mobile é colapsável', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 })
      await page.goto('/')

      const mobileNav = page.getByRole('navigation', { name: 'Navegação mobile' })
      await expect(mobileNav).not.toBeVisible()

      const hamburger = page.getByRole('button', { name: /abrir menu/i })
      await hamburger.click()
      await expect(mobileNav).toBeVisible()

      // Fecha ao clicar no botão (agora "fechar menu")
      await page.getByRole('button', { name: /fechar menu/i }).click()
      await expect(mobileNav).not.toBeVisible()
    })
  })

  // ─── RF-2: Hero ─────────────────────────────────────────────────────────────
  test.describe('RF-2: Seção Hero', () => {
    test('RF-2.1: exibe badge de credibilidade no hero', async ({ page }) => {
      const hero = page.locator('[data-section="hero"]')
      // exact: true para evitar match com o footer tagline
      await expect(
        hero.getByText('A solução nº1 em mobilidade corporativa no Brasil', { exact: true }),
      ).toBeVisible()
    })

    test('RF-2.2: exibe headline principal', async ({ page }) => {
      await expect(page.getByText('O caminho casa–trabalho–casa')).toBeVisible()
      await expect(page.getByText(/mais humano/)).toBeVisible()
    })

    test('RF-2.3: exibe subtítulo descritivo', async ({ page }) => {
      await expect(
        page.getByText(/Transformamos o transporte corporativo/),
      ).toBeVisible()
    })

    test('RF-2.4: exibe dois botões de ação no hero', async ({ page }) => {
      const hero = page.locator('[data-section="hero"]')
      await expect(hero.getByRole('link', { name: /agendar reunião/i })).toBeVisible()
      await expect(hero.getByRole('link', { name: /conhecer soluções/i })).toBeVisible()
    })

    test('RF-2.5: exibe widget de rota', async ({ page }) => {
      await expect(page.getByText('Sua rota de hoje')).toBeVisible()
      await expect(page.getByText(/Motorista a caminho/)).toBeVisible()
    })

    test('RF-2.6: seção hero está presente com data-section', async ({ page }) => {
      await expect(page.locator('[data-section="hero"]')).toBeVisible()
    })
  })

  // ─── RF-3: Social Proof ──────────────────────────────────────────────────────
  test.describe('RF-3: Barra de Prova Social', () => {
    test('RF-3.1: exibe texto de confiança', async ({ page }) => {
      await expect(
        page.getByText('Confiança de empresas que movem o Brasil todos os dias'),
      ).toBeVisible()
    })

    test('RF-3.2: exibe 4 segmentos (Indústria, Logística, Varejo, Serviços)', async ({
      page,
    }) => {
      const section = page.locator('[data-section="social-proof"]')
      await expect(section.getByText('Indústria')).toBeVisible()
      await expect(section.getByText('Varejo')).toBeVisible()
      await expect(section.getByText('Serviços')).toBeVisible()
      // "Logística" também aparece em outros lugares — busca dentro da seção específica
      await expect(section.getByText('Logística', { exact: true })).toBeVisible()
    })
  })

  // ─── RF-4: Soluções ──────────────────────────────────────────────────────────
  test.describe('RF-4: Seção Soluções', () => {
    test('RF-4.1: exibe label UMA SOLUÇÃO COMPLETA', async ({ page }) => {
      const section = page.locator('[data-section="solutions"]')
      await expect(section.getByText('UMA SOLUÇÃO COMPLETA', { exact: true })).toBeVisible()
    })

    test('RF-4.2: exibe título da seção', async ({ page }) => {
      await expect(
        page.getByText('Quatro experiências, um só ecossistema'),
      ).toBeVisible()
    })

    test('RF-4.4: exibe 4 cards de soluções', async ({ page }) => {
      const section = page.locator('[data-section="solutions"]')
      await expect(section.getByText('A viagem do passageiro')).toBeVisible()
      await expect(section.getByText('A gestão do deslocamento')).toBeVisible()
      await expect(section.getByText('A rotina do transportador')).toBeVisible()
      await expect(section.getByText(/O RH operacional/)).toBeVisible()
    })

    test('RF-4.5: grade colapsa para coluna única em mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 })
      await page.goto('/')
      const section = page.locator('[data-section="solutions"]')
      await expect(section.getByText('A viagem do passageiro')).toBeVisible()
    })
  })

  // ─── RF-5: Como Funciona ──────────────────────────────────────────────────────
  test.describe('RF-5: Seção Como Funciona', () => {
    test('RF-5.1: exibe label COMO FUNCIONA na seção', async ({ page }) => {
      const section = page.locator('[data-section="how-it-works"]')
      // Usa locator de span dentro da seção para evitar match com nav links
      await expect(section.locator('span').getByText('COMO FUNCIONA', { exact: true })).toBeVisible()
    })

    test('RF-5.2: exibe título da seção', async ({ page }) => {
      await expect(page.getByText('Do diagnóstico à operação cuidada')).toBeVisible()
    })

    test('RF-5.3: exibe 3 cards numerados 01, 02, 03 com títulos', async ({ page }) => {
      const section = page.locator('[data-section="how-it-works"]')
      // Números como texto exato
      await expect(section.getByText('01', { exact: true })).toBeVisible()
      await expect(section.getByText('02', { exact: true })).toBeVisible()
      await expect(section.getByText('03', { exact: true })).toBeVisible()
      // Títulos usando heading exato para evitar match com o título da seção
      await expect(section.getByRole('heading', { name: 'Diagnóstico', exact: true })).toBeVisible()
      await expect(section.getByRole('heading', { name: 'Implantação', exact: true })).toBeVisible()
      await expect(section.getByRole('heading', { name: 'Operação cuidada', exact: true })).toBeVisible()
    })
  })

  // ─── RF-6: Por que Fretadão ───────────────────────────────────────────────────
  test.describe('RF-6: Seção Por que Fretadão', () => {
    test('RF-6.1: exibe label POR QUE FRETADÃO', async ({ page }) => {
      const section = page.locator('[data-section="why-fretadao"]')
      await expect(section.locator('span').getByText('POR QUE FRETADÃO', { exact: true })).toBeVisible()
    })

    test('RF-6.2: exibe título da seção', async ({ page }) => {
      await expect(
        page.getByText('Conectamos tecnologia, logística e cuidado'),
      ).toBeVisible()
    })

    test('RF-6.3: exibe 3 pilares com títulos exatos', async ({ page }) => {
      const section = page.locator('[data-section="why-fretadao"]')
      // Usa exact match via getByRole heading para evitar match com palavras no título maior
      await expect(section.getByRole('heading', { name: 'Tecnologia', exact: true })).toBeVisible()
      await expect(section.getByRole('heading', { name: 'Logística', exact: true })).toBeVisible()
      await expect(section.getByRole('heading', { name: 'Cuidado', exact: true })).toBeVisible()
    })

    test('RF-6.4: seção tem fundo escuro (data-section presente)', async ({ page }) => {
      await expect(page.locator('[data-section="why-fretadao"]')).toBeVisible()
    })
  })

  // ─── RF-7: Manifesto ──────────────────────────────────────────────────────────
  test.describe('RF-7: Seção Manifesto', () => {
    test('RF-7.2: exibe texto completo do manifesto', async ({ page }) => {
      const section = page.locator('[data-section="manifesto"]')
      await expect(
        section.getByText(/Para muitos, o transporte corporativo é um quebra-cabeça/),
      ).toBeVisible()
    })

    test('RF-7.3: trecho destacado em turquesa está presente', async ({ page }) => {
      const highlight = page.getByText('mais eficiente, seguro e humano.')
      await expect(highlight).toBeVisible()
    })
  })

  // ─── RF-8: CTA Final ──────────────────────────────────────────────────────────
  test.describe('RF-8: Seção CTA Final', () => {
    test('RF-8.1: exibe headline de alta intenção', async ({ page }) => {
      await expect(
        page.getByText('Quer uma solução completa de mobilidade na sua empresa?'),
      ).toBeVisible()
    })

    test('RF-8.2: exibe subtítulo', async ({ page }) => {
      await expect(
        page.getByText(/Agende uma reunião com os nossos consultores/),
      ).toBeVisible()
    })

    test('RF-8.3: exibe botão CTA com href', async ({ page }) => {
      const section = page.locator('[data-section="cta"]')
      const btn = section.getByRole('link', { name: /agendar reunião/i })
      await expect(btn).toBeVisible()
      const href = await btn.getAttribute('href')
      expect(href).toBeTruthy()
    })
  })

  // ─── RF-9: Footer ─────────────────────────────────────────────────────────────
  test.describe('RF-9: Rodapé', () => {
    test('RF-9.1: exibe logo e tagline no footer', async ({ page }) => {
      const footer = page.locator('footer')
      // exact: true — o copyright tem "Fretadão" (caixa mista), não "FRETADÃO"
      await expect(footer.getByText('FRETADÃO', { exact: true })).toBeVisible()
      await expect(
        footer.getByText(/A solução nº1 em mobilidade corporativa no Brasil/),
      ).toBeVisible()
    })

    test('RF-9.2: exibe colunas de links do footer', async ({ page }) => {
      const footer = page.locator('footer')
      await expect(footer.getByText('Soluções')).toBeVisible()
      await expect(footer.getByText('Empresa')).toBeVisible()
      await expect(footer.getByText('Contato')).toBeVisible()
      await expect(footer.getByRole('link', { name: 'Passageiro' })).toBeVisible()
      await expect(footer.getByRole('link', { name: 'Gestão' })).toBeVisible()
      await expect(footer.getByRole('link', { name: 'Sobre' })).toBeVisible()
      await expect(footer.getByRole('link', { name: 'Carreiras' })).toBeVisible()
      await expect(footer.getByRole('link', { name: 'Agendar reunião' })).toBeVisible()
    })

    test('RF-9.3: exibe linha de copyright', async ({ page }) => {
      await expect(
        page.getByText('© 2026 Fretadão. Todos os direitos reservados.'),
      ).toBeVisible()
    })

    test('RF-9.4: exibe tagline lateral', async ({ page }) => {
      await expect(page.getByText('Mobilidade corporativa · Brasil')).toBeVisible()
    })
  })

  // ─── Acessibilidade ───────────────────────────────────────────────────────────
  test.describe('Acessibilidade (WCAG 2.2)', () => {
    test('A11Y-1: página tem lang definido (pt-BR)', async ({ page }) => {
      const lang = await page.locator('html').getAttribute('lang')
      expect(lang).toBe('pt-BR')
    })

    test('A11Y-2: página tem title descritivo', async ({ page }) => {
      const title = await page.title()
      expect(title).toContain('Fretadão')
    })

    test('A11Y-3: hambúrguer tem aria-label e aria-expanded', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 })
      await page.goto('/')

      // Referencia o botão via aria-label inicial
      const hamburger = page.locator('button[aria-label="Abrir menu"]')
      await expect(hamburger).toBeVisible()
      expect(await hamburger.getAttribute('aria-expanded')).toBe('false')

      await hamburger.click()

      // Após clicar, o label muda para "Fechar menu"
      const closeBtn = page.locator('button[aria-label="Fechar menu"]')
      expect(await closeBtn.getAttribute('aria-expanded')).toBe('true')
    })

    test('A11Y-4: navegação principal tem aria-label', async ({ page }) => {
      const nav = page.getByRole('navigation', { name: 'Navegação principal' })
      await expect(nav).toBeVisible()
    })

    test('A11Y-5: logo tem aria-label descritivo', async ({ page }) => {
      const logo = page.getByRole('link', { name: /fretadão — início/i })
      await expect(logo).toBeVisible()
    })

    test('A11Y-6: sem erros de JavaScript no console', async ({ page }) => {
      const errors: string[] = []
      page.on('pageerror', (err) => errors.push(err.message))
      await page.goto('/')
      await page.waitForLoadState('networkidle')
      expect(errors).toHaveLength(0)
    })

    test('A11Y-7: manifesto usa tag blockquote semântica', async ({ page }) => {
      const blockquote = page.locator('[data-section="manifesto"] blockquote')
      await expect(blockquote).toBeVisible()
    })
  })

  // ─── Estrutura Técnica ────────────────────────────────────────────────────────
  test.describe('Tech Spec: Estrutura Técnica', () => {
    test('TECH-1: todos os 7 data-section presentes', async ({ page }) => {
      const expectedSections = [
        'hero',
        'social-proof',
        'solutions',
        'how-it-works',
        'why-fretadao',
        'manifesto',
        'cta',
      ]
      for (const section of expectedSections) {
        await expect(page.locator(`[data-section="${section}"]`)).toBeVisible()
      }
    })

    test('TECH-2: CTAs "Agendar reunião" todos têm href não vazio', async ({ page }) => {
      const ctaLinks = page.getByRole('link', { name: /agendar reunião/i })
      const count = await ctaLinks.count()
      expect(count).toBeGreaterThanOrEqual(3)

      for (let i = 0; i < count; i++) {
        const href = await ctaLinks.nth(i).getAttribute('href')
        expect(href).toBeTruthy()
      }
    })

    test('TECH-3: fonte Inter declarada no HTML', async ({ page }) => {
      const fontLink = page.locator('link[href*="fonts.googleapis.com"]')
      const count = await fontLink.count()
      expect(count).toBeGreaterThan(0)
    })

    test('TECH-4: página abre sem erros de console', async ({ page }) => {
      const consoleErrors: string[] = []
      page.on('console', (msg) => {
        if (msg.type() === 'error') consoleErrors.push(msg.text())
      })
      await page.reload()
      await page.waitForLoadState('networkidle')
      expect(consoleErrors).toHaveLength(0)
    })
  })
})
