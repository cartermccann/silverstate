import TherapyPage from './TherapyPage'
import { therapyBySlug } from '../../data/therapies'
import { generateMeta } from '../../utils/meta'

const therapy = therapyBySlug['cbt']!

export const meta = generateMeta({
  title: 'Cognitive Behavioral Therapy (CBT) for Teens | Silver State',
  description:
    'Adolescent CBT therapy at Silver State in Las Vegas, NV. Evidence-based cognitive behavioral therapy helps teens identify negative thought patterns and develop healthier coping strategies.',
  path: `/programs/${therapy.slug}`,
})

export const handle = {
  breadcrumb: { label: 'CBT', parent: '/programs/therapy-programs' },
}

const faqs = [
  {
    q: 'How long does CBT typically take for teenagers?',
    a: 'Most adolescents see meaningful improvement within 12 to 20 sessions, though the duration depends on the severity of symptoms and the specific condition being treated. At Silver State, CBT is integrated into a comprehensive residential treatment plan, so teens receive more intensive support than a once-a-week outpatient setting. Many teens begin noticing shifts in their thinking patterns within the first few weeks.',
  },
  {
    q: 'What should my teen expect during a CBT session?',
    a: 'In a typical CBT session, the therapist and your teen work together to identify specific thoughts that contribute to distressing emotions or unhelpful behaviors. Sessions are structured and collaborative — your teen might keep a thought record, practice challenging cognitive distortions, or role-play new responses to difficult situations. Between sessions, teens are given practical exercises to reinforce what they have learned.',
  },
  {
    q: 'Is CBT effective for adolescents specifically?',
    a: 'Yes. CBT is one of the most extensively studied therapies for adolescents, with over 2,000 clinical trials supporting its effectiveness for anxiety, depression, OCD, and behavioral disorders in young people. Teens respond particularly well because CBT is skills-based and action-oriented — it gives them concrete tools they can apply immediately in their daily lives.',
  },
]

export default function CBTPage() {
  return <TherapyPage therapy={therapy} faqs={faqs} />
}
