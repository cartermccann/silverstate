import TherapyPage from './TherapyPage'
import { therapyBySlug } from '../../data/therapies'
import { generateMeta } from '../../utils/meta'

const therapy = therapyBySlug['trauma-informed-care']!

export const meta = generateMeta({
  title: 'Trauma-Informed Care for Teens | Silver State',
  description:
    'Adolescent trauma-informed care at Silver State in Las Vegas ensures every aspect of treatment promotes safety, trust, and empowerment for teens who have experienced trauma.',
  path: `/programs/${therapy.slug}`,
  keywords: therapy.seoKeywords,
})

export const handle = {
  breadcrumb: { label: 'Trauma-Informed Care', parent: '/programs/therapy-programs' },
}

const faqs = [
  {
    q: 'What makes care "trauma-informed"?',
    a: 'Trauma-informed care means that every staff member\u2014from therapists to residential counselors\u2014understands how trauma affects the brain and behavior. Policies, routines, and interactions are designed to promote physical and emotional safety, avoid re-traumatization, and give teens a sense of choice and control in their treatment. It is a philosophy that shapes the entire treatment environment.',
  },
  {
    q: 'Is trauma-informed care only for teens diagnosed with PTSD?',
    a: 'No. Trauma-informed care benefits all teens in treatment, not just those with a PTSD diagnosis. Research shows that many adolescents entering behavioral health treatment have experienced some form of adverse childhood experience. By creating a universally safe environment, trauma-informed care supports every teen\u2019s healing, regardless of their primary diagnosis.',
  },
  {
    q: 'How does trauma-informed care differ from trauma therapy?',
    a: 'Trauma therapy (such as EMDR or TF-CBT) is a specific clinical intervention that directly processes traumatic memories. Trauma-informed care is broader\u2014it is an organizational approach that ensures the entire treatment environment is safe and supportive for trauma survivors. At Silver State, we provide both: a trauma-informed environment for all teens and specialized trauma therapies for those who need targeted trauma processing.',
  },
  {
    q: 'What is the evidence base for trauma-informed care with teens?',
    a: 'Research by the Kaiser Permanente ACE (Adverse Childhood Experiences) Study, one of the largest investigations of the impact of childhood trauma on health, established the scientific foundation for trauma-informed approaches in healthcare settings. A study published in the Journal of Child & Adolescent Trauma found that residential programs implementing trauma-informed care frameworks reported significant reductions in seclusion, restraint, and behavioral incidents among adolescents. SAMHSA\'s National Center for Trauma-Informed Care cites growing evidence that organization-wide trauma-informed practices improve both client outcomes and staff retention in youth-serving programs.',
  },
  {
    q: 'How long do teens typically need trauma-informed care?',
    a: 'Trauma-informed care is not a time-limited intervention with a fixed session count — it is an ongoing framework that shapes the entire treatment environment. According to SAMHSA\'s Concept of Trauma and Guidance for a Trauma-Informed Approach, the principles of safety, trustworthiness, peer support, collaboration, and empowerment should be present throughout every phase of treatment. At Silver State, trauma-informed practices are embedded in every interaction from admission through discharge and aftercare, ensuring that each teen\'s experience of care is consistently safe and supportive regardless of their length of stay.',
  },
]

export default function TraumaInformedCare() {
  return <TherapyPage therapy={therapy} faqs={faqs} />
}
