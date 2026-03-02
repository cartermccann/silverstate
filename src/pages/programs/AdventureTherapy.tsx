import TherapyPage from './TherapyPage'
import { therapyBySlug } from '../../data/therapies'
import { generateMeta } from '../../utils/meta'

const therapy = therapyBySlug['adventure-therapy']!

export const meta = generateMeta({
  title: 'Adventure Therapy for Teens | Silver State',
  description:
    'Adolescent adventure therapy at Silver State in Las Vegas builds confidence and resilience through guided outdoor activities and experiential challenges.',
  path: `/programs/${therapy.slug}`,
})

export const handle = {
  breadcrumb: { label: 'Adventure Therapy', parent: '/programs/therapy-programs' },
}

const faqs = [
  {
    q: 'What activities are included in adventure therapy?',
    a: 'Activities may include hiking, rock climbing, team-building exercises, ropes courses, and nature-based mindfulness walks. Each activity is facilitated by trained therapists who help teens connect the outdoor experience to their personal growth and treatment goals.',
  },
  {
    q: 'Is adventure therapy safe for my teen?',
    a: 'Safety is our top priority. All adventure activities are supervised by trained and certified staff, follow strict safety protocols, and are adapted to each teen\u2019s physical abilities and comfort level. Risk assessments are conducted before every activity, and participation is always voluntary.',
  },
  {
    q: 'How does outdoor activity help with mental health?',
    a: 'Research shows that spending time outdoors reduces cortisol levels, improves mood, and decreases symptoms of anxiety and depression. Combined with therapeutic facilitation, adventure activities help teens build self-efficacy, practice healthy risk-taking, and develop trust in themselves and others\u2014skills that directly support their recovery.',
  },
]

export default function AdventureTherapy() {
  return <TherapyPage therapy={therapy} faqs={faqs} />
}
