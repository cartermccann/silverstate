import type { ProgramData, ProgramPageData } from '../types'

export const programs: { residential: ProgramData; php: ProgramData; iop: ProgramData } = {
  residential: {
    label: 'Residential Treatment',
    title: 'Around-the-clock care in a place that feels safe',
    body: 'Our residential program provides 24/7 therapeutic support in a structured, safe environment. Teens receive individualized treatment combining evidence-based therapies, academic continuity through Silver State Youth Academy, and comprehensive family programming designed for lasting change.',
    features: [
      'Individual and group therapy daily',
      'On-site accredited academics (Silver State Youth Academy)',
      'Family therapy and parent education workshops',
      'Experiential, recreational, and adventure therapy',
      'Music, art, and meditation therapy',
      'Trauma-informed care throughout',
      'Transition and discharge planning from day one',
    ],
    stat: '4:1 staff-to-client ratio',
  },
  php: {
    label: 'Partial Hospitalization (PHP)',
    title: 'Structured days, home evenings',
    body: 'Full clinical intensity during the day with the flexibility to return home each evening. PHP provides a bridge between residential care and independent living, helping teens practice new skills in real-world settings with their families.',
    features: [
      'Full-day therapeutic programming',
      'Real-world skill practice each evening',
      'Continued family integration and therapy',
      'CBT, DBT, and trauma-informed approaches',
    ],
  },
  iop: {
    label: 'Intensive Outpatient (IOP)',
    title: 'Focused support, flexible schedule',
    body: 'Targeted therapeutic sessions several times per week. Ideal for teens stepping down from higher levels of care or needing focused support while maintaining school, friendships, and daily routines.',
    features: [
      'Multiple sessions per week',
      'Maintain school enrollment',
      'Step-down transition support',
      'Individual and group modalities',
    ],
  },
}

// Full program page data — populated in Story 3.1
export const programPages: ProgramPageData[] = []
