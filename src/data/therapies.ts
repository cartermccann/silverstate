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
    heroImage: '/assets/facility-gallery/therapy-room-cozy.jpg',
    description:
      'Cognitive Behavioral Therapy (CBT) for teens is one of the most widely practiced and thoroughly researched forms of psychotherapy. At Silver State, our licensed therapists use CBT to help adolescents identify the negative thought patterns and core beliefs that drive anxiety, depression, and behavioral challenges. Through structured, goal-oriented sessions, teens learn to recognize cognitive distortions \u2014 such as catastrophizing, black-and-white thinking, and personalization \u2014 and replace them with more balanced, realistic perspectives.\n\nA typical CBT session begins with a check-in and mood rating, followed by collaborative work on a specific thinking pattern or behavioral goal. Teens may complete thought records, practice role-playing scenarios, or work through exposure hierarchies for anxiety-related concerns. Homework assignments between sessions reinforce new skills and encourage real-world practice.\n\nOur therapists adapt CBT techniques for adolescent developmental stages, using relatable examples, interactive worksheets, and age-appropriate language. Parents receive regular updates on their teen\u2019s progress and learn supportive strategies they can use at home to reinforce the cognitive restructuring skills their child is building in therapy.',
    howItHelps:
      'CBT gives teens a concrete, skills-based toolkit for managing anxiety, depression, and overwhelming emotions. Adolescents learn that their thoughts directly influence their feelings and behaviors, empowering them to interrupt negative cycles before they escalate. Over the course of treatment, teens develop practical skills including cognitive restructuring, behavioral activation, problem-solving, and stress management.\n\nThese skills transfer directly to daily life \u2014 from managing test anxiety and social pressure at school to navigating family conflict and peer relationships. Research consistently shows that the benefits of CBT for teens extend well beyond the treatment period, with many adolescents maintaining their gains years after completing therapy.',
    usedFor: [
      'anxiety-treatment',
      'depression-treatment',
      'ocd-treatment',
      'substance-abuse-treatment',
      'dual-diagnosis-treatment',
    ],
    evidenceBasis:
      'Over 2,000 clinical studies support the efficacy of CBT for anxiety, depression, and behavioral disorders in adolescents. A 2018 meta-analysis in the Journal of the American Academy of Child & Adolescent Psychiatry found CBT produced significant improvements in 60\u201380% of treated youth. The APA recognizes CBT as a first-line treatment for adolescent anxiety and depression.',
    metaTitle: 'Cognitive Behavioral Therapy (CBT) for Teens | Silver State',
    metaDescription:
      'CBT for teens at Silver State helps adolescents identify negative thought patterns and build coping skills. Evidence-based therapy for anxiety and depression.',
    seoKeywords: [
      'cbt for teens',
      'cognitive behavioral therapy for adolescents',
      'teen cbt therapy',
      'adolescent cognitive behavioral therapy',
    ],
  },
  {
    slug: 'dbt',
    name: 'Dialectical Behavior Therapy (DBT)',
    shortName: 'DBT',
    heroImage: '/assets/facility-gallery/game-room-yoga-mats.jpg',
    description:
      'Dialectical Behavior Therapy (DBT) for teens combines cognitive-behavioral techniques with mindfulness practices to help adolescents manage intense emotions, improve interpersonal relationships, and reduce self-destructive behaviors. Originally developed by Dr. Marsha Linehan for adults with borderline personality disorder, DBT has been extensively adapted for adolescents and is now considered a leading treatment for emotionally dysregulated teens.\n\nDBT teaches four core skill areas: mindfulness (staying present and aware), distress tolerance (surviving crisis moments without making things worse), emotion regulation (understanding and managing intense feelings), and interpersonal effectiveness (communicating needs and setting boundaries). At Silver State, teens participate in both individual DBT sessions and skills-training groups where they practice these techniques with peers.\n\nSessions are structured and interactive. Teens use diary cards to track emotions and urges between sessions, and therapists review these cards collaboratively to identify patterns and reinforce skill use. Parents are encouraged to learn DBT skills alongside their teen through family sessions, creating a shared language for navigating emotional challenges at home.',
    howItHelps:
      'DBT is particularly effective for teens who experience emotional dysregulation, self-harm urges, or difficulty maintaining relationships. It validates their experience while teaching practical skills to navigate intense feelings safely. Adolescents learn to pause before reacting, tolerate distress without resorting to harmful behaviors, and communicate their needs effectively.\n\nThe skills learned in DBT transfer directly into everyday situations \u2014 from managing conflicts with friends and family to coping with academic pressure and social media stress. Teens leave treatment with a personalized crisis plan and a toolkit of strategies they can use independently whenever overwhelming emotions arise.',
    usedFor: [
      'depression-treatment',
      'suicidal-ideation-treatment',
      'bpd-treatment',
      'substance-abuse-treatment',
      'dual-diagnosis-treatment',
    ],
    evidenceBasis:
      'Strong evidence base for reducing suicidal ideation, self-harm, and emotional dysregulation in adolescents. A landmark 2014 study in JAMA Psychiatry demonstrated that DBT for teens reduced self-harm episodes by 50% compared to standard treatment. The treatment has been adapted with adolescent-specific modules endorsed by the Society of Clinical Child and Adolescent Psychology.',
    metaTitle: 'Dialectical Behavior Therapy (DBT) for Teens | Silver State',
    metaDescription:
      'DBT for teens at Silver State teaches mindfulness, distress tolerance, and emotion regulation. Proven effective for self-harm and emotional dysregulation.',
    seoKeywords: [
      'dbt for teens',
      'dialectical behavior therapy for adolescents',
      'teen dbt skills',
      'adolescent dbt program',
    ],
  },
  {
    slug: 'emdr',
    name: 'Eye Movement Desensitization and Reprocessing (EMDR)',
    shortName: 'EMDR',
    heroImage: '/assets/facility-gallery/therapy-room-seating.jpg',
    description:
      'EMDR for teens is a specialized, evidence-based therapy that helps the brain process and heal from traumatic memories. Using bilateral stimulation \u2014 such as guided eye movements, tapping, or auditory tones \u2014 EMDR allows adolescents to reprocess distressing experiences so they no longer trigger overwhelming emotional responses. Unlike traditional talk therapy, EMDR does not require teens to describe their trauma in detail, making it especially well-suited for adolescents who find it difficult or distressing to verbalize their experiences.\n\nDuring a typical EMDR session, the therapist guides the teen through a structured eight-phase protocol. After establishing safety and identifying target memories, the teen focuses on the distressing memory while simultaneously engaging in bilateral stimulation. This dual-attention process helps the brain move the memory from an active, distressing state to a resolved, integrated one. Sessions typically last 50\u201390 minutes, and many teens notice significant relief within six to twelve sessions.\n\nOur EMDR-trained clinicians adapt the protocol for adolescent developmental needs, using age-appropriate language and creative engagement strategies. Parents are informed about the process and can expect to see gradual reductions in their teen\u2019s trauma-related symptoms, including nightmares, hypervigilance, avoidance behaviors, and emotional reactivity.',
    howItHelps:
      'For teens who have experienced trauma, EMDR can significantly reduce the intensity of traumatic memories without requiring detailed verbal recounting of the event. This makes it especially effective for adolescents who struggle to talk about their experiences or who feel overwhelmed by traditional trauma-processing approaches. Teens often report that after EMDR, distressing memories feel more distant and less emotionally charged.\n\nThe benefits of EMDR for teens extend beyond trauma processing. Adolescents frequently experience improvements in sleep quality, concentration, emotional regulation, and overall mood. These gains support better functioning at school, stronger peer relationships, and greater engagement in other aspects of their treatment program.',
    usedFor: ['trauma-ptsd-treatment', 'anxiety-treatment'],
    evidenceBasis:
      'EMDR is a WHO-recommended treatment for PTSD. Multiple randomized controlled trials demonstrate its efficacy for trauma processing in adolescents, with a 2017 meta-analysis in the European Journal of Psychotraumatology showing remission rates of 77\u201390% in youth with single-event trauma. The APA conditionally recommends EMDR for PTSD treatment.',
    metaTitle: 'EMDR Therapy for Teens | Silver State',
    metaDescription:
      'EMDR for teens at Silver State helps adolescents process trauma without verbal recounting. WHO-recommended therapy with proven results for PTSD and anxiety.',
    seoKeywords: [
      'emdr for teens',
      'emdr therapy for adolescents',
      'teen emdr treatment',
      'adolescent trauma therapy emdr',
    ],
  },
  {
    slug: 'tf-cbt',
    name: 'Trauma-Focused Cognitive Behavioral Therapy (TF-CBT)',
    shortName: 'TF-CBT',
    heroImage: '/assets/facility-gallery/therapy-room-cozy.jpg',
    description:
      'Trauma-Focused Cognitive Behavioral Therapy (TF-CBT) is a structured, evidence-based treatment designed specifically for children and adolescents who have experienced trauma. It integrates trauma-sensitive interventions with cognitive behavioral principles and includes a significant family component to support healing. The model follows the PRACTICE acronym: Psychoeducation, Relaxation, Affective modulation, Cognitive coping, Trauma narrative, In vivo mastery, Conjoint sessions, and Enhancing safety.\n\nIn a typical TF-CBT session, teens work through these components sequentially with their therapist. Early sessions focus on building coping skills and emotional regulation, while later sessions guide the adolescent in creating a structured trauma narrative \u2014 a carefully paced process that allows them to make sense of their experiences without being overwhelmed. The therapist ensures the teen feels safe and supported throughout each phase.\n\nA distinctive feature of TF-CBT is its emphasis on caregiver involvement. Parents or guardians participate in parallel sessions where they learn about trauma\u2019s impact, develop their own coping strategies, and prepare for conjoint sessions with their teen. This family component is critical because it helps parents understand their child\u2019s experience, strengthens the parent-child relationship, and creates a more supportive home environment for ongoing recovery.',
    howItHelps:
      'TF-CBT helps teens process traumatic experiences in a safe, structured way while building lasting resilience and coping skills. Adolescents learn to identify and challenge unhelpful thoughts related to their trauma, manage distressing emotions, and develop a coherent narrative of their experience that reduces its emotional power. The structured approach gives teens a sense of control over their healing process.\n\nThe family involvement component ensures that parents and guardians can actively support their teen\u2019s recovery at home. Skills learned in TF-CBT \u2014 including relaxation techniques, cognitive coping, and emotional regulation \u2014 transfer directly to school, social situations, and family life. Most teens complete TF-CBT in 12\u201325 sessions and show significant reductions in PTSD symptoms, depression, anxiety, and behavioral problems.',
    usedFor: ['trauma-ptsd-treatment', 'anxiety-treatment', 'depression-treatment'],
    evidenceBasis:
      'TF-CBT is the gold-standard treatment for childhood trauma, supported by over 20 randomized controlled trials across diverse populations. Research published in the Journal of Clinical Child & Adolescent Psychology shows symptom reduction in 80% of treated youth. TF-CBT is endorsed by SAMHSA, the National Child Traumatic Stress Network, and the American Academy of Child & Adolescent Psychiatry.',
    metaTitle: 'Trauma-Focused CBT (TF-CBT) for Teens | Silver State',
    metaDescription:
      'TF-CBT for teens at Silver State is the gold-standard trauma treatment for adolescents. Family-involved therapy backed by 20+ randomized controlled trials.',
    seoKeywords: [
      'tf-cbt for teens',
      'trauma-focused cbt for adolescents',
      'teen trauma therapy',
      'adolescent trauma-focused cognitive behavioral therapy',
    ],
  },
  {
    slug: 'somatic-experiencing',
    name: 'Somatic Experiencing',
    shortName: 'Somatic',
    heroImage: '/assets/facility-gallery/courtyard-basketball-wide.jpg',
    description:
      'Somatic Experiencing is a body-oriented approach to healing trauma and stress-related disorders developed by Dr. Peter Levine. It focuses on the connection between physical sensations and emotional states, helping teens release stored tension and complete the body\u2019s natural stress response cycle. Unlike purely cognitive approaches, Somatic Experiencing recognizes that trauma lives not only in the mind but also in the body, and that healing requires attending to both.\n\nDuring a somatic therapy session, the therapist gently guides the teen\u2019s awareness to physical sensations \u2014 such as tightness in the chest, clenching in the jaw, or butterflies in the stomach. By noticing these sensations without judgment and allowing the body to process them at its own pace, teens learn to release the physiological patterns associated with trauma and chronic stress. Sessions are paced carefully to avoid overwhelming the teen, using a technique called titration.\n\nFor adolescents, our therapists incorporate age-appropriate exercises including grounding techniques, gentle movement, and body-awareness activities. Parents can expect their teen to develop a stronger sense of safety in their own body, improved ability to recognize early stress signals, and greater capacity to self-regulate during emotionally challenging moments.',
    howItHelps:
      'Many teens carry trauma in their bodies as chronic tension, headaches, stomach aches, or heightened startle responses. Somatic Experiencing helps them develop body awareness and learn to regulate their nervous system, reducing anxiety and trauma symptoms at their physiological source. Teens gain the ability to recognize when their body is entering a fight, flight, or freeze response and learn concrete techniques to return to a calm, regulated state.\n\nThese body-based skills transfer seamlessly into daily life. Adolescents report feeling more grounded during stressful situations at school, calmer in social interactions, and better able to fall asleep at night. Somatic Experiencing is particularly valuable for teens who have not responded fully to traditional talk therapy or who find it difficult to put their experiences into words.',
    usedFor: ['trauma-ptsd-treatment', 'anxiety-treatment'],
    evidenceBasis:
      'A growing body of research supports somatic approaches for trauma recovery. A 2017 randomized controlled trial published in the Journal of Traumatic Stress found significant PTSD symptom reduction in participants receiving Somatic Experiencing. The approach shows particular promise for adolescents who respond well to body-based interventions and complements traditional cognitive therapies.',
    metaTitle: 'Somatic Experiencing Therapy for Teens | Silver State',
    metaDescription:
      'Somatic Experiencing for teens at Silver State uses body-oriented techniques to heal trauma and reduce anxiety. Helps adolescents release stored tension.',
    seoKeywords: [
      'somatic experiencing for teens',
      'somatic therapy for adolescents',
      'teen body-based trauma therapy',
      'adolescent somatic experiencing',
    ],
  },
  {
    slug: 'motivational-interviewing',
    name: 'Motivational Interviewing (MI)',
    shortName: 'MI',
    heroImage: '/assets/facility-gallery/therapy-room-dresser.jpg',
    description:
      'Motivational Interviewing (MI) is a collaborative, goal-oriented communication style that strengthens a teen\u2019s own motivation and commitment to change. Developed by Drs. William Miller and Stephen Rollnick, MI is grounded in the understanding that lasting change must come from within. Rather than telling teens what to do, MI helps them explore their own reasons for wanting change and resolve the ambivalence that often keeps them stuck.\n\nIn a typical MI session, the therapist uses open-ended questions, reflective listening, and affirmations to draw out the teen\u2019s own values and goals. The conversation is intentionally non-confrontational \u2014 there is no lecturing, shaming, or persuading. Instead, the therapist helps the teen examine the gap between where they are now and where they want to be, naturally strengthening their motivation to take positive steps.\n\nMI is particularly well-suited for adolescents because it respects their developmental need for autonomy and self-determination. Our therapists adapt MI techniques for teens by using their own language, referencing their specific interests and social context, and meeting them at their current stage of readiness for change. Parents learn about the MI approach so they can support their teen\u2019s self-directed motivation at home rather than relying on pressure or consequences alone.',
    howItHelps:
      'Adolescents often resist being told to change, especially when they feel coerced into treatment. MI meets them where they are, honoring their autonomy while gently guiding them toward healthier choices. It is especially effective for teens who are resistant to treatment, unsure about recovery, or struggling with substance use. By helping teens articulate their own reasons for change, MI builds intrinsic motivation that lasts beyond the treatment setting.\n\nSkills developed through MI \u2014 including self-reflection, goal-setting, and weighing pros and cons \u2014 serve teens well in everyday decision-making. Adolescents who engage in MI show higher treatment engagement, better attendance, and improved outcomes across other therapeutic modalities used in their care plan.',
    usedFor: ['substance-abuse-treatment', 'dual-diagnosis-treatment'],
    evidenceBasis:
      'Extensive evidence supports MI for increasing treatment engagement and reducing substance use in adolescent populations. A 2011 meta-analysis in Clinical Psychology Review found MI produced significant effects for adolescent substance use, with outcomes maintained at follow-up. MI is recommended by NIDA and SAMHSA as a best practice for adolescent substance abuse treatment.',
    metaTitle: 'Motivational Interviewing (MI) for Teens | Silver State',
    metaDescription:
      'Motivational Interviewing for teens at Silver State strengthens intrinsic motivation for change. Evidence-based approach for adolescent substance use recovery.',
    seoKeywords: [
      'motivational interviewing for teens',
      'mi therapy for adolescents',
      'teen motivational interviewing',
      'adolescent motivational interviewing',
    ],
  },
  {
    slug: 'family-therapy',
    name: 'Family Therapy',
    heroImage: '/assets/facility-gallery/lobby-reception-desk.jpg',
    shortName: 'Family',
    description:
      'Family therapy at Silver State involves parents, siblings, and other family members in the treatment process. It addresses family dynamics, communication patterns, and relational issues that may contribute to or result from a teen\u2019s mental health challenges. Our licensed marriage and family therapists use evidence-based approaches including Structural Family Therapy, Functional Family Therapy, and systemic models to help the entire family system heal and grow together.\n\nDuring family therapy sessions, the therapist helps family members understand how their interactions affect one another. Sessions may focus on improving communication, resolving longstanding conflicts, establishing healthy boundaries, or rebuilding trust that has been damaged by a teen\u2019s behavioral health challenges. The therapist acts as a neutral facilitator, ensuring every family member\u2019s voice is heard.\n\nFamily sessions are scheduled weekly and may include the full family or specific subsets depending on the therapeutic goals. Parents can expect to gain a deeper understanding of their teen\u2019s struggles, learn practical communication strategies, and develop a collaborative family plan for supporting their child\u2019s ongoing recovery after discharge. Sibling sessions, when appropriate, help brothers and sisters process their own feelings and strengthen family bonds.',
    howItHelps:
      'Healing is more sustainable when the whole family is involved. Family therapy helps rebuild trust, improve communication, and create a home environment that supports ongoing recovery and healthy development. Parents and guardians learn to recognize enabling patterns, set appropriate boundaries, and respond to their teen\u2019s emotional needs in ways that promote growth rather than conflict.\n\nThe skills practiced in family therapy translate directly to life after treatment. Families develop shared communication tools, conflict-resolution strategies, and a deeper understanding of each member\u2019s perspective. Research shows that adolescents whose families participate in treatment have significantly lower relapse rates and better long-term outcomes across a range of mental health conditions.',
    usedFor: [
      'anxiety-treatment',
      'depression-treatment',
      'substance-abuse-treatment',
      'dual-diagnosis-treatment',
      'oppositional-defiant-disorder-treatment',
      'conduct-disorder-treatment',
    ],
    evidenceBasis:
      'Family-based interventions are among the most well-supported treatments for adolescent behavioral health. A meta-analysis in the Journal of Marital and Family Therapy found family therapy produces clinically significant improvement in 70\u201375% of treated families. Functional Family Therapy is listed as a Blueprints Model Program by the University of Colorado.',
    metaTitle: 'Family Therapy for Teens | Silver State',
    metaDescription:
      'Family therapy at Silver State involves parents and siblings in adolescent treatment. Rebuild trust, improve communication, and support lasting teen recovery.',
    seoKeywords: [
      'family therapy for teens',
      'adolescent family therapy',
      'teen family counseling',
      'family therapy for adolescents',
    ],
  },
  {
    slug: 'group-therapy',
    name: 'Group Therapy',
    heroImage: '/assets/facility-gallery/game-room-pool-table.jpg',
    shortName: 'Group',
    description:
      'Group therapy for adolescents brings together a small number of teens \u2014 typically six to ten \u2014 under the guidance of a licensed therapist. Participants share experiences, practice interpersonal skills, and provide mutual support in a structured, confidential setting. At Silver State, group therapy is a core component of every teen\u2019s treatment plan, complementing individual and family therapy with a powerful peer-based healing experience.\n\nOur group therapy sessions are organized by theme and therapeutic focus. Teens may participate in process groups (where they explore feelings and interpersonal dynamics in real time), psychoeducational groups (where they learn skills around topics like anger management, healthy relationships, or coping with grief), and specialized groups for substance use recovery or trauma processing. Each group has clear guidelines around confidentiality, respect, and participation.\n\nTherapists facilitate rather than lecture, creating space for teens to learn from one another. Adolescents are naturally oriented toward their peers, and group therapy harnesses this developmental reality as a therapeutic tool. Parents can expect their teen to develop stronger social skills, greater empathy, and the confidence that comes from being heard and valued by peers who truly understand their struggles.',
    howItHelps:
      'Adolescents often feel isolated in their struggles, believing they are the only ones dealing with anxiety, depression, or family conflict. Group therapy for adolescents shows them they are not alone, reducing shame and building a sense of belonging. Teens practice healthy communication, active listening, giving and receiving feedback, and setting boundaries \u2014 all within a safe, therapist-guided environment.\n\nThese social and emotional skills transfer directly to school, friendships, and family relationships. Research shows that group therapy produces outcomes comparable to individual therapy for many conditions, with the added benefit of peer modeling and social learning. Teens frequently identify their group as one of the most meaningful parts of their treatment experience.',
    usedFor: ['anxiety-treatment', 'depression-treatment', 'substance-abuse-treatment'],
    evidenceBasis:
      'Group therapy is supported by extensive research for adolescent populations. A 2016 meta-analysis in the Journal of Clinical Child & Adolescent Psychology found group-based CBT equally effective as individual CBT for teen anxiety and depression. The American Group Psychotherapy Association identifies group therapy as a best practice for adolescent treatment programs.',
    metaTitle: 'Group Therapy for Adolescents | Silver State',
    metaDescription:
      'Group therapy for adolescents at Silver State builds peer connection and social skills. Teens learn they are not alone while practicing healthy communication.',
    seoKeywords: [
      'group therapy for adolescents',
      'teen group therapy',
      'adolescent group counseling',
      'group therapy for teens',
    ],
  },
  {
    slug: 'individual-therapy',
    name: 'Individual Therapy',
    heroImage: '/assets/facility-gallery/therapy-room-counselor.jpg',
    shortName: 'Individual',
    description:
      'Individual therapy at Silver State provides dedicated one-on-one sessions between a teen and their assigned primary therapist. These sessions are tailored to the adolescent\u2019s specific needs, diagnosis, and treatment goals, and may incorporate multiple therapeutic approaches including CBT, DBT, EMDR, and trauma-focused interventions. Each teen meets with their individual therapist multiple times per week, building a strong therapeutic relationship that serves as the foundation of their treatment.\n\nA typical individual therapy session begins with a check-in about the teen\u2019s current emotional state and any significant events since the last session. The therapist and teen then work collaboratively on treatment goals \u2014 this might involve processing a difficult memory, practicing a new coping skill, preparing for a family session, or working through a challenge that arose in the milieu. Sessions are structured yet flexible, adapting to the teen\u2019s needs on any given day.\n\nOur therapists are trained to work specifically with adolescents, understanding the unique developmental, social, and identity challenges of the teenage years. They create a warm, nonjudgmental space where teens feel safe to be fully honest. Parents receive regular updates on their teen\u2019s therapeutic progress and are invited to participate in sessions when clinically appropriate.',
    howItHelps:
      'Individual therapy gives teens a private, confidential space to explore their thoughts, feelings, and experiences with a trusted adult. The one-on-one format allows for deep, personalized work that addresses each teen\u2019s unique challenges without the social pressures of a group setting. Adolescents develop insight into their behavioral patterns, process painful experiences, and build a personalized toolkit of coping strategies.\n\nThe skills and self-awareness gained in individual therapy enhance every other aspect of treatment. Teens who engage meaningfully in individual therapy show stronger progress in group sessions, family therapy, and the therapeutic milieu. These benefits extend after discharge, as teens carry forward both the skills they learned and the experience of a trusting, healthy relationship with an adult.',
    usedFor: [
      'anxiety-treatment',
      'depression-treatment',
      'trauma-ptsd-treatment',
      'ocd-treatment',
      'bipolar-disorder-treatment',
    ],
    evidenceBasis:
      'Individual psychotherapy for adolescents is supported by decades of research across multiple modalities. A comprehensive meta-analysis in Psychological Bulletin found individual therapy produces moderate to large effects for youth anxiety, depression, and behavioral problems, with benefits maintained at 6- and 12-month follow-ups. Individual therapy is recommended as a core component of residential treatment by the Joint Commission.',
    metaTitle: 'Individual Therapy for Teens | Silver State',
    metaDescription:
      'Individual therapy for teens at Silver State provides personalized one-on-one sessions. Multiple weekly meetings with a dedicated therapist address unique needs.',
    seoKeywords: [
      'individual therapy for teens',
      'one-on-one teen therapy',
      'adolescent individual counseling',
      'teen individual therapy',
    ],
  },
  {
    slug: 'art-music-therapy',
    name: 'Art & Music Therapy',
    heroImage: '/assets/facility-gallery/game-room-pool-closeup.jpg',
    shortName: 'Art & Music',
    description:
      'Art therapy for teens and music therapy use creative expression as powerful therapeutic tools. At Silver State, licensed art and music therapists \u2014 credentialed through the American Art Therapy Association and the Certification Board for Music Therapists \u2014 guide adolescents through creative activities that help process emotions, reduce stress, and develop self-awareness without relying solely on verbal communication. These are not recreational art classes; they are clinically directed sessions with specific therapeutic goals.\n\nIn art therapy sessions, teens may paint, draw, sculpt, collage, or work with mixed media to explore and express their inner experiences. The therapist observes the creative process, asks reflective questions, and helps the teen connect their artwork to their emotional life. Music therapy sessions may involve songwriting, drumming, guided listening, or instrumental improvisation. Both modalities engage different parts of the brain than traditional talk therapy, often accessing emotions and memories that words alone cannot reach.\n\nOur therapists adapt creative therapy activities for different ages, abilities, and comfort levels \u2014 no artistic talent is required. Parents often notice that their teen becomes more emotionally expressive and communicative after engaging in art and music therapy. Creative work produced in sessions can serve as a meaningful record of the teen\u2019s healing journey.',
    howItHelps:
      'Many adolescents struggle to express their feelings in words, especially when dealing with trauma, shame, or overwhelming emotions. Art therapy for teens provides alternative channels for emotional expression, helping them access and process feelings they may not be able to articulate verbally. The creative process itself can be calming and grounding, reducing anxiety and providing a healthy outlet for difficult emotions.\n\nSkills developed through creative therapies \u2014 including emotional expression, frustration tolerance, creative problem-solving, and self-reflection \u2014 carry over into all areas of a teen\u2019s life. Adolescents learn that they have the internal resources to express and manage their feelings, building confidence and self-efficacy that supports long-term recovery.',
    usedFor: ['trauma-ptsd-treatment', 'depression-treatment', 'anxiety-treatment'],
    evidenceBasis:
      'Art and music therapy are recognized as effective complementary treatments by the American Psychological Association. A 2015 meta-analysis in the Arts in Psychotherapy found significant reductions in depression and anxiety symptoms among adolescents receiving art therapy. Music therapy research published in the Journal of Music Therapy demonstrates improvements in emotional regulation, social functioning, and self-esteem in teen populations.',
    metaTitle: 'Art & Music Therapy for Teens | Silver State',
    metaDescription:
      'Art therapy for teens and music therapy at Silver State use creative expression to process emotions and heal. Licensed therapists guide clinical sessions.',
    seoKeywords: [
      'art therapy for teens',
      'music therapy for adolescents',
      'teen art therapy',
      'creative arts therapy for teens',
      'adolescent art and music therapy',
    ],
  },
  {
    slug: 'adventure-therapy',
    name: 'Adventure Therapy',
    heroImage: '/assets/facility-gallery/courtyard-basketball-hoop.jpg',
    shortName: 'Adventure',
    description:
      'Adventure therapy at Silver State uses outdoor activities and experiential challenges \u2014 such as hiking, rock climbing, team-building exercises, and nature-based activities \u2014 as therapeutic tools for adolescent growth and healing. These activities are facilitated by trained therapists who help teens draw connections between outdoor experiences and personal growth. Adventure therapy is not simply recreation; each activity is intentionally designed to create therapeutic opportunities around trust, communication, problem-solving, and emotional resilience.\n\nA typical adventure therapy session involves a briefing, the experiential activity, and a structured debrief. During the debrief, the therapist guides teens in reflecting on what happened, what emotions arose, and how the experience relates to challenges they face in their daily lives. For example, a trust fall exercise becomes a conversation about vulnerability and reliance on others, while a group navigation challenge highlights communication patterns and leadership styles.\n\nOur adventure therapy program takes advantage of Nevada\u2019s natural landscape and is adapted for varying fitness levels and comfort zones. Teens are encouraged to stretch beyond their comfort zone but are never forced into activities. Parents can expect their teen to develop greater self-confidence, improved peer relationships, and a newfound appreciation for healthy, substance-free activities.',
    howItHelps:
      'Adventure therapy builds confidence, resilience, and teamwork skills in a natural setting that feels very different from a traditional therapy office. Teens learn to take healthy risks, trust others, and overcome challenges \u2014 experiences that translate directly to managing real-life difficulties. The physical component of adventure therapy also provides natural mood elevation through exercise and time in nature.\n\nAdolescents who participate in adventure therapy often show improvements in self-esteem, leadership skills, emotional regulation, and peer cooperation. These gains complement the work done in individual and group therapy, providing embodied experiences that reinforce cognitive insights. Many teens identify adventure therapy as a highlight of their treatment experience.',
    usedFor: ['depression-treatment', 'anxiety-treatment', 'substance-abuse-treatment'],
    evidenceBasis:
      'Adventure therapy is supported by a growing evidence base for adolescent populations. A 2016 meta-analysis in the Journal of Experiential Education found significant positive effects on self-concept, behavioral outcomes, and interpersonal skills in youth. The Outdoor Behavioral Healthcare Council reports that adventure-based therapeutic programs produce clinically significant improvements in 80% of participating adolescents.',
    metaTitle: 'Adventure Therapy for Teens | Silver State',
    metaDescription:
      'Adventure therapy for teens at Silver State uses outdoor challenges and experiential activities to build confidence, resilience, and teamwork skills.',
    seoKeywords: [
      'adventure therapy for teens',
      'outdoor therapy for adolescents',
      'teen adventure therapy',
      'experiential therapy for teens',
    ],
  },
  {
    slug: 'meditation-mindfulness',
    name: 'Meditation & Mindfulness',
    heroImage: '/assets/facility-gallery/game-room-yoga-mats.jpg',
    shortName: 'Mindfulness',
    description:
      'Meditation and mindfulness practices at Silver State teach teens to develop present-moment awareness, observe their thoughts without judgment, and cultivate inner calm. Sessions include guided meditation, breathing exercises, yoga, and body-scan techniques, all adapted for adolescents who may be new to contemplative practices. Our mindfulness programming is facilitated by trained staff and integrated into the daily treatment schedule, giving teens consistent practice opportunities.\n\nA typical mindfulness session begins with a brief grounding exercise to help teens arrive in the present moment. The facilitator then guides the group through a specific practice \u2014 this might be a focused-breathing meditation, a progressive muscle relaxation, a walking meditation, or a gentle yoga flow. Sessions conclude with reflection time where teens share their experience and discuss how they might use mindfulness skills in their daily lives.\n\nMindfulness practices are intentionally age-appropriate and accessible. Sessions start short (five to ten minutes) and gradually build in duration as teens develop their practice. No prior experience is needed, and teens are met where they are without pressure to achieve a particular outcome. Parents learn that mindfulness is a skill, not a talent, and that regular practice at home can support their teen\u2019s ongoing emotional regulation after discharge.',
    howItHelps:
      'Mindfulness helps teens slow down their reactive patterns, reduce anxiety, and develop a healthier relationship with their thoughts and emotions. Rather than being swept away by worry, anger, or sadness, adolescents learn to observe these experiences with curiosity and let them pass naturally. Regular practice builds emotional resilience, improves focus and concentration, and enhances self-regulation \u2014 skills that support success in school, relationships, and recovery.\n\nThe benefits of mindfulness are cumulative and portable. Teens can use breathing techniques during a test, practice grounding before a difficult conversation, or do a body scan to help them fall asleep. Research shows that mindfulness-based interventions for adolescents reduce symptoms of anxiety and depression while improving overall well-being and quality of life.',
    usedFor: ['anxiety-treatment', 'depression-treatment', 'trauma-ptsd-treatment'],
    evidenceBasis:
      'Mindfulness-based interventions for adolescents are supported by substantial research. A 2019 meta-analysis in Clinical Psychology Review found significant effects on anxiety, depression, and stress in youth populations. Mindfulness-Based Stress Reduction (MBSR) adapted for teens has been shown to improve emotional regulation and reduce rumination in multiple controlled studies published in the Journal of Child and Family Studies.',
    metaTitle: 'Meditation & Mindfulness for Teens | Silver State',
    metaDescription:
      'Meditation and mindfulness for teens at Silver State teach present-moment awareness and emotional regulation. Daily guided meditation, yoga, and breathwork.',
    seoKeywords: [
      'mindfulness for teens',
      'teen meditation therapy',
      'adolescent mindfulness program',
      'meditation for adolescents',
    ],
  },
  {
    slug: 'cpi',
    name: 'Crisis Prevention & Intervention (CPI)',
    heroImage: '/assets/facility-gallery/nursing-station-wide.jpg',
    shortName: 'CPI',
    description:
      'Crisis Prevention and Intervention (CPI) is a comprehensive framework for safely managing behavioral crises in adolescent treatment settings. At Silver State, all clinical and direct-care staff are CPI-certified through the Crisis Prevention Institute, trained in evidence-based de-escalation techniques, and equipped to support teens during moments of acute distress while maintaining dignity, safety, and therapeutic rapport.\n\nThe CPI approach emphasizes prevention above all. Staff are trained to recognize early warning signs of escalating behavior \u2014 such as changes in tone, posture, pacing, or verbal content \u2014 and to intervene with verbal de-escalation techniques before a situation reaches crisis level. When a crisis does occur, staff use a structured decision-making model that prioritizes the least restrictive intervention appropriate to the situation. Physical intervention is always a last resort and is guided by strict safety protocols.\n\nFor teens in our program, CPI creates a predictable, safe environment. Adolescents know that staff will respond to their distress with compassion rather than punishment, and that their safety is always the top priority. Parents can take comfort knowing that every staff member is trained to the same high standard of crisis response, and that all incidents are documented, reviewed, and used to improve each teen\u2019s individualized safety plan.',
    howItHelps:
      'CPI ensures that every crisis is handled with compassion, clinical skill, and respect for the teen\u2019s dignity. Teens learn that even their most difficult moments can be navigated safely, building trust in the treatment environment and confidence in their own ability to manage distress. Over time, teens internalize the de-escalation strategies they observe and experience, developing their own ability to recognize escalating emotions and employ calming techniques before reaching a crisis point.\n\nThe consistency of CPI-trained responses across all staff creates a stable therapeutic environment where teens feel safe to engage in the challenging work of treatment. Parents report that the CPI framework provides reassurance that their child is in a program where safety and dignity are never compromised, even during the most challenging behavioral moments.',
    usedFor: ['suicidal-ideation-treatment', 'conduct-disorder-treatment', 'dmdd-treatment'],
    evidenceBasis:
      'The Crisis Prevention Institute\u2019s Nonviolent Crisis Intervention program is used in over 17,000 organizations worldwide. Research published in the Journal of the American Psychiatric Nurses Association demonstrates that CPI training significantly reduces the use of physical restraint and seclusion in behavioral health settings. CPI-trained facilities report up to 60% reduction in workplace injuries and improved patient safety outcomes.',
    metaTitle: 'Crisis Prevention & Intervention (CPI) for Teens | Silver State',
    metaDescription:
      'CPI at Silver State ensures safe, compassionate crisis management for teens. All staff are CPI-certified in evidence-based de-escalation and prevention.',
    seoKeywords: [
      'crisis prevention intervention for teens',
      'cpi certified adolescent treatment',
      'teen crisis de-escalation',
      'adolescent crisis intervention',
    ],
  },
  {
    slug: 'medication-management',
    name: 'Medication Management',
    heroImage: '/assets/facility-gallery/medical-office-wide.jpg',
    shortName: 'Medication Mgmt',
    description:
      'Medication management at Silver State is overseen by our board-certified child and adolescent psychiatrist, who evaluates each teen\u2019s need for psychiatric medication and provides ongoing monitoring and adjustment throughout their treatment stay. Medication is always used as part of a comprehensive treatment plan alongside therapy, never as a standalone intervention. Our philosophy is that medication should support a teen\u2019s ability to engage in therapy and skill-building, not replace it.\n\nThe medication evaluation process begins with a thorough psychiatric assessment, including a review of the teen\u2019s medical history, current symptoms, prior medication trials, and family psychiatric history. Our psychiatrist explains all medication options, potential benefits, and possible side effects to both the teen and their parents, ensuring informed consent and shared decision-making. If medication is prescribed, the psychiatrist monitors the teen closely \u2014 including regular check-ins, lab work when indicated, and coordination with the treatment team.\n\nParents are active partners in medication management. They receive regular updates on their teen\u2019s medication response, participate in medication review discussions, and are prepared for continuity of care after discharge. Our psychiatrist coordinates with the teen\u2019s outpatient prescriber to ensure a smooth transition and ongoing stability.',
    howItHelps:
      'For some teens, psychiatric medication provides critical stabilization that allows them to engage more fully in therapy and other treatment activities. When anxiety, depression, mood instability, or intrusive thoughts are severe, medication can reduce symptom intensity enough for teens to participate meaningfully in CBT, DBT, group therapy, and other modalities. Our psychiatrist works closely with each teen\u2019s care team to ensure medications are appropriate, effective, and carefully monitored.\n\nTeens and families learn about the role of medication within a broader treatment plan and develop realistic expectations about what medication can and cannot do. By discharge, families have a clear medication plan, understand potential side effects to watch for, and have a follow-up schedule established with an outpatient provider.',
    usedFor: [
      'depression-treatment',
      'anxiety-treatment',
      'bipolar-disorder-treatment',
      'ocd-treatment',
      'dmdd-treatment',
    ],
    evidenceBasis:
      'Psychiatric medication combined with psychotherapy is supported as the most effective treatment approach for moderate to severe adolescent mental health conditions. The NIMH-funded Treatment for Adolescents with Depression Study (TADS) found that combined medication and CBT produced the best outcomes for teen depression, with a 71% response rate. The AACAP Practice Parameters recommend careful, monitored medication management as part of comprehensive adolescent treatment.',
    metaTitle: 'Medication Management for Teens | Silver State',
    metaDescription:
      'Medication management for teens at Silver State is led by a board-certified child psychiatrist. Careful evaluation, ongoing monitoring, and coordinated care.',
    seoKeywords: [
      'medication management for teens',
      'adolescent psychiatric medication',
      'teen medication management',
      'psychiatric medication for adolescents',
    ],
  },
  {
    slug: 'lgbtqia-affirming-care',
    name: 'LGBTQIA+ Affirming Care',
    heroImage: '/assets/facility-gallery/courtyard-patio-tables.jpg',
    shortName: 'LGBTQIA+',
    description:
      'Our LGBTQIA+ affirming care approach ensures that teens of all gender identities and sexual orientations receive treatment that respects, validates, and supports who they are. At Silver State, we provide specialized mental health support for trans teens, gender-diverse youth, and adolescents across the LGBTQIA+ spectrum. All clinical staff are trained in affirming practices grounded in the standards set by the American Psychological Association and the World Professional Association for Transgender Health (WPATH).\n\nAffirming care is not a separate therapy modality but a foundational orientation woven into every aspect of treatment. This means using correct names and pronouns, creating gender-inclusive spaces, addressing minority stress and discrimination as clinical issues, and ensuring that therapeutic interventions never pathologize a teen\u2019s identity. Our staff understand the unique mental health challenges faced by LGBTQIA+ youth \u2014 including higher rates of depression, anxiety, suicidality, and family rejection \u2014 and are equipped to address these experiences with sensitivity and expertise.\n\nParents and families receive education about supporting their LGBTQIA+ teen, regardless of where they are in their own understanding and acceptance journey. Family therapy sessions can address identity-related family conflict in a safe, facilitated environment. Whether your child identifies as gay, lesbian, bisexual, transgender, nonbinary, or questioning, our goal is to create a treatment experience where they feel fully seen, safe, and supported.',
    howItHelps:
      'LGBTQIA+ teens face unique stressors including minority stress, discrimination, bullying, and family rejection, all of which significantly impact mental health. Affirming care addresses these experiences directly, reducing shame and isolation while supporting healthy identity development and self-acceptance. When teens feel that their identity is respected and celebrated rather than ignored or pathologized, they engage more deeply in treatment and experience better outcomes.\n\nAdolescents in affirming care develop resilience strategies specific to their experiences, build connections with supportive peers, and strengthen their sense of self-worth. Families who participate in the affirming care process often report improved communication, greater understanding, and stronger parent-child relationships. Research consistently shows that family acceptance is one of the strongest protective factors for LGBTQIA+ youth mental health.',
    usedFor: ['depression-treatment', 'anxiety-treatment', 'suicidal-ideation-treatment'],
    evidenceBasis:
      'The Trevor Project\u2019s 2023 National Survey found that LGBTQIA+ youth who received affirming care reported significantly lower rates of attempted suicide. Research published in the Journal of Adolescent Health demonstrates that family acceptance reduces depression, substance use, and suicidal ideation in LGBTQIA+ youth by up to 40%. Affirming care is endorsed by the APA, AAP, and AACAP as the standard of care for LGBTQIA+ adolescents.',
    metaTitle: 'LGBTQIA+ Affirming Care for Teens | Silver State',
    metaDescription:
      'LGBTQIA+ affirming care at Silver State provides inclusive, identity-supportive mental health treatment for teens. Trained staff and safe spaces for all youth.',
    seoKeywords: [
      'lgbtqia affirming care for teens',
      'affirming therapy for lgbtq adolescents',
      'mental health for trans teens',
      'lgbtq teen mental health treatment',
    ],
  },
  {
    slug: 'holistic-treatment',
    name: 'Holistic Treatment',
    heroImage: '/assets/facility-gallery/courtyard-basketball-trees.jpg',
    shortName: 'Holistic',
    description:
      'Our holistic treatment approach addresses the whole person \u2014 mind, body, and spirit. At Silver State, we recognize that mental health challenges do not exist in isolation; they affect and are affected by physical health, nutrition, sleep, activity level, and sense of purpose. Beyond clinical therapy, teens participate in nutrition education, fitness programming, yoga, meditation, creative arts, and life-skills training. These complementary practices support overall well-being and reinforce clinical treatment goals.\n\nA typical day at Silver State integrates holistic activities alongside traditional therapy sessions. Teens might begin with a morning mindfulness practice, attend individual therapy, participate in a nutrition workshop where they learn about the connection between diet and mood, engage in physical fitness activities, and end the day with a journaling or relaxation exercise. Each holistic activity is intentionally connected to therapeutic goals and facilitated by trained staff.\n\nOur holistic approach is grounded in the understanding that sustainable recovery requires teens to develop a full range of wellness practices. Parents can expect their teen to explore new interests, develop healthy daily routines, and build self-care habits that support long-term mental health. The holistic framework also helps teens discover substance-free sources of joy, relaxation, and accomplishment \u2014 critical protective factors against relapse.',
    howItHelps:
      'Teens with mental health challenges often experience physical symptoms like disrupted sleep, poor nutrition, low energy, and chronic pain. Holistic treatment addresses these interconnected needs, helping teens feel better physically while supporting their emotional and psychological healing. When teens eat well, move their bodies, sleep adequately, and engage in meaningful activities, they have more capacity to do the challenging emotional work of therapy.\n\nThe wellness habits developed through holistic treatment become part of a teen\u2019s long-term recovery toolkit. Adolescents leave treatment knowing how to prepare healthy meals, establish a sleep routine, use physical activity as a coping strategy, and engage in mindfulness practices independently. These practical life skills reduce vulnerability to relapse and support overall quality of life well beyond discharge.',
    usedFor: ['depression-treatment', 'anxiety-treatment', 'substance-abuse-treatment'],
    evidenceBasis:
      'Holistic and integrative approaches to adolescent mental health are increasingly supported by research. A 2020 review in the Journal of the American Academy of Child & Adolescent Psychiatry found that exercise, nutrition interventions, and mind-body practices produce meaningful improvements in adolescent depression and anxiety. The SAMHSA endorses holistic treatment models that address physical, emotional, social, and spiritual needs as part of comprehensive recovery programming.',
    metaTitle: 'Holistic Treatment for Teens | Silver State',
    metaDescription:
      'Holistic treatment for teens at Silver State addresses mind, body, and spirit. Nutrition, fitness, yoga, mindfulness, and creative arts support clinical therapy.',
    seoKeywords: [
      'holistic treatment for teens',
      'holistic adolescent mental health',
      'teen holistic therapy',
      'whole-person treatment for adolescents',
    ],
  },
  {
    slug: 'trauma-informed-care',
    name: 'Trauma-Informed Care',
    heroImage: '/assets/facility-gallery/hallway-rooms-numbered.jpg',
    shortName: 'TIC',
    description:
      'Trauma-informed care (TIC) is a foundational approach woven throughout every aspect of our program at Silver State. All staff \u2014 from clinicians and psychiatrists to teachers and direct-care workers \u2014 understand the prevalence and impact of trauma, recognize its signs and symptoms, and respond with practices that promote safety, trustworthiness, collaboration, and empowerment. This is not a specific therapy technique but a philosophy that shapes every interaction, policy, and decision in our treatment environment.\n\nIn practice, trauma-informed care means that our facility is designed to minimize potential triggers: predictable schedules, clearly communicated expectations, choices wherever possible, and consistent, respectful treatment from every staff member. When challenging behaviors arise, staff understand them through a trauma lens \u2014 asking "What happened to you?" rather than "What\u2019s wrong with you?" This shift in perspective allows for responses that de-escalate rather than re-traumatize, and that build trust rather than reinforce fear.\n\nParents are educated about trauma-informed principles so they can carry this approach into the home environment. Understanding how trauma affects the brain and behavior helps parents respond to their teen with greater patience, empathy, and effectiveness. Our trauma-informed framework recognizes that healing happens in relationships, and every relationship within our program \u2014 between staff and teens, between peers, and between families \u2014 is an opportunity for healing.',
    howItHelps:
      'Many teens in treatment have experienced trauma, even if it is not their primary diagnosis. Research suggests that up to 70% of adolescents in residential treatment have significant trauma histories. A trauma-informed environment ensures that every interaction, policy, and practice avoids re-traumatization and actively supports healing. Teens who feel safe and respected are more willing to engage in therapy, take emotional risks, and trust the treatment process.\n\nThe benefits of trauma-informed care extend to every aspect of a teen\u2019s treatment experience. Adolescents in trauma-informed programs show higher treatment engagement, lower rates of behavioral incidents, and better therapeutic outcomes. The principles of safety, choice, collaboration, and empowerment that teens experience at Silver State become internalized values that guide their relationships and decision-making long after discharge.',
    usedFor: [
      'trauma-ptsd-treatment',
      'anxiety-treatment',
      'depression-treatment',
      'substance-abuse-treatment',
      'dual-diagnosis-treatment',
    ],
    evidenceBasis:
      'Trauma-informed care is endorsed by SAMHSA, the National Child Traumatic Stress Network, and the American Academy of Pediatrics as essential for adolescent-serving organizations. Research published in Psychiatric Services found that trauma-informed residential programs reduce restraint use by 50\u201390% and improve youth outcomes. A 2019 systematic review in Child Abuse & Neglect confirmed that TIC implementation improves both staff and youth well-being in treatment settings.',
    metaTitle: 'Trauma-Informed Care for Teens | Silver State',
    metaDescription:
      'Trauma-informed care at Silver State ensures every interaction promotes safety and healing. All staff trained to recognize trauma and respond with compassion.',
    seoKeywords: [
      'trauma-informed care for teens',
      'adolescent trauma-informed treatment',
      'teen trauma-informed program',
      'trauma-informed adolescent care',
    ],
  },
]

// Convenience lookup by slug
export const therapyBySlug: Record<string, TherapyModality> = Object.fromEntries(
  therapyModalities.map((t) => [t.slug, t]),
)
