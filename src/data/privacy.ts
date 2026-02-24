// IMPORTANT: This privacy policy content is a template based on healthcare best practices.
// It must be reviewed and approved by Silver State's legal counsel before production launch.
// Content can be updated by editing this file without changing the Privacy.tsx component.

import type { PrivacySection, NotFoundContent } from '../types'
import { site } from './common'

export const privacyLastUpdated = '2026-02-24'

export const privacySections: PrivacySection[] = [
  {
    id: 'introduction',
    heading: 'Introduction',
    content: [
      `${site.name}, LLC ("we," "us," or "our") is committed to protecting your privacy and the confidentiality of your personal information. This Privacy Policy explains how we collect, use, and safeguard information gathered through our website at www.silverstatetreatment.com.`,
      'This policy applies only to information collected through this website. It does not apply to information collected through other means, including in-person interactions, phone calls, or other offline communications.',
    ],
  },
  {
    id: 'information-we-collect',
    heading: 'Information We Collect',
    content: [
      'Information you provide voluntarily: When you submit a contact form, you may provide your name, email address, phone number, and a message describing your inquiry. Providing this information is entirely voluntary.',
      'Information collected automatically: When you visit our website, our servers may automatically collect certain technical information, including your IP address, browser type and version, device type, pages visited, time spent on pages, and referring URL.',
      'Cookies and similar technologies: We use cookies to store your cookie consent preferences and, with your explicit consent, to collect analytics data. See the "Cookies and Tracking Technologies" section below for more details.',
      'Important: This website does not collect Protected Health Information (PHI) through online forms. Insurance verification, clinical assessments, and all health-related inquiries are handled via phone or in person through HIPAA-compliant channels.',
    ],
  },
  {
    id: 'how-we-use-information',
    heading: 'How We Use Your Information',
    content: [
      'We use the information we collect for the following purposes:',
      'To respond to your inquiries and contact form submissions in a timely manner.',
      'To improve our website, content, and user experience based on how visitors interact with the site.',
      'To analyze website usage patterns using privacy-respecting analytics, only with your explicit consent.',
      'To comply with applicable legal obligations, including healthcare regulations.',
    ],
  },
  {
    id: 'hipaa-compliance',
    heading: 'HIPAA Compliance Statement',
    content: [
      `${site.name} is a HIPAA-covered entity. We take our obligations under the Health Insurance Portability and Accountability Act (HIPAA) seriously and are committed to safeguarding Protected Health Information (PHI) in accordance with the HIPAA Privacy Rule and Security Rule.`,
      'This website does not collect, store, or transmit Protected Health Information through online forms or any client-side mechanism. All clinical information, treatment records, and health-related data are handled exclusively through HIPAA-compliant channels, including secure phone communications and in-person interactions.',
      'We maintain Business Associate Agreements (BAAs) with all technology vendors and service providers that may process data on our behalf, ensuring that any data handling meets HIPAA standards.',
    ],
  },
  {
    id: '42-cfr-part-2',
    heading: '42 CFR Part 2 — Substance Use Disorder Records',
    content: [
      'Federal law under 42 CFR Part 2 provides additional protections for records related to substance use disorder (SUD) treatment. These protections are stricter than HIPAA and apply to any information that could identify an individual as having a substance use disorder.',
      'Any future collection of SUD-related information through this website will require explicit written consent from the individual (or their legal guardian for minors). SUD treatment records cannot be re-disclosed to third parties without the patient\'s written consent, even if such disclosure would otherwise be permitted under HIPAA.',
      'This section is included proactively to ensure compliance as our services and website capabilities evolve. Currently, all SUD-related communications occur through HIPAA-compliant, offline channels.',
    ],
  },
  {
    id: 'cookies-and-tracking',
    heading: 'Cookies and Tracking Technologies',
    content: [
      'Essential cookies: We use minimal essential cookies to store your cookie consent preference. No other essential cookies are used at this time.',
      'Analytics cookies: We use Google Analytics 4 (GA4) for website analytics. GA4 cookies are loaded only after you provide explicit opt-in consent through our cookie consent banner. No analytics data is collected without your consent.',
      'Google Consent Mode v2: Our analytics implementation uses Google Consent Mode v2, which ensures that no tracking or data collection occurs until you grant consent.',
      'We do not use marketing pixels, advertising trackers, or retargeting technologies on any page of this website.',
      'Your cookie consent preference is stored locally in your browser (using localStorage, not a cookie). You can change your consent preferences at any time by interacting with the cookie consent banner.',
    ],
  },
  {
    id: 'third-party-services',
    heading: 'Third-Party Services',
    content: [
      'We use the following third-party services to operate and improve our website:',
      'Google Analytics 4 — Website analytics and usage reporting, loaded only after user consent.',
      'Call Tracking Metrics (CTM) — Phone call attribution to understand how visitors find us.',
      'Vercel — Website hosting and deployment platform.',
      'Cloudflare — Content delivery network (CDN) for optimized image delivery.',
      'Google Fonts — Web typography. Google Fonts does not set cookies or track individual users.',
      'We do not share, sell, or otherwise disclose your personal information to third parties for advertising, marketing, or any purpose unrelated to the operation of this website and our treatment services.',
    ],
  },
  {
    id: 'data-security',
    heading: 'Data Security',
    content: [
      'We implement appropriate security measures to protect the information collected through this website:',
      'All data transmitted between your browser and our servers is encrypted using HTTPS/TLS encryption.',
      'No sensitive or personally identifiable information is stored on the client side (in your browser).',
      'Contact form submissions are transmitted securely to our staff and are not stored in publicly accessible databases.',
      'We regularly review our security practices and assess our technology vendors to maintain appropriate safeguards.',
    ],
  },
  {
    id: 'your-rights',
    heading: 'Your Rights',
    content: [
      'You have the following rights regarding your personal information:',
      'Right to know: You may request information about what personal data we have collected about you.',
      'Right to deletion: You may request that we delete any personal information we have collected from you through this website.',
      'Right to opt out: You may opt out of analytics tracking at any time by declining or revoking cookie consent through the cookie consent banner.',
      `Nevada privacy rights: Under Nevada Revised Statutes Chapter 603A, Nevada residents have the right to submit a verified request directing us not to sell their personal information. We do not sell personal information, but you may submit such a request by contacting us at ${site.email} or calling ${site.phone}.`,
      `To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below.`,
    ],
  },
  {
    id: 'childrens-privacy',
    heading: "Children's Privacy",
    content: [
      `${site.name} provides treatment for adolescents ages ${site.ages}. However, this website is directed at parents, guardians, and referring professionals — not at minors.`,
      'We do not knowingly collect personal information from children under 13 through this website. If we become aware that a child under 13 has submitted personal information through our contact form, we will promptly delete that information.',
      'In compliance with the Children\'s Online Privacy Protection Act (COPPA), parents or guardians may contact us to review, delete, or refuse further collection of their child\'s personal information.',
    ],
  },
  {
    id: 'changes-to-policy',
    heading: 'Changes to This Policy',
    content: [
      'We may update this Privacy Policy periodically to reflect changes in our practices, technology, or legal requirements. When we make changes, we will update the "Last Updated" date at the top of this page.',
      'We encourage you to review this page periodically. Your continued use of our website after changes are posted constitutes your acknowledgment of the updated policy.',
    ],
  },
  {
    id: 'contact-us',
    heading: 'Contact Us',
    content: [
      'If you have questions or concerns about this Privacy Policy, your personal information, or our privacy practices, please contact us:',
      `Phone: ${site.phone}`,
      `Email: ${site.email}`,
      `Address: ${site.address}`,
      'We will respond to your inquiry as promptly as possible, typically within 5 business days.',
    ],
  },
]

export const notFoundContent: NotFoundContent = {
  headline: "We couldn't find that page",
  message:
    "The page you're looking for may have been moved or is no longer available. We're here to help you find what you need.",
  suggestions: [
    { label: 'Home', href: '/' },
    { label: 'Residential Treatment', href: '/programs/residential-treatment' },
    { label: 'Conditions We Treat', href: '/conditions' },
    { label: 'Insurance & Coverage', href: '/insurance' },
    { label: 'Admissions Process', href: '/admissions' },
    { label: 'Contact Us', href: '/contact' },
  ],
}
