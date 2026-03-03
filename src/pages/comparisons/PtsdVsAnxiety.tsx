import ComparisonPage from './ComparisonPage'
import { getComparisonBySlug } from '../../data/comparisons'
import { generateMeta } from '../../utils/meta'

const comparison = getComparisonBySlug('ptsd-vs-anxiety')!

export const meta = generateMeta({
  title: comparison.metaTitle,
  description: comparison.metaDescription,
  path: `/compare/${comparison.slug}`,
  keywords: comparison.seoKeywords,
})

export const handle = {
  breadcrumb: { label: 'PTSD vs Anxiety', parent: '/compare' },
}

export default function PtsdVsAnxiety() {
  return <ComparisonPage comparison={comparison} />
}
