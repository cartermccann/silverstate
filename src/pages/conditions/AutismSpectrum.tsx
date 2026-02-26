import ConditionPage from './ConditionPage'
import { getConditionBySlug } from '../../data/conditions'
import { generateMeta } from '../../utils/meta'

const condition = getConditionBySlug('autism-spectrum-treatment')!

export const meta = generateMeta({
  title: condition.metaTitle,
  description: condition.metaDescription,
  path: `/conditions/${condition.slug}`,
})

export const handle = {
  breadcrumb: { label: 'Autism Spectrum Treatment', parent: '/conditions' },
}

export default function AutismSpectrum() {
  return <ConditionPage condition={condition} />
}
