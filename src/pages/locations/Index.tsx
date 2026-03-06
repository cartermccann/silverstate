import { Link } from 'react-router'
import { locations, locationHubContent } from '../../data/locations'
import { site } from '../../data/common'
import { facilityData } from '../../data/about'
import { generateMeta } from '../../utils/meta'
import { generateLocalBusiness } from '../../utils/schema'
import useIsMobile from '../../hooks/useIsMobile'
import AnimateIn, { StaggerGroup, StaggerItem } from '../../components/AnimateIn'
import { CharReveal } from '../../components/TextReveal'
import MagneticButton from '../../components/MagneticButton'
import { IconPhone, IconMapPin, IconArrowRight } from '../../components/Icons'

const DISPLAY = 'var(--font-display)'
const WARM = 'var(--warm)'
const localBusinessSchema = generateLocalBusiness({
  areaServed: locations.map((l) => l.name),
})

export const meta = generateMeta({
  title: locationHubContent.metaTitle,
  description: locationHubContent.metaDescription,
  path: '/locations',
  keywords: ['teen treatment Las Vegas', 'adolescent mental health Nevada', 'teen treatment near me', 'Clark County teen treatment', 'Las Vegas behavioral health teens'],
  ogImage: facilityData.images[0]?.src,
})

export default function LocationsHub() {
  const isMobile = useIsMobile()

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      {/* ── 1. HERO SECTION ── */}
      <section style={{ padding: '64px 0 48px', background: WARM }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <AnimateIn variant="fadeUp">
            <span className="section-label">Service Areas</span>
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
            {locationHubContent.title}
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
              {locationHubContent.description}
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── 2. FACILITY DETAILS CALLOUT ── */}
      <section style={{ padding: '48px 0' }}>
        <div className="wrap">
          <AnimateIn variant="fadeUp">
            <address
              style={{
                fontStyle: 'normal',
                background: 'var(--sage-soft)',
                borderRadius: 'var(--radius-lg)',
                padding: isMobile ? '28px 20px' : '36px 40px',
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                gap: isMobile ? 24 : 40,
                alignItems: 'center',
              }}
            >
              <div>
                <h2
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                    fontWeight: 700,
                    lineHeight: 1.2,
                    marginBottom: 12,
                    color: 'var(--text)',
                  }}
                >
                  Silver State Adolescent Treatment Center
                </h2>
                <p
                  style={{
                    color: 'var(--body)',
                    fontSize: '1rem',
                    lineHeight: 1.7,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 8,
                  }}
                >
                  <IconMapPin
                    style={{
                      width: 18,
                      height: 18,
                      flexShrink: 0,
                      marginTop: 3,
                      color: 'var(--sage)',
                    }}
                  />
                  {site.address}
                </p>
                <p style={{ marginTop: 8 }}>
                  <a
                    href={site.phoneTel}
                    aria-label={`Call Silver State at ${site.phone}`}
                    style={{
                      color: 'var(--blue)',
                      textDecoration: 'none',
                      fontWeight: 600,
                      fontSize: '1.05rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      minHeight: 44,
                    }}
                  >
                    <IconPhone style={{ width: 18, height: 18 }} />
                    {site.phone}
                  </a>
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                }}
              >
                <p style={{ color: 'var(--body)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  <strong style={{ color: 'var(--text)' }}>Ages Served:</strong> Adolescents ages{' '}
                  {site.ages}
                </p>
                <p style={{ color: 'var(--body)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  <strong style={{ color: 'var(--text)' }}>Programs:</strong> Residential Treatment
                  &amp; Therapy Programs
                </p>
                <p style={{ color: 'var(--body)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  <strong style={{ color: 'var(--text)' }}>Accredited:</strong> Joint Commission
                  Gold Seal of Approval
                </p>
              </div>
            </address>
          </AnimateIn>
        </div>
      </section>

      {/* ── 3. SERVICE AREA GRID ── */}
      <section style={{ padding: '48px 0 64px' }}>
        <div className="wrap">
          <AnimateIn variant="fadeUp">
            <h2 className="section-heading" style={{ textAlign: 'center', marginBottom: 12 }}>
              Communities We Serve
            </h2>
          </AnimateIn>
          <AnimateIn variant="blurUp" delay={0.1}>
            <p
              style={{
                textAlign: 'center',
                color: 'var(--body)',
                fontSize: '1rem',
                lineHeight: 1.7,
                maxWidth: 640,
                margin: '0 auto 32px',
              }}
            >
              Silver State is proud to serve families across the Las Vegas metropolitan area. Select
              a community below to learn more about our services in your area.
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
            {locations.map((location) => (
              <StaggerItem key={location.slug}>
                <Link
                  to={`/locations/${location.slug}`}
                  style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                >
                  <div
                    className="bento-card hover-lift"
                    style={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      cursor: 'pointer',
                      minHeight: 44,
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: DISPLAY,
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        lineHeight: 1.2,
                        marginBottom: 8,
                        color: 'var(--text)',
                      }}
                    >
                      {location.name}
                    </h3>
                    <p
                      style={{
                        fontSize: '.9rem',
                        color: 'var(--body)',
                        lineHeight: 1.6,
                        marginBottom: 8,
                      }}
                    >
                      {location.distanceFromFacility}
                    </p>
                    <p
                      style={{
                        fontSize: '.9rem',
                        color: 'var(--body)',
                        lineHeight: 1.6,
                        flex: 1,
                        marginBottom: 16,
                      }}
                    >
                      {location.description.slice(0, 160)}...
                    </p>
                    <span
                      style={{
                        color: 'var(--blue)',
                        fontWeight: 600,
                        fontSize: '.9rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        padding: '8px 0',
                        minHeight: 44,
                        lineHeight: '28px',
                      }}
                    >
                      Learn More About {location.name}
                      <IconArrowRight style={{ width: 14, height: 14 }} />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ── 4. PHONE CTA SECTION ── */}
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
              Not Sure If We Serve Your Area?
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
              Silver State serves families throughout Clark County and the greater Las Vegas area.
              Call us to learn more.
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

      {/* ── 5. INTERNAL LINKS / CROSS-NAVIGATION ── */}
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
                  Learn about our residential treatment and therapy programs for adolescents.
                </p>
                <Link
                  to="/programs/residential-treatment"
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
                  style={{
                    textAlign: 'center',
                    justifyContent: 'center',
                    minHeight: 44,
                    display: 'inline-flex',
                    alignItems: 'center',
                  }}
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
                      display: 'inline-flex',
                      alignItems: 'center',
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
