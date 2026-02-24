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

// ─── Full Program Page Data (Story 3.1) ─────────────────────

export const residentialProgram: ProgramPageData = {
  slug: 'residential-treatment',
  label: 'Residential Treatment',
  title: 'Around-the-Clock Care in a Place That Feels Safe',
  metaTitle: 'Residential Treatment for Teens | Silver State Treatment Center',
  metaDescription:
    'Our residential program provides 24/7 therapeutic support for adolescents 11\u201317. Evidence-based therapies, academic continuity, and family programming in a structured, safe environment.',
  heroImage: '/assets/hero-residential.webp',
  overview:
    'Our residential program provides 24/7 therapeutic support in a structured, safe environment. Teens receive individualized treatment combining evidence-based therapies, academic continuity through Silver State Youth Academy, and comprehensive family programming designed for lasting change. Each adolescent works with a dedicated care team that develops a personalized treatment plan addressing their unique mental health needs, family dynamics, and educational goals.',
  approach:
    'We combine evidence-based clinical therapies \u2014 including CBT, DBT, and trauma-informed care \u2014 with academic continuity and holistic wellness programming. Every teen receives an individualized treatment plan developed by a multidisciplinary team of licensed clinicians, educators, and support staff. Family involvement is integrated from day one through weekly therapy sessions, parent education workshops, and comprehensive discharge planning.',
  duration: 'Typical stay is 30\u201390 days, individualized to each teen\u2019s progress',
  targetAudience:
    'Teens ages 11\u201317 whose mental health requires around-the-clock clinical support. Residential treatment is appropriate when outpatient care is insufficient and a structured, therapeutic environment is needed for stabilization and lasting change.',
  dailySchedule: [
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
  ],
  therapyModalities: [
    'cbt',
    'dbt',
    'trauma-informed-care',
    'individual-therapy',
    'group-therapy',
    'family-therapy',
    'art-music-therapy',
    'adventure-therapy',
    'meditation-mindfulness',
  ],
  features: [
    'Individual and group therapy daily',
    'On-site accredited academics (Silver State Youth Academy)',
    'Family therapy and parent education workshops',
    'Experiential, recreational, and adventure therapy',
    'Music, art, and meditation therapy',
    'Trauma-informed care throughout',
    'Transition and discharge planning from day one',
    '24/7 clinical and nursing support',
    'Psychiatric evaluation and medication management',
    'Nutritious chef-prepared meals',
  ],
  stat: '4:1 staff-to-client ratio',
  faqs: [
    {
      q: 'How long does residential treatment last?',
      a: 'The typical stay is 30\u201390 days, but treatment length is individualized based on each teen\u2019s progress, clinical needs, and family goals. Your care team will provide regular updates and adjust the plan as needed.',
    },
    {
      q: 'Can my teen continue school during residential treatment?',
      a: 'Yes. Silver State Youth Academy is our on-site, fully accredited academic program. Certified teachers deliver personalized instruction in small class sizes, and all credits transfer back to your teen\u2019s home school.',
    },
    {
      q: 'What does a typical day look like?',
      a: 'Days are structured from 7 AM to 9 PM and include morning meditation, academic classes, individual and group therapy, recreational activities, family time, and evening programming. Every element is designed to support healing and skill-building.',
    },
    {
      q: 'How often can I visit or communicate with my teen?',
      a: 'Family involvement is central to our approach. Parents participate in weekly family therapy sessions, receive regular progress updates from the care team, and have scheduled phone calls with their teen. Visiting policies are discussed during intake.',
    },
    {
      q: 'What happens after residential treatment?',
      a: 'Discharge planning begins on day one. Most teens step down to our Partial Hospitalization (PHP) or Intensive Outpatient (IOP) program to maintain progress while transitioning back to daily life. Your care team creates a comprehensive aftercare plan.',
    },
    {
      q: 'What insurance plans do you accept?',
      a: 'We accept most major insurance plans including United Healthcare, Aetna, Cigna, and BCBS. Our admissions team handles insurance verification and can explain your coverage and any out-of-pocket costs before treatment begins.',
    },
    {
      q: 'Is residential treatment safe for my teen?',
      a: 'Absolutely. Our facility maintains a 4:1 staff-to-client ratio with 24/7 clinical and nursing support. We are Joint Commission Gold Seal accredited and follow strict safety protocols designed specifically for adolescent care.',
    },
  ],
  relatedConditions: [
    'anxiety-treatment',
    'depression-treatment',
    'trauma-ptsd-treatment',
    'substance-abuse-treatment',
    'dual-diagnosis-treatment',
  ],
  relatedPrograms: ['php', 'iop'],
  reviewedBy: 'Dr. Russ Park, DNP',
  reviewDate: '2026-02-01',
}

