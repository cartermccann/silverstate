import TherapyPage from './TherapyPage'
import { therapyBySlug } from '../../data/therapies'
import { generateMeta } from '../../utils/meta'

const therapy = therapyBySlug['meditation-mindfulness']!

export const meta = generateMeta({
  title: 'Meditation & Mindfulness for Teens | Silver State',
  description:
    'Adolescent meditation and mindfulness therapy at Silver State in Las Vegas teaches teens present-moment awareness and emotional regulation skills.',
  path: `/programs/${therapy.slug}`,
})

export const handle = {
  breadcrumb: { label: 'Meditation & Mindfulness', parent: '/programs/therapy-programs' },
}

const faqs = [
  {
    q: 'Do teens actually enjoy meditation and mindfulness practice?',
    a: 'Many teens are initially skeptical, but our therapists use age-appropriate, engaging techniques\u2014such as guided imagery, breathing games, and movement-based mindfulness\u2014that meet adolescents where they are. Most teens report feeling calmer and more focused after just a few sessions, which builds genuine motivation to continue practicing.',
  },
  {
    q: 'How often do teens practice mindfulness during treatment?',
    a: 'Mindfulness is integrated into the daily schedule. Teens participate in structured meditation sessions several times per week and are encouraged to use brief mindfulness techniques\u2014like deep breathing and body scans\u2014throughout the day as part of their coping toolkit.',
  },
  {
    q: 'Does mindfulness really help with teen anxiety?',
    a: 'Yes. Multiple clinical studies, including research published in the Journal of Child and Family Studies, demonstrate that mindfulness-based interventions significantly reduce anxiety symptoms in adolescents. Mindfulness helps teens observe anxious thoughts without reacting to them, breaking the cycle of worry and avoidance.',
  },
]

export default function MeditationTherapy() {
  return <TherapyPage therapy={therapy} faqs={faqs} />
}
