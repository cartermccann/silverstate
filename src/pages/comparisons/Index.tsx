import { useState } from 'react'
import { Link } from 'react-router'
import { comparisons } from '../../data/comparisons'
import { site } from '../../data/common'
import { generateMeta } from '../../utils/meta'
import { generateFAQPage } from '../../utils/schema'
import useIsMobile from '../../hooks/useIsMobile'
import AnimateIn, { StaggerGroup, StaggerItem } from '../../components/AnimateIn'
import { CharReveal } from '../../components/TextReveal'
import FaqItem from '../../components/FaqItem'
import MagneticButton from '../../components/MagneticButton'
import { IconPhone } from '../../components/Icons'

const DISPLAY = 'var(--font-display)'
const WARM = 'var(--warm)'

export const meta = generateMeta({
  title: 'Treatment Comparisons for Teens | Silver State',
  description:
    'Compare teen treatment options side-by-side. Understand differences between therapies, programs, and conditions to find the right approach for your adolescent.',
  path: '/compare',
  keywords: ['teen therapy comparison', 'treatment program comparison', 'CBT vs DBT teens', 'residential vs PHP', 'mental health treatment comparison'],
})

const categoryLabels: Record<string, string> = {
  therapy: 'Therapy Comparisons',
  program: 'Program Comparisons',
  condition: 'Condition Comparisons',
}

const categoryDescriptions: Record<string, string> = {
  therapy:
    'Compare evidence-based therapy modalities to understand which approach is best suited for your teen\'s specific needs.',
  program:
    'Understand the differences between our treatment levels — residential, PHP, and IOP — to choose the right intensity of care.',
  condition:
    'Learn how common adolescent mental health conditions differ and overlap, and how treatment approaches vary.',
}

const categoryOrder = ['therapy', 'program', 'condition']

export default function ComparisonsHub() {
  const isMobile = useIsMobile()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const hubFaqs = [
    {
      q: 'How do I choose between different treatment approaches for my teen?',
      a: `The right approach depends on your teen's specific diagnosis, symptom severity, and treatment history. Our clinical team conducts a thorough assessment at admission and recommends the most effective therapies and level of care. Call ${site.phone} to discuss your teen's needs.`,
    },
    {
      q: 'Can my teen receive multiple types of therapy at Silver State?',
      a: 'Yes. Most treatment plans at Silver State integrate multiple therapeutic modalities — for example, combining CBT with family therapy and experiential approaches. Our clinicians tailor the combination to each teen\'s unique presentation.',
    },
    {
      q: 'How do you determine the right level of care for my teen?',
      a: 'Our admissions team evaluates symptom severity, safety risk, home environment stability, previous treatment history, and daily functioning. Based on this assessment, we recommend residential, PHP, or IOP. Many teens progress through multiple levels during their treatment journey.',
    },
  ]

  const faqSchema = generateFAQPage({
    questions: hubFaqs.map((faq) => ({ question: faq.q, answer: faq.a })),
  })

  const grouped = categoryOrder.map((cat) => ({
    key: cat,
    label: categoryLabels[cat]!,
    description: categoryDescriptions[cat]!,
    items: comparisons.filter((c) => c.category === cat),
  }))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── 1. HERO ── */}
      <section style={{ padding: '64px 0 48px', background: WARM }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <AnimateIn variant="fadeUp">
            <span className="section-label">Compare</span>
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
            Treatment Comparisons
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
              Choosing the right treatment for your teen can feel overwhelming. These side-by-side
              comparisons break down the key differences between therapies, treatment levels, and
              conditions so you can make informed decisions with confidence.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── 2. COMPARISONS BY CATEGORY ── */}
      {grouped.map((group, gi) => (
        <section
          key={group.key}
          style={{ padding: '64px 0', background: gi % 2 === 0 ? undefined : WARM }}
        >
          <div className="wrap">
            <AnimateIn variant="fadeUp">
              <span className="section-label">{group.label}</span>
              <h2 className="section-heading" style={{ marginTop: 8, marginBottom: 8 }}>
                {group.label}
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
              {group.items.map((comp) => (
                <StaggerItem key={comp.slug}>
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
                      {comp.title}
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
                      {comp.introduction.split('\n')[0]?.slice(0, 180)}...
                    </p>
                    <Link
                      to={`/compare/${comp.slug}`}
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
                      Compare Now &rarr;
                    </Link>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>
      ))}

      {/* ── 3. FAQS ── */}
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
              Common Questions
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

      {/* ── 4. CROSS-NAVIGATION ── */}
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
                <h3 style={{ fontFamily: DISPLAY, fontSize: '1rem', fontWeight: 600, marginBottom: 12 }}>
                  Conditions We Treat
                </h3>
                <p style={{ fontSize: '.9rem', color: 'var(--body)', lineHeight: 1.6, marginBottom: 16 }}>
                  Learn about the mental health conditions, substance use disorders, and eating
                  disorders we treat.
                </p>
                <Link
                  to="/conditions"
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
                  View Conditions &rarr;
                </Link>
              </div>
            </AnimateIn>

            <AnimateIn variant="fadeUp" delay={0.2}>
              <div className="bento-card" style={{ height: '100%' }}>
                <h3 style={{ fontFamily: DISPLAY, fontSize: '1rem', fontWeight: 600, marginBottom: 12 }}>
                  Treatment Programs
                </h3>
                <p style={{ fontSize: '.9rem', color: 'var(--body)', lineHeight: 1.6, marginBottom: 16 }}>
                  Explore our residential, PHP, and IOP programs designed for adolescents ages 11–17.
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

            <AnimateIn variant="fadeUp" delay={0.3}>
              <div
                className="bento-card"
                style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}
              >
                <h3 style={{ fontFamily: DISPLAY, fontSize: '1rem', fontWeight: 600 }}>
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
