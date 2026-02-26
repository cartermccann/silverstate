import { useState } from 'react'
import { Link } from 'react-router'
import type { LocationData } from '../../types'
import { site } from '../../data/common'
import { conditionPages } from '../../data/conditions'
import { generateLocalBusiness, generateFAQPage } from '../../utils/schema'
import useIsMobile from '../../hooks/useIsMobile'
import AnimateIn, { StaggerGroup, StaggerItem } from '../../components/AnimateIn'
import { CharReveal } from '../../components/TextReveal'
import FaqItem from '../../components/FaqItem'
import MagneticButton from '../../components/MagneticButton'
import { IconPhone, IconMapPin, IconArrowRight } from '../../components/Icons'

interface CityPageProps {
  location: LocationData
}

const DISPLAY = 'var(--font-display)'
const WARM = 'var(--warm)'

const programLinks: Record<string, { name: string; path: string }> = {
  residential: { name: 'Residential Treatment', path: '/programs/residential-treatment' },
  php: { name: 'Partial Hospitalization (PHP)', path: '/programs/php' },
  iop: { name: 'Intensive Outpatient (IOP)', path: '/programs/iop' },
}

export default function CityPage({ location }: CityPageProps) {
  const isMobile = useIsMobile()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const localBusinessSchema = generateLocalBusiness({
    url: `/locations/${location.slug}`,
    areaServed: [location.name],
  })

  const conditionLinks = location.relatedConditions
    .map((slug) => {
      const condition = conditionPages.find((c) => c.slug === `${slug}-treatment`)
      if (!condition) return null
      return { name: condition.name, path: `/conditions/${condition.slug}` }
    })
    .filter(Boolean) as { name: string; path: string }[]

  return (
    <>
      {/* JSON-LD: LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* FAQ JSON-LD if applicable */}
      {location.faqEntries && location.faqEntries.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              generateFAQPage({
                questions: location.faqEntries.map((f) => ({ question: f.q, answer: f.a })),
              }),
            ),
          }}
        />
      )}

      {/* ── 1. HERO SECTION ── */}
      <section style={{ padding: '64px 0 48px', background: WARM }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <AnimateIn variant="fadeUp">
            <span className="section-label">Service Area</span>
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
            {`Teen Treatment in ${location.name}`}
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
              {location.serviceAreaDescription}
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── 2. PROXIMITY & FACILITY DETAILS ── */}
      <section style={{ padding: '48px 0' }}>
        <div className="wrap">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: isMobile ? 24 : 40,
            }}
          >
            {/* Distance & Directions */}
            <AnimateIn variant="fadeUp">
              <div>
                <h2
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                    fontWeight: 700,
                    lineHeight: 1.2,
                    marginBottom: 16,
                    color: 'var(--text)',
                  }}
                >
                  Getting to Silver State from {location.name}
                </h2>
                <p
                  style={{
                    color: 'var(--body)',
                    fontSize: '1rem',
                    lineHeight: 1.7,
                    marginBottom: 12,
                  }}
                >
                  <strong style={{ color: 'var(--text)' }}>{location.distanceFromFacility}</strong>
                </p>
                <p
                  style={{
                    color: 'var(--body)',
                    fontSize: '1rem',
                    lineHeight: 1.7,
                  }}
                >
                  {location.directions}
                </p>
              </div>
            </AnimateIn>

            {/* Facility Details Callout */}
            <AnimateIn variant="fadeUp" delay={0.1}>
              <address
                style={{
                  fontStyle: 'normal',
                  background: 'var(--sage-soft)',
                  borderRadius: 'var(--radius-lg)',
                  padding: isMobile ? '24px 20px' : '28px 32px',
                }}
              >
                <h3
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    marginBottom: 12,
                    color: 'var(--text)',
                  }}
                >
                  Silver State Adolescent Treatment Center
                </h3>
                <p
                  style={{
                    color: 'var(--body)',
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 8,
                    marginBottom: 8,
                  }}
                >
                  <IconMapPin
                    style={{
                      width: 16,
                      height: 16,
                      flexShrink: 0,
                      marginTop: 3,
                      color: 'var(--sage)',
                    }}
                  />
                  {site.address}
                </p>
                <p style={{ marginBottom: 8 }}>
                  <a
                    href={site.phoneTel}
                    aria-label={`Call Silver State at ${site.phone}`}
                    style={{
                      color: 'var(--blue)',
                      textDecoration: 'none',
                      fontWeight: 600,
                      fontSize: '1rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      minHeight: 44,
                    }}
                  >
                    <IconPhone style={{ width: 16, height: 16 }} />
                    {site.phone}
                  </a>
                </p>
                <p style={{ color: 'var(--body)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  Ages {site.ages} &middot; Residential, PHP &amp; IOP
                </p>
              </address>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── 3. LOCAL CONTEXT ── */}
      <section style={{ padding: '48px 0', background: WARM }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <AnimateIn variant="fadeUp">
            <h2
              style={{
                fontFamily: DISPLAY,
                fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: 16,
                color: 'var(--text)',
              }}
            >
              Serving {location.name} Families
            </h2>
          </AnimateIn>
          <AnimateIn variant="blurUp" delay={0.1}>
            <p
              style={{
                color: 'var(--body)',
                fontSize: '1rem',
                lineHeight: 1.7,
              }}
            >
              {location.localContext}
            </p>
          </AnimateIn>

          {location.image && (
            <AnimateIn variant="fadeUp" delay={0.2}>
              <img
                src={location.image.src}
                alt={location.image.alt}
                loading="lazy"
                style={{
                  width: '100%',
                  borderRadius: 'var(--radius-lg)',
                  marginTop: 24,
                }}
              />
            </AnimateIn>
          )}
        </div>
      </section>

      {/* ── 4. PROGRAMS AVAILABLE ── */}
      <section style={{ padding: '48px 0' }}>
        <div className="wrap">
          <AnimateIn variant="fadeUp">
            <h2 className="section-heading" style={{ textAlign: 'center', marginBottom: 24 }}>
              Programs Available to {location.name} Families
            </h2>
          </AnimateIn>

          <StaggerGroup
            stagger={0.08}
            variant="fadeUp"
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile
                ? '1fr'
                : `repeat(${Math.min(location.relatedPrograms.length, 3)}, 1fr)`,
              gap: 20,
              maxWidth: 800,
              margin: '0 auto',
            }}
          >
            {location.relatedPrograms.map((slug) => {
              const prog = programLinks[slug]
              if (!prog) return null
              return (
                <StaggerItem key={slug}>
                  <Link
                    to={prog.path}
                    style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                  >
                    <div
                      className="bento-card hover-lift"
                      style={{
                        height: '100%',
                        textAlign: 'center',
                        cursor: 'pointer',
                        minHeight: 44,
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: DISPLAY,
                          fontSize: '1.05rem',
                          fontWeight: 700,
                          color: 'var(--text)',
                          marginBottom: 8,
                        }}
                      >
                        {prog.name}
                      </h3>
                      <span
                        style={{
                          color: 'var(--blue)',
                          fontWeight: 600,
                          fontSize: '.9rem',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 6,
                          minHeight: 44,
                        }}
                      >
                        Learn More
                        <IconArrowRight style={{ width: 14, height: 14 }} />
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              )
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* ── 5. CONDITIONS TREATED ── */}
      {conditionLinks.length > 0 && (
        <section style={{ padding: '48px 0', background: WARM }}>
          <div className="wrap">
            <AnimateIn variant="fadeUp">
              <h2 className="section-heading" style={{ textAlign: 'center', marginBottom: 24 }}>
                Conditions We Treat
              </h2>
            </AnimateIn>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 12,
                justifyContent: 'center',
                maxWidth: 800,
                margin: '0 auto',
              }}
            >
              {conditionLinks.map((cond) => (
                <AnimateIn key={cond.path} variant="fadeUp">
                  <Link
                    to={cond.path}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      minHeight: 44,
                      padding: '8px 16px',
                      background: 'var(--white)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--text)',
                      textDecoration: 'none',
                      fontSize: '.95rem',
                      fontWeight: 500,
                      transition: 'box-shadow 0.2s',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                    }}
                  >
                    {cond.name}
                  </Link>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 6. FAQ (optional) ── */}
      {location.faqEntries && location.faqEntries.length > 0 && (
        <section style={{ padding: '48px 0' }}>
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
                {`Frequently Asked Questions — ${location.name}`}
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
                {location.faqEntries.map((faq, i) => (
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
      )}

      {/* ── 7. PHONE CTA ── */}
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
              Ready to Learn More?
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
              Our admissions team is here to answer your questions and guide your family through the
              next steps.
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

      {/* ── 8. INTERNAL LINKS / CROSS-NAVIGATION ── */}
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
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
              gap: 20,
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
                  Verify your insurance covers treatment at Silver State.
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
                  Admissions
                </h3>
                <p
                  style={{
                    fontSize: '.9rem',
                    color: 'var(--body)',
                    lineHeight: 1.6,
                    marginBottom: 16,
                  }}
                >
                  Learn about our admissions process and what to expect.
                </p>
                <Link
                  to="/admissions"
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
                  Start Admissions &rarr;
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
                  Our Team
                </h3>
                <p
                  style={{
                    fontSize: '.9rem',
                    color: 'var(--body)',
                    lineHeight: 1.6,
                    marginBottom: 16,
                  }}
                >
                  Meet the clinical team caring for your teen.
                </p>
                <Link
                  to="/about/our-team"
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
                  Meet the Team &rarr;
                </Link>
              </div>
            </AnimateIn>

            <AnimateIn variant="fadeUp" delay={0.25}>
              <div className="bento-card" style={{ height: '100%' }}>
                <h3
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: '1rem',
                    fontWeight: 600,
                    marginBottom: 12,
                  }}
                >
                  All Service Areas
                </h3>
                <p
                  style={{
                    fontSize: '.9rem',
                    color: 'var(--body)',
                    lineHeight: 1.6,
                    marginBottom: 16,
                  }}
                >
                  See all communities Silver State serves.
                </p>
                <Link
                  to="/locations"
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
                  View All Areas &rarr;
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  )
}
