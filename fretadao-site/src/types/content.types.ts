import type { ElementType } from 'react'

export interface NavLink {
  label: string
  href: string
}

export interface SolutionCard {
  icon: ElementType
  title: string
  description: string
}

export interface ProcessStep {
  number: string
  title: string
  description: string
}

export interface ValuePillar {
  icon: ElementType
  title: string
  description: string
}

export interface FooterColumn {
  heading: string
  links: NavLink[]
}