export const phpProgram: ProgramPageData = {
  slug: 'php',
  label: 'Partial Hospitalization (PHP)',
  title: 'Structured Days, Home Evenings',
  metaTitle: 'Partial Hospitalization Program (PHP) for Teens | Silver State',
  metaDescription:
    'Our PHP provides full-day clinical intensity with the flexibility to return home each evening. A structured bridge between residential care and independent living for teens 11\u201317.',
  heroImage: '/assets/hero-php.webp',
  overview:
    'Our Partial Hospitalization Program provides full clinical intensity during the day with the flexibility to return home each evening. PHP serves as a critical bridge between residential care and independent living, helping teens practice newly learned skills in real-world settings while maintaining the therapeutic structure they need. Teens attend programming five days per week and receive the same evidence-based therapies as our residential program in a supportive, structured environment.',
  approach:
    'PHP combines intensive clinical therapy with real-world practice. During structured daytime hours, teens participate in individual therapy, group sessions, family therapy, and skill-building activities. Each evening, they return home to practice coping strategies, communication skills, and healthy routines with their families \u2014 with ongoing clinical support to guide the transition.',
  duration: 'Typical duration is 4\u20136 weeks, with sessions 5 days per week',
  targetAudience:
    'Teens ages 11\u201317 who are stepping down from residential treatment or who need more intensive support than outpatient care provides. PHP is ideal for adolescents who are clinically stable enough to be home evenings but require structured daily therapeutic programming.',
  dailySchedule: [
    {
      time: '8:00 AM',
      activity: 'Arrival & Morning Check-In',
      desc: 'Teens check in with their care coordinator to review goals and set intentions for the day.',
    },
    {
      time: '8:30 AM',
      activity: 'Morning Group Therapy',
      desc: 'Process-oriented group session focused on coping skills, emotional regulation, and peer support.',
    },
    {
      time: '10:00 AM',
      activity: 'Individual Therapy',
      desc: 'One-on-one session with assigned therapist using CBT, DBT, or trauma-informed approaches.',
    },
    {
      time: '11:00 AM',
      activity: 'Psychoeducation',
      desc: 'Structured learning about mental health topics, relapse prevention, and healthy relationships.',
    },
    {
      time: '12:00 PM',
      activity: 'Lunch & Social Skills',
      desc: 'Nutritious meal and guided social interaction to practice interpersonal skills.',
    },
    {
      time: '1:00 PM',
      activity: 'Family Therapy / Skills Group',
      desc: 'Rotating schedule of family sessions and therapeutic skill-building activities.',
    },
    {
      time: '2:30 PM',
      activity: 'Afternoon Wrap-Up',
      desc: 'Review of the day, homework assignments, and transition planning for the evening at home.',
    },
    {
      time: '3:00 PM',
      activity: 'Departure',
      desc: 'Teens return home to practice skills in their daily environment with family support.',
    },
  ],
  therapyModalities: [
    'cbt',
    'dbt',
    'trauma-informed-care',
    'individual-therapy',
    'group-therapy',
    'family-therapy',
  ],
  features: [
    'Full-day therapeutic programming (8 AM \u2013 3 PM)',
    'Real-world skill practice each evening at home',
    'Continued family integration and therapy',
    'CBT, DBT, and trauma-informed approaches',
    'Step-down support from residential treatment',
    'Psychiatric monitoring and medication management',
    'Psychoeducation and relapse prevention',
    'Peer support and social skills development',
  ],
  faqs: [
    {
      q: 'What is the difference between PHP and residential treatment?',
      a: 'PHP provides the same clinical intensity as residential treatment during the day, but teens return home each evening. This allows them to practice skills in real-world settings while maintaining structured therapeutic support.',
    },
    {
      q: 'How many days per week is PHP?',
      a: 'PHP runs five days per week, typically Monday through Friday, from approximately 8 AM to 3 PM. Evenings and weekends are spent at home with family.',
    },
    {
      q: 'Can my teen attend school while in PHP?',
      a: 'PHP programming runs during typical school hours, so most teens pause regular school attendance during treatment. Academic support and coordination with their home school are available to minimize disruption.',
    },
    {
      q: 'How do I know if PHP is the right level of care?',
      a: 'PHP is appropriate for teens who need more support than traditional outpatient therapy but are stable enough to be home in the evenings. Our clinical team conducts a comprehensive assessment to determine the right level of care.',
    },
    {
      q: 'What happens after PHP?',
      a: 'Most teens transition to our Intensive Outpatient Program (IOP) after completing PHP. This gradual step-down approach helps maintain progress while increasing independence and return to daily routines.',
    },
  ],
  relatedConditions: [
    'anxiety-treatment',
    'depression-treatment',
    'trauma-ptsd-treatment',
    'dual-diagnosis-treatment',
  ],
  relatedPrograms: ['residential-treatment', 'iop'],
  reviewedBy: 'Dr. Russ Park, DNP',
  reviewDate: '2026-02-01',
}

