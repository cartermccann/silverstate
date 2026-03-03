import { getInsuranceBySlug } from '../../data/insurance'
import { generateMeta } from '../../utils/meta'
import InsurancePage from './InsurancePage'

const provider = getInsuranceBySlug('medicaid')!

export const meta = generateMeta({
  title: provider.name + ' Coverage for Teen Treatment',
  description: provider.metaDescription,
  path: `/insurance/${provider.slug}`,
  keywords: [
    'Medicaid teen treatment coverage',
    'Medicaid adolescent mental health',
    'Medicaid residential treatment Nevada',
    'Medicaid behavioral health teens',
    'Nevada Medicaid Silver State',
  ],
})

export const handle = {
  breadcrumb: { label: provider.name, parent: '/insurance' },
}

export default function Medicaid() {
  return <InsurancePage provider={provider} />
}
