import TherapyPage from './TherapyPage'
import { therapyBySlug } from '../../data/therapies'
import { generateMeta } from '../../utils/meta'

const therapy = therapyBySlug['lgbtqia-affirming-care']!

export const meta = generateMeta({
  title: 'LGBTQIA+ Affirming Care for Teens | Silver State',
  description:
    'LGBTQIA+ affirming mental health for trans teens and gender-diverse youth at Silver State in Las Vegas. Treatment that respects and validates identity.',
  path: `/programs/${therapy.slug}`,
})

export const handle = {
  breadcrumb: { label: 'LGBTQIA+ Affirming Care', parent: '/programs/therapy-programs' },
}

const faqs = [
  {
    q: 'How are staff trained to provide affirming care?',
    a: 'All clinical and residential staff complete comprehensive training in LGBTQIA+ affirming practices, including proper pronoun use, understanding minority stress, and recognizing the unique mental health challenges facing LGBTQIA+ youth. Training is ongoing and informed by current best practices from organizations such as the Trevor Project and SAMHSA.',
  },
  {
    q: 'Will my teen\u2019s gender identity and pronouns be respected?',
    a: 'Absolutely. Every teen\u2019s self-identified name, pronouns, and gender identity are respected by all staff and incorporated into their treatment records. We create a safe, affirming environment where teens can be themselves without fear of judgment or misgendering.',
  },
  {
    q: 'How are roommates and living arrangements handled for LGBTQIA+ teens?',
    a: 'Roommate assignments are made thoughtfully with input from the teen, clinical staff, and family when appropriate. We prioritize each adolescent\u2019s comfort and safety, and all living arrangements are handled with sensitivity to gender identity. Our goal is to ensure every teen feels safe and respected in their living space.',
  },
  {
    q: 'Do you provide mental health treatment for trans teens?',
    a: 'Yes. Silver State provides specialized mental health for trans teens within our affirming care program. Transgender and gender-diverse adolescents receive treatment that validates their identity while addressing anxiety, depression, trauma, or other mental health challenges. Our clinicians are trained in gender-affirming practices and collaborate with each teen\u2019s existing care providers.',
  },
]

export default function LGBTQIACare() {
  return <TherapyPage therapy={therapy} faqs={faqs} />
}
