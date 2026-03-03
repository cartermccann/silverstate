import { getLocationBySlug } from '../../data/locations'
import { facilityData } from '../../data/about'
import { generateMeta } from '../../utils/meta'
import CityPage from './CityPage'

const location = getLocationBySlug('las-vegas')!
if (!location) throw new Error('Location data not found: las-vegas')

export const meta = generateMeta({
  title: location.metaTitle,
  description: location.metaDescription,
  path: `/locations/${location.slug}`,
  ogImage: facilityData.images[0]?.src,
  keywords: ['teen treatment Las Vegas', 'adolescent mental health Las Vegas', 'teen residential treatment Las Vegas NV', 'Las Vegas teen therapy', 'Silver State Las Vegas'],
})

export const handle = {
  breadcrumb: { label: location.name, parent: '/locations' },
}

export default function LasVegas() {
  return <CityPage location={location} />
}
