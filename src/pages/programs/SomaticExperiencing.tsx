import TherapyPage from './TherapyPage'
import { therapyBySlug } from '../../data/therapies'
import { generateMeta } from '../../utils/meta'

const therapy = therapyBySlug['somatic-experiencing']!

export const meta = generateMeta({
  title: 'Somatic Experiencing Therapy for Teens | Silver State',
  description:
    'Adolescent somatic experiencing therapy at Silver State in Las Vegas, NV. This body-oriented approach helps teens release stored trauma and regulate their nervous system through guided awareness of physical sensations.',
  path: `/programs/${therapy.slug}`,
})

export const handle = {
  breadcrumb: { label: 'Somatic Experiencing', parent: '/programs/therapy-programs' },
}

const faqs = [
  {
    q: 'What happens during a somatic experiencing session?',
    a: 'In a somatic experiencing session, the therapist gently guides your teen to notice physical sensations in their body — such as tension, warmth, tingling, or tightness — that are connected to stress or trauma. The therapist helps the adolescent slowly process these sensations at a manageable pace, allowing the nervous system to complete its natural stress response cycle. Sessions are calm and gradual; there is no pressure to relive traumatic events verbally. Over time, teens develop greater body awareness and the ability to self-regulate.',
  },
  {
    q: 'Does somatic experiencing involve physical touch?',
    a: 'Somatic experiencing can be practiced entirely without physical contact. While some somatic practitioners may use light, consensual touch to help a client notice areas of tension or support nervous system regulation, this is never required and is always discussed beforehand. At Silver State, our clinicians prioritize each teen\'s comfort and autonomy. All sessions are guided verbally unless the adolescent and their care team agree that supportive touch would be beneficial, and consent is obtained every time.',
  },
  {
    q: 'How does somatic experiencing help teens who have experienced trauma?',
    a: 'Trauma often becomes stored in the body as chronic muscle tension, heightened startle responses, or a persistently activated fight-or-flight state. Somatic experiencing works directly with these physical manifestations, helping the body release trapped survival energy that talk therapy alone may not reach. For teens who struggle to articulate their experiences verbally — or who become overwhelmed when discussing traumatic events — somatic experiencing provides a gentler pathway to healing that respects the body\'s own pace of recovery.',
  },
]

export default function SomaticExperiencing() {
  return <TherapyPage therapy={therapy} faqs={faqs} />
}
