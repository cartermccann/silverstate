import TherapyPage from './TherapyPage'
import { therapyBySlug } from '../../data/therapies'
import { generateMeta } from '../../utils/meta'

const therapy = therapyBySlug['individual-therapy']!

export const meta = generateMeta({
  title: 'Individual Therapy for Teens | Silver State',
  description:
    'Adolescent individual therapy at Silver State in Las Vegas provides personalized one-on-one counseling tailored to each teen\u2019s unique mental health needs.',
  path: `/programs/${therapy.slug}`,
  keywords: therapy.seoKeywords,
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
  {
    q: 'What is the evidence base for individual therapy with teens?',
    a: 'A comprehensive meta-analysis published in Psychological Bulletin by Weisz et al. reviewed over 500 studies and found that individual psychotherapy produces significant positive effects for children and adolescents across a wide range of mental health conditions. The American Psychological Association\'s Division 53 (Society of Clinical Child and Adolescent Psychology) maintains a continuously updated list of evidence-based individual therapies for youth, confirming that one-on-one treatment is the most extensively studied format in adolescent mental health care.',
  },
  {
    q: 'How many individual therapy sessions do teens typically need?',
    a: 'According to research published in the Journal of Consulting and Clinical Psychology, the typical course of individual therapy for adolescents ranges from 12 to 30 sessions, depending on the diagnosis and severity. Studies reviewed by the National Institute of Mental Health indicate that teens in residential settings who receive two or more individual sessions per week show faster symptom improvement than those receiving weekly outpatient sessions alone. At Silver State, session frequency is tailored to each teen\'s clinical needs and adjusted as they progress through treatment.',
  },
]

export default function IndividualTherapy() {
  return <TherapyPage therapy={therapy} faqs={faqs} />
}
