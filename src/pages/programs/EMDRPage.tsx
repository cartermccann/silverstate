import TherapyPage from './TherapyPage'
import { therapyBySlug } from '../../data/therapies'
import { generateMeta } from '../../utils/meta'

const therapy = therapyBySlug['emdr']!

export const meta = generateMeta({
  title: 'EMDR Therapy for Teens | Silver State',
  description:
    'Adolescent EMDR therapy at Silver State in Las Vegas, NV. Eye Movement Desensitization and Reprocessing helps teens heal from trauma without requiring detailed verbal recounting of distressing events.',
  path: `/programs/${therapy.slug}`,
  keywords: therapy.seoKeywords,
})

export const handle = {
  breadcrumb: { label: 'EMDR', parent: '/programs/therapy-programs' },
}

const faqs = [
  {
    q: 'What does EMDR feel like during a session?',
    a: 'During EMDR, teens follow a therapist-guided stimulus — typically side-to-side eye movements, tapping, or auditory tones — while briefly focusing on a distressing memory. Most adolescents describe the experience as strange at first but not painful. As the brain reprocesses the memory, the emotional charge gradually diminishes. Teens often report that the memory feels more distant or less upsetting after treatment, though they can still recall the events clearly.',
  },
  {
    q: 'How many EMDR sessions does a teenager typically need?',
    a: 'The number of sessions varies depending on the nature and complexity of the trauma. A single traumatic event may resolve in as few as 3 to 6 sessions, while teens with multiple or prolonged traumatic experiences may benefit from a longer course of treatment. At Silver State, EMDR is integrated into each teen\'s individualized care plan, and our clinicians closely monitor progress to ensure the therapy is proceeding at a pace that feels safe and effective.',
  },
  {
    q: 'Is EMDR safe for adolescents?',
    a: 'Yes. EMDR is recognized by the World Health Organization and the American Psychological Association as a safe and effective treatment for trauma and PTSD in both adults and adolescents. Our EMDR-trained clinicians are experienced in adapting the protocol for teens, using age-appropriate language and pacing. One advantage of EMDR for adolescents is that it does not require them to describe their traumatic experience in detail, which can reduce discomfort for teens who are reluctant to talk.',
  },
  {
    q: 'What is the evidence base for EMDR with teens?',
    a: 'A meta-analysis published in the European Journal of Psychotraumatology found that EMDR significantly reduced PTSD symptoms in children and adolescents, with effect sizes comparable to or exceeding those of trauma-focused CBT. The World Health Organization (WHO) and the International Society for Traumatic Stress Studies (ISTSS) both recommend EMDR as a first-line treatment for PTSD in young people. A 2017 randomized controlled trial by de Roos et al., published in the Journal of Child Psychology and Psychiatry, confirmed that EMDR produced faster symptom relief than CBT in trauma-exposed youth.',
  },
  {
    q: 'How many EMDR sessions do teens typically need?',
    a: 'According to EMDR International Association guidelines, adolescents with a single-incident trauma often experience significant relief in 3 to 6 sessions. Teens with complex or repeated trauma may require 12 or more sessions to address multiple traumatic memories and their associated triggers. Research by Ahmad et al. published in the Nordic Journal of Psychiatry found that children and adolescents showed clinically meaningful PTSD symptom reduction within an average of 8 sessions.',
  },
]

export default function EMDRPage() {
  return <TherapyPage therapy={therapy} faqs={faqs} />
}
