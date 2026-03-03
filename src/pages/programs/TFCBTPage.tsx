import TherapyPage from './TherapyPage'
import { therapyBySlug } from '../../data/therapies'
import { generateMeta } from '../../utils/meta'

const therapy = therapyBySlug['tf-cbt']!

export const meta = generateMeta({
  title: 'Trauma-Focused CBT (TF-CBT) for Teens | Silver State',
  description:
    'Adolescent TF-CBT therapy at Silver State in Las Vegas, NV. Trauma-Focused Cognitive Behavioral Therapy is the gold-standard treatment for childhood trauma, combining CBT techniques with family involvement.',
  path: `/programs/${therapy.slug}`,
  keywords: therapy.seoKeywords,
})

export const handle = {
  breadcrumb: { label: 'TF-CBT', parent: '/programs/therapy-programs' },
}

const faqs = [
  {
    q: 'How does TF-CBT differ from regular CBT?',
    a: 'While standard CBT addresses general thought patterns and behaviors, TF-CBT is specifically designed for children and adolescents who have experienced trauma. TF-CBT incorporates trauma-sensitive interventions such as gradual exposure to trauma memories, cognitive processing of the traumatic experience, and a structured trauma narrative component. It also includes a significant caregiver involvement piece that standard CBT does not, ensuring parents understand trauma responses and can support their teen at home.',
  },
  {
    q: 'How are parents and family members involved in TF-CBT?',
    a: 'Family involvement is a core element of TF-CBT. Parents or caregivers participate in parallel sessions where they learn about trauma responses, develop skills to support their teen, and practice healthy communication strategies. In the later phases of treatment, there are conjoint parent-teen sessions where the adolescent shares their trauma narrative with their caregiver in a safe, therapist-guided setting. This process helps rebuild trust and strengthens the family\'s ability to heal together.',
  },
  {
    q: 'What types of trauma can TF-CBT treat in teens?',
    a: 'TF-CBT is effective for a wide range of traumatic experiences including physical or sexual abuse, witnessing domestic violence, community violence, natural disasters, traumatic loss, and complex or repeated trauma. It is endorsed by SAMHSA and the National Child Traumatic Stress Network as a gold-standard intervention, backed by over 20 randomized controlled trials. At Silver State, our clinicians are trained to tailor TF-CBT to each teen\'s specific trauma history and developmental level.',
  },
  {
    q: 'What is the evidence base for TF-CBT with teens?',
    a: 'TF-CBT is considered the gold-standard trauma treatment for children and adolescents, supported by over 20 randomized controlled trials. Research by Judith Cohen, Anthony Mannarino, and Esther Deblinger — the developers of TF-CBT — published in the Journal of the American Academy of Child & Adolescent Psychiatry demonstrated significant reductions in PTSD, depression, and behavioral problems in traumatized youth. The National Child Traumatic Stress Network and SAMHSA\'s National Registry of Evidence-Based Programs both classify TF-CBT as a "well-supported" intervention.',
  },
  {
    q: 'How many TF-CBT sessions do teens typically need?',
    a: 'The standard TF-CBT protocol consists of 12 to 25 sessions, each lasting approximately 60 to 90 minutes, as outlined by Cohen, Mannarino, and Deblinger in their treatment manual. Research published in the Journal of Clinical Child & Adolescent Psychology indicates that many adolescents show meaningful symptom improvement within the first 8 to 12 sessions. In residential treatment at Silver State, the more intensive therapeutic schedule allows teens to progress through the TF-CBT components at a pace tailored to their individual readiness.',
  },
]

export default function TFCBTPage() {
  return <TherapyPage therapy={therapy} faqs={faqs} />
}
