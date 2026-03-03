import { getInsuranceBySlug } from '../../data/insurance'
import { generateMeta } from '../../utils/meta'
import InsurancePage from './InsurancePage'

const provider = getInsuranceBySlug('hpn')!

export const meta = generateMeta({
  title: provider.name + ' Coverage for Teen Treatment',
  description: provider.metaDescription,
  path: `/insurance/${provider.slug}`,
  keywords: [
    'HPN teen treatment coverage',
    'Health Plan of Nevada adolescent',
    'HPN residential treatment',
    'HPN behavioral health teens',
    'Health Plan Nevada Silver State',
  ],
})

export const handle = {
  breadcrumb: { label: provider.name, parent: '/insurance' },
}

export default function HPN() {
  return <InsurancePage provider={provider} />
}
