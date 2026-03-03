import { useState } from 'react'
import { Link } from 'react-router'
import { site } from '../../data/common'
import { generateMeta } from '../../utils/meta'
import { generateFAQPage, generateWebPage } from '../../utils/schema'
import AnimateIn from '../../components/AnimateIn'
import { CharReveal } from '../../components/TextReveal'
import FaqItem from '../../components/FaqItem'
import MagneticButton from '../../components/MagneticButton'
import { IconPhone } from '../../components/Icons'

const DISPLAY = 'var(--font-display)'
const WARM = 'var(--warm)'

const SITE_URL = (import.meta.env?.VITE_SITE_URL || 'https://www.silverstatetreatment.com').replace(
  /\/+$/,
  '',
)

const faqs = [
  {
    q: 'Is school burnout the same as depression?',
    a: 'Not exactly, but they overlap significantly. Burnout is a state of chronic exhaustion caused by prolonged stress, while depression is a clinical mood disorder. However, untreated burnout can develop into depression, and existing depression can make a student more vulnerable to burnout. If your teen is showing persistent low mood, withdrawal, or hopelessness, a clinical evaluation can clarify the diagnosis.',
  },
  {
    q: 'Can burnout happen in middle school?',
    a: 'Yes. Academic burnout is increasingly common among middle school students, driven by rising academic expectations, competitive extracurricular schedules, and social media pressure. Early intervention at this stage can prevent more severe mental health consequences in high school and beyond.',
  },
  {
    q: 'What should I do if my teen refuses to go to school?',
    a: `School refusal is a common symptom of burnout, anxiety, or depression. Avoid treating it as simple defiance. Start by talking with your teen without judgment, contact the school counselor, and consider a clinical assessment. If school refusal persists, call ${site.phone} to discuss treatment options.`,
  },
  {
    q: 'How can schools help prevent student burnout?',
    a: 'Schools play a critical role through reasonable homework policies, mental health education, access to counselors, flexible scheduling for students in treatment, and a culture that values well-being alongside achievement. Parents can advocate for these supports through school administration.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Signs of Burnout in Middle & High School Students',
  description:
    'Recognize the symptoms of academic burnout in adolescents and learn what parents can do to support their teen.',
  url: `${SITE_URL}/resources/school-burnout-signs`,
  datePublished: '2026-03-02',
  dateModified: '2026-03-02',
  author: {
    '@type': 'Organization',
    name: 'Silver State Adolescent Treatment Center',
    url: SITE_URL,
  },
  publisher: {
    '@type': 'Organization',
    name: 'Silver State Adolescent Treatment Center',
    url: SITE_URL,
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/assets/logo.png` },
  },
}

export const meta = generateMeta({
  title: 'Signs of Burnout in Middle & High School Students | Silver State',
  description:
    'Recognize the symptoms of academic burnout in teens and learn what parents can do. Covers causes, warning signs, and support strategies.',
  path: '/resources/school-burnout-signs',
  keywords: ['school burnout signs teens', 'teen academic burnout', 'school stress adolescent', 'teen school refusal burnout', 'academic burnout treatment teens'],
  jsonLd: [
    articleSchema,
    generateFAQPage({
      questions: faqs.map((f) => ({ question: f.q, answer: f.a })),
    }),
    generateWebPage({
      title: 'Signs of Burnout in Middle & High School Students',
      description:
        'Guide to recognizing and addressing academic burnout in adolescents.',
      url: `${SITE_URL}/resources/school-burnout-signs`,
    }),
  ],
})

const BODY: React.CSSProperties = {
  color: 'var(--body)',
  fontSize: '1rem',
  lineHeight: 1.8,
  marginBottom: 20,
}

const H2: React.CSSProperties = {
  fontFamily: DISPLAY,
  fontSize: 'clamp(1.5rem, 2.5vw, 1.85rem)',
  fontWeight: 700,
  lineHeight: 1.15,
  letterSpacing: '-0.02em',
  marginTop: 48,
  marginBottom: 16,
}

const H3: React.CSSProperties = {
  fontFamily: DISPLAY,
  fontSize: '1.15rem',
  fontWeight: 700,
  lineHeight: 1.25,
  marginTop: 32,
  marginBottom: 12,
}

export default function SchoolBurnoutArticle() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: '64px 0 48px', background: WARM }}>
        <div className="wrap" style={{ maxWidth: 780 }}>
          <AnimateIn variant="fadeUp">
            <Link
              to="/resources"
              style={{
                color: 'var(--sage)',
                fontWeight: 600,
                fontSize: '.9rem',
                textDecoration: 'none',
              }}
            >
              &larr; Resources
            </Link>
          </AnimateIn>

          <AnimateIn variant="fadeUp" delay={0.05}>
            <span className="section-label" style={{ marginTop: 16, display: 'block' }}>
              School Burnout
            </span>
          </AnimateIn>

          <CharReveal
            as="h1"
            style={{
              fontFamily: DISPLAY,
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginTop: 8,
            }}
          >
            Signs of Burnout in Middle &amp; High School Students
          </CharReveal>

          <AnimateIn variant="blurUp" delay={0.2}>
            <p style={{ marginTop: 16, color: 'var(--body)', fontSize: '.95rem', lineHeight: 1.6 }}>
              Clinically reviewed by the Silver State treatment team &middot; Updated March 2026
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── ARTICLE BODY ── */}
      <section style={{ padding: '48px 0' }}>
        <div className="wrap" style={{ maxWidth: 780 }}>
          <AnimateIn variant="blurUp">
            <p style={BODY}>
              Academic burnout in adolescents is not laziness, and it is not a phase. It is a state of chronic physical and emotional exhaustion caused by prolonged, unmanageable stress &mdash; and it is becoming increasingly common among middle and high school students. When a motivated student starts withdrawing from activities they used to enjoy, their grades begin slipping, and they seem perpetually exhausted, burnout may be the underlying cause.
            </p>
          </AnimateIn>

          <h2 style={H2}>What Is Academic Burnout?</h2>
          <p style={BODY}>
            Burnout was originally described in the context of workplace stress, but researchers have increasingly recognized it in students. Academic burnout is characterized by three core dimensions: overwhelming exhaustion from school demands, cynicism or detachment from academic activities, and a reduced sense of accomplishment or competence. Unlike ordinary tiredness, burnout does not resolve with a weekend off or a school break. It is a cumulative condition that requires meaningful changes in a student&rsquo;s environment, coping strategies, or both.
          </p>

          <h2 style={H2}>Warning Signs of Burnout in Teens</h2>
          <p style={BODY}>
            Burnout often develops gradually, making it easy for parents and teachers to miss early signals. The following signs warrant attention:
          </p>

          <h3 style={H3}>Emotional Signs</h3>
          <ul style={{ ...BODY, paddingLeft: 24 }}>
            <li style={{ marginBottom: 8 }}>Persistent irritability or mood swings disproportionate to the situation</li>
            <li style={{ marginBottom: 8 }}>Feelings of dread about school, especially Sunday evenings</li>
            <li style={{ marginBottom: 8 }}>Expressions of hopelessness (&ldquo;Nothing I do matters&rdquo; or &ldquo;What&rsquo;s the point?&rdquo;)</li>
            <li style={{ marginBottom: 8 }}>Emotional numbness or detachment</li>
          </ul>

          <h3 style={H3}>Physical Signs</h3>
          <ul style={{ ...BODY, paddingLeft: 24 }}>
            <li style={{ marginBottom: 8 }}>Chronic fatigue that does not improve with sleep</li>
            <li style={{ marginBottom: 8 }}>Frequent headaches, stomachaches, or other somatic complaints</li>
            <li style={{ marginBottom: 8 }}>Changes in appetite or sleep patterns</li>
            <li style={{ marginBottom: 8 }}>Weakened immune system (getting sick more often)</li>
          </ul>

          <h3 style={H3}>Behavioral Signs</h3>
          <ul style={{ ...BODY, paddingLeft: 24 }}>
            <li style={{ marginBottom: 8 }}>Declining grades in a previously strong student</li>
            <li style={{ marginBottom: 8 }}>Withdrawal from extracurricular activities, friends, or family</li>
            <li style={{ marginBottom: 8 }}>Procrastination that feels paralyzing rather than careless</li>
            <li style={{ marginBottom: 8 }}>School avoidance or refusal</li>
            <li style={{ marginBottom: 8 }}>Increased reliance on substances (caffeine, cannabis, alcohol) to cope</li>
          </ul>

          <h2 style={H2}>What Causes Burnout in Students?</h2>
          <p style={BODY}>
            Today&rsquo;s adolescents face a unique combination of academic, social, and digital pressures that previous generations did not experience at the same intensity:
          </p>
          <ul style={{ ...BODY, paddingLeft: 24 }}>
            <li style={{ marginBottom: 8 }}><strong>Academic overload:</strong> AP classes, standardized testing, college prep starting in middle school, and the expectation to maintain high GPAs across all subjects.</li>
            <li style={{ marginBottom: 8 }}><strong>Extracurricular pressure:</strong> The belief that college applications require a packed resume drives many teens to over-commit to sports, clubs, volunteer work, and part-time jobs simultaneously.</li>
            <li style={{ marginBottom: 8 }}><strong>Social media comparison:</strong> Constant exposure to curated versions of peers&rsquo; achievements amplifies feelings of inadequacy and the pressure to perform.</li>
            <li style={{ marginBottom: 8 }}><strong>Sleep deprivation:</strong> Early school start times combined with homework, screen time, and extracurricular commitments leave many teens chronically sleep-deprived.</li>
            <li style={{ marginBottom: 8 }}><strong>Lack of downtime:</strong> Unstructured free time &mdash; essential for cognitive recovery and emotional processing &mdash; has been steadily shrinking in adolescents&rsquo; schedules.</li>
          </ul>

          <h2 style={H2}>How Parents Can Help</h2>
          <p style={BODY}>
            If you suspect your teen is experiencing burnout, here are evidence-informed strategies:
          </p>

          <h3 style={H3}>Open a Nonjudgmental Conversation</h3>
          <p style={BODY}>
            Avoid leading with grades or performance. Instead, ask open-ended questions: &ldquo;How are you feeling about school lately?&rdquo; or &ldquo;You seem really tired &mdash; what&rsquo;s going on?&rdquo; Validate their experience rather than minimizing it.
          </p>

          <h3 style={H3}>Audit the Schedule</h3>
          <p style={BODY}>
            Sit down with your teen and honestly assess their weekly commitments. Identify what can be reduced or eliminated. Giving permission to drop an activity is not giving up &mdash; it is teaching prioritization and self-care.
          </p>

          <h3 style={H3}>Protect Sleep</h3>
          <p style={BODY}>
            Adolescents need 8 to 10 hours of sleep per night. Establish screen-free wind-down routines, negotiate reasonable homework cutoff times, and advocate for later school start times if applicable.
          </p>

          <h3 style={H3}>Model and Encourage Rest</h3>
          <p style={BODY}>
            Teens absorb the values their parents model. If a household culture equates busyness with worth, teens learn that rest is weakness. Demonstrate that downtime is productive and necessary.
          </p>

          <h3 style={H3}>Seek Professional Support</h3>
          <p style={BODY}>
            When burnout is persistent, has led to{' '}
            <Link to="/conditions/school-refusal-treatment" style={{ color: 'var(--sage)', fontWeight: 600 }}>school refusal</Link>,
            {' '}or is accompanied by signs of{' '}
            <Link to="/conditions/anxiety-treatment" style={{ color: 'var(--sage)', fontWeight: 600 }}>anxiety</Link> or{' '}
            <Link to="/conditions/depression-treatment" style={{ color: 'var(--sage)', fontWeight: 600 }}>depression</Link>,
            {' '}a clinical evaluation is the responsible next step. A therapist can determine whether burnout has progressed into a diagnosable condition and recommend the right level of support.
          </p>

          <h2 style={H2}>When Burnout Becomes Something More</h2>
          <p style={BODY}>
            Burnout left unaddressed can escalate into clinical anxiety, major depression, substance use, or suicidal ideation. If your teen is expressing hopelessness, engaging in self-harm, refusing school entirely, or using substances to cope, these are signs that professional treatment is needed.
          </p>
          <p style={BODY}>
            At Silver State, our treatment programs are designed around the academic and emotional realities of adolescence. Our on-site{' '}
            <Link to="/about/youth-academy" style={{ color: 'var(--sage)', fontWeight: 600 }}>Youth Academy</Link>{' '}
            keeps students on track academically during treatment, while our clinical team addresses the underlying mental health conditions driving burnout. We offer{' '}
            <Link to="/programs/residential-treatment" style={{ color: 'var(--sage)', fontWeight: 600 }}>residential</Link>,{' '}
            <Link to="/programs/php" style={{ color: 'var(--sage)', fontWeight: 600 }}>PHP</Link>, and{' '}
            <Link to="/programs/iop" style={{ color: 'var(--sage)', fontWeight: 600 }}>IOP</Link>{' '}
            levels of care for teens ages 11&ndash;17.
          </p>
        </div>
      </section>

      {/* ── RELATED PROGRAMS ── */}
      <section style={{ padding: '48px 0', background: WARM }}>
        <div className="wrap" style={{ maxWidth: 780 }}>
          <AnimateIn variant="fadeUp">
            <h2 style={{ ...H2, marginTop: 0, textAlign: 'center' }}>Related Programs</h2>
          </AnimateIn>
          <AnimateIn variant="blurUp" delay={0.1}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
              {[
                { label: 'School Refusal', href: '/conditions/school-refusal-treatment' },
                { label: 'Anxiety Treatment', href: '/conditions/anxiety-treatment' },
                { label: 'Depression Treatment', href: '/conditions/depression-treatment' },
                { label: 'Youth Academy', href: '/about/youth-academy' },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="btn"
                  style={{
                    background: 'var(--sage)',
                    color: 'var(--white)',
                    padding: '10px 20px',
                    fontSize: '.9rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '64px 0' }}>
        <div className="wrap" style={{ maxWidth: 780 }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <AnimateIn variant="fadeUp">
              <span className="section-label">FAQ</span>
            </AnimateIn>
            <AnimateIn variant="fadeUp" delay={0.05}>
              <h2 className="section-heading" style={{ marginTop: 8 }}>
                Questions About School Burnout
              </h2>
            </AnimateIn>
          </div>
          <AnimateIn variant="slideUp" delay={0.1}>
            <div
              style={{
                background: 'rgba(255,255,255,0.85)',
                borderRadius: 'var(--radius-lg)',
                padding: '8px 20px',
                border: '1px solid rgba(255,255,255,0.3)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
              }}
            >
              {faqs.map((faq, i) => (
                <FaqItem
                  key={i}
                  q={faq.q}
                  a={faq.a}
                  isOpen={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                />
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── PHONE CTA ── */}
      <section style={{ padding: '48px 0', background: 'var(--blue)', color: 'var(--white)' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <AnimateIn variant="fadeUp">
            <h2
              style={{
                fontFamily: DISPLAY,
                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                fontWeight: 700,
                color: 'var(--white)',
                marginBottom: 12,
              }}
            >
              Concerned About Your Teen?
            </h2>
          </AnimateIn>
          <AnimateIn variant="blurUp" delay={0.1}>
            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.6,
                marginBottom: 24,
                color: 'rgba(255,255,255,0.9)',
              }}
            >
              Our admissions team is available 24/7. Call {site.phone} for a free, confidential
              assessment to discuss your teen&rsquo;s needs.
            </p>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.2}>
            <MagneticButton>
              <a
                href={site.phoneTel}
                aria-label={`Call Silver State at ${site.phone}`}
                className="btn"
                style={{
                  background: 'var(--white)',
                  color: 'var(--blue)',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  padding: '16px 32px',
                  minHeight: 48,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  textDecoration: 'none',
                }}
              >
                <IconPhone style={{ width: 20, height: 20 }} />
                Call {site.phone}
              </a>
            </MagneticButton>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
