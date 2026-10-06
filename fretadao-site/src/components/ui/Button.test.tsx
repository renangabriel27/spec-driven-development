import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('should render as anchor element when href prop is provided', () => {
    render(
      <Button variant="primary" href="https://example.com">
        Agendar reunião
      </Button>,
    )
    const element = screen.getByRole('link', { name: /agendar reunião/i })
    expect(element.tagName).toBe('A')
    expect(element).toHaveAttribute('href', 'https://example.com')
  })

  it('should render as button element when href prop is omitted', () => {
    render(<Button variant="primary">Agendar reunião</Button>)
    const element = screen.getByRole('button', { name: /agendar reunião/i })
    expect(element.tagName).toBe('BUTTON')
  })

  it('should apply primary variant classes when variant is primary', () => {
    render(
      <Button variant="primary" href="#">
        Agendar reunião
      </Button>,
    )
    const element = screen.getByRole('link', { name: /agendar reunião/i })
    expect(element.className).toContain('bg-brand-teal')
  })
})
