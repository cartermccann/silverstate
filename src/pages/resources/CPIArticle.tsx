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
    q: 'What does CPI stand for in mental health?',
    a: 'CPI stands for Crisis Prevention Intervention. It is a widely adopted training program that teaches staff how to recognize early signs of distress and use supportive, nonviolent strategies to de-escalate behavioral crises before they become unsafe.',
  },
  {
    q: 'Is CPI only used in residential treatment?',
    a: 'No. CPI techniques are used across all levels of care, including partial hospitalization and intensive outpatient programs. Schools, hospitals, and community mental health centers also use CPI-based approaches.',
  },
  {
    q: 'How does the supportive approach in CPI work?',
    a: 'The supportive approach focuses on empathetic listening, validating emotions, and offering choices. Rather than using restrictive or punitive measures, staff trained in CPI meet teens where they are emotionally and help them regain control through connection and de-escalation.',
  },
  {
    q: 'When should a parent seek professional crisis intervention for their teen?',
    a: `If your teen is expressing suicidal thoughts, engaging in self-harm, experiencing psychotic symptoms, or behaving in ways that are dangerous to themselves or others, seek professional help immediately. Call ${site.phone} to speak with our admissions team 24/7.`,
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Crisis Prevention & Intervention (CPI) for Teen Mental Health',
  description:
    'Learn what Crisis Prevention Intervention is, how supportive approaches help teens in crisis, and when professional help is needed.',
  url: `${SITE_URL}/resources/crisis-prevention-intervention`,
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
  title: 'Crisis Prevention & Intervention (CPI) for Teen Mental Health | Silver State',
  description:
    'Learn what CPI is, how the supportive approach helps teens in crisis, and when professional crisis intervention becomes necessary.',
  path: '/resources/crisis-prevention-intervention',
  keywords: ['crisis prevention intervention teens', 'CPI mental health', 'nonviolent crisis intervention adolescent', 'de-escalation teen treatment', 'CPI training teen facility'],
  jsonLd: [
    articleSchema,
    generateFAQPage({
      questions: faqs.map((f) => ({ question: f.q, answer: f.a })),
    }),
    generateWebPage({
      title: 'Crisis Prevention & Intervention for Teen Mental Health',
      description:
        'Evidence-based guide to crisis prevention intervention techniques for adolescent mental health.',
      url: `${SITE_URL}/resources/crisis-prevention-intervention`,
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

export default function CPIArticle() {
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
              Crisis Prevention
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
            Crisis Prevention &amp; Intervention for Teen Mental Health
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
              When an adolescent is in emotional crisis, the response they receive in those first critical moments shapes everything that follows. Crisis Prevention Intervention &mdash; widely known as CPI &mdash; is a framework designed to help caregivers, clinicians, and educators respond to behavioral escalations with empathy, structure, and safety. For parents navigating a teen&rsquo;s mental health struggles, understanding CPI can mean the difference between a situation that spirals and one that leads to healing.
            </p>
          </AnimateIn>

          <h2 style={H2}>What Is Crisis Prevention Intervention?</h2>
          <p style={BODY}>
            Crisis Prevention Intervention is an evidence-informed training program originally developed by the Crisis Prevention Institute. It teaches professionals to recognize the early warning signs of agitation, anxiety, and behavioral escalation and to respond using a continuum of supportive, nonrestrictive techniques. In adolescent treatment settings, CPI-trained staff use verbal and nonverbal de-escalation strategies to help teens regain emotional control without resorting to punitive or coercive measures.
          </p>
          <p style={BODY}>
            CPI is not a single technique. It is a philosophy of care that prioritizes the dignity and safety of both the individual in crisis and those around them. The framework emphasizes prevention first &mdash; identifying and addressing triggers before a crisis fully develops &mdash; and intervention second, using the least restrictive approach necessary.
          </p>

          <h2 style={H2}>The Supportive Approach in CPI</h2>
          <p style={BODY}>
            At the heart of CPI is the supportive approach: meeting a person where they are emotionally and helping them move toward safety through connection rather than control. For adolescents, this is especially important. Teens in crisis are rarely &ldquo;choosing&rdquo; to act out. Their behavior is a communication of distress, and the supportive approach treats it as such.
          </p>

          <h3 style={H3}>Key Principles of the Supportive Approach</h3>
          <ul style={{ ...BODY, paddingLeft: 24 }}>
            <li style={{ marginBottom: 8 }}><strong>Empathic listening:</strong> Acknowledging the teen&rsquo;s emotions without judgment or dismissal. Statements like &ldquo;I can see you&rsquo;re really upset right now&rdquo; validate the experience.</li>
            <li style={{ marginBottom: 8 }}><strong>Rational detachment:</strong> Staying calm and objective when a teen is dysregulated. Staff trained in CPI learn to manage their own emotional responses so they can remain a stabilizing presence.</li>
            <li style={{ marginBottom: 8 }}><strong>Limit setting with choices:</strong> Rather than issuing ultimatums, CPI encourages offering options. &ldquo;Would you like to take a walk or sit in the quiet room for a few minutes?&rdquo; gives the teen a sense of agency.</li>
            <li style={{ marginBottom: 8 }}><strong>Nonverbal awareness:</strong> Body language, tone of voice, and physical proximity all communicate safety or threat. CPI trains staff to maintain open posture, speak at a measured pace, and respect personal space.</li>
          </ul>

          <h2 style={H2}>Why CPI Matters in Teen Treatment</h2>
          <p style={BODY}>
            Adolescents are neurologically wired for emotional intensity. The prefrontal cortex &mdash; responsible for impulse control, decision-making, and emotional regulation &mdash; does not fully mature until the mid-20s. This means teens are more susceptible to emotional flooding and less equipped to self-regulate during high-stress moments.
          </p>
          <p style={BODY}>
            In a residential or partial hospitalization setting, many teens arrive with histories of trauma, attachment disruption, or chronic invalidation. A crisis response that feels punitive or controlling can retraumatize, eroding the trust that effective treatment depends on. CPI-based approaches help maintain the therapeutic relationship even during the most challenging moments.
          </p>
          <p style={BODY}>
            Research supports this. Facilities that implement CPI training consistently report reductions in the use of physical restraint and seclusion, fewer staff injuries, and improved therapeutic alliance between staff and clients.
          </p>

          <h2 style={H2}>When Professional Intervention Is Needed</h2>
          <p style={BODY}>
            Not every behavioral challenge requires professional intervention. But certain signs indicate that a teen&rsquo;s emotional state has moved beyond what a family can safely manage at home:
          </p>
          <ul style={{ ...BODY, paddingLeft: 24 }}>
            <li style={{ marginBottom: 8 }}>Threats or acts of self-harm or suicide</li>
            <li style={{ marginBottom: 8 }}>Physical aggression toward family members or property</li>
            <li style={{ marginBottom: 8 }}>Psychotic symptoms (hallucinations, severe disorientation)</li>
            <li style={{ marginBottom: 8 }}>Refusal to eat, sleep, or engage for extended periods</li>
            <li style={{ marginBottom: 8 }}>Substance-related emergencies</li>
          </ul>
          <p style={BODY}>
            If your teen is displaying any of these behaviors, a structured treatment environment with CPI-trained staff can provide the safety and clinical support they need. At Silver State, all staff are trained in CPI techniques and our 4:1 staff-to-client ratio ensures rapid, compassionate response.
          </p>

          <h2 style={H2}>How Silver State Uses CPI</h2>
          <p style={BODY}>
            At Silver State Adolescent Treatment Center, CPI is not just a training certification &mdash; it is embedded in our culture of care. Every team member, from clinicians to residential counselors, is trained in CPI techniques and practices them daily. Our crisis prevention program operates on a philosophy of early intervention: identifying behavioral cues early and responding with support before escalation occurs.
          </p>
          <p style={BODY}>
            Our approach integrates CPI with evidence-based therapies including{' '}
            <Link to="/programs/cbt" style={{ color: 'var(--sage)', fontWeight: 600 }}>CBT</Link>,{' '}
            <Link to="/programs/dbt" style={{ color: 'var(--sage)', fontWeight: 600 }}>DBT</Link>, and{' '}
            <Link to="/programs/trauma-informed-care" style={{ color: 'var(--sage)', fontWeight: 600 }}>trauma-informed care</Link>,
            {' '}giving teens both immediate crisis support and long-term coping skills.
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
                { label: 'Crisis Prevention & Intervention', href: '/programs/crisis-prevention-intervention' },
                { label: 'Residential Treatment', href: '/programs/residential-treatment' },
                { label: 'Trauma-Informed Care', href: '/programs/trauma-informed-care' },
                { label: 'DBT', href: '/programs/dbt' },
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
                Common Questions About CPI
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
              Is Your Teen in Crisis?
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
              Our admissions team is available 24/7 to help. Call {site.phone} for a free,
              confidential assessment.
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
