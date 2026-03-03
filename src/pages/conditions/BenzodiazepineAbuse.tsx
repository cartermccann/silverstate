import ConditionPage from './ConditionPage'
import { getConditionBySlug } from '../../data/conditions'
import { generateMeta } from '../../utils/meta'

const condition = getConditionBySlug('benzodiazepine-abuse-treatment')!

export const meta = generateMeta({
  title: condition.metaTitle,
  description: condition.metaDescription,
  path: `/conditions/${condition.slug}`,
  keywords: condition.seoKeywords,
})

export const handle = {
  breadcrumb: { label: 'Benzodiazepine Abuse Treatment', parent: '/conditions' },
}

export default function BenzodiazepineAbuse() {
  return <ConditionPage condition={condition} />
}
