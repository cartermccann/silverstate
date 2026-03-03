import ComparisonPage from './ComparisonPage'
import { getComparisonBySlug } from '../../data/comparisons'
import { generateMeta } from '../../utils/meta'

const comparison = getComparisonBySlug('residential-vs-iop')!

export const meta = generateMeta({
  title: comparison.metaTitle,
  description: comparison.metaDescription,
  path: `/compare/${comparison.slug}`,
  keywords: comparison.seoKeywords,
})

export const handle = {
  breadcrumb: { label: 'Residential vs IOP', parent: '/compare' },
}

export default function ResidentialVsIop() {
  return <ComparisonPage comparison={comparison} />
}
