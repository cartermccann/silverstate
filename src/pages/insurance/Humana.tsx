import { getInsuranceBySlug } from '../../data/insurance'
import { generateMeta } from '../../utils/meta'
import InsurancePage from './InsurancePage'

const provider = getInsuranceBySlug('humana')!

export const meta = generateMeta({
  title: provider.name + ' Coverage for Teen Treatment',
  description: provider.metaDescription,
  path: `/insurance/${provider.slug}`,
  keywords: [
    'Humana teen treatment coverage',
    'Humana adolescent mental health',
    'Humana residential treatment',
    'Humana behavioral health teens',
    'Humana insurance Silver State',
  ],
})

export const handle = {
  breadcrumb: { label: provider.name, parent: '/insurance' },
}

export default function Humana() {
  return <InsurancePage provider={provider} />
}
