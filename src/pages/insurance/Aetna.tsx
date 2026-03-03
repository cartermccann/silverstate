import { getInsuranceBySlug } from '../../data/insurance'
import { generateMeta } from '../../utils/meta'
import InsurancePage from './InsurancePage'

const provider = getInsuranceBySlug('aetna')!

export const meta = generateMeta({
  title: provider.name + ' Coverage for Teen Treatment',
  description: provider.metaDescription,
  path: `/insurance/${provider.slug}`,
  keywords: [
    'Aetna teen treatment coverage',
    'Aetna adolescent mental health',
    'Aetna residential treatment',
    'Aetna behavioral health teens',
    'Aetna insurance Silver State',
  ],
})

export const handle = {
  breadcrumb: { label: provider.name, parent: '/insurance' },
}

export default function Aetna() {
  return <InsurancePage provider={provider} />
}
