import TherapyPage from './TherapyPage'
import { therapyBySlug } from '../../data/therapies'
import { generateMeta } from '../../utils/meta'

const therapy = therapyBySlug['individual-therapy']!

export const meta = generateMeta({
  title: 'Individual Therapy for Teens | Silver State',
  description:
    'Adolescent individual therapy at Silver State in Las Vegas provides personalized one-on-one counseling tailored to each teen\u2019s unique mental health needs.',
  path: `/programs/${therapy.slug}`,
})

export const handle = {
  breadcrumb: { label: 'Individual Therapy', parent: '/programs/therapy-programs' },
}

const faqs = [
  {
    q: 'How often do teens have individual therapy sessions?',
    a: 'Teens typically meet with their individual therapist two to three times per week. Session frequency is adjusted based on each adolescent\u2019s treatment plan, clinical needs, and progress in the program.',
  },
  {
    q: 'Can my teen choose or request a specific therapist?',
    a: 'We carefully match each teen with a therapist based on clinical expertise, personality fit, and the adolescent\u2019s specific challenges. If a teen or family feels the match isn\u2019t working, we will reassign to a different therapist to ensure a strong therapeutic relationship.',
  },
  {
    q: 'What therapeutic modalities are used in individual sessions?',
    a: 'Our therapists draw from multiple evidence-based approaches including Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), trauma-focused interventions, and motivational interviewing. The specific techniques used are tailored to each teen\u2019s diagnosis and treatment goals.',
  },
]

export default function IndividualTherapy() {
  return <TherapyPage therapy={therapy} faqs={faqs} />
}