export const iopProgram: ProgramPageData = {
  slug: 'iop',
  label: 'Intensive Outpatient (IOP)',
  title: 'Focused Support, Flexible Schedule',
  metaTitle: 'Intensive Outpatient Program (IOP) for Teens | Silver State',
  metaDescription:
    'Our IOP offers targeted therapeutic sessions several times per week for teens 11\u201317. Maintain school and daily routines while receiving evidence-based mental health treatment.',
  heroImage: '/assets/hero-iop.webp',
  overview:
    'Our Intensive Outpatient Program offers targeted therapeutic sessions several times per week, designed for teens who need focused clinical support while maintaining their school schedule, friendships, and daily routines. IOP is ideal for adolescents stepping down from higher levels of care or those whose needs exceed traditional weekly outpatient therapy. Teens build on coping skills, emotional regulation, and family communication in a supportive peer group environment.',
  approach:
    'IOP focuses on sustained skill-building and relapse prevention through a combination of individual therapy, group processing, and family involvement. Sessions are scheduled around school hours so teens can maintain academic progress and social connections. The program emphasizes applying therapeutic skills in everyday life with ongoing clinical guidance and family support.',
  duration: 'Typical duration is 6\u201312 weeks, with 3 sessions per week',
  targetAudience:
    'Teens ages 11\u201317 who are stepping down from PHP or residential treatment, or who need more support than weekly outpatient therapy. IOP is designed for adolescents who are stable enough to attend school and manage daily routines but benefit from structured therapeutic sessions multiple times per week.',
  dailySchedule: [
    {
      time: '3:30 PM',
      activity: 'Arrival & Check-In',
      desc: 'Teens arrive after school and check in with their therapist to review the day and set session goals.',
    },
    {
      time: '3:45 PM',
      activity: 'Group Therapy',
      desc: 'Process group focused on coping skills, peer support, and applying therapeutic concepts to daily life.',
    },
    {
      time: '4:45 PM',
      activity: 'Individual or Family Session',
      desc: 'Rotating one-on-one therapy or family therapy session tailored to each teen\u2019s treatment plan.',
    },
    {
      time: '5:30 PM',
      activity: 'Skills Workshop',
      desc: 'Practical skill-building in areas like emotional regulation, communication, and relapse prevention.',
    },
    {
      time: '6:15 PM',
      activity: 'Wrap-Up & Departure',
      desc: 'Session summary, at-home practice assignments, and coordination with parents on progress.',
    },
  ],
  therapyModalities: [
    'cbt',
    'dbt',
    'individual-therapy',
    'group-therapy',
    'family-therapy',
  ],
  features: [
    'After-school sessions (3 days per week)',
    'Maintain school enrollment and daily routines',
    'Step-down transition support from PHP or residential',
    'Individual and group therapy modalities',
    'Family therapy and parent involvement',
    'Relapse prevention and coping skills training',
    'Peer support in a small group setting',
    'Coordination with school counselors and outside providers',
  ],
  faqs: [
    {
      q: 'How many days per week is IOP?',
      a: 'IOP meets three days per week, typically Monday, Wednesday, and Thursday, with sessions scheduled after school hours from approximately 3:30 PM to 6:15 PM.',
    },
    {
      q: 'Can my teen attend school during IOP?',
      a: 'Yes \u2014 that\u2019s one of the primary benefits of IOP. Sessions are intentionally scheduled after school hours so teens can maintain their academic schedule, extracurricular activities, and social connections.',
    },
    {
      q: 'What is the difference between IOP and outpatient therapy?',
      a: 'IOP is more intensive than traditional weekly outpatient therapy, meeting three times per week with a combination of individual, group, and family sessions. It provides a higher level of structure and support while allowing teens to live at home.',
    },
    {
      q: 'How long does the IOP program last?',
      a: 'The typical duration is 6\u201312 weeks, depending on each teen\u2019s progress and treatment goals. Your care team will adjust the timeline as needed and plan a gradual transition to less intensive support.',
    },
    {
      q: 'Is IOP covered by insurance?',
      a: 'Most major insurance plans cover IOP services. Our admissions team verifies insurance benefits and can explain your coverage before treatment begins.',
    },
  ],
  relatedConditions: [
    'anxiety-treatment',
    'depression-treatment',
    'trauma-ptsd-treatment',
    'ocd-treatment',
  ],
  relatedPrograms: ['residential-treatment', 'php'],
  reviewedBy: 'Dr. Russ Park, DNP',
  reviewDate: '2026-02-01',
}

// Convenience exports for route-based lookup and iteration
export const allPrograms: ProgramPageData[] = [residentialProgram, phpProgram, iopProgram]

export const programsBySlug: Record<string, ProgramPageData> = Object.fromEntries(
  allPrograms.map((p) => [p.slug, p]),
)

// Legacy alias for validation script compatibility
export const programPages: ProgramPageData[] = allPrograms
