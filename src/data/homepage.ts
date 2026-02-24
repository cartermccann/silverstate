import type {
  WhyChooseEntry,
  ProfileEntry,
  DailyScheduleEntry,
  HeroData,
  IntroData,
  LightboxImage,
  HomepageProgramHighlight,
  ConditionOverviewCategory,
  YouthAcademyFeature,
  HomepageTeamOverview,
  InsuranceEntry,
  AccreditationEntry,
  FaqEntry,
  FamilySectionData,
  HomepageAdmissionsStep,
  FinalCtaData,
} from '../types'
import { site } from './common'

export const heroData: HeroData = {
  headline: 'The path forward starts with one conversation',
  body: 'Residential and outpatient treatment for adolescents 11\u201317. Evidence-based care rooted in family, built for lasting change.',
  ctaPrimary: { label: `Call ${site.phone}`, href: site.phoneTel },
  ctaSecondary: { label: 'Learn More', href: '/programs/residential-treatment' },
  backgroundImage: { src: '/assets/hero-youth.webp', alt: 'Adolescent treatment at Silver State' },
}

// Keep legacy shape for backward compatibility during migration
export const hero = {
  refined: {
    label: "Nevada's Leading Teen Treatment Center",
    headline: 'We guide teens toward a brighter future',
    body: 'At Silver State, we guide teens away from self-destructive behaviors and towards building self-esteem \u2014 addressing the core mental health issues that drive high-risk actions.',
  },
  immersive: {
    headline: heroData.headline,
    body: heroData.body,
  },
}

export const introData: IntroData = {
  paragraph:
    "We believe adolescent treatment should feel like a turning point \u2014 not a dead end. Our clinical team works alongside your family to build a treatment plan that honors your teen\u2019s story, not just their diagnosis.",
  credibilityLine:
    'Joint Commission Gold Seal accredited. LegitScript approved. HIPAA compliant. Serving Nevada families since day one.',
}

export const facilityGalleryImages: LightboxImage[] = [
  {
    src: '/assets/woman-on-phone.jpg',
    alt: 'Family involvement',
    caption: 'Family-centered treatment environment',
  },
  {
    src: '/assets/hero-youth.webp',
    alt: 'Youth activities',
    caption: 'Structured therapeutic programming',
  },
  {
    src: '/assets/teen-therapist.jpg',
    alt: 'Therapy sessions',
    caption: 'Individual and group therapy spaces',
  },
]

export const stats = [
  { value: '24/7', label: 'Clinical support' },
  { value: '11\u201317', label: 'Ages served' },
  { value: '4.8', label: 'Average rating (34 reviews)', suffix: '/5' },
  { value: 'Joint Commission', label: 'Gold Seal accredited' },
]

// Alias for story 2.2 naming convention
export const statsData = stats

export const whyChoose: WhyChooseEntry[] = [
  {
    title: 'Expert Care',
    body: 'Our team of experienced professionals provides top-tier mental health treatment tailored to each adolescent.',
  },
  {
    title: 'Holistic Approach',
    body: 'We address the physical, psychological, social, and educational needs of teens and their families.',
  },
  {
    title: 'Proven Success',
    body: 'Our evidence-based programs \u2014 CBT, DBT, trauma-informed care \u2014 deliver lasting results.',
  },
  {
    title: 'Compassionate Support',
    body: 'A nurturing environment rooted in unconditional love and clinical expertise.',
  },
]

export const testimonial = {
  quote:
    'We were terrified when our son entered treatment. Within two weeks, we saw a different kid \u2014 calmer, more communicative, actually hopeful. The family sessions changed everything for us too.',
  author: 'Parent of a former resident',
  detail: 'Residential program',
}

export const whoThisIsFor = {
  headline: 'This isn\'t just for "troubled teens"',
  body: "Many teens who benefit from our program are anxious, overwhelmed, or withdrawn \u2014 not defiant or aggressive. If your child is struggling and outpatient care isn\u2019t enough, this may be the right step.",
  profiles: [
    { label: 'The anxious teen', desc: "who can\u2019t make it through a school day" },
    { label: 'The withdrawn teen', desc: 'who has stopped talking to family and friends' },
    { label: 'The overwhelmed teen', desc: 'whose emotions feel too big to manage' },
    { label: 'The teen in crisis', desc: "whose safety you\u2019re worried about every day" },
    { label: "The teen who\u2019s tried everything", desc: 'and nothing has stuck' },
    { label: 'The teen masking pain', desc: 'behind substances, screens, or silence' },
  ] as ProfileEntry[],
}

