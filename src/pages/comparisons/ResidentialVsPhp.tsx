import ComparisonPage from './ComparisonPage'
import { getComparisonBySlug } from '../../data/comparisons'
import { generateMeta } from '../../utils/meta'

const comparison = getComparisonBySlug('residential-vs-php')!

export const meta = generateMeta({
  title: comparison.metaTitle,
  description: comparison.metaDescription,
  path: `/compare/${comparison.slug}`,
  keywords: comparison.seoKeywords,
})

export const handle = {
  breadcrumb: { label: 'Residential vs PHP', parent: '/compare' },
}

export default function ResidentialVsPhp() {
  return <ComparisonPage comparison={comparison} />
}
