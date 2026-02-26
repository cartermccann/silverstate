import ConditionPage from './ConditionPage'
import { getConditionBySlug } from '../../data/conditions'
import { generateMeta } from '../../utils/meta'

const condition = getConditionBySlug('bipolar-disorder-treatment')!

export const meta = generateMeta({
  title: condition.metaTitle,
  description: condition.metaDescription,
  path: `/conditions/${condition.slug}`,
})

export const handle = {
  breadcrumb: { label: 'Bipolar Disorder Treatment', parent: '/conditions' },
}

export default function BipolarDisorder() {
  return <ConditionPage condition={condition} />
}
