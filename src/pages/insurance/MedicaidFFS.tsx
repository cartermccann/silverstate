import { getInsuranceBySlug } from '../../data/insurance'
import { generateMeta } from '../../utils/meta'
import InsurancePage from './InsurancePage'

const provider = getInsuranceBySlug('medicaid-ffs')!

export const meta = generateMeta({
  title: provider.name + ' Coverage for Teen Treatment',
  description: provider.metaDescription,
  path: `/insurance/${provider.slug}`,
  keywords: [
    'Medicaid Fee for Service teen treatment',
    'Medicaid FFS adolescent mental health',
    'Nevada Medicaid residential treatment',
    'Medicaid behavioral health teens',
    'Medicaid Silver State',
  ],
})

export const handle = {
  breadcrumb: { label: provider.name, parent: '/insurance' },
}

export default function MedicaidFFS() {
  return <InsurancePage provider={provider} />
}
