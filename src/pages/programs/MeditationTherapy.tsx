import TherapyPage from './TherapyPage'
import { therapyBySlug } from '../../data/therapies'
import { generateMeta } from '../../utils/meta'

const therapy = therapyBySlug['meditation-mindfulness']!

export const meta = generateMeta({
  title: 'Meditation & Mindfulness for Teens | Silver State',
  description:
    'Adolescent meditation and mindfulness therapy at Silver State in Las Vegas teaches teens present-moment awareness and emotional regulation skills.',
  path: `/programs/${therapy.slug}`,
  keywords: therapy.seoKeywords,
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
  {
    q: 'What is the evidence base for meditation and mindfulness with teens?',
    a: 'A meta-analysis published in Clinical Psychology Review by Zoogman et al. found that mindfulness-based interventions produced significant improvements in stress, anxiety, depression, and attention in youth populations. Research from the University of Oxford Mindfulness Centre demonstrated that Mindfulness-Based Cognitive Therapy for Adolescents (MBCT-A) significantly reduced depressive relapse in teens with a history of recurrent depression. The American Academy of Pediatrics has recognized mindfulness as a promising adjunctive approach for managing adolescent anxiety and stress-related conditions.',
  },
  {
    q: 'How many meditation and mindfulness sessions do teens typically need?',
    a: 'The standard Mindfulness-Based Stress Reduction (MBSR) protocol adapted for adolescents consists of 8 weekly sessions, each lasting 60 to 90 minutes, as documented in research published in the Journal of Child and Family Studies. Studies by Biegel et al. in the Journal of Consulting and Clinical Psychology found that teens who completed an 8-week MBSR program showed significant reductions in anxiety, depression, and somatic distress. At Silver State, mindfulness practice is integrated into the daily schedule, giving teens consistent exposure that reinforces the skills beyond a fixed session count.',
  },
]

export default function MeditationTherapy() {
  return <TherapyPage therapy={therapy} faqs={faqs} />
}
