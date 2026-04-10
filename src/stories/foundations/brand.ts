import type { LucideIcon } from 'lucide-react'
import {
  AppWindow,
  Building2,
  LayoutDashboard,
  MonitorSmartphone,
  ShoppingBag,
} from 'lucide-react'

export const vareoPrinciples = [
  'Dark-first com contraste alto e leitura confortável.',
  'Componentes previsíveis, compactos e consistentes entre contexts B2B e varejo.',
  'Uso moderado de cor para indicar hierarquia, feedback e estados.',
  'Documentação e API de componentes pensadas para designers e devs.',
] as const

export const vareoTemplates: Array<{ title: string; description: string; icon: LucideIcon }> = [
  {
    title: 'Dashboard SaaS',
    description: 'Métricas, produtividade e gestão operacional.',
    icon: LayoutDashboard,
  },
  {
    title: 'Landing page',
    description: 'Aquisição com discurso direto e CTA forte.',
    icon: AppWindow,
  },
  {
    title: 'Institucional',
    description: 'Posicionamento, confiança e prova social.',
    icon: Building2,
  },
  {
    title: 'Mobile-oriented',
    description: 'Fluxos densos com ergonomia e foco em ações primárias.',
    icon: MonitorSmartphone,
  },
  {
    title: 'Software de varejo',
    description: 'Operação diária, catálogo e atendimento no ponto de venda.',
    icon: ShoppingBag,
  },
]
