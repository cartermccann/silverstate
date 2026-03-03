import { useState } from 'react'
import { Link } from 'react-router'
import { conditions } from '../../data/conditions'
import { site } from '../../data/common'
import { generateMeta } from '../../utils/meta'
import { generateMedicalOrganization, generateFAQPage } from '../../utils/schema'
import useIsMobile from '../../hooks/useIsMobile'
import AnimateIn, { StaggerGroup, StaggerItem } from '../../components/AnimateIn'
import { CharReveal } from '../../components/TextReveal'
import FaqItem from '../../components/FaqItem'
import MagneticButton from '../../components/MagneticButton'
import { IconPhone } from '../../components/Icons'

const DISPLAY = 'var(--font-display)'
const WARM = 'var(--warm)'

export const meta = generateMeta({
  title: 'Conditions We Treat | Teen Mental Health & Substance Abuse | Silver State',
  description:
    'Silver State treats adolescent mental health conditions, substance abuse, and eating disorders. Evidence-based residential, PHP, and IOP treatment for teens ages 11-17 in Las Vegas.',
  path: '/conditions',
  keywords: ['teen mental health conditions', 'adolescent behavioral health', 'conditions treated teens', 'teen substance abuse treatment', 'teen eating disorder treatment'],
})

const categoryLabels: Record<string, string> = {
  'mental-health': 'Mental Health',
  'substance-abuse': 'Substance Abuse',
  'eating-disorders': 'Eating Disorders',
}

const categoryDescriptions: Record<string, string> = {
  'mental-health':
    'Our clinical team specializes in evidence-based treatment for adolescent mental health conditions, including anxiety, depression, trauma, and more.',
  'substance-abuse':
    'We provide comprehensive substance abuse and dual diagnosis treatment designed specifically for teens, addressing both the addiction and its underlying causes.',
  'eating-disorders':
    'Our eating disorder program combines clinical therapy, nutritional support, and family involvement to help teens develop a healthy relationship with food.',
}

const categoryOrder = ['mental-health', 'substance-abuse', 'eating-disorders']

