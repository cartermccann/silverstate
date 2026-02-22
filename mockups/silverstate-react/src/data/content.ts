// Real content sourced from silverstateadolescenttreatment.com

import type {
  FaqEntry, AdmissionStep, LeadershipEntry, InsuranceEntry,
  AccreditationEntry, ProgramData, YouthAcademyFeature,
  DailyScheduleEntry, WhyChooseEntry, ProfileEntry,
} from '../types'

export const site = {
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

export const hero = {
  refined: {
    label: 'Nevada\'s Leading Teen Treatment Center',
    headline: 'We guide teens toward a brighter future',
    body: 'At Silver State, we guide teens away from self-destructive behaviors and towards building self-esteem — addressing the core mental health issues that drive high-risk actions.',
  },
  immersive: {
    headline: 'The path forward starts with one conversation',
    body: 'Residential and outpatient treatment for adolescents 11–17. Evidence-based care rooted in family, built for lasting change.',
  },
}

export const stats = [
  { value: '24/7', label: 'Clinical support' },
  { value: '11–17', label: 'Ages served' },
  { value: '4.8', label: 'Average rating (34 reviews)', suffix: '/5' },
  { value: 'Joint Commission', label: 'Gold Seal accredited' },
]

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

export const conditions = {
  mentalHealth: [
    'Anxiety', 'Depression', 'Trauma & PTSD', 'Suicidal Ideation',
    'OCD', 'Bipolar Disorder', 'Autism Spectrum (ASD)',
    'Oppositional Defiant Disorder (ODD)', 'Conduct Disorder',
    'DMDD', 'BPD', 'Adjustment Disorder', 'Dual Diagnosis',
  ],
  substanceAbuse: [
    'Alcohol', 'Opioids', 'Benzodiazepines',
    'Cocaine', 'Crystal Meth', 'Cannabis',
  ],
  eatingDisorders: [
    'Anorexia Nervosa', 'Bulimia Nervosa', 'Binge Eating',
    'ARFID', 'OSFED', 'Compulsive Eating',
  ],
}

export const therapies = [
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

export const team = {
  clinical: 'Cameron Diaz, PhD — Chief Clinical Director',
  members: [
    'Psychiatrist', 'Individual Therapist', 'Family Therapist',
    'Care Coordinators', 'Registered Nurses', 'Registered Dietitians',
    'Recovery Counselors', 'Adventure Therapists',
    'Music & Art Therapists', 'Fitness Experts',
    'Yoga & Meditation Instructors', 'Academic Teachers & Tutors',
  ],
}

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
    body: 'Our evidence-based programs — CBT, DBT, trauma-informed care — deliver lasting results.',
  },
  {
    title: 'Compassionate Support',
    body: 'A nurturing environment rooted in unconditional love and clinical expertise.',
  },
]

export const insurance: InsuranceEntry[] = [
  { name: 'United Healthcare', logo: null },
  { name: 'Aetna', logo: '/assets/aetna.png' },
  { name: 'Cigna', logo: '/assets/cigna.png' },
  { name: 'BCBS', logo: '/assets/bcbs.png' },
  { name: 'HPN', logo: null },
]

export const accreditations: AccreditationEntry[] = [
  { name: 'Joint Commission', logo: '/assets/joint-commission.webp' },
  { name: 'LegitScript', logo: null },
  { name: 'HIPAA Compliant', logo: null },
]

export const faqs: FaqEntry[] = [
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
    a: 'If outpatient care isn\'t enough and your teen\'s mental health is interfering with daily life, relationships, or safety, residential treatment may be appropriate.',
  },
  {
    q: 'I\'ve never done this before. Where do I start?',
    a: 'Call us. We\'ll walk you through everything step by step with zero judgment.',
  },
  {
    q: 'What if my teen doesn\'t look "sick enough" for treatment?',
    a: 'If you\'re worried, that\'s enough to call. We assess every situation carefully.',
  },
  {
    q: 'What if I\'ve tried everything and nothing has worked?',
    a: 'We understand. Our program is designed for teens who need a different level of care.',
  },
]

export const testimonial = {
  quote: 'We were terrified when our son entered treatment. Within two weeks, we saw a different kid — calmer, more communicative, actually hopeful. The family sessions changed everything for us too.',
  author: 'Parent of a former resident',
  detail: 'Residential program',
}

export const facility = {
  amenities: [
    'Private apartment-style bedrooms',
    'Common areas with recreation',
    'Pickleball and basketball courts',
    'Classroom spaces for academics',
    'Dedicated therapy offices',
    'Cafeteria and dining areas',
    'Outdoor recreation facilities',
  ],
}

export const whoThisIsFor = {
  headline: 'This isn\'t just for "troubled teens"',
  body: 'Many teens who benefit from our program are anxious, overwhelmed, or withdrawn — not defiant or aggressive. If your child is struggling and outpatient care isn\'t enough, this may be the right step.',
  profiles: [
    { label: 'The anxious teen', desc: 'who can\'t make it through a school day' },
    { label: 'The withdrawn teen', desc: 'who has stopped talking to family and friends' },
    { label: 'The overwhelmed teen', desc: 'whose emotions feel too big to manage' },
    { label: 'The teen in crisis', desc: 'whose safety you\'re worried about every day' },
    { label: 'The teen who\'s tried everything', desc: 'and nothing has stuck' },
    { label: 'The teen masking pain', desc: 'behind substances, screens, or silence' },
  ] as ProfileEntry[],
}

