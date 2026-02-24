import type { ConditionData } from '../types'

// Legacy condition name lists from mockup (used by homepage)
export const conditions = {
  mentalHealth: [
    'Anxiety',
    'Depression',
    'Trauma & PTSD',
    'Suicidal Ideation',
    'OCD',
    'Bipolar Disorder',
    'Autism Spectrum (ASD)',
    'Oppositional Defiant Disorder (ODD)',
    'Conduct Disorder',
    'DMDD',
    'BPD',
    'Adjustment Disorder',
    'Dual Diagnosis',
  ],
  substanceAbuse: ['Alcohol', 'Opioids', 'Benzodiazepines', 'Cocaine', 'Crystal Meth', 'Cannabis'],
  eatingDisorders: [
    'Anorexia Nervosa',
    'Bulimia Nervosa',
    'Binge Eating',
    'ARFID',
    'OSFED',
    'Compulsive Eating',
  ],
}

// Full condition page data — populated in Story 4.1
export const conditionPages: ConditionData[] = []
