import type { NavLink, FooterColumn } from '@/types/content.types'

export const headerLinks: NavLink[] = [
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Para o RH', href: '#por-que-fretadao' },
  { label: 'Contato', href: '#contato' },
]

export const footerColumns: FooterColumn[] = [
  {
    heading: 'Soluções',
    links: [
      { label: 'Passageiro', href: '#solucoes' },
      { label: 'Gestão', href: '#solucoes' },
      { label: 'Transportador', href: '#solucoes' },
      { label: 'RH', href: '#solucoes' },
    ],
  },
  {
    heading: 'Empresa',
    links: [
      { label: 'Sobre', href: '#' },
      { label: 'Como funciona', href: '#como-funciona' },
      { label: 'Carreiras', href: '#' },
    ],
  },
  {
    heading: 'Contato',
    links: [
      { label: 'Agendar reunião', href: '#contato' },
      { label: 'Fale conosco', href: '#contato' },
      { label: 'Seja um parceiro', href: '#contato' },
    ],
  },
]
