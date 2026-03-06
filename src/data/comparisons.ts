import type { ComparisonPageData } from '../types'

export const comparisons: ComparisonPageData[] = [
  // ── Therapy Comparisons ──
  {
    slug: 'cbt-vs-dbt',
    title: 'CBT vs DBT for Teens: Understanding the Difference',
    metaTitle: 'CBT vs DBT for Teens | Silver State',
    metaDescription:
      'Compare CBT and DBT therapy for adolescents. Learn key differences in approach, duration, and clinical outcomes to choose the right modality for your teen.',
    category: 'therapy',
    introduction:
      'Cognitive Behavioral Therapy (CBT) and Dialectical Behavior Therapy (DBT) are two of the most widely used evidence-based therapies for adolescents, yet they serve different purposes and work best for different presentations. According to the American Psychological Association (APA), both therapies have strong research support for treating adolescent mental health conditions, but understanding the distinctions helps families and clinicians choose the most effective approach for each teen.\n\nAt Silver State, our clinical team is trained in both CBT and DBT and frequently integrates elements of each into individualized treatment plans. The right choice — or combination — depends on your teen\'s specific diagnosis, emotional regulation challenges, and treatment goals.',
    itemA: {
      name: 'Cognitive Behavioral Therapy (CBT)',
      slug: 'cbt',
      description:
        'CBT focuses on identifying and changing negative thought patterns that drive unhelpful emotions and behaviors. According to the National Institute of Mental Health (NIMH), CBT is considered the gold standard for treating anxiety disorders and depression in adolescents. The therapy is structured, goal-oriented, and typically shorter in duration than many other modalities.',
      bestFor:
        'Teens with anxiety disorders, depression, OCD, phobias, or behavioral issues driven primarily by distorted thinking patterns.',
      keyFeatures: [
        'Identifies and challenges cognitive distortions',
        'Structured, goal-oriented sessions',
        'Homework and skill practice between sessions',
        'Typically 12–20 sessions for meaningful improvement',
        'Strong evidence base for anxiety and depression',
      ],
    },
    itemB: {
      name: 'Dialectical Behavior Therapy (DBT)',
      slug: 'dbt',
      description:
        'DBT was originally developed by Dr. Marsha Linehan for individuals with intense emotional dysregulation and has been adapted extensively for adolescents. According to research published in the Journal of the American Academy of Child and Adolescent Psychiatry (JAACAP), DBT is particularly effective for teens with self-harm behaviors, suicidal ideation, and borderline personality features. DBT combines cognitive-behavioral techniques with mindfulness and acceptance strategies.',
      bestFor:
        'Teens with emotional dysregulation, self-harm, suicidal ideation, BPD features, or interpersonal difficulties that standard CBT has not adequately addressed.',
      keyFeatures: [
        'Four skill modules: mindfulness, distress tolerance, emotion regulation, interpersonal effectiveness',
        'Individual therapy plus group skills training',
        'Phone coaching for crisis moments',
        'Emphasis on acceptance alongside change',
        'Strong evidence base for self-harm and emotional dysregulation',
      ],
    },
    keyDifferences: [
      {
        aspect: 'Primary Focus',
        itemA: 'Changing negative thought patterns to improve emotions and behavior',
        itemB: 'Building distress tolerance and emotion regulation skills alongside cognitive change',
      },
      {
        aspect: 'Best For',
        itemA: 'Anxiety, depression, OCD, phobias',
        itemB: 'Self-harm, suicidal ideation, BPD, severe emotional dysregulation',
      },
      {
        aspect: 'Structure',
        itemA: 'Individual sessions, structured homework',
        itemB: 'Individual therapy + group skills training + phone coaching',
      },
      {
        aspect: 'Duration',
        itemA: 'Typically 12–20 sessions',
        itemB: 'Often 6–12 months of comprehensive treatment',
      },
      {
        aspect: 'Approach to Emotions',
        itemA: 'Teaches teens to challenge and reframe distressing thoughts',
        itemB: 'Teaches teens to tolerate and regulate intense emotions without judgment',
      },
    ],
    whenToChoose:
      'For teens whose primary struggles are anxiety, depression, or specific thinking patterns that drive distress, CBT is often the most efficient starting point. According to the APA, CBT produces clinically significant improvement in 60–80% of adolescents with anxiety disorders.\n\nFor teens who experience intense emotional swings, engage in self-harm, have difficulty managing relationships, or have not responded adequately to CBT alone, DBT provides the additional emotional regulation and distress tolerance tools they need. Many teens at Silver State benefit from elements of both — our clinicians tailor the therapeutic approach to each adolescent\'s unique presentation.',
    faqs: [
      {
        q: 'Can my teen receive both CBT and DBT at Silver State?',
        a: 'Yes. Our clinicians are trained in both modalities and often integrate CBT and DBT techniques within a single treatment plan based on your teen\'s specific needs. Some teens begin with DBT for stabilization and transition to CBT as their emotional regulation improves.',
      },
      {
        q: 'How do I know if my teen needs CBT or DBT?',
        a: 'Our clinical team conducts a comprehensive assessment at admission to determine which therapeutic approach is best. In general, teens with primarily anxiety or depression often start with CBT, while those with self-harm, intense emotional dysregulation, or interpersonal difficulties typically benefit more from DBT.',
      },
      {
        q: 'Is one therapy more effective than the other for teenagers?',
        a: 'Neither is universally better — effectiveness depends on the condition being treated. Research from the National Institute of Mental Health shows CBT is most effective for anxiety and depression, while studies in the Journal of the American Academy of Child and Adolescent Psychiatry demonstrate DBT\'s superiority for self-harm and emotional dysregulation in teens.',
      },
    ],
    sources: [
      { label: 'APA: CBT for Adolescents', url: 'https://www.apa.org/topics/cognitive-behavioral-therapy' },
      { label: 'NIMH: Psychotherapies', url: 'https://www.nimh.nih.gov/health/topics/psychotherapies' },
      { label: 'JAACAP: DBT for Adolescents', url: 'https://www.jaacap.org/article/S0890-8567(14)00013-1/fulltext' },
    ],
    seoKeywords: [
      'CBT vs DBT for teens',
      'CBT vs DBT adolescents',
      'difference between CBT and DBT',
      'teen therapy comparison',
      'CBT or DBT for teenager',
    ],
  },

  // ── Condition Comparisons ──
  {
    slug: 'anxiety-vs-depression',
    title: 'Anxiety vs Depression in Teens: Key Differences and Treatment',
    metaTitle: 'Anxiety vs Depression in Teens | Silver State',
    metaDescription:
      'Compare anxiety and depression in adolescents. Understand the key differences in symptoms, causes, and evidence-based treatment approaches for teens 11-17.',
    category: 'condition',
    introduction:
      'Anxiety and depression are the two most common mental health conditions among adolescents in the United States, and they frequently co-occur. According to the National Institute of Mental Health (NIMH), approximately 32% of adolescents experience an anxiety disorder, while nearly 13% experience a major depressive episode. Despite their high prevalence, anxiety and depression present differently and require distinct — though sometimes overlapping — treatment approaches.\n\nAt Silver State, our clinicians frequently treat teens who present with both anxiety and depression. Understanding the differences helps families recognize what their teen is experiencing and seek the most appropriate care.',
    itemA: {
      name: 'Anxiety Disorders',
      slug: 'anxiety-treatment',
      description:
        'Anxiety disorders involve persistent, excessive worry or fear that is out of proportion to the situation and interferes with daily life. According to the Centers for Disease Control and Prevention (CDC), anxiety is the most prevalent mental health condition in children and adolescents. In teens, anxiety often manifests as avoidance behavior, physical symptoms like stomachaches, and difficulty with school or social situations.',
      bestFor:
        'Teens experiencing excessive worry, avoidance, panic attacks, social fear, or physical symptoms driven by anxiety.',
      keyFeatures: [
        'Persistent worry or fear about future events',
        'Avoidance of feared situations or triggers',
        'Physical symptoms: stomachaches, headaches, rapid heartbeat',
        'Difficulty sleeping due to racing thoughts',
        'Perfectionism or fear of making mistakes',
      ],
    },
    itemB: {
      name: 'Depression',
      slug: 'depression-treatment',
      description:
        'Depression in adolescents is characterized by persistent sadness, loss of interest, and changes in energy and motivation. According to the National Institute of Mental Health (NIMH), approximately one in five teens experiences a major depressive episode before adulthood. Unlike normal teenage moodiness, clinical depression persists for weeks or months and significantly impairs daily functioning.',
      bestFor:
        'Teens experiencing persistent sadness, withdrawal, loss of interest, irritability, or hopelessness lasting two weeks or more.',
      keyFeatures: [
        'Persistent sadness, emptiness, or irritability',
        'Loss of interest in previously enjoyed activities',
        'Changes in sleep, appetite, or energy levels',
        'Difficulty concentrating or making decisions',
        'Feelings of worthlessness or excessive guilt',
      ],
    },
    keyDifferences: [
      {
        aspect: 'Core Experience',
        itemA: 'Excessive worry and fear about what might happen',
        itemB: 'Persistent sadness and loss of interest in what is happening',
      },
      {
        aspect: 'Energy Level',
        itemA: 'Often hyperactivated — restless, on edge, unable to relax',
        itemB: 'Often depleted — fatigued, sluggish, unmotivated',
      },
      {
        aspect: 'Sleep',
        itemA: 'Difficulty falling asleep due to racing thoughts',
        itemB: 'Sleeping too much or difficulty staying asleep',
      },
      {
        aspect: 'Social Behavior',
        itemA: 'Avoids situations due to fear; wants to participate but cannot',
        itemB: 'Withdraws due to lack of interest or energy; does not want to participate',
      },
      {
        aspect: 'Thinking Pattern',
        itemA: '"What if something bad happens?"',
        itemB: '"Nothing matters" or "I\'m not good enough"',
      },
    ],
    whenToChoose:
      'Many teens experience both anxiety and depression simultaneously — according to the Anxiety and Depression Association of America, nearly 60% of adolescents with an anxiety disorder also have symptoms of depression. At Silver State, our clinicians assess for both conditions during the initial evaluation and develop treatment plans that address whichever is present.\n\nCBT is considered a first-line treatment for both conditions according to the APA. For teens with co-occurring anxiety and depression, an integrated treatment approach that addresses both simultaneously tends to produce the best outcomes. If your teen shows signs of either condition, early intervention is critical — both anxiety and depression are highly treatable in adolescents.',
    faqs: [
      {
        q: 'Can a teen have both anxiety and depression at the same time?',
        a: 'Yes, and it is very common. According to the Anxiety and Depression Association of America, nearly 60% of adolescents with anxiety also experience depression. Silver State routinely treats co-occurring anxiety and depression with integrated treatment plans.',
      },
      {
        q: 'Which condition should be treated first — anxiety or depression?',
        a: 'When both are present, treatment typically addresses both simultaneously using evidence-based approaches like CBT and DBT. The clinical team prioritizes based on which condition is most impairing — for example, if depression has led to suicidal ideation, safety stabilization takes priority.',
      },
      {
        q: 'How can I tell if my teen has anxiety, depression, or both?',
        a: 'Anxiety tends to show as excessive worry, avoidance, and physical tension, while depression appears as persistent sadness, withdrawal, and loss of motivation. Irritability is common in both. A professional clinical assessment is the most reliable way to differentiate and diagnose these conditions in adolescents.',
      },
    ],
    sources: [
      { label: 'NIMH: Anxiety Disorders', url: 'https://www.nimh.nih.gov/health/topics/anxiety-disorders' },
      { label: 'NIMH: Depression', url: 'https://www.nimh.nih.gov/health/topics/depression' },
      { label: 'CDC: Children\'s Mental Health', url: 'https://www.cdc.gov/childrens-mental-health/' },
    ],
    seoKeywords: [
      'anxiety vs depression in teens',
      'difference between anxiety and depression adolescents',
      'teen anxiety or depression',
      'anxiety and depression in teenagers',
      'adolescent anxiety vs depression treatment',
    ],
  },
  {
    slug: 'ptsd-vs-anxiety',
    title: 'PTSD vs Anxiety in Teens: Understanding the Overlap',
    metaTitle: 'PTSD vs Anxiety in Teens | Silver State',
    metaDescription:
      'Compare PTSD and anxiety disorders in adolescents. Learn how to distinguish trauma responses from anxiety and choose the right evidence-based approach.',
    category: 'condition',
    introduction:
      'Post-Traumatic Stress Disorder (PTSD) and anxiety disorders share many overlapping symptoms in adolescents — both involve heightened fear, avoidance, and difficulty functioning — yet they arise from different causes and require different treatment strategies. According to the National Center for PTSD, up to 15% of girls and 6% of boys who experience a traumatic event develop PTSD, while anxiety disorders affect approximately one in three teens before age 18 according to the National Institute of Mental Health (NIMH).\n\nAt Silver State, our trauma-informed clinical team carefully distinguishes between PTSD and anxiety during the initial assessment because the treatment approach differs significantly. Misidentifying trauma as generalized anxiety can lead to incomplete treatment and slower recovery.',
    itemA: {
      name: 'PTSD / Trauma',
      slug: 'trauma-ptsd-treatment',
      description:
        'PTSD in adolescents develops after exposure to a traumatic event — such as abuse, violence, accidents, or loss — and involves intrusive re-experiencing of the trauma, avoidance of trauma-related stimuli, negative changes in mood and cognition, and hyperarousal. According to the American Psychological Association (APA), PTSD is distinct from normal stress responses because symptoms persist beyond one month and significantly impair functioning.',
      bestFor:
        'Teens who have experienced a specific traumatic event and exhibit flashbacks, nightmares, emotional numbness, hypervigilance, or avoidance of trauma reminders.',
      keyFeatures: [
        'Flashbacks, nightmares, or intrusive memories of the event',
        'Avoidance of people, places, or situations that trigger memories',
        'Emotional numbness or detachment',
        'Hypervigilance and exaggerated startle response',
        'Negative changes in beliefs about self or others',
      ],
    },
    itemB: {
      name: 'Anxiety Disorders',
      slug: 'anxiety-treatment',
      description:
        'Anxiety disorders involve persistent, excessive worry that is not necessarily tied to a specific traumatic event. According to the NIMH, anxiety disorders include generalized anxiety disorder, social anxiety, panic disorder, and specific phobias. While anxiety and PTSD both involve fear and avoidance, anxiety disorders are characterized by worry about potential future threats rather than re-experiencing past events.',
      bestFor:
        'Teens with excessive, persistent worry about everyday situations, social interactions, or future events — not tied to a specific traumatic experience.',
      keyFeatures: [
        'Persistent worry about multiple areas of life',
        'Avoidance of feared situations (social events, school, new experiences)',
        'Physical symptoms: headaches, stomachaches, muscle tension',
        'Difficulty concentrating due to worry',
        'Irritability or restlessness',
      ],
    },
    keyDifferences: [
      {
        aspect: 'Root Cause',
        itemA: 'Triggered by a specific traumatic event or prolonged trauma exposure',
        itemB: 'May develop without a specific traumatic event; often multifactorial',
      },
      {
        aspect: 'Re-Experiencing',
        itemA: 'Flashbacks, nightmares, and intrusive memories of the trauma',
        itemB: 'Worry about future events, not re-experiencing past events',
      },
      {
        aspect: 'Avoidance Pattern',
        itemA: 'Avoids specific trauma reminders (people, places, sounds)',
        itemB: 'Avoids situations that provoke general anxiety (social events, tests, separations)',
      },
      {
        aspect: 'Primary Treatment',
        itemA: 'EMDR, TF-CBT, and trauma-focused therapies',
        itemB: 'CBT, exposure therapy, and anxiety-specific interventions',
      },
      {
        aspect: 'Emotional Tone',
        itemA: 'Emotional numbness, detachment, and dissociation common',
        itemB: 'Heightened emotional activation and worry more common',
      },
    ],
    whenToChoose:
      'The critical distinction is whether the teen\'s symptoms are rooted in a specific traumatic experience. According to the National Center for PTSD, treatment that directly addresses the traumatic memory — such as EMDR or Trauma-Focused CBT — produces significantly better outcomes for PTSD than standard anxiety-focused CBT alone.\n\nFor teens with anxiety disorders, CBT with exposure techniques is the gold standard. However, teens can have both PTSD and an anxiety disorder simultaneously, and unrecognized trauma can present as what looks like generalized anxiety. At Silver State, our trauma-informed assessment process screens for trauma history in all adolescents to ensure the treatment plan addresses root causes.',
    faqs: [
      {
        q: 'Can trauma cause anxiety in teens?',
        a: 'Yes. Traumatic experiences frequently trigger anxiety symptoms, and some teens develop both PTSD and a co-occurring anxiety disorder. According to the American Psychological Association, untreated trauma is one of the most common underlying causes of anxiety in adolescents. Our assessment screens for trauma in all teens presenting with anxiety symptoms.',
      },
      {
        q: 'How do clinicians tell the difference between PTSD and anxiety?',
        a: 'Clinicians use structured diagnostic interviews and validated assessment tools to distinguish PTSD from anxiety disorders. The key differentiators are the presence of a traumatic event, intrusive re-experiencing (flashbacks or nightmares), and emotional numbing — symptoms that are characteristic of PTSD but not generalized anxiety.',
      },
      {
        q: 'Does my teen need different treatment for PTSD versus anxiety?',
        a: 'Yes. While CBT is effective for both, PTSD requires trauma-specific modalities such as EMDR or TF-CBT that directly process traumatic memories. Standard anxiety-focused CBT alone does not adequately treat PTSD. Silver State\'s clinicians are trained in both anxiety and trauma treatment protocols.',
      },
    ],
    sources: [
      { label: 'NIMH: Post-Traumatic Stress Disorder', url: 'https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd' },
      { label: 'NIMH: Anxiety Disorders', url: 'https://www.nimh.nih.gov/health/topics/anxiety-disorders' },
      { label: 'APA: Trauma', url: 'https://www.apa.org/topics/trauma' },
    ],
    seoKeywords: [
      'PTSD vs anxiety in teens',
      'teen PTSD or anxiety',
      'trauma vs anxiety adolescents',
      'PTSD and anxiety difference teens',
      'teen trauma treatment vs anxiety treatment',
    ],
  },
  {
    slug: 'anorexia-vs-bulimia',
    title: 'Anorexia vs Bulimia in Teens: Recognizing the Differences',
    metaTitle: 'Anorexia vs Bulimia in Teens | Silver State',
    metaDescription:
      'Compare anorexia nervosa and bulimia nervosa in adolescents. Understand key differences in symptoms, health risks, and evidence-based treatment options.',
    category: 'condition',
    introduction:
      'Anorexia nervosa and bulimia nervosa are two distinct eating disorders that are frequently confused because they share some overlapping features — particularly a preoccupation with body weight and shape. According to the National Eating Disorders Association (NEDA), eating disorders affect approximately 2.7% of adolescents, with anorexia and bulimia being among the most common and most medically dangerous.\n\nAt Silver State, our clinical team treats both anorexia and bulimia in adolescents ages 11–17 using evidence-based approaches that address the psychological, behavioral, and nutritional components of each disorder. Understanding the key differences is important for families who suspect their teen may be struggling.',
    itemA: {
      name: 'Anorexia Nervosa',
      slug: 'anorexia-nervosa-treatment',
      description:
        'Anorexia nervosa is characterized by severe restriction of food intake leading to significantly low body weight, an intense fear of gaining weight, and a distorted body image. According to the National Institute of Mental Health (NIMH), anorexia has the highest mortality rate of any mental health disorder. In adolescents, anorexia can severely impair physical development, bone health, and cardiovascular function during critical growth years.',
      bestFor:
        'Teens who are significantly restricting food intake, losing weight rapidly, expressing intense fear of weight gain, or showing signs of malnutrition.',
      keyFeatures: [
        'Severe restriction of caloric intake',
        'Significantly low body weight for age and height',
        'Intense fear of gaining weight or becoming fat',
        'Distorted body image — seeing themselves as overweight despite being underweight',
        'Medical complications: bone loss, cardiac issues, amenorrhea',
      ],
    },
    itemB: {
      name: 'Bulimia Nervosa',
      slug: 'bulimia-nervosa-treatment',
      description:
        'Bulimia nervosa involves recurrent episodes of binge eating followed by compensatory behaviors such as self-induced vomiting, excessive exercise, or laxative misuse. According to the American Psychiatric Association (APA), bulimia is characterized by a cycle of bingeing and purging that occurs at least once a week for three months. Unlike anorexia, teens with bulimia may maintain a normal or above-normal body weight, making the disorder harder for families to detect.',
      bestFor:
        'Teens engaging in binge-purge cycles, those who eat large amounts in short periods and then compensate through vomiting, over-exercising, or other purging methods.',
      keyFeatures: [
        'Recurrent episodes of binge eating (large amounts in short periods)',
        'Compensatory behaviors: purging, excessive exercise, fasting, laxatives',
        'Body weight may appear normal or above normal',
        'Shame and secrecy around eating behaviors',
        'Medical complications: dental erosion, esophageal damage, electrolyte imbalances',
      ],
    },
    keyDifferences: [
      {
        aspect: 'Primary Behavior',
        itemA: 'Severe restriction of food intake',
        itemB: 'Cycles of binge eating followed by compensatory purging',
      },
      {
        aspect: 'Body Weight',
        itemA: 'Significantly underweight for age and height',
        itemB: 'Often normal weight or above, making detection harder',
      },
      {
        aspect: 'Control Pattern',
        itemA: 'Rigid control over food — avoidance, calorie counting, refusing to eat',
        itemB: 'Loss of control during binges, followed by desperate attempts to compensate',
      },
      {
        aspect: 'Medical Risks',
        itemA: 'Malnutrition, bone loss, organ failure, cardiac arrest',
        itemB: 'Dental erosion, esophageal tears, electrolyte imbalances, cardiac issues',
      },
      {
        aspect: 'Visibility',
        itemA: 'Often visible through significant weight loss and physical signs of malnutrition',
        itemB: 'Often hidden — normal appearance conceals dangerous behaviors',
      },
    ],
    whenToChoose:
      'Both anorexia and bulimia are serious medical and psychological conditions that require professional treatment. According to the National Eating Disorders Association, early intervention dramatically improves outcomes for both disorders. Some teens develop features of both — for example, restricting food most of the time but occasionally binging and purging.\n\nAt Silver State, our eating disorder treatment addresses both the disordered eating behaviors and the underlying psychological factors driving them. Treatment includes individual therapy (primarily CBT-E, enhanced cognitive behavioral therapy for eating disorders), nutritional counseling, family therapy, and medical monitoring. The clinical approach is tailored to the specific eating disorder diagnosis.',
    faqs: [
      {
        q: 'Can a teen have both anorexia and bulimia?',
        a: 'Some teens exhibit features of both disorders — for example, restricting intake at times and binging/purging at others. The DSM-5 recognizes an anorexia binge-purge subtype. Our clinical team conducts a thorough assessment to determine the primary diagnosis and develop an appropriate treatment plan.',
      },
      {
        q: 'Which eating disorder is more dangerous for teens?',
        a: 'Both are medically serious. Anorexia nervosa has the highest mortality rate of any mental health disorder according to the National Institute of Mental Health. Bulimia carries its own life-threatening risks including cardiac arrest from electrolyte imbalances. Both require professional treatment.',
      },
      {
        q: 'How does Silver State treat eating disorders differently from other conditions?',
        a: 'Eating disorder treatment at Silver State integrates specialized components including nutritional rehabilitation, meal support, body image work, and medical monitoring alongside standard therapeutic modalities like CBT and family therapy. Our clinical team has specific training in adolescent eating disorders.',
      },
    ],
    sources: [
      { label: 'NEDA: Eating Disorders Statistics', url: 'https://www.nationaleatingdisorders.org/statistics-research-on-eating-disorders' },
      { label: 'NIMH: Eating Disorders', url: 'https://www.nimh.nih.gov/health/topics/eating-disorders' },
      { label: 'APA: Eating Disorders', url: 'https://www.apa.org/topics/eating-disorders' },
    ],
    seoKeywords: [
      'anorexia vs bulimia teens',
      'difference between anorexia and bulimia',
      'teen eating disorder comparison',
      'anorexia or bulimia in adolescents',
      'eating disorders in teenagers',
    ],
  },
]

export function getComparisonBySlug(slug: string): ComparisonPageData | undefined {
  return comparisons.find((c) => c.slug === slug)
}
