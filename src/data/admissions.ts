import type { AdmissionStep, FaqEntry } from '../types'

export const admissionsProcess: AdmissionStep[] = [
  {
    step: 1,
    title: 'Call our team',
    desc: "Speak with an admissions counselor 24/7. No waitlists, no judgment. We'll ask about your teen's situation and answer every question you have.",
  },
  {
    step: 2,
    title: 'Verify insurance',
    desc: 'We handle everything. Share your insurance details or upload a photo of your card — our team verifies eligibility, explains coverage, and estimates out-of-pocket costs.',
  },
  {
    step: 3,
    title: 'Clinical assessment',
    desc: "A licensed clinician conducts a comprehensive evaluation to determine the right level of care — residential, PHP, or IOP — tailored to your teen's needs.",
  },
  {
    step: 4,
    title: 'Begin treatment',
    desc: 'Your teen is welcomed into a structured, supportive environment from day one. Treatment planning starts immediately with their dedicated care team.',
  },
]

export const admissionsFaqs: FaqEntry[] = [
  {
    q: 'How long does the admissions process take?',
    a: 'Most families complete the admissions process within 24-48 hours. The initial call takes about 15-20 minutes, insurance verification is typically completed within 10 minutes, and the clinical assessment can often be scheduled the same day.',
  },
  {
    q: 'What insurance do you accept?',
    a: 'Silver State accepts most major insurance plans including Aetna, Cigna, Blue Cross Blue Shield, Ambetter, Humana, United Healthcare, TRICARE, Medicaid, and Anthem. Our admissions team can verify your specific coverage in under 10 minutes.',
  },
  {
    q: 'What should my teen bring?',
    a: 'We provide a detailed packing list after admission is confirmed. Generally, your teen should bring comfortable clothing for 1-2 weeks, personal hygiene items, any prescribed medications in original containers, school materials, and a few personal comfort items like photos or a favorite book.',
  },
  {
    q: 'Can I visit my teen during treatment?',
    a: 'Yes. Family involvement is a core part of our treatment approach. We offer scheduled family therapy sessions, family visiting days, and regular phone calls. Your treatment team will work with you to establish a visitation schedule that supports your teen\'s recovery.',
  },
  {
    q: "What if my teen doesn't want to go?",
    a: "This is very common. Most teens are initially resistant to treatment, but our experienced admissions team can help guide you through this conversation. Many teens who were initially reluctant become engaged in their treatment within the first few days as they build trust with staff and peers.",
  },
  {
    q: 'Do you offer transportation assistance?',
    a: 'We can help coordinate transportation for families traveling to our Las Vegas facility. Our admissions team can discuss options based on your specific situation and location.',
  },
  {
    q: 'What ages do you treat?',
    a: 'Silver State treats adolescents ages 11-17. Our programs, therapies, and clinical staff are specifically trained to work with this age group.',
  },
  {
    q: 'What happens after residential treatment?',
    a: 'Silver State offers a full continuum of care. After residential treatment, your teen may step down to our Partial Hospitalization Program (PHP) or Intensive Outpatient Program (IOP). Your treatment team develops a personalized discharge plan to ensure a smooth transition and continued support.',
  },
]

export const admissionsPageMeta: { title: string; description: string } = {
  title: 'Admissions Process | Silver State Adolescent Treatment Center',
  description:
    'Start the admissions process at Silver State. Call 24/7, verify insurance in 10 minutes, and get your teen the help they need. Adolescent treatment ages 11-17.',
}
