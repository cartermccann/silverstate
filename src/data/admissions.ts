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

export const faqs: FaqEntry[] = [
  {
    q: 'What makes your program different?',
    a: 'We focus exclusively on adolescents, combining clinical therapy, education, and compassionate support tailored to the needs of each teen.',
  },
  {
    q: 'Do you treat both boys and girls?',
    a: 'Yes. Our program is inclusive of all genders, with gender-specific accommodations and therapeutic groups when appropriate.',
  },
  {
    q: 'What age range do you accept?',
    a: 'We accept teens between the ages of 11 and 17.',
  },
  {
    q: 'How do I know if my teen needs residential treatment?',
    a: "If outpatient care isn't enough and your teen's mental health is interfering with daily life, relationships, or safety, residential treatment may be appropriate.",
  },
  {
    q: "I've never done this before. Where do I start?",
    a: "Call us. We'll walk you through everything step by step with zero judgment.",
  },
  {
    q: 'What if my teen doesn\'t look "sick enough" for treatment?',
    a: "If you're worried, that's enough to call. We assess every situation carefully.",
  },
  {
    q: "What if I've tried everything and nothing has worked?",
    a: 'We understand. Our program is designed for teens who need a different level of care.',
  },
]
