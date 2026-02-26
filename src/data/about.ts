import type {
  TeamMember,
  AboutPageData,
  KeyDifferentiator,
  YouthAcademyFeature,
  LeadershipEntry,
} from '../types'

// Supports both browser runtime (import.meta.env) and Node build scripts (globalThis.process.env).
const baseUrl =
  (import.meta as ImportMeta & { env?: Record<string, string | undefined> }).env
    ?.VITE_R2_BASE_URL ||
  (
    globalThis as {
      process?: { env?: Record<string, string | undefined> }
    }
  ).process?.env?.VITE_R2_BASE_URL ||
  '/assets'

// --- Team Members ---

export const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Russ Park',
    slug: 'dr-russ-park',
    photoUrl: `${baseUrl}/team/dr-russ-park.webp`,
    title: 'Executive Director',
    credentials: 'DNP, APRN, PMHNP-BC',
    licenseNumbers: ['NV APRN License'],
    specializations: [
      'Adolescent Psychiatry',
      'Medication Management',
      'Dual Diagnosis',
      'Executive Healthcare Leadership',
    ],
    professionalBackground:
      'Dr. Russ Park is an Advanced Nurse Executive with a psychiatric mental health focus. He brings extensive leadership experience as former CEO of Sana Behavioral Health and Seven Hills Hospital. Dr. Park earned his Doctorate from the University of Nevada, Reno and is dedicated to advancing adolescent behavioral health treatment through evidence-based, compassionate care.',
    education: 'Doctorate, University of Nevada, Reno',
    certifications: ['PMHNP-BC', 'Advanced Nurse Executive'],
  },
  {
    name: 'Arianne Smith',
    slug: 'arianne-smith',
    photoUrl: `${baseUrl}/team/arianne-smith.webp`,
    title: 'Clinical Director',
    credentials: 'LMFT',
    licenseNumbers: ['NV LMFT License'],
    specializations: [
      'Trauma-Informed Care',
      'Family Therapy',
      'Solution-Focused Brief Therapy',
      'Narrative Therapy',
      'Adolescent Behavioral Health',
    ],
    professionalBackground:
      'Arianne Smith is a Licensed Marriage and Family Therapist who holds an M.S. from the University of Nevada, Las Vegas. She specializes in Solution-Focused Brief Therapy and Narrative Therapy approaches, guiding adolescents and their families through trauma recovery and lasting behavioral change.',
    education: 'M.S., University of Nevada, Las Vegas',
  },
  {
    name: 'Karel Saquing',
    slug: 'karel-saquing',
    photoUrl: `${baseUrl}/team/karel-saquing.webp`,
    title: 'School Director',
    credentials: 'B.A.',
    licenseNumbers: [],
    specializations: [
      'Academic Program Management',
      'Youth Mentorship',
      'Physical Fitness & Wellness',
      'Structured Learning Environments',
    ],
    professionalBackground:
      'Karel Saquing is a U.S. Army veteran who brings structure, discipline, and heart to Silver State Youth Academy. He holds a B.A. in Pre-Law Philosophy from UNLV and is a certified personal trainer and boxing coach. Karel creates an environment where students thrive academically while developing resilience and self-confidence.',
    education: 'B.A. Pre-Law Philosophy, University of Nevada, Las Vegas',
    certifications: ['Certified Personal Trainer'],
  },
  {
    name: 'Alexa Adair',
    slug: 'alexa-adair',
    photoUrl: `${baseUrl}/team/alexa-adair.webp`,
    title: 'Director of Performance Improvement',
    credentials: 'B.S.',
    licenseNumbers: [],
    specializations: [
      'Quality Assurance',
      'Performance Improvement',
      'Public Health Administration',
      'Compliance',
    ],
    professionalBackground:
      "Alexa Adair holds a Psychology degree and is pursuing her Master's in Public Health Administration. With a background in both residential and outpatient mental health care, Alexa ensures Silver State maintains the highest standards of clinical quality and regulatory compliance.",
    education: 'B.S. Psychology; M.P.H. Administration (in progress)',
  },
  {
    name: 'Marlon Duran',
    slug: 'marlon-duran',
    photoUrl: `${baseUrl}/team/marlon-duran.webp`,
    title: 'Executive Chef',
    credentials: 'Culinary Professional',
    licenseNumbers: [],
    specializations: [
      'Nutritional Wellness',
      'Recovery-Focused Cuisine',
      'Adolescent Dietary Needs',
    ],
    professionalBackground:
      'Marlon Duran is a Los Angeles native with fine dining and recovery center culinary experience. He believes food is a critical part of the healing process and crafts nutritious, appealing meals that support adolescent recovery and overall wellness.',
  },
]

export const teamMembersBySlug: Record<string, TeamMember> = Object.fromEntries(
  teamMembers.map((m) => [m.slug, m]),
)

// --- Key Differentiators ---

