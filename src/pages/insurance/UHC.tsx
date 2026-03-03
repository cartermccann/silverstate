import { getInsuranceBySlug } from '../../data/insurance'
import { generateMeta } from '../../utils/meta'
import InsurancePage from './InsurancePage'

const provider = getInsuranceBySlug('uhc')!

export const meta = generateMeta({
  title: provider.name + ' Coverage for Teen Treatment',
  description: provider.metaDescription,
  path: `/insurance/${provider.slug}`,
  keywords: [
    'UHC teen treatment coverage',
    'United Healthcare adolescent',
    'UHC residential treatment',
    'United Healthcare behavioral health',
    'UHC insurance Silver State',
  ],
})

export const handle = {
  breadcrumb: { label: provider.name, parent: '/insurance' },
}

export default function UHC() {
  return <InsurancePage provider={provider} />
}