export const dailySchedule: DailyScheduleEntry[] = [
  {
    time: '7:00 AM',
    activity: 'Wake-Up & Morning Routine',
    desc: 'Structured start with hygiene, room care, and a healthy breakfast prepared by our on-site chef.',
  },
  {
    time: '8:00 AM',
    activity: 'Morning Meditation',
    desc: 'Guided mindfulness session to set intentions and practice emotional regulation.',
  },
  {
    time: '8:30 AM',
    activity: 'Academic Classes',
    desc: 'Accredited instruction at Silver State Youth Academy with certified teachers in small groups.',
  },
  {
    time: '12:00 PM',
    activity: 'Lunch & Free Time',
    desc: 'Nutritious meals and unstructured social time for peer connection.',
  },
  {
    time: '1:00 PM',
    activity: 'Individual Therapy',
    desc: 'One-on-one session with assigned therapist using CBT, DBT, or trauma-informed modalities.',
  },
  {
    time: '2:30 PM',
    activity: 'Group Therapy',
    desc: 'Peer-led processing groups focused on skills, coping, and community.',
  },
  {
    time: '4:00 PM',
    activity: 'Recreation & Adventure',
    desc: 'Pickleball, basketball, art, music, yoga, or off-site adventure therapy.',
  },
  {
    time: '5:30 PM',
    activity: 'Dinner & Family Time',
    desc: 'Chef-prepared dinner followed by family phone calls or scheduled family therapy.',
  },
  {
    time: '7:00 PM',
    activity: 'Evening Programming',
    desc: 'Life skills workshops, journaling, or wellness activities.',
  },
  {
    time: '9:00 PM',
    activity: 'Wind-Down & Lights Out',
    desc: 'Nightly check-in with staff, reading time, and lights out.',
  },
]

// Alias for story 2.2 naming convention
export const dailyScheduleData = dailySchedule
export const testimonialData = testimonial

// --- Story 2.2: Homepage content section data ---

