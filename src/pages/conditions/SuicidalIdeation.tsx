import ConditionPage from './ConditionPage'
import { getConditionBySlug } from '../../data/conditions'
import { generateMeta } from '../../utils/meta'

const condition = getConditionBySlug('suicidal-ideation-treatment')!

export const meta = generateMeta({
  title: condition.metaTitle,
  description: condition.metaDescription,
  path: `/conditions/${condition.slug}`,
})

export const handle = {
  breadcrumb: { label: 'Suicidal Ideation Treatment', parent: '/conditions' },
}

export default function SuicidalIdeation() {
  return <ConditionPage condition={condition} />
}
