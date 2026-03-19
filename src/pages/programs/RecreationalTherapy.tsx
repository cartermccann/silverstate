import TherapyPage from './TherapyPage'
import { therapyBySlug } from '../../data/therapies'
import { generateMeta } from '../../utils/meta'

const therapy = therapyBySlug['recreational-therapy']!

export const meta = generateMeta({
  title: 'Recreational Therapy for Teens | Silver State',
  description:
    'Recreational therapy at Silver State in Las Vegas uses structured activities, sports, and team-building to help teens build confidence, social skills, and healthy coping strategies.',
  path: `/programs/${therapy.slug}`,
  keywords: therapy.seoKeywords,
})

export const handle = {
  breadcrumb: { label: 'Recreational Therapy', parent: '/programs/therapy-programs' },
}

const faqs = [
  {
    q: 'Does my teen need to be athletic to benefit from recreational therapy?',
    a: 'No athletic ability is required. Recreational therapy is adapted to every teen\'s interests and comfort level. Activities range from team sports and hiking to board games and creative projects. The focus is on therapeutic outcomes \u2014 building confidence, social skills, and coping strategies \u2014 not athletic performance.',
  },
  {
    q: 'What does a typical recreational therapy session look like?',
    a: 'Sessions are led by a certified recreational therapist and may include team sports, fitness challenges, outdoor activities, cooperative games, or structured leisure activities. The therapist uses each activity to target specific therapeutic goals such as communication, emotional regulation, frustration tolerance, and teamwork.',
  },
  {
    q: 'Is recreational therapy evidence-based?',
    a: 'Yes. Research published in the Therapeutic Recreation Journal and the American Journal of Recreation Therapy demonstrates that structured recreational interventions reduce symptoms of depression, anxiety, and social withdrawal in adolescents. The American Therapeutic Recreation Association recognizes recreational therapy as an evidence-based practice for improving mental health outcomes.',
  },
  {
    q: 'How does recreational therapy differ from regular recreation time?',
    a: 'Recreational therapy is clinically directed by a certified therapeutic recreation specialist with specific treatment objectives. Unlike free recreation time, each session has defined therapeutic goals, structured interventions, and documented progress. Activities are selected and adapted based on each teen\'s individual treatment plan.',
  },
  {
    q: 'How often do teens participate in recreational therapy?',
    a: 'Recreational therapy is integrated into the weekly schedule throughout a teen\'s residential stay. Most teens participate in structured recreational therapy sessions multiple times per week, in addition to daily recreation time. The frequency and types of activities are adjusted based on each teen\'s treatment goals and progress.',
  },
]

export default function RecreationalTherapy() {
  return <TherapyPage therapy={therapy} faqs={faqs} />
}
