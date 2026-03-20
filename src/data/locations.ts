import type { LocationData } from '../types'

export const locations: LocationData[] = [
  {
    name: 'Las Vegas',
    slug: 'las-vegas',
    image: { src: '/assets/facility/exterior-sign.webp', alt: 'Silver State Treatment Center building in Las Vegas' },
    description:
      'Silver State Adolescent Treatment Center is located in Las Vegas, Nevada, providing residential treatment and therapy programs for teens ages 11-17 struggling with mental health, substance abuse, and eating disorders.',
    distanceFromFacility: 'Silver State is located in Las Vegas, NV',
    directions:
      'Silver State is located at 8225 W Robindale Rd in southwestern Las Vegas, near the I-215 Beltway and S Rainbow Blvd. Easily accessible from anywhere in the Las Vegas metro area.',
    localContext:
      'Las Vegas is the largest city in Nevada and the seat of Clark County. Families searching for a teen mental health residential treatment center near me, adolescent therapy, or youth mental health treatment for youth find Silver State conveniently located in their own city. We serve families from every neighborhood in Las Vegas — from Summerlin to Henderson, Spring Valley to the Arts District.',
    serviceAreaDescription:
      'Silver State provides comprehensive adolescent treatment and mental health treatment for youth in Las Vegas, including 24/7 residential care and evidence-based therapy programs. If you are searching for teen mental health near me, our Las Vegas-based facility understands the unique challenges facing local teens and families.',
    relatedPrograms: ['residential'],
    relatedConditions: [
      'anxiety',
      'depression',
      'substance-abuse',
      'dual-diagnosis',
      'trauma-ptsd',
    ],
    metaTitle: 'Teen Mental Health Treatment Near Me in Las Vegas, NV | Silver State',
    metaDescription:
      'Looking for a residential treatment center near me? Silver State in Las Vegas offers teen mental health treatment and therapy programs for adolescents 11-17.',
  },
  {
    name: 'Henderson',
    slug: 'henderson',
    image: { src: '/assets/facility/exterior-building.webp', alt: 'Silver State Treatment Center exterior near Henderson' },
    description:
      'Silver State Adolescent Treatment Center serves families in Henderson, Nevada — just 20-25 minutes from our Las Vegas facility. Residential treatment and therapy programs for teens ages 11-17.',
    distanceFromFacility: 'Approximately 20-25 minutes from Silver State',
    directions:
      'From Henderson, take I-215 West or US-95 North toward Las Vegas. Silver State is located at 8225 W Robindale Rd in southwestern Las Vegas, near the I-215 and S Rainbow Blvd interchange.',
    localContext:
      'Henderson is the second-largest city in Nevada and one of the most family-oriented communities in the Las Vegas metro area. With a growing population of families with teens, Henderson parents searching for teen mental health near me or a residential treatment center near me find Silver State just a short drive away.',
    serviceAreaDescription:
      "Families in Henderson have convenient access to Silver State's full continuum of adolescent care. Whether your teen needs residential treatment or comprehensive therapy programs and aftercare support, our facility is a short drive from Henderson via I-215.",
    relatedPrograms: ['residential'],
    relatedConditions: ['anxiety', 'depression', 'substance-abuse'],
    metaTitle: 'Teen Treatment Near Henderson, NV | Silver State Adolescent Treatment',
    metaDescription:
      'Silver State serves Henderson, NV families with adolescent residential treatment and therapy. Located just 20-25 minutes away in Las Vegas. Call (725) 239-7557.',
  },
  {
    name: 'North Las Vegas',
    slug: 'north-las-vegas',
    image: { src: '/assets/facility/exterior-street.webp', alt: 'Silver State Treatment Center street sign near North Las Vegas' },
    description:
      'Silver State Adolescent Treatment Center serves families in North Las Vegas, Nevada — approximately 25-30 minutes from our facility. Residential treatment and therapy programs for teens 11-17.',
    distanceFromFacility: 'Approximately 25-30 minutes from Silver State',
    directions:
      'From North Las Vegas, take US-95 South toward Las Vegas. Silver State is located at 8225 W Robindale Rd in southwestern Las Vegas, accessible via the I-215 Beltway.',
    localContext:
      "North Las Vegas is a growing community in the northern Las Vegas metro area. Families in North Las Vegas seeking accessible adolescent treatment benefit from Silver State's location within the metro area, making regular family visits and step-down program attendance practical.",
    serviceAreaDescription:
      'Silver State offers North Las Vegas families a full range of adolescent treatment options. Our residential program provides 24/7 care, with therapy programs and aftercare support to help teens transition back to their North Las Vegas community.',
    relatedPrograms: ['residential'],
    relatedConditions: ['anxiety', 'depression', 'substance-abuse', 'conduct-disorder'],
    metaTitle: 'Teen Treatment Near North Las Vegas, NV | Silver State Treatment',
    metaDescription:
      'Silver State serves North Las Vegas, NV families with teen residential treatment and therapy. Located approximately 25-30 minutes away. Call (725) 239-7557.',
  },
  {
    name: 'Summerlin',
    slug: 'summerlin',
    image: { src: '/assets/facility/lobby-reception.webp', alt: 'Silver State Treatment Center lobby near Summerlin' },
    description:
      'Silver State Adolescent Treatment Center serves families in Summerlin, Nevada — just 15-20 minutes from our Las Vegas facility. Comprehensive adolescent treatment for teens 11-17.',
    distanceFromFacility: 'Approximately 15-20 minutes from Silver State',
    directions:
      'From Summerlin, take the I-215 Beltway South/East toward S Rainbow Blvd. Silver State is located at 8225 W Robindale Rd in southwestern Las Vegas, close to the Summerlin community.',
    localContext:
      'Summerlin is a master-planned community in western Las Vegas known for its family-oriented environment, excellent schools, and high quality of life. Families in Summerlin seeking adolescent mental health treatment find Silver State to be one of the closest treatment facilities, with a short drive along the 215 Beltway.',
    serviceAreaDescription:
      "Silver State provides Summerlin families with convenient access to evidence-based adolescent treatment. Our proximity to Summerlin means families can stay closely involved in their teen's recovery through regular visits and family therapy sessions.",
    relatedPrograms: ['residential'],
    relatedConditions: ['anxiety', 'depression', 'eating-disorders', 'ocd'],
    metaTitle: 'Adolescent Treatment Near Summerlin, NV | Silver State Treatment',
    metaDescription:
      'Silver State serves Summerlin, NV families with adolescent residential treatment and therapy. Just 15-20 minutes away in Las Vegas. Call (725) 239-7557.',
  },
  {
    name: 'Clark County',
    slug: 'clark-county',
    image: { src: '/assets/facility/exterior-sign.webp', alt: 'Silver State Treatment Center serving Clark County' },
    description:
      'Silver State Adolescent Treatment Center serves families throughout Clark County, Nevada — including Las Vegas, Henderson, North Las Vegas, Boulder City, and all unincorporated communities.',
    distanceFromFacility: 'Silver State serves all of Clark County, NV',
    directions:
      'Silver State is centrally located within Clark County at 8225 W Robindale Rd, Las Vegas, NV 89113. The facility is easily accessible from anywhere in the county via I-15, US-95, or the I-215 Beltway.',
    localContext:
      'Clark County encompasses the entire Las Vegas metropolitan area, including all incorporated cities and unincorporated communities. From Mesquite to Laughlin, Boulder City to Indian Springs, Silver State serves families across the county searching for teen mental health near me, adolescent mental wellness support, and mental health treatment for youth.',
    serviceAreaDescription:
      'As a Clark County-based treatment facility, Silver State is positioned to serve families from every corner of the county. Our residential program provides a safe, structured environment for teens, with comprehensive therapy programs and aftercare support for families throughout the county.',
    relatedPrograms: ['residential'],
    relatedConditions: [
      'anxiety',
      'depression',
      'substance-abuse',
      'dual-diagnosis',
      'trauma-ptsd',
    ],
    metaTitle: 'Teen Treatment in Clark County, NV | Silver State Treatment Center',
    metaDescription:
      'Silver State serves all of Clark County, NV with adolescent residential treatment and therapy for teens 11-17. Located in Las Vegas. Call (725) 239-7557.',
  },
]

export const locationsBySlug: Record<string, LocationData> = Object.fromEntries(
  locations.map((loc) => [loc.slug, loc]),
)

export function getLocationBySlug(slug: string): LocationData | undefined {
  return locations.find((l) => l.slug === slug)
}

export const locationHubContent: {
  title: string
  description: string
  metaTitle: string
  metaDescription: string
} = {
  title: 'Areas We Serve',
  description:
    'Silver State Adolescent Treatment Center serves families throughout the Las Vegas metropolitan area and Clark County, Nevada. If you are looking for a residential treatment center near me or mental health treatment for youth, our facility in southwestern Las Vegas provides residential treatment and evidence-based therapy programs for adolescents ages 11-17.',
  metaTitle: 'Residential Treatment Center Near Me | Silver State Las Vegas',
  metaDescription:
    'Teen mental health near me in Las Vegas, Henderson, Summerlin & Clark County. Silver State offers residential treatment and therapy for youth ages 11-17.',
}
