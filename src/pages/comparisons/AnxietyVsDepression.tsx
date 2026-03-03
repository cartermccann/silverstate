import ComparisonPage from './ComparisonPage'
import { getComparisonBySlug } from '../../data/comparisons'
import { generateMeta } from '../../utils/meta'

const comparison = getComparisonBySlug('anxiety-vs-depression')!

export const meta = generateMeta({
  title: comparison.metaTitle,
  description: comparison.metaDescription,
  path: `/compare/${comparison.slug}`,
  keywords: comparison.seoKeywords,
})

export const handle = {
  breadcrumb: { label: 'Anxiety vs Depression', parent: '/compare' },
}

export default function AnxietyVsDepression() {
  return <ComparisonPage comparison={comparison} />
}