export const youthAcademy = {
  label: 'Silver State Youth Academy',
  headline: 'Treatment shouldn\'t mean falling behind in school',
  body: 'Our on-site, fully accredited academic program means your teen continues their education alongside treatment — not instead of it. Certified teachers deliver personalized instruction in small class sizes, with all credits transferring back to their home school.',
  features: [
    { title: 'Accredited Curriculum', desc: 'Standards-based instruction aligned with public school expectations' },
    { title: 'Small Class Sizes', desc: 'Personalized attention from certified, trauma-informed teachers' },
    { title: 'Credit Transfer', desc: 'Full transcript coordination so no academic year is lost' },
    { title: 'Skill Building', desc: 'Time management, organization, emotional regulation, and accountability' },
  ] as YouthAcademyFeature[],
  director: {
    name: 'Karel Saquing',
    title: 'School Director',
    bio: 'U.S. Army veteran with a B.A. in Pre-Law Philosophy from UNLV. Certified personal trainer and boxing coach who brings structure, discipline, and heart to the classroom.',
  },
}

export const dailySchedule: DailyScheduleEntry[] = [
  { time: '7:00 AM', activity: 'Wake-Up & Morning Routine', desc: 'Structured start with hygiene, room care, and a healthy breakfast prepared by our on-site chef.' },
  { time: '8:00 AM', activity: 'Morning Meditation', desc: 'Guided mindfulness session to set intentions and practice emotional regulation.' },
  { time: '8:30 AM', activity: 'Academic Classes', desc: 'Accredited instruction at Silver State Youth Academy with certified teachers in small groups.' },
  { time: '12:00 PM', activity: 'Lunch & Free Time', desc: 'Nutritious meals and unstructured social time for peer connection.' },
  { time: '1:00 PM', activity: 'Individual Therapy', desc: 'One-on-one session with assigned therapist using CBT, DBT, or trauma-informed modalities.' },
  { time: '2:30 PM', activity: 'Group Therapy', desc: 'Peer-led processing groups focused on skills, coping, and community.' },
  { time: '4:00 PM', activity: 'Recreation & Adventure', desc: 'Pickleball, basketball, art, music, yoga, or off-site adventure therapy.' },
  { time: '5:30 PM', activity: 'Dinner & Family Time', desc: 'Chef-prepared dinner followed by family phone calls or scheduled family therapy.' },
  { time: '7:00 PM', activity: 'Evening Programming', desc: 'Life skills workshops, journaling, or wellness activities.' },
  { time: '9:00 PM', activity: 'Wind-Down & Lights Out', desc: 'Nightly check-in with staff, reading time, and lights out.' },
]

export const admissionsProcess: AdmissionStep[] = [
  {
    step: 1,
    title: 'Call our team',
    desc: 'Speak with an admissions counselor 24/7. No waitlists, no judgment. We\'ll ask about your teen\'s situation and answer every question you have.',
  },
  {
    step: 2,
    title: 'Verify insurance',
    desc: 'We handle everything. Share your insurance details or upload a photo of your card — our team verifies eligibility, explains coverage, and estimates out-of-pocket costs.',
  },
  {
    step: 3,
    title: 'Clinical assessment',
    desc: 'A licensed clinician conducts a comprehensive evaluation to determine the right level of care — residential, PHP, or IOP — tailored to your teen\'s needs.',
  },
  {
    step: 4,
    title: 'Begin treatment',
    desc: 'Your teen is welcomed into a structured, supportive environment from day one. Treatment planning starts immediately with their dedicated care team.',
  },
]

export const leadership: LeadershipEntry[] = [
  {
    name: 'Dr. Russ Park',
    title: 'Executive Director',
    bio: 'Advanced Nurse Executive with psychiatric mental health focus. Former CEO of Sana Behavioral Health and Seven Hills Hospital. Doctorate from University of Nevada, Reno.',
  },
  {
    name: 'Arianne Smith',
    title: 'Clinical Director',
    bio: 'Licensed marriage and family therapist. M.S. from UNLV. Specializes in Solution-Focused Brief Therapy and Narrative Therapy approaches.',
  },
  {
    name: 'Karel Saquing',
    title: 'School Director',
    bio: 'U.S. Army veteran. B.A. in Pre-Law Philosophy from UNLV. Certified personal trainer and boxing coach.',
  },
  {
    name: 'Alexa Adair',
    title: 'Director of Performance Improvement',
    bio: 'Psychology degree holder pursuing Master\'s in Public Health Administration. Background in residential and outpatient mental health care.',
  },
  {
    name: 'Marlon Duran',
    title: 'Executive Chef',
    bio: 'Los Angeles native with fine dining and recovery center experience. Believes food is a critical part of the healing process.',
  },
]
