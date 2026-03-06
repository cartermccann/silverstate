import { getInsuranceBySlug } from '../../data/insurance'
import { generateMeta } from '../../utils/meta'
import InsurancePage from './InsurancePage'

const provider = getInsuranceBySlug('geha')!

export const meta = generateMeta({
  title: provider.name + ' Coverage for Teen Treatment',
  description: provider.metaDescription,
  path: `/insurance/${provider.slug}`,
  keywords: [
    'GEHA teen treatment coverage',
    'GEHA adolescent mental health',
    'GEHA residential treatment',
    'federal employee behavioral health',
    'GEHA insurance Silver State',
  ],
})

export const handle = {
  breadcrumb: { label: provider.name, parent: '/insurance' },
}

export default function GEHA() {
  return <InsurancePage provider={provider} />
}
