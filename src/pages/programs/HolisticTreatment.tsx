import TherapyPage from './TherapyPage'
import { therapyBySlug } from '../../data/therapies'
import { generateMeta } from '../../utils/meta'

const therapy = therapyBySlug['holistic-treatment']!

export const meta = generateMeta({
  title: 'Holistic Treatment for Teens | Silver State',
  description:
    'Adolescent holistic treatment at Silver State in Las Vegas addresses mind, body, and spirit through nutrition, fitness, yoga, meditation, and creative arts.',
  path: `/programs/${therapy.slug}`,
})

export const handle = {
  breadcrumb: { label: 'Holistic Treatment', parent: '/programs/therapy-programs' },
}

const faqs = [
  {
    q: 'What does "holistic" mean in the context of teen treatment?',
    a: 'Holistic treatment means addressing the whole person\u2014not just their diagnosis. In addition to clinical therapy, we support each teen\u2019s physical health through nutrition and fitness programming, emotional well-being through creative expression and mindfulness, and social development through group activities and relationship-building. This integrated approach leads to more lasting recovery.',
  },
  {
    q: 'Is holistic treatment used alongside traditional therapy?',
    a: 'Yes. Holistic activities complement and reinforce clinical therapy\u2014they never replace it. For example, a teen working on anxiety in individual therapy might also practice yoga and mindfulness to build body awareness and relaxation skills. The holistic and clinical components work together to support the same treatment goals.',
  },
  {
    q: 'What holistic activities are available to teens?',
    a: 'Our holistic programming includes yoga, guided meditation, nutrition education, physical fitness activities, art and music expression, journaling, nature-based mindfulness walks, and recreational therapy. Each teen\u2019s schedule is personalized to include activities that best support their individual treatment plan and interests.',
  },
]

export default function HolisticTreatment() {
  return <TherapyPage therapy={therapy} faqs={faqs} />
}
