import TherapyPage from './TherapyPage'
import { therapyBySlug } from '../../data/therapies'
import { generateMeta } from '../../utils/meta'

const therapy = therapyBySlug['group-therapy']!

export const meta = generateMeta({
  title: 'Group Therapy for Teens | Silver State',
  description:
    'Adolescent group therapy at Silver State in Las Vegas, NV. Small, therapist-led groups help teens build social skills, reduce isolation, and practice healthy communication with peers in a safe, confidential setting.',
  path: `/programs/${therapy.slug}`,
  keywords: therapy.seoKeywords,
})

export const handle = {
  breadcrumb: { label: 'Group Therapy', parent: '/programs/therapy-programs' },
}

const faqs = [
  {
    q: 'How many teens are in each therapy group?',
    a: 'Group therapy sessions at Silver State typically include 6 to 10 adolescents, led by a licensed therapist. This size is intentional — large enough that teens benefit from diverse perspectives and peer support, but small enough that every participant has the opportunity to be heard. Groups are composed thoughtfully based on age, treatment needs, and clinical readiness to ensure a productive and supportive dynamic for all members.',
  },
  {
    q: 'Is my teen required to share personal information in group therapy?',
    a: 'No teen is ever forced to share. Our therapists create a safe, confidential environment where participation is encouraged but never coerced. Many teens start by listening and gradually become more comfortable contributing as they build trust with the group. Even teens who are initially reluctant often find that hearing peers share similar struggles reduces their own sense of isolation. Therapists use structured activities and discussion prompts that allow teens to engage at whatever level feels right for them.',
  },
  {
    q: 'How are group therapy sessions structured?',
    a: 'Each group session follows a consistent format that includes a check-in, a focused topic or skill-building activity, group discussion, and a closing reflection. Topics rotate through areas such as coping skills, communication, emotional regulation, healthy relationships, and relapse prevention. Some groups are psychoeducational, teaching specific skills like DBT distress tolerance techniques, while others are process-oriented, allowing teens to explore interpersonal dynamics in real time. This variety ensures that adolescents develop a well-rounded set of skills throughout their treatment.',
  },
  {
    q: 'What is the evidence base for group therapy with teens?',
    a: 'A meta-analysis published in the Journal of Clinical Child & Adolescent Psychology by Weisz et al. found that group-based interventions produce significant improvements in depression, anxiety, and behavioral problems among adolescents. The American Group Psychotherapy Association (AGPA) cites decades of research confirming that group therapy is particularly effective for teens because it leverages the power of peer relationships, which are developmentally central during adolescence. Studies in Psychotherapy Research also show that group cohesion — the bond formed between group members — is one of the strongest predictors of positive outcomes in adolescent group treatment.',
  },
  {
    q: 'How many group therapy sessions do teens typically need?',
    a: 'Research published in the Journal of the American Academy of Child & Adolescent Psychiatry suggests that adolescents benefit from a minimum of 8 to 12 structured group sessions for skill-building groups such as DBT skills or social skills training. Process-oriented groups are typically ongoing throughout the duration of residential treatment. At Silver State, teens participate in multiple group sessions per week, which allows them to build trust with peers more quickly and practice interpersonal skills in real time across a range of group formats.',
  },
]

export default function GroupTherapy() {
  return <TherapyPage therapy={therapy} faqs={faqs} />
}
