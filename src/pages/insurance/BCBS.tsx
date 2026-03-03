import { getInsuranceBySlug } from '../../data/insurance'
import { generateMeta } from '../../utils/meta'
import InsurancePage from './InsurancePage'

const provider = getInsuranceBySlug('bcbs')!

export const meta = generateMeta({
  title: provider.name + ' Coverage for Teen Treatment',
  description: provider.metaDescription,
  path: `/insurance/${provider.slug}`,
  keywords: [
    'BCBS teen treatment coverage',
    'Blue Cross Blue Shield adolescent',
    'BCBS residential treatment',
    'BCBS behavioral health teens',
    'Blue Cross Silver State',
  ],
})

export const handle = {
  breadcrumb: { label: provider.name, parent: '/insurance' },
}

export default function BCBS() {
  return <InsurancePage provider={provider} />
}
