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
    heroImage: '/assets/facility-gallery/therapy-room-seating.jpg',
    sectionImages: ['/assets/stock/psychologist-with-teen.jpg', '/assets/stock/group-therapy-session.jpg'],
    seoKeywords: ['teen anxiety treatment', 'anxiety in teens', 'adolescent anxiety treatment', 'teen anxiety therapy Las Vegas', 'anxiety treatment for teenagers'],
    headline: 'Adolescent Anxiety Treatment at Silver State',
    category: 'mental-health',
    description:
      'Anxiety disorders are the most common mental health condition among adolescents, affecting nearly one in three teens before age 18 according to the National Institute of Mental Health (NIMH). Silver State helps adolescents ages 11–17 overcome the debilitating effects of anxiety disorders, including generalized anxiety disorder (GAD), social anxiety, separation anxiety, panic disorder, and specific phobias. For many young people, anxiety in teens goes far beyond everyday worry — it can disrupt school performance, strain friendships, and make daily life feel overwhelming.\n\nAt our Las Vegas treatment center, we understand that adolescent anxiety often looks different than it does in adults. Your child may become irritable, avoid situations they once enjoyed, or experience physical symptoms like headaches and stomachaches that have no medical explanation. Some teens develop panic attacks, while others quietly withdraw from activities and friendships they once valued.\n\nResearch shows that untreated anxiety in adolescence significantly increases the risk of depression, substance use, and academic failure according to the Centers for Disease Control and Prevention (CDC). The good news is that anxiety disorders are among the most treatable mental health conditions, especially when intervention begins early. Our adolescent-specialized clinical team provides evidence-based treatment in a safe, supportive environment designed specifically for young people.\n\nSilver State offers a full continuum of care so your teen receives the right level of support. Whether your child needs the immersive structure of residential treatment or the flexibility of outpatient programming, our clinicians develop an individualized plan that addresses the specific type and severity of their anxiety.',
    symptoms: [
      'Persistent worry or fear that seems out of proportion to the situation',
      'Avoidance of school, social events, or new experiences',
      'Difficulty sleeping or frequent nightmares',
      'Physical complaints such as headaches, stomachaches, or nausea',
      'Irritability or unexpected emotional outbursts',
      'Difficulty concentrating on schoolwork or activities',
      'Constant need for reassurance from parents or caregivers',
      'Panic attacks with rapid heartbeat, shortness of breath, or dizziness',
      'Perfectionism or excessive fear of making mistakes',
      'Refusal to participate in age-appropriate activities due to fear',
    ],
    therapies: [
      'Cognitive Behavioral Therapy (CBT)',
      'Dialectical Behavior Therapy (DBT)',
      'Exposure and Response Prevention (ERP)',
      'Mindfulness-Based Stress Reduction (MBSR)',
    ],
    approach:
      "Silver State treats adolescent anxiety through our residential program and comprehensive therapy offerings, tailored to your teen's severity level. With a 4:1 staff-to-client ratio, your child receives individualized attention from clinicians who specialize in teen anxiety. Treatment begins with a thorough clinical assessment to identify the specific anxiety disorder and any co-occurring conditions, followed by a personalized plan that combines individual therapy, group skill-building, and experiential modalities.\n\nOur on-site academics ensure your teen stays on track with school while learning coping strategies, and family therapy sessions help the whole family understand and support recovery. As your teen builds confidence and masters anxiety management skills, we prepare them for a successful transition home with outpatient referrals and aftercare support to maintain progress.",
    faqs: [
      {
        q: 'How long does adolescent anxiety treatment take?',
        a: "Treatment length varies by severity. Residential stays typically last 45–90 days. Your teen's clinical team reassesses regularly and adjusts the plan as they make progress, with aftercare planning to support continued recovery.",
      },
      {
        q: 'What types of anxiety do you treat in teens?',
        a: 'We treat all anxiety disorders in adolescents, including generalized anxiety disorder (GAD), social anxiety disorder, panic disorder, separation anxiety, specific phobias, and selective mutism.',
      },
      {
        q: 'Does insurance cover teen anxiety treatment?',
        a: 'Most major insurance plans cover adolescent anxiety treatment at Silver State. Our admissions team will verify your benefits and explain your coverage before treatment begins.',
      },
      {
        q: 'How do I know if my teen has normal worry or an anxiety disorder?',
        a: 'Normal worry is temporary and proportional to the situation. An anxiety disorder involves persistent, excessive fear that interferes with daily life — school attendance, friendships, sleep, or family activities. If worry is controlling your teen rather than your teen controlling the worry, a professional evaluation is recommended.',
      },
      {
        q: 'Can anxiety in teenagers be cured?',
        a: 'Anxiety disorders are highly treatable. Most teens who complete evidence-based treatment like CBT learn to manage their anxiety effectively and return to full, active lives. Early intervention during adolescence produces especially strong long-term outcomes.',
      },
      {
        q: 'What is the success rate of treatment for teen anxiety?',
        a: 'Research published by the National Institute of Mental Health (NIMH) shows that approximately 60–80% of adolescents with anxiety disorders respond positively to evidence-based treatments such as CBT. Outcomes improve further when therapy is combined with family involvement and, when appropriate, medication management.',
      },
      {
        q: 'How is anxiety diagnosed in adolescents?',
        a: 'Anxiety disorders in adolescents are diagnosed using criteria from the Diagnostic and Statistical Manual of Mental Disorders (DSM-5), which requires persistent, excessive worry or fear that interferes with daily functioning. A qualified clinician conducts a comprehensive evaluation including clinical interviews, behavioral observation, and standardized assessment tools to determine the specific type and severity of the anxiety disorder.',
      },
    ],
    relatedPrograms: ['residential-treatment'],
    relatedConditions: ['depression-treatment', 'trauma-ptsd-treatment', 'ocd-treatment'],
    metaTitle: 'Adolescent Anxiety Treatment | Silver State',
    metaDescription:
      'Evidence-based adolescent anxiety treatment at Silver State in Las Vegas. CBT, DBT, and family therapy in a structured residential program for teens 11-17.',
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
    heroImage: '/assets/facility-gallery/hallway-rooms-numbered.jpg',
    sectionImages: ['/assets/stock/teen-depression-therapy.jpg', '/assets/stock/family-therapy-session.jpg'],
    seoKeywords: ['adolescent depression treatment', 'teen depression treatment', 'teen depression therapy Las Vegas', 'depression in teenagers', 'youth depression program'],
    headline: 'Adolescent Depression Treatment at Silver State',
    category: 'mental-health',
    description:
      "Major depressive disorder is one of the leading causes of disability among adolescents, with approximately one in five teens experiencing a major depressive episode before adulthood according to the National Institute of Mental Health (NIMH). Depression is more than sadness — in teenagers, it often manifests as irritability, withdrawal, and a loss of interest in activities that once brought joy. Silver State provides specialized teen depression treatment for families across Las Vegas and the surrounding region.\n\nIn adolescents ages 11–17, depression can look very different from what parents expect. Rather than expressing sadness, your teen may become angry, argumentative, or emotionally explosive. They may spend increasing time isolated in their room, lose motivation for schoolwork, or complain of unexplained physical symptoms. Social media comparison, academic pressure, family conflict, and identity development all contribute to the rising rates of teen depression.\n\nWithout treatment, adolescent depression carries serious risks including academic failure, substance use, self-harm, and suicidal ideation according to the Centers for Disease Control and Prevention (CDC). Research consistently shows that early intervention produces the best long-term outcomes, and the adolescent brain responds particularly well to evidence-based therapies like CBT and DBT.\n\nAt Silver State, we specialize in helping teens break free from the grip of depression. Our clinicians create individualized treatment plans that address the root causes of your teen's depression — not just the symptoms — through our residential program and evidence-based therapy offerings.",
    symptoms: [
      'Persistent sadness, emptiness, or hopelessness lasting two weeks or more',
      'Loss of interest in friends, hobbies, or activities they previously enjoyed',
      'Changes in appetite or significant weight changes',
      'Sleeping too much or difficulty falling and staying asleep',
      'Fatigue or loss of energy even with adequate rest',
      'Difficulty concentrating, drop in school performance',
      'Withdrawal from family and social situations',
      'Expressions of worthlessness or excessive guilt',
      'Irritability, anger outbursts, or emotional volatility',
      'Unexplained physical complaints such as headaches or body aches',
    ],
    therapies: [
      'Cognitive Behavioral Therapy (CBT)',
      'Dialectical Behavior Therapy (DBT)',
      'Interpersonal Therapy (IPT)',
      'Behavioral Activation',
    ],
    approach:
      "Silver State's depression treatment integrates individual therapy, group sessions, and family involvement within our residential program. Our 4:1 staff-to-client ratio ensures your teen builds a strong therapeutic relationship with their treatment team. Treatment begins with a comprehensive clinical assessment to identify the severity of depression, any co-occurring conditions, and the specific factors contributing to your teen's symptoms.\n\nOn-site academics keep your child engaged in learning, while our structured daily programming provides the routine and purpose that depression often takes away. Family therapy is woven into every aspect of care, helping parents learn how to support their teen without enabling avoidance. As your teen progresses, our discharge planning provides a gradual transition back to daily life with outpatient referrals and aftercare support.",
    faqs: [
      {
        q: 'How do I know if my teen needs depression treatment?',
        a: "If your teen has experienced persistent sadness, withdrawal, or loss of interest for more than two weeks, and it's affecting their daily functioning, it may be time to seek professional help. Our admissions team can help you assess the situation.",
      },
      {
        q: 'What does the daily treatment schedule look like for teen depression?',
        a: 'Each day at Silver State follows a structured schedule that balances clinical therapy with wellness activities. Teens participate in individual therapy, group sessions, family therapy, on-site academics, and therapeutic activities like art therapy and mindfulness — all designed to address depression from multiple angles.',
      },
      {
        q: 'Can depression in teens be treated without medication?',
        a: 'Many teens respond well to therapy alone, particularly CBT and DBT. Our clinical team evaluates each teen individually and discusses all treatment options, including therapy-focused approaches, with families before making recommendations.',
      },
      {
        q: 'What causes depression in teenagers?',
        a: 'Teen depression results from a combination of biological, psychological, and environmental factors. Genetics, brain chemistry, hormonal changes, trauma, academic stress, social media, family conflict, and major life transitions can all contribute. Our assessment identifies the specific factors affecting your teen.',
      },
      {
        q: 'How is teen depression different from adult depression?',
        a: 'Adolescent depression more commonly presents as irritability, anger, and physical complaints rather than the persistent sadness seen in adults. Teens may also be more likely to withdraw from peers, experience academic decline, and engage in risky behaviors. Our clinicians specialize in recognizing and treating these adolescent-specific presentations.',
      },
      {
        q: 'What is the success rate of treatment for teen depression?',
        a: 'According to the American Psychological Association (APA), approximately 60–70% of adolescents with major depression respond to evidence-based psychotherapy such as CBT, with response rates improving when therapy is combined with medication management. Early intervention during adolescence is associated with significantly better long-term outcomes.',
      },
      {
        q: 'How is depression diagnosed in adolescents?',
        a: 'Depression in adolescents is diagnosed based on criteria from the DSM-5, which requires a depressed or irritable mood and loss of interest lasting at least two weeks along with additional symptoms such as sleep changes, fatigue, and difficulty concentrating. A comprehensive clinical evaluation by a qualified mental health professional includes interviews with both the teen and their family to assess symptom severity and rule out other conditions.',
      },
    ],
    relatedPrograms: ['residential-treatment'],
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
    heroImage: '/assets/facility-gallery/therapy-room-cozy.jpg',
    sectionImages: ['/assets/stock/individual-therapy-pink.jpg', '/assets/stock/family-art-therapy.jpg'],
    seoKeywords: ['teen trauma therapy', 'adolescent PTSD treatment', 'teen PTSD treatment Las Vegas', 'trauma therapy for teenagers', 'childhood trauma treatment'],
    headline: 'Adolescent Trauma & PTSD Treatment at Silver State',
    category: 'mental-health',
    description:
      "Post-traumatic stress disorder (PTSD) and trauma-related disorders are especially damaging during the teen years, with research from the National Institute of Mental Health (NIMH) indicating that up to 15–43% of adolescents experience at least one traumatic event and approximately 3–15% of girls and 1–6% of boys develop PTSD. Silver State helps adolescents ages 11–17 heal from the lasting effects of traumatic experiences, including abuse, neglect, violence, accidents, community violence, and loss.\n\nTraumatic experiences can profoundly affect an adolescent's developing brain and sense of safety. Teens with unresolved trauma may struggle with trust, emotional reactivity, dissociation, and self-destructive behaviors. Many develop co-occurring conditions such as depression, anxiety, substance use, or eating disorders as they attempt to cope with overwhelming feelings.\n\nEarly intervention is essential because adolescent trauma that goes untreated can lead to chronic mental health conditions, relationship difficulties, and impaired functioning that persist into adulthood. The developing teenage brain also has remarkable neuroplasticity, meaning that evidence-based trauma therapies can be especially effective during this window.\n\nAt our Las Vegas treatment center, Silver State provides trauma-informed care with clinicians trained in EMDR, TF-CBT, somatic experiencing, and other proven approaches. We help teens process what happened, build healthy coping skills, and reclaim their sense of hope for the future.",
    symptoms: [
      'Flashbacks, nightmares, or intrusive memories of traumatic events',
      'Avoidance of people, places, or situations that trigger memories',
      'Emotional numbness or feeling detached from others',
      'Hypervigilance, being easily startled, or always feeling on edge',
      'Difficulty trusting adults or peers',
      'Sudden anger outbursts or aggressive behavior',
      'Difficulty concentrating or decline in school performance',
      'Dissociative episodes or feeling disconnected from reality',
      'Self-harming behaviors as a way to cope with emotional pain',
      'Regressive behaviors such as bedwetting or clinginess in younger teens',
    ],
    therapies: [
      'Eye Movement Desensitization and Reprocessing (EMDR)',
      'Trauma-Focused Cognitive Behavioral Therapy (TF-CBT)',
      'Dialectical Behavior Therapy (DBT)',
      'Somatic Experiencing',
    ],
    approach:
      "Silver State's trauma treatment begins with creating a physically and emotionally safe environment where your teen can begin to heal. Our 4:1 staff-to-client ratio allows clinicians to build trust gradually and work at your teen's pace. We use a phased approach: first establishing safety and stabilization, then processing traumatic memories through evidence-based modalities like EMDR and TF-CBT, and finally integrating new skills for daily life.\n\nWithin our residential program, we integrate individual trauma processing with group skill-building and family therapy. Family involvement is critical — we help parents understand how trauma affects adolescent behavior and equip them to provide a supportive recovery environment at home. On-site academics provide stability and normalcy during treatment, and our discharge planning ensures your teen transitions successfully with outpatient referrals and aftercare support as they build resilience.",
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
        a: "Not always. The appropriate level of care depends on the severity of symptoms and your teen's safety. Some teens benefit from the 24/7 support of residential treatment, while others may be better served by outpatient care. Our admissions team helps determine the right fit.",
      },
      {
        q: 'How long does teen PTSD treatment take?',
        a: 'Treatment duration depends on the type and severity of trauma. Single-incident trauma may respond to 8–16 weeks of focused therapy, while complex trauma often requires longer treatment across multiple levels of care. Our clinical team regularly reassesses progress and adjusts the plan accordingly.',
      },
      {
        q: 'Can trauma cause behavioral problems in teenagers?',
        a: 'Yes. Many behavioral issues in teens — including aggression, defiance, substance use, and self-harm — are rooted in unresolved trauma. Our trauma-informed approach looks beneath surface behaviors to address the underlying pain driving them, which leads to more lasting improvement.',
      },
      {
        q: 'What is the success rate of treatment for teen PTSD?',
        a: 'According to the American Psychological Association (APA), trauma-focused CBT and EMDR produce significant symptom reduction in 60–90% of adolescents with PTSD. Early intervention is particularly effective, as the developing adolescent brain responds well to evidence-based trauma therapies.',
      },
      {
        q: 'How is PTSD diagnosed in adolescents?',
        a: 'PTSD in adolescents is diagnosed using DSM-5 criteria, which require exposure to a traumatic event followed by symptoms in four clusters: intrusive re-experiencing, avoidance, negative changes in mood and cognition, and hyperarousal. A licensed clinician conducts a thorough assessment including trauma history, symptom inventories, and collateral information from parents to confirm the diagnosis.',
      },
    ],
    relatedPrograms: ['residential-treatment'],
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
    heroImage: '/assets/facility-gallery/therapy-room-counselor.jpg',
    sectionImages: ['/assets/stock/psychologist-with-teen.jpg', '/assets/stock/treatment-plan-doctor.jpg'],
    seoKeywords: ['teen suicidal ideation treatment', 'adolescent self-harm treatment', 'teen suicide prevention Las Vegas', 'suicidal thoughts in teenagers', 'teen crisis intervention'],
    headline: 'Adolescent Suicidal Ideation Treatment at Silver State',
    category: 'mental-health',
    description:
      "Suicide is the second leading cause of death among adolescents in the United States according to the Centers for Disease Control and Prevention (CDC), making early identification of suicidal ideation critically important. Silver State provides immediate, compassionate intervention for adolescents ages 11–17 experiencing persistent thoughts about ending their life, and warning signs — including self-harm, talk of hopelessness, and social withdrawal — must never be dismissed as typical teen behavior.\n\nSuicidal ideation in teenagers can range from passive thoughts (\"I wish I weren't here\") to active plans with intent. Both require clinical attention. Adolescents who self-harm through cutting, burning, or other behaviors are communicating emotional pain that has exceeded their ability to cope, and these behaviors significantly increase the risk of a suicide attempt.\n\nThe factors contributing to teen suicidal ideation are complex and often interconnected: depression, anxiety, trauma, bullying, academic pressure, family conflict, identity struggles, and substance use can all play a role. Early intervention is critical because adolescents in crisis respond well to evidence-based treatments like DBT and CBT-SP when they receive care in a structured, supportive environment.\n\nAt our Las Vegas treatment center, Silver State's crisis-trained clinical team creates a safe environment where your child can express their pain, develop safety plans, and learn healthier ways to cope with overwhelming emotions. We believe every teen deserves to find hope again.",
    symptoms: [
      'Talking or writing about wanting to die or feeling like a burden',
      'Withdrawal from friends, family, and activities',
      'Giving away prized possessions or saying goodbye',
      'Increased recklessness or risk-taking behavior',
      'Dramatic mood swings or sudden calm after a period of depression',
      'Increased use of alcohol or drugs',
      'Expressions of hopelessness or feeling trapped',
      'Self-harm behaviors such as cutting, burning, or scratching',
      'Searching online for methods or writing suicide notes',
      'Sudden changes in appearance or loss of interest in personal care',
    ],
    therapies: [
      'Dialectical Behavior Therapy (DBT)',
      'Cognitive Behavioral Therapy for Suicide Prevention (CBT-SP)',
      'Safety Planning Intervention',
      'Collaborative Assessment and Management of Suicidality (CAMS)',
    ],
    approach:
      "Silver State prioritizes immediate safety while addressing the underlying pain driving suicidal thoughts. Our residential program provides 24/7 monitoring with a 4:1 staff-to-client ratio, ensuring your teen is never alone during their most vulnerable moments. Treatment begins with comprehensive risk assessment and individualized safety planning, then progresses to evidence-based therapies that help your teen develop distress tolerance, emotional regulation, and reasons for living.\n\nAs your teen stabilizes, we develop a thorough discharge plan with robust safety planning for every transition. Family involvement is essential — we help parents recognize warning signs, remove means of self-harm at home, and support their teen's recovery. Our discharge planning ensures that as your teen transitions to outpatient care, they have the skills, support systems, and crisis plans needed to stay safe.",
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
      {
        q: 'What is the difference between self-harm and a suicide attempt?',
        a: 'Self-harm is often used to cope with emotional pain rather than to end life, but it is still a serious warning sign that requires professional attention. Our clinical team carefully assesses intent and develops a treatment plan that addresses the underlying distress driving the behavior.',
      },
      {
        q: 'How do you help teens transition safely back home after treatment?',
        a: 'Discharge planning begins early in treatment. We develop a comprehensive safety plan with your teen and family, connect you with outpatient providers, establish a crisis response protocol, and ensure your home environment supports continued recovery.',
      },
      {
        q: 'What is the success rate of treatment for teen suicidal ideation?',
        a: 'Research from the National Institute of Mental Health (NIMH) shows that evidence-based interventions like DBT and CBT for Suicide Prevention (CBT-SP) significantly reduce suicidal ideation and self-harm behaviors in adolescents, with studies demonstrating 50–70% reductions in suicide attempts among treated teens. Structured safety planning combined with ongoing therapeutic support produces the strongest outcomes.',
      },
      {
        q: 'How is suicidal ideation diagnosed in adolescents?',
        a: 'Suicidal ideation is assessed through comprehensive clinical interviews that evaluate the frequency, intensity, duration, and specificity of suicidal thoughts. Clinicians use validated screening tools such as the Columbia Suicide Severity Rating Scale (C-SSRS) recommended by the National Institute of Mental Health (NIMH), along with thorough risk factor and protective factor assessments to determine the appropriate level of care.',
      },
    ],
    relatedPrograms: ['residential-treatment'],
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
    heroImage: '/assets/facility-gallery/therapy-room-cozy.jpg',
    sectionImages: ['/assets/stock/holistic-therapy.jpg', '/assets/stock/group-therapy-session.jpg'],
    seoKeywords: ['teen OCD treatment', 'adolescent OCD treatment', 'OCD treatment for teenagers', 'teen OCD therapy Las Vegas', 'ERP therapy for teens'],
    headline: 'Adolescent OCD Treatment at Silver State',
    category: 'mental-health',
    description:
      'Obsessive-compulsive disorder (OCD) is a neurobiological condition affecting approximately 1–2% of adolescents according to the National Institute of Mental Health (NIMH), causing intrusive, unwanted thoughts (obsessions) that drive repetitive behaviors or mental rituals (compulsions). Silver State helps adolescents ages 11–17 break free from the cycle of obsessions and compulsions that can take over daily life. OCD can consume hours of a young person\'s day, severely impacting school, friendships, and family life.\n\nOCD in teenagers often presents differently than parents expect. Common obsessions include contamination fears, harm-related thoughts, unwanted sexual or violent intrusions, and a need for things to feel "just right." Compulsions may be visible — like hand washing, checking, or arranging — or invisible mental rituals such as counting, praying, or repeating phrases. Many teens hide their symptoms out of shame, making it crucial for parents to recognize the signs.\n\nWithout treatment, OCD typically worsens over time, leading to increasing isolation, academic decline, and family conflict. However, OCD is one of the most treatable anxiety-related conditions when addressed with proper evidence-based approaches. Research shows that Exposure and Response Prevention (ERP) produces significant improvement in the majority of adolescents who complete treatment.\n\nAt our Las Vegas treatment center, Silver State specializes in adolescent OCD treatment with clinicians trained in ERP and CBT who understand that OCD in young people is not about being "neat" or "particular" — it\'s a serious neurobiological condition that responds well to structured, compassionate care.',
    symptoms: [
      'Repetitive hand washing, checking, counting, or arranging behaviors',
      'Intrusive, distressing thoughts that the teen cannot control',
      'Excessive need for symmetry, order, or exactness',
      'Avoidance of situations that trigger obsessive thoughts',
      'Spending excessive time on rituals that interfere with daily activities',
      'Seeking constant reassurance from parents or family members',
      'Mental rituals such as counting, repeating words, or praying compulsively',
      'Distress when routines or arrangements are disrupted',
      'Raw or chapped hands from excessive washing',
    ],
    therapies: [
      'Exposure and Response Prevention (ERP)',
      'Cognitive Behavioral Therapy (CBT)',
      'Acceptance and Commitment Therapy (ACT)',
      'Habit Reversal Training',
    ],
    approach:
      "Silver State's OCD treatment centers on Exposure and Response Prevention (ERP), the gold-standard therapy for OCD. Within our residential program, clinicians guide your teen through gradual, supported exposure to anxiety-provoking situations while teaching them to resist the urge to perform compulsions. Our 4:1 staff ratio means dedicated support during challenging exposures, and on-site academics ensure school continuity during treatment.\n\nFamily involvement is essential in adolescent OCD treatment. Parents often unknowingly accommodate OCD behaviors — providing reassurance, enabling avoidance, or participating in rituals. Our family therapy component helps parents recognize accommodation patterns and learn how to support their teen's ERP work at home. As your teen builds confidence managing OCD, we prepare them for a successful transition with outpatient referrals and continued aftercare support.",
    faqs: [
      {
        q: 'What is ERP and why is it effective for teen OCD?',
        a: 'Exposure and Response Prevention gradually exposes your teen to situations that trigger obsessions while helping them resist performing compulsions. Over time, anxiety naturally decreases. Research consistently shows ERP is the most effective therapy for OCD in adolescents.',
      },
      {
        q: 'How long does OCD treatment take for teens?',
        a: 'OCD treatment duration depends on severity. Residential treatment may last 60–90 days for severe cases. Many teens see meaningful improvement within the first few weeks of consistent ERP, and our clinical team will recommend the right timeline for your teen.',
      },
      {
        q: 'Can OCD get worse during treatment?',
        a: "It's normal for anxiety to temporarily increase at the start of ERP therapy as your teen faces their fears. This is actually a sign the treatment is working. Our clinical team carefully paces exposures and provides support throughout the process.",
      },
      {
        q: 'What causes OCD in teenagers?',
        a: 'OCD is a neurobiological condition involving differences in brain circuitry, particularly the areas that regulate doubt and threat detection. Genetics play a significant role — teens with a family history of OCD are at higher risk. Stress and trauma can also trigger or worsen symptoms in predisposed individuals.',
      },
      {
        q: 'How can parents help a teen with OCD at home?',
        a: 'The most important step is to stop accommodating OCD behaviors, which can feel counterintuitive. Our family therapy program teaches parents how to respond supportively without reinforcing the OCD cycle, how to encourage their teen to use ERP skills, and how to maintain healthy family dynamics.',
      },
      {
        q: 'What is the success rate of treatment for teen OCD?',
        a: 'According to the American Psychological Association (APA), Exposure and Response Prevention (ERP) produces clinically significant improvement in approximately 60–80% of adolescents with OCD. Many teens experience a 40–60% reduction in symptom severity within the first 12–16 weeks of treatment.',
      },
      {
        q: 'How is OCD diagnosed in adolescents?',
        a: 'OCD is diagnosed using DSM-5 criteria, which require the presence of obsessions, compulsions, or both that are time-consuming, cause significant distress, or interfere with daily functioning. A qualified clinician conducts a comprehensive evaluation using tools such as the Yale-Brown Obsessive Compulsive Scale (Y-BOCS) to assess symptom type and severity.',
      },
    ],
    relatedPrograms: ['residential-treatment'],
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
    heroImage: '/assets/facility-gallery/therapy-room-dresser.jpg',
    sectionImages: ['/assets/stock/bipolar-occupational.jpg', '/assets/stock/treatment-plan-doctor.jpg'],
    seoKeywords: ['teen bipolar treatment', 'adolescent bipolar disorder treatment', 'bipolar disorder in teens', 'teen bipolar therapy Las Vegas', 'teenage mood disorder treatment'],
    headline: 'Adolescent Bipolar Disorder Treatment at Silver State',
    category: 'mental-health',
    description:
      "Bipolar disorder is a serious mood condition affecting approximately 2–3% of adolescents according to the National Institute of Mental Health (NIMH), involving dramatic shifts between episodes of mania (or hypomania) and depression that go far beyond normal teenage mood swings. Silver State helps adolescents ages 11–17 stabilize mood episodes and build the skills for long-term management. These episodes can last days to weeks and significantly disrupt a teen's ability to function at school, maintain relationships, and make safe decisions.\n\nBipolar disorder is frequently misdiagnosed as depression, ADHD, or DMDD because the presentation in teens differs from adults. Adolescents with bipolar disorder are more likely to experience rapid cycling, mixed episodes (simultaneous manic and depressive symptoms), and severe irritability rather than the classic euphoric mania seen in adults.\n\nEarly, accurate diagnosis and treatment during adolescence are critical. Without intervention, bipolar disorder increases the risk of substance abuse, academic failure, legal problems, and suicidal behavior. However, with structured treatment that combines therapy, psychoeducation, and family involvement, most teens with bipolar disorder can achieve meaningful stability and lead fulfilling lives.\n\nAt our Las Vegas treatment center, Silver State's clinical team specializes in distinguishing bipolar disorder from other mood conditions and providing evidence-based treatment tailored to the adolescent brain. We understand the complexity of this diagnosis and provide the structured, supportive environment teens need to stabilize.",
    symptoms: [
      'Extreme mood swings between euphoria and deep sadness',
      'Periods of unusually high energy, reduced need for sleep',
      'Rapid, pressured speech or racing thoughts',
      'Impulsive or risky behavior during manic episodes',
      'Periods of withdrawal, fatigue, and hopelessness during depressive episodes',
      'Irritability or agitation that seems disproportionate',
      'Difficulty maintaining consistent school performance',
      'Grandiosity or inflated self-esteem during manic episodes',
      'Hypersexual behavior or inappropriate social behavior',
      'Cycling between periods of overproductivity and inability to function',
    ],
    therapies: [
      'Cognitive Behavioral Therapy (CBT)',
      'Dialectical Behavior Therapy (DBT)',
      'Family-Focused Therapy (FFT)',
      'Interpersonal and Social Rhythm Therapy (IPSRT)',
    ],
    approach:
      'Silver State provides structured residential treatment for adolescent bipolar disorder. Our approach combines therapy with psychoeducation to help your teen recognize early warning signs of mood episodes and develop proactive management strategies. The 4:1 staff-to-client ratio ensures close monitoring during mood transitions, and our structured daily schedule provides the routine and sleep hygiene that are essential for mood stability.\n\nFamily therapy is central to our approach — we educate parents about the condition, teach them to recognize prodromal symptoms, and equip the whole family with tools for long-term stability. As your teen stabilizes, our discharge planning prepares them to practice mood management skills independently, with outpatient referrals and aftercare support for sustained recovery.',
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
      {
        q: 'Can bipolar disorder in teens be managed without medication?',
        a: 'Bipolar disorder typically requires a combination of therapy and medication management for optimal outcomes. Our psychiatric team works closely with families to discuss all options, monitor response, and find the approach that works best for your teen.',
      },
      {
        q: 'How do you handle manic episodes during treatment?',
        a: 'Our residential environment provides the structured, calm setting needed during manic episodes. Staff trained in de-escalation techniques, consistent routines, sleep regulation, and a 4:1 ratio ensure your teen receives close support during these challenging periods while maintaining safety for all clients.',
      },
      {
        q: 'What is the success rate of treatment for teen bipolar disorder?',
        a: 'According to the American Psychological Association (APA), a combination of mood-stabilizing medication and evidence-based psychotherapy produces symptom stabilization in approximately 60–70% of adolescents with bipolar disorder. Early diagnosis and consistent treatment adherence are the strongest predictors of long-term stability.',
      },
      {
        q: 'How is bipolar disorder diagnosed in adolescents?',
        a: 'Bipolar disorder is diagnosed using DSM-5 criteria, which require at least one episode of mania or hypomania characterized by elevated mood, increased energy, and reduced need for sleep lasting at least four to seven days. Diagnosis in adolescents requires careful clinical evaluation to distinguish bipolar disorder from ADHD, DMDD, and unipolar depression, often involving mood charting and collateral information from parents and teachers.',
      },
    ],
    relatedPrograms: ['residential-treatment'],
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
    heroImage: '/assets/facility-gallery/classroom-mural-tv.jpg',
    sectionImages: ['/assets/stock/music-therapy-piano.jpg', '/assets/stock/family-art-therapy.jpg'],
    seoKeywords: ['teen autism treatment', 'adolescent autism spectrum support', 'ASD teen therapy Las Vegas', 'autism and mental health treatment teens', 'neurodiversity affirming treatment'],
    headline: 'Adolescent Autism Spectrum Support at Silver State',
    category: 'mental-health',
    description:
      "Autism spectrum disorder (ASD) frequently co-occurs with other mental health conditions, with approximately 70% of autistic adolescents having at least one co-occurring condition and nearly 40% having two or more according to the National Institute of Mental Health (NIMH). Silver State provides neurodiversity-affirming treatment for teens ages 11–17 who are navigating the intersection of autism and co-occurring mental health challenges, including unique difficulties with social communication, sensory processing, and emotional regulation that intensify during the teen years.\n\nThe teenage years are particularly challenging for autistic youth. Increasing social complexity, changing routines, academic demands, and the pressure to fit in can overwhelm coping strategies that worked in childhood. Many autistic teens also experience co-occurring conditions like anxiety, depression, OCD, or ADHD, which can significantly complicate their daily functioning and quality of life.\n\nWithout appropriate support, autistic adolescents are at elevated risk for social isolation, school refusal, self-harm, and crisis. Early, targeted intervention that addresses both autism-related challenges and co-occurring mental health conditions produces the best outcomes for long-term functioning and wellbeing.\n\nAt our Las Vegas treatment center, Silver State's clinicians understand the intersection of autism and mental health. We tailor every treatment plan to respect your teen's neurological differences while building the skills they need to thrive in a world that is not always designed for neurodivergent minds.",
    symptoms: [
      'Difficulty reading social cues or maintaining conversations with peers',
      'Sensory sensitivities that lead to overwhelm or meltdowns',
      'Rigid thinking patterns or intense distress with changes in routine',
      'Challenges with emotional regulation and expressing feelings',
      'Social isolation or difficulty forming and keeping friendships',
      'Co-occurring anxiety, depression, or obsessive behaviors',
      'Meltdowns or shutdowns in response to sensory overload or unexpected change',
      'Difficulty with executive functioning tasks like organization and planning',
      'Intense, focused interests that interfere with other responsibilities',
    ],
    therapies: [
      'Cognitive Behavioral Therapy (CBT) adapted for ASD',
      'Social Skills Training',
      'Dialectical Behavior Therapy (DBT)',
      'Occupational Therapy with Sensory Integration',
    ],
    approach:
      "Silver State's autism support program integrates mental health treatment with neurodiversity-affirming practices. Within our residential program, we address co-occurring conditions while building social skills and emotional regulation in a structured, predictable environment. Our 4:1 staff-to-client ratio provides the consistent support autistic teens need, and on-site academics offer accommodations tailored to each student's learning profile.\n\nWe work closely with families to help parents understand their teen's neurological profile, develop effective communication strategies, and create a home environment that supports sensory and emotional needs. Our discharge process is carefully paced to ensure transitions are predictable and well-supported, with outpatient referrals tailored to each teen's needs, recognizing that change can be especially challenging for autistic teens.",
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
      {
        q: 'How do you adapt therapy for autistic teens?',
        a: 'Our clinicians modify evidence-based therapies to be accessible for autistic adolescents. This includes using visual supports, concrete language, special interest integration, flexible session structures, and sensory accommodations. We meet each teen where they are and adapt our approach to their communication style.',
      },
      {
        q: 'Can autistic teens benefit from group therapy?',
        a: 'Yes. Our groups are structured with clear expectations, predictable formats, and smaller sizes when needed. Many autistic teens find tremendous value in connecting with peers who share similar experiences, and group settings provide natural opportunities to practice social skills in a supported environment.',
      },
      {
        q: 'What is the success rate of treatment for teens with autism spectrum disorder?',
        a: 'According to the Centers for Disease Control and Prevention (CDC), early and consistent intervention for co-occurring mental health conditions in autistic teens produces significant improvements in anxiety, depression, and social functioning. Adapted CBT and social skills training have been shown to reduce anxiety symptoms in 50–70% of autistic adolescents who complete treatment.',
      },
      {
        q: 'How is autism spectrum disorder diagnosed in adolescents?',
        a: 'ASD is diagnosed using DSM-5 criteria, which require persistent deficits in social communication and interaction along with restricted, repetitive patterns of behavior or interests. Diagnosis in adolescents may involve comprehensive developmental history, standardized assessment tools such as the ADOS-2, and evaluation by a multidisciplinary team to distinguish ASD from social anxiety, ADHD, or other conditions.',
      },
    ],
    relatedPrograms: ['residential-treatment'],
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
    heroImage: '/assets/facility-gallery/classroom-teacher-station.jpg',
    sectionImages: ['/assets/stock/odd-occupational.jpg', '/assets/stock/family-therapy-session.jpg'],
    seoKeywords: ['teen ODD treatment', 'adolescent oppositional defiant disorder treatment', 'ODD therapy for teens', 'teen defiant behavior treatment Las Vegas', 'oppositional behavior in teenagers'],
    headline: 'Adolescent ODD Treatment at Silver State',
    category: 'mental-health',
    description:
      "Oppositional defiant disorder (ODD) is one of the most common behavioral disorders diagnosed in childhood and adolescence, affecting approximately 3–5% of adolescents according to the American Psychological Association (APA). Silver State helps teens ages 11–17 who struggle with a persistent pattern of angry, irritable mood, argumentative behavior, and vindictiveness that significantly disrupts family life, school performance, and peer relationships.\n\nODD in teenagers manifests as more than occasional pushback against rules. Teens with ODD may argue with every request, deliberately provoke parents and siblings, refuse to comply with reasonable expectations, and blame others for their own mistakes. These patterns are consistent, occurring in multiple settings, and create significant conflict that strains the entire family system.\n\nResearch shows that ODD is frequently driven by underlying factors such as unresolved trauma, anxiety, ADHD, or difficulty with emotional regulation. When these root causes go unaddressed, defiant behavior tends to escalate over time, potentially progressing to conduct disorder or substance use. Early intervention is critical for redirecting this trajectory.\n\nAt our Las Vegas treatment center, Silver State's clinicians look beyond the challenging behavior to understand what's driving it. We help teens develop healthier ways to express frustration and interact with authority figures while working with families to transform conflict patterns into collaborative relationships.",
    symptoms: [
      'Frequent temper outbursts that are out of proportion to the situation',
      'Persistent argumentativeness with parents, teachers, and authority figures',
      'Active defiance or refusal to follow rules and requests',
      'Deliberately annoying others or being easily annoyed',
      'Blaming others for their own mistakes or misbehavior',
      'Spiteful or vindictive behavior',
      'Difficulty maintaining friendships due to interpersonal conflict',
      'Resentful or easily angered by perceived unfairness',
      'Refusal to negotiate or compromise in conflicts',
    ],
    therapies: [
      'Cognitive Behavioral Therapy (CBT)',
      'Parent Management Training (PMT)',
      'Dialectical Behavior Therapy (DBT)',
      'Collaborative Problem Solving (CPS)',
    ],
    approach:
      "Silver State's ODD treatment focuses on teaching emotional regulation, communication skills, and collaborative problem-solving. Within our residential program, we help your teen identify the emotions beneath their defiant behavior and develop healthier responses. Our 4:1 staff ratio enables consistent, patient engagement with teens who may initially resist therapeutic relationships.\n\nFamily therapy is crucial — ODD affects the entire family, and lasting change requires shifting interaction patterns on both sides. We work with parents to replace coercive cycles with collaborative problem-solving, set effective boundaries without escalation, and build a more positive family dynamic. As your teen progresses, families practice new skills with clinical guidance and are prepared for continued success through aftercare planning.",
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
      {
        q: 'Is ODD caused by bad parenting?',
        a: 'No. ODD is a clinical condition with biological, temperamental, and environmental contributors. While family dynamics can influence the severity of symptoms, ODD is not caused by parenting alone. Our program supports the whole family without blame, focusing on practical strategies that improve outcomes for everyone.',
      },
      {
        q: 'How do you build a therapeutic relationship with a defiant teen?',
        a: 'Our clinicians are experienced in engaging reluctant teens. We use motivational interviewing, collaborative problem-solving, and genuine relationship-building rather than authority-based approaches. Many teens with ODD respond positively once they feel heard and respected rather than controlled.',
      },
      {
        q: 'What is the success rate of treatment for teen oppositional defiant disorder?',
        a: 'Research cited by the American Psychological Association (APA) shows that evidence-based interventions such as Parent Management Training and CBT produce significant behavioral improvement in approximately 65–75% of adolescents with ODD. Outcomes are strongest when treatment includes both the teen and the family system.',
      },
      {
        q: 'How is oppositional defiant disorder diagnosed in adolescents?',
        a: 'ODD is diagnosed using DSM-5 criteria, which require a pattern of angry or irritable mood, argumentative or defiant behavior, and vindictiveness lasting at least six months. A clinician conducts a thorough evaluation including behavioral observations, parent and teacher reports, and screening for co-occurring conditions such as ADHD and anxiety that frequently accompany ODD.',
      },
    ],
    relatedPrograms: ['residential-treatment'],
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
    heroImage: '/assets/facility-gallery/courtyard-patio-seating.jpg',
    sectionImages: ['/assets/stock/conduct-occupational.jpg', '/assets/stock/individual-therapy-pink.jpg'],
    seoKeywords: ['teen conduct disorder treatment', 'adolescent conduct disorder therapy', 'conduct disorder treatment Las Vegas', 'teen behavioral disorder treatment', 'juvenile behavior therapy'],
    headline: 'Adolescent Conduct Disorder Treatment at Silver State',
    category: 'mental-health',
    description:
      'Conduct disorder is a serious behavioral condition affecting approximately 2–10% of adolescents according to the American Psychological Association (APA), involving a repetitive pattern of behavior that violates the rights of others or major age-appropriate social norms. Silver State provides specialized treatment for teens ages 11–17 with conduct disorder, including aggression, destruction of property, deceitfulness, or serious rule violations. Without intervention, conduct disorder can lead to lasting legal, academic, and social consequences.\n\nConduct disorder is more common in boys than girls, though girls may present with different behavioral patterns such as relational aggression and rule violations rather than physical aggression. Many teens with conduct disorder have experienced adverse childhood experiences, trauma, or unstable home environments that contribute to their behavioral patterns.\n\nResearch shows that early, structured intervention during adolescence significantly improves long-term outcomes. Without treatment, conduct disorder increases the risk of antisocial personality disorder, substance abuse, incarceration, and chronic relationship difficulties in adulthood. The adolescent brain is still developing, making this a critical window for teaching alternative behavioral patterns.\n\nAt our Las Vegas treatment center, Silver State provides structured, therapeutic treatment that goes beyond punishment. Our clinicians address the underlying emotional and environmental factors driving the behavior while teaching prosocial skills, empathy development, and emotional regulation.',
    symptoms: [
      'Aggression toward people or animals, including bullying or intimidation',
      'Deliberate destruction of property',
      'Lying, theft, or other forms of deceitfulness',
      'Serious violations of rules, including running away or truancy',
      'Lack of empathy or remorse for the impact of their behavior',
      'Poor academic performance and frequent school discipline issues',
      'Cruelty or callousness toward peers or animals',
      'Intimidation or threatening behavior toward others',
      'Substance use alongside behavioral problems',
    ],
    therapies: [
      'Cognitive Behavioral Therapy (CBT)',
      'Multisystemic Therapy (MST) principles',
      'Dialectical Behavior Therapy (DBT)',
      'Aggression Replacement Training (ART)',
    ],
    approach:
      'Silver State treats conduct disorder through a structured therapeutic environment that provides clear expectations and consistent, compassionate responses. Within our residential program, we combine individual therapy with group skill-building focused on empathy, anger management, and problem-solving. Our 4:1 staff ratio ensures close supervision and mentorship while modeling the healthy adult relationships many of these teens have not experienced.\n\nFamily therapy addresses family dynamics that may reinforce problem behavior and teaches parents effective strategies for setting boundaries and reinforcing prosocial choices. As your teen demonstrates progress, our discharge planning prepares them to practice new skills independently while connecting them with outpatient support and accountability.',
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
      {
        q: 'What role does trauma play in conduct disorder?',
        a: 'Many teens with conduct disorder have experienced trauma, neglect, or adverse childhood experiences that contribute to their behavioral patterns. Our treatment addresses underlying trauma alongside behavioral skills, which produces more lasting change than focusing on behavior alone.',
      },
      {
        q: 'How do you maintain safety with teens who have aggressive behaviors?',
        a: 'Our staff are trained in trauma-informed de-escalation techniques and maintain a 4:1 ratio for close support. We create a structured, predictable environment with clear expectations and consistent consequences. The therapeutic milieu is designed to reduce triggers while building skills for managing anger constructively.',
      },
      {
        q: 'What is the success rate of treatment for teen conduct disorder?',
        a: 'According to the National Institute of Mental Health (NIMH), evidence-based treatments including multisystemic therapy and CBT produce significant behavioral improvement in approximately 50–70% of adolescents with conduct disorder. Early intervention during adolescence is critical, as the developing brain is more responsive to therapeutic skill-building than in adulthood.',
      },
      {
        q: 'How is conduct disorder diagnosed in adolescents?',
        a: 'Conduct disorder is diagnosed using DSM-5 criteria, which require a repetitive pattern of behavior involving aggression toward people or animals, destruction of property, deceitfulness or theft, or serious rule violations over the past 12 months. A comprehensive clinical evaluation includes behavioral assessment, family history review, and screening for co-occurring conditions such as ADHD, trauma, and substance use.',
      },
    ],
    relatedPrograms: ['residential-treatment'],
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
    heroImage: '/assets/facility-gallery/common-area-lounge.jpg',
    sectionImages: ['/assets/stock/dmdd-occupational.jpg', '/assets/stock/group-therapy-session.jpg'],
    seoKeywords: ['teen DMDD treatment', 'adolescent DMDD therapy', 'disruptive mood dysregulation disorder treatment', 'DMDD treatment Las Vegas', 'teen mood dysregulation therapy'],
    headline: 'Adolescent DMDD Treatment at Silver State',
    category: 'mental-health',
    description:
      'Disruptive mood dysregulation disorder (DMDD) is a childhood mood condition characterized by severe, recurrent temper outbursts grossly out of proportion to the situation, occurring three or more times per week, along with a chronically angry or irritable baseline mood between episodes according to the National Institute of Mental Health (NIMH). Silver State helps teens ages 11–17 who experience these persistent mood disruptions that affect every area of their life.\n\nDMDD is a relatively recent diagnostic category that was introduced to address the frequent misdiagnosis of children with chronic irritability as having bipolar disorder. While DMDD shares some features with bipolar disorder, the two conditions are distinct: DMDD involves a persistent angry mood rather than episodic mood cycling, and treatment approaches differ significantly.\n\nWithout treatment, DMDD significantly increases the risk of developing depression and anxiety disorders in adolescence and adulthood. The condition also strains family relationships, disrupts school functioning, and can lead to social isolation as peers and teachers struggle to manage the teen\'s emotional intensity. Research shows that early, targeted intervention can help teens develop the regulation skills they need.\n\nAt our Las Vegas treatment center, Silver State\'s clinical team understands that DMDD is not willful misbehavior — it reflects genuine difficulty regulating emotions that can be effectively treated with the right combination of therapy, skill-building, and family involvement.',
    symptoms: [
      'Severe temper outbursts occurring three or more times per week',
      'Outbursts that are grossly out of proportion to the trigger',
      'Persistently irritable or angry mood most of the day, nearly every day',
      'Difficulty functioning at school due to emotional volatility',
      'Strained relationships with family members and peers',
      'Physical aggression during outbursts',
      'Verbal rages that are intense and prolonged',
      'Difficulty recovering from emotional episodes',
      'Low frustration tolerance in everyday situations',
    ],
    therapies: [
      'Dialectical Behavior Therapy (DBT)',
      'Cognitive Behavioral Therapy (CBT)',
      'Parent Management Training (PMT)',
      'Emotion Regulation Skills Training',
    ],
    approach:
      "Silver State's DMDD treatment prioritizes emotional regulation skill-building in a structured, predictable environment. Within our residential program, teens learn to identify emotional triggers, develop distress tolerance techniques, and practice healthier responses. Our 4:1 staff-to-client ratio provides the consistent support needed during emotional crises, and our structured daily routine minimizes unexpected triggers while building tolerance for frustration.\n\nFamily therapy teaches parents de-escalation strategies and reinforces skills learned in treatment. We help families break the cycle of reactive responses that can inadvertently escalate DMDD outbursts, replacing them with calm, consistent approaches that support emotional regulation. Our discharge planning ensures teens have adequate support as they transition home, with outpatient referrals to continue building independence in managing their emotions.",
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
      {
        q: 'How do you handle outbursts during treatment?',
        a: 'Our staff are trained in trauma-informed de-escalation techniques. During outbursts, we prioritize safety while helping your teen practice the regulation skills they are learning in therapy. Each outburst becomes a learning opportunity rather than a punishment event, and we track patterns to identify triggers proactively.',
      },
      {
        q: 'Is DMDD the same as having a bad temper?',
        a: 'No. DMDD involves a clinical level of emotional dysregulation that significantly impairs functioning. The outbursts are far more intense, frequent, and prolonged than typical anger, and the persistently irritable mood between outbursts distinguishes it from normal temperamental variation.',
      },
      {
        q: 'What is the success rate of treatment for teen DMDD?',
        a: 'According to the National Institute of Mental Health (NIMH), evidence-based treatments such as DBT and CBT combined with parent management training produce significant improvement in emotional regulation and outburst frequency in the majority of adolescents with DMDD. Early treatment also reduces the elevated risk of developing depression and anxiety disorders later in life.',
      },
      {
        q: 'How is DMDD diagnosed in adolescents?',
        a: 'DMDD is diagnosed using DSM-5 criteria, which require severe temper outbursts at least three times per week, a persistently irritable or angry mood between outbursts most of the day nearly every day, and symptoms present for at least 12 months in two or more settings. The diagnosis can only be made between ages 6 and 18, and a thorough evaluation is needed to distinguish DMDD from bipolar disorder, ODD, and other mood conditions.',
      },
    ],
    relatedPrograms: ['residential-treatment'],
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
    heroImage: '/assets/facility-gallery/game-room-yoga-doorway.jpg',
    sectionImages: ['/assets/stock/bpd-occupational.jpg', '/assets/stock/psychologist-with-teen.jpg'],
    seoKeywords: ['teen BPD treatment', 'adolescent borderline personality disorder treatment', 'BPD therapy for teens', 'teen borderline treatment Las Vegas', 'DBT for teen BPD'],
    headline: 'Adolescent BPD Treatment at Silver State',
    category: 'mental-health',
    description:
      "Borderline personality disorder (BPD) is a condition marked by intense fear of abandonment, unstable relationships, rapidly shifting self-image, impulsivity, and severe emotional reactivity, with research suggesting that approximately 3% of adolescents meet diagnostic criteria according to the National Institute of Mental Health (NIMH). Silver State provides early intervention for teens ages 11–17 showing BPD traits, because the adolescent years represent a critical window for treatment before patterns become deeply entrenched.\n\nBPD traits typically emerge during adolescence as the demands of identity formation, peer relationships, and emotional independence increase. Many more teens show subthreshold traits that cause significant distress beyond those who meet full diagnostic criteria. These teens often cycle through intense relationships, struggle with chronic emptiness, engage in self-harm, and experience emotional storms that feel unmanageable.\n\nEarly identification and treatment of BPD traits in adolescence leads to significantly better outcomes than waiting until adulthood. Because personality is still developing during the teen years, evidence-based therapies like DBT can reshape emotional and relational patterns before they become deeply entrenched. Studies show that most adolescents treated for BPD traits experience meaningful improvement and many no longer meet diagnostic criteria within a few years of treatment.\n\nAt our Las Vegas treatment center, Silver State provides specialized treatment using Dialectical Behavior Therapy — the gold-standard approach originally developed specifically for this condition. Early intervention can dramatically improve your teen's quality of life and long-term trajectory.",
    symptoms: [
      'Intense fear of being abandoned or rejected by friends or family',
      'Rapidly shifting relationships — idealizing someone one moment and pushing them away the next',
      'Unstable self-image or sense of identity',
      'Impulsive behaviors that may be harmful (spending, risky activities)',
      'Self-harm behaviors such as cutting or burning',
      'Intense, rapidly changing emotions lasting hours to days',
      'Chronic feelings of emptiness',
      'Explosive anger or difficulty controlling rage',
      'Dissociative episodes or feeling disconnected from reality under stress',
      'Extreme sensitivity to perceived rejection or criticism',
    ],
    therapies: [
      'Dialectical Behavior Therapy (DBT)',
      'Mentalization-Based Treatment (MBT)',
      'Schema-Focused Therapy',
      'Cognitive Behavioral Therapy (CBT)',
    ],
    approach:
      "Silver State's BPD treatment is anchored in comprehensive DBT, the therapy with the strongest evidence base for this condition. Within our residential program, your teen participates in individual therapy, skills training groups, phone coaching, and therapist consultation teams. Our 4:1 staff ratio ensures the close relationship-building that is essential for treating BPD, and our therapists are specifically trained to navigate the relational intensity that characterizes this condition.\n\nFamily involvement helps parents learn validation techniques, set effective boundaries, and understand the dialectical balance between acceptance and change. As your teen develops stronger emotional regulation and interpersonal skills, our discharge planning provides a path to graduated independence with outpatient DBT referrals and continued aftercare support.",
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
      {
        q: 'How is BPD different from normal teenage emotions?',
        a: 'While all teens experience emotional intensity, BPD traits involve a pervasive pattern of instability across relationships, self-image, and emotions that significantly impairs functioning. The intensity, duration, and consequences of emotional episodes in BPD are qualitatively different from typical adolescent mood fluctuations.',
      },
      {
        q: 'Will my teen always have BPD?',
        a: 'Research is encouraging: most adolescents who receive early, evidence-based treatment for BPD traits show significant improvement. Many no longer meet diagnostic criteria within a few years of completing treatment. Early intervention during the teenage years produces the best long-term outcomes.',
      },
      {
        q: 'What is the success rate of treatment for teen borderline personality disorder?',
        a: 'According to the National Institute of Mental Health (NIMH), Dialectical Behavior Therapy (DBT) produces significant reductions in self-harm, emotional instability, and interpersonal difficulties in adolescents with BPD traits. Studies show that the majority of teens who complete DBT-based programs no longer meet full diagnostic criteria within two to four years of treatment.',
      },
      {
        q: 'How is borderline personality disorder diagnosed in adolescents?',
        a: 'BPD is diagnosed using DSM-5 criteria, which require a pervasive pattern of instability in interpersonal relationships, self-image, and emotions along with marked impulsivity, beginning by early adulthood or late adolescence. In teens, diagnosis requires careful clinical evaluation to distinguish emerging BPD traits from normal adolescent development, using structured interviews and validated assessment tools.',
      },
    ],
    relatedPrograms: ['residential-treatment'],
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
    heroImage: '/assets/facility-gallery/courtyard-patio-benches.jpg',
    sectionImages: ['/assets/stock/adjustment-therapy.jpg', '/assets/stock/holistic-therapy.jpg'],
    seoKeywords: ['teen adjustment disorder treatment', 'adolescent adjustment disorder therapy', 'adjustment disorder treatment Las Vegas', 'teen coping with life changes', 'stress response treatment teenagers'],
    headline: 'Adolescent Adjustment Disorder Treatment at Silver State',
    category: 'mental-health',
    description:
      'Adjustment disorders are among the most commonly diagnosed mental health conditions in adolescents, occurring when a teen develops emotional or behavioral symptoms in response to a major life stressor that are significantly more intense than expected according to the American Psychological Association (APA). Silver State helps teens ages 11–17 who are struggling to cope with significant changes — such as a family divorce, relocation, school transition, loss of a loved one, or bullying — that impair daily functioning.\n\nDespite their prevalence, adjustment disorders are often underestimated. The teenage brain is still developing the capacity for emotional regulation and coping, making teens especially vulnerable to being overwhelmed by life transitions. What seems like a "minor" change to adults — switching schools, a friendship breakup, or a parent\'s job change — can feel world-ending to a teenager whose entire social and emotional world is affected.\n\nWithout treatment, adjustment disorder can progress to more serious conditions including major depression, anxiety disorders, or substance use. Early intervention not only resolves current symptoms but also builds resilience skills that protect against future stressors. Research shows that teens who receive structured support during adjustment difficulties develop stronger coping strategies for adulthood.\n\nAt our Las Vegas treatment center, Silver State meets your child where they are with compassion and evidence-based support, helping them process the triggering event and develop healthy strategies for navigating life\'s inevitable challenges.',
    symptoms: [
      'Excessive sadness, crying, or worry in response to a life change',
      'Withdrawal from friends, family, and activities',
      'Difficulty concentrating at school or declining grades',
      'Physical complaints like headaches or stomachaches',
      'Acting out, defiance, or reckless behavior',
      'Sleep disturbances or changes in appetite',
      'Increased anxiety or nervousness about the future',
      'Feelings of overwhelm or inability to cope with daily tasks',
    ],
    therapies: [
      'Cognitive Behavioral Therapy (CBT)',
      'Solution-Focused Brief Therapy (SFBT)',
      'Supportive Counseling',
      'Dialectical Behavior Therapy (DBT)',
    ],
    approach:
      'Silver State treats adjustment disorder with a focus on helping your teen process the triggering event and build resilience for future challenges. Within our residential program, your teen receives individual therapy, group support, and family sessions in a structured, supportive environment. Our 4:1 staff ratio ensures personalized attention, and on-site academics help your teen stay connected to school during treatment.\n\nFamily therapy is an integral part of adjustment disorder treatment, especially when the stressor involves family changes. We help parents understand their teen\'s emotional response, improve family communication, and create a stable home environment that supports recovery. Our goal is not just symptom relief but building lasting resilience skills your teen will carry forward.',
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
      {
        q: 'Can adjustment disorder become a more serious condition?',
        a: 'Yes. Without treatment, adjustment disorder can develop into major depression, generalized anxiety disorder, or other conditions. This is one reason early intervention is important — addressing symptoms promptly prevents escalation and builds coping skills that protect against future difficulties.',
      },
      {
        q: 'My teen seems fine at school but falls apart at home — could it be adjustment disorder?',
        a: 'Yes. Many teens with adjustment disorder mask their distress in public settings while struggling at home where they feel safe enough to express their emotions. Our assessment looks at functioning across all environments to get a complete picture of how your teen is coping.',
      },
      {
        q: 'What is the success rate of treatment for teen adjustment disorder?',
        a: 'According to the American Psychological Association (APA), adjustment disorders generally have a favorable prognosis with appropriate treatment, and the majority of adolescents show significant symptom improvement within weeks of beginning therapy. Brief, focused interventions such as CBT and solution-focused therapy are particularly effective for this condition.',
      },
      {
        q: 'How is adjustment disorder diagnosed in adolescents?',
        a: 'Adjustment disorder is diagnosed using DSM-5 criteria, which require the development of emotional or behavioral symptoms within three months of an identifiable stressor, with symptoms out of proportion to the stressor or causing significant impairment. A clinician evaluates the timeline of symptoms, their severity, and rules out other conditions such as major depression or generalized anxiety that better explain the presentation.',
      },
    ],
    relatedPrograms: ['residential-treatment'],
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
    heroImage: '/assets/facility-gallery/medical-office-wide.jpg',
    sectionImages: ['/assets/stock/dual-diagnosis-therapy.jpg', '/assets/stock/treatment-plan-doctor.jpg'],
    seoKeywords: ['teen dual diagnosis treatment', 'adolescent co-occurring disorders treatment', 'dual diagnosis treatment Las Vegas', 'teen substance use and mental health', 'co-occurring disorder therapy teenagers'],
    headline: 'Adolescent Dual Diagnosis Treatment at Silver State',
    category: 'substance-abuse',
    description:
      'Dual diagnosis — also called co-occurring disorders — is extremely common in adolescents, with research from the Substance Abuse and Mental Health Services Administration (SAMHSA) showing that approximately 60% of teens with a substance use disorder also have a co-occurring mental health condition. Silver State provides integrated care for adolescents ages 11–17 who are struggling with both a mental health condition and a substance use disorder simultaneously.\n\nIn adolescents, these conditions frequently develop together and reinforce each other in a destructive cycle. Teens may use substances to self-medicate anxiety, depression, or trauma, while substance use can worsen or trigger mental health symptoms. This interplay makes it impossible to effectively treat one condition while ignoring the other, which is why integrated treatment is essential.\n\nThe consequences of untreated dual diagnosis in adolescents are severe: escalating substance use, worsening mental health symptoms, academic failure, family breakdown, and increased risk of hospitalization or legal involvement. However, when both conditions are addressed simultaneously with evidence-based approaches, teens can achieve meaningful, lasting recovery.\n\nAt our Las Vegas treatment center, Silver State specializes in integrated dual diagnosis treatment. Our clinical team treats both conditions within a single, coordinated treatment plan because research consistently shows that integrated care produces the best outcomes for co-occurring disorders in adolescents.',
    symptoms: [
      'Using substances to cope with anxiety, depression, or emotional pain',
      'Mental health symptoms worsening despite treatment due to ongoing substance use',
      'Withdrawal from family and friends alongside increased substance use',
      'Declining school performance combined with mood or behavioral changes',
      'Failed attempts to stop using substances on their own',
      'Risky behavior escalating as both conditions reinforce each other',
      'Mood instability that worsens during or after substance use',
      'Using increasingly dangerous amounts or combinations of substances',
      'Denial or minimization of both substance use and emotional problems',
    ],
    therapies: [
      'Cognitive Behavioral Therapy (CBT)',
      'Dialectical Behavior Therapy (DBT)',
      'Motivational Enhancement Therapy (MET)',
      'Integrated Group Therapy (IGT)',
    ],
    approach:
      "Silver State's dual diagnosis program treats both substance use and mental health conditions in a single, coordinated treatment plan. Within our residential program, your teen works with a unified clinical team that addresses the interplay between their conditions. Our 4:1 staff ratio provides the intensive support needed for complex cases, and our clinicians are cross-trained in both mental health and substance use treatment.\n\nFamily education helps families understand how the conditions interact and how to support recovery at home. As your teen progresses, relapse prevention planning addresses both conditions, ensuring your teen has strategies for managing mental health symptoms without returning to substance use. Aftercare planning connects your family with ongoing outpatient support and community resources.",
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
      {
        q: 'Which condition came first — the mental health issue or the substance use?',
        a: 'It can go either way, and determining the origin is part of our clinical assessment. Some teens develop mental health symptoms first and turn to substances to cope, while others develop mental health issues as a result of substance use. Regardless of which came first, both conditions need simultaneous treatment.',
      },
      {
        q: 'How do you prevent relapse when both conditions are involved?',
        a: 'Our relapse prevention plan addresses the unique risks of dual diagnosis — for example, helping your teen recognize that unmanaged anxiety can trigger cravings, or that substance use will worsen their depression. We build strategies for both conditions and connect families with ongoing support after discharge.',
      },
      {
        q: 'What is the success rate of treatment for teen dual diagnosis?',
        a: 'According to the Substance Abuse and Mental Health Services Administration (SAMHSA), integrated dual diagnosis treatment produces significantly better outcomes than treating each condition separately, with research showing 40–60% of adolescents achieving sustained recovery when both conditions are addressed simultaneously. Outcomes improve further with longer treatment duration and strong family involvement.',
      },
      {
        q: 'How is dual diagnosis identified in adolescents?',
        a: 'Dual diagnosis is identified through a comprehensive clinical assessment that evaluates both mental health symptoms and substance use patterns using validated screening tools recommended by the Substance Abuse and Mental Health Services Administration (SAMHSA). Clinicians assess the timeline and interplay between both conditions to develop an integrated treatment plan that addresses their interconnected nature.',
      },
    ],
    relatedPrograms: ['residential-treatment'],
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
    heroImage: '/assets/facility-gallery/classroom-desks-mural.jpg',
    sectionImages: ['/assets/stock/school-refusal-therapy.jpg', '/assets/stock/family-therapy-session.jpg'],
    seoKeywords: ['teen school refusal treatment', 'adolescent school avoidance therapy', 'school refusal treatment Las Vegas', 'teen school anxiety treatment', 'school phobia treatment teenagers'],
    headline: 'Adolescent School Refusal Treatment at Silver State',
    category: 'mental-health',
    description:
      'School refusal is an anxiety-driven inability to attend school that affects approximately 2–5% of school-age children and peaks during adolescence according to the American Academy of Child and Adolescent Psychiatry (AACAP). Silver State helps teens ages 11–17 overcome this condition that disrupts academic progress, social development, and family life — and is far more than simple truancy.\n\nTeens with school refusal may experience intense fear, physical symptoms like nausea or headaches, panic attacks, or complete emotional shutdown at the thought of going to school. Morning routines become battlegrounds, and parents often feel helpless as their teen\'s world shrinks. The longer a teen avoids school, the harder it becomes to return, creating a cycle of avoidance that reinforces the underlying anxiety.\n\nSchool refusal has significant consequences beyond missed classes. Prolonged absence leads to academic gaps, social isolation, loss of friendships, family conflict, and increased risk of developing chronic anxiety or depression. Research shows that early, structured intervention that combines clinical therapy with gradual school re-engagement produces the best outcomes.\n\nAt our Las Vegas treatment center, Silver State combines clinical therapy with on-site academics through our Youth Academy, allowing teens to re-engage with school in a structured, supportive environment while addressing the underlying anxiety, depression, or social difficulties driving the avoidance.',
    symptoms: [
      'Frequent absences or tardiness with emotional distress about attending school',
      'Physical complaints (stomachaches, headaches, nausea) that appear on school mornings',
      'Severe anxiety, crying, or tantrums when it is time to leave for school',
      'Staying home with parents knowledge but refusing to attend classes',
      'Social withdrawal and increasing isolation from peers',
      'Declining academic performance despite adequate ability',
      'Sleep disturbances or difficulty waking for school',
      'Panic attacks related to school attendance or school-related situations',
      'Increasing dependence on parents and resistance to separation',
    ],
    therapies: [
      'Cognitive Behavioral Therapy (CBT)',
      'Exposure and Response Prevention (ERP)',
      'Family Therapy',
      'Social Skills Training',
    ],
    approach:
      "Silver State treats school refusal through a gradual, therapeutic re-engagement process. Our residential program provides daily structure including on-site academics, so your teen can practice attending classes in a safe environment. Individual CBT helps identify and challenge the thoughts driving avoidance, while exposure therapy systematically builds tolerance for school-related situations.\n\nFamily therapy addresses family dynamics that may inadvertently maintain the refusal pattern — including accommodating avoidance, allowing excessive reassurance-seeking, or engaging in morning conflicts that reinforce anxiety. Our 4:1 staff ratio ensures personalized support throughout the process. As your teen builds confidence in our therapeutic classroom setting, we coordinate a structured transition plan with their home school to ensure a smooth return.",
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
      {
        q: 'How quickly can my teen return to school after treatment?',
        a: 'The timeline varies based on the severity and duration of the school refusal. Some teens are ready to return within weeks, while others need a more gradual re-entry plan. We work with your teen, family, and school to create a realistic transition that sets your teen up for success.',
      },
      {
        q: 'Should I force my teen to go to school?',
        a: 'Forcing attendance without addressing the underlying anxiety often backfires and can increase distress. However, accommodating complete avoidance also reinforces the problem. Our program helps families find the therapeutic middle ground — gradually increasing school exposure while building coping skills to manage the anxiety.',
      },
      {
        q: 'What is the success rate of treatment for teen school refusal?',
        a: 'According to the American Academy of Child and Adolescent Psychiatry (AACAP), CBT combined with gradual exposure and family involvement produces successful school re-entry in approximately 70–80% of adolescents with school refusal. Early intervention before prolonged absence becomes entrenched is a key factor in treatment success.',
      },
      {
        q: 'How is school refusal diagnosed in adolescents?',
        a: 'School refusal is identified through comprehensive clinical assessment that distinguishes anxiety-driven school avoidance from truancy, evaluating the underlying conditions such as social anxiety, separation anxiety, depression, or specific phobias. The American Academy of Child and Adolescent Psychiatry (AACAP) recommends assessing attendance patterns, physical symptom history, family dynamics, and school-related triggers to develop a targeted treatment plan.',
      },
    ],
    relatedPrograms: ['residential-treatment'],
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
    heroImage: '/assets/facility-gallery/medical-office-equipment.jpg',
    sectionImages: ['/assets/stock/individual-therapy-pink.jpg', '/assets/stock/holistic-therapy.jpg'],
    seoKeywords: ['teen substance abuse treatment', 'adolescent substance abuse treatment', 'teen drug treatment Las Vegas', 'substance abuse treatment for teenagers', 'teen addiction treatment program'],
    headline: 'Adolescent Substance Abuse Treatment at Silver State',
    category: 'substance-abuse',
    description:
      'Adolescent substance abuse is a serious and growing concern, with data from the National Institute on Drug Abuse (NIDA) showing that nearly half of all teens have tried an illicit substance by 12th grade and early use significantly increases the risk of developing lifelong addiction. Silver State provides comprehensive, evidence-based care for adolescents ages 11–17 who are struggling with drug or alcohol use, recognizing that the teenage brain is especially vulnerable to the effects of substances.\n\nSubstance use in adolescents is fundamentally different from adult addiction. Teen substance abuse often stems from peer pressure, trauma, self-medication of mental health symptoms like anxiety or depression, curiosity, or a desire to escape overwhelming emotions. The developing adolescent brain is more susceptible to both the rewarding effects and the neurotoxic damage of substances, making early intervention critical.\n\nWithout treatment, adolescent substance abuse leads to impaired brain development, academic failure, legal problems, damaged family relationships, and increased risk of lifelong addiction. However, the same neuroplasticity that makes teens vulnerable also means their brains can recover more fully when substance use is addressed early with appropriate support.\n\nAt our Las Vegas treatment center, Silver State recognizes that teen substance use requires a different approach than adult programs. Our clinicians specialize in adolescent development and address the root causes driving your teen\'s substance use while building the skills and support systems needed for lasting recovery.',
    symptoms: [
      'Changes in friend groups, especially to peers who use substances',
      'Declining grades or sudden loss of interest in school',
      'Secretive behavior, lying about whereabouts or activities',
      'Changes in appetite, sleep patterns, or physical appearance',
      'Mood swings, irritability, or personality changes',
      'Missing money, valuables, or prescription medications from the home',
      'Bloodshot eyes, unusual smells on clothing or breath',
      'Increased tolerance or needing more of a substance to achieve the same effect',
      'Withdrawal symptoms when not using',
      'Loss of interest in hobbies, sports, or activities they once valued',
    ],
    therapies: [
      'Cognitive Behavioral Therapy (CBT)',
      'Motivational Enhancement Therapy (MET)',
      'Contingency Management',
      'Family Behavior Therapy',
    ],
    approach:
      "Silver State's substance abuse treatment addresses the root causes of your teen's substance use while building skills for long-term sobriety. Within our residential program, your teen participates in individual and group therapy, psychoeducation about substances and the brain, and relapse prevention planning. Our 4:1 staff-to-client ratio provides close mentorship, and family involvement is woven into every aspect of care.\n\nWe screen every teen for co-occurring mental health conditions, because treating substance use without addressing underlying depression, anxiety, or trauma leads to poor outcomes. Our discharge planning provides continued structure as your teen transitions from residential care back to daily life, with outpatient referrals, relapse prevention strategies, and family support for lasting recovery.",
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
        a: 'Relapse prevention starts from day one. We teach coping skills, develop personalized safety plans, address triggers, involve families in aftercare planning, and connect your teen with outpatient support for continued recovery.',
      },
      {
        q: 'What types of substances do you treat in adolescents?',
        a: 'We treat all substance use in teens, including alcohol, cannabis, opioids, benzodiazepines, stimulants, cocaine, methamphetamine, and vaping or nicotine products. Our clinical approach adapts to the specific substance and pattern of use.',
      },
      {
        q: 'How is teen substance abuse treatment different from adult rehab?',
        a: 'Adolescent programs focus on developmental needs including brain development, identity formation, academic continuity, family involvement, and age-appropriate peer interactions. We provide on-site schooling, family therapy, and treatment approaches designed specifically for the adolescent brain and social context.',
      },
      {
        q: 'What is the success rate of treatment for teen substance abuse?',
        a: 'According to the National Institute on Drug Abuse (NIDA), evidence-based adolescent substance abuse treatment produces significant reductions in substance use in approximately 50–70% of teens who complete structured programs. Outcomes are strongest when treatment lasts at least 90 days and includes family involvement and aftercare planning.',
      },
      {
        q: 'How is substance abuse diagnosed in adolescents?',
        a: 'Substance use disorders in adolescents are diagnosed using DSM-5 criteria, which evaluate patterns of use leading to clinically significant impairment including tolerance, withdrawal, loss of control, and continued use despite negative consequences. Clinicians use validated screening tools such as the CRAFFT screening tool along with clinical interviews and collateral information from families.',
      },
    ],
    relatedPrograms: ['residential-treatment'],
    relatedConditions: [
      'dual-diagnosis-treatment',
      'alcohol-abuse-treatment',
      'depression-treatment',
    ],
    metaTitle: 'Teen Substance Abuse Treatment | Silver State',
    metaDescription:
      'Comprehensive adolescent substance abuse treatment at Silver State in Las Vegas. Evidence-based residential care and individualized therapy for teens 11-17.',
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
    heroImage: '/assets/facility-gallery/medical-office-desk.jpg',
    sectionImages: ['/assets/stock/alcohol-therapy.jpg', '/assets/stock/group-therapy-session.jpg'],
    seoKeywords: ['teen alcohol abuse treatment', 'adolescent alcohol treatment', 'underage drinking treatment Las Vegas', 'teen alcohol addiction therapy', 'alcohol abuse treatment for teenagers'],
    headline: 'Adolescent Alcohol Abuse Treatment at Silver State',
    category: 'substance-abuse',
    description:
      'Alcohol remains the most commonly used substance among adolescents, with approximately 30% of high school students reporting current alcohol use according to the Centers for Disease Control and Prevention (CDC). Silver State provides specialized care for adolescents ages 11–17 who are struggling with alcohol use, recognizing that underage drinking carries serious risks for the developing teenage brain, including impaired cognitive development, increased addiction risk, and poor decision-making with potentially life-altering consequences.\n\nAlcohol use during adolescence affects the brain differently than in adults. The adolescent brain is still developing critical regions responsible for judgment, impulse control, and memory, making it especially vulnerable to alcohol\'s neurotoxic effects. Research from the National Institute on Drug Abuse (NIDA) shows that teens who begin drinking before age 15 are four times more likely to develop alcohol dependence than those who wait until age 21.\n\nTeen drinking is often driven by social pressure, stress, curiosity, or underlying mental health conditions such as anxiety, depression, or trauma. Many parents are unsure whether their teen\'s drinking is "normal" experimentation or a sign of a developing problem. The distinction matters because early intervention can prevent a pattern of use from becoming a chronic condition.\n\nAt our Las Vegas treatment center, Silver State\'s clinicians address the root causes of your teen\'s drinking while helping them build a foundation for long-term sobriety. We understand that adolescent alcohol abuse requires a developmentally informed approach that differs from adult treatment programs.',
    symptoms: [
      'Drinking alone or hiding alcohol in their room or belongings',
      'Frequent hangovers or smelling of alcohol',
      'Blackouts or memory gaps after drinking',
      'Declining academic performance or loss of interest in activities',
      'Changes in friend groups toward peers who drink',
      'Increased risk-taking or impulsive behavior',
      'Needing to drink more to achieve the same effect (tolerance)',
      'Irritability, anxiety, or shakiness when not drinking',
      'Lying about the amount or frequency of alcohol use',
    ],
    therapies: [
      'Cognitive Behavioral Therapy (CBT)',
      'Motivational Enhancement Therapy (MET)',
      'Dialectical Behavior Therapy (DBT)',
      'Family Behavior Therapy',
    ],
    approach:
      "Silver State treats adolescent alcohol abuse within our residential program, tailored to the severity of your teen's use. Treatment combines psychoeducation about alcohol's impact on the developing brain, individual and group therapy to address triggers, and family involvement to create a supportive recovery environment. Our 4:1 staff ratio ensures your teen receives personalized, consistent support.\n\nFamily therapy is a core component because the family environment significantly influences teen alcohol use and recovery. We help parents set appropriate boundaries, model healthy coping, and create a home environment that supports sobriety. Our discharge planning provides continued structure with outpatient referrals and relapse prevention support as your teen transitions back to daily life.",
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
      {
        q: 'Is teen binge drinking an emergency?',
        a: 'Binge drinking — consuming multiple drinks in a short period — is dangerous for teens and can lead to alcohol poisoning, which is a medical emergency. If your teen is binge drinking regularly, it indicates a pattern that warrants professional treatment even if daily drinking is not occurring.',
      },
      {
        q: 'Can my teen recover from alcohol abuse at their age?',
        a: 'Yes. The adolescent brain has remarkable capacity for recovery when alcohol use is addressed early. With evidence-based treatment and family support, most teens can develop healthy coping skills and achieve lasting sobriety. Early intervention produces the best long-term outcomes.',
      },
      {
        q: 'What is the success rate of treatment for teen alcohol abuse?',
        a: 'According to the National Institute on Drug Abuse (NIDA), evidence-based adolescent alcohol treatment programs that combine behavioral therapy with family involvement produce significant reductions in drinking in approximately 50–65% of teens who complete treatment. Longer treatment duration and strong aftercare support are associated with the best long-term outcomes.',
      },
      {
        q: 'How is alcohol use disorder diagnosed in adolescents?',
        a: 'Alcohol use disorder in adolescents is diagnosed using DSM-5 criteria, which evaluate 11 symptoms including impaired control, social impairment, risky use, and physiological dependence. Clinicians use validated adolescent screening tools such as the AUDIT and CRAFFT along with clinical interviews to determine the severity of the problem and appropriate level of care.',
      },
    ],
    relatedPrograms: ['residential-treatment'],
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
    heroImage: '/assets/facility-gallery/medical-office-full.jpg',
    sectionImages: ['/assets/stock/opioid-therapy.jpg', '/assets/stock/treatment-plan-doctor.jpg'],
    seoKeywords: ['teen opioid treatment', 'adolescent opioid abuse treatment', 'teen opioid addiction Las Vegas', 'opioid treatment for teenagers', 'teen prescription drug abuse treatment'],
    headline: 'Adolescent Opioid Abuse Treatment at Silver State',
    category: 'substance-abuse',
    description:
      'Opioid misuse among adolescents is a critical public health crisis, with data from the National Institute on Drug Abuse (NIDA) showing that opioid-related overdose deaths among teens have more than doubled in recent years, driven largely by the proliferation of illicit fentanyl in the drug supply. Silver State provides urgent, evidence-based care for teens ages 11–17 struggling with prescription painkillers, fentanyl, or other opioid substances.\n\nOpioids are highly addictive, and the developing teenage brain is especially susceptible. Teens can develop physical dependence rapidly, sometimes within weeks of regular use. The consequences of opioid misuse in young people include overdose risk, long-term brain changes, infectious disease exposure, and severe disruption to academic, social, and emotional development.\n\nMany adolescents are first exposed to opioids through leftover prescriptions at home, peer sharing, or counterfeit pills purchased online or through social media. What begins as experimentation or pain management can quickly escalate to dependence. The presence of fentanyl in the drug supply has made any opioid use by teenagers potentially lethal.\n\nAt our Las Vegas treatment center, Silver State\'s clinical team is experienced in managing the physical and psychological aspects of opioid dependence. We treat the whole person — addressing the trauma, mental health conditions, and social factors that often underlie adolescent opioid use while providing the medical support needed for safe recovery.',
    symptoms: [
      'Using prescription painkillers beyond what was prescribed or without a prescription',
      'Drowsiness, constricted pupils, or slurred speech',
      'Withdrawal symptoms such as nausea, sweating, or body aches when not using',
      'Doctor shopping or stealing medications from family members',
      'Sudden mood changes, social withdrawal, and secrecy',
      'Declining personal hygiene and loss of interest in previously enjoyed activities',
      'Track marks, bruising, or wearing long sleeves to cover arms',
      'Possession of unfamiliar pills, powder, or paraphernalia',
      'Nodding off or appearing sedated at inappropriate times',
    ],
    therapies: [
      'Cognitive Behavioral Therapy (CBT)',
      'Motivational Enhancement Therapy (MET)',
      'Contingency Management',
      'Dialectical Behavior Therapy (DBT)',
    ],
    approach:
      "Silver State's opioid treatment begins with medically supported stabilization when needed, followed by comprehensive therapeutic intervention. Within our residential program, we address the psychological dependence on opioids while treating co-occurring mental health conditions. Our 4:1 staff ratio provides constant support during the challenging early stages of recovery.\n\nFamily education is a critical component — we help parents understand the neuroscience of opioid dependence, learn to secure medications at home, recognize warning signs of relapse, and support their teen's long-term sobriety. Our discharge planning provides continued structure as your teen transitions from residential care, with outpatient referrals and robust relapse prevention planning for sustained recovery.",
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
      {
        q: 'What is fentanyl and why is it so dangerous for teens?',
        a: 'Fentanyl is a synthetic opioid 50–100 times more potent than morphine. It is increasingly found in counterfeit pills and other substances, making any drug use potentially lethal. Our program educates teens and families about fentanyl risks as part of comprehensive substance abuse prevention.',
      },
      {
        q: 'How long does teen opioid treatment take?',
        a: 'Treatment duration depends on the severity and duration of use. Medical stabilization may take 1–2 weeks, followed by therapeutic treatment across our continuum of care. Most teens benefit from 60–90 days of structured treatment plus continued outpatient support.',
      },
      {
        q: 'What is the success rate of treatment for teen opioid abuse?',
        a: 'According to the National Institute on Drug Abuse (NIDA), comprehensive treatment programs that include behavioral therapy, family involvement, and ongoing support produce sustained recovery in approximately 40–60% of adolescents with opioid use disorders. Treatment lasting at least 90 days is strongly associated with better long-term outcomes.',
      },
      {
        q: 'How is opioid use disorder diagnosed in adolescents?',
        a: 'Opioid use disorder in adolescents is diagnosed using DSM-5 criteria that evaluate patterns including loss of control over use, continued use despite harm, tolerance, and withdrawal symptoms. Clinical assessment includes drug screening, comprehensive interviews, and evaluation for co-occurring mental health conditions that frequently accompany opioid misuse in teens.',
      },
    ],
    relatedPrograms: ['residential-treatment'],
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
    heroImage: '/assets/facility-gallery/medical-office-patient-view.jpg',
    sectionImages: ['/assets/stock/benzo-therapy.jpg', '/assets/stock/family-therapy-session.jpg'],
    seoKeywords: ['teen benzodiazepine treatment', 'adolescent benzo abuse treatment', 'Xanax abuse treatment teens', 'benzodiazepine treatment Las Vegas', 'teen prescription drug abuse therapy'],
    headline: 'Adolescent Benzodiazepine Abuse Treatment at Silver State',
    category: 'substance-abuse',
    description:
      'Benzodiazepine misuse among adolescents is an increasing concern, with the National Institute on Drug Abuse (NIDA) reporting rising rates of teens accessing medications like Xanax, Klonopin, Ativan, or Valium through prescriptions, family medicine cabinets, peers, or counterfeit pills sold online. Silver State provides medically supervised care for teens ages 11–17 who have developed dependence on these dangerous substances.\n\nBenzodiazepines are particularly dangerous because they create physical dependence quickly — sometimes within just a few weeks of regular use — and withdrawal can be medically serious, including the risk of seizures. Many teens initially encounter benzodiazepines while seeking relief from anxiety, insomnia, or panic attacks, but the medications\' tolerance-building properties can rapidly lead to escalating use.\n\nThe risks of benzodiazepine misuse in adolescents are compounded when teens combine these medications with alcohol, opioids, or other substances — a common pattern that dramatically increases the risk of respiratory depression and overdose death. The developing teenage brain is also more vulnerable to the cognitive effects of chronic benzodiazepine use, including memory impairment and difficulties with learning.\n\nAt our Las Vegas treatment center, Silver State provides specialized benzodiazepine treatment with careful medical oversight. Our team understands the unique risks of benzodiazepine dependence in adolescents and provides safe, structured treatment that addresses both the physical dependence and the underlying anxiety or stress that led your teen to these medications.',
    symptoms: [
      'Taking benzodiazepines without a prescription or in higher doses than prescribed',
      'Excessive drowsiness, confusion, or slurred speech',
      'Memory problems or blackouts',
      'Combining benzodiazepines with alcohol or other substances',
      'Anxiety or panic symptoms worsening between doses',
      'Doctor shopping or requesting early refills',
      'Appearing sedated or "zoned out" at school or home',
      'Increased secrecy about medication use or hiding pills',
      'Rebound anxiety or insomnia that feels worse than before starting the medication',
    ],
    therapies: [
      'Cognitive Behavioral Therapy (CBT)',
      'Dialectical Behavior Therapy (DBT)',
      'Motivational Enhancement Therapy (MET)',
      'Anxiety Management Skills Training',
    ],
    approach:
      "Silver State's benzodiazepine treatment requires careful medical supervision due to the risks associated with withdrawal. Our residential program provides the structured medical oversight needed for safe stabilization, including gradual tapering protocols when appropriate. Ongoing therapy addresses the anxiety or stress that typically drives benzodiazepine misuse, teaching your teen evidence-based coping strategies that are safer and more sustainable than medication.\n\nOur 4:1 staff ratio ensures close monitoring throughout the stabilization and treatment process. Family therapy helps parents understand benzodiazepine dependence, secure medications at home, and support their teen's recovery. Our discharge planning provides continued support with outpatient referrals as your teen transitions home with a strong foundation in anxiety management skills.",
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
        a: 'The timeline depends on the duration and amount of use. Medical stabilization may take weeks, followed by therapeutic treatment to address underlying conditions. Our residential program and aftercare planning support long-term recovery.',
      },
      {
        q: 'Can my teen manage anxiety without benzodiazepines?',
        a: 'Absolutely. Evidence-based therapies like CBT and DBT are as effective as — or more effective than — benzodiazepines for long-term anxiety management, without the risks of dependence. Our program teaches your teen sustainable anxiety management skills they can use for life.',
      },
      {
        q: 'Are counterfeit benzodiazepines a risk for teens?',
        a: 'Yes. Counterfeit Xanax and other benzodiazepine pills sold online or through social media may contain fentanyl or other dangerous substances. This is an increasingly serious risk for teens. Our program includes education about these dangers as part of comprehensive prevention.',
      },
      {
        q: 'What is the success rate of treatment for teen benzodiazepine abuse?',
        a: 'According to the National Institute on Drug Abuse (NIDA), structured treatment programs that combine medically supervised tapering with behavioral therapy produce successful outcomes in approximately 50–65% of adolescents with benzodiazepine dependence. Concurrent treatment of underlying anxiety disorders significantly improves long-term recovery rates.',
      },
      {
        q: 'How is benzodiazepine use disorder diagnosed in adolescents?',
        a: 'Benzodiazepine use disorder is diagnosed using DSM-5 substance use disorder criteria, evaluating patterns of escalating use, failed attempts to cut down, withdrawal symptoms, and continued use despite negative consequences. Medical evaluation includes assessment of physical dependence severity to plan a safe tapering protocol and screening for co-occurring anxiety disorders.',
      },
    ],
    relatedPrograms: ['residential-treatment'],
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
    heroImage: '/assets/facility-gallery/nursing-station-wide.jpg',
    sectionImages: ['/assets/stock/cocaine-therapy.jpg', '/assets/stock/behavioral-therapy-cocaine.jpg'],
    seoKeywords: ['teen cocaine treatment', 'adolescent cocaine abuse treatment', 'cocaine treatment for teenagers', 'teen stimulant abuse Las Vegas', 'youth cocaine addiction therapy'],
    headline: 'Adolescent Cocaine Abuse Treatment at Silver State',
    category: 'substance-abuse',
    description:
      "Cocaine is a powerful stimulant that poses severe risks to the developing adolescent brain and cardiovascular system, with the National Institute on Drug Abuse (NIDA) warning that teen use can cause lasting changes to brain reward circuitry and increase the risk of lifelong addiction. Silver State provides evidence-based care for teens ages 11–17 who are using cocaine or crack cocaine. The drug produces intense but short-lived euphoria that can quickly lead to a pattern of binge use, as teens chase the initial high.\n\nCocaine's stimulant effects are particularly dangerous for young people because the adolescent cardiovascular system and brain are still developing. Teens who use cocaine are at risk for cardiac events, seizures, stroke, and lasting changes to brain reward circuitry. The presence of fentanyl in the cocaine supply has also made any use potentially lethal, even for first-time users.\n\nAdolescent cocaine use is often driven by thrill-seeking, social pressure from older peers, exposure through party culture, or a desire to enhance performance. Many teens who use cocaine also have underlying mental health conditions such as depression, ADHD, or trauma that contribute to their vulnerability.\n\nAt our Las Vegas treatment center, Silver State's clinicians understand the social and psychological factors that lead adolescents to cocaine use and develop individualized treatment plans that address the root causes while building lasting recovery skills.",
    symptoms: [
      'Hyperactivity, restlessness, or unusually elevated mood followed by crashes',
      'Frequent nosebleeds or runny nose (from snorting)',
      'Dilated pupils, increased heart rate, or elevated body temperature',
      'Rapid weight loss and decreased appetite',
      'Paranoia, agitation, or erratic behavior',
      'Financial problems or stealing money to fund use',
      'Talking excessively or appearing unusually confident',
      'Sleep deprivation during use periods followed by prolonged sleep',
      'White powder residue on belongings or clothing',
    ],
    therapies: [
      'Cognitive Behavioral Therapy (CBT)',
      'Contingency Management',
      'Motivational Enhancement Therapy (MET)',
      'Community Reinforcement Approach',
    ],
    approach:
      'Silver State treats adolescent cocaine abuse within our residential program. Our 4:1 staff ratio ensures close support during cravings and emotional challenges. Treatment addresses the thrill-seeking behavior, peer influences, and underlying emotional pain that often drive teen cocaine use through individual therapy, group sessions, and evidence-based interventions.\n\nFamily involvement is essential for sustained recovery. We educate parents about cocaine\'s effects on the adolescent brain, help them recognize warning signs of relapse, and build a home environment that supports sobriety. Our discharge planning provides continued therapeutic support with outpatient referrals as your teen transitions back to daily life.',
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
      {
        q: 'Can cocaine use be fatal for teenagers?',
        a: 'Yes. Cocaine can cause sudden cardiac events, seizures, and stroke, even in young, healthy individuals. The growing presence of fentanyl in the cocaine supply has dramatically increased the risk of fatal overdose. Any cocaine use by a teenager should be taken seriously.',
      },
      {
        q: 'How do teens typically access cocaine?',
        a: 'Teens usually access cocaine through older peers, social settings like parties, or drug dealers. Social media and messaging apps have also become channels for access. Our program helps teens develop strategies for navigating these high-risk environments after treatment.',
      },
      {
        q: 'What is the success rate of treatment for teen cocaine abuse?',
        a: 'According to the National Institute on Drug Abuse (NIDA), behavioral therapies including CBT and contingency management are the most effective treatments for cocaine use disorders, with structured programs producing significant reductions in use in approximately 50–60% of adolescents. Comprehensive treatment that addresses underlying mental health conditions improves long-term success rates.',
      },
      {
        q: 'How is cocaine use disorder diagnosed in adolescents?',
        a: 'Cocaine use disorder is diagnosed using DSM-5 criteria that assess patterns including escalating use, inability to control use, continued use despite physical or psychological harm, and impairment in daily functioning. Clinical assessment includes urine drug screening, comprehensive behavioral evaluation, and screening for co-occurring conditions such as ADHD and depression.',
      },
    ],
    relatedPrograms: ['residential-treatment'],
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
    heroImage: '/assets/facility-gallery/nursing-station-hallway.jpg',
    sectionImages: ['/assets/stock/meth-therapy.jpg', '/assets/stock/holistic-therapy-cocaine.jpg'],
    seoKeywords: ['teen meth treatment', 'adolescent methamphetamine treatment', 'meth abuse treatment teenagers', 'teen crystal meth treatment Las Vegas', 'youth methamphetamine recovery'],
    headline: 'Adolescent Methamphetamine Treatment at Silver State',
    category: 'substance-abuse',
    description:
      "Methamphetamine is one of the most destructive substances affecting adolescents today, with the National Institute on Drug Abuse (NIDA) warning that its powerful stimulant effects can cause rapid physical and psychological deterioration and lasting neurotoxic damage to the developing brain. Silver State provides intensive, structured care for teens ages 11–17 who are using crystal meth or other methamphetamine products, recognizing that the drug is highly addictive even after limited use.\n\nThe developing teenage brain is particularly vulnerable to methamphetamine's neurotoxic effects. Meth damages dopamine-producing neurons, which can result in lasting changes to mood, motivation, and cognitive function. Physical effects include dramatic weight loss, dental destruction, skin sores, and cardiovascular damage. The psychological effects — including paranoia, psychosis, and severe emotional instability — can persist for months after last use.\n\nMethamphetamine availability has increased in many regions, including the Las Vegas area, making teen exposure a growing concern. Teens may encounter meth through older peers, at parties, or through online connections. The drug's low cost and long-lasting high make it particularly appealing and dangerous for adolescents seeking escape from emotional pain or seeking enhanced energy and focus.\n\nSilver State's clinical team is experienced in managing the acute and long-term effects of meth use in young people. We provide the structured, supportive environment needed for teens to begin the recovery process, with medical monitoring, evidence-based therapy, and family involvement throughout.",
    symptoms: [
      'Extreme weight loss and decreased appetite',
      'Severe dental problems or skin sores',
      'Hyperactivity followed by prolonged periods of sleep',
      'Paranoia, hallucinations, or aggressive behavior',
      'Rapid mood swings and emotional instability',
      'Insomnia lasting days during active use periods',
      'Repetitive, obsessive behaviors such as picking at skin or dismantling objects',
      'Dilated pupils and rapid eye movement',
      'Severe anxiety or psychotic symptoms',
    ],
    therapies: [
      'Cognitive Behavioral Therapy (CBT)',
      'Contingency Management',
      'Motivational Enhancement Therapy (MET)',
      'Matrix Model',
    ],
    approach:
      "Silver State's methamphetamine treatment provides intensive, structured care within our residential program for stabilization and early recovery. The 4:1 staff ratio ensures constant support as teens navigate the significant mood and energy changes that occur in early meth recovery. Medical monitoring addresses the physical health consequences of meth use while therapy begins to address the psychological dependence.\n\nAs teens stabilize, we prepare a comprehensive discharge plan with outpatient referrals and continued aftercare support. We address the often severe co-occurring mental health conditions that accompany meth use — including depression, anxiety, and trauma — while rebuilding healthy routines and family relationships. Family therapy helps parents understand the recovery timeline and create a supportive home environment.",
    faqs: [
      {
        q: 'How long does it take for a teen to recover from meth use?',
        a: 'Methamphetamine recovery is a gradual process. Physical stabilization may take weeks, and the brain continues to heal for months after stopping use. Our residential program provides sustained support, followed by aftercare planning with outpatient referrals to give your teen the best foundation for lasting recovery.',
      },
      {
        q: 'Can the brain heal after teen meth use?',
        a: "Research shows that many of methamphetamine's effects on the brain are at least partially reversible with sustained abstinence and proper treatment. The adolescent brain has remarkable neuroplasticity, which means earlier intervention leads to better recovery of brain function.",
      },
      {
        q: 'What makes teen meth treatment different from adult programs?',
        a: 'Adolescents have unique developmental needs. Our program addresses age-appropriate social dynamics, academic continuity through on-site schooling, family involvement, and the specific peer pressure and identity issues that teens face during recovery.',
      },
      {
        q: 'What is meth-induced psychosis and how do you treat it?',
        a: 'Methamphetamine can cause paranoia, hallucinations, and delusional thinking, especially with heavy or prolonged use. These symptoms typically improve with abstinence and supportive care. Our clinical team provides close monitoring and appropriate medical support until psychotic symptoms resolve.',
      },
      {
        q: 'Why is meth so addictive for teenagers?',
        a: 'Methamphetamine floods the brain with dopamine — the reward chemical — at levels far beyond what natural activities produce. The teenage brain is especially sensitive to reward signals and develops dependence more quickly than the adult brain. This combination makes meth exceptionally addictive for adolescents.',
      },
      {
        q: 'What is the success rate of treatment for teen methamphetamine abuse?',
        a: 'According to the National Institute on Drug Abuse (NIDA), behavioral therapies including the Matrix Model and contingency management produce significant reductions in meth use in approximately 40–60% of treated adolescents. The developing adolescent brain has greater neuroplasticity than the adult brain, which supports better recovery outcomes when treatment is initiated early.',
      },
      {
        q: 'How is methamphetamine use disorder diagnosed in adolescents?',
        a: 'Methamphetamine use disorder is diagnosed using DSM-5 stimulant use disorder criteria, which evaluate patterns including escalating use, inability to reduce use, cravings, and continued use despite physical and psychological harm. Clinical assessment includes toxicology screening, evaluation of physical health consequences, and comprehensive mental health evaluation to identify co-occurring conditions.',
      },
    ],
    relatedPrograms: ['residential-treatment'],
    relatedConditions: [
      'substance-abuse-treatment',
      'dual-diagnosis-treatment',
      'cocaine-abuse-treatment',
    ],
    metaTitle: 'Teen Meth Abuse Treatment | Silver State',
    metaDescription:
      'Intensive adolescent methamphetamine abuse treatment at Silver State in Las Vegas. Structured residential care and evidence-based therapy for teens 11-17.',
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
    heroImage: '/assets/facility-gallery/hallway-central-hub.jpg',
    sectionImages: ['/assets/stock/cannabis-therapy.jpg', '/assets/stock/family-art-therapy.jpg'],
    seoKeywords: ['teen cannabis treatment', 'adolescent marijuana treatment', 'teen marijuana addiction Las Vegas', 'cannabis abuse treatment teenagers', 'teen weed dependence therapy'],
    headline: 'Adolescent Cannabis Abuse Treatment at Silver State',
    category: 'substance-abuse',
    description:
      "Cannabis is the most widely used substance among adolescents after alcohol, with the National Institute on Drug Abuse (NIDA) reporting that approximately 1 in 6 teens who begin using before age 18 will develop a cannabis use disorder. Silver State provides specialized care for adolescents ages 11–17 who have developed problematic marijuana use patterns. Despite common misconceptions that cannabis is harmless, research shows that regular use during adolescence can significantly impact brain development — particularly the areas responsible for memory, learning, impulse control, and motivation.\n\nToday's cannabis products are far more potent than in previous generations. THC concentrations in flower have tripled over the past two decades, and concentrated products like vape cartridges, dabs, and edibles can contain 80–90% THC. This increased potency has led to higher rates of dependence, cannabis-induced anxiety and panic, and in vulnerable teens, psychotic episodes.\n\nCannabis dependence in adolescents is a recognized clinical condition with real withdrawal symptoms including irritability, insomnia, loss of appetite, and intense cravings. The normalization of cannabis in popular culture and its legal status for adults in Nevada make it especially challenging for teens to recognize when their use has become a problem.\n\nAt our Las Vegas treatment center, Silver State's clinicians understand that cannabis dependence in adolescents is real and that many teens need structured support to stop using. We address both the substance use and the underlying factors — anxiety, boredom, social pressure, or mental health conditions — that maintain the pattern.",
    symptoms: [
      'Daily or near-daily cannabis use',
      'Bloodshot eyes, increased appetite, or lethargy',
      'Declining motivation, grades, and engagement in activities',
      'Irritability, anxiety, or sleep problems when not using',
      'Using cannabis first thing in the morning or before school',
      'Spending significant time obtaining, using, or recovering from cannabis',
      'Failed attempts to cut back or quit on their own',
      'Choosing cannabis over previously enjoyed activities or friendships',
      'Using increasingly potent products like concentrates or edibles',
    ],
    therapies: [
      'Cognitive Behavioral Therapy (CBT)',
      'Motivational Enhancement Therapy (MET)',
      'Contingency Management',
      'Family Behavior Therapy',
    ],
    approach:
      "Silver State's cannabis treatment begins with psychoeducation about how cannabis affects the adolescent brain, then moves into evidence-based therapy addressing the patterns maintaining your teen's use. Within our residential program, we help teens develop alternative coping strategies and rebuild motivation. Our 4:1 staff ratio provides mentorship and accountability.\n\nFamily therapy addresses enabling patterns and builds a supportive home environment. We help parents navigate the complexities of cannabis being legal for adults while explaining the distinct risks for the developing adolescent brain. Our aftercare planning provides continued support and accountability as your teen rebuilds their daily routine and peer relationships.",
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
        a: 'The level of care depends on the severity of use and any co-occurring conditions. Residential treatment may be recommended if your teen has severe co-occurring mental health conditions, has been unable to stop in less intensive settings, or needs distance from a high-risk social environment. Our admissions team will help determine the right fit.',
      },
      {
        q: 'Are vape pens and edibles more dangerous than smoking marijuana?',
        a: 'Concentrated cannabis products like vape cartridges and edibles often contain much higher THC levels than traditional marijuana, increasing the risk of dependence, anxiety, paranoia, and psychotic episodes. Many teens underestimate the potency of these products, which can lead to more rapid escalation of use.',
      },
      {
        q: 'Can cannabis use cause mental health problems in teenagers?',
        a: 'Yes. Regular cannabis use during adolescence is associated with increased risk of anxiety disorders, depression, and in genetically predisposed individuals, psychotic disorders. It can also worsen existing mental health conditions. Our treatment addresses both the substance use and any co-occurring mental health concerns.',
      },
      {
        q: 'What is the success rate of treatment for teen cannabis abuse?',
        a: 'According to the National Institute on Drug Abuse (NIDA), evidence-based interventions such as Motivational Enhancement Therapy and CBT produce significant reductions in cannabis use in approximately 50–65% of adolescents who complete treatment. Family involvement and treatment of co-occurring mental health conditions are key factors in long-term success.',
      },
      {
        q: 'How is cannabis use disorder diagnosed in adolescents?',
        a: 'Cannabis use disorder is diagnosed using DSM-5 criteria that assess 11 symptoms including tolerance, withdrawal, inability to cut down, and continued use despite problems in school, relationships, or health. A clinical evaluation includes screening for co-occurring anxiety, depression, and other conditions that frequently accompany problematic cannabis use in teens.',
      },
    ],
    relatedPrograms: ['residential-treatment'],
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
    heroImage: '/assets/facility-gallery/courtyard-patio-seating.jpg',
    sectionImages: ['/assets/stock/anorexia-therapy.jpg', '/assets/stock/treatment-plan-doctor.jpg'],
    seoKeywords: ['teen anorexia treatment', 'adolescent anorexia nervosa treatment', 'teen eating disorder treatment Las Vegas', 'anorexia treatment for teenagers', 'adolescent eating disorder program'],
    headline: 'Adolescent Anorexia Nervosa Treatment at Silver State',
    category: 'eating-disorders',
    description:
      "Anorexia nervosa is a serious eating disorder with one of the highest mortality rates of any mental health condition among adolescents, affecting approximately 0.5–1% of adolescent girls and a growing number of boys according to the National Eating Disorders Association (NEDA). Silver State provides comprehensive, life-saving care for adolescents ages 11–17 struggling with severe food restriction, intense fear of gaining weight, and distorted body image. The physical and psychological effects on a growing teen can be devastating without early, specialized intervention.\n\nAnorexia nervosa typically emerges during adolescence, with peak onset between ages 14 and 18. The condition often develops gradually — starting with dieting or \"clean eating\" that progressively becomes more restrictive. Social media, athletic pressure, and cultural ideals of thinness can all contribute to its development, though the underlying causes are complex and include genetic, neurobiological, and psychological factors.\n\nThe medical consequences of anorexia in adolescents are particularly serious because restriction occurs during a critical period of growth and development. Malnutrition can impair bone density, delay puberty, affect heart function, and cause lasting damage to the brain. Early intervention is essential — research shows that adolescents who receive treatment within the first three years of illness have significantly higher rates of full recovery.\n\nAt our Las Vegas treatment center, Silver State's multidisciplinary team includes clinicians, medical professionals, and nutrition specialists who understand that anorexia is not about vanity — it's a complex mental health condition that requires compassionate, evidence-based treatment in a safe and structured environment.",
    symptoms: [
      'Dramatic weight loss or failure to gain expected weight during growth',
      'Intense fear of gaining weight despite being underweight',
      'Severely restricted food intake or refusal to eat certain food groups',
      'Excessive exercise even when tired, injured, or in bad weather',
      'Wearing baggy clothing to hide weight loss',
      'Social withdrawal, especially around meals or food-related events',
      'Dizziness, fainting, difficulty concentrating, or feeling cold all the time',
      'Rituals around food such as cutting food into tiny pieces, moving food around the plate, or avoiding eating in front of others',
      'Growth of fine body hair (lanugo) as the body tries to stay warm',
      'Loss of menstrual periods or delayed puberty',
    ],
    therapies: [
      'Family-Based Treatment (FBT/Maudsley)',
      'Cognitive Behavioral Therapy for Eating Disorders (CBT-E)',
      'Dialectical Behavior Therapy (DBT)',
      'Nutritional Rehabilitation',
    ],
    approach:
      "Silver State's anorexia treatment integrates medical monitoring, nutritional rehabilitation, and evidence-based psychotherapy. Our residential program provides the highest level of support with supervised meals, medical oversight, and 24/7 clinical care. The refeeding process is carefully managed by our medical and nutrition teams to ensure safety and appropriate weight restoration.\n\nAs teens stabilize medically and nutritionally, we develop a comprehensive discharge plan with outpatient referrals for continued meal support and therapy. Our 4:1 staff ratio ensures individualized attention during the challenging recovery process. Family-Based Treatment puts parents in a central role, equipping families to support nutritional restoration and challenge the eating disorder at home. Our discharge planning ensures that gains made in residential treatment are maintained as your teen transitions to outpatient care.",
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
        a: 'Recovery from anorexia is typically a longer process. Residential stays may last 60–90+ days depending on medical stability, followed by outpatient aftercare. Full recovery can take months to years, but meaningful progress often begins within the first weeks of structured treatment.',
      },
      {
        q: 'Does insurance cover anorexia treatment for teens?',
        a: 'Most major insurance plans cover eating disorder treatment for adolescents. Our admissions team works with your insurance provider to verify coverage and maximize benefits before treatment begins.',
      },
      {
        q: 'Can boys develop anorexia nervosa?',
        a: 'Yes. While anorexia is more commonly diagnosed in girls, it increasingly affects adolescent boys. Male anorexia may present differently — focusing on muscularity or leanness rather than thinness. Our clinicians are experienced in recognizing and treating anorexia across all genders.',
      },
      {
        q: 'What are the warning signs that my teen may have anorexia?',
        a: 'Early warning signs include increasing food restriction, excessive exercise, preoccupation with calories or "clean eating," avoiding family meals, wearing loose clothing, withdrawal from social activities, and noticeable weight loss or failure to grow as expected. If you notice these patterns, seek professional evaluation promptly.',
      },
      {
        q: 'What is the success rate of treatment for teen anorexia nervosa?',
        a: 'According to the National Eating Disorders Association (NEDA), Family-Based Treatment (FBT) produces full remission in approximately 40–50% of adolescents with anorexia nervosa, with an additional 20–30% showing significant improvement. Adolescents treated within the first three years of illness have the highest recovery rates.',
      },
      {
        q: 'How is anorexia nervosa diagnosed in adolescents?',
        a: 'Anorexia nervosa is diagnosed using DSM-5 criteria, which require restriction of energy intake leading to significantly low body weight, intense fear of gaining weight, and disturbance in self-perceived weight or shape. In adolescents, clinicians also evaluate growth trajectory, as failure to gain expected weight during development may meet criteria even without dramatic weight loss.',
      },
    ],
    relatedPrograms: ['residential-treatment'],
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
    heroImage: '/assets/facility-gallery/medical-office-wide.jpg',
    sectionImages: ['/assets/stock/bulimia-therapy.jpg', '/assets/stock/group-therapy-session.jpg'],
    seoKeywords: ['teen bulimia treatment', 'adolescent bulimia nervosa treatment', 'bulimia treatment for teenagers', 'teen eating disorder treatment Las Vegas', 'teen binge purge treatment'],
    headline: 'Adolescent Bulimia Nervosa Treatment at Silver State',
    category: 'eating-disorders',
    description:
      'Bulimia nervosa is a serious eating disorder involving recurrent episodes of binge eating followed by compensatory behaviors such as purging, excessive exercise, laxative use, or fasting, affecting approximately 1–2% of adolescent girls with increasing rates in boys according to the National Eating Disorders Association (NEDA). Silver State helps teens ages 11–17 break the destructive binge-purge cycle and rebuild a healthy relationship with food. The condition is often hidden — teens with bulimia may maintain a normal weight, making it harder for parents to detect. The condition typically develops during mid-to-late adolescence, often following a period of dieting or food restriction. Social media pressure, perfectionism, low self-esteem, and trauma are common contributing factors. Many teens with bulimia also struggle with co-occurring anxiety, depression, or substance use.\n\nThe physical consequences of bulimia in adolescents are serious and can be life-threatening. Repeated purging causes electrolyte imbalances that can affect heart rhythm, dental erosion, esophageal tears, chronic dehydration, and hormonal disruptions that impact growth and development. The shame and secrecy surrounding bulimia often prevent teens from seeking help, making early detection and compassionate treatment essential.\n\nAt our Las Vegas treatment center, Silver State\'s clinical team helps teens break the binge-purge cycle while addressing the underlying emotional pain, body image distortion, and perfectionism that fuel the disorder. We create a judgment-free environment where your teen can begin to heal.',
    symptoms: [
      'Evidence of binge eating such as disappearing food or hidden food wrappers',
      'Frequent trips to the bathroom after meals',
      'Swollen cheeks or jaw, calluses on knuckles from purging',
      'Excessive exercise that feels compulsive rather than enjoyable',
      'Preoccupation with weight, body shape, or calorie counting',
      'Mood swings, shame, or guilt around eating',
      'Use of laxatives, diuretics, or diet pills',
      'Fluctuating weight with no clear pattern',
      'Eating large amounts of food rapidly in a short period',
    ],
    therapies: [
      'Cognitive Behavioral Therapy for Eating Disorders (CBT-E)',
      'Family-Based Treatment (FBT)',
      'Dialectical Behavior Therapy (DBT)',
      'Interpersonal Therapy (IPT)',
    ],
    approach:
      "Silver State's bulimia treatment focuses on interrupting the binge-purge cycle and addressing the emotional triggers behind it. Within our residential program, your teen receives structured meal support, individual therapy, body image work, and nutritional counseling. Our 4:1 staff ratio allows clinicians to provide the close support needed during and after meals, a critical time for teens with bulimia.\n\nFamily therapy helps parents understand the disorder, recognize enabling patterns, and create a supportive recovery environment at home. Our discharge planning ensures that as your teen transitions to outpatient care, they have the coping skills and meal structure needed to maintain recovery. We address co-occurring conditions like depression and anxiety simultaneously to support whole-person healing.",
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
      {
        q: 'How can I tell if my teen has bulimia?',
        a: 'Warning signs include frequent bathroom trips after meals, disappearing food, hidden food wrappers, swollen cheeks or jaw, dental problems, excessive exercise, and mood changes around mealtimes. Because teens with bulimia often maintain a normal weight, these behavioral signs are more reliable indicators than weight changes.',
      },
      {
        q: 'Can bulimia cause permanent damage?',
        a: 'Some effects of bulimia — such as dental erosion — can be permanent if not addressed early. However, most medical complications improve significantly with treatment and sustained recovery. The earlier treatment begins, the better the long-term prognosis for physical and emotional health.',
      },
      {
        q: 'What is the success rate of treatment for teen bulimia nervosa?',
        a: 'According to the National Eating Disorders Association (NEDA), CBT for eating disorders (CBT-E) produces significant reduction in binge-purge behaviors in approximately 50–70% of adolescents with bulimia nervosa. Early intervention during adolescence, when eating patterns are still forming, is associated with higher rates of full recovery.',
      },
      {
        q: 'How is bulimia nervosa diagnosed in adolescents?',
        a: 'Bulimia nervosa is diagnosed using DSM-5 criteria, which require recurrent episodes of binge eating and compensatory behaviors occurring at least once a week for three months, along with self-evaluation unduly influenced by body shape and weight. Clinical assessment includes medical evaluation for electrolyte imbalances, dental erosion, and other physical consequences of purging.',
      },
    ],
    relatedPrograms: ['residential-treatment'],
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
    heroImage: '/assets/facility-gallery/lobby-common-corridor.jpg',
    sectionImages: ['/assets/stock/binge-eating-therapy.jpg', '/assets/stock/family-therapy-session.jpg'],
    seoKeywords: ['teen binge eating treatment', 'adolescent binge eating disorder treatment', 'BED treatment for teenagers', 'teen binge eating therapy Las Vegas', 'teen eating disorder treatment'],
    headline: 'Adolescent Binge Eating Disorder Treatment at Silver State',
    category: 'eating-disorders',
    description:
      'Binge eating disorder (BED) is the most common eating disorder in the United States, affecting approximately 1.6% of adolescents according to the National Institute of Mental Health (NIMH), yet it is often overlooked because it does not involve purging and may not result in visible weight changes. Silver State provides empathetic, evidence-based care for teens ages 11–17 who are struggling with recurrent binge eating episodes.\n\nBED involves recurrent episodes of eating large quantities of food in a short period, often rapidly and to the point of physical discomfort, accompanied by feelings of loss of control, shame, and distress. Many more adolescents experience subthreshold symptoms that cause significant emotional suffering.\n\nIn teenagers, binge eating is often driven by emotional pain — stress, loneliness, anxiety, depression, trauma, or low self-esteem. It can also develop in response to restrictive dieting, as the body and brain rebel against deprivation. The shame surrounding binge episodes often leads to secrecy, social isolation, and worsening mental health, creating a cycle that is difficult to break without professional support.\n\nAt our Las Vegas treatment center, Silver State\'s clinicians help teens understand the emotional triggers behind binge episodes and develop a healthier relationship with food — without dieting or restriction, which research shows can worsen the condition.',
    symptoms: [
      'Eating unusually large amounts of food in a short time period',
      'Eating rapidly during binge episodes',
      'Eating when not physically hungry or continuing past fullness',
      'Eating alone due to shame or embarrassment about quantity',
      'Feelings of disgust, guilt, or depression after binge episodes',
      'Hoarding or hiding food in their room',
      'Eating normally around others but bingeing when alone',
      'Emotional eating in response to stress, boredom, or sadness',
      'Repeated failed attempts to control eating patterns',
    ],
    therapies: [
      'Cognitive Behavioral Therapy for Eating Disorders (CBT-E)',
      'Dialectical Behavior Therapy (DBT)',
      'Interpersonal Therapy (IPT)',
      'Mindful Eating Practices',
    ],
    approach:
      "Silver State's BED treatment addresses the emotional roots of binge eating while normalizing eating patterns. Within our residential program, teens learn to identify emotional triggers, develop alternative coping skills, and practice structured, mindful eating. Our 4:1 staff ratio provides consistent support, and our clinical team creates a shame-free environment that is essential for healing.\n\nWe explicitly avoid diet-focused approaches, instead helping teens build a healthy, sustainable relationship with food and their bodies. Family therapy educates parents about BED, addresses family meal dynamics, and helps the household create an environment that supports recovery. Our aftercare planning ensures continued support as your teen builds independence in managing their relationship with food.",
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
      {
        q: 'Is binge eating disorder a serious condition?',
        a: 'Yes. BED causes significant emotional distress and can lead to medical complications including metabolic issues and cardiovascular risk factors. It is also strongly associated with depression, anxiety, and low quality of life. Like all eating disorders, BED requires professional treatment.',
      },
      {
        q: 'How do you address the shame my teen feels about binge eating?',
        a: 'Shame reduction is central to our approach. We create a nonjudgmental therapeutic environment, use group therapy to reduce isolation, and help teens understand that BED is a clinical condition — not a character flaw. As shame decreases, teens become more engaged in treatment and recovery.',
      },
      {
        q: 'What is the success rate of treatment for teen binge eating disorder?',
        a: 'According to the National Institute of Mental Health (NIMH), CBT for eating disorders produces significant reduction in binge eating episodes in approximately 50–60% of adolescents with BED. Interpersonal therapy and DBT also show strong results, particularly when treatment addresses the emotional triggers driving binge episodes.',
      },
      {
        q: 'How is binge eating disorder diagnosed in adolescents?',
        a: 'BED is diagnosed using DSM-5 criteria, which require recurrent binge eating episodes occurring at least once a week for three months, marked by eating rapidly, eating until uncomfortably full, eating large amounts when not hungry, eating alone due to embarrassment, and feeling distressed afterward. Unlike bulimia, BED does not involve regular compensatory behaviors such as purging.',
      },
    ],
    relatedPrograms: ['residential-treatment'],
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
    heroImage: '/assets/facility-gallery/classroom-whiteboard-mural.jpg',
    sectionImages: ['/assets/stock/arfid-therapy.jpg', '/assets/stock/holistic-therapy.jpg'],
    seoKeywords: ['teen ARFID treatment', 'adolescent ARFID treatment', 'avoidant restrictive food intake disorder treatment', 'ARFID treatment Las Vegas', 'teen selective eating treatment'],
    headline: 'Adolescent ARFID Treatment at Silver State',
    category: 'eating-disorders',
    description:
      'Avoidant/restrictive food intake disorder (ARFID) is a clinically significant eating condition affecting an estimated 1–5% of children and adolescents according to the National Eating Disorders Association (NEDA), going far beyond picky eating to cause nutritional deficiencies, weight loss, impaired growth, and social isolation during critical developmental years. Silver State provides specialized care for teens ages 11–17 who severely limit their food intake due to sensory sensitivities, fear of negative consequences, or a lack of interest in eating.\n\nARFID occurs across all genders and backgrounds. Unlike anorexia or bulimia, ARFID is not driven by body image concerns or a desire to lose weight. Instead, teens with ARFID may avoid food because of its sensory properties (texture, smell, appearance), fear of choking or vomiting, a traumatic experience related to eating, or simply a persistent lack of appetite or interest in food.\n\nThe consequences of untreated ARFID in adolescents are serious. Nutritional deficiencies can affect bone health, brain development, immune function, and energy levels. Social isolation often increases as teens avoid meals with peers and family gatherings. Many teens with ARFID also experience co-occurring anxiety, depression, or autism spectrum characteristics.\n\nAt our Las Vegas treatment center, Silver State\'s team understands that ARFID is not a choice or a phase. We work with your teen to gradually expand their food repertoire in a supportive, pressure-free environment, using evidence-based approaches adapted specifically for this condition.',
    symptoms: [
      'Severely limited range of foods they are willing to eat',
      'Avoidance of foods based on texture, color, smell, or temperature',
      'Fear of choking, vomiting, or allergic reactions when trying new foods',
      'Significant weight loss or failure to gain expected weight',
      'Nutritional deficiencies causing fatigue, dizziness, or poor concentration',
      'Anxiety around mealtimes or social situations involving food',
      'Dependence on nutritional supplements or meal replacement drinks',
      'Eating only a small number of "safe" foods and refusing all others',
      'Gagging or retching when exposed to non-preferred foods',
    ],
    therapies: [
      'Cognitive Behavioral Therapy (CBT)',
      'Systematic Desensitization for Food',
      'Family-Based Treatment (FBT) adapted for ARFID',
      'Occupational Therapy with Sensory Integration',
    ],
    approach:
      "Silver State's ARFID treatment combines gradual food exposure with anxiety management in a structured therapeutic environment. Within our residential program, our clinical and nutrition teams work together to help your teen slowly and safely expand their diet. Our 4:1 staff ratio provides patient, individualized support during meals, and our approach is always collaborative — never forceful.\n\nWe collaborate with families to continue progress at home, understanding that ARFID recovery requires consistency across all environments. Family therapy teaches parents how to support food exploration without pressure, manage mealtimes constructively, and distinguish between accommodation and support. For teens with sensory-based ARFID, occupational therapy with sensory integration helps build tolerance gradually.",
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
      {
        q: 'Can ARFID cause serious health problems in teenagers?',
        a: 'Yes. Prolonged nutritional restriction can affect bone density, brain development, immune function, heart health, and growth. Some teens with ARFID require medical monitoring and nutritional rehabilitation to address deficiencies. Early treatment prevents lasting health consequences.',
      },
      {
        q: 'Will my teen ever eat normally?',
        a: 'With appropriate treatment, most teens with ARFID significantly expand their food repertoire and improve their nutritional status. The goal is not to eliminate all food preferences but to build a diet that is nutritionally adequate, socially manageable, and free from excessive anxiety.',
      },
      {
        q: 'What is the success rate of treatment for teen ARFID?',
        a: 'According to the National Eating Disorders Association (NEDA), structured treatment programs combining gradual food exposure, CBT, and family involvement produce meaningful expansion of food repertoire and improved nutritional status in the majority of adolescents with ARFID. Outcomes are particularly strong when sensory and anxiety components are addressed alongside nutritional rehabilitation.',
      },
      {
        q: 'How is ARFID diagnosed in adolescents?',
        a: 'ARFID is diagnosed using DSM-5 criteria, which require an eating or feeding disturbance resulting in persistent failure to meet nutritional needs, evidenced by significant weight loss, nutritional deficiency, dependence on supplements, or marked interference with psychosocial functioning. Crucially, ARFID is distinguished from other eating disorders by the absence of body image disturbance or fear of weight gain.',
      },
    ],
    relatedPrograms: ['residential-treatment'],
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
    heroImage: '/assets/facility-gallery/medical-office-wide.jpg',
    sectionImages: ['/assets/stock/osfed-therapy.jpg', '/assets/stock/individual-therapy-pink.jpg'],
    seoKeywords: ['teen OSFED treatment', 'adolescent OSFED treatment', 'atypical eating disorder treatment teens', 'OSFED treatment Las Vegas', 'other specified eating disorder therapy teenagers'],
    headline: 'Adolescent OSFED Treatment at Silver State',
    category: 'eating-disorders',
    description:
      'Other specified feeding or eating disorder (OSFED) is the most commonly diagnosed eating disorder category, accounting for a significant proportion of all eating disorder diagnoses in adolescents according to the National Eating Disorders Association (NEDA), and is just as serious as anorexia, bulimia, or binge eating disorder. Silver State provides individualized care for teens ages 11–17 whose eating disorder symptoms cause significant distress but do not fully meet the diagnostic criteria for other specific eating disorders.\n\nOSFED encompasses several presentations including atypical anorexia, purging disorder, subthreshold bulimia, and night eating syndrome. Examples include atypical anorexia (significant restriction and fear of weight gain without being underweight), purging disorder (purging without binge eating), subthreshold bulimia or BED, and night eating syndrome.\n\nMany teens with OSFED feel that their condition is not "severe enough" to warrant treatment — a dangerous misconception that delays intervention and allows the disorder to progress. OSFED carries the same risks for serious physical and psychological consequences as other eating disorders, including electrolyte imbalances, nutritional deficiencies, depression, anxiety, and social isolation.\n\nAt our Las Vegas treatment center, Silver State treats OSFED with the same evidence-based rigor we apply to all eating disorders. Our clinical team develops an individualized treatment plan based on your teen\'s specific symptoms, recognizing that every eating disorder presentation is unique and deserves comprehensive care.',
    symptoms: [
      'Restrictive eating patterns that cause distress but may not meet full anorexia criteria',
      'Purging behaviors without regular binge episodes',
      'Binge eating less frequently than required for a BED diagnosis',
      'Night eating syndrome — eating the majority of food after dinner',
      'Significant preoccupation with food, weight, or body shape',
      'Physical or emotional consequences of disordered eating patterns',
      'Rigid food rules that cause anxiety when broken',
      'Compensatory exercise after eating',
      'Body checking behaviors such as frequent weighing or mirror checking',
    ],
    therapies: [
      'Cognitive Behavioral Therapy for Eating Disorders (CBT-E)',
      'Dialectical Behavior Therapy (DBT)',
      'Family-Based Treatment (FBT)',
      'Nutritional Counseling',
    ],
    approach:
      "Silver State's OSFED treatment is tailored to the specific presentation your teen is experiencing. Our clinical team identifies the core disordered eating patterns and applies the most appropriate evidence-based interventions. Within our residential program, your teen receives individualized therapy, structured meal support, and nutritional rehabilitation. Our 4:1 staff ratio provides the personalized care that OSFED's varied presentations require.\n\nFamily therapy helps parents understand their teen's specific eating disorder presentation, recognize warning signs of escalation, and create a home environment that supports recovery. Our treatment approach addresses co-occurring conditions like anxiety and depression simultaneously, and our aftercare planning ensures continued support as your teen builds independence in maintaining recovery.",
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
      {
        q: 'Can OSFED progress to a more severe eating disorder?',
        a: 'Yes. Without treatment, OSFED can progress to meet full criteria for anorexia, bulimia, or BED. Early intervention prevents this escalation and addresses the disordered eating patterns before they become more entrenched.',
      },
      {
        q: 'My teen has atypical anorexia — what does that mean?',
        a: "Atypical anorexia involves the same restrictive behaviors, fear of weight gain, and psychological distress as anorexia nervosa, but the individual's weight may be in or above the normal range. It is equally serious and requires the same level of clinical attention and treatment.",
      },
      {
        q: 'What is the success rate of treatment for teen OSFED?',
        a: 'According to the National Eating Disorders Association (NEDA), evidence-based treatments such as CBT-E and FBT produce outcomes for OSFED that are comparable to treatment of other eating disorders, with significant symptom improvement in approximately 50–70% of adolescents. Early intervention before symptoms meet full diagnostic criteria for another eating disorder is associated with faster and more complete recovery.',
      },
      {
        q: 'How is OSFED diagnosed in adolescents?',
        a: 'OSFED is diagnosed using DSM-5 criteria when an adolescent presents with clinically significant eating disorder symptoms that cause distress or impairment but do not meet the full criteria for anorexia nervosa, bulimia nervosa, BED, or ARFID. A comprehensive evaluation identifies the specific disordered eating patterns and any co-occurring conditions to guide individualized treatment planning.',
      },
    ],
    relatedPrograms: ['residential-treatment'],
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
    heroImage: '/assets/facility-gallery/bedroom-twin-window.jpg',
    sectionImages: ['/assets/stock/compulsive-eating-therapy.jpg', '/assets/stock/psychologist-with-teen.jpg'],
    seoKeywords: ['teen compulsive eating treatment', 'adolescent compulsive eating therapy', 'compulsive overeating treatment teenagers', 'teen emotional eating treatment Las Vegas', 'compulsive eating disorder therapy'],
    headline: 'Adolescent Compulsive Eating Treatment at Silver State',
    category: 'eating-disorders',
    description:
      'Compulsive eating is a distressing behavioral pattern in which adolescents eat beyond hunger driven by emotional distress, boredom, anxiety, or a need for comfort rather than physical hunger, and is recognized by the National Eating Disorders Association (NEDA) as a significant condition requiring clinical attention. Silver State helps teens ages 11–17 who have developed this persistent pattern that feels impossible to control. Unlike binge eating disorder, compulsive eating may not involve distinct binge episodes but rather a continuous pattern of overeating throughout the day.\n\nCompulsive eating in teenagers is often misunderstood or dismissed as a lack of willpower. In reality, it is a complex behavioral pattern with emotional, psychological, and sometimes neurobiological roots. Teens who eat compulsively are often using food to regulate difficult emotions — stress, loneliness, anxiety, depression, or trauma-related distress — because they lack alternative coping strategies.\n\nThe consequences of untreated compulsive eating extend beyond physical health. Teens who eat compulsively often experience intense shame, social withdrawal, declining self-esteem, and worsening mental health. Restrictive dieting — a common response from well-meaning families — typically worsens the cycle by increasing preoccupation with food and triggering more intense overeating episodes.\n\nAt our Las Vegas treatment center, Silver State combines clinical therapy with nutritional support to help your teen develop a balanced, non-restrictive relationship with food. We address the emotional triggers and co-occurring conditions driving the compulsive eating pattern while building sustainable coping skills.',
    symptoms: [
      'Eating when not physically hungry or eating past the point of fullness',
      'Using food to cope with stress, anxiety, boredom, or sadness',
      'Feeling out of control around food or unable to stop eating',
      'Eating in secret or hiding food wrappers or containers',
      'Shame or guilt after eating episodes',
      'Weight gain or fluctuations causing emotional distress',
      'Preoccupation with food throughout the day',
      'Grazing or continuous snacking even when not hungry',
      'Eating more rapidly than usual or eating past physical discomfort',
      'Difficulty distinguishing between physical hunger and emotional hunger',
    ],
    therapies: [
      'Cognitive Behavioral Therapy for Eating Disorders (CBT-E)',
      'Dialectical Behavior Therapy (DBT)',
      'Nutritional Counseling',
      'Mindfulness-Based Eating Awareness',
    ],
    approach:
      "Silver State's compulsive eating treatment focuses on understanding the emotional function of overeating and developing alternative coping strategies. Within our residential program, your teen participates in individual therapy to identify triggers, group sessions to reduce shame, and structured meals with nutritional support. Our clinical team addresses co-occurring conditions like anxiety and depression that often drive compulsive eating patterns.\n\nOur 4:1 staff ratio ensures your teen receives personalized attention and support throughout treatment. Family therapy helps parents understand the compulsive eating cycle, avoid inadvertently reinforcing restrictive patterns, and create a home food environment that supports recovery. Our non-diet approach teaches intuitive eating skills and emotional regulation strategies that your teen can use for life.",
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
      {
        q: 'How is compulsive eating treated differently from other eating disorders?',
        a: 'Treatment for compulsive eating focuses heavily on emotional regulation, identifying the feelings driving the eating behavior, and developing alternative coping strategies. Unlike anorexia or bulimia treatment, the focus is not on meal compliance but on building a mindful, balanced approach to eating without restriction.',
      },
      {
        q: 'Can my teen overcome compulsive eating?',
        a: 'Yes. With evidence-based treatment that addresses both the eating behavior and its emotional drivers, most teens make significant progress. Our program builds skills in emotional awareness, distress tolerance, and intuitive eating that support long-term recovery.',
      },
      {
        q: 'What is the success rate of treatment for teen compulsive eating?',
        a: 'According to the National Eating Disorders Association (NEDA), evidence-based treatments including CBT-E and DBT produce significant reductions in compulsive eating behaviors in the majority of adolescents who complete treatment. Addressing co-occurring conditions such as anxiety and depression alongside the eating pattern is critical to sustained improvement.',
      },
      {
        q: 'How is compulsive eating diagnosed in adolescents?',
        a: 'Compulsive eating is evaluated through comprehensive clinical assessment that examines eating patterns, emotional triggers, and the degree of distress and functional impairment. While compulsive eating may not always meet DSM-5 criteria for a specific eating disorder, clinicians use structured interviews and validated eating behavior questionnaires to characterize the pattern and develop an appropriate treatment plan.',
      },
    ],
    relatedPrograms: ['residential-treatment'],
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
