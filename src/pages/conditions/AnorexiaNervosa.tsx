import ConditionPage from './ConditionPage'
import { getConditionBySlug } from '../../data/conditions'
import { generateMeta } from '../../utils/meta'

const condition = getConditionBySlug('anorexia-nervosa-treatment')!

export const meta = generateMeta({
  title: condition.metaTitle,
  description: condition.metaDescription,
  path: `/conditions/${condition.slug}`,
})

export const handle = {
  breadcrumb: { label: 'Anorexia Nervosa Treatment', parent: '/conditions' },
}

export default function AnorexiaNervosa() {
  return <ConditionPage condition={condition} />
}
