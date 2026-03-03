import type { ConditionData } from '../types'

// Legacy condition name lists from mockup (used by homepage)
export const conditionNamesByCategory: Record<
  'mentalHealth' | 'substanceAbuse' | 'eatingDisorders',
  string[]
> = {
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
    'School Refusal',
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

// Full condition page data (Story 4.1)
export const conditions: ConditionData[] = [
  // --- Mental Health Conditions ---
  {
    slug: 'anxiety-treatment',
    name: 'Anxiety Treatment',
    heroImage: '/Photos/ULC09136.webp',
    sectionImages: ['/assets/stock/psychologist-with-teen.jpg', '/assets/stock/group-therapy-session.jpg'],
    headline: 'Adolescent Anxiety Treatment at Silver State',
    category: 'mental-health',
    description:
      'Anxiety disorders are the most common mental health challenge among adolescents, affecting nearly one in three teens before age 18. For many young people, anxiety goes far beyond everyday worry — it can disrupt school performance, strain friendships, and make daily life feel overwhelming.\n\nAt Silver State, we understand that anxiety in teens ages 11–17 often looks different than in adults. Your child may become irritable, avoid situations they once enjoyed, or experience physical symptoms like headaches and stomachaches. Our adolescent-specialized clinical team provides evidence-based treatment in a safe, supportive environment designed specifically for young people.',
    symptoms: [
      'Persistent worry or fear that seems out of proportion to the situation',
      'Avoidance of school, social events, or new experiences',
      'Difficulty sleeping or frequent nightmares',
      'Physical complaints such as headaches, stomachaches, or nausea',
      'Irritability or unexpected emotional outbursts',
      'Difficulty concentrating on schoolwork or activities',
      'Constant need for reassurance from parents or caregivers',
    ],
    therapies: [
      'Cognitive Behavioral Therapy (CBT)',
      'Dialectical Behavior Therapy (DBT)',
      'Exposure and Response Prevention (ERP)',
      'Mindfulness-Based Stress Reduction (MBSR)',
    ],
    approach:
      "Silver State treats adolescent anxiety through our full continuum of care — Residential, PHP, and IOP — tailored to your teen's severity level. With a 4:1 staff-to-client ratio, your child receives individualized attention from clinicians who specialize in teen anxiety. Our on-site academics ensure your teen stays on track with school while learning coping strategies, and family therapy sessions help the whole family understand and support recovery.",
    faqs: [
      {
        q: 'How long does adolescent anxiety treatment take?',
        a: "Treatment length varies by severity. Residential stays typically last 45–90 days, PHP runs 4–6 weeks, and IOP usually lasts 6–12 weeks. Your teen's clinical team adjusts the plan as they make progress.",
      },
      {
        q: 'What types of anxiety do you treat in teens?',
        a: 'We treat all anxiety disorders in adolescents, including generalized anxiety disorder, social anxiety, panic disorder, separation anxiety, and specific phobias.',
      },
      {
        q: 'Does insurance cover teen anxiety treatment?',
        a: 'Most major insurance plans cover adolescent anxiety treatment at Silver State. Our admissions team will verify your benefits and explain your coverage before treatment begins.',
      },
    ],
    relatedPrograms: ['residential-treatment', 'php', 'iop'],
    relatedConditions: ['depression-treatment', 'trauma-ptsd-treatment', 'ocd-treatment'],
    metaTitle: 'Adolescent Anxiety Treatment | Silver State',
    metaDescription:
      'Evidence-based adolescent anxiety treatment at Silver State in Las Vegas. CBT, DBT, and family therapy for teens ages 11-17 in residential, PHP, and IOP.',
    reviewedBy: 'Dr. Russ Park, MD',
    reviewDate: '2026-02-01',
    sources: [
      {
        label: 'NIMH: Anxiety Disorders',
        url: 'https://www.nimh.nih.gov/health/topics/anxiety-disorders',
      },
      {
        label: "CDC: Children's Mental Health",
        url: 'https://www.cdc.gov/childrens-mental-health/',
      },
      { label: 'SAMHSA: Mental Health Services', url: 'https://www.samhsa.gov/mental-health' },
    ],
  },
  {
    slug: 'depression-treatment',
    name: 'Depression Treatment',
    heroImage: '/Photos/ULC09112.webp',
    sectionImages: ['/assets/stock/teen-depression-therapy.jpg', '/assets/stock/family-therapy-session.jpg'],
    headline: 'Adolescent Depression Treatment at Silver State',
    category: 'mental-health',
    description:
      "Depression is more than sadness — in adolescents, it often manifests as irritability, withdrawal, and a loss of interest in activities that once brought joy. Approximately one in five teens experiences a major depressive episode before adulthood, making it one of the leading mental health concerns for young people.\n\nAt Silver State, we specialize in helping teens ages 11–17 break free from the grip of depression. Our clinicians understand the unique pressures adolescents face, from academic stress and social media to family conflict and identity development. We create individualized treatment plans that address the root causes of your teen's depression, not just the symptoms.",
    symptoms: [
      'Persistent sadness, emptiness, or hopelessness lasting two weeks or more',
      'Loss of interest in friends, hobbies, or activities they previously enjoyed',
      'Changes in appetite or significant weight changes',
      'Sleeping too much or difficulty falling and staying asleep',
      'Fatigue or loss of energy even with adequate rest',
      'Difficulty concentrating, drop in school performance',
      'Withdrawal from family and social situations',
      'Expressions of worthlessness or excessive guilt',
    ],
    therapies: [
      'Cognitive Behavioral Therapy (CBT)',
      'Dialectical Behavior Therapy (DBT)',
      'Interpersonal Therapy (IPT)',
      'Behavioral Activation',
    ],
    approach:
      "Silver State's depression treatment integrates individual therapy, group sessions, and family involvement across our Residential, PHP, and IOP levels of care. Our 4:1 staff-to-client ratio ensures your teen builds a strong therapeutic relationship with their treatment team. On-site academics keep your child engaged in learning, while our structured daily programming provides the routine and purpose that depression often takes away.",
    faqs: [
      {
        q: 'How do I know if my teen needs depression treatment?',
        a: "If your teen has experienced persistent sadness, withdrawal, or loss of interest for more than two weeks, and it's affecting their daily functioning, it may be time to seek professional help. Our admissions team can help you assess the situation.",
      },
      {
        q: 'What is the difference between PHP and IOP for teen depression?',
        a: 'PHP (Partial Hospitalization) provides 5–6 hours of daily programming and is suited for teens who need intensive support but can safely return home each evening. IOP (Intensive Outpatient) meets 3–4 times per week and works well for teens stepping down from higher care or those with moderate symptoms.',
      },
      {
        q: 'Can depression in teens be treated without medication?',
        a: 'Many teens respond well to therapy alone, particularly CBT and DBT. Our clinical team evaluates each teen individually and discusses all treatment options, including therapy-focused approaches, with families before making recommendations.',
      },
    ],
    relatedPrograms: ['residential-treatment', 'php', 'iop'],
    relatedConditions: [
      'anxiety-treatment',
      'suicidal-ideation-treatment',
      'dual-diagnosis-treatment',
    ],
    metaTitle: 'Adolescent Depression Treatment | Silver State',
    metaDescription:
      'Specialized adolescent depression treatment at Silver State in Las Vegas. Individual therapy, family support, and on-site academics for teens ages 11-17.',
    reviewedBy: 'Dr. Russ Park, MD',
    reviewDate: '2026-02-01',
    sources: [
      { label: 'NIMH: Depression', url: 'https://www.nimh.nih.gov/health/topics/depression' },
      {
        label: "CDC: Children's Mental Health",
        url: 'https://www.cdc.gov/childrens-mental-health/',
      },
      { label: 'APA: Depression in Adolescents', url: 'https://www.apa.org/topics/depression' },
    ],
  },
  {
    slug: 'trauma-ptsd-treatment',
    name: 'Trauma & PTSD Treatment',
    heroImage: '/Photos/ULC09135.webp',
    sectionImages: ['/assets/stock/individual-therapy-pink.jpg', '/assets/stock/family-art-therapy.jpg'],
    headline: 'Adolescent Trauma & PTSD Treatment at Silver State',
    category: 'mental-health',
    description:
      "Traumatic experiences — whether from abuse, neglect, violence, accidents, or loss — can profoundly affect an adolescent's developing brain and sense of safety. PTSD and trauma-related disorders are especially damaging during the teen years, when identity and emotional regulation are still forming.\n\nSilver State provides trauma-informed care specifically designed for adolescents ages 11–17. Our clinicians are trained in evidence-based trauma therapies and understand that healing requires both safety and connection. We help teens process what happened, build healthy coping skills, and reclaim their sense of hope for the future.",
    symptoms: [
      'Flashbacks, nightmares, or intrusive memories of traumatic events',
      'Avoidance of people, places, or situations that trigger memories',
      'Emotional numbness or feeling detached from others',
      'Hypervigilance, being easily startled, or always feeling on edge',
      'Difficulty trusting adults or peers',
      'Sudden anger outbursts or aggressive behavior',
      'Difficulty concentrating or decline in school performance',
    ],
    therapies: [
      'Eye Movement Desensitization and Reprocessing (EMDR)',
      'Trauma-Focused Cognitive Behavioral Therapy (TF-CBT)',
      'Dialectical Behavior Therapy (DBT)',
      'Somatic Experiencing',
    ],
    approach:
      "Silver State's trauma treatment begins with creating a physically and emotionally safe environment where your teen can begin to heal. Our 4:1 staff-to-client ratio allows clinicians to build trust gradually and work at your teen's pace. Across Residential, PHP, and IOP settings, we integrate individual trauma processing with group skill-building and family therapy. On-site academics provide stability and normalcy during treatment.",
    faqs: [
      {
        q: 'What types of trauma do you treat in adolescents?',
        a: 'We treat all forms of trauma in teens, including physical, emotional, and sexual abuse; neglect; witnessing violence; accidents; natural disasters; bullying; and grief and loss. Our team is also experienced with complex trauma — repeated or prolonged traumatic experiences.',
      },
      {
        q: 'How does EMDR work for teens with PTSD?',
        a: 'EMDR helps the brain reprocess traumatic memories so they no longer trigger intense emotional and physical responses. During sessions, your teen follows guided eye movements or other bilateral stimulation while recalling the traumatic event, allowing the brain to process and store the memory more adaptively.',
      },
      {
        q: 'Is residential treatment necessary for adolescent trauma?',
        a: "Not always. The appropriate level of care depends on the severity of symptoms and your teen's safety. Some teens benefit from the 24/7 support of residential treatment, while others do well in PHP or IOP. Our admissions team helps determine the right fit.",
      },
    ],
    relatedPrograms: ['residential-treatment', 'php', 'iop'],
    relatedConditions: ['anxiety-treatment', 'depression-treatment', 'suicidal-ideation-treatment'],
    metaTitle: 'Teen Trauma & PTSD Treatment | Silver State',
    metaDescription:
      'Specialized adolescent trauma and PTSD treatment at Silver State in Las Vegas. EMDR, TF-CBT, and DBT for teens ages 11-17 in a safe healing environment.',
    reviewedBy: 'Dr. Russ Park, MD',
    reviewDate: '2026-02-01',
    sources: [
      {
        label: 'NIMH: Post-Traumatic Stress Disorder',
        url: 'https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd',
      },
      { label: 'SAMHSA: Trauma and Violence', url: 'https://www.samhsa.gov/trauma-violence' },
      { label: 'APA: Trauma', url: 'https://www.apa.org/topics/trauma' },
    ],
  },
  {
    slug: 'suicidal-ideation-treatment',
    name: 'Suicidal Ideation Treatment',
    heroImage: '/Photos/ULC09138.webp',
    sectionImages: ['/assets/stock/psychologist-with-teen.jpg', '/assets/stock/treatment-plan-doctor.jpg'],
    headline: 'Adolescent Suicidal Ideation Treatment at Silver State',
    category: 'mental-health',
    description:
      "Suicidal ideation — persistent thoughts about ending one's life — is a mental health crisis that requires immediate, compassionate intervention. Suicide is the second leading cause of death among adolescents, and warning signs including self-harm must never be dismissed as typical teen behavior.\n\nAt Silver State, we provide intensive, evidence-based teen self-harm treatment and suicidal ideation care for adolescents ages 11–17. Our crisis-trained clinical team creates a safe environment where your child can express their pain, develop safety plans, and learn healthier ways to cope with overwhelming emotions. We believe every teen deserves to find hope again.",
    symptoms: [
      'Talking or writing about wanting to die or feeling like a burden',
      'Withdrawal from friends, family, and activities',
      'Giving away prized possessions or saying goodbye',
      'Increased recklessness or risk-taking behavior',
      'Dramatic mood swings or sudden calm after a period of depression',
      'Increased use of alcohol or drugs',
      'Expressions of hopelessness or feeling trapped',
    ],
    therapies: [
      'Dialectical Behavior Therapy (DBT)',
      'Cognitive Behavioral Therapy for Suicide Prevention (CBT-SP)',
      'Safety Planning Intervention',
      'Collaborative Assessment and Management of Suicidality (CAMS)',
    ],
    approach:
      "Silver State prioritizes immediate safety while addressing the underlying pain driving suicidal thoughts. Our Residential program provides 24/7 monitoring with a 4:1 staff-to-client ratio, ensuring your teen is never alone during their most vulnerable moments. Treatment progresses through PHP and IOP as your teen stabilizes, with robust safety planning at every transition. Family involvement is essential — we help parents recognize warning signs and support their teen's recovery.",
    faqs: [
      {
        q: 'What should I do if my teen is talking about suicide?',
        a: 'Take it seriously. If your teen is in immediate danger, call 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room. Once your teen is safe, contact Silver State — our admissions team is available 24/7 to discuss treatment options.',
      },
      {
        q: 'How does Silver State keep my teen safe during treatment?',
        a: "Our residential environment is designed for safety with 24/7 clinical staffing, regular safety check-ins, individualized crisis plans, and a 4:1 staff-to-client ratio. We conduct thorough risk assessments and adjust supervision levels based on your teen's needs.",
      },
      {
        q: 'Can suicidal ideation in teens be treated?',
        a: 'Yes. With appropriate evidence-based treatment, most teens who experience suicidal ideation can learn to manage their emotions, develop healthy coping strategies, and re-engage with life. Early intervention significantly improves outcomes.',
      },
    ],
    relatedPrograms: ['residential-treatment', 'php', 'iop'],
    relatedConditions: ['depression-treatment', 'trauma-ptsd-treatment', 'bpd-treatment'],
    metaTitle: 'Teen Self-Harm & Suicidal Ideation Treatment | Silver State',
    metaDescription:
      'Teen self-harm treatment and suicidal ideation care at Silver State in Las Vegas. 24/7 safety, DBT, and crisis intervention for adolescents ages 11-17.',
    reviewedBy: 'Dr. Russ Park, MD',
    reviewDate: '2026-02-01',
    sources: [
      {
        label: 'NIMH: Suicide Prevention',
        url: 'https://www.nimh.nih.gov/health/topics/suicide-prevention',
      },
      { label: '988 Suicide & Crisis Lifeline', url: 'https://988lifeline.org/' },
      { label: 'CDC: Suicide Prevention', url: 'https://www.cdc.gov/suicide/' },
    ],
  },
  {
    slug: 'ocd-treatment',
    name: 'OCD Treatment',
    heroImage: '/assets/facility/therapy-room.webp',
    sectionImages: ['/assets/stock/holistic-therapy.jpg', '/assets/stock/group-therapy-session.jpg'],
    headline: 'Adolescent OCD Treatment at Silver State',
    category: 'mental-health',
    description:
      'Obsessive-Compulsive Disorder causes teens to experience intrusive, unwanted thoughts (obsessions) that drive repetitive behaviors or mental rituals (compulsions). OCD affects approximately 1–2% of adolescents and can consume hours of a young person\'s day, severely impacting school, friendships, and family life.\n\nSilver State specializes in treating OCD in adolescents ages 11–17 with evidence-based approaches that help teens break the cycle of obsessions and compulsions. Our clinicians understand that OCD in young people is not about being "neat" or "particular" — it\'s a serious condition that responds well to proper treatment.',
    symptoms: [
      'Repetitive hand washing, checking, counting, or arranging behaviors',
      'Intrusive, distressing thoughts that the teen cannot control',
      'Excessive need for symmetry, order, or exactness',
      'Avoidance of situations that trigger obsessive thoughts',
      'Spending excessive time on rituals that interfere with daily activities',
      'Seeking constant reassurance from parents or family members',
    ],
    therapies: [
      'Exposure and Response Prevention (ERP)',
      'Cognitive Behavioral Therapy (CBT)',
      'Acceptance and Commitment Therapy (ACT)',
      'Habit Reversal Training',
    ],
    approach:
      "Silver State's OCD treatment centers on Exposure and Response Prevention (ERP), the gold-standard therapy for OCD. Through our Residential, PHP, and IOP levels, clinicians guide your teen through gradual, supported exposure to anxiety-provoking situations while teaching them to resist the urge to perform compulsions. Our 4:1 staff ratio means dedicated support during challenging exposures, and on-site academics ensure school continuity during treatment.",
    faqs: [
      {
        q: 'What is ERP and why is it effective for teen OCD?',
        a: 'Exposure and Response Prevention gradually exposes your teen to situations that trigger obsessions while helping them resist performing compulsions. Over time, anxiety naturally decreases. Research consistently shows ERP is the most effective therapy for OCD in adolescents.',
      },
      {
        q: 'How long does OCD treatment take for teens?',
        a: 'OCD treatment duration depends on severity. Residential treatment may last 60–90 days for severe cases, while PHP and IOP programs typically run 6–12 weeks. Many teens see meaningful improvement within the first few weeks of consistent ERP.',
      },
      {
        q: 'Can OCD get worse during treatment?',
        a: "It's normal for anxiety to temporarily increase at the start of ERP therapy as your teen faces their fears. This is actually a sign the treatment is working. Our clinical team carefully paces exposures and provides support throughout the process.",
      },
    ],
    relatedPrograms: ['residential-treatment', 'php', 'iop'],
    relatedConditions: ['anxiety-treatment', 'depression-treatment', 'bpd-treatment'],
    metaTitle: 'Adolescent OCD Treatment | Silver State',
    metaDescription:
      'Specialized adolescent OCD treatment at Silver State in Las Vegas. ERP, CBT, and individualized care for teens ages 11-17 with obsessive-compulsive disorder.',
    reviewedBy: 'Dr. Russ Park, MD',
    reviewDate: '2026-02-01',
    sources: [
      {
        label: 'NIMH: Obsessive-Compulsive Disorder',
        url: 'https://www.nimh.nih.gov/health/topics/obsessive-compulsive-disorder-ocd',
      },
      { label: 'International OCD Foundation', url: 'https://iocdf.org/about-ocd/' },
      {
        label: 'APA: Obsessive-Compulsive Disorder',
        url: 'https://www.apa.org/topics/obsessive-compulsive-disorder',
      },
    ],
  },
  {
    slug: 'bipolar-disorder-treatment',
    name: 'Bipolar Disorder Treatment',
    heroImage: '/Photos/ULC09137.webp',
    sectionImages: ['/assets/stock/bipolar-occupational.jpg', '/assets/stock/treatment-plan-doctor.jpg'],
    headline: 'Adolescent Bipolar Disorder Treatment at Silver State',
    category: 'mental-health',
    description:
      "Bipolar disorder in adolescents involves dramatic shifts between episodes of mania (or hypomania) and depression that go far beyond normal teenage mood swings. These episodes can last days to weeks and significantly disrupt a teen's ability to function at school, maintain relationships, and make safe decisions.\n\nAt Silver State, our clinical team specializes in distinguishing bipolar disorder from other mood conditions in teens ages 11–17 and providing structured, evidence-based treatment. We understand that early, accurate diagnosis and appropriate treatment can dramatically improve your teen's long-term outlook.",
    symptoms: [
      'Extreme mood swings between euphoria and deep sadness',
      'Periods of unusually high energy, reduced need for sleep',
      'Rapid, pressured speech or racing thoughts',
      'Impulsive or risky behavior during manic episodes',
      'Periods of withdrawal, fatigue, and hopelessness during depressive episodes',
      'Irritability or agitation that seems disproportionate',
      'Difficulty maintaining consistent school performance',
    ],
    therapies: [
      'Cognitive Behavioral Therapy (CBT)',
      'Dialectical Behavior Therapy (DBT)',
      'Family-Focused Therapy (FFT)',
      'Interpersonal and Social Rhythm Therapy (IPSRT)',
    ],
    approach:
      'Silver State provides structured treatment for adolescent bipolar disorder across Residential, PHP, and IOP levels of care. Our approach combines therapy with psychoeducation to help your teen recognize mood episodes and develop management strategies. The 4:1 staff-to-client ratio ensures close monitoring during mood transitions. Family therapy is central to our approach — we educate parents about the condition and equip the whole family with tools for long-term stability.',
    faqs: [
      {
        q: 'How is bipolar disorder different from normal teen mood swings?',
        a: 'Normal mood swings in teens are typically brief and situational. Bipolar disorder involves distinct episodes of mania or depression lasting days to weeks, with significant changes in energy, sleep, and behavior that noticeably impair daily functioning.',
      },
      {
        q: 'At what age can bipolar disorder be diagnosed in teens?',
        a: 'Bipolar disorder can be diagnosed in adolescence, though it requires careful evaluation to distinguish from other conditions like DMDD or ADHD. Our clinical team conducts thorough assessments to ensure an accurate diagnosis.',
      },
      {
        q: 'Will my teen need lifelong treatment for bipolar disorder?',
        a: 'Bipolar disorder is a lifelong condition, but with proper treatment and skills, many people lead full, productive lives. Our program teaches teens and families the skills and strategies needed for long-term management and stability.',
      },
    ],
    relatedPrograms: ['residential-treatment', 'php', 'iop'],
    relatedConditions: ['depression-treatment', 'dmdd-treatment', 'dual-diagnosis-treatment'],
    metaTitle: 'Teen Bipolar Disorder Treatment | Silver State',
    metaDescription:
      'Structured adolescent bipolar disorder treatment at Silver State in Las Vegas. CBT, DBT, and family therapy for teens ages 11-17 with bipolar mood episodes.',
    reviewedBy: 'Dr. Russ Park, MD',
    reviewDate: '2026-02-01',
    sources: [
      {
        label: 'NIMH: Bipolar Disorder',
        url: 'https://www.nimh.nih.gov/health/topics/bipolar-disorder',
      },
      { label: 'SAMHSA: Mental Health Services', url: 'https://www.samhsa.gov/mental-health' },
      { label: 'APA: Bipolar Disorder', url: 'https://www.apa.org/topics/bipolar-disorder' },
    ],
  },
  {
    slug: 'autism-spectrum-treatment',
    name: 'Autism Spectrum Treatment',
    heroImage: '/Photos/ULC09126.webp',
    sectionImages: ['/assets/stock/music-therapy-piano.jpg', '/assets/stock/family-art-therapy.jpg'],
    headline: 'Adolescent Autism Spectrum Support at Silver State',
    category: 'mental-health',
    description:
      "Adolescents on the autism spectrum often face unique challenges with social communication, sensory processing, and emotional regulation that intensify during the teen years. Many autistic teens also experience co-occurring conditions like anxiety, depression, or OCD, which can complicate their daily functioning.\n\nSilver State provides neurodiversity-affirming treatment for autistic adolescents ages 11–17 who need support with co-occurring mental health conditions. Our clinicians understand the intersection of autism and mental health, and we tailor every treatment plan to respect your teen's neurological differences while building the skills they need to thrive.",
    symptoms: [
      'Difficulty reading social cues or maintaining conversations with peers',
      'Sensory sensitivities that lead to overwhelm or meltdowns',
      'Rigid thinking patterns or intense distress with changes in routine',
      'Challenges with emotional regulation and expressing feelings',
      'Social isolation or difficulty forming and keeping friendships',
      'Co-occurring anxiety, depression, or obsessive behaviors',
    ],
    therapies: [
      'Cognitive Behavioral Therapy (CBT) adapted for ASD',
      'Social Skills Training',
      'Dialectical Behavior Therapy (DBT)',
      'Occupational Therapy with Sensory Integration',
    ],
    approach:
      "Silver State's autism support program integrates mental health treatment with neurodiversity-affirming practices. Across Residential, PHP, and IOP levels, we address co-occurring conditions while building social skills and emotional regulation in a structured, predictable environment. Our 4:1 staff-to-client ratio provides the consistent support autistic teens need, and on-site academics offer accommodations tailored to each student's learning profile.",
    faqs: [
      {
        q: 'Do you treat autism itself or co-occurring conditions?',
        a: "We focus on treating co-occurring mental health conditions like anxiety, depression, and OCD that often accompany autism. We provide a neurodiversity-affirming environment that supports your teen's unique needs while addressing the conditions that are causing distress.",
      },
      {
        q: 'How do you accommodate sensory needs?',
        a: "Our environment includes sensory-friendly spaces, flexible scheduling when possible, and staff trained in sensory processing differences. Each teen's sensory profile is assessed during intake and integrated into their treatment plan.",
      },
      {
        q: 'Is your program suitable for autistic teens with high support needs?',
        a: "Our program is designed for autistic adolescents who can participate in group therapy settings with support. During the admissions process, we assess whether our environment and programming are the right fit for your teen's specific needs.",
      },
    ],
    relatedPrograms: ['residential-treatment', 'php', 'iop'],
    relatedConditions: [
      'anxiety-treatment',
      'ocd-treatment',
      'oppositional-defiant-disorder-treatment',
    ],
    metaTitle: 'Teen Autism Spectrum Support | Silver State',
    metaDescription:
      'Neurodiversity-affirming adolescent autism support at Silver State in Las Vegas. Treating co-occurring mental health conditions in teens ages 11-17 with autism.',
    reviewedBy: 'Dr. Russ Park, MD',
    reviewDate: '2026-02-01',
    sources: [
      {
        label: 'NIMH: Autism Spectrum Disorder',
        url: 'https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd',
      },
      { label: 'CDC: Autism Spectrum Disorder', url: 'https://www.cdc.gov/autism/' },
      {
        label: 'APA: Autism Spectrum Disorder',
        url: 'https://www.apa.org/topics/autism-spectrum-disorder',
      },
    ],
  },
  {
    slug: 'oppositional-defiant-disorder-treatment',
    name: 'Oppositional Defiant Disorder Treatment',
    heroImage: '/Photos/ULC09129.webp',
    sectionImages: ['/assets/stock/odd-occupational.jpg', '/assets/stock/family-therapy-session.jpg'],
    headline: 'Adolescent ODD Treatment at Silver State',
    category: 'mental-health',
    description:
      "Oppositional Defiant Disorder (ODD) goes beyond typical teenage defiance — it involves a persistent pattern of angry, irritable mood, argumentative behavior, and vindictiveness that significantly disrupts family life, school performance, and peer relationships. ODD affects approximately 3–5% of adolescents.\n\nAt Silver State, we help teens ages 11–17 with ODD develop healthier ways to express frustration and interact with authority figures. Our clinicians look beyond the challenging behavior to understand what's driving it — whether that's unresolved trauma, anxiety, or difficulty with emotional regulation.",
    symptoms: [
      'Frequent temper outbursts that are out of proportion to the situation',
      'Persistent argumentativeness with parents, teachers, and authority figures',
      'Active defiance or refusal to follow rules and requests',
      'Deliberately annoying others or being easily annoyed',
      'Blaming others for their own mistakes or misbehavior',
      'Spiteful or vindictive behavior',
      'Difficulty maintaining friendships due to interpersonal conflict',
    ],
    therapies: [
      'Cognitive Behavioral Therapy (CBT)',
      'Parent Management Training (PMT)',
      'Dialectical Behavior Therapy (DBT)',
      'Collaborative Problem Solving (CPS)',
    ],
    approach:
      "Silver State's ODD treatment focuses on teaching emotional regulation, communication skills, and collaborative problem-solving. Across Residential, PHP, and IOP settings, we help your teen identify the emotions beneath their defiant behavior and develop healthier responses. Our 4:1 staff ratio enables consistent, patient engagement. Family therapy is crucial — we work with parents to shift interaction patterns and build a more positive family dynamic.",
    faqs: [
      {
        q: 'Is my teen just being a typical teenager, or is it ODD?',
        a: 'All teens push boundaries, but ODD involves a persistent pattern lasting at least six months that goes beyond normal adolescent behavior. Key differences include the frequency and intensity of defiance, the level of distress it causes, and whether it significantly impairs functioning at home or school.',
      },
      {
        q: 'Does ODD treatment involve punishment?',
        a: 'No. Our approach focuses on understanding the emotions driving defiant behavior and teaching healthier coping skills. We use positive reinforcement, skill-building, and therapeutic relationship-building rather than punitive measures.',
      },
      {
        q: 'Can ODD lead to more serious behavioral problems?',
        a: 'Without treatment, ODD can sometimes progress to conduct disorder. Early intervention is important. Our program addresses ODD behaviors while also screening for and treating co-occurring conditions like anxiety, ADHD, and depression.',
      },
    ],
    relatedPrograms: ['residential-treatment', 'php', 'iop'],
    relatedConditions: ['conduct-disorder-treatment', 'dmdd-treatment', 'anxiety-treatment'],
    metaTitle: 'Adolescent ODD Treatment | Silver State',
    metaDescription:
      'Specialized adolescent ODD treatment at Silver State in Las Vegas. CBT, DBT, and family therapy for teens ages 11-17 with oppositional defiant disorder.',
    reviewedBy: 'Dr. Russ Park, MD',
    reviewDate: '2026-02-01',
    sources: [
      {
        label: 'APA: Oppositional Defiant Disorder',
        url: 'https://www.apa.org/topics/oppositional-defiant-disorder',
      },
      {
        label: "CDC: Children's Mental Health",
        url: 'https://www.cdc.gov/childrens-mental-health/',
      },
      { label: 'SAMHSA: Mental Health Services', url: 'https://www.samhsa.gov/mental-health' },
    ],
  },
  {
    slug: 'conduct-disorder-treatment',
    name: 'Conduct Disorder Treatment',
    heroImage: '/Photos/ULC09122.webp',
    sectionImages: ['/assets/stock/conduct-occupational.jpg', '/assets/stock/individual-therapy-pink.jpg'],
    headline: 'Adolescent Conduct Disorder Treatment at Silver State',
    category: 'mental-health',
    description:
      'Conduct disorder involves a repetitive pattern of behavior that violates the rights of others or major age-appropriate social norms. In adolescents, this may include aggression toward people or animals, destruction of property, deceitfulness, or serious rule violations. Without intervention, conduct disorder can lead to lasting legal, academic, and social consequences.\n\nSilver State provides structured, therapeutic treatment for teens ages 11–17 with conduct disorder. Rather than punitive approaches, our clinicians address the underlying emotional and environmental factors driving the behavior while teaching prosocial skills and emotional regulation.',
    symptoms: [
      'Aggression toward people or animals, including bullying or intimidation',
      'Deliberate destruction of property',
      'Lying, theft, or other forms of deceitfulness',
      'Serious violations of rules, including running away or truancy',
      'Lack of empathy or remorse for the impact of their behavior',
      'Poor academic performance and frequent school discipline issues',
    ],
    therapies: [
      'Cognitive Behavioral Therapy (CBT)',
      'Multisystemic Therapy (MST) principles',
      'Dialectical Behavior Therapy (DBT)',
      'Aggression Replacement Training (ART)',
    ],
    approach:
      'Silver State treats conduct disorder through a structured therapeutic environment that provides clear expectations and consistent, compassionate responses. Across Residential, PHP, and IOP levels, we combine individual therapy with group skill-building focused on empathy, anger management, and problem-solving. Our 4:1 staff ratio ensures close supervision and mentorship. Family therapy addresses family dynamics that may reinforce problem behavior.',
    faqs: [
      {
        q: 'How is conduct disorder different from ODD?',
        a: 'ODD primarily involves defiance and irritability toward authority figures, while conduct disorder includes more serious behaviors like aggression, property destruction, and rule violations. Conduct disorder is generally considered more severe and may develop from untreated ODD.',
      },
      {
        q: 'Can conduct disorder be treated in teens?',
        a: 'Yes. Early intervention with evidence-based therapies significantly improves outcomes. Our program addresses both the behavior and its underlying causes, teaching teens healthier ways to cope with frustration and interact with others.',
      },
      {
        q: 'Does your program handle teens involved with the juvenile justice system?',
        a: "We work with teens from various backgrounds, including those involved with juvenile justice. Our focus is on therapeutic intervention and skill-building, and we coordinate with families and other professionals involved in your teen's care.",
      },
    ],
    relatedPrograms: ['residential-treatment', 'php', 'iop'],
    relatedConditions: [
      'oppositional-defiant-disorder-treatment',
      'dmdd-treatment',
      'dual-diagnosis-treatment',
    ],
    metaTitle: 'Teen Conduct Disorder Treatment | Silver State',
    metaDescription:
      'Structured adolescent conduct disorder treatment at Silver State in Las Vegas. Evidence-based therapy for teens ages 11-17 with behavioral challenges.',
    reviewedBy: 'Dr. Russ Park, MD',
    reviewDate: '2026-02-01',
    sources: [
      { label: 'APA: Conduct Disorder', url: 'https://www.apa.org/topics/conduct-disorder' },
      {
        label: 'NIMH: Child and Adolescent Mental Health',
        url: 'https://www.nimh.nih.gov/health/topics',
      },
      { label: 'SAMHSA: Mental Health Services', url: 'https://www.samhsa.gov/mental-health' },
    ],
  },
  {
    slug: 'dmdd-treatment',
    name: 'DMDD Treatment',
    heroImage: '/assets/facility/common-area.webp',
    sectionImages: ['/assets/stock/dmdd-occupational.jpg', '/assets/stock/group-therapy-session.jpg'],
    headline: 'Adolescent DMDD Treatment at Silver State',
    category: 'mental-health',
    description:
      'Disruptive Mood Dysregulation Disorder (DMDD) is characterized by severe, recurrent temper outbursts that are grossly out of proportion to the situation, along with a persistently irritable or angry mood between outbursts. DMDD is distinct from bipolar disorder and requires specialized treatment approaches.\n\nSilver State helps adolescents ages 11–17 with DMDD learn to manage their intense emotions and reduce the frequency and severity of outbursts. Our clinical team understands that DMDD is not willful misbehavior — it reflects genuine difficulty regulating emotions that can be effectively treated.',
    symptoms: [
      'Severe temper outbursts occurring three or more times per week',
      'Outbursts that are grossly out of proportion to the trigger',
      'Persistently irritable or angry mood most of the day, nearly every day',
      'Difficulty functioning at school due to emotional volatility',
      'Strained relationships with family members and peers',
      'Physical aggression during outbursts',
    ],
    therapies: [
      'Dialectical Behavior Therapy (DBT)',
      'Cognitive Behavioral Therapy (CBT)',
      'Parent Management Training (PMT)',
      'Emotion Regulation Skills Training',
    ],
    approach:
      "Silver State's DMDD treatment prioritizes emotional regulation skill-building in a structured, predictable environment. Through Residential, PHP, and IOP programming, teens learn to identify emotional triggers, develop distress tolerance techniques, and practice healthier responses. Our 4:1 staff-to-client ratio provides the consistent support needed during emotional crises. Family therapy teaches parents de-escalation strategies and reinforces skills learned in treatment.",
    faqs: [
      {
        q: 'How is DMDD different from bipolar disorder in teens?',
        a: 'While both involve mood difficulties, DMDD features a chronic, persistently irritable mood with frequent outbursts, whereas bipolar disorder involves distinct episodes of mania and depression. DMDD does not include the elevated mood or grandiosity seen in bipolar mania.',
      },
      {
        q: 'At what age is DMDD typically diagnosed?',
        a: 'DMDD can be diagnosed between ages 6 and 18, with symptoms beginning before age 10. The diagnosis was developed to provide a more accurate label for children previously diagnosed with pediatric bipolar disorder.',
      },
      {
        q: 'Can DMDD be outgrown?',
        a: 'Many children with DMDD show improvement as they develop better emotional regulation skills through treatment. However, without intervention, DMDD increases the risk for developing depression and anxiety in adulthood. Early treatment leads to better outcomes.',
      },
    ],
    relatedPrograms: ['residential-treatment', 'php', 'iop'],
    relatedConditions: [
      'bipolar-disorder-treatment',
      'oppositional-defiant-disorder-treatment',
      'depression-treatment',
    ],
    metaTitle: 'Adolescent DMDD Treatment | Silver State',
    metaDescription:
      'Specialized adolescent DMDD treatment at Silver State in Las Vegas. DBT, CBT, emotion regulation, and parent coaching for teens ages 11-17 with outbursts.',
    reviewedBy: 'Dr. Russ Park, MD',
    reviewDate: '2026-02-01',
    sources: [
      {
        label: 'NIMH: Disruptive Mood Dysregulation Disorder',
        url: 'https://www.nimh.nih.gov/health/topics/disruptive-mood-dysregulation-disorder',
      },
      {
        label: "CDC: Children's Mental Health",
        url: 'https://www.cdc.gov/childrens-mental-health/',
      },
      { label: 'APA: DMDD Fact Sheet', url: 'https://www.apa.org/topics/anger' },
    ],
  },
  {
    slug: 'bpd-treatment',
    name: 'Borderline Personality Disorder Treatment',
    heroImage: '/Photos/ULC09149.webp',
    sectionImages: ['/assets/stock/bpd-occupational.jpg', '/assets/stock/psychologist-with-teen.jpg'],
    headline: 'Adolescent BPD Treatment at Silver State',
    category: 'mental-health',
    description:
      "Borderline Personality Disorder (BPD) traits in adolescents can include intense fear of abandonment, unstable relationships, rapidly shifting self-image, impulsivity, and severe emotional reactivity. While a full BPD diagnosis requires careful clinical evaluation in teens, emerging traits can and should be treated early.\n\nSilver State provides specialized treatment for adolescents ages 11–17 showing BPD traits, using Dialectical Behavior Therapy — the gold-standard approach originally developed specifically for this condition. Early intervention can prevent the pattern from becoming entrenched and significantly improve your teen's quality of life.",
    symptoms: [
      'Intense fear of being abandoned or rejected by friends or family',
      'Rapidly shifting relationships — idealizing someone one moment and pushing them away the next',
      'Unstable self-image or sense of identity',
      'Impulsive behaviors that may be harmful (spending, risky activities)',
      'Self-harm behaviors such as cutting or burning',
      'Intense, rapidly changing emotions lasting hours to days',
      'Chronic feelings of emptiness',
    ],
    therapies: [
      'Dialectical Behavior Therapy (DBT)',
      'Mentalization-Based Treatment (MBT)',
      'Schema-Focused Therapy',
      'Cognitive Behavioral Therapy (CBT)',
    ],
    approach:
      "Silver State's BPD treatment is anchored in comprehensive DBT, the therapy with the strongest evidence base for this condition. Across Residential, PHP, and IOP settings, your teen participates in individual therapy, skills training groups, phone coaching, and therapist consultation teams. Our 4:1 staff ratio ensures the close relationship-building that is essential for treating BPD. Family involvement helps parents learn validation techniques and set effective boundaries.",
    faqs: [
      {
        q: 'Can teens be diagnosed with BPD?',
        a: 'While some clinicians are cautious about diagnosing personality disorders in adolescents, current research supports identifying and treating BPD traits early. Our clinical team conducts thorough assessments and focuses on treating the specific symptoms and patterns your teen is experiencing.',
      },
      {
        q: 'Why is DBT the primary treatment for BPD?',
        a: 'DBT was originally developed specifically for BPD. It teaches four core skill sets — mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness — that directly address the challenges people with BPD face. Research consistently shows DBT reduces self-harm, improves relationships, and enhances quality of life.',
      },
      {
        q: 'Is BPD treatable in adolescents?',
        a: 'Absolutely. In fact, adolescence is an ideal time for BPD intervention because personality is still developing. With DBT and proper support, many teens show significant improvement in emotional regulation, relationships, and overall functioning.',
      },
    ],
    relatedPrograms: ['residential-treatment', 'php', 'iop'],
    relatedConditions: [
      'depression-treatment',
      'suicidal-ideation-treatment',
      'trauma-ptsd-treatment',
    ],
    metaTitle: 'Adolescent BPD Treatment | Silver State',
    metaDescription:
      'Specialized adolescent BPD treatment at Silver State in Las Vegas. Comprehensive DBT program for teens ages 11-17 with borderline personality symptoms.',
    reviewedBy: 'Dr. Russ Park, MD',
    reviewDate: '2026-02-01',
    sources: [
      {
        label: 'NIMH: Borderline Personality Disorder',
        url: 'https://www.nimh.nih.gov/health/topics/borderline-personality-disorder',
      },
      { label: 'SAMHSA: Mental Health Services', url: 'https://www.samhsa.gov/mental-health' },
      {
        label: 'APA: Personality Disorders',
        url: 'https://www.apa.org/topics/personality-disorders',
      },
    ],
  },
  {
    slug: 'adjustment-disorder-treatment',
    name: 'Adjustment Disorder Treatment',
    heroImage: '/Photos/ULC09123.webp',
    sectionImages: ['/assets/stock/adjustment-therapy.jpg', '/assets/stock/holistic-therapy.jpg'],
    headline: 'Adolescent Adjustment Disorder Treatment at Silver State',
    category: 'mental-health',
    description:
      'Adjustment disorder occurs when a teen develops emotional or behavioral symptoms in response to a significant life stressor — such as a family divorce, move, school change, loss of a loved one, or bullying. While some stress is normal, adjustment disorder means the response is significantly more intense than expected and impairs daily functioning.\n\nAt Silver State, we help adolescents ages 11–17 process difficult life transitions and develop healthy coping strategies. Our clinicians understand that what seems like a "minor" change to adults can feel world-ending to a teenager, and we meet your child where they are with compassion and evidence-based support.',
    symptoms: [
      'Excessive sadness, crying, or worry in response to a life change',
      'Withdrawal from friends, family, and activities',
      'Difficulty concentrating at school or declining grades',
      'Physical complaints like headaches or stomachaches',
      'Acting out, defiance, or reckless behavior',
      'Sleep disturbances or changes in appetite',
    ],
    therapies: [
      'Cognitive Behavioral Therapy (CBT)',
      'Solution-Focused Brief Therapy (SFBT)',
      'Supportive Counseling',
      'Dialectical Behavior Therapy (DBT)',
    ],
    approach:
      'Silver State treats adjustment disorder with a focus on helping your teen process the triggering event and build resilience for future challenges. Through our PHP and IOP programs — or Residential when symptoms are severe — your teen receives individual therapy, group support, and family sessions. Our 4:1 staff ratio ensures personalized attention, and on-site academics help your teen stay connected to school during treatment.',
    faqs: [
      {
        q: 'How is adjustment disorder different from depression?',
        a: 'Adjustment disorder is tied to a specific stressor and symptoms typically develop within three months of the event. Depression can occur without an identifiable trigger and may last longer. However, untreated adjustment disorder can develop into depression, which is why early treatment matters.',
      },
      {
        q: 'How long does adjustment disorder treatment take?',
        a: 'Adjustment disorder often responds well to shorter-term treatment. Many teens improve significantly with 4–8 weeks of focused therapy, though individual timelines vary based on the severity of symptoms and the nature of the stressor.',
      },
      {
        q: 'What kinds of stressors can trigger adjustment disorder in teens?',
        a: 'Common triggers include parental divorce or separation, moving to a new city or school, loss of a friend or family member, bullying, academic pressure, family conflict, and health issues affecting the teen or a loved one.',
      },
    ],
    relatedPrograms: ['residential-treatment', 'php', 'iop'],
    relatedConditions: ['anxiety-treatment', 'depression-treatment', 'trauma-ptsd-treatment'],
    metaTitle: 'Teen Adjustment Disorder Treatment | Silver State',
    metaDescription:
      'Compassionate adolescent adjustment disorder treatment at Silver State in Las Vegas. CBT and family therapy for teens ages 11-17 facing life transitions.',
    reviewedBy: 'Dr. Russ Park, MD',
    reviewDate: '2026-02-01',
    sources: [
      { label: 'APA: Adjustment Disorders', url: 'https://www.apa.org/topics/adjustment-disorder' },
      {
        label: 'NIMH: Child and Adolescent Mental Health',
        url: 'https://www.nimh.nih.gov/health/topics',
      },
      { label: 'SAMHSA: Mental Health Services', url: 'https://www.samhsa.gov/mental-health' },
    ],
  },
  // --- Substance Abuse Conditions ---
  {
    slug: 'dual-diagnosis-treatment',
    name: 'Dual Diagnosis Treatment',
    heroImage: '/Photos/ULC09131.webp',
    sectionImages: ['/assets/stock/dual-diagnosis-therapy.jpg', '/assets/stock/treatment-plan-doctor.jpg'],
    headline: 'Adolescent Dual Diagnosis Treatment at Silver State',
    category: 'substance-abuse',
    description:
      'Dual diagnosis — also called co-occurring disorders — refers to the presence of both a mental health condition and a substance use disorder. In adolescents, these conditions frequently occur together: teens may use substances to self-medicate anxiety, depression, or trauma, while substance use can worsen or trigger mental health symptoms.\n\nSilver State specializes in integrated dual diagnosis treatment for teens ages 11–17. Our clinical team treats both conditions simultaneously rather than addressing one at a time, because research consistently shows that integrated treatment produces the best outcomes for co-occurring disorders.',
    symptoms: [
      'Using substances to cope with anxiety, depression, or emotional pain',
      'Mental health symptoms worsening despite treatment due to ongoing substance use',
      'Withdrawal from family and friends alongside increased substance use',
      'Declining school performance combined with mood or behavioral changes',
      'Failed attempts to stop using substances on their own',
      'Risky behavior escalating as both conditions reinforce each other',
    ],
    therapies: [
      'Cognitive Behavioral Therapy (CBT)',
      'Dialectical Behavior Therapy (DBT)',
      'Motivational Enhancement Therapy (MET)',
      'Integrated Group Therapy (IGT)',
    ],
    approach:
      "Silver State's dual diagnosis program treats both substance use and mental health conditions in a single, coordinated treatment plan. Through Residential, PHP, and IOP levels, your teen works with a unified clinical team that addresses the interplay between their conditions. Our 4:1 staff ratio provides the intensive support needed for complex cases. Family education helps families understand how the conditions interact and how to support recovery at home.",
    faqs: [
      {
        q: 'Why is integrated treatment important for dual diagnosis?',
        a: 'Treating substance use and mental health separately often leads to relapse in one or both conditions because they fuel each other. Integrated treatment addresses both simultaneously, giving your teen the best chance at lasting recovery.',
      },
      {
        q: 'How do you determine if my teen has a dual diagnosis?',
        a: "Our admissions team conducts a comprehensive assessment that evaluates both mental health symptoms and substance use patterns. This assessment helps our clinical team develop an integrated treatment plan that addresses all of your teen's needs.",
      },
      {
        q: 'What substances do you commonly see alongside mental health conditions?',
        a: 'We frequently treat teens using alcohol, marijuana, prescription medications, and other substances alongside conditions like depression, anxiety, PTSD, and ADHD. The specific combination varies, and our treatment adapts accordingly.',
      },
    ],
    relatedPrograms: ['residential-treatment', 'php', 'iop'],
    relatedConditions: ['substance-abuse-treatment', 'depression-treatment', 'anxiety-treatment'],
    metaTitle: 'Teen Dual Diagnosis Treatment | Silver State',
    metaDescription:
      'Integrated adolescent dual diagnosis treatment at Silver State in Las Vegas. Treating co-occurring mental health and substance use in teens ages 11-17.',
    reviewedBy: 'Dr. Russ Park, MD',
    reviewDate: '2026-02-01',
    sources: [
      {
        label: 'SAMHSA: Co-Occurring Disorders',
        url: 'https://www.samhsa.gov/medications-substance-use-disorders/medications-counseling-related-conditions/co-occurring-disorders',
      },
      { label: 'NIDA: Comorbidity', url: 'https://nida.nih.gov/research-topics/comorbidity' },
      {
        label: 'NIMH: Substance Use and Mental Health',
        url: 'https://www.nimh.nih.gov/health/topics/substance-use-and-mental-health',
      },
    ],
  },
  {
    slug: 'school-refusal-treatment',
    name: 'School Refusal Treatment',
    heroImage: '/Photos/ULC09125.webp',
    sectionImages: ['/assets/stock/school-refusal-therapy.jpg', '/assets/stock/family-therapy-session.jpg'],
    headline: 'Adolescent School Refusal Treatment at Silver State',
    category: 'mental-health',
    description:
      'School refusal is more than truancy — it is an anxiety-driven inability to attend school that affects approximately 2–5% of school-age children and peaks during adolescence. Teens with school refusal may experience intense fear, physical symptoms like nausea or headaches, or complete emotional shutdown at the thought of going to school.\n\nAt Silver State, we treat school refusal in teens ages 11–17 by addressing the underlying anxiety, depression, or social difficulties driving the avoidance. Our program combines clinical therapy with on-site academics, allowing teens to re-engage with school in a structured, supportive environment.',
    symptoms: [
      'Frequent absences or tardiness with emotional distress about attending school',
      'Physical complaints (stomachaches, headaches, nausea) that appear on school mornings',
      'Severe anxiety, crying, or tantrums when it is time to leave for school',
      'Staying home with parents knowledge but refusing to attend classes',
      'Social withdrawal and increasing isolation from peers',
      'Declining academic performance despite adequate ability',
      'Sleep disturbances or difficulty waking for school',
    ],
    therapies: [
      'Cognitive Behavioral Therapy (CBT)',
      'Exposure and Response Prevention (ERP)',
      'Family Therapy',
      'Social Skills Training',
    ],
    approach:
      "Silver State treats school refusal through a gradual, therapeutic re-engagement process. Our Residential and PHP programs provide daily structure including on-site academics, so your teen can practice attending classes in a safe environment. Individual CBT helps identify and challenge the thoughts driving avoidance, while exposure therapy systematically builds tolerance for school-related situations. Family therapy addresses family dynamics that may inadvertently maintain the refusal pattern. Our 4:1 staff ratio ensures personalized support throughout the process.",
    faqs: [
      {
        q: 'Is school refusal the same as truancy?',
        a: 'No. Truancy involves willful absence, often without parental knowledge. School refusal is anxiety-driven — teens genuinely want to attend but feel unable to. The distinction matters because the treatment approaches are completely different.',
      },
      {
        q: 'Will my teen fall behind academically during treatment?',
        a: 'Silver State provides on-site academics through our Youth Academy, staffed by certified teachers. Your teen continues their coursework during treatment, and we coordinate with their home school to ensure a smooth transition back.',
      },
      {
        q: 'What causes school refusal in adolescents?',
        a: 'School refusal is typically driven by anxiety (social, separation, or generalized), depression, bullying, learning difficulties, or a traumatic event. Our clinical assessment identifies the specific factors affecting your teen so we can target treatment effectively.',
      },
    ],
    relatedPrograms: ['residential-treatment', 'php', 'iop'],
    relatedConditions: ['anxiety-treatment', 'depression-treatment', 'autism-spectrum-treatment'],
    metaTitle: 'Adolescent School Refusal Treatment | Silver State',
    metaDescription:
      'Evidence-based school refusal treatment for teens ages 11-17 at Silver State in Las Vegas. CBT, gradual exposure therapy, and on-site Youth Academy academics.',
    reviewedBy: 'Dr. Russ Park, MD',
    reviewDate: '2026-02-01',
    sources: [
      {
        label: 'AACAP: School Refusal',
        url: 'https://www.aacap.org/aacap/families_and_youth/facts_for_families/fff-guide/Children-Who-Wont-Go-To-School-Separation-Anxiety-007.aspx',
      },
      {
        label: 'APA: School Avoidance',
        url: 'https://www.apa.org/topics/schools-classrooms',
      },
      {
        label: 'NIMH: Anxiety Disorders',
        url: 'https://www.nimh.nih.gov/health/topics/anxiety-disorders',
      },
    ],
  },
  {
    slug: 'substance-abuse-treatment',
    name: 'Substance Abuse Treatment',
    heroImage: '/Photos/ULC09130.webp',
    sectionImages: ['/assets/stock/individual-therapy-pink.jpg', '/assets/stock/holistic-therapy.jpg'],
    headline: 'Adolescent Substance Abuse Treatment at Silver State',
    category: 'substance-abuse',
    description:
      'Adolescent substance abuse is a serious and growing concern, with many teens experimenting with drugs or alcohol before they fully understand the consequences. The teenage brain is especially vulnerable to the effects of substances, and early use significantly increases the risk of developing addiction later in life.\n\nSilver State provides comprehensive substance abuse treatment specifically designed for adolescents ages 11–17. Our approach recognizes that teen substance use is different from adult addiction — it often stems from peer pressure, trauma, self-medication of mental health symptoms, or a desire to escape overwhelming emotions.',
    symptoms: [
      'Changes in friend groups, especially to peers who use substances',
      'Declining grades or sudden loss of interest in school',
      'Secretive behavior, lying about whereabouts or activities',
      'Changes in appetite, sleep patterns, or physical appearance',
      'Mood swings, irritability, or personality changes',
      'Missing money, valuables, or prescription medications from the home',
      'Bloodshot eyes, unusual smells on clothing or breath',
    ],
    therapies: [
      'Cognitive Behavioral Therapy (CBT)',
      'Motivational Enhancement Therapy (MET)',
      'Contingency Management',
      'Family Behavior Therapy',
    ],
    approach:
      "Silver State's substance abuse treatment addresses the root causes of your teen's substance use while building skills for long-term sobriety. Through Residential, PHP, and IOP levels of care, your teen participates in individual and group therapy, psychoeducation about substances and the brain, and relapse prevention planning. Our 4:1 staff-to-client ratio provides close mentorship, and family involvement is woven into every level of care.",
    faqs: [
      {
        q: 'At what point does teen substance use become abuse?',
        a: "Substance abuse is characterized by continued use despite negative consequences — declining grades, relationship problems, health issues, or risky behavior. If your teen's substance use is interfering with their daily life, it's time to seek help.",
      },
      {
        q: 'Does my teen need residential treatment or outpatient?',
        a: "The appropriate level of care depends on the severity of use, any co-occurring mental health conditions, and your teen's safety. Our admissions team conducts a thorough assessment to recommend the right level of care.",
      },
      {
        q: 'How do you prevent relapse in teens after treatment?',
        a: 'Relapse prevention starts from day one. We teach coping skills, develop personalized safety plans, address triggers, involve families in aftercare planning, and provide step-down support from residential to PHP to IOP.',
      },
    ],
    relatedPrograms: ['residential-treatment', 'php', 'iop'],
    relatedConditions: [
      'dual-diagnosis-treatment',
      'alcohol-abuse-treatment',
      'depression-treatment',
    ],
    metaTitle: 'Teen Substance Abuse Treatment | Silver State',
    metaDescription:
      'Comprehensive adolescent substance abuse treatment at Silver State in Las Vegas. Evidence-based therapy for teens ages 11-17 in residential, PHP, and IOP.',
    reviewedBy: 'Dr. Russ Park, MD',
    reviewDate: '2026-02-01',
    sources: [
      {
        label: 'NIDA: Adolescents and Young Adults',
        url: 'https://nida.nih.gov/research-topics/adolescents-young-adults',
      },
      {
        label: 'SAMHSA: National Helpline',
        url: 'https://www.samhsa.gov/find-help/national-helpline',
      },
      { label: 'CDC: Youth Risk Behaviors', url: 'https://www.cdc.gov/yrbs/' },
    ],
  },
  {
    slug: 'alcohol-abuse-treatment',
    name: 'Alcohol Abuse Treatment',
    heroImage: '/Photos/ULC09132.webp',
    sectionImages: ['/assets/stock/alcohol-therapy.jpg', '/assets/stock/group-therapy-session.jpg'],
    headline: 'Adolescent Alcohol Abuse Treatment at Silver State',
    category: 'substance-abuse',
    description:
      'Alcohol remains the most commonly used substance among adolescents, and underage drinking carries serious risks for the developing teenage brain. Alcohol use during adolescence can impair brain development, increase the risk of addiction, and lead to poor decision-making with potentially life-altering consequences.\n\nSilver State provides specialized alcohol abuse treatment for teens ages 11–17. Our clinicians understand that teen drinking is often driven by social pressure, stress, curiosity, or underlying mental health conditions, and we address these root causes while helping your teen build a foundation for long-term sobriety.',
    symptoms: [
      'Drinking alone or hiding alcohol in their room or belongings',
      'Frequent hangovers or smelling of alcohol',
      'Blackouts or memory gaps after drinking',
      'Declining academic performance or loss of interest in activities',
      'Changes in friend groups toward peers who drink',
      'Increased risk-taking or impulsive behavior',
    ],
    therapies: [
      'Cognitive Behavioral Therapy (CBT)',
      'Motivational Enhancement Therapy (MET)',
      'Dialectical Behavior Therapy (DBT)',
      'Family Behavior Therapy',
    ],
    approach:
      "Silver State treats adolescent alcohol abuse through our full continuum — Residential, PHP, and IOP — based on the severity of your teen's use. Treatment combines psychoeducation about alcohol's impact on the developing brain, individual and group therapy to address triggers, and family involvement to create a supportive recovery environment. Our 4:1 staff ratio ensures your teen receives personalized, consistent support.",
    faqs: [
      {
        q: "How do I know if my teen's drinking is a serious problem?",
        a: 'Warning signs include drinking alone, hiding alcohol, drinking to cope with stress or emotions, needing more alcohol to feel the same effects, and continuing to drink despite negative consequences at school, home, or with friends.',
      },
      {
        q: 'Does my teen need detox for alcohol?',
        a: 'Some teens may need medically supervised withdrawal management depending on the frequency and quantity of their drinking. Our medical team assesses each teen during intake to determine if detox support is needed and ensures the process is safe and comfortable.',
      },
      {
        q: 'How do you address peer pressure after treatment?',
        a: 'Relapse prevention is a core part of our program. We help teens develop refusal skills, identify high-risk situations, build a sober support network, and practice strategies for navigating social pressure after completing treatment.',
      },
    ],
    relatedPrograms: ['residential-treatment', 'php', 'iop'],
    relatedConditions: [
      'substance-abuse-treatment',
      'dual-diagnosis-treatment',
      'depression-treatment',
    ],
    metaTitle: 'Teen Alcohol Abuse Treatment | Silver State',
    metaDescription:
      'Specialized adolescent alcohol abuse treatment at Silver State in Las Vegas. CBT, MET, and family therapy for teens ages 11-17 struggling with alcohol.',
    reviewedBy: 'Dr. Russ Park, MD',
    reviewDate: '2026-02-01',
    sources: [
      { label: 'NIDA: Alcohol', url: 'https://nida.nih.gov/research-topics/alcohol' },
      { label: 'SAMHSA: Underage Drinking', url: 'https://www.samhsa.gov/talk-they-hear-you' },
      { label: 'CDC: Underage Drinking', url: 'https://www.cdc.gov/alcohol/' },
    ],
  },
  {
    slug: 'opioid-abuse-treatment',
    name: 'Opioid Abuse Treatment',
    heroImage: '/Photos/ULC09134.webp',
    sectionImages: ['/assets/stock/opioid-therapy.jpg', '/assets/stock/treatment-plan-doctor.jpg'],
    headline: 'Adolescent Opioid Abuse Treatment at Silver State',
    category: 'substance-abuse',
    description:
      'Opioid misuse among adolescents — including prescription painkillers and illicit opioids — is a critical public health crisis. Opioids are highly addictive, and teens can develop physical dependence rapidly. The consequences of opioid misuse in young people include overdose risk, long-term brain changes, and severe disruption to their development.\n\nSilver State provides urgent, evidence-based opioid treatment for teens ages 11–17. Our clinical team is experienced in managing the physical and psychological aspects of opioid dependence, and we treat the whole person — addressing the trauma, mental health conditions, and social factors that often underlie adolescent opioid use.',
    symptoms: [
      'Using prescription painkillers beyond what was prescribed or without a prescription',
      'Drowsiness, constricted pupils, or slurred speech',
      'Withdrawal symptoms such as nausea, sweating, or body aches when not using',
      'Doctor shopping or stealing medications from family members',
      'Sudden mood changes, social withdrawal, and secrecy',
      'Declining personal hygiene and loss of interest in previously enjoyed activities',
    ],
    therapies: [
      'Cognitive Behavioral Therapy (CBT)',
      'Motivational Enhancement Therapy (MET)',
      'Contingency Management',
      'Dialectical Behavior Therapy (DBT)',
    ],
    approach:
      "Silver State's opioid treatment begins with medically supported stabilization when needed, followed by comprehensive therapeutic intervention. Through Residential, PHP, and IOP levels, we address the psychological dependence on opioids while treating co-occurring mental health conditions. Our 4:1 staff ratio provides constant support during the challenging early stages of recovery. Family education helps parents understand opioid dependence and support their teen's long-term sobriety.",
    faqs: [
      {
        q: 'Does my teen need medical detox for opioids?',
        a: 'Opioid withdrawal can be physically uncomfortable and, in some cases, medically significant. Our medical team evaluates each teen and provides appropriate medical support to ensure withdrawal is managed safely. The specific approach depends on the type and duration of opioid use.',
      },
      {
        q: 'How did my teen get access to opioids?',
        a: 'Adolescents often access opioids through leftover prescriptions at home, peers, or illicit sources. Our program focuses on moving forward with treatment rather than blame, while educating families about securing medications and recognizing warning signs.',
      },
      {
        q: 'What is the relapse rate for teen opioid treatment?',
        a: 'Recovery is a process, and our comprehensive approach is designed to minimize relapse risk. We provide thorough relapse prevention planning, family education, coping skill development, and stepped-down levels of care to support sustained recovery.',
      },
    ],
    relatedPrograms: ['residential-treatment', 'php', 'iop'],
    relatedConditions: [
      'substance-abuse-treatment',
      'dual-diagnosis-treatment',
      'benzodiazepine-abuse-treatment',
    ],
    metaTitle: 'Teen Opioid Abuse Treatment | Silver State',
    metaDescription:
      'Urgent adolescent opioid abuse treatment at Silver State in Las Vegas. Medical support and evidence-based therapy for teens ages 11-17 in early recovery.',
    reviewedBy: 'Dr. Russ Park, MD',
    reviewDate: '2026-02-01',
    sources: [
      { label: 'NIDA: Opioids', url: 'https://nida.nih.gov/research-topics/opioids' },
      {
        label: 'SAMHSA: Opioid Treatment',
        url: 'https://www.samhsa.gov/medications-substance-use-disorders',
      },
      { label: 'CDC: Opioids', url: 'https://www.cdc.gov/opioids/' },
    ],
  },
  {
    slug: 'benzodiazepine-abuse-treatment',
    name: 'Benzodiazepine Abuse Treatment',
    heroImage: '/Photos/ULC09133.webp',
    sectionImages: ['/assets/stock/benzo-therapy.jpg', '/assets/stock/family-therapy-session.jpg'],
    headline: 'Adolescent Benzodiazepine Abuse Treatment at Silver State',
    category: 'substance-abuse',
    description:
      'Benzodiazepine misuse among adolescents is an increasing concern, with teens accessing medications like Xanax, Klonopin, and Valium through prescriptions, family medicine cabinets, or illicit sources. Benzodiazepines are particularly dangerous because they create physical dependence quickly and withdrawal can be medically serious.\n\nSilver State provides specialized benzodiazepine treatment for teens ages 11–17 with careful medical oversight. Our team understands the unique risks of benzodiazepine dependence in adolescents and provides safe, structured treatment that addresses both the physical dependence and the underlying reasons your teen turned to these medications.',
    symptoms: [
      'Taking benzodiazepines without a prescription or in higher doses than prescribed',
      'Excessive drowsiness, confusion, or slurred speech',
      'Memory problems or blackouts',
      'Combining benzodiazepines with alcohol or other substances',
      'Anxiety or panic symptoms worsening between doses',
      'Doctor shopping or requesting early refills',
    ],
    therapies: [
      'Cognitive Behavioral Therapy (CBT)',
      'Dialectical Behavior Therapy (DBT)',
      'Motivational Enhancement Therapy (MET)',
      'Anxiety Management Skills Training',
    ],
    approach:
      "Silver State's benzodiazepine treatment requires careful medical supervision due to the risks associated with withdrawal. Our Residential and PHP programs provide the structured medical oversight needed for safe stabilization, while ongoing therapy addresses the anxiety or stress that typically drives benzodiazepine misuse. Our 4:1 staff ratio ensures close monitoring, and we teach alternative anxiety management strategies that serve your teen long after treatment ends.",
    faqs: [
      {
        q: 'Is benzodiazepine withdrawal dangerous for teens?',
        a: 'Benzodiazepine withdrawal can be medically serious and should always be managed under medical supervision. Our clinical team develops a safe tapering plan when appropriate and monitors your teen closely throughout the stabilization process.',
      },
      {
        q: 'Why do teens misuse benzodiazepines?',
        a: 'Teens often misuse benzodiazepines to manage anxiety, cope with stress, sleep, or get high. Some teens begin with a legitimate prescription that progresses to misuse. Our program addresses the underlying anxiety or stress driving the behavior.',
      },
      {
        q: 'How long does recovery from benzodiazepine dependence take?',
        a: 'The timeline depends on the duration and amount of use. Medical stabilization may take weeks, followed by therapeutic treatment to address underlying conditions. Our step-down model from residential to PHP to IOP supports long-term recovery.',
      },
    ],
    relatedPrograms: ['residential-treatment', 'php', 'iop'],
    relatedConditions: [
      'substance-abuse-treatment',
      'anxiety-treatment',
      'dual-diagnosis-treatment',
    ],
    metaTitle: 'Teen Benzodiazepine Treatment | Silver State',
    metaDescription:
      'Medically supervised adolescent benzodiazepine abuse treatment at Silver State in Las Vegas. Safe stabilization and therapy for teens ages 11-17 in recovery.',
    reviewedBy: 'Dr. Russ Park, MD',
    reviewDate: '2026-02-01',
    sources: [
      {
        label: 'NIDA: Prescription CNS Depressants',
        url: 'https://nida.nih.gov/research-topics/prescription-cns-depressants',
      },
      {
        label: 'SAMHSA: Substance Use Treatment',
        url: 'https://www.samhsa.gov/find-help/national-helpline',
      },
      {
        label: 'FDA: Benzodiazepine Safety',
        url: 'https://www.fda.gov/drugs/drug-safety-and-availability/',
      },
    ],
  },
  {
    slug: 'cocaine-abuse-treatment',
    name: 'Cocaine Abuse Treatment',
    heroImage: '/Photos/ULC09140.webp',
    sectionImages: ['/assets/stock/cocaine-therapy.jpg', '/assets/stock/behavioral-therapy-cocaine.jpg'],
    headline: 'Adolescent Cocaine Abuse Treatment at Silver State',
    category: 'substance-abuse',
    description:
      "Cocaine use among adolescents poses serious risks to the developing brain, cardiovascular system, and overall wellbeing. Cocaine produces intense but short-lived euphoria that can quickly lead to a pattern of binge use, as teens chase the initial high. The drug's stimulant effects are particularly dangerous for young people.\n\nSilver State provides evidence-based cocaine treatment for teens ages 11–17. Our clinicians understand the social and psychological factors that lead adolescents to cocaine use and develop individualized treatment plans that address the root causes while building lasting recovery skills.",
    symptoms: [
      'Hyperactivity, restlessness, or unusually elevated mood followed by crashes',
      'Frequent nosebleeds or runny nose (from snorting)',
      'Dilated pupils, increased heart rate, or elevated body temperature',
      'Rapid weight loss and decreased appetite',
      'Paranoia, agitation, or erratic behavior',
      'Financial problems or stealing money to fund use',
    ],
    therapies: [
      'Cognitive Behavioral Therapy (CBT)',
      'Contingency Management',
      'Motivational Enhancement Therapy (MET)',
      'Community Reinforcement Approach',
    ],
    approach:
      'Silver State treats adolescent cocaine abuse through our comprehensive continuum of care. Residential treatment provides the most intensive support for teens with severe use patterns, while PHP and IOP serve those with moderate symptoms or as step-down care. Our 4:1 staff ratio ensures close support during cravings and emotional challenges. Treatment addresses the thrill-seeking behavior, peer influences, and underlying emotional pain that often drive teen cocaine use.',
    faqs: [
      {
        q: 'Is cocaine physically addictive in teens?',
        a: "While cocaine's addictive quality is primarily psychological, the developing teenage brain is especially susceptible to its effects. Teens can develop compulsive use patterns quickly, and the intense cravings make stopping without professional help very difficult.",
      },
      {
        q: 'What are the long-term effects of teen cocaine use?',
        a: 'Cocaine use during adolescence can affect brain development, particularly areas involved in decision-making and impulse control. It also carries risks of cardiovascular problems, mental health issues, and academic failure. Early treatment minimizes these long-term impacts.',
      },
      {
        q: 'How do you treat cocaine cravings?',
        a: 'We use a combination of CBT to identify and manage triggers, contingency management to reinforce sobriety, and skill-building to develop healthy alternatives to drug use. Our structured environment removes access to substances during treatment.',
      },
    ],
    relatedPrograms: ['residential-treatment', 'php', 'iop'],
    relatedConditions: [
      'substance-abuse-treatment',
      'dual-diagnosis-treatment',
      'meth-abuse-treatment',
    ],
    metaTitle: 'Teen Cocaine Abuse Treatment | Silver State',
    metaDescription:
      'Evidence-based adolescent cocaine abuse treatment at Silver State in Las Vegas. CBT, motivational therapy, and structured support for teens ages 11-17.',
    reviewedBy: 'Dr. Russ Park, MD',
    reviewDate: '2026-02-01',
    sources: [
      { label: 'NIDA: Cocaine', url: 'https://nida.nih.gov/research-topics/cocaine' },
      {
        label: 'SAMHSA: Substance Use Treatment',
        url: 'https://www.samhsa.gov/find-help/national-helpline',
      },
      { label: 'CDC: Youth Risk Behaviors', url: 'https://www.cdc.gov/yrbs/' },
    ],
  },
  {
    slug: 'meth-abuse-treatment',
    name: 'Methamphetamine Abuse Treatment',
    heroImage: '/Photos/ULC09139.webp',
    sectionImages: ['/assets/stock/meth-therapy.jpg', '/assets/stock/holistic-therapy-cocaine.jpg'],
    headline: 'Adolescent Methamphetamine Treatment at Silver State',
    category: 'substance-abuse',
    description:
      "Methamphetamine is one of the most destructive substances affecting adolescents today. Its powerful stimulant effects can cause rapid physical and psychological deterioration, and the drug is highly addictive even after limited use. The developing teenage brain is particularly vulnerable to methamphetamine's neurotoxic effects.\n\nSilver State provides intensive methamphetamine treatment for teens ages 11–17. Our clinical team is experienced in managing the acute and long-term effects of meth use in young people, and we provide the structured, supportive environment needed for teens to begin the recovery process.",
    symptoms: [
      'Extreme weight loss and decreased appetite',
      'Severe dental problems or skin sores',
      'Hyperactivity followed by prolonged periods of sleep',
      'Paranoia, hallucinations, or aggressive behavior',
      'Rapid mood swings and emotional instability',
      'Insomnia lasting days during active use periods',
    ],
    therapies: [
      'Cognitive Behavioral Therapy (CBT)',
      'Contingency Management',
      'Motivational Enhancement Therapy (MET)',
      'Matrix Model',
    ],
    approach:
      "Silver State's methamphetamine treatment provides intensive, structured care beginning with our Residential program for stabilization and early recovery. The 4:1 staff ratio ensures constant support as teens navigate the significant mood and energy changes that occur in early meth recovery. As teens stabilize, they step down to PHP and IOP with continued therapeutic support. We address the often severe co-occurring mental health conditions that accompany meth use while rebuilding healthy routines and family relationships.",
    faqs: [
      {
        q: 'How long does it take for a teen to recover from meth use?',
        a: 'Methamphetamine recovery is a gradual process. Physical stabilization may take weeks, and the brain continues to heal for months after stopping use. Our step-down model provides sustained support through residential, PHP, and IOP levels of care to give your teen the best foundation for lasting recovery.',
      },
      {
        q: 'Can the brain heal after teen meth use?',
        a: "Research shows that many of methamphetamine's effects on the brain are at least partially reversible with sustained abstinence and proper treatment. The adolescent brain has remarkable neuroplasticity, which means earlier intervention leads to better recovery of brain function.",
      },
      {
        q: 'What makes teen meth treatment different from adult programs?',
        a: 'Adolescents have unique developmental needs. Our program addresses age-appropriate social dynamics, academic continuity through on-site schooling, family involvement, and the specific peer pressure and identity issues that teens face during recovery.',
      },
    ],
    relatedPrograms: ['residential-treatment', 'php', 'iop'],
    relatedConditions: [
      'substance-abuse-treatment',
      'dual-diagnosis-treatment',
      'cocaine-abuse-treatment',
    ],
    metaTitle: 'Teen Meth Abuse Treatment | Silver State',
    metaDescription:
      'Intensive adolescent methamphetamine treatment at Silver State in Las Vegas. Structured residential, PHP, and IOP care for teens ages 11-17 with trauma support.',
    reviewedBy: 'Dr. Russ Park, MD',
    reviewDate: '2026-02-01',
    sources: [
      {
        label: 'NIDA: Methamphetamine',
        url: 'https://nida.nih.gov/research-topics/methamphetamine',
      },
      {
        label: 'SAMHSA: Substance Use Treatment',
        url: 'https://www.samhsa.gov/find-help/national-helpline',
      },
      { label: 'CDC: Youth Risk Behaviors', url: 'https://www.cdc.gov/yrbs/' },
    ],
  },
  {
    slug: 'cannabis-abuse-treatment',
    name: 'Cannabis Abuse Treatment',
    heroImage: '/Photos/ULC09113.webp',
    sectionImages: ['/assets/stock/cannabis-therapy.jpg', '/assets/stock/family-art-therapy.jpg'],
    headline: 'Adolescent Cannabis Abuse Treatment at Silver State',
    category: 'substance-abuse',
    description:
      "Cannabis is the most widely used illicit substance among adolescents, and many teens mistakenly believe it's harmless. However, research shows that regular cannabis use during adolescence can significantly impact brain development — particularly the areas responsible for memory, learning, and impulse control. Today's cannabis products are also far more potent than in previous generations.\n\nSilver State provides specialized cannabis treatment for teens ages 11–17. Our clinicians understand that cannabis dependence in adolescents is real and that many teens need structured support to stop using. We address both the substance use and the underlying factors — anxiety, boredom, social pressure, or mental health conditions — that maintain the pattern.",
    symptoms: [
      'Daily or near-daily cannabis use',
      'Bloodshot eyes, increased appetite, or lethargy',
      'Declining motivation, grades, and engagement in activities',
      'Irritability, anxiety, or sleep problems when not using',
      'Using cannabis first thing in the morning or before school',
      'Spending significant time obtaining, using, or recovering from cannabis',
    ],
    therapies: [
      'Cognitive Behavioral Therapy (CBT)',
      'Motivational Enhancement Therapy (MET)',
      'Contingency Management',
      'Family Behavior Therapy',
    ],
    approach:
      "Silver State's cannabis treatment begins with psychoeducation about how cannabis affects the adolescent brain, then moves into evidence-based therapy addressing the patterns maintaining your teen's use. Through PHP and IOP — or Residential for severe cases with co-occurring conditions — we help teens develop alternative coping strategies and rebuild motivation. Our 4:1 staff ratio provides mentorship and accountability. Family therapy addresses enabling patterns and builds a supportive home environment.",
    faqs: [
      {
        q: 'Is cannabis really addictive for teens?',
        a: 'Yes. Approximately 1 in 6 teens who start using cannabis before age 18 develop a cannabis use disorder. The developing brain is more susceptible to dependence, and withdrawal symptoms like irritability, sleep difficulties, and cravings are real and significant.',
      },
      {
        q: 'My teen says cannabis is safer than alcohol — is that true?',
        a: 'While the risks differ, cannabis use during adolescence is not safe. Regular use can impair brain development, reduce academic performance, increase the risk of psychosis in vulnerable individuals, and lead to dependence. No substance is "safe" for the developing teenage brain.',
      },
      {
        q: 'Does my teen need residential treatment for cannabis?',
        a: 'Most teens with cannabis use disorder respond well to PHP or IOP treatment. Residential may be recommended if your teen has severe co-occurring mental health conditions, has been unable to stop in less intensive settings, or needs distance from a high-risk social environment.',
      },
    ],
    relatedPrograms: ['residential-treatment', 'php', 'iop'],
    relatedConditions: [
      'substance-abuse-treatment',
      'dual-diagnosis-treatment',
      'anxiety-treatment',
    ],
    metaTitle: 'Teen Cannabis Abuse Treatment | Silver State',
    metaDescription:
      'Specialized adolescent cannabis abuse treatment at Silver State in Las Vegas. Evidence-based therapy for teens ages 11-17 struggling with marijuana dependence.',
    reviewedBy: 'Dr. Russ Park, MD',
    reviewDate: '2026-02-01',
    sources: [
      {
        label: 'NIDA: Cannabis (Marijuana)',
        url: 'https://nida.nih.gov/research-topics/cannabis-marijuana',
      },
      { label: 'SAMHSA: Know the Risks of Marijuana', url: 'https://www.samhsa.gov/marijuana' },
      { label: 'CDC: Marijuana and Public Health', url: 'https://www.cdc.gov/marijuana/' },
    ],
  },
  // --- Eating Disorder Conditions ---
  {
    slug: 'anorexia-nervosa-treatment',
    name: 'Anorexia Nervosa Treatment',
    heroImage: '/assets/facility/dining-area.webp',
    sectionImages: ['/assets/stock/anorexia-therapy.jpg', '/assets/stock/treatment-plan-doctor.jpg'],
    headline: 'Adolescent Anorexia Nervosa Treatment at Silver State',
    category: 'eating-disorders',
    description:
      "Anorexia nervosa is a serious eating disorder characterized by severe food restriction, intense fear of gaining weight, and a distorted body image. Among adolescents, anorexia has one of the highest mortality rates of any mental health condition. The physical and psychological effects on a growing teen can be devastating without early, specialized intervention.\n\nSilver State provides comprehensive anorexia treatment for teens ages 11–17 with a team that includes clinicians, medical professionals, and nutrition specialists. We understand that anorexia is not about vanity — it's a complex mental health condition that requires compassionate, evidence-based treatment in a safe and structured environment.",
    symptoms: [
      'Dramatic weight loss or failure to gain expected weight during growth',
      'Intense fear of gaining weight despite being underweight',
      'Severely restricted food intake or refusal to eat certain food groups',
      'Excessive exercise even when tired, injured, or in bad weather',
      'Wearing baggy clothing to hide weight loss',
      'Social withdrawal, especially around meals or food-related events',
      'Dizziness, fainting, difficulty concentrating, or feeling cold all the time',
    ],
    therapies: [
      'Family-Based Treatment (FBT/Maudsley)',
      'Cognitive Behavioral Therapy for Eating Disorders (CBT-E)',
      'Dialectical Behavior Therapy (DBT)',
      'Nutritional Rehabilitation',
    ],
    approach:
      "Silver State's anorexia treatment integrates medical monitoring, nutritional rehabilitation, and evidence-based psychotherapy. Our Residential program provides the highest level of support with supervised meals, medical oversight, and 24/7 clinical care. As teens stabilize medically and nutritionally, they step down to PHP and IOP. Our 4:1 staff ratio ensures individualized attention during the challenging refeeding process. Family-Based Treatment puts parents in a central role, equipping families to support recovery at home.",
    faqs: [
      {
        q: 'How serious is anorexia in adolescents?',
        a: 'Anorexia is a life-threatening condition. It can cause heart problems, bone density loss, organ damage, and hormonal disruptions that affect growth and development. However, early treatment significantly improves outcomes, and full recovery is possible — especially when treatment begins during adolescence.',
      },
      {
        q: 'What is Family-Based Treatment for anorexia?',
        a: "Family-Based Treatment (FBT) is considered the gold-standard approach for adolescent anorexia. It empowers parents to take an active role in their teen's nutritional restoration, gradually returning control to the teen as recovery progresses. Our clinicians guide families through each phase.",
      },
      {
        q: 'How long does adolescent anorexia treatment take?',
        a: 'Recovery from anorexia is typically a longer process. Residential stays may last 60–90+ days depending on medical stability, followed by PHP and IOP. Full recovery can take months to years, but meaningful progress often begins within the first weeks of structured treatment.',
      },
      {
        q: 'Does insurance cover anorexia treatment for teens?',
        a: 'Most major insurance plans cover eating disorder treatment for adolescents. Our admissions team works with your insurance provider to verify coverage and maximize benefits before treatment begins.',
      },
    ],
    relatedPrograms: ['residential-treatment', 'php', 'iop'],
    relatedConditions: [
      'bulimia-nervosa-treatment',
      'depression-treatment',
      'anxiety-treatment',
      'osfed-treatment',
    ],
    metaTitle: 'Teen Anorexia Nervosa Treatment | Silver State',
    metaDescription:
      'Specialized adolescent anorexia nervosa treatment at Silver State in Las Vegas. Medical monitoring, FBT, and nutritional care for teens ages 11-17 in recovery.',
    reviewedBy: 'Dr. Russ Park, MD',
    reviewDate: '2026-02-01',
    sources: [
      {
        label: 'NEDA: Anorexia Nervosa',
        url: 'https://www.nationaleatingdisorders.org/anorexia-nervosa/',
      },
      {
        label: 'NIMH: Eating Disorders',
        url: 'https://www.nimh.nih.gov/health/topics/eating-disorders',
      },
      { label: 'APA: Eating Disorders', url: 'https://www.apa.org/topics/eating-disorders' },
    ],
  },
  {
    slug: 'bulimia-nervosa-treatment',
    name: 'Bulimia Nervosa Treatment',
    heroImage: '/assets/facility/medical-office.webp',
    sectionImages: ['/assets/stock/bulimia-therapy.jpg', '/assets/stock/group-therapy-session.jpg'],
    headline: 'Adolescent Bulimia Nervosa Treatment at Silver State',
    category: 'eating-disorders',
    description:
      'Bulimia nervosa involves recurrent episodes of binge eating followed by compensatory behaviors such as purging, excessive exercise, or fasting. Bulimia is often hidden — teens with bulimia may maintain a normal weight, making the condition harder for parents to detect. The physical consequences, including electrolyte imbalances and dental erosion, can be severe.\n\nSilver State provides specialized bulimia treatment for adolescents ages 11–17. Our clinical team helps teens break the binge-purge cycle while addressing the underlying emotional pain, body image distortion, and perfectionism that fuel the disorder. We create a judgment-free environment where your teen can begin to rebuild a healthy relationship with food and their body.',
    symptoms: [
      'Evidence of binge eating such as disappearing food or hidden food wrappers',
      'Frequent trips to the bathroom after meals',
      'Swollen cheeks or jaw, calluses on knuckles from purging',
      'Excessive exercise that feels compulsive rather than enjoyable',
      'Preoccupation with weight, body shape, or calorie counting',
      'Mood swings, shame, or guilt around eating',
    ],
    therapies: [
      'Cognitive Behavioral Therapy for Eating Disorders (CBT-E)',
      'Family-Based Treatment (FBT)',
      'Dialectical Behavior Therapy (DBT)',
      'Interpersonal Therapy (IPT)',
    ],
    approach:
      "Silver State's bulimia treatment focuses on interrupting the binge-purge cycle and addressing the emotional triggers behind it. Through Residential, PHP, and IOP levels of care, your teen receives structured meal support, individual therapy, body image work, and nutritional counseling. Our 4:1 staff ratio allows clinicians to provide the close support needed during and after meals. Family therapy helps parents understand the disorder and create a supportive recovery environment.",
    faqs: [
      {
        q: "Can my teen have bulimia if they're not underweight?",
        a: 'Yes. Unlike anorexia, bulimia often occurs in individuals who are at a normal weight or even overweight. This is one reason bulimia can go undetected for a long time. The physical and emotional toll is serious regardless of weight.',
      },
      {
        q: 'What are the medical risks of bulimia in teens?',
        a: "Purging can cause dangerous electrolyte imbalances that affect heart function, dental erosion, esophageal damage, chronic dehydration, and hormonal disruptions. Medical monitoring is an important part of treatment, and our team closely tracks your teen's physical health.",
      },
      {
        q: 'How do you help teens stop the binge-purge cycle?',
        a: 'We use CBT-E to help teens identify triggers, develop alternative coping strategies, and normalize eating patterns. Structured meals with staff support break the cycle, while therapy addresses the underlying emotional drivers like shame, perfectionism, and body dissatisfaction.',
      },
    ],
    relatedPrograms: ['residential-treatment', 'php', 'iop'],
    relatedConditions: [
      'anorexia-nervosa-treatment',
      'binge-eating-disorder-treatment',
      'depression-treatment',
    ],
    metaTitle: 'Teen Bulimia Nervosa Treatment | Silver State',
    metaDescription:
      'Compassionate adolescent bulimia nervosa treatment at Silver State in Las Vegas. CBT-E, FBT, nutritional support, and relapse prevention for teens ages 11-17.',
    reviewedBy: 'Dr. Russ Park, MD',
    reviewDate: '2026-02-01',
    sources: [
      {
        label: 'NEDA: Bulimia Nervosa',
        url: 'https://www.nationaleatingdisorders.org/bulimia-nervosa/',
      },
      {
        label: 'NIMH: Eating Disorders',
        url: 'https://www.nimh.nih.gov/health/topics/eating-disorders',
      },
      { label: 'APA: Eating Disorders', url: 'https://www.apa.org/topics/eating-disorders' },
    ],
  },
  {
    slug: 'binge-eating-disorder-treatment',
    name: 'Binge Eating Disorder Treatment',
    heroImage: '/Photos/ULC09115.webp',
    sectionImages: ['/assets/stock/binge-eating-therapy.jpg', '/assets/stock/family-therapy-session.jpg'],
    headline: 'Adolescent Binge Eating Disorder Treatment at Silver State',
    category: 'eating-disorders',
    description:
      'Binge Eating Disorder (BED) is the most common eating disorder in the United States, yet it is often overlooked in adolescents. BED involves recurrent episodes of eating large quantities of food in a short period, often rapidly and to the point of discomfort, accompanied by feelings of loss of control, shame, and distress.\n\nSilver State provides empathetic, evidence-based treatment for teens ages 11–17 with binge eating disorder. Our clinicians help teens understand the emotional triggers behind binge episodes and develop a healthier relationship with food — without dieting or restriction, which can worsen the condition.',
    symptoms: [
      'Eating unusually large amounts of food in a short time period',
      'Eating rapidly during binge episodes',
      'Eating when not physically hungry or continuing past fullness',
      'Eating alone due to shame or embarrassment about quantity',
      'Feelings of disgust, guilt, or depression after binge episodes',
      'Hoarding or hiding food in their room',
    ],
    therapies: [
      'Cognitive Behavioral Therapy for Eating Disorders (CBT-E)',
      'Dialectical Behavior Therapy (DBT)',
      'Interpersonal Therapy (IPT)',
      'Mindful Eating Practices',
    ],
    approach:
      "Silver State's BED treatment addresses the emotional roots of binge eating while normalizing eating patterns. Through PHP and IOP — or Residential when co-occurring conditions require it — teens learn to identify emotional triggers, develop alternative coping skills, and practice structured, mindful eating. Our 4:1 staff ratio provides consistent support. We explicitly avoid diet-focused approaches, instead helping teens build a healthy, sustainable relationship with food and their bodies.",
    faqs: [
      {
        q: 'Is binge eating disorder different from overeating?',
        a: 'Yes. While everyone occasionally overeats, BED involves recurrent episodes with a sense of loss of control and significant emotional distress. Episodes occur at least once a week and are not followed by compensatory behaviors like purging.',
      },
      {
        q: 'Can teens develop binge eating disorder?',
        a: 'Absolutely. BED can develop at any age and is increasingly recognized in adolescents. It often co-occurs with depression, anxiety, and low self-esteem. Early treatment in the teen years prevents the pattern from becoming entrenched into adulthood.',
      },
      {
        q: 'Will treatment involve putting my teen on a diet?',
        a: 'No. Dieting and restriction can actually worsen binge eating. Our approach focuses on normalizing eating patterns, addressing emotional triggers, and helping teens develop a healthier relationship with food through evidence-based therapy and nutritional guidance.',
      },
    ],
    relatedPrograms: ['residential-treatment', 'php', 'iop'],
    relatedConditions: ['bulimia-nervosa-treatment', 'depression-treatment', 'anxiety-treatment'],
    metaTitle: 'Teen Binge Eating Treatment | Silver State',
    metaDescription:
      'Empathetic adolescent binge eating disorder treatment at Silver State in Las Vegas. CBT-E, DBT, and nutritional guidance for teens ages 11-17 in recovery.',
    reviewedBy: 'Dr. Russ Park, MD',
    reviewDate: '2026-02-01',
    sources: [
      {
        label: 'NEDA: Binge Eating Disorder',
        url: 'https://www.nationaleatingdisorders.org/binge-eating-disorder/',
      },
      {
        label: 'NIMH: Eating Disorders',
        url: 'https://www.nimh.nih.gov/health/topics/eating-disorders',
      },
      { label: 'APA: Eating Disorders', url: 'https://www.apa.org/topics/eating-disorders' },
    ],
  },
  {
    slug: 'arfid-treatment',
    name: 'ARFID Treatment',
    heroImage: '/Photos/ULC09128.webp',
    sectionImages: ['/assets/stock/arfid-therapy.jpg', '/assets/stock/holistic-therapy.jpg'],
    headline: 'Adolescent ARFID Treatment at Silver State',
    category: 'eating-disorders',
    description:
      'Avoidant/Restrictive Food Intake Disorder (ARFID) goes beyond picky eating. Teens with ARFID severely limit the amount or types of food they eat — not because of body image concerns, but due to sensory sensitivities, fear of choking or vomiting, or a general lack of interest in food. This can lead to nutritional deficiencies, weight loss, and impaired growth during critical developmental years.\n\nSilver State provides specialized ARFID treatment for adolescents ages 11–17. Our team understands that ARFID is not a choice or a phase, and we work with your teen to gradually expand their food repertoire in a supportive, pressure-free environment.',
    symptoms: [
      'Severely limited range of foods they are willing to eat',
      'Avoidance of foods based on texture, color, smell, or temperature',
      'Fear of choking, vomiting, or allergic reactions when trying new foods',
      'Significant weight loss or failure to gain expected weight',
      'Nutritional deficiencies causing fatigue, dizziness, or poor concentration',
      'Anxiety around mealtimes or social situations involving food',
    ],
    therapies: [
      'Cognitive Behavioral Therapy (CBT)',
      'Systematic Desensitization for Food',
      'Family-Based Treatment (FBT) adapted for ARFID',
      'Occupational Therapy with Sensory Integration',
    ],
    approach:
      "Silver State's ARFID treatment combines gradual food exposure with anxiety management in a structured therapeutic environment. Through Residential, PHP, and IOP levels of care, our clinical and nutrition teams work together to help your teen slowly and safely expand their diet. Our 4:1 staff ratio provides patient, individualized support during meals. We collaborate with families to continue progress at home, understanding that ARFID recovery requires consistency across all environments.",
    faqs: [
      {
        q: 'How is ARFID different from picky eating?',
        a: "Picky eating is common in children and usually doesn't significantly impact nutrition or growth. ARFID involves food avoidance so severe that it causes nutritional deficiencies, weight loss, interference with daily functioning, or dependence on nutritional supplements.",
      },
      {
        q: 'Is ARFID related to autism spectrum disorder?',
        a: 'ARFID occurs more frequently in individuals with autism spectrum disorder due to sensory sensitivities, but it can occur in any teen. Our team assesses for and addresses any co-occurring conditions as part of comprehensive treatment.',
      },
      {
        q: 'What does food exposure look like in ARFID treatment?',
        a: "Food exposure is gradual and never forced. Working with your teen's comfort level, clinicians introduce new foods through a systematic process — starting with looking at and interacting with foods before progressing to tasting. The pace is driven by your teen's readiness.",
      },
    ],
    relatedPrograms: ['residential-treatment', 'php', 'iop'],
    relatedConditions: [
      'anxiety-treatment',
      'autism-spectrum-treatment',
      'anorexia-nervosa-treatment',
    ],
    metaTitle: 'Adolescent ARFID Treatment | Silver State',
    metaDescription:
      'Specialized adolescent ARFID treatment at Silver State in Las Vegas. Gradual food exposure and therapy for teens ages 11-17 with avoidant eating patterns.',
    reviewedBy: 'Dr. Russ Park, MD',
    reviewDate: '2026-02-01',
    sources: [
      {
        label: 'NEDA: ARFID',
        url: 'https://www.nationaleatingdisorders.org/avoidant-restrictive-food-intake-disorder-arfid/',
      },
      {
        label: 'NIMH: Eating Disorders',
        url: 'https://www.nimh.nih.gov/health/topics/eating-disorders',
      },
      { label: 'APA: Eating Disorders', url: 'https://www.apa.org/topics/eating-disorders' },
    ],
  },
  {
    slug: 'osfed-treatment',
    name: 'OSFED Treatment',
    heroImage: '/assets/facility/medical-office.webp',
    sectionImages: ['/assets/stock/osfed-therapy.jpg', '/assets/stock/individual-therapy-pink.jpg'],
    headline: 'Adolescent OSFED Treatment at Silver State',
    category: 'eating-disorders',
    description:
      'Other Specified Feeding or Eating Disorder (OSFED) includes eating disorders that cause significant distress and impairment but don\'t fully meet the diagnostic criteria for anorexia, bulimia, or BED. OSFED is not a "lesser" diagnosis — it is just as serious and requires the same level of clinical attention. Examples include atypical anorexia, purging disorder, and night eating syndrome.\n\nSilver State treats OSFED in adolescents ages 11–17 with the same evidence-based rigor we apply to all eating disorders. Our clinical team develops an individualized treatment plan based on your teen\'s specific symptoms, recognizing that every eating disorder presentation is unique.',
    symptoms: [
      'Restrictive eating patterns that cause distress but may not meet full anorexia criteria',
      'Purging behaviors without regular binge episodes',
      'Binge eating less frequently than required for a BED diagnosis',
      'Night eating syndrome — eating the majority of food after dinner',
      'Significant preoccupation with food, weight, or body shape',
      'Physical or emotional consequences of disordered eating patterns',
    ],
    therapies: [
      'Cognitive Behavioral Therapy for Eating Disorders (CBT-E)',
      'Dialectical Behavior Therapy (DBT)',
      'Family-Based Treatment (FBT)',
      'Nutritional Counseling',
    ],
    approach:
      "Silver State's OSFED treatment is tailored to the specific presentation your teen is experiencing. Our clinical team identifies the core disordered eating patterns and applies the most appropriate evidence-based interventions. Through Residential, PHP, and IOP, your teen receives individualized therapy, structured meal support, and nutritional rehabilitation. Our 4:1 staff ratio provides the personalized care that OSFED's varied presentations require.",
    faqs: [
      {
        q: 'Is OSFED as serious as anorexia or bulimia?',
        a: 'Yes. OSFED carries the same risks for serious physical and psychological consequences as other eating disorders. The "other specified" designation refers to diagnostic criteria, not severity. Many teens with OSFED experience significant medical complications and distress.',
      },
      {
        q: 'What conditions fall under OSFED?',
        a: 'OSFED includes atypical anorexia (restriction without low weight), purging disorder (purging without bingeing), subthreshold bulimia or BED, and night eating syndrome, among other presentations. Treatment is tailored to the specific pattern your teen is experiencing.',
      },
      {
        q: 'How do you determine the right treatment approach for OSFED?',
        a: "Our clinical team conducts a comprehensive assessment to understand your teen's specific eating patterns, triggers, and co-occurring conditions. We then develop a personalized treatment plan using evidence-based approaches that target the core features of their disorder.",
      },
    ],
    relatedPrograms: ['residential-treatment', 'php', 'iop'],
    relatedConditions: [
      'anorexia-nervosa-treatment',
      'bulimia-nervosa-treatment',
      'binge-eating-disorder-treatment',
      'depression-treatment',
    ],
    metaTitle: 'Adolescent OSFED Treatment | Silver State',
    metaDescription:
      'Individualized adolescent OSFED treatment at Silver State in Las Vegas. Evidence-based care for teens ages 11-17 with other specified eating disorders.',
    reviewedBy: 'Dr. Russ Park, MD',
    reviewDate: '2026-02-01',
    sources: [
      {
        label: 'NEDA: Other Specified Feeding or Eating Disorder',
        url: 'https://www.nationaleatingdisorders.org/other-specified-feeding-or-eating-disorder/',
      },
      {
        label: 'NIMH: Eating Disorders',
        url: 'https://www.nimh.nih.gov/health/topics/eating-disorders',
      },
      { label: 'APA: Eating Disorders', url: 'https://www.apa.org/topics/eating-disorders' },
    ],
  },
  {
    slug: 'compulsive-eating-treatment',
    name: 'Compulsive Eating Treatment',
    heroImage: '/assets/facility/bedroom-welcome.webp',
    sectionImages: ['/assets/stock/compulsive-eating-therapy.jpg', '/assets/stock/psychologist-with-teen.jpg'],
    headline: 'Adolescent Compulsive Eating Treatment at Silver State',
    category: 'eating-disorders',
    description:
      'Compulsive eating in adolescents involves a persistent pattern of eating beyond hunger, often driven by emotional distress, boredom, or a need for comfort. Unlike binge eating disorder, compulsive eating may not involve distinct binge episodes but rather a continuous pattern of overeating that the teen feels unable to control.\n\nAt Silver State, we treat compulsive eating in teens ages 11–17 by addressing the emotional triggers and developing healthier coping strategies. Our program combines clinical therapy with nutritional support to help your teen develop a balanced, non-restrictive relationship with food.',
    symptoms: [
      'Eating when not physically hungry or eating past the point of fullness',
      'Using food to cope with stress, anxiety, boredom, or sadness',
      'Feeling out of control around food or unable to stop eating',
      'Eating in secret or hiding food wrappers or containers',
      'Shame or guilt after eating episodes',
      'Weight gain or fluctuations causing emotional distress',
      'Preoccupation with food throughout the day',
    ],
    therapies: [
      'Cognitive Behavioral Therapy for Eating Disorders (CBT-E)',
      'Dialectical Behavior Therapy (DBT)',
      'Nutritional Counseling',
      'Mindfulness-Based Eating Awareness',
    ],
    approach:
      "Silver State's compulsive eating treatment focuses on understanding the emotional function of overeating and developing alternative coping strategies. Through Residential, PHP, and IOP, your teen participates in individual therapy to identify triggers, group sessions to reduce shame, and structured meals with nutritional support. Our clinical team addresses co-occurring conditions like anxiety and depression that often drive compulsive eating patterns. Our 4:1 staff ratio ensures your teen receives personalized attention and support throughout treatment.",
    faqs: [
      {
        q: 'Is compulsive eating the same as binge eating disorder?',
        a: 'They are related but distinct. Binge eating disorder involves discrete binge episodes with a sense of loss of control. Compulsive eating may involve continuous overeating patterns without clear binge episodes. Both respond to evidence-based treatment.',
      },
      {
        q: 'Will treatment involve dieting or food restriction?',
        a: 'No. Our approach is non-diet and non-restrictive. We help teens develop a balanced relationship with food through structured meals, nutritional education, and emotional coping skills — not by restricting what they eat.',
      },
      {
        q: 'What if my teen also has anxiety or depression?',
        a: 'Co-occurring conditions are common with compulsive eating. Our treatment plans address all diagnoses simultaneously through our dual diagnosis approach, ensuring your teen receives comprehensive care.',
      },
    ],
    relatedPrograms: ['residential-treatment', 'php', 'iop'],
    relatedConditions: [
      'binge-eating-disorder-treatment',
      'depression-treatment',
      'anxiety-treatment',
    ],
    metaTitle: 'Adolescent Compulsive Eating Treatment | Silver State',
    metaDescription:
      'Specialized compulsive eating treatment for teens ages 11-17 at Silver State in Las Vegas. Non-restrictive, evidence-based care for emotional eating patterns.',
    reviewedBy: 'Dr. Russ Park, MD',
    reviewDate: '2026-02-01',
    sources: [
      {
        label: 'NEDA: Compulsive Overeating',
        url: 'https://www.nationaleatingdisorders.org/compulsive-overeating/',
      },
      {
        label: 'NIMH: Eating Disorders',
        url: 'https://www.nimh.nih.gov/health/topics/eating-disorders',
      },
      {
        label: 'APA: Eating Disorders',
        url: 'https://www.apa.org/topics/eating-disorders',
      },
    ],
  },
]

// Legacy alias preserved for existing imports in page wrappers.
export const conditionPages: ConditionData[] = conditions

// Category-filtered exports
export const mentalHealthConditions: ConditionData[] = conditions.filter(
  (c) => c.category === 'mental-health',
)
export const substanceAbuseConditions: ConditionData[] = conditions.filter(
  (c) => c.category === 'substance-abuse',
)
export const eatingDisorderConditions: ConditionData[] = conditions.filter(
  (c) => c.category === 'eating-disorders',
)

// Slug lookup helper
export function getConditionBySlug(slug: string): ConditionData | undefined {
  return conditions.find((c) => c.slug === slug)
}