export const keyDifferentiators: KeyDifferentiator[] = [
  {
    title: '4.8/5 Rating',
    value: '4.8',
    description:
      "34 verified reviews from families who trust Silver State with their teen's mental health recovery.",
  },
  {
    title: '4:1 Staff-to-Client Ratio',
    value: '4:1',
    description:
      'Personalized attention ensures every adolescent receives individualized care from our clinical team.',
  },
  {
    title: 'LGBTQIA+ Affirming',
    value: '100%',
    description:
      'Designated affirming care environment where every teen is respected, supported, and celebrated for who they are.',
  },
  {
    title: 'On-Site Accredited Academics',
    value: 'SNYA',
    description:
      'Silver State Youth Academy provides accredited, on-site education so treatment never means falling behind in school.',
  },
  {
    title: 'Full Continuum of Care',
    value: 'RTC \u2192 PHP \u2192 IOP',
    description:
      'Residential, Partial Hospitalization, and Intensive Outpatient programs under one roof for seamless step-down care.',
  },
]

// --- Clinical Reviewer ---

export const clinicalReviewer: { name: string; credentials: string; title: string } = {
  name: 'Dr. Russ Park',
  credentials: 'DNP, APRN, PMHNP-BC',
  title: 'Executive Director',
}

// --- Facility Data (for Story 6.2) ---

export const facilityData: AboutPageData = {
  title: 'Our Facility',
  slug: 'facility',
  description:
    'Silver State Adolescent Treatment Center is located in Las Vegas, Nevada, offering a safe, therapeutic environment designed specifically for adolescents ages 11-17. Our facility features private apartment-style bedrooms, dedicated therapy offices, recreation areas, and on-site classrooms for uninterrupted academic progress.',
  features: [
    'Private apartment-style bedrooms',
    'Common areas with recreation',
    'Pickleball and basketball courts',
    'Classroom spaces for academics',
    'Dedicated therapy offices',
    'Cafeteria and dining areas',
    'Outdoor recreation facilities',
  ],
  images: [
    {
      src: `${baseUrl}/facility/exterior.webp`,
      alt: 'Silver State Treatment Center exterior view',
    },
    {
      src: `${baseUrl}/facility/bedroom.webp`,
      alt: 'Private apartment-style bedroom for adolescent residents',
    },
    {
      src: `${baseUrl}/facility/therapy-room.webp`,
      alt: 'Dedicated therapy office for individual and group sessions',
    },
    {
      src: `${baseUrl}/facility/recreation.webp`,
      alt: 'Recreation area with activities for teens',
    },
    {
      src: `${baseUrl}/facility/classroom.webp`,
      alt: 'On-site classroom at Silver State Youth Academy',
    },
  ],
  metaTitle: 'Our Facility | Silver State Adolescent Treatment Center',
  metaDescription:
    "Tour Silver State's therapeutic facility in Las Vegas — private bedrooms, therapy offices, recreation courts, on-site classrooms, and dining areas designed for adolescent recovery.",
}

// --- Youth Academy Data (for Story 6.2) ---

export const youthAcademyData: AboutPageData = {
  title: 'Silver State Youth Academy',
  slug: 'youth-academy',
  description:
    "Treatment shouldn't mean falling behind in school. Our on-site, fully accredited academic program means your teen continues their education alongside treatment — not instead of it. Certified teachers deliver personalized instruction in small class sizes, with all credits transferring back to their home school.",
  features: [
    'Accredited curriculum aligned with public school standards',
    'Small class sizes with personalized attention',
    'Full transcript and credit transfer coordination',
    'Certified, trauma-informed teachers',
    'Time management and organizational skill building',
    'Emotional regulation and accountability development',
  ],
  images: [
    {
      src: `${baseUrl}/academy/classroom.webp`,
      alt: 'Silver State Youth Academy classroom with small class sizes',
    },
    {
      src: `${baseUrl}/academy/learning.webp`,
      alt: 'Student receiving personalized instruction at Youth Academy',
    },
  ],
  metaTitle: 'Silver State Youth Academy | On-Site Accredited Academics',
  metaDescription:
    "Silver State Youth Academy provides accredited, on-site education during treatment. Certified teachers, small class sizes, and full credit transfer so your teen doesn't fall behind.",
}

// Backward-compat alias used by existing about pages.
export const youthAcademyPageData: AboutPageData = youthAcademyData

// --- Youth Academy Features (used by homepage/about sections) ---

export const youthAcademyFeatures: YouthAcademyFeature[] = [
  {
    title: 'Accredited Curriculum',
    desc: 'Standards-based instruction aligned with public school expectations',
  },
  {
    title: 'Small Class Sizes',
    desc: 'Personalized attention from certified, trauma-informed teachers',
  },
  {
    title: 'Credit Transfer',
    desc: 'Full transcript coordination so no academic year is lost',
  },
  {
    title: 'Skill Building',
    desc: 'Time management, organization, emotional regulation, and accountability',
  },
]

// --- Team overview (used by homepage team section) ---

export const team: { clinical: string; members: string[] } = {
  clinical: 'Dr. Russ Park, DNP — Executive Director',
  members: [
    'Psychiatrist',
    'Individual Therapist',
    'Family Therapist',
    'Care Coordinators',
    'Registered Nurses',
    'Registered Dietitians',
    'Recovery Counselors',
    'Adventure Therapists',
    'Music & Art Therapists',
    'Fitness Experts',
    'Yoga & Meditation Instructors',
    'Academic Teachers & Tutors',
  ],
}

// --- Legacy export for backward compat (homepage ProfileChip, etc.) ---

export const leadership: LeadershipEntry[] = teamMembers.map((m) => ({
  name: m.name,
  title: m.title,
  bio: m.professionalBackground,
}))
