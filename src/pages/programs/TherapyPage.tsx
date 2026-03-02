import { useState } from 'react'
import { Link } from 'react-router'
import type { TherapyModality } from '../../types'
import AnimateIn, { StaggerGroup, StaggerItem } from '../../components/AnimateIn'
import { CharReveal } from '../../components/TextReveal'
import FaqItem from '../../components/FaqItem'
import MagneticButton from '../../components/MagneticButton'
import { IconPhone } from '../../components/Icons'
import { site } from '../../data/common'
import { generateFAQPage, generateMedicalTherapy } from '../../utils/schema'

interface TherapyPageProps {
  therapy: TherapyModality
  faqs: { q: string; a: string }[]
}

const DISPLAY = 'var(--font-display)'
const WARM = 'var(--warm)'
const SAGE = 'var(--sage)'

function formatConditionLabel(slug: string): string {
  return slug
    .replace(/-treatment$/, '')
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

export default function TherapyPage({ therapy, faqs }: TherapyPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqSchema = generateFAQPage({
    questions: faqs.map((f) => ({ question: f.q, answer: f.a })),
  })

  const therapySchema = generateMedicalTherapy({
    name: therapy.name,
    description: therapy.description,
    slug: therapy.slug,
    therapyType: 'Behavioral',
    conditions: therapy.usedFor.map(formatConditionLabel),
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(therapySchema) }}
      />

      {/* ── HERO ── */}
      <section style={{ padding: '64px 0 48px', background: WARM }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <AnimateIn variant="fadeUp">
            <span className="section-label">Therapy &amp; Treatment</span>
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
            {therapy.name}
          </CharReveal>
          <AnimateIn variant="blurUp" delay={0.2}>
            <p style={{ marginTop: 16, color: 'var(--body)', fontSize: '1rem', lineHeight: 1.7 }}>
              {therapy.description}
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── HOW IT HELPS ── */}
      <section style={{ padding: '64px 0' }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <AnimateIn variant="fadeUp">
            <h2 className="section-heading">How {therapy.shortName} Helps Teens</h2>
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
              {therapy.howItHelps}
            </p>
          </AnimateIn>
          {therapy.evidenceBasis && (
            <AnimateIn variant="fadeUp" delay={0.2}>
              <div
                style={{
                  marginTop: 24,
                  padding: '16px 24px',
                  background: WARM,
                  borderRadius: 'var(--radius-lg)',
                  display: 'inline-block',
                  fontFamily: DISPLAY,
                  fontSize: '.95rem',
                  fontWeight: 600,
                  color: SAGE,
                  lineHeight: 1.5,
                }}
              >
                {therapy.evidenceBasis}
              </div>
            </AnimateIn>
          )}
        </div>
      </section>

      {/* ── CONDITIONS TREATED ── */}
      {therapy.usedFor.length > 0 && (
        <section style={{ padding: '64px 0', background: WARM }}>
          <div className="wrap">
            <AnimateIn variant="fadeUp">
              <h2 className="section-heading">
                Conditions Treated with {therapy.shortName}
              </h2>
            </AnimateIn>
            <StaggerGroup
              stagger={0.06}
              variant="fadeUp"
              style={{
                marginTop: 24,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                gap: 16,
              }}
            >
              {therapy.usedFor.map((slug) => (
                <StaggerItem key={slug}>
                  <Link
                    to={`/conditions/${slug}`}
                    className="bento-card"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      textDecoration: 'none',
                      color: 'var(--text)',
                      minHeight: 44,
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
                      }}
                    >
                      {formatConditionLabel(slug)}
                    </span>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>
      )}

      {/* ── PHONE CTA ── */}
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

      {/* ── FAQ ── */}
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
              Common Questions About {therapy.shortName}
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

      {/* ── CROSS-NAV ── */}
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
            <AnimateIn variant="fadeUp" delay={0.1}>
              <div className="bento-card">
                <h3 style={{ fontFamily: DISPLAY, fontSize: '1rem', fontWeight: 600, marginBottom: 12 }}>
                  All Therapy Programs
                </h3>
                <Link
                  to="/programs/therapy-programs"
                  style={{ color: 'var(--blue)', textDecoration: 'none', fontWeight: 600, fontSize: '.9rem', display: 'inline-block', padding: '8px 0', minHeight: 44, lineHeight: '28px' }}
                >
                  View All Therapies &rarr;
                </Link>
              </div>
            </AnimateIn>
            <AnimateIn variant="fadeUp" delay={0.2}>
              <div className="bento-card">
                <h3 style={{ fontFamily: DISPLAY, fontSize: '1rem', fontWeight: 600, marginBottom: 12 }}>
                  Conditions We Treat
                </h3>
                <Link
                  to="/conditions"
                  style={{ color: 'var(--blue)', textDecoration: 'none', fontWeight: 600, fontSize: '.9rem', display: 'inline-block', padding: '8px 0', minHeight: 44, lineHeight: '28px' }}
                >
                  View Conditions &rarr;
                </Link>
              </div>
            </AnimateIn>
            <AnimateIn variant="fadeUp" delay={0.3}>
              <div className="bento-card" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <h3 style={{ fontFamily: DISPLAY, fontSize: '1rem', fontWeight: 600 }}>
                  Ready to Start?
                </h3>
                <Link to="/admissions" className="btn btn-primary" style={{ textAlign: 'center', justifyContent: 'center', minHeight: 44 }}>
                  Start the Admissions Process
                </Link>
                <MagneticButton>
                  <a
                    href={site.phoneTel}
                    className="btn btn-dark"
                    aria-label={`Call Silver State at ${site.phone}`}
                    style={{ width: '100%', minHeight: 44, justifyContent: 'center', textDecoration: 'none' }}
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
