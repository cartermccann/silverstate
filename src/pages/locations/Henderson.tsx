import { getLocationBySlug } from '../../data/locations'
import { facilityData } from '../../data/about'
import { generateMeta } from '../../utils/meta'
import CityPage from './CityPage'

const location = getLocationBySlug('henderson')!
if (!location) throw new Error('Location data not found: henderson')

export const meta = generateMeta({
  title: location.metaTitle,
  description: location.metaDescription,
  path: `/locations/${location.slug}`,
  ogImage: facilityData.images[0]?.src,
  keywords: ['teen treatment Henderson NV', 'adolescent mental health Henderson', 'teen therapy Henderson Nevada', 'Henderson teen treatment center', 'Silver State Henderson'],
})

export const handle = {
  breadcrumb: { label: location.name, parent: '/locations' },
}

export default function Henderson() {
  return <CityPage location={location} />
}
