import { getInsuranceBySlug } from '../../data/insurance'
import { generateMeta } from '../../utils/meta'
import InsurancePage from './InsurancePage'

const provider = getInsuranceBySlug('cigna')!

export const meta = generateMeta({
  title: provider.name + ' Coverage for Teen Treatment',
  description: provider.metaDescription,
  path: `/insurance/${provider.slug}`,
  keywords: [
    'Cigna teen treatment coverage',
    'Cigna adolescent mental health',
    'Cigna residential treatment',
    'Cigna behavioral health teens',
    'Cigna insurance Silver State',
  ],
})

export const handle = {
  breadcrumb: { label: provider.name, parent: '/insurance' },
}

export default function Cigna() {
  return <InsurancePage provider={provider} />
}
