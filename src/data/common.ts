import type { SiteInfo, NavLinkItem, FooterLinkGroup, AccreditationEntry } from '../types'

export const site: SiteInfo = {
  name: 'Silver State Adolescent Treatment Center',
  tagline: 'Empowering Teens to Blossom',
  phone: '(725) 525-9897',
  phoneTel: 'tel:7255259897',
  email: 'info@silverstateatc.com',
  address: '8225 W Robindale Rd, Las Vegas, NV 89113',
  ages: '11-17',
  rating: 4.8,
  reviewCount: 34,
}

export const navLinks: NavLinkItem[] = [
  { label: 'Programs', href: '/programs/residential-treatment' },
  { label: 'Conditions', href: '/conditions/anxiety-treatment' },
  { label: 'Insurance', href: '/insurance' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'About', href: '/about/our-team' },
]

export const footerLinks: FooterLinkGroup[] = [
  {
    heading: 'Programs',
    links: [
      { label: 'Residential Treatment', href: '/programs/residential-treatment' },
      { label: 'Partial Hospitalization', href: '/programs/php' },
      { label: 'Intensive Outpatient', href: '/programs/iop' },
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
    ],
  },
]

export const accreditations: AccreditationEntry[] = [
  { name: 'Joint Commission', logo: '/assets/joint-commission.webp' },
  { name: 'LegitScript', logo: null },
  { name: 'HIPAA Compliant', logo: null },
  { name: 'NAATP', logo: null },
]
