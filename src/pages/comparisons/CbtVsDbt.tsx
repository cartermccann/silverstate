import ComparisonPage from './ComparisonPage'
import { getComparisonBySlug } from '../../data/comparisons'
import { generateMeta } from '../../utils/meta'

const comparison = getComparisonBySlug('cbt-vs-dbt')!

export const meta = generateMeta({
  title: comparison.metaTitle,
  description: comparison.metaDescription,
  path: `/compare/${comparison.slug}`,
  keywords: comparison.seoKeywords,
})

export const handle = {
  breadcrumb: { label: 'CBT vs DBT', parent: '/compare' },
}

export default function CbtVsDbt() {
  return <ComparisonPage comparison={comparison} />
}
