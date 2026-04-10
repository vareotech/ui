import type { Meta, StoryObj } from '@storybook/react'

import { ConfirmationTemplate } from '@/templates/confirmation-template'
import { DashboardTemplate } from '@/templates/dashboard-template'
import { DetailTemplate } from '@/templates/detail-template'
import { ErrorTemplate } from '@/templates/error-template'
import { InstitutionalTemplate } from '@/templates/institutional-template'
import { LandingPageTemplate } from '@/templates/landing-page-template'
import { ListingWithFiltersTemplate } from '@/templates/listing-with-filters-template'
import { LoginTemplate } from '@/templates/login-template'
import { MobileTemplate } from '@/templates/mobile-template'
import { ProcessTemplate } from '@/templates/process-template'
import { RegistrationFormTemplate } from '@/templates/registration-form-template'
import { RetailTemplate } from '@/templates/retail-template'
import { ServiceCenterTemplate } from '@/templates/service-center-template'
import { SuccessTemplate } from '@/templates/success-template'

const meta = {
  title: 'Templates/Showcase',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Padrões de página para login, dashboard, listagem, cadastro, detalhe, processo e estados de confirmação. Todos usam apenas componentes do Vareo DS.',
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Dashboard: Story = { render: () => <DashboardTemplate /> }
export const Landing: Story = { render: () => <LandingPageTemplate /> }
export const Institutional: Story = { render: () => <InstitutionalTemplate /> }
export const Mobile: Story = { render: () => <MobileTemplate /> }
export const Retail: Story = { render: () => <RetailTemplate /> }
export const Login: Story = { render: () => <LoginTemplate /> }
export const ListingWithFilters: Story = { render: () => <ListingWithFiltersTemplate /> }
export const RegistrationForm: Story = { render: () => <RegistrationFormTemplate /> }
export const Detail: Story = { render: () => <DetailTemplate /> }
export const Process: Story = { render: () => <ProcessTemplate /> }
export const Confirmation: Story = { render: () => <ConfirmationTemplate /> }
export const ErrorState: Story = { render: () => <ErrorTemplate /> }
export const SuccessState: Story = { render: () => <SuccessTemplate /> }
export const ServiceCenter: Story = { render: () => <ServiceCenterTemplate /> }
