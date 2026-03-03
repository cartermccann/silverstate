import TherapyPage from './TherapyPage'
import { therapyBySlug } from '../../data/therapies'
import { generateMeta } from '../../utils/meta'

const therapy = therapyBySlug['lgbtqia-affirming-care']!

export const meta = generateMeta({
  title: 'LGBTQIA+ Affirming Care for Teens | Silver State',
  description:
    'LGBTQIA+ affirming mental health for trans teens and gender-diverse youth at Silver State in Las Vegas. Treatment that respects and validates identity.',
  path: `/programs/${therapy.slug}`,
  keywords: therapy.seoKeywords,
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
  {
    q: 'What is the evidence base for LGBTQIA+ affirming care with teens?',
    a: 'Research published in the Journal of Adolescent Health by the Trevor Project found that LGBTQIA+ youth who received care from affirming providers reported significantly lower rates of suicide attempts and depressive episodes. A study by Pachankis et al. in the Journal of Consulting and Clinical Psychology demonstrated that affirmative cognitive-behavioral therapy significantly reduced depression, anxiety, and minority stress in sexual minority youth. SAMHSA\'s guidelines for behavioral health services explicitly recommend identity-affirming treatment as a best practice for LGBTQIA+ adolescents.',
  },
  {
    q: 'How long do LGBTQIA+ teens typically stay in affirming treatment?',
    a: 'The length of treatment depends on each teen\'s clinical needs rather than their identity. According to the American Psychological Association\'s Guidelines for Psychological Practice with Sexual Minority Persons, the integration of affirmative principles should occur throughout the entire treatment process, regardless of duration. Research published in Psychology of Sexual Orientation and Gender Diversity found that LGBTQIA+ youth who received sustained affirming care over 3 to 6 months showed the greatest improvements in self-acceptance, identity integration, and overall mental health functioning.',
  },
]

export default function LGBTQIACare() {
  return <TherapyPage therapy={therapy} faqs={faqs} />
}
