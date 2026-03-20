import type { SiteInfo, NavLinkItemWithDropdown, FooterLinkGroup, AccreditationEntry } from '../types'

export const CDN_URL = ''

export const site: SiteInfo = {
  name: 'Silver State Adolescent Treatment Center',
  tagline: 'Empowering Teens to Blossom',
  phone: '(725) 239-7557',
  phoneTel: 'tel:7252397557',
  email: '',
  address: '8225 W Robindale Rd, Las Vegas, NV 89113',
  ages: '11-17',
  rating: 4.8,
  reviewCount: 34,
}

export const navLinks: NavLinkItemWithDropdown[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Programs',
    href: '/programs',
    dropdown: [
      {
        heading: 'Treatment Levels',
        links: [
          { label: 'Residential Treatment', href: '/programs/residential-treatment' },
          { label: 'Crisis Prevention', href: '/programs/crisis-prevention-intervention' },
        ],
        viewAll: { label: 'View All Programs', href: '/programs' },
      },
      {
        heading: 'Therapy Highlights',
        links: [
          { label: 'CBT', href: '/programs/cbt' },
          { label: 'DBT', href: '/programs/dbt' },
          { label: 'EMDR', href: '/programs/emdr' },
          { label: 'Family Therapy', href: '/programs/family-therapy' },
          { label: 'Group Therapy', href: '/programs/group-therapy' },
          { label: 'Individual Therapy', href: '/programs/individual-therapy' },
        ],
        viewAll: { label: 'All Therapy Programs', href: '/programs/therapy-programs' },
      },
      {
        heading: 'Specialty & Compare',
        links: [
          { label: 'LGBTQIA+ Affirming Care', href: '/programs/lgbtqia-affirming-care' },
          { label: 'Holistic Treatment', href: '/programs/holistic-treatment' },
          { label: 'Trauma-Informed Care', href: '/programs/trauma-informed-care' },
          { label: 'CBT vs DBT', href: '/compare/cbt-vs-dbt' },
          { label: 'Treatment Comparisons', href: '/compare' },
        ],
        viewAll: { label: 'Our Approach', href: '/our-approach' },
      },
    ],
  },
  {
    label: 'Conditions',
    href: '/conditions',
    dropdown: [
      {
        heading: 'Mental Health',
        links: [
          { label: 'Anxiety', href: '/conditions/anxiety-treatment' },
          { label: 'Depression', href: '/conditions/depression-treatment' },
          { label: 'Trauma & PTSD', href: '/conditions/trauma-ptsd-treatment' },
          { label: 'OCD', href: '/conditions/ocd-treatment' },
          { label: 'Bipolar Disorder', href: '/conditions/bipolar-disorder-treatment' },
          { label: 'Suicidal Ideation', href: '/conditions/suicidal-ideation-treatment' },
        ],
      },
      {
        heading: 'Substance Abuse',
        links: [
          { label: 'Substance Abuse', href: '/conditions/substance-abuse-treatment' },
          { label: 'Alcohol Abuse', href: '/conditions/alcohol-abuse-treatment' },
          { label: 'Opioid Abuse', href: '/conditions/opioid-abuse-treatment' },
          { label: 'Cannabis Abuse', href: '/conditions/cannabis-abuse-treatment' },
          { label: 'Meth Abuse', href: '/conditions/meth-abuse-treatment' },
          { label: 'Cocaine Abuse', href: '/conditions/cocaine-abuse-treatment' },
          { label: 'MDMA & Ecstasy', href: '/conditions/mdma-treatment' },
        ],
      },
      {
        heading: 'Eating Disorders',
        links: [
          { label: 'Anorexia Nervosa', href: '/conditions/anorexia-nervosa-treatment' },
          { label: 'Bulimia Nervosa', href: '/conditions/bulimia-nervosa-treatment' },
          { label: 'Binge Eating Disorder', href: '/conditions/binge-eating-disorder-treatment' },
          { label: 'ARFID', href: '/conditions/arfid-treatment' },
          { label: 'Compulsive Eating', href: '/conditions/compulsive-eating-treatment' },
          { label: 'School Refusal', href: '/conditions/school-refusal-treatment' },
        ],
        viewAll: { label: 'All Conditions', href: '/conditions' },
      },
    ],
  },
  {
    label: 'Insurance',
    href: '/insurance',
    dropdown: [
      {
        heading: 'Major Carriers',
        links: [
          { label: 'Aetna', href: '/insurance/aetna' },
          { label: 'Cigna', href: '/insurance/cigna' },
          { label: 'Ambetter', href: '/insurance/ambetter' },
          { label: 'UHC', href: '/insurance/uhc' },
          { label: 'GEHA', href: '/insurance/geha' },
        ],
        viewAll: { label: 'All Insurance', href: '/insurance' },
      },
      {
        heading: 'Additional Plans',
        links: [
          { label: 'HPN', href: '/insurance/hpn' },
          { label: 'UMR', href: '/insurance/umr' },
          { label: 'Medicaid FFS', href: '/insurance/medicaid-ffs' },
        ],
        viewAll: { label: 'All Insurance', href: '/insurance' },
      },
      {
        heading: 'Get Started',
        links: [
          { label: 'Verify Your Coverage', href: '/insurance' },
          { label: 'Contact Admissions', href: '/admissions' },
          { label: 'Call (725) 239-7557', href: 'tel:7252397557' },
        ],
      },
    ],
  },
  { label: 'Admissions', href: '/admissions' },
  { label: 'About', href: '/about/our-team' },
  { label: 'Resources', href: '/resources' },
]

export const footerLinks: FooterLinkGroup[] = [
  {
    heading: 'Programs',
    links: [
      { label: 'Residential Treatment', href: '/programs/residential-treatment' },
      { label: 'Crisis Prevention', href: '/programs/crisis-prevention-intervention' },
      { label: 'Mental Health', href: '/conditions/anxiety-treatment' },
      { label: 'Substance Abuse', href: '/conditions/substance-abuse-treatment' },
      { label: 'Eating Disorders', href: '/conditions/anorexia-nervosa-treatment' },
    ],
  },
  {
    heading: 'Admissions',
    links: [
      { label: 'Verify Insurance', href: '/insurance' },
      { label: 'Admissions Process', href: '/admissions' },
      { label: 'FAQs', href: '/admissions#faqs' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    heading: 'About',
    links: [
      { label: 'Our Approach', href: '/about/our-team' },
      { label: 'Treatment Team', href: '/about/our-team' },
      { label: 'Facility Tour', href: '/about/facility' },
      { label: 'Accreditation', href: '/about/our-team#accreditation' },
      { label: 'Youth Academy', href: '/about/youth-academy' },
      { label: 'Resources', href: '/resources' },
    ],
  },
]

export const accreditations: AccreditationEntry[] = [
  { name: 'Joint Commission Gold Seal', logo: `${CDN_URL}/assets/joint-commission.webp` },
  { name: 'LegitScript Certified', logo: `${CDN_URL}/assets/badges/legitscript.png` },
]
