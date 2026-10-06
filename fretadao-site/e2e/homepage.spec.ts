import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should display hero headline when page loads', async ({ page }) => {
    const headline = page.getByText('O caminho casa–trabalho–casa')
    await expect(headline).toBeVisible()
  })

  test('should have non-empty href on all CTA buttons', async ({ page }) => {
    const ctaLinks = page.getByRole('link', { name: /agendar reunião/i })
    const count = await ctaLinks.count()
    expect(count).toBeGreaterThan(0)

    for (let i = 0; i < count; i++) {
      const href = await ctaLinks.nth(i).getAttribute('href')
      expect(href).toBeTruthy()
      expect(href).not.toBe('')
    }
  })

  test('should render all page sections', async ({ page }) => {
    const sections = page.locator('[data-section]')
    await expect(sections).toHaveCount(7)
  })

  test('should toggle mobile menu when hamburger is clicked', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto('/')

    const navLinks = page.getByRole('navigation', { name: 'Navegação mobile' })
    await expect(navLinks).not.toBeVisible()

    const hamburger = page.getByRole('button', { name: /abrir menu/i })
    await hamburger.click()

    await expect(navLinks).toBeVisible()

    const solucoesLink = navLinks.getByRole('link', { name: 'Soluções' })
    await expect(solucoesLink).toBeVisible()
  })

  test('should render footer navigation links', async ({ page }) => {
    const footer = page.locator('footer')
    await expect(footer.getByRole('link', { name: 'Passageiro' })).toBeVisible()
    await expect(footer.getByRole('link', { name: 'Gestão' })).toBeVisible()
    await expect(footer.getByRole('link', { name: 'Sobre' })).toBeVisible()
    await expect(footer.getByRole('link', { name: 'Carreiras' })).toBeVisible()
  })
})
