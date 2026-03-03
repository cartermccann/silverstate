import { useState } from 'react'
import { Link } from 'react-router'
import { allPrograms } from '../../data/programs'
import { therapyModalities } from '../../data/therapies'
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
  title: 'Treatment Programs for Teens | Residential, PHP & IOP | Silver State',
  description:
    "Explore Silver State's adolescent treatment programs: Residential, PHP, and IOP for teens ages 11-17 in Las Vegas. Evidence-based care with a 4:1 staff-to-client ratio.",
  path: '/programs',
  keywords: ['teen treatment programs Las Vegas', 'adolescent residential treatment', 'teen PHP program', 'teen IOP program', 'mental health programs for teenagers'],
})

export default function ProgramsHub() {
  const isMobile = useIsMobile()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const orgSchema = generateMedicalOrganization()

  const hubFaqs = [
    {
      q: 'What levels of care does Silver State offer?',
      a: 'We offer three levels of care: Residential Treatment (24/7 care, 30\u201390 days), Partial Hospitalization Program (full-day programming with evenings at home, 4\u20136 weeks), and Intensive Outpatient Program (after-school sessions 3 days per week, 6\u201312 weeks). Each level provides evidence-based therapy tailored to your teen\u2019s needs.',
    },
    {
      q: 'How do you determine which program is right for my teen?',
      a: `Our admissions team conducts a free, confidential clinical assessment to evaluate your teen's symptoms, safety needs, and daily functioning. Based on this assessment, we recommend the most appropriate level of care. Call ${site.phone} to get started.`,
    },
    {
      q: 'Can my teen move between levels of care?',
      a: 'Yes. Our step-down model is designed for smooth transitions. Many teens begin in residential treatment and gradually move to PHP, then IOP as they progress. Your care team monitors progress and adjusts the level of care as needed.',
    },
    {
      q: 'What ages do you treat?',
      a: 'Silver State treats adolescents ages 11 through 17. All of our programs, clinical approaches, and environments are designed specifically for this age group \u2014 not adapted from adult programs.',
    },
  ]

  const faqSchema = generateFAQPage({
    questions: hubFaqs.map((faq) => ({ question: faq.q, answer: faq.a })),
  })

  const therapyPreview = therapyModalities.slice(0, 6)

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
            <span className="section-label">Treatment Programs</span>
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
            Our Treatment Programs
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
              Silver State offers a full continuum of evidence-based treatment for adolescents ages
              11&ndash;17. From around-the-clock residential care to flexible outpatient sessions,
              each level is designed to meet your teen where they are &mdash; and help them move
              forward.
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
              Need Help Choosing the Right Program?
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
              Our admissions team can help you understand your teen&rsquo;s needs and recommend the
              right level of care. Call {site.phone} for a free, confidential assessment.
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

      {/* ── 3. LEVELS OF CARE ── */}
      <section style={{ padding: '64px 0' }}>
        <div className="wrap">
          <AnimateIn variant="fadeUp">
            <span className="section-label">Levels of Care</span>
            <h2
              className="section-heading"
              style={{ marginTop: 8, marginBottom: 8 }}
            >
              Three Levels, One Continuum
            </h2>
          </AnimateIn>
          <AnimateIn variant="blurUp" delay={0.1}>
            <p
              style={{
                color: 'var(--body)',
                fontSize: '1rem',
                lineHeight: 1.7,
                maxWidth: 700,
                marginBottom: 40,
              }}
            >
              Each level of care builds on the last, providing a seamless step-down path from
              intensive residential support to flexible outpatient sessions.
            </p>
          </AnimateIn>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {allPrograms.map((program, i) => (
              <AnimateIn key={program.slug} variant="fadeUp" delay={i * 0.1}>
                <div
                  className="bento-card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16,
                    padding: isMobile ? '24px 20px' : '32px 36px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: isMobile ? 'column' : 'row',
                      justifyContent: 'space-between',
                      alignItems: isMobile ? 'flex-start' : 'center',
                      gap: 12,
                    }}
                  >
                    <h2
                      style={{
                        fontFamily: DISPLAY,
                        fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
                        fontWeight: 700,
                        lineHeight: 1.2,
                        margin: 0,
                      }}
                    >
                      {program.label}
                    </h2>
                    <span
                      style={{
                        fontSize: '.85rem',
                        color: 'var(--body)',
                        opacity: 0.7,
                        whiteSpace: isMobile ? 'normal' : 'nowrap',
                      }}
                    >
                      {program.duration}
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: '.95rem',
                      color: 'var(--body)',
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {program.overview.slice(0, 250)}...
                  </p>

                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'grid',
                      gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                      gap: '8px 24px',
                    }}
                  >
                    {program.features.slice(0, 4).map((feature) => (
                      <li
                        key={feature}
                        style={{
                          fontSize: '.9rem',
                          color: 'var(--body)',
                          lineHeight: 1.5,
                          paddingLeft: 20,
                          position: 'relative',
                        }}
                      >
                        <span
                          style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            color: 'var(--sage)',
                            fontWeight: 700,
                          }}
                        >
                          +
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: isMobile ? 'column' : 'row',
                      alignItems: isMobile ? 'flex-start' : 'center',
                      gap: 16,
                      marginTop: 4,
                    }}
                  >
                    {program.stat && (
                      <span
                        style={{
                          background: WARM,
                          fontFamily: DISPLAY,
                          color: 'var(--sage)',
                          fontWeight: 700,
                          fontSize: '.85rem',
                          padding: '6px 14px',
                          borderRadius: 'var(--radius-sm)',
                          display: 'inline-block',
                        }}
                      >
                        {program.stat}
                      </span>
                    )}
                    <Link
                      to={`/programs/${program.slug}`}
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
                      Learn About {program.label} &rarr;
                    </Link>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. THERAPY PROGRAMS ── */}
      <section style={{ padding: '64px 0', background: WARM }}>
        <div className="wrap">
          <AnimateIn variant="fadeUp">
            <span className="section-label">Therapy &amp; Treatment Modalities</span>
            <h2
              className="section-heading"
              style={{ marginTop: 8, marginBottom: 8 }}
            >
              17+ Evidence-Based Therapies
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
              Every teen&rsquo;s treatment plan includes a personalized combination of therapeutic
              modalities. Our licensed clinicians specialize in adolescent-focused approaches backed
              by clinical research.
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
            {therapyPreview.map((therapy) => (
              <StaggerItem key={therapy.slug}>
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
                    {therapy.shortName || therapy.name}
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
                    {therapy.description.slice(0, 120)}...
                  </p>
                  <Link
                    to={`/programs/${therapy.slug === 'cpi' ? 'crisis-prevention-intervention' : therapy.slug}`}
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
                    Learn About {therapy.shortName || therapy.name} &rarr;
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <AnimateIn variant="fadeUp" delay={0.3}>
            <div style={{ textAlign: 'center', marginTop: 32 }}>
              <Link
                to="/programs/therapy-programs"
                style={{
                  color: 'var(--blue)',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '1rem',
                  display: 'inline-block',
                  padding: '8px 0',
                  minHeight: 44,
                  lineHeight: '28px',
                }}
              >
                View All Therapy Programs &rarr;
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── 5. FAQS ── */}
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
              Program Questions
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

      {/* ── 6. CROSS-NAVIGATION ── */}
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
                  Conditions We Treat
                </h3>
                <p
                  style={{
                    fontSize: '.9rem',
                    color: 'var(--body)',
                    lineHeight: 1.6,
                    marginBottom: 16,
                  }}
                >
                  Explore the mental health conditions, substance abuse disorders, and eating
                  disorders we treat for adolescents ages 11&ndash;17.
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
