import { useState } from 'react'
import { Link } from 'react-router'
import type { ProgramPageData } from '../../types'
import AnimateIn, { StaggerGroup, StaggerItem } from '../../components/AnimateIn'
import { CharReveal } from '../../components/TextReveal'
import FaqItem from '../../components/FaqItem'
import TimelineRow from '../../components/Timeline'
import MagneticButton from '../../components/MagneticButton'
import { IconCheck, IconPhone } from '../../components/Icons'
import { therapyBySlug } from '../../data/therapies'
import { programsBySlug } from '../../data/programs'
import { site } from '../../data/common'
import { generateFAQPage, generateMedicalTherapy } from '../../utils/schema'

interface ProgramPageProps {
  program: ProgramPageData
}

const SAGE = '#5A7A6E'
const WARM = '#F0EBE3'
const DISPLAY = "'Space Grotesk', sans-serif"

function formatConditionLabel(slug: string): string {
  return slug
    .replace(/-treatment$/, '')
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

export default function ProgramPage({ program }: ProgramPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqSchema = generateFAQPage({
    questions: program.faqs.map((f) => ({ question: f.q, answer: f.a })),
  })

  const therapySchema = generateMedicalTherapy({
    name: program.label,
    description: program.overview,
    slug: program.slug,
    therapyType: 'Behavioral',
    conditions: program.relatedConditions.map((slug) => formatConditionLabel(slug)),
  })

  const scheduleHeading =
    program.slug === 'residential-treatment'
      ? 'A Day in Treatment'
      : program.slug === 'php'
        ? 'A Day in PHP'
        : 'An IOP Session'

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(therapySchema) }}
      />

      {/* ── 1. HERO / HEADER ── */}
      <section style={{ padding: '64px 0 48px', background: WARM }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          {program.heroImage && (
            <AnimateIn variant="fadeUp">
              <img
                src={program.heroImage}
                alt={`${program.label} at Silver State`}
                loading="eager"
                width={800}
                height={360}
                style={{
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '800 / 360',
                  objectFit: 'cover',
                  borderRadius: 'var(--radius-lg)',
                  marginBottom: 24,
                }}
              />
            </AnimateIn>
          )}

          <AnimateIn variant="fadeUp">
            <span className="section-label">{program.label}</span>
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
            {program.title}
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
              {program.overview}
            </p>
          </AnimateIn>

          <AnimateIn variant="fadeUp" delay={0.3}>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 12,
                marginTop: 24,
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  padding: '8px 20px',
                  borderRadius: 999,
                  background: 'var(--white)',
                  border: '1px solid var(--border)',
                  fontSize: '.85rem',
                  fontWeight: 600,
                  color: 'var(--text)',
                }}
              >
                {program.duration}
              </span>
              {program.stat && (
                <span
                  style={{
                    display: 'inline-block',
                    padding: '8px 20px',
                    borderRadius: 999,
                    background: SAGE,
                    color: '#fff',
                    fontSize: '.85rem',
                    fontWeight: 600,
                  }}
                >
                  {program.stat}
                </span>
              )}
            </div>
          </AnimateIn>

          <AnimateIn variant="blurUp" delay={0.4}>
            <p
              style={{
                marginTop: 20,
                color: 'var(--body)',
                fontSize: '.9rem',
                lineHeight: 1.7,
                fontStyle: 'italic',
              }}
            >
              {program.targetAudience}
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── 2. APPROACH & FEATURES ── */}
      <section style={{ padding: '64px 0' }}>
        <div className="wrap">
          <AnimateIn variant="fadeUp">
            <h2 className="section-heading">Our Approach</h2>
          </AnimateIn>

          <AnimateIn variant="blurUp" delay={0.1}>
            <p
              style={{
                marginTop: 16,
                color: 'var(--body)',
                fontSize: '.95rem',
                lineHeight: 1.7,
                maxWidth: 700,
              }}
            >
              {program.approach}
            </p>
          </AnimateIn>

          {program.stat && (
            <AnimateIn variant="fadeUp" delay={0.15}>
              <div
                style={{
                  marginTop: 24,
                  padding: '16px 24px',
                  background: WARM,
                  borderRadius: 'var(--radius-lg)',
                  display: 'inline-block',
                  fontFamily: DISPLAY,
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: SAGE,
                }}
              >
                {program.stat}
              </div>
            </AnimateIn>
          )}

          <StaggerGroup
            stagger={0.08}
            variant="fadeUp"
            style={{
              marginTop: 32,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: 16,
            }}
          >
            {program.features.map((f, i) => (
              <StaggerItem key={i}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 12,
                    fontSize: '.95rem',
                    color: 'var(--body)',
                    lineHeight: 1.6,
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
                  {f}
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          {program.sectionImages?.[0] && (
            <AnimateIn variant="fadeUp" delay={0.2}>
              <img
                src={program.sectionImages[0]}
                alt={`${program.label} at Silver State`}
                loading="lazy"
                width={800}
                height={450}
                style={{
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '16 / 9',
                  objectFit: 'cover',
                  borderRadius: 'var(--radius-lg)',
                  marginTop: 32,
                  maxWidth: 700,
                }}
              />
            </AnimateIn>
          )}
        </div>
      </section>

      {/* ── 3. DAILY SCHEDULE ── */}
      <section style={{ padding: '64px 0', background: WARM }}>
        <div className="wrap">
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <AnimateIn variant="fadeUp">
              <span className="section-label">Daily Schedule</span>
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
              {scheduleHeading}
            </CharReveal>
          </div>

          <AnimateIn variant="slideUp" delay={0.1}>
            <div
              style={{
                background: 'rgba(255,255,255,0.85)',
                borderRadius: 'var(--radius-lg)',
                padding: '12px 20px',
                border: '1px solid rgba(255,255,255,0.3)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
              }}
            >
              {program.dailySchedule.map((item, i) => (
                <TimelineRow key={i} time={item.time} activity={item.activity} desc={item.desc} />
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── 4. THERAPY MODALITIES ── */}
      <section style={{ padding: '64px 0' }}>
        <div className="wrap">
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <AnimateIn variant="fadeUp">
              <span className="section-label">Evidence-Based Therapies</span>
            </AnimateIn>
            <AnimateIn variant="fadeUp" delay={0.1}>
              <h2 className="section-heading" style={{ marginTop: 8 }}>
                How We Help Your Teen Heal
              </h2>
            </AnimateIn>
          </div>

          <StaggerGroup
            stagger={0.1}
            variant="fadeUp"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 20,
            }}
          >
            {program.therapyModalities.map((slug) => {
              const therapy = therapyBySlug[slug]
              if (!therapy) return null

              const relatedConditionSlug =
                therapy.usedFor.find((conditionSlug) =>
                  program.relatedConditions.includes(conditionSlug),
                ) ?? therapy.usedFor[0]

              return (
                <StaggerItem key={slug}>
                  <div className="bento-card" style={{ height: '100%' }}>
                    <h3
                      style={{
                        fontFamily: DISPLAY,
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        lineHeight: 1.2,
                        marginBottom: 8,
                      }}
                    >
                      {therapy.name}
                    </h3>
                    <p
                      style={{
                        fontSize: '.88rem',
                        color: 'var(--body)',
                        lineHeight: 1.6,
                        marginBottom: 8,
                      }}
                    >
                      {therapy.description}
                    </p>
                    <p
                      style={{
                        fontSize: '.85rem',
                        color: SAGE,
                        lineHeight: 1.5,
                        fontWeight: 500,
                      }}
                    >
                      {therapy.howItHelps}
                    </p>
                    {relatedConditionSlug && (
                      <Link
                        to={`/conditions/${relatedConditionSlug}`}
                        style={{
                          marginTop: 16,
                          color: 'var(--blue)',
                          textDecoration: 'none',
                          fontSize: '.85rem',
                          fontWeight: 600,
                          display: 'inline-flex',
                          alignItems: 'center',
                          minHeight: 44,
                        }}
                      >
                        Learn More About {formatConditionLabel(relatedConditionSlug)} &rarr;
                      </Link>
                    )}
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* ── 5. FAQ ACCORDION ── */}
      <section style={{ padding: '64px 0', background: WARM }}>
        <div className="wrap">
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
              Common Questions About {program.label}
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
              {program.faqs.map((faq, i) => (
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

      {/* ── 6. RELATED CONTENT & CTAs ── */}
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
            {program.relatedPrograms.length > 0 && (
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
                    Other Programs
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {program.relatedPrograms.map((slug) => {
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
            {program.relatedConditions.length > 0 && (
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
                    Conditions We Treat
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {program.relatedConditions.map((slug) => {
                      const label = formatConditionLabel(slug)
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
                            {label} &rarr;
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
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      textDecoration: 'none',
                      minHeight: 44,
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
