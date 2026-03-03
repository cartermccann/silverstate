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
  heroImage: '/assets/facility/lobby-reception.webp',
  sectionImages: ['/assets/stock/residential-teens-smiling.jpg', '/assets/stock/residential-therapy-tablet.jpg'],
  seoKeywords: [
    'teen residential treatment',
    'residential treatment for adolescents',
    'adolescent residential treatment Las Vegas',
    'teen mental health residential program',
    'residential treatment ages 11-17',
  ],
  overview:
    'Residential treatment is the highest level of outpatient care for adolescent mental health, recommended by the Substance Abuse and Mental Health Services Administration (SAMHSA) when a teen\u2019s symptoms are too severe to be safely managed in a less intensive setting. Our residential program provides 24/7 therapeutic support in a structured, safe environment designed specifically for adolescents ages 11\u201317. Teens live on-site in our Joint Commission\u2013accredited facility, where every element of the environment \u2014 from the daily schedule to the physical space \u2014 is designed to promote healing, safety, and personal growth. With a 4:1 staff-to-client ratio, your teen receives the individualized attention they need to begin building a healthier future.\n\nWhat sets our teen residential treatment program apart is the integration of clinical care, academics, and family involvement into one seamless experience. Teens receive evidence-based therapies including CBT, DBT, and trauma-informed care alongside accredited academic instruction through Silver State Youth Academy, so they never fall behind in school. Our multidisciplinary team develops a personalized treatment plan for each adolescent that addresses their unique mental health needs, family dynamics, and educational goals.\n\nParents can expect regular communication, measurable progress, and a clear path forward. From the first day of admission through discharge and aftercare, our team works collaboratively with families to ensure that the gains made in residential treatment translate into lasting change at home, at school, and in the community.',
  approach:
    'We combine evidence-based clinical therapies \u2014 including CBT, DBT, EMDR, and trauma-informed care \u2014 with academic continuity and holistic wellness programming to treat the whole adolescent, not just the diagnosis. Every teen receives an individualized treatment plan developed by a multidisciplinary team of licensed therapists, board-certified psychiatrists, registered nurses, certified educators, and dedicated support staff. This team meets regularly to review progress, adjust interventions, and ensure each teen is on the strongest possible trajectory.\n\nFamily involvement is integrated from day one through weekly family therapy sessions, parent education workshops, and ongoing communication with your teen\u2019s care coordinator. We believe that lasting recovery happens within the context of the family system, which is why we equip parents with the tools and understanding they need to support their teen\u2019s continued growth. Comprehensive transition and discharge planning begins at admission \u2014 including step-down to our PHP or IOP program, coordination with outpatient providers, and school re-entry support \u2014 so families feel confident and prepared for what comes next.',
  duration: 'Typical stay is 30\u201390 days, individualized to each teen\u2019s progress',
  targetAudience:
    'Residential treatment for adolescents is appropriate for teens ages 11\u201317 whose mental health requires around-the-clock clinical support. This level of care is indicated when a teen is experiencing acute symptoms such as severe depression, anxiety, trauma responses, self-harm, substance use, or suicidal ideation that cannot be safely managed through outpatient therapy alone. It is also appropriate when previous outpatient or intensive outpatient treatment has not produced sufficient progress, or when a teen\u2019s home or school environment is contributing to ongoing instability. A structured, therapeutic residential environment provides the safety and consistency needed for stabilization, skill-building, and lasting change.',
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
  heroImage: '/assets/facility/therapy-room.webp',
  sectionImages: ['/assets/stock/cbt-session.jpg', '/assets/stock/group-therapy-led.jpg'],
  seoKeywords: [
    'partial hospitalization program adolescent',
    'teen partial hospitalization',
    'adolescent PHP treatment Las Vegas',
    'teen PHP program',
    'partial hospitalization ages 11-17',
  ],
  overview:
    'Partial hospitalization programs (PHP) are recognized by the American Psychiatric Association as an effective level of care for adolescents who require more intensive treatment than outpatient therapy but can safely return home each evening. Our PHP provides full clinical intensity during the day with the flexibility to return home each evening, making it a vital step in the continuum of adolescent mental health care. Designed for teens ages 11\u201317, PHP serves as a critical bridge between residential treatment and independent living \u2014 or as a standalone level of care for adolescents who need more support than outpatient therapy can provide. Teens attend programming five days per week and receive the same evidence-based therapies as our residential program in a supportive, structured environment.\n\nWhat makes our adolescent partial hospitalization program uniquely effective is the balance between clinical rigor and real-world application. During the day, teens engage in intensive individual therapy, group processing, family sessions, and psychoeducation led by licensed clinicians. Each evening, they return home to practice the coping strategies, communication skills, and healthy routines they are learning in treatment \u2014 with their families actively involved in the process.\n\nParents can expect to see their teen developing greater emotional regulation, stronger family communication, and practical skills for managing the challenges that brought them to treatment. Our care team provides regular progress updates and works with each family to ensure a smooth, supported transition to the next phase of care.',
  approach:
    'Our PHP combines intensive clinical therapy with structured real-world practice, creating a treatment experience that builds both insight and practical skill. During daytime hours, teens participate in individual therapy using CBT, DBT, and trauma-informed modalities, process-oriented group sessions, family therapy, and targeted skill-building activities. Each session is facilitated by licensed clinicians who specialize in adolescent mental health and collaborate as a multidisciplinary team \u2014 including therapists, a psychiatrist, and family counselors \u2014 to ensure coordinated, comprehensive care.\n\nFamily involvement is a cornerstone of our PHP approach. Parents participate in weekly family therapy, receive psychoeducation on their teen\u2019s diagnosis and treatment strategies, and have regular check-ins with the care coordinator. Each evening, teens return home to apply what they have learned, and the clinical team uses those real-world experiences to refine and strengthen the treatment plan. Transition planning is woven throughout the program, with clear benchmarks guiding the step-down to our IOP or to community-based outpatient providers.',
  duration: 'Typical duration is 4\u20136 weeks, with sessions 5 days per week',
  targetAudience:
    'Our adolescent partial hospitalization program is designed for teens ages 11\u201317 who are stepping down from residential treatment or who need more intensive support than outpatient care provides. PHP is appropriate when a teen is clinically stable enough to be home in the evenings but continues to experience symptoms \u2014 such as persistent depression, anxiety, self-harm urges, or difficulty functioning at school \u2014 that require structured daily therapeutic programming. It is also indicated when a teen has completed residential treatment and needs a supported transition back to family life, or when an initial clinical assessment determines that outpatient-level care is insufficient to address the teen\u2019s needs safely.',
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
    {
      q: 'How is my teen\u2019s progress measured during PHP?',
      a: 'Our clinical team uses standardized outcome measures, treatment plan reviews, and regular family check-ins to track your teen\u2019s progress. You will receive updates from your teen\u2019s care coordinator at least weekly, and the treatment plan is adjusted based on measurable clinical benchmarks to ensure your teen is making meaningful gains.',
    },
    {
      q: 'What insurance plans cover PHP?',
      a: 'Most major insurance plans cover partial hospitalization services for adolescents. Our admissions team handles insurance verification before treatment begins and will walk you through your coverage, including any out-of-pocket costs, so there are no surprises.',
    },
    {
      q: 'Can PHP be a first step instead of residential treatment?',
      a: 'Yes. While many teens enter PHP as a step-down from residential care, it is also appropriate as a first level of treatment for adolescents whose clinical needs exceed what outpatient therapy can address but who are stable enough to be home in the evenings. Our clinical team will determine the right fit during the initial assessment.',
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
  heroImage: '/assets/facility/common-area.webp',
  sectionImages: ['/assets/stock/individual-therapy-full.jpg', '/assets/stock/group-therapy-program.jpg'],
  seoKeywords: [
    'intensive outpatient program for teens',
    'teen IOP program',
    'adolescent IOP treatment Las Vegas',
    'teen intensive outpatient',
    'IOP for adolescents ages 11-17',
  ],
  overview:
    'Intensive outpatient programs (IOP) are recommended by the Substance Abuse and Mental Health Services Administration (SAMHSA) as an effective level of care for adolescents with moderate symptoms who can safely function in their home and school environments between sessions. Our IOP offers targeted therapeutic sessions several times per week, designed for teens ages 11\u201317 who need focused clinical support while maintaining their school schedule, friendships, and daily routines. IOP is ideal for adolescents stepping down from higher levels of care \u2014 such as our residential or PHP programs \u2014 or for those whose needs exceed what traditional weekly outpatient therapy can provide. Teens build on coping skills, emotional regulation, and family communication in a supportive peer group environment.\n\nWhat makes our teen IOP program distinctive is the emphasis on applying therapeutic skills in the context of everyday life. Sessions are scheduled after school hours so teens continue attending classes, participating in extracurricular activities, and maintaining the social connections that are so important to adolescent development. At the same time, they receive the structured clinical support needed to sustain the progress they have made and continue moving forward.\n\nParents can expect their teen to develop greater independence in managing their mental health, stronger communication within the family, and a personalized relapse prevention plan that supports long-term well-being. Our care team maintains close contact with families throughout the program and coordinates with school counselors and outside providers to ensure a fully supported recovery.',
  approach:
    'Our teen IOP program focuses on sustained skill-building and relapse prevention through a carefully designed combination of individual therapy, group processing, and active family involvement. Licensed clinicians use evidence-based modalities including CBT and DBT to help teens strengthen the coping strategies and emotional regulation skills they have developed in earlier phases of treatment \u2014 or to build these skills for the first time in a focused, structured setting. Each teen\u2019s treatment plan is individualized and regularly reviewed by our multidisciplinary clinical team.\n\nFamily participation is an essential component of our intensive outpatient program for teens. Parents and caregivers attend family therapy sessions, receive guidance on reinforcing therapeutic skills at home, and have regular communication with the clinical team about their teen\u2019s progress. Sessions are scheduled around school hours so teens can maintain academic progress and social connections while receiving care. As teens approach the end of the program, our team develops a comprehensive transition plan that includes coordination with outpatient therapists, school counselors, and any other community supports to ensure continuity of care.',
  duration: 'Typical duration is 6\u201312 weeks, with 3 sessions per week',
  targetAudience:
    'Our intensive outpatient program for teens is designed for adolescents ages 11\u201317 who are stepping down from PHP or residential treatment, or who need more support than weekly outpatient therapy can provide. IOP is appropriate for teens who are clinically stable enough to attend school and manage daily routines but continue to experience symptoms \u2014 such as anxiety, depression, mood instability, or difficulty with peer and family relationships \u2014 that benefit from structured therapeutic sessions multiple times per week. It is also a strong fit for teens returning from a crisis stabilization or hospitalization who need a supported re-entry into their daily environment.',
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
  therapyModalities: ['cbt', 'dbt', 'individual-therapy', 'group-therapy', 'family-therapy'],
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
    {
      q: 'What happens when my teen completes IOP?',
      a: 'As your teen nears the end of the IOP program, our clinical team develops a comprehensive aftercare plan. This typically includes a transition to weekly outpatient therapy, continued family support strategies, and coordination with school counselors or community providers. The goal is to ensure your teen has a strong support network in place for sustained well-being.',
    },
    {
      q: 'Can my teen start IOP without first going through residential or PHP?',
      a: 'Yes. While many teens enter IOP as a step-down from a higher level of care, it is also appropriate as an initial treatment option for adolescents who need more support than weekly therapy but are stable enough to maintain their school schedule and daily routines. Our clinical team determines the right level of care during the intake assessment.',
    },
    {
      q: 'How is family involved in the IOP program?',
      a: 'Family involvement is built into every phase of IOP. Parents and caregivers participate in scheduled family therapy sessions, receive regular updates from the clinical team, and are given practical strategies to reinforce their teen\u2019s progress at home. We also coordinate with school counselors and any outside providers to ensure everyone supporting your teen is aligned.',
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
