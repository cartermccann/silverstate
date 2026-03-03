import { Link } from 'react-router'
import { youthAcademyData, youthAcademyFeatures, clinicalReviewer } from '../../data/about'
import { site } from '../../data/common'
import { generateMeta } from '../../utils/meta'
import useIsMobile from '../../hooks/useIsMobile'
import AnimateIn, { StaggerGroup, StaggerItem } from '../../components/AnimateIn'
import { CharReveal } from '../../components/TextReveal'
import MagneticButton from '../../components/MagneticButton'
import { IconPhone, IconGrad, IconCheck } from '../../components/Icons'

const DISPLAY = 'var(--font-display)'
const WARM = 'var(--warm)'

// --- JSON-LD: EducationalOrganization ---

const academySchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Silver State Youth Academy',
  description: youthAcademyData.description,
  parentOrganization: {
    '@type': 'MedicalOrganization',
    name: site.name,
    url: 'https://www.silverstatetreatment.com',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '8225 W Robindale Rd',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89113',
    addressCountry: 'US',
  },
}

export const meta = generateMeta({
  title: youthAcademyData.metaTitle,
  description: youthAcademyData.metaDescription,
  path: '/about/youth-academy',
  keywords: ['teen treatment academics', 'on-site school treatment center', 'adolescent education during treatment', 'accredited academics teen treatment', 'Silver State Youth Academy'],
  ogImage: youthAcademyData.images[0]?.src,
})

export const handle = {
  breadcrumb: { label: 'Youth Academy', parent: '/about/our-team' },
}

