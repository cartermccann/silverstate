import TherapyPage from './TherapyPage'
import { therapyBySlug } from '../../data/therapies'
import { generateMeta } from '../../utils/meta'

const therapy = therapyBySlug['dbt']!

export const meta = generateMeta({
  title: 'Dialectical Behavior Therapy (DBT) for Teens | Silver State',
  description:
    'Adolescent DBT therapy at Silver State in Las Vegas, NV. Dialectical behavior therapy teaches teens mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness skills.',
  path: `/programs/${therapy.slug}`,
  keywords: therapy.seoKeywords,
})

export const handle = {
  breadcrumb: { label: 'DBT', parent: '/programs/therapy-programs' },
}

const faqs = [
  {
    q: 'What is the difference between DBT and CBT?',
    a: 'While both are evidence-based therapies, they address different needs. CBT focuses primarily on identifying and changing negative thought patterns. DBT builds on CBT by adding mindfulness and acceptance-based strategies, making it especially effective for teens who experience intense, rapidly shifting emotions. DBT also teaches four specific skill modules — mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness — that give adolescents practical tools for managing overwhelming feelings.',
  },
  {
    q: 'What are the four DBT skills modules?',
    a: 'The four core modules are mindfulness (staying present and aware without judgment), distress tolerance (surviving emotional crises without making them worse), emotion regulation (understanding and managing intense feelings), and interpersonal effectiveness (communicating needs and maintaining healthy relationships). At Silver State, teens practice these skills in both individual therapy sessions and structured skills groups, reinforcing what they learn through real-world application.',
  },
  {
    q: 'Can DBT help a teen who is engaging in self-harm?',
    a: 'DBT was originally developed specifically to treat self-destructive behaviors, and it remains one of the most effective therapies for reducing self-harm in adolescents. The distress tolerance module teaches teens alternative ways to cope with emotional pain, while the emotion regulation module helps them understand and manage the intense feelings that drive self-harm urges. Research shows that DBT significantly reduces self-harm behaviors and suicidal ideation in teens.',
  },
  {
    q: 'What is the evidence base for DBT with teens?',
    a: 'A randomized controlled trial published in the Journal of the American Academy of Child & Adolescent Psychiatry by Mehlum et al. (2014) demonstrated that DBT significantly reduced self-harm, suicidal ideation, and depressive symptoms in adolescents compared to enhanced usual care. The adapted adolescent model, DBT-A, was developed by Alec Miller and Jill Rathus and has since been validated in multiple international trials. SAMHSA lists DBT as an evidence-based program for youth with emotion dysregulation and self-destructive behaviors.',
  },
  {
    q: 'How many DBT sessions do teens typically need?',
    a: 'The standard DBT-A protocol spans approximately 16 to 24 weeks and includes weekly individual therapy sessions plus weekly skills group sessions, as outlined by Miller, Rathus, and Linehan in their clinical manual. In a residential program like Silver State, teens engage in DBT skills training multiple times per week, which intensifies the learning process. Research from the Journal of Consulting and Clinical Psychology indicates that most adolescents show measurable improvement in emotion regulation within the first 8 to 12 weeks of consistent DBT participation.',
  },
]

export default function DBTPage() {
  return <TherapyPage therapy={therapy} faqs={faqs} />
}
