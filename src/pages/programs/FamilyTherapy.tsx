import TherapyPage from './TherapyPage'
import { therapyBySlug } from '../../data/therapies'
import { generateMeta } from '../../utils/meta'

const therapy = therapyBySlug['family-therapy']!

export const meta = generateMeta({
  title: 'Family Therapy for Teens | Silver State',
  description:
    'Adolescent family therapy at Silver State in Las Vegas, NV. Family therapy involves parents and siblings in the treatment process to rebuild trust, improve communication, and create a supportive home environment.',
  path: `/programs/${therapy.slug}`,
  keywords: therapy.seoKeywords,
})

export const handle = {
  breadcrumb: { label: 'Family Therapy', parent: '/programs/therapy-programs' },
}

const faqs = [
  {
    q: 'Do both parents need to attend family therapy sessions?',
    a: 'While having both parents participate is ideal, it is not required. Family therapy can be effective with one parent or primary caregiver, and our therapists adapt each session to the family members who are present. In cases of divorce or separation, we can conduct sessions with each parent separately if needed. Siblings may also be included when the treatment team determines their participation would benefit the teen\'s recovery. The most important factor is consistent engagement from the family members who are most involved in the teen\'s daily life.',
  },
  {
    q: 'What if family conflict is part of my teen\'s problem?',
    a: 'Family conflict is one of the most common reasons family therapy is recommended, and our therapists are specifically trained to navigate high-conflict dynamics safely. Sessions provide a structured, neutral space where each family member can express their perspective without interruption. The therapist helps the family identify unhealthy communication patterns — such as criticism, defensiveness, or stonewalling — and replaces them with healthier alternatives. Many families find that addressing conflict directly in therapy leads to significant improvement in the teen\'s symptoms as well as overall family functioning.',
  },
  {
    q: 'How often are family therapy sessions held during residential treatment?',
    a: 'At Silver State, family therapy sessions are typically held weekly, either in person or via secure telehealth for families who cannot travel to our Las Vegas facility. In the early stages of treatment, sessions focus on psychoeducation — helping parents understand their teen\'s diagnosis and treatment plan. As treatment progresses, sessions shift toward rebuilding communication, practicing new skills together, and preparing for the teen\'s transition home. Families also have access to multi-family groups where they can connect with other parents navigating similar challenges.',
  },
  {
    q: 'What is the evidence base for family therapy with teens?',
    a: 'Research published in the Journal of Marital and Family Therapy by Sydow et al. found strong evidence that systemic family therapy significantly improves outcomes for adolescents with mood disorders, substance use, eating disorders, and conduct problems. The American Association for Marriage and Family Therapy (AAMFT) cites over 40 years of outcome research supporting family-based interventions for youth. A meta-analysis in the Journal of Family Psychology confirmed that family therapy produces larger and more sustained treatment gains for adolescents than individual therapy alone for many conditions.',
  },
  {
    q: 'How many family therapy sessions do teens typically need?',
    a: 'According to outcome studies reviewed by the American Family Therapy Academy, most families benefit from 12 to 20 family therapy sessions spread across the teen\'s course of treatment. For more entrenched family dynamics or complex cases, 6 months or more of weekly sessions may be recommended. At Silver State, family therapy begins during residential treatment and can continue through our step-down programming, ensuring families have sufficient time to solidify new communication patterns and relationship skills.',
  },
]

export default function FamilyTherapy() {
  return <TherapyPage therapy={therapy} faqs={faqs} />
}
