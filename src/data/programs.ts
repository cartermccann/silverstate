import type { ProgramData, ProgramPageData } from '../types'

export const programs: { residential: ProgramData } = {
  residential: {
    label: 'Residential Treatment',
    title: 'Around-the-clock care in a place that feels safe',
    body: 'Our residential program provides 24/7 therapeutic support in a structured, safe environment. Teens receive individualized treatment combining evidence-based therapies, academic continuity through Silver State Youth Academy, and comprehensive family programming designed for lasting change.',
    features: [
      'Individual and group therapy daily',
      'On-site accredited academics (Silver State Youth Academy)',
      'Family therapy and parent education workshops',
      'Experiential, recreational, and adventure therapy',
      'Recreational and meditation therapy',
      'Trauma-informed care throughout',
      'Transition and discharge planning from day one',
    ],
    stat: '4:1 staff-to-client ratio',
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
  heroImage: '/assets/facility-gallery/lobby-reception-desk.jpg',
  sectionImages: ['/assets/stock/residential-teens-smiling.jpg', '/assets/stock/residential-therapy-tablet.jpg'],
  seoKeywords: [
    'teen residential treatment',
    'residential treatment for adolescents',
    'adolescent residential treatment Las Vegas',
    'teen mental health residential program',
    'residential treatment ages 11-17',
  ],
  overview:
    'Residential treatment is the highest level of outpatient care for adolescent mental health, recommended by the Substance Abuse and Mental Health Services Administration (SAMHSA) when a teen\u2019s symptoms are too severe to be safely managed in a less intensive setting.\n\nOur residential program provides 24/7 therapeutic support in a structured, safe environment designed specifically for adolescents ages 11\u201317. Teens live on-site in our Joint Commission\u2013accredited facility, where every element of the environment \u2014 from the daily schedule to the physical space \u2014 is designed to promote healing, safety, and personal growth. With a 4:1 staff-to-client ratio, your teen receives the individualized attention they need to begin building a healthier future.\n\nWhat sets our teen residential treatment program apart is the integration of clinical care, academics, and family involvement into one seamless experience. Teens receive evidence-based therapies including CBT, DBT, and trauma-informed care alongside accredited academic instruction through Silver State Youth Academy, so they never fall behind in school.\n\nOur multidisciplinary team develops a personalized treatment plan for each adolescent that addresses their unique mental health needs, family dynamics, and educational goals.\n\nParents can expect regular communication, measurable progress, and a clear path forward. From the first day of admission through discharge and aftercare, our team works collaboratively with families to ensure that the gains made in residential treatment translate into lasting change at home, at school, and in the community.',
  approach:
    'We combine evidence-based clinical therapies \u2014 including CBT, DBT, EMDR, and trauma-informed care \u2014 with academic continuity and holistic wellness programming to treat the whole adolescent, not just the diagnosis.\n\nEvery teen receives an individualized treatment plan developed by a multidisciplinary team of licensed therapists, board-certified psychiatrists, registered nurses, certified educators, and dedicated support staff. This team meets regularly to review progress, adjust interventions, and ensure each teen is on the strongest possible trajectory.\n\nFamily involvement is integrated from day one through weekly family therapy sessions, parent education workshops, and ongoing communication with your teen\u2019s care coordinator. We believe that lasting recovery happens within the context of the family system, which is why we equip parents with the tools and understanding they need to support their teen\u2019s continued growth.\n\nComprehensive transition and discharge planning begins at admission \u2014 including coordination with outpatient providers and school re-entry support \u2014 so families feel confident and prepared for what comes next.',
  duration: 'Typical stay is 30\u201390 days, individualized to each teen\u2019s progress',
  targetAudience:
    'Residential treatment for adolescents is appropriate for teens ages 11\u201317 whose mental health requires around-the-clock clinical support. This level of care is indicated when a teen is experiencing acute symptoms such as severe depression, anxiety, trauma responses, self-harm, substance use, or suicidal ideation that cannot be safely managed through outpatient therapy alone.\n\nIt is also appropriate when previous outpatient or intensive outpatient treatment has not produced sufficient progress, or when a teen\u2019s home or school environment is contributing to ongoing instability. A structured, therapeutic residential environment provides the safety and consistency needed for stabilization, skill-building, and lasting change.',
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
      desc: 'Pickleball, basketball, yoga, recreational therapy, or off-site adventure therapy.',
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
  scheduleDisclaimer:
    'Sample schedule — individual activities and times may vary based on treatment needs.',
  therapyModalities: [
    'cbt',
    'dbt',
    'trauma-informed-care',
    'individual-therapy',
    'group-therapy',
    'family-therapy',
    'recreational-therapy',
    'adventure-therapy',
    'meditation-mindfulness',
  ],
  features: [
    'Individual and group therapy daily',
    'On-site accredited academics (Silver State Youth Academy)',
    'Family therapy and parent education workshops',
    'Experiential, recreational, and adventure therapy',
    'Recreational and meditation therapy',
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
      a: 'Discharge planning begins on day one. Your care team creates a comprehensive aftercare plan that includes coordination with outpatient providers, school re-entry support, and continued family strategies to maintain progress as your teen transitions back to daily life.',
    },
    {
      q: 'What insurance plans do you accept?',
      a: 'We accept most major insurance plans including United Healthcare, Aetna, Cigna, and BCBS. Our admissions team handles insurance verification and can explain your coverage and any out-of-pocket costs before treatment begins.',
    },
    {
      q: 'Is residential treatment safe for my teen?',
      a: 'Absolutely. Our facility maintains a 4:1 staff-to-client ratio with 24/7 clinical and nursing support. We are Joint Commission Gold Seal accredited and follow strict safety protocols designed specifically for adolescent care.',
    },
    {
      q: 'What should my teen bring to residential treatment?',
      a: 'We provide a detailed packing list during the admissions process. In general, teens should bring comfortable clothing, personal hygiene items, and any approved comfort items from home. Electronics, valuables, and certain other items are restricted for safety and therapeutic purposes. Our admissions coordinator will walk you through everything before your teen\u2019s arrival.',
    },
    {
      q: 'How do you handle psychiatric medication during residential treatment?',
      a: 'Our board-certified psychiatrist conducts a comprehensive evaluation within the first 48 hours of admission. If medication is clinically appropriate, it is carefully managed and monitored by our medical team throughout your teen\u2019s stay. We coordinate closely with your teen\u2019s existing prescribers and provide detailed medication records at discharge to ensure continuity of care.',
    },
  ],
  relatedConditions: [
    'anxiety-treatment',
    'depression-treatment',
    'trauma-ptsd-treatment',
    'substance-abuse-treatment',
    'dual-diagnosis-treatment',
  ],
  relatedPrograms: [],
  reviewedBy: 'Dr. Russ Park, DNP, APRN, PMHNP-BC',
  reviewDate: '2026-02-01',
}

// Convenience exports for route-based lookup and iteration
export const allPrograms: ProgramPageData[] = [residentialProgram]

export const programsBySlug: Record<string, ProgramPageData> = Object.fromEntries(
  allPrograms.map((p) => [p.slug, p]),
)

// Legacy alias for validation script compatibility
export const programPages: ProgramPageData[] = allPrograms
