import { useState } from 'react'
import { Link } from 'react-router'
import type { ComparisonPageData } from '../../types'
import AnimateIn, { StaggerGroup, StaggerItem } from '../../components/AnimateIn'
import { CharReveal } from '../../components/TextReveal'
import FaqItem from '../../components/FaqItem'
import MagneticButton from '../../components/MagneticButton'
import { IconPhone } from '../../components/Icons'
import { site } from '../../data/common'
import { generateFAQPage, generateWebPage } from '../../utils/schema'

interface ComparisonPageProps {
  comparison: ComparisonPageData
}

const SAGE = 'var(--sage)'
const WARM = 'var(--warm)'
const DISPLAY = 'var(--font-display)'

const categoryLabels: Record<string, string> = {
  therapy: 'Therapy Comparison',
  program: 'Program Comparison',
  condition: 'Condition Comparison',
}

function itemLink(comparison: ComparisonPageData, slug: string): string {
  if (comparison.category === 'therapy') return `/programs/${slug}`
  if (comparison.category === 'program') return `/programs/${slug}`
  return `/conditions/${slug}`
}

export default function ComparisonPage({ comparison }: ComparisonPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqSchema = generateFAQPage({
    questions: comparison.faqs.map((f) => ({ question: f.q, answer: f.a })),
  })

  const webPageSchema = generateWebPage({
    title: comparison.title,
    description: comparison.metaDescription,
    url: `/compare/${comparison.slug}`,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* ── 1. HERO ── */}
      <section style={{ padding: '64px 0 48px', background: WARM }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <AnimateIn variant="fadeUp">
            <span className="section-label">
              {categoryLabels[comparison.category] ?? 'Comparison'}
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
            {comparison.title}
          </CharReveal>

          <AnimateIn variant="blurUp" delay={0.2}>
            {comparison.introduction.split('\n\n').map((p, i) => (
              <p
                key={i}
                style={{
                  marginTop: 16,
                  color: 'var(--body)',
                  fontSize: '1rem',
                  lineHeight: 1.7,
                }}
              >
                {p}
              </p>
            ))}
          </AnimateIn>
        </div>
      </section>

      {/* ── 2. SIDE-BY-SIDE OVERVIEW ── */}
      <section style={{ padding: '64px 0' }}>
        <div className="wrap">
          <AnimateIn variant="fadeUp">
            <h2 className="section-heading" style={{ textAlign: 'center', marginBottom: 32 }}>
              Overview
            </h2>
          </AnimateIn>

          <div
            className="comparison-overview-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 32,
            }}
          >
            {[comparison.itemA, comparison.itemB].map((item, idx) => (
              <AnimateIn key={idx} variant="fadeUp" delay={idx * 0.15}>
                <div
                  className="bento-card"
                  style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderTop: `3px solid ${idx === 0 ? 'var(--blue)' : SAGE}`,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: DISPLAY,
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      marginBottom: 12,
                      color: 'var(--text)',
                    }}
                  >
                    {item.name}
                  </h3>
                  <p
                    style={{
                      fontSize: '.9rem',
                      color: 'var(--body)',
                      lineHeight: 1.7,
                      marginBottom: 16,
                    }}
                  >
                    {item.description}
                  </p>

                  <p
                    style={{
                      fontFamily: DISPLAY,
                      fontSize: '.85rem',
                      fontWeight: 600,
                      color: 'var(--text)',
                      marginBottom: 8,
                    }}
                  >
                    Best for:
                  </p>
                  <p
                    style={{
                      fontSize: '.85rem',
                      color: 'var(--body)',
                      lineHeight: 1.6,
                      marginBottom: 16,
                    }}
                  >
                    {item.bestFor}
                  </p>

                  <p
                    style={{
                      fontFamily: DISPLAY,
                      fontSize: '.85rem',
                      fontWeight: 600,
                      color: 'var(--text)',
                      marginBottom: 8,
                    }}
                  >
                    Key Features:
                  </p>
                  <ul style={{ margin: 0, paddingLeft: 18, flex: 1 }}>
                    {item.keyFeatures.map((feat, fi) => (
                      <li
                        key={fi}
                        style={{
                          fontSize: '.85rem',
                          color: 'var(--body)',
                          lineHeight: 1.6,
                          marginBottom: 4,
                        }}
                      >
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={itemLink(comparison, item.slug)}
                    style={{
                      color: 'var(--blue)',
                      textDecoration: 'none',
                      fontWeight: 600,
                      fontSize: '.9rem',
                      display: 'inline-block',
                      padding: '12px 0 0',
                      minHeight: 44,
                      lineHeight: '32px',
                    }}
                  >
                    Learn More About {item.name} &rarr;
                  </Link>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. KEY DIFFERENCES TABLE ── */}
      <section style={{ padding: '64px 0', background: WARM }}>
        <div className="wrap" style={{ maxWidth: 900 }}>
          <AnimateIn variant="fadeUp">
            <h2 className="section-heading" style={{ textAlign: 'center', marginBottom: 32 }}>
              Key Differences
            </h2>
          </AnimateIn>

          <AnimateIn variant="slideUp" delay={0.1}>
            <div
              style={{
                background: 'rgba(255,255,255,0.85)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(255,255,255,0.3)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                overflow: 'hidden',
              }}
            >
              {/* Table Header */}
              <div
                className="comparison-table-row"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  gap: 0,
                  background: 'var(--text)',
                  color: 'var(--white)',
                  padding: '12px 20px',
                  fontFamily: DISPLAY,
                  fontWeight: 600,
                  fontSize: '.85rem',
                }}
              >
                <span>Aspect</span>
                <span>{comparison.itemA.name}</span>
                <span>{comparison.itemB.name}</span>
              </div>

              {/* Table Rows */}
              {comparison.keyDifferences.map((diff, i) => (
                <div
                  key={i}
                  className="comparison-table-row"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gap: 0,
                    padding: '14px 20px',
                    borderTop: '1px solid rgba(0,0,0,0.06)',
                    fontSize: '.85rem',
                    lineHeight: 1.6,
                    background: i % 2 === 0 ? undefined : 'rgba(0,0,0,0.02)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: DISPLAY,
                      fontWeight: 600,
                      color: 'var(--text)',
                    }}
                  >
                    {diff.aspect}
                  </span>
                  <span style={{ color: 'var(--body)' }}>{diff.itemA}</span>
                  <span style={{ color: 'var(--body)' }}>{diff.itemB}</span>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── 4. WHEN TO CHOOSE ── */}
      <section style={{ padding: '64px 0' }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <AnimateIn variant="fadeUp">
            <h2 className="section-heading">Which Is Right for Your Teen?</h2>
          </AnimateIn>

          {comparison.whenToChoose.split('\n\n').map((p, i) => (
            <AnimateIn key={i} variant="blurUp" delay={0.1 + i * 0.1}>
              <p
                style={{
                  marginTop: 16,
                  color: 'var(--body)',
                  fontSize: '.95rem',
                  lineHeight: 1.7,
                }}
              >
                {p}
              </p>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ── 5. MID-PAGE PHONE CTA ── */}
      <section style={{ padding: '48px 0', background: 'var(--blue)', color: 'var(--white)' }}>
        <div className="wrap" style={{ maxWidth: 600, textAlign: 'center' }}>
          <AnimateIn variant="fadeUp">
            <h2
              style={{
                fontFamily: DISPLAY,
                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                fontWeight: 700,
                color: 'var(--white)',
                lineHeight: 1.1,
              }}
            >
              Not Sure Which Approach Is Right?
            </h2>
            <p
              style={{
                marginTop: 12,
                color: 'rgba(255,255,255,0.9)',
                fontSize: '.95rem',
                lineHeight: 1.6,
              }}
            >
              Our admissions team can help you understand your teen&rsquo;s needs and recommend the
              best treatment path.
            </p>
          </AnimateIn>

          <AnimateIn variant="fadeUp" delay={0.15}>
            <div style={{ marginTop: 24 }}>
              <MagneticButton>
                <a
                  href={site.phoneTel}
                  aria-label={`Call Silver State at ${site.phone}`}
                  className="btn"
                  style={{
                    background: 'var(--white)',
                    color: 'var(--blue)',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    padding: '14px 28px',
                    minHeight: 48,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
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
      </section>

      {/* ── 6. FAQ SECTION ── */}
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
              {comparison.faqs.map((faq, i) => (
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

      {/* ── 7. SOURCES ── */}
      {comparison.sources.length > 0 && (
        <section style={{ padding: '48px 0' }}>
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
              {comparison.sources.map((source, i) => (
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

      {/* ── 8. CROSS-NAVIGATION ── */}
      <section style={{ padding: '64px 0', background: WARM }}>
        <div className="wrap">
          <AnimateIn variant="fadeUp">
            <h2 className="section-heading" style={{ textAlign: 'center', marginBottom: 32 }}>
              Continue Exploring
            </h2>
          </AnimateIn>

          <StaggerGroup
            stagger={0.08}
            variant="fadeUp"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: 24,
            }}
          >
            <StaggerItem>
              <div className="bento-card" style={{ height: '100%' }}>
                <h3
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: '1rem',
                    fontWeight: 600,
                    marginBottom: 12,
                  }}
                >
                  More Comparisons
                </h3>
                <p
                  style={{
                    fontSize: '.9rem',
                    color: 'var(--body)',
                    lineHeight: 1.6,
                    marginBottom: 16,
                  }}
                >
                  Explore more treatment and condition comparisons to make informed decisions.
                </p>
                <Link
                  to="/compare"
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
                  View All Comparisons &rarr;
                </Link>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bento-card" style={{ height: '100%' }}>
                <h3
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: '1rem',
                    fontWeight: 600,
                    marginBottom: 12,
                  }}
                >
                  Our Programs
                </h3>
                <p
                  style={{
                    fontSize: '.9rem',
                    color: 'var(--body)',
                    lineHeight: 1.6,
                    marginBottom: 16,
                  }}
                >
                  Learn about residential, PHP, and IOP treatment for adolescents.
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
            </StaggerItem>

            <StaggerItem>
              <div
                className="bento-card"
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                }}
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
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .comparison-overview-grid {
            grid-template-columns: 1fr !important;
          }
          .comparison-table-row {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </>
  )
}
