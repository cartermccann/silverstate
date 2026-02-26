import { useState } from 'react'
import { Link } from 'react-router'
import type { InsurancePageData } from '../../types'
import AnimateIn, { StaggerGroup, StaggerItem } from '../../components/AnimateIn'
import { CharReveal } from '../../components/TextReveal'
import FaqItem from '../../components/FaqItem'
import MagneticButton from '../../components/MagneticButton'
import { IconPhone, IconCheck } from '../../components/Icons'
import { site } from '../../data/common'
import { generateFAQPage } from '../../utils/schema'

interface InsurancePageProps {
  provider: InsurancePageData
}

const DISPLAY = 'var(--font-display)'
const WARM = 'var(--warm)'
const SAGE = 'var(--sage)'

export default function InsurancePage({ provider }: InsurancePageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqSchema = generateFAQPage({
    questions: provider.faqs.map((f) => ({ question: f.q, answer: f.a })),
  })

  const coverageAreas = [
    'Residential Treatment',
    'Partial Hospitalization (PHP)',
    'Intensive Outpatient (IOP)',
    'Clinical Assessments',
    'Family Therapy',
  ]

  return (
    <>
      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── 1. PAGE HERO ── */}
      <section style={{ padding: '64px 0 48px', background: WARM }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <AnimateIn variant="fadeUp">
            <span className="section-label">Insurance Coverage</span>
          </AnimateIn>

          {provider.logo && (
            <AnimateIn variant="blurUp" delay={0.1}>
              <img
                src={provider.logo}
                alt={`${provider.name} logo`}
                style={{
                  maxWidth: 200,
                  height: 'auto',
                  marginTop: 16,
                  objectFit: 'contain',
                }}
              />
            </AnimateIn>
          )}

          <CharReveal
            as="h1"
            style={{
              fontFamily: DISPLAY,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              marginTop: 16,
            }}
          >
            {provider.name} Coverage for Adolescent Treatment
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
              Silver State accepts {provider.name} for residential, PHP, and IOP treatment for teens
              ages 11-17.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── 2. COVERAGE DESCRIPTION ── */}
      <section style={{ padding: '64px 0' }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <AnimateIn variant="fadeUp">
            <h2 className="section-heading">What {provider.name} Typically Covers</h2>
          </AnimateIn>

          {provider.coverageDescription.split('\n\n').map((paragraph, i) => (
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

      {/* ── 3. PHONE CTA (PRIMARY) ── */}
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
              We Verify {provider.name} Coverage in Under 10 Minutes
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
              Our admissions team will verify your {provider.name} benefits, explain your coverage,
              and walk you through the process — all in one call.
            </p>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.2}>
            <MagneticButton>
              <a
                href={site.phoneTel}
                aria-label={`Call Silver State at ${site.phone} to verify ${provider.name} coverage`}
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

      {/* ── 4. PRE-AUTHORIZATION ── */}
      <section style={{ padding: '64px 0' }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <AnimateIn variant="fadeUp">
            <h2 className="section-heading">Pre-Authorization Process for {provider.name}</h2>
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
              {provider.preAuthorization}
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── 5. COVERAGE DETAILS CALLOUT ── */}
      <section style={{ padding: '64px 0', background: WARM }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <AnimateIn variant="fadeUp">
            <div
              style={{
                background: 'rgba(255,255,255,0.85)',
                borderRadius: 'var(--radius-lg)',
                padding: '32px',
                border: '1px solid rgba(255,255,255,0.3)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
              }}
            >
              <h2
                style={{
                  fontFamily: DISPLAY,
                  fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                  fontWeight: 700,
                  marginBottom: 20,
                }}
              >
                Typical Coverage Areas
              </h2>

              <StaggerGroup stagger={0.06} variant="fadeUp">
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {coverageAreas.map((area, i) => (
                    <StaggerItem key={i}>
                      <li
                        style={{
                          display: 'flex',
                          alignItems: 'center',
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
                            width: 18,
                            height: 18,
                          }}
                        />
                        {area}
                      </li>
                    </StaggerItem>
                  ))}
                </ul>
              </StaggerGroup>

              <p
                style={{
                  marginTop: 16,
                  fontSize: '.85rem',
                  color: 'var(--muted)',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                }}
              >
                Coverage varies by plan. Call us to verify your specific benefits.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── 6. FAQ SECTION ── */}
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
              Frequently Asked Questions About {provider.name} Coverage
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
              {provider.faqs.map((faq, i) => (
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

      {/* ── 7. INTERNAL LINKS ── */}
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
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
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
                  All Insurance Providers
                </h3>
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
                  View All Accepted Insurance Providers &rarr;
                </Link>
              </div>
            </AnimateIn>

            <AnimateIn variant="fadeUp" delay={0.15}>
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
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: 8 }}>
                    <Link
                      to="/programs/residential-treatment"
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
                      Learn About Residential Treatment &rarr;
                    </Link>
                  </li>
                  <li style={{ marginBottom: 8 }}>
                    <Link
                      to="/programs/php"
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
                      Learn About PHP &rarr;
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/programs/iop"
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
                      Learn About IOP &rarr;
                    </Link>
                  </li>
                </ul>
              </div>
            </AnimateIn>

            <AnimateIn variant="fadeUp" delay={0.2}>
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

      {/* ── 8. PHONE CTA (SECONDARY) ── */}
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
              Get Help for Your Teen Today
            </h2>
            <p
              style={{
                marginTop: 12,
                color: 'var(--body)',
                fontSize: '.95rem',
                lineHeight: 1.6,
              }}
            >
              Our admissions team is available to verify your {provider.name} benefits and answer
              any questions about treatment.
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
    </>
  )
}