export default function YouthAcademy() {
  const isMobile = useIsMobile()

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(academySchema) }}
      />

      {/* ── 1. HERO ── */}
      <section style={{ padding: '64px 0 48px', background: WARM }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <AnimateIn variant="fadeUp">
            <span className="section-label">About Silver State</span>
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
            Silver State Youth Academy
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
              {youthAcademyData.description}
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── 2. KEY DIFFERENTIATOR CALLOUT ── */}
      <section style={{ padding: '48px 0', background: 'var(--blue)', color: 'var(--white)' }}>
        <div className="wrap" style={{ textAlign: 'center', maxWidth: 700 }}>
          <AnimateIn variant="fadeUp">
            <IconGrad style={{ width: 36, height: 36, color: 'var(--white)', marginBottom: 12 }} />
            <h2
              style={{
                fontFamily: DISPLAY,
                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                fontWeight: 700,
                color: 'var(--white)',
                marginBottom: 12,
              }}
            >
              Treatment Shouldn&rsquo;t Mean Falling Behind
            </h2>
          </AnimateIn>
          <AnimateIn variant="blurUp" delay={0.1}>
            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.7,
                color: 'rgba(255,255,255,0.9)',
              }}
            >
              Most treatment centers disrupt academic progress. Silver State Youth Academy is
              different &mdash; our on-site, fully accredited program means your teen continues
              their education alongside treatment, with all credits transferring back to their home
              school.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── 3. ACADEMY FEATURES ── */}
      <section style={{ padding: '64px 0' }}>
        <div className="wrap">
          <AnimateIn variant="fadeUp">
            <h2 className="section-heading" style={{ textAlign: 'center', marginBottom: 32 }}>
              Academic Program Features
            </h2>
          </AnimateIn>

          <StaggerGroup
            stagger={0.06}
            variant="fadeUp"
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: 20,
              maxWidth: 800,
              margin: '0 auto',
            }}
          >
            {youthAcademyFeatures.map((feature) => (
              <StaggerItem key={feature.title}>
                <div
                  className="bento-card"
                  style={{
                    height: '100%',
                    display: 'flex',
                    gap: 14,
                    alignItems: 'flex-start',
                  }}
                >
                  <IconGrad
                    style={{
                      width: 22,
                      height: 22,
                      color: 'var(--blue)',
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  />
                  <div>
                    <h3
                      style={{
                        fontFamily: DISPLAY,
                        fontSize: '1rem',
                        fontWeight: 600,
                        lineHeight: 1.3,
                        marginBottom: 4,
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '.9rem',
                        color: 'var(--body)',
                        lineHeight: 1.6,
                      }}
                    >
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ── 4. WHAT'S INCLUDED ── */}
      <section style={{ padding: '64px 0', background: WARM }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <AnimateIn variant="fadeUp">
            <h2 className="section-heading" style={{ textAlign: 'center', marginBottom: 32 }}>
              What&rsquo;s Included
            </h2>
          </AnimateIn>

          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: 12,
            }}
          >
            {youthAcademyData.features.map((feature, index) => (
              <AnimateIn key={feature} as="li" variant="fadeUp" delay={0.06 * index}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '12px 16px',
                    background: 'rgba(255,255,255,0.7)',
                    borderRadius: 'var(--radius-md)',
                  }}
                >
                  <IconCheck
                    style={{ width: 18, height: 18, color: 'var(--blue)', flexShrink: 0 }}
                  />
                  <span style={{ fontSize: '.95rem', color: 'var(--body)', lineHeight: 1.5 }}>
                    {feature}
                  </span>
                </div>
              </AnimateIn>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 5. ACADEMY IMAGES ── */}
      <section style={{ padding: '64px 0' }}>
        <div className="wrap">
          <AnimateIn variant="fadeUp">
            <h2 className="section-heading" style={{ textAlign: 'center', marginBottom: 32 }}>
              Inside the Academy
            </h2>
          </AnimateIn>

          <StaggerGroup
            stagger={0.08}
            variant="fadeUp"
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: 20,
              maxWidth: 900,
              margin: '0 auto',
            }}
          >
            {youthAcademyData.images.map((img) => (
              <StaggerItem key={img.alt}>
                <div
                  style={{
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    background: 'var(--cream)',
                    aspectRatio: '16 / 10',
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    width={640}
                    height={400}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ── 6. PHONE CTA ── */}
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
              Questions About Academics During Treatment?
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
              Our admissions team can explain how credits transfer and what your teen&rsquo;s
              academic schedule will look like.
            </p>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.2}>
            <MagneticButton>
              <a
                href={site.phoneTel}
                aria-label={`Call Silver State at ${site.phone} to learn about the Youth Academy`}
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

      {/* ── 7. CLINICAL REVIEWER ── */}
      <section style={{ padding: '48px 0' }}>
        <div className="wrap" style={{ maxWidth: 800, textAlign: 'center' }}>
          <AnimateIn variant="fadeUp">
            <p
              style={{
                fontSize: '.85rem',
                color: 'var(--body)',
                lineHeight: 1.6,
                marginBottom: 8,
              }}
            >
              Page reviewed by
            </p>
            <p
              style={{
                fontFamily: DISPLAY,
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--text)',
                lineHeight: 1.4,
              }}
            >
              {clinicalReviewer.name}, {clinicalReviewer.credentials}
            </p>
            <p style={{ fontSize: '.85rem', color: 'var(--body)' }}>{clinicalReviewer.title}</p>
          </AnimateIn>
        </div>
      </section>

      {/* ── 8. CROSS-NAVIGATION ── */}
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
                  Our Clinical Team
                </h3>
                <p
                  style={{
                    fontSize: '.9rem',
                    color: 'var(--body)',
                    lineHeight: 1.6,
                    marginBottom: 16,
                  }}
                >
                  Meet the board-certified clinicians and licensed therapists who lead treatment.
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
                  Meet Our Team &rarr;
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
                  Our Facility
                </h3>
                <p
                  style={{
                    fontSize: '.9rem',
                    color: 'var(--body)',
                    lineHeight: 1.6,
                    marginBottom: 16,
                  }}
                >
                  Tour the therapeutic environment designed specifically for adolescent recovery.
                </p>
                <Link
                  to="/about/facility"
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
                  View Facility &rarr;
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
                  to="/programs/residential-treatment"
                  style={{
                    color: 'var(--blue)',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '.9rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    minHeight: 44,
                  }}
                >
                  Explore Our Programs &rarr;
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
