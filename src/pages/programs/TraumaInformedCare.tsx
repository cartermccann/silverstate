import TherapyPage from './TherapyPage'
import { therapyBySlug } from '../../data/therapies'
import { generateMeta } from '../../utils/meta'

const therapy = therapyBySlug['trauma-informed-care']!

export const meta = generateMeta({
  title: 'Trauma-Informed Care for Teens | Silver State',
  description:
    'Adolescent trauma-informed care at Silver State in Las Vegas ensures every aspect of treatment promotes safety, trust, and empowerment for teens who have experienced trauma.',
  path: `/programs/${therapy.slug}`,
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
]

export default function TraumaInformedCare() {
  return <TherapyPage therapy={therapy} faqs={faqs} />
}