export default function ConditionsHub() {
  const isMobile = useIsMobile()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const orgSchema = generateMedicalOrganization()

  const hubFaqs = [
    {
      q: 'What conditions does Silver State treat?',
      a: `Silver State specializes in treating adolescent mental health conditions (anxiety, depression, trauma, bipolar disorder, and more), substance abuse disorders (alcohol, opioids, benzodiazepines, cocaine, meth, and cannabis), and eating disorders (anorexia, bulimia, binge eating, ARFID, and OSFED). Call ${site.phone} to discuss your teen's specific needs.`,
    },
    {
      q: 'How do I know which level of care my teen needs?',
      a: `Our admissions team conducts a thorough clinical assessment to determine the right level of care — residential, partial hospitalization (PHP), or intensive outpatient (IOP). The recommendation is based on your teen's symptoms, safety, and daily functioning. Call ${site.phone} to start with a free assessment.`,
    },
    {
      q: 'Can you treat teens with more than one condition?',
      a: 'Yes. Many adolescents we treat have co-occurring conditions — for example, anxiety with substance abuse, or depression with an eating disorder. Our clinical team creates individualized treatment plans that address all diagnoses simultaneously through our dual diagnosis approach.',
    },
    {
      q: 'What ages do you treat?',
      a: 'Silver State treats adolescents ages 11 through 17. Our programs, environment, and clinical approach are designed specifically for this age group — not adapted from adult programs.',
    },
  ]

  const faqSchema = generateFAQPage({
    questions: hubFaqs.map((faq) => ({ question: faq.q, answer: faq.a })),
  })

  const grouped = categoryOrder.map((cat) => ({
    key: cat,
    label: categoryLabels[cat]!,
    description: categoryDescriptions[cat]!,
    items: conditions.filter((c) => c.category === cat),
  }))

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── 1. HERO SECTION ── */}
      <section style={{ padding: '64px 0 48px', background: WARM }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <AnimateIn variant="fadeUp">
            <span className="section-label">What We Treat</span>
          </AnimateIn>

          <CharReveal
            as="h1"
            style={{
              fontFamily: DISPLAY,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              marginTop: 8,
            }}
          >
            Conditions We Treat
          </CharReveal>

          <AnimateIn variant="blurUp" delay={0.2}>
            <p
              style={{
                marginTop: 16,
                color: 'var(--body)',
                fontSize: '1rem',
                lineHeight: 1.7,
              }}
            >
              Silver State provides specialized treatment for adolescents ages 11&ndash;17 facing
              mental health challenges, substance abuse, and eating disorders. Every condition below
              is treated through our full continuum of care &mdash; residential, PHP, and IOP
              &mdash; with individualized plans built around your teen&rsquo;s specific needs.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── 2. PHONE CTA SECTION ── */}
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
              Not Sure Where to Start?
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
              Our admissions team can help you understand your teen&rsquo;s condition and recommend
              the right treatment path. Call {site.phone} for a free, confidential assessment.
            </p>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.2}>
            <MagneticButton>
              <a
                href={site.phoneTel}
                aria-label={`Call Silver State at ${site.phone} for a free assessment`}
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

      {/* ── 3. CONDITIONS BY CATEGORY ── */}
      {grouped.map((group, gi) => (
        <section
          key={group.key}
          style={{ padding: '64px 0', background: gi % 2 === 0 ? undefined : WARM }}
        >
          <div className="wrap">
            <AnimateIn variant="fadeUp">
              <span className="section-label">{group.label}</span>
              <h2
                className="section-heading"
                style={{ marginTop: 8, marginBottom: 8 }}
              >
                {group.label} Conditions
              </h2>
            </AnimateIn>
            <AnimateIn variant="blurUp" delay={0.1}>
              <p
                style={{
                  color: 'var(--body)',
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  maxWidth: 700,
                  marginBottom: 32,
                }}
              >
                {group.description}
              </p>
            </AnimateIn>

            <StaggerGroup
              stagger={0.06}
              variant="fadeUp"
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                gap: 20,
              }}
            >
              {group.items.map((condition) => (
                <StaggerItem key={condition.slug}>
                  <div
                    className="bento-card"
                    style={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: DISPLAY,
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        lineHeight: 1.2,
                        marginBottom: 8,
                      }}
                    >
                      {condition.name}
                    </h3>
                    <p
                      style={{
                        fontSize: '.9rem',
                        color: 'var(--body)',
                        lineHeight: 1.6,
                        flex: 1,
                        marginBottom: 16,
                      }}
                    >
                      {condition.description.split('\n')[0]?.slice(0, 180)}...
                    </p>
                    <Link
                      to={`/conditions/${condition.slug}`}
                      style={{
                        color: 'var(--blue)',
                        textDecoration: 'none',
                        fontWeight: 600,
                        fontSize: '.9rem',
                        display: 'inline-block',
                        padding: '8px 0',
                        minHeight: 44,
                        lineHeight: '28px',
                      }}
                    >
                      Learn About {condition.name} &rarr;
                    </Link>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>
      ))}

      {/* ── 4. FAQS ── */}
      <section style={{ padding: '64px 0' }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <AnimateIn variant="fadeUp">
              <span className="section-label">FAQ</span>
            </AnimateIn>
            <CharReveal
              as="h2"
              stagger={0.025}
              style={{
                fontFamily: DISPLAY,
                fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)',
                fontWeight: 700,
                lineHeight: 1.05,
                marginTop: 8,
                letterSpacing: '-0.03em',
              }}
            >
              Treatment Questions
            </CharReveal>
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
              {hubFaqs.map((faq, i) => (
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

      {/* ── 5. CROSS-NAVIGATION ── */}
      <section style={{ padding: '64px 0', background: WARM }}>
        <div className="wrap">
          <AnimateIn variant="fadeUp">
            <h2 className="section-heading" style={{ textAlign: 'center', marginBottom: 32 }}>
              Continue Exploring
            </h2>
          </AnimateIn>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
              gap: 24,
            }}
          >
            <AnimateIn variant="fadeUp" delay={0.1}>
              <div className="bento-card" style={{ height: '100%' }}>
                <h3
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: '1rem',
                    fontWeight: 600,
                    marginBottom: 12,
                  }}
                >
                  Treatment Programs
                </h3>
                <p
                  style={{
                    fontSize: '.9rem',
                    color: 'var(--body)',
                    lineHeight: 1.6,
                    marginBottom: 16,
                  }}
                >
                  Learn about our residential, PHP, and IOP treatment programs for adolescents.
                </p>
                <Link
                  to="/programs"
                  style={{
                    color: 'var(--blue)',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '.9rem',
                    display: 'inline-block',
                    padding: '8px 0',
                    minHeight: 44,
                    lineHeight: '28px',
                  }}
                >
                  View Programs &rarr;
                </Link>
              </div>
            </AnimateIn>

            <AnimateIn variant="fadeUp" delay={0.2}>
              <div className="bento-card" style={{ height: '100%' }}>
                <h3
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: '1rem',
                    fontWeight: 600,
                    marginBottom: 12,
                  }}
                >
                  Insurance Coverage
                </h3>
                <p
                  style={{
                    fontSize: '.9rem',
                    color: 'var(--body)',
                    lineHeight: 1.6,
                    marginBottom: 16,
                  }}
                >
                  We accept most major insurance plans. Verify your coverage in under 10 minutes.
                </p>
                <Link
                  to="/insurance"
                  style={{
                    color: 'var(--blue)',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '.9rem',
                    display: 'inline-block',
                    padding: '8px 0',
                    minHeight: 44,
                    lineHeight: '28px',
                  }}
                >
                  Verify Insurance &rarr;
                </Link>
              </div>
            </AnimateIn>

            <AnimateIn variant="fadeUp" delay={0.3}>
              <div
                className="bento-card"
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                }}
              >
                <h3
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: '1rem',
                    fontWeight: 600,
                  }}
                >
                  Ready to Start?
                </h3>
                <Link
                  to="/admissions"
                  className="btn btn-primary"
                  style={{ textAlign: 'center', justifyContent: 'center', minHeight: 44 }}
                >
                  Start the Admissions Process
                </Link>
                <MagneticButton>
                  <a
                    href={site.phoneTel}
                    aria-label={`Call Silver State at ${site.phone}`}
                    className="btn btn-dark"
                    style={{
                      width: '100%',
                      minHeight: 44,
                      justifyContent: 'center',
                      textDecoration: 'none',
                    }}
                  >
                    <IconPhone style={{ width: 18, height: 18 }} />
                    Call {site.phone}
                  </a>
                </MagneticButton>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  )
}
