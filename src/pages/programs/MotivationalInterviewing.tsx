import TherapyPage from './TherapyPage'
import { therapyBySlug } from '../../data/therapies'
import { generateMeta } from '../../utils/meta'

const therapy = therapyBySlug['motivational-interviewing']!

export const meta = generateMeta({
  title: 'Motivational Interviewing (MI) for Teens | Silver State',
  description:
    'Adolescent motivational interviewing therapy at Silver State in Las Vegas, NV. MI is a collaborative approach that strengthens a teen\'s own motivation to change by exploring their personal values and goals.',
  path: `/programs/${therapy.slug}`,
})

export const handle = {
  breadcrumb: { label: 'Motivational Interviewing', parent: '/programs/therapy-programs' },
}

const faqs = [
  {
    q: 'How does motivational interviewing differ from traditional therapy?',
    a: 'Unlike directive approaches where a therapist tells the teen what to change, motivational interviewing is a collaborative conversation that draws out the adolescent\'s own reasons for change. The therapist uses open-ended questions, reflective listening, and affirmations to help the teen explore the gap between their current behaviors and their personal values or goals. This approach is especially effective with adolescents because it respects their growing need for autonomy rather than triggering resistance.',
  },
  {
    q: 'Does motivational interviewing work for teens who are resistant to treatment?',
    a: 'Motivational interviewing was specifically developed to work with ambivalent and resistant individuals, making it one of the best tools for engaging reluctant teens. Rather than confronting resistance head-on, MI therapists "roll with" it — acknowledging the teen\'s perspective while gently guiding them to consider the costs and benefits of their current behavior. Research from NIDA shows that MI significantly increases treatment engagement and outcomes in adolescent populations, even among teens who initially refuse to participate.',
  },
  {
    q: 'Is motivational interviewing used as a standalone treatment or alongside other therapies?',
    a: 'At Silver State, motivational interviewing is used both ways. It often serves as an essential early-phase intervention to build therapeutic rapport and increase a teen\'s readiness for more intensive therapies like CBT or DBT. It is also woven into ongoing treatment sessions to sustain motivation throughout the recovery process. For substance use concerns, MI may be paired with relapse prevention strategies. The flexibility of MI makes it a valuable complement to nearly every other therapeutic modality in our program.',
  },
]

export default function MotivationalInterviewing() {
  return <TherapyPage therapy={therapy} faqs={faqs} />
}
