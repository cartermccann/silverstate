import type {
  WhyChooseEntry,
  ProfileEntry,
  DailyScheduleEntry,
  HeroData,
  IntroData,
  LightboxImage,
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
