import ConditionPage from './ConditionPage'
import { getConditionBySlug } from '../../data/conditions'
import { generateMeta } from '../../utils/meta'

const condition = getConditionBySlug('school-refusal-treatment')!

export const meta = generateMeta({
  title: condition.metaTitle,
  description: condition.metaDescription,
  path: `/conditions/${condition.slug}`,
  keywords: condition.seoKeywords,
})

export const handle = {
  breadcrumb: { label: 'School Refusal Treatment', parent: '/conditions' },
}

export default function SchoolRefusal() {
  return <ConditionPage condition={condition} />
}
