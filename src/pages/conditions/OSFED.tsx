import ConditionPage from './ConditionPage'
import { getConditionBySlug } from '../../data/conditions'
import { generateMeta } from '../../utils/meta'

const condition = getConditionBySlug('osfed-treatment')!

export const meta = generateMeta({
  title: condition.metaTitle,
  description: condition.metaDescription,
  path: `/conditions/${condition.slug}`,
})

export const handle = {
  breadcrumb: { label: 'OSFED Treatment', parent: '/conditions' },
}

export default function OSFED() {
  return <ConditionPage condition={condition} />
}
