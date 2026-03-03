import TherapyPage from './TherapyPage'
import { therapyBySlug } from '../../data/therapies'
import { generateMeta } from '../../utils/meta'

const therapy = therapyBySlug['medication-management']!

export const meta = generateMeta({
  title: 'Psychiatric Medication Management for Teens | Silver State',
  description:
    'Adolescent psychiatric medication management at Silver State in Las Vegas provides careful evaluation, prescribing, and monitoring by a board-certified psychiatrist.',
  path: `/programs/${therapy.slug}`,
  keywords: therapy.seoKeywords,
})

export const handle = {
  breadcrumb: { label: 'Medication Management', parent: '/programs/therapy-programs' },
}

const faqs = [
  {
    q: 'Will my teen be forced to take medication?',
    a: 'No. Medication is never forced. Our psychiatrist conducts a thorough evaluation and discusses recommendations with both the teen and their parent or guardian. Medication is only prescribed when clinically indicated and always with informed consent. It is used as part of a comprehensive treatment plan alongside therapy, never as a standalone intervention.',
  },
  {
    q: 'Who prescribes and oversees medication?',
    a: 'All psychiatric medications are prescribed and monitored by our board-certified adolescent psychiatrist, who specializes in treating teens. The psychiatrist collaborates closely with the teen\u2019s individual therapist and clinical team to ensure a coordinated approach to care.',
  },
  {
    q: 'How are medication side effects monitored?',
    a: 'Our psychiatrist meets with each teen regularly\u2014typically weekly\u2014to assess medication effectiveness and screen for side effects. Nursing staff perform daily check-ins, and any concerns reported by the teen, their therapist, or family are addressed promptly. Dosage adjustments are made carefully based on ongoing clinical observation.',
  },
  {
    q: 'What is the evidence base for psychiatric medication management with teens?',
    a: 'The Treatment for Adolescents with Depression Study (TADS), published in the Journal of the American Medical Association, found that combining medication (fluoxetine) with CBT produced the best outcomes for adolescent depression. The American Academy of Child and Adolescent Psychiatry publishes evidence-based practice parameters for prescribing psychiatric medications to youth, emphasizing the importance of careful monitoring and combined treatment approaches. Research in the Journal of Child and Adolescent Psychopharmacology consistently shows that medication management is most effective when integrated into a comprehensive treatment plan that includes psychotherapy.',
  },
  {
    q: 'How long do teens typically need psychiatric medication management?',
    a: 'According to practice guidelines from the American Academy of Child and Adolescent Psychiatry, adolescents with moderate to severe depression or anxiety typically require 6 to 12 months of medication after symptom stabilization before a gradual taper is considered. For conditions such as ADHD or bipolar disorder, longer-term medication management may be recommended. At Silver State, our psychiatrist works closely with families to develop a clear medication plan, including timelines for reassessment and guidance for continuing care after discharge.',
  },
]

export default function MedicationManagement() {
  return <TherapyPage therapy={therapy} faqs={faqs} />
}
