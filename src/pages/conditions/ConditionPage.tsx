import { useState } from 'react'
import { Link } from 'react-router'
import type { ConditionData } from '../../types'
import AnimateIn, { StaggerGroup, StaggerItem } from '../../components/AnimateIn'
import { CharReveal } from '../../components/TextReveal'
import FaqItem from '../../components/FaqItem'
import MagneticButton from '../../components/MagneticButton'
import { IconCheck, IconPhone } from '../../components/Icons'
import { programsBySlug } from '../../data/programs'
import { getConditionBySlug } from '../../data/conditions'
import { site } from '../../data/common'
import { generateFAQPage, generateMedicalCondition } from '../../utils/schema'

interface ConditionPageProps {
  condition: ConditionData
}

const SAGE = 'var(--sage)'
const WARM = 'var(--warm)'
const DISPLAY = 'var(--font-display)'

const categoryLabels: Record<string, string> = {
  'mental-health': 'Mental Health',
  'substance-abuse': 'Substance Abuse',
  'eating-disorders': 'Eating Disorders',
}

export default function ConditionPage({ condition }: ConditionPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const shortName = condition.name.replace(/ Treatment$/, '')

  const faqSchema = generateFAQPage({
    questions: condition.faqs.map((f) => ({ question: f.q, answer: f.a })),
  })

  const medicalConditionSchema = generateMedicalCondition({
    name: `${shortName} in Adolescents`,
    description: condition.description.split('\n\n')[0] ?? '',
    slug: condition.slug,
    possibleTreatments: condition.therapies,
    symptoms: condition.symptoms,
  })

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalConditionSchema) }}
      />

      {/* ── 1. HERO / HEADER ── */}
      <section style={{ padding: '64px 0 48px', background: WARM }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <AnimateIn variant="fadeUp">
            <span className="section-label">
              {categoryLabels[condition.category] ?? condition.category}
            </span>
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
            {condition.headline}
          </CharReveal>

          {/* Clinical Reviewer Attribution */}
          {condition.reviewedBy && (
            <AnimateIn variant="blurUp" delay={0.2}>
              <p
                style={{
                  marginTop: 16,
                  fontSize: '.85rem',
                  color: SAGE,
                  fontWeight: 500,
                }}
              >
                Clinically reviewed by {condition.reviewedBy}
                {condition.reviewDate && <> &middot; Last updated {condition.reviewDate}</>}
              </p>
            </AnimateIn>
          )}
        </div>
      </section>

      {/* ── 2. CONDITION OVERVIEW ── */}
      <section style={{ padding: '64px 0' }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <AnimateIn variant="fadeUp">
            <h2 className="section-heading">Understanding {shortName} in Adolescents</h2>
          </AnimateIn>

          {condition.description.split('\n\n').map((paragraph, i) => (
            <AnimateIn key={i} variant="blurUp" delay={0.1 + i * 0.1}>
              <p
                style={{
                  marginTop: 16,
                  color: 'var(--body)',
                  fontSize: '.95rem',
                  lineHeight: 1.7,
                }}
              >
                {paragraph}
              </p>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ── 3. SYMPTOMS ── */}
      <section style={{ padding: '64px 0', background: WARM }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <AnimateIn variant="fadeUp">
            <h2 className="section-heading">Signs of {shortName} in Teens</h2>
          </AnimateIn>

          <StaggerGroup stagger={0.06} variant="fadeUp" style={{ marginTop: 24 }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {condition.symptoms.map((symptom, i) => (
                <StaggerItem key={i}>
                  <li
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 12,
                      fontSize: '.95rem',
                      color: 'var(--body)',
                      lineHeight: 1.6,
                      marginBottom: 12,
                    }}
                  >
                    <IconCheck
                      style={{
                        flexShrink: 0,
                        color: SAGE,
                        marginTop: 4,
                        width: 18,
                        height: 18,
                      }}
                    />
                    {symptom}
                  </li>
                </StaggerItem>
              ))}
            </ul>
          </StaggerGroup>
        </div>
      </section>

      {/* ── 4. EVIDENCE-BASED THERAPIES ── */}
      <section style={{ padding: '64px 0' }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <AnimateIn variant="fadeUp">
            <h2 className="section-heading">Evidence-Based Treatment Approaches</h2>
          </AnimateIn>

          <StaggerGroup
            stagger={0.08}
            variant="fadeUp"
            style={{
              marginTop: 24,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: 16,
            }}
          >
            {condition.therapies.map((therapy, i) => (
              <StaggerItem key={i}>
                <div
                  className="bento-card"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    height: '100%',
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: SAGE,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: DISPLAY,
                      fontSize: '.95rem',
                      fontWeight: 600,
                      color: 'var(--text)',
                    }}
                  >
                    {therapy}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ── 5. OUR APPROACH ── */}
      <section style={{ padding: '64px 0', background: WARM }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <AnimateIn variant="fadeUp">
            <h2 className="section-heading">How Silver State Treats {shortName}</h2>
          </AnimateIn>

          <AnimateIn variant="blurUp" delay={0.1}>
            <p
              style={{
                marginTop: 16,
                color: 'var(--body)',
                fontSize: '.95rem',
                lineHeight: 1.7,
              }}
            >
              {condition.approach}
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── 6. MID-PAGE PHONE CTA ── */}
      <section style={{ padding: '48px 0' }}>
        <div className="wrap" style={{ maxWidth: 600, textAlign: 'center' }}>
          <AnimateIn variant="fadeUp">
            <h2
              style={{
                fontFamily: DISPLAY,
                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              Ready to Get Help for Your Teen?
            </h2>
            <p
              style={{
                marginTop: 12,
                color: 'var(--body)',
                fontSize: '.95rem',
                lineHeight: 1.6,
              }}
            >
              Our admissions team is available 24/7 to answer your questions and help you take the
              first step.
            </p>
          </AnimateIn>

          <AnimateIn variant="fadeUp" delay={0.15}>
            <div style={{ marginTop: 24 }}>
              <MagneticButton>
                <a
                  href={site.phoneTel}
                  className="btn btn-primary"
                  aria-label={`Call Silver State at ${site.phone}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    minHeight: 44,
                    textDecoration: 'none',
                    fontSize: '1.05rem',
                  }}
                >
                  <IconPhone style={{ width: 18, height: 18 }} />
                  Call {site.phone}
                </a>
              </MagneticButton>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── 7. FAQ SECTION ── */}
      <section style={{ padding: '64px 0', background: WARM }}>
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
              Frequently Asked Questions
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
              {condition.faqs.map((faq, i) => (
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

      {/* ── 8-10. RELATED CONTENT & CTAs ── */}
      <section style={{ padding: '64px 0' }}>
        <div className="wrap">
          <AnimateIn variant="fadeUp">
            <h2 className="section-heading">Continue Exploring</h2>
          </AnimateIn>

          <div
            style={{
              marginTop: 32,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: 24,
            }}
          >
            {/* Related Programs */}
            {condition.relatedPrograms.length > 0 && (
              <AnimateIn variant="fadeUp" delay={0.1}>
                <div className="bento-card">
                  <h3
                    style={{
                      fontFamily: DISPLAY,
                      fontSize: '1rem',
                      fontWeight: 600,
                      marginBottom: 12,
                    }}
                  >
                    Treatment Programs for {shortName}
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {condition.relatedPrograms.map((slug) => {
                      const related = programsBySlug[slug]
                      if (!related) return null
                      return (
                        <li key={slug} style={{ marginBottom: 8 }}>
                          <Link
                            to={`/programs/${slug}`}
                            style={{
                              color: 'var(--blue)',
                              textDecoration: 'none',
                              fontSize: '.9rem',
                              fontWeight: 500,
                              display: 'inline-block',
                              padding: '4px 0',
                              minHeight: 44,
                              lineHeight: '36px',
                            }}
                          >
                            {related.label} &rarr;
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </AnimateIn>
            )}

            {/* Related Conditions */}
            {condition.relatedConditions.length > 0 && (
              <AnimateIn variant="fadeUp" delay={0.2}>
                <div className="bento-card">
                  <h3
                    style={{
                      fontFamily: DISPLAY,
                      fontSize: '1rem',
                      fontWeight: 600,
                      marginBottom: 12,
                    }}
                  >
                    Related Conditions We Treat
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {condition.relatedConditions.map((slug) => {
                      const related = getConditionBySlug(slug)
                      return (
                        <li key={slug} style={{ marginBottom: 8 }}>
                          <Link
                            to={`/conditions/${slug}`}
                            style={{
                              color: 'var(--blue)',
                              textDecoration: 'none',
                              fontSize: '.9rem',
                              fontWeight: 500,
                              display: 'inline-block',
                              padding: '4px 0',
                              minHeight: 44,
                              lineHeight: '36px',
                            }}
                          >
                            {related?.name ?? slug} &rarr;
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </AnimateIn>
            )}

            {/* Insurance & Admissions CTAs */}
            <AnimateIn variant="fadeUp" delay={0.3}>
              <div
                className="bento-card"
                style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
              >
                <h3
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: '1rem',
                    fontWeight: 600,
                  }}
                >
                  Ready to Take the Next Step?
                </h3>
                <Link
                  to="/insurance"
                  className="btn btn-outline"
                  style={{ textAlign: 'center', minHeight: 44 }}
                >
                  Verify Your Insurance Coverage
                </Link>
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
                    className="btn btn-dark"
                    aria-label={`Call Silver State at ${site.phone}`}
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

      {/* ── 11. SOURCE CITATIONS ── */}
      {condition.sources.length > 0 && (
        <section style={{ padding: '0 0 48px' }}>
          <div className="wrap" style={{ maxWidth: 800 }}>
            <h3
              style={{
                fontFamily: DISPLAY,
                fontSize: '.9rem',
                fontWeight: 600,
                color: 'var(--muted)',
                marginBottom: 12,
              }}
            >
              Sources
            </h3>
            <ol style={{ margin: 0, paddingLeft: 20 }}>
              {condition.sources.map((source, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: '.8rem',
                    color: 'var(--muted)',
                    lineHeight: 1.6,
                    marginBottom: 4,
                  }}
                >
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--blue)', textDecoration: 'none' }}
                  >
                    {source.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}
    </>
  )
}
