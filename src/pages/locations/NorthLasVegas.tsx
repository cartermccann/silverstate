import { getLocationBySlug } from '../../data/locations'
import { facilityData } from '../../data/about'
import { generateMeta } from '../../utils/meta'
import CityPage from './CityPage'

const location = getLocationBySlug('north-las-vegas')!
if (!location) throw new Error('Location data not found: north-las-vegas')

export const meta = generateMeta({
  title: location.metaTitle,
  description: location.metaDescription,
  path: `/locations/${location.slug}`,
  ogImage: facilityData.images[0]?.src,
  keywords: ['teen treatment North Las Vegas', 'adolescent mental health North Las Vegas', 'teen therapy North Las Vegas NV', 'North Las Vegas teen treatment', 'Silver State North Las Vegas'],
})

export const handle = {
  breadcrumb: { label: location.name, parent: '/locations' },
}

export default function NorthLasVegas() {
  return <CityPage location={location} />
}
