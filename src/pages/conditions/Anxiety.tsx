import ConditionPage from './ConditionPage'
import { getConditionBySlug } from '../../data/conditions'
import { generateMeta } from '../../utils/meta'

const condition = getConditionBySlug('anxiety-treatment')!

export const meta = generateMeta({
  title: condition.metaTitle,
  description: condition.metaDescription,
  path: `/conditions/${condition.slug}`,
  keywords: condition.seoKeywords,
})

export const handle = {
  breadcrumb: { label: 'Anxiety Treatment', parent: '/conditions' },
}

export default function Anxiety() {
  return <ConditionPage condition={condition} />
}
