import { getLocationBySlug } from '../../data/locations'
import { facilityData } from '../../data/about'
import { generateMeta } from '../../utils/meta'
import CityPage from './CityPage'

const location = getLocationBySlug('clark-county')!
if (!location) throw new Error('Location data not found: clark-county')

export const meta = generateMeta({
  title: location.metaTitle,
  description: location.metaDescription,
  path: `/locations/${location.slug}`,
  ogImage: facilityData.images[0]?.src,
})

export const handle = {
  breadcrumb: { label: location.name, parent: '/locations' },
}

export default function ClarkCounty() {
  return <CityPage location={location} />
}
