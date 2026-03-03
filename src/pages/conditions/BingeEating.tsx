import ConditionPage from './ConditionPage'
import { getConditionBySlug } from '../../data/conditions'
import { generateMeta } from '../../utils/meta'

const condition = getConditionBySlug('binge-eating-disorder-treatment')!

export const meta = generateMeta({
  title: condition.metaTitle,
  description: condition.metaDescription,
  path: `/conditions/${condition.slug}`,
  keywords: condition.seoKeywords,
})

export const handle = {
  breadcrumb: { label: 'Binge Eating Disorder Treatment', parent: '/conditions' },
}

export default function BingeEating() {
  return <ConditionPage condition={condition} />
}
