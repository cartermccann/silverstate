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
    q: 'What is the difference between normal teenage rebellion and a defiance disorder?',
    a: 'All teenagers push boundaries as part of healthy development. The line between normal rebellion and a clinical concern is drawn by severity, duration, and impairment. If defiant behavior lasts six months or more, is significantly worse than what is typical for your teen\'s age, and is causing problems at school, at home, or with peers, it may meet criteria for Oppositional Defiant Disorder (ODD) or another behavioral health condition.',
  },
  {
    q: 'Where should I send a defiant teenager for help?',
    a: `The right placement depends on severity. For teens whose defiance is disrupting daily life and safety, a structured treatment program with evidence-based behavioral therapy is most effective. Silver State offers residential treatment specifically for adolescents ages 11-17. Call ${site.phone} for a free clinical assessment to determine the right level of care.`,
  },
  {
    q: 'Can therapy really help a defiant teen?',
    a: 'Yes. Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), and family therapy have strong evidence for reducing defiant behavior in adolescents. These therapies help teens develop emotional regulation skills, improve communication, and address underlying issues like trauma or anxiety that drive oppositional behavior.',
  },
  {
    q: 'How long does treatment for defiant behavior take?',
    a: 'Treatment duration varies based on the severity of behavior and any co-occurring conditions. Residential treatment typically runs 45 to 90 days. The clinical team monitors progress throughout and adjusts the treatment plan as your teen grows, ensuring the most sustained improvement.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Help a Defiant Teenager: Signs, Causes & Treatment Options',
  description:
    'Understand the signs of teenage defiance, what causes it, and evidence-based treatment options that help families move forward.',
  url: `${SITE_URL}/resources/defiant-teenager-treatment`,
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
  title: 'How to Help a Defiant Teenager | Signs, Causes & Treatment | Silver State',
  description:
    'Understand the signs of teenage defiance, what causes oppositional behavior, and evidence-based treatment options for defiant teens.',
  path: '/resources/defiant-teenager-treatment',
  keywords: ['defiant teenager treatment', 'oppositional behavior teens', 'how to help defiant teen', 'teen defiance causes treatment', 'defiant teen therapy'],
  jsonLd: [
    articleSchema,
    generateFAQPage({
      questions: faqs.map((f) => ({ question: f.q, answer: f.a })),
    }),
    generateWebPage({
      title: 'How to Help a Defiant Teenager',
      description:
        'Signs, causes, and treatment options for defiant teenage behavior.',
      url: `${SITE_URL}/resources/defiant-teenager-treatment`,
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

export default function DefiantTeenArticle() {
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
              Defiant Teens
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
            How to Help a Defiant Teenager
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
              Every parent expects some level of pushback during adolescence. But when a teenager&rsquo;s defiance goes beyond eye-rolling and door-slamming &mdash; when it starts disrupting school, fracturing family relationships, and putting safety at risk &mdash; it stops being a phase and starts being a problem that requires support. This guide helps parents understand what drives defiant behavior in teens, recognize when it crosses into clinical territory, and know what treatment options are available.
            </p>
          </AnimateIn>

          <h2 style={H2}>Signs of Defiant Behavior in Teenagers</h2>
          <p style={BODY}>
            Defiant behavior exists on a spectrum. On one end is the normal boundary-testing that healthy adolescent development requires. On the other end is persistent, hostile opposition that interferes with daily functioning. Here are the signs that a teen&rsquo;s defiance may need clinical attention:
          </p>
          <ul style={{ ...BODY, paddingLeft: 24 }}>
            <li style={{ marginBottom: 8 }}>Frequent, intense arguments with parents or authority figures</li>
            <li style={{ marginBottom: 8 }}>Deliberate refusal to follow rules or comply with requests</li>
            <li style={{ marginBottom: 8 }}>Blaming others for their own mistakes or behavior</li>
            <li style={{ marginBottom: 8 }}>Easily annoyed, angry, or resentful</li>
            <li style={{ marginBottom: 8 }}>Vindictive or spiteful behavior</li>
            <li style={{ marginBottom: 8 }}>Academic failure or school refusal</li>
            <li style={{ marginBottom: 8 }}>Social isolation or conflict with peers</li>
            <li style={{ marginBottom: 8 }}>Destruction of property or physical aggression</li>
          </ul>
          <p style={BODY}>
            When these behaviors persist for six months or longer and are significantly worse than what is typical for the teen&rsquo;s developmental stage, a clinician may evaluate for{' '}
            <Link to="/conditions/oppositional-defiant-disorder-treatment" style={{ color: 'var(--sage)', fontWeight: 600 }}>
              Oppositional Defiant Disorder (ODD)
            </Link>{' '}
            or{' '}
            <Link to="/conditions/conduct-disorder-treatment" style={{ color: 'var(--sage)', fontWeight: 600 }}>
              Conduct Disorder
            </Link>.
          </p>

          <h2 style={H2}>What Causes Teenage Defiance?</h2>
          <p style={BODY}>
            Defiant behavior in adolescents rarely has a single cause. It typically results from an interaction between biological, psychological, and environmental factors:
          </p>

          <h3 style={H3}>Brain Development</h3>
          <p style={BODY}>
            The adolescent brain is undergoing massive remodeling. The limbic system (emotional center) matures faster than the prefrontal cortex (decision-making and impulse control). This neurological imbalance means teens feel emotions with adult intensity but lack the adult capacity to regulate them. For some teens, this gap is wider than others.
          </p>

          <h3 style={H3}>Underlying Mental Health Conditions</h3>
          <p style={BODY}>
            Defiance is frequently a surface symptom of deeper issues. Anxiety, depression, ADHD, trauma, and learning disabilities can all manifest as oppositional behavior. A teen who refuses to do homework may actually be overwhelmed by undiagnosed anxiety. A teen who argues with everyone may be struggling with depression they cannot articulate.
          </p>

          <h3 style={H3}>Trauma and Adverse Experiences</h3>
          <p style={BODY}>
            Teens who have experienced abuse, neglect, family instability, bullying, or other{' '}
            <Link to="/conditions/trauma-ptsd-treatment" style={{ color: 'var(--sage)', fontWeight: 600 }}>
              traumatic experiences
            </Link>{' '}
            often develop defiant behavior as a protective mechanism. Opposition becomes a way to maintain control in a world that has felt unsafe.
          </p>

          <h3 style={H3}>Family Dynamics</h3>
          <p style={BODY}>
            Inconsistent discipline, high-conflict households, parental substance use, and lack of emotional attunement can all contribute to defiant patterns. This is not about blame &mdash; it is about identifying the systemic factors that are maintaining the behavior so they can be addressed in treatment.
          </p>

          <h2 style={H2}>Treatment Options for Defiant Teenagers</h2>
          <p style={BODY}>
            The most effective treatment for defiant behavior addresses both the behavior itself and its underlying causes. Evidence-based approaches include:
          </p>

          <h3 style={H3}>Cognitive Behavioral Therapy (CBT)</h3>
          <p style={BODY}>
            <Link to="/programs/cbt" style={{ color: 'var(--sage)', fontWeight: 600 }}>CBT</Link> helps teens identify the thought patterns driving their oppositional behavior and develop healthier responses. For example, a teen who interprets every parental request as an attempt to control them can learn to recognize and challenge that distortion.
          </p>

          <h3 style={H3}>Dialectical Behavior Therapy (DBT)</h3>
          <p style={BODY}>
            <Link to="/programs/dbt" style={{ color: 'var(--sage)', fontWeight: 600 }}>DBT</Link> teaches emotional regulation, distress tolerance, interpersonal effectiveness, and mindfulness &mdash; four skill sets that directly address the deficits underlying most defiant behavior.
          </p>

          <h3 style={H3}>Family Therapy</h3>
          <p style={BODY}>
            Defiance does not happen in a vacuum. <Link to="/programs/family-therapy" style={{ color: 'var(--sage)', fontWeight: 600 }}>Family therapy</Link> helps parents and teens communicate more effectively, establish consistent boundaries, and repair relational damage. At Silver State, family involvement is a core component of treatment.
          </p>

          <h3 style={H3}>Structured Treatment Programs</h3>
          <p style={BODY}>
            When outpatient therapy is not enough, a structured program provides the containment and intensive support that severely defiant teens need. Silver State offers{' '}
            <Link to="/programs/residential-treatment" style={{ color: 'var(--sage)', fontWeight: 600 }}>residential treatment</Link>{' '}
            with a comprehensive range of evidence-based therapy programs, specifically for adolescents ages 11&ndash;17 in Las Vegas, NV.
          </p>

          <h2 style={H2}>When to Seek Professional Help</h2>
          <p style={BODY}>
            If your teen&rsquo;s defiant behavior is causing any of the following, it is time to seek a professional evaluation:
          </p>
          <ul style={{ ...BODY, paddingLeft: 24 }}>
            <li style={{ marginBottom: 8 }}>Academic failure or expulsion from school</li>
            <li style={{ marginBottom: 8 }}>Physical aggression toward family members</li>
            <li style={{ marginBottom: 8 }}>Legal involvement (vandalism, theft, substance-related charges)</li>
            <li style={{ marginBottom: 8 }}>Substance use to cope with emotional distress</li>
            <li style={{ marginBottom: 8 }}>Self-harm or suicidal statements</li>
            <li style={{ marginBottom: 8 }}>Complete breakdown of the parent-teen relationship</li>
          </ul>
          <p style={BODY}>
            A free clinical assessment can determine whether your teen&rsquo;s behavior meets criteria for a behavioral health diagnosis and what level of care is appropriate. At Silver State, our admissions team completes assessments 24/7 &mdash; call {site.phone} to start.
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
                { label: 'Oppositional Defiant Disorder', href: '/conditions/oppositional-defiant-disorder-treatment' },
                { label: 'Conduct Disorder', href: '/conditions/conduct-disorder-treatment' },
                { label: 'Family Therapy', href: '/programs/family-therapy' },
                { label: 'CBT', href: '/programs/cbt' },
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
                Questions About Defiant Teens
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
              Get Help for Your Teen
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
              Our admissions team is here 24/7. Call {site.phone} for a free, confidential
              clinical assessment.
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
