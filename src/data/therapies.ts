import type { TherapyModality } from '../types'

// Legacy string array from mockup (used by homepage)
export const therapyNames: string[] = [
  'Cognitive Behavioral Therapy (CBT)',
  'Dialectical Behavior Therapy (DBT)',
  'Trauma-Informed Care',
  'Individual Therapy',
  'Group Therapy',
  'Family Therapy',
  'Meditation & Mindfulness',
  'Art & Music Therapy',
  'Adventure Therapy',
  'Holistic Treatment',
  'Crisis Prevention & Intervention (CPI)',
  'Medication Management',
  'LGBTQIA+ Affirming Care',
]

// ─── Full Therapy Modality Data (Story 3.1) ─────────────────

export const therapyModalities: TherapyModality[] = [
  {
    slug: 'cbt',
    name: 'Cognitive Behavioral Therapy (CBT)',
    shortName: 'CBT',
    description:
      'Cognitive Behavioral Therapy helps teens identify and change negative thought patterns and behaviors. Through structured sessions, adolescents learn to recognize distorted thinking, develop healthier coping strategies, and build practical problem-solving skills they can use in everyday life.',
    howItHelps:
      'CBT gives teens concrete tools to manage anxiety, depression, and overwhelming emotions. Adolescents learn that their thoughts directly influence their feelings and behaviors, empowering them to break cycles of negativity.',
    usedFor: [
      'anxiety-treatment',
      'depression-treatment',
      'ocd-treatment',
      'substance-abuse-treatment',
      'dual-diagnosis-treatment',
    ],
    evidenceBasis:
      'Over 2,000 clinical studies supporting efficacy for anxiety, depression, and behavioral disorders in adolescents.',
  },
  {
    slug: 'dbt',
    name: 'Dialectical Behavior Therapy (DBT)',
    shortName: 'DBT',
    description:
      'Dialectical Behavior Therapy combines cognitive-behavioral techniques with mindfulness practices to help teens manage intense emotions, improve interpersonal relationships, and reduce self-destructive behaviors. DBT teaches four core skill areas: mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness.',
    howItHelps:
      'DBT is particularly effective for teens who experience emotional dysregulation, self-harm urges, or difficulty maintaining relationships. It validates their experience while teaching practical skills to navigate intense feelings safely.',
    usedFor: [
      'depression-treatment',
      'suicidal-ideation-treatment',
      'bpd-treatment',
      'substance-abuse-treatment',
      'dual-diagnosis-treatment',
    ],
    evidenceBasis:
      'Strong evidence base for reducing suicidal ideation, self-harm, and emotional dysregulation in adolescents. Adapted from adult DBT with adolescent-specific modules.',
  },
  {
    slug: 'emdr',
    name: 'Eye Movement Desensitization and Reprocessing (EMDR)',
    shortName: 'EMDR',
    description:
      'EMDR is a specialized therapy that helps the brain process and heal from traumatic memories. Using bilateral stimulation (such as guided eye movements), EMDR allows teens to reprocess distressing experiences so they no longer trigger overwhelming emotional responses.',
    howItHelps:
      'For teens who have experienced trauma, EMDR can reduce the intensity of traumatic memories without requiring detailed verbal recounting of the event \u2014 making it especially effective for adolescents who struggle to talk about their experiences.',
    usedFor: ['trauma-ptsd-treatment', 'anxiety-treatment'],
    evidenceBasis:
      'WHO-recommended treatment for PTSD. Multiple randomized controlled trials demonstrate efficacy for trauma processing in adolescents.',
  },
  {
    slug: 'tf-cbt',
    name: 'Trauma-Focused Cognitive Behavioral Therapy (TF-CBT)',
    shortName: 'TF-CBT',
    description:
      'TF-CBT is a structured, evidence-based treatment designed specifically for children and adolescents who have experienced trauma. It integrates trauma-sensitive interventions with cognitive behavioral principles and includes a significant family component to support healing.',
    howItHelps:
      'TF-CBT helps teens process traumatic experiences in a safe, structured way while building resilience and coping skills. The family involvement component ensures that parents and guardians can support their teen\u2019s recovery at home.',
    usedFor: ['trauma-ptsd-treatment', 'anxiety-treatment', 'depression-treatment'],
    evidenceBasis:
      'Gold-standard treatment for childhood trauma with over 20 randomized controlled trials. Endorsed by SAMHSA and the National Child Traumatic Stress Network.',
  },
  {
    slug: 'somatic-experiencing',
    name: 'Somatic Experiencing',
    shortName: 'Somatic',
    description:
      'Somatic Experiencing is a body-oriented approach to healing trauma and stress-related disorders. It focuses on the connection between physical sensations and emotional states, helping teens release stored tension and complete the body\u2019s natural stress response cycle.',
    howItHelps:
      'Many teens carry trauma in their bodies as chronic tension, pain, or heightened startle responses. Somatic Experiencing helps them develop body awareness and learn to regulate their nervous system, reducing anxiety and trauma symptoms.',
    usedFor: ['trauma-ptsd-treatment', 'anxiety-treatment'],
    evidenceBasis:
      'Growing body of research supporting somatic approaches for trauma recovery, with particular promise for adolescents who respond to body-based interventions.',
  },
  {
    slug: 'motivational-interviewing',
    name: 'Motivational Interviewing (MI)',
    shortName: 'MI',
    description:
      'Motivational Interviewing is a collaborative, goal-oriented communication style that strengthens a teen\u2019s own motivation and commitment to change. Rather than telling teens what to do, MI helps them explore their own reasons for wanting change and resolve ambivalence.',
    howItHelps:
      'Adolescents often resist being told to change. MI meets them where they are, honoring their autonomy while gently guiding them toward healthier choices. It\u2019s especially effective for teens who are resistant to treatment or unsure about recovery.',
    usedFor: ['substance-abuse-treatment', 'dual-diagnosis-treatment'],
    evidenceBasis:
      'Extensive evidence for increasing treatment engagement and reducing substance use in adolescent populations. Recommended by NIDA for adolescent substance abuse treatment.',
  },
  {
    slug: 'family-therapy',
    name: 'Family Therapy',
    shortName: 'Family',
    description:
      'Family therapy involves parents, siblings, and other family members in the treatment process. It addresses family dynamics, communication patterns, and relational issues that may contribute to or result from a teen\u2019s mental health challenges.',
    howItHelps:
      'Healing is more sustainable when the whole family is involved. Family therapy helps rebuild trust, improve communication, and create a home environment that supports ongoing recovery and healthy development.',
    usedFor: [
      'anxiety-treatment',
      'depression-treatment',
      'substance-abuse-treatment',
      'dual-diagnosis-treatment',
      'oppositional-defiant-disorder-treatment',
      'conduct-disorder-treatment',
    ],
  },
  {
    slug: 'group-therapy',
    name: 'Group Therapy',
    shortName: 'Group',
    description:
      'Group therapy brings together a small number of teens under the guidance of a licensed therapist. Participants share experiences, practice interpersonal skills, and provide mutual support in a structured, confidential setting.',
    howItHelps:
      'Adolescents often feel isolated in their struggles. Group therapy shows them they\u2019re not alone, builds social skills, and provides a safe space to practice healthy communication and relationship patterns with peers.',
    usedFor: ['anxiety-treatment', 'depression-treatment', 'substance-abuse-treatment'],
  },
  {
    slug: 'individual-therapy',
    name: 'Individual Therapy',
    shortName: 'Individual',
    description:
      'Individual therapy provides one-on-one sessions between a teen and their assigned therapist. These sessions are tailored to the adolescent\u2019s specific needs and may incorporate multiple therapeutic approaches including CBT, DBT, and trauma-focused interventions.',
    howItHelps:
      'Individual therapy gives teens a private, confidential space to explore their thoughts, feelings, and experiences with a trusted adult. The one-on-one format allows for deep, personalized work that addresses each teen\u2019s unique challenges.',
    usedFor: [
      'anxiety-treatment',
      'depression-treatment',
      'trauma-ptsd-treatment',
      'ocd-treatment',
      'bipolar-disorder-treatment',
    ],
  },
  {
    slug: 'art-music-therapy',
    name: 'Art & Music Therapy',
    shortName: 'Art & Music',
    description:
      'Art and music therapy use creative expression as therapeutic tools. Licensed art and music therapists guide teens through creative activities that help process emotions, reduce stress, and develop self-awareness without relying solely on verbal communication.',
    howItHelps:
      'Many adolescents struggle to express their feelings in words. Art and music therapy provide alternative channels for emotional expression, helping teens access and process feelings they may not be able to articulate verbally.',
    usedFor: ['trauma-ptsd-treatment', 'depression-treatment', 'anxiety-treatment'],
  },
  {
    slug: 'adventure-therapy',
    name: 'Adventure Therapy',
    shortName: 'Adventure',
    description:
      'Adventure therapy uses outdoor activities and experiential challenges \u2014 such as hiking, rock climbing, and team-building exercises \u2014 as therapeutic tools. These activities are facilitated by trained therapists who help teens draw connections between outdoor experiences and personal growth.',
    howItHelps:
      'Adventure therapy builds confidence, resilience, and teamwork skills in a natural setting. Teens learn to take healthy risks, trust others, and overcome challenges \u2014 experiences that translate directly to managing real-life difficulties.',
    usedFor: ['depression-treatment', 'anxiety-treatment', 'substance-abuse-treatment'],
  },
  {
    slug: 'meditation-mindfulness',
    name: 'Meditation & Mindfulness',
    shortName: 'Mindfulness',
    description:
      'Meditation and mindfulness practices teach teens to develop present-moment awareness, observe their thoughts without judgment, and cultivate inner calm. Sessions include guided meditation, breathing exercises, yoga, and body-scan techniques.',
    howItHelps:
      'Mindfulness helps teens slow down their reactive patterns, reduce anxiety, and develop a healthier relationship with their thoughts and emotions. Regular practice builds emotional resilience and improves focus and self-regulation.',
    usedFor: ['anxiety-treatment', 'depression-treatment', 'trauma-ptsd-treatment'],
  },
  {
    slug: 'cpi',
    name: 'Crisis Prevention & Intervention (CPI)',
    shortName: 'CPI',
    description:
      'Crisis Prevention and Intervention is a comprehensive framework for safely managing behavioral crises. All staff are CPI-certified, trained in de-escalation techniques, and equipped to support teens during moments of acute distress while maintaining dignity and safety.',
    howItHelps:
      'CPI ensures that every crisis is handled with compassion and clinical skill. Teens learn that even their most difficult moments can be navigated safely, building trust in the treatment environment and confidence in their own ability to manage distress.',
    usedFor: ['suicidal-ideation-treatment', 'conduct-disorder-treatment', 'dmdd-treatment'],
  },
  {
    slug: 'medication-management',
    name: 'Medication Management',
    shortName: 'Medication Mgmt',
    description:
      'Our board-certified psychiatrist evaluates each teen\u2019s need for psychiatric medication and provides ongoing monitoring and adjustment. Medication is always used as part of a comprehensive treatment plan alongside therapy, never as a standalone intervention.',
    howItHelps:
      'For some teens, medication can provide critical stabilization that allows them to engage more fully in therapy and other treatment activities. Our psychiatrist works closely with each teen\u2019s care team to ensure medications are appropriate, effective, and carefully monitored.',
    usedFor: [
      'depression-treatment',
      'anxiety-treatment',
      'bipolar-disorder-treatment',
      'ocd-treatment',
      'dmdd-treatment',
    ],
  },
  {
    slug: 'lgbtqia-affirming-care',
    name: 'LGBTQIA+ Affirming Care',
    shortName: 'LGBTQIA+',
    description:
      'Our affirming care approach ensures that LGBTQIA+ teens receive treatment that respects and validates their identity. All clinical staff are trained in affirming practices, and our treatment environment is designed to be inclusive, safe, and supportive for teens of all gender identities and sexual orientations.',
    howItHelps:
      'LGBTQIA+ teens face unique stressors including minority stress, discrimination, and family rejection. Affirming care addresses these experiences directly, reducing shame and isolation while supporting healthy identity development and self-acceptance.',
    usedFor: ['depression-treatment', 'anxiety-treatment', 'suicidal-ideation-treatment'],
  },
  {
    slug: 'holistic-treatment',
    name: 'Holistic Treatment',
    shortName: 'Holistic',
    description:
      'Our holistic approach addresses the whole person \u2014 mind, body, and spirit. Beyond clinical therapy, teens participate in nutrition education, fitness programming, yoga, meditation, and creative arts. These complementary practices support overall well-being and reinforce clinical treatment goals.',
    howItHelps:
      'Teens with mental health challenges often experience physical symptoms like disrupted sleep, poor nutrition, and low energy. Holistic treatment addresses these interconnected needs, helping teens feel better physically while supporting their emotional and psychological healing.',
    usedFor: ['depression-treatment', 'anxiety-treatment', 'substance-abuse-treatment'],
  },
  {
    slug: 'trauma-informed-care',
    name: 'Trauma-Informed Care',
    shortName: 'TIC',
    description:
      'Trauma-informed care is a foundational approach woven throughout every aspect of our program. All staff understand the prevalence and impact of trauma, recognize its signs and symptoms, and respond with practices that promote safety, trustworthiness, collaboration, and empowerment.',
    howItHelps:
      'Many teens in treatment have experienced trauma, even if it\u2019s not their primary diagnosis. A trauma-informed environment ensures that every interaction, policy, and practice avoids re-traumatization and supports healing.',
    usedFor: [
      'trauma-ptsd-treatment',
      'anxiety-treatment',
      'depression-treatment',
      'substance-abuse-treatment',
      'dual-diagnosis-treatment',
    ],
  },
]

// Convenience lookup by slug
export const therapyBySlug: Record<string, TherapyModality> = Object.fromEntries(
  therapyModalities.map((t) => [t.slug, t]),
)
