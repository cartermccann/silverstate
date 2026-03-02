import TherapyPage from './TherapyPage'
import { therapyBySlug } from '../../data/therapies'
import { generateMeta } from '../../utils/meta'

const therapy = therapyBySlug['group-therapy']!

export const meta = generateMeta({
  title: 'Group Therapy for Teens | Silver State',
  description:
    'Adolescent group therapy at Silver State in Las Vegas, NV. Small, therapist-led groups help teens build social skills, reduce isolation, and practice healthy communication with peers in a safe, confidential setting.',
  path: `/programs/${therapy.slug}`,
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
]

export default function GroupTherapy() {
  return <TherapyPage therapy={therapy} faqs={faqs} />
}
