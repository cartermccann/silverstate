import { getInsuranceBySlug } from '../../data/insurance'
import { generateMeta } from '../../utils/meta'
import InsurancePage from './InsurancePage'

const provider = getInsuranceBySlug('tricare')!

export const meta = generateMeta({
  title: provider.name + ' Coverage for Teen Treatment',
  description: provider.metaDescription,
  path: `/insurance/${provider.slug}`,
  keywords: [
    'TRICARE teen treatment coverage',
    'TRICARE adolescent mental health',
    'TRICARE residential treatment',
    'military teen mental health',
    'TRICARE Silver State',
  ],
})

export const handle = {
  breadcrumb: { label: provider.name, parent: '/insurance' },
}

export default function TRICARE() {
  return <InsurancePage provider={provider} />
}