export const programHighlightsData: HomepageProgramHighlight[] = [
  {
    slug: 'residential-treatment',
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
  {
    slug: 'php',
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
  {
    slug: 'iop',
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
]

export const conditionsOverviewData: ConditionOverviewCategory[] = [
  {
    category: 'Mental Health',
    conditions: [
      { name: 'Anxiety', slug: 'anxiety-treatment' },
      { name: 'Depression', slug: 'depression-treatment' },
      { name: 'Trauma & PTSD', slug: 'trauma-ptsd-treatment' },
      { name: 'Suicidal Ideation', slug: 'suicidal-ideation-treatment' },
      { name: 'OCD', slug: 'ocd-treatment' },
      { name: 'Bipolar Disorder', slug: 'bipolar-disorder-treatment' },
      { name: 'Autism Spectrum (ASD)', slug: 'autism-spectrum-treatment' },
      { name: 'Oppositional Defiant Disorder (ODD)', slug: 'odd-treatment' },
      { name: 'Conduct Disorder', slug: 'conduct-disorder-treatment' },
      { name: 'DMDD', slug: 'dmdd-treatment' },
      { name: 'BPD', slug: 'bpd-treatment' },
      { name: 'Adjustment Disorder', slug: 'adjustment-disorder-treatment' },
      { name: 'Dual Diagnosis', slug: 'dual-diagnosis-treatment' },
    ],
  },
  {
    category: 'Substance Abuse',
    conditions: [
      { name: 'Alcohol', slug: 'alcohol-abuse-treatment' },
      { name: 'Opioids', slug: 'opioid-abuse-treatment' },
      { name: 'Benzodiazepines', slug: 'benzodiazepine-abuse-treatment' },
      { name: 'Cocaine', slug: 'cocaine-abuse-treatment' },
      { name: 'Crystal Meth', slug: 'crystal-meth-abuse-treatment' },
      { name: 'Cannabis', slug: 'cannabis-abuse-treatment' },
    ],
  },
  {
    category: 'Eating Disorders',
    conditions: [
      { name: 'Anorexia Nervosa', slug: 'anorexia-nervosa-treatment' },
      { name: 'Bulimia Nervosa', slug: 'bulimia-nervosa-treatment' },
      { name: 'Binge Eating', slug: 'binge-eating-treatment' },
      { name: 'ARFID', slug: 'arfid-treatment' },
      { name: 'OSFED', slug: 'osfed-treatment' },
      { name: 'Compulsive Eating', slug: 'compulsive-eating-treatment' },
    ],
  },
]

export const therapiesOverviewData: string[] = [
  'Cognitive Behavioral Therapy (CBT)',
  'Dialectical Behavior Therapy (DBT)',
  'Trauma-Informed Care',
  'Individual Therapy',
  'Group Therapy',
  'Family Therapy',
  'Meditation & Mindfulness',
  'Art & Music Therapy',
  'Adventure Therapy',
  'Holistic Treatment',
  'Crisis Prevention & Intervention (CPI)',
  'Medication Management',
  'LGBTQIA+ Affirming Care',
]

export const youthAcademyData: {
  label: string
  headline: string
  body: string
  features: YouthAcademyFeature[]
  director: { name: string; title: string; bio: string }
} = {
  label: 'Silver State Youth Academy',
  headline: "Treatment shouldn\u2019t mean falling behind in school",
  body: 'Our on-site, fully accredited academic program means your teen continues their education alongside treatment \u2014 not instead of it. Certified teachers deliver personalized instruction in small class sizes, with all credits transferring back to their home school.',
  features: [
    { title: 'Accredited Curriculum', desc: 'Standards-based instruction aligned with public school expectations' },
    { title: 'Small Class Sizes', desc: 'Personalized attention from certified, trauma-informed teachers' },
    { title: 'Credit Transfer', desc: 'Full transcript coordination so no academic year is lost' },
    { title: 'Skill Building', desc: 'Time management, organization, emotional regulation, and accountability' },
  ],
  director: {
    name: 'Karel Saquing',
    title: 'School Director',
    bio: 'U.S. Army veteran with a B.A. in Pre-Law Philosophy from UNLV. Certified personal trainer and boxing coach who brings structure, discipline, and heart to the classroom.',
  },
}

export const teamOverviewData: HomepageTeamOverview = {
  clinical: 'Cameron Diaz, PhD \u2014 Chief Clinical Director',
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

export const insuranceOverviewData: InsuranceEntry[] = [
  { name: 'United Healthcare', logo: null },
  { name: 'Aetna', logo: '/assets/aetna.png' },
  { name: 'Cigna', logo: '/assets/cigna.png' },
  { name: 'BCBS', logo: '/assets/bcbs.png' },
  { name: 'HPN', logo: null },
]

export const accreditationsOverviewData: AccreditationEntry[] = [
  { name: 'Joint Commission', logo: '/assets/joint-commission.webp' },
  { name: 'LegitScript', logo: null },
  { name: 'HIPAA Compliant', logo: null },
  { name: 'NAATP', logo: null },
]

export const familySectionData: FamilySectionData = {
  heading: 'Your family is part of the treatment team',
  body: "Healing doesn\u2019t happen in isolation. We involve parents and guardians from the very first day because lasting change requires a family working together. Through structured therapy sessions, educational workshops, and consistent communication, we ensure your family is equipped to support your teen long after discharge.",
  bulletPoints: [
    "Weekly progress updates from your teen\u2019s care team",
    'Family therapy integrated into every treatment plan',
    'Parent education workshops and support groups',
    'Comprehensive discharge and transition planning',
  ],
}

export const faqsData: FaqEntry[] = [
  {
    q: 'What makes your program different?',
    a: 'We focus exclusively on adolescents, combining clinical therapy, education, and compassionate support tailored to the needs of each teen.',
  },
  {
    q: 'Do you treat both boys and girls?',
    a: 'Yes. Our program is inclusive of all genders, with gender-specific accommodations and therapeutic groups when appropriate.',
  },
  {
    q: 'What age range do you accept?',
    a: 'We accept teens between the ages of 11 and 17.',
  },
  {
    q: 'How do I know if my teen needs residential treatment?',
    a: "If outpatient care isn\u2019t enough and your teen\u2019s mental health is interfering with daily life, relationships, or safety, residential treatment may be appropriate.",
  },
  {
    q: "I\u2019ve never done this before. Where do I start?",
    a: "Call us. We\u2019ll walk you through everything step by step with zero judgment.",
  },
  {
    q: 'What if my teen doesn\u2019t look "sick enough" for treatment?',
    a: "If you\u2019re worried, that\u2019s enough to call. We assess every situation carefully.",
  },
  {
    q: 'What if I\u2019ve tried everything and nothing has worked?',
    a: 'We understand. Our program is designed for teens who need a different level of care.',
  },
]

export const admissionsOverviewData: HomepageAdmissionsStep[] = [
  {
    step: 1,
    title: 'Call our team',
    desc: "Speak with an admissions counselor 24/7. No waitlists, no judgment. We\u2019ll ask about your teen\u2019s situation and answer every question you have.",
  },
  {
    step: 2,
    title: 'Verify insurance',
    desc: 'We handle everything. Share your insurance details or upload a photo of your card \u2014 our team verifies eligibility, explains coverage, and estimates out-of-pocket costs.',
  },
  {
    step: 3,
    title: 'Clinical assessment',
    desc: "A licensed clinician conducts a comprehensive evaluation to determine the right level of care \u2014 residential, PHP, or IOP \u2014 tailored to your teen\u2019s needs.",
  },
  {
    step: 4,
    title: 'Begin treatment',
    desc: 'Your teen is welcomed into a structured, supportive environment from day one. Treatment planning starts immediately with their dedicated care team.',
  },
]

export const finalCtaData: FinalCtaData = {
  headline: 'One call can change everything',
  body: 'Our admissions team is available 24/7. No waitlists, no judgment \u2014 just a conversation about what your family needs.',
  primaryCtaLabel: `Call ${site.phone}`,
  secondaryCtaLabel: 'Verify Insurance',
  secondaryCtaHref: '/insurance',
}
