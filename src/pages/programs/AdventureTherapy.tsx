import TherapyPage from './TherapyPage'
import { therapyBySlug } from '../../data/therapies'
import { generateMeta } from '../../utils/meta'

const therapy = therapyBySlug['adventure-therapy']!

export const meta = generateMeta({
  title: 'Adventure Therapy for Teens | Silver State',
  description:
    'Adolescent adventure therapy at Silver State in Las Vegas builds confidence and resilience through guided outdoor activities and experiential challenges.',
  path: `/programs/${therapy.slug}`,
  keywords: therapy.seoKeywords,
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
  {
    q: 'What is the evidence base for adventure therapy with teens?',
    a: 'A meta-analysis published in the Journal of Experiential Education by Bowen and Neill found that adventure therapy programs produced significant improvements in self-concept, behavioral outcomes, and clinical symptom reduction in adolescents. The Outdoor Behavioral Healthcare Council (OBHC) has published outcomes data from over 10,000 youth showing sustained improvements in depression, anxiety, and family functioning at 12-month follow-up. Research in the journal Ecopsychology also confirms that nature-based therapeutic interventions reduce stress biomarkers and improve emotional regulation in young people.',
  },
  {
    q: 'How many adventure therapy sessions do teens typically need?',
    a: 'According to outcomes research published by the Outdoor Behavioral Healthcare Council, adolescents typically show measurable clinical improvement after 8 to 12 weeks of consistent adventure therapy programming. A study in the Journal of Therapeutic Schools and Programs found that teens who participated in at least 10 structured adventure therapy sessions demonstrated significant gains in self-efficacy and interpersonal skills. At Silver State, adventure therapy activities are scheduled regularly throughout each teen\'s residential stay, ensuring ongoing experiential learning and therapeutic growth.',
  },
]

export default function AdventureTherapy() {
  return <TherapyPage therapy={therapy} faqs={faqs} />
}
