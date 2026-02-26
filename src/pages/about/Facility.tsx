import { Link } from 'react-router'
import { facilityData, clinicalReviewer } from '../../data/about'
import { site } from '../../data/common'
import { generateMeta } from '../../utils/meta'
import { generateMedicalOrganization, generateLocalBusiness } from '../../utils/schema'
import useIsMobile from '../../hooks/useIsMobile'
import AnimateIn, { StaggerGroup, StaggerItem } from '../../components/AnimateIn'
import { CharReveal } from '../../components/TextReveal'
import MagneticButton from '../../components/MagneticButton'
import { IconPhone, IconShield, IconUsers, IconCheck, IconMapPin } from '../../components/Icons'

const DISPLAY = 'var(--font-display)'
const WARM = 'var(--warm)'

// --- JSON-LD ---

const orgSchema = generateMedicalOrganization()
const localSchema = generateLocalBusiness()

export const meta = generateMeta({
  title: facilityData.metaTitle,
  description: facilityData.metaDescription,
  path: '/about/facility',
  ogImage: facilityData.images[0]?.src,
})

export const handle = {
  breadcrumb: { label: 'Our Facility', parent: '/about/our-team' },
}

export default function Facility() {
  const isMobile = useIsMobile()

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
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
            Our Facility
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
              {facilityData.description}
            </p>
          </AnimateIn>

          <AnimateIn variant="fadeUp" delay={0.3}>
            <div style={{ marginTop: 20, display: 'grid', gap: 8 }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  color: 'var(--body)',
                  fontSize: '.95rem',
                }}
              >
                <IconMapPin style={{ width: 18, height: 18, flexShrink: 0 }} />
                <span>{site.address}</span>
              </div>
              <a
                href={site.phoneTel}
                aria-label={`Call Silver State at ${site.phone}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  color: 'var(--blue)',
                  fontWeight: 600,
                  textDecoration: 'none',
                  minHeight: 44,
                }}
              >
                <IconPhone style={{ width: 18, height: 18, flexShrink: 0 }} />
                {site.phone} (24/7)
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── 2. KEY CALLOUTS ── */}
      <section style={{ padding: '48px 0' }}>
        <div className="wrap">
          <StaggerGroup
            stagger={0.06}
            variant="fadeUp"
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
              gap: 20,
            }}
          >
            <StaggerItem>
              <div
                className="bento-card"
                style={{
                  height: '100%',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <IconUsers style={{ width: 28, height: 28, color: 'var(--blue)' }} />
                <span
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: 'var(--blue)',
                  }}
                >
                  4:1
                </span>
                <h2
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: '.9rem',
                    fontWeight: 600,
                    lineHeight: 1.3,
                  }}
                >
                  Staff-to-Client Ratio
                </h2>
                <p style={{ fontSize: '.8rem', color: 'var(--body)', lineHeight: 1.5 }}>
                  Individualized attention in a safe, supportive therapeutic setting.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div
                className="bento-card"
                style={{
                  height: '100%',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <IconShield style={{ width: 28, height: 28, color: 'var(--blue)' }} />
                <span
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: 'var(--blue)',
                  }}
                >
                  24/7
                </span>
                <h2
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: '.9rem',
                    fontWeight: 600,
                    lineHeight: 1.3,
                  }}
                >
                  Clinical Support
                </h2>
                <p style={{ fontSize: '.8rem', color: 'var(--body)', lineHeight: 1.5 }}>
                  Round-the-clock nursing and clinical staff for adolescent safety.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div
                className="bento-card"
                style={{
                  height: '100%',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <IconCheck style={{ width: 28, height: 28, color: 'var(--blue)' }} />
                <span
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--blue)',
                  }}
                >
                  Joint Commission
                </span>
                <h2
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: '.9rem',
                    fontWeight: 600,
                    lineHeight: 1.3,
                  }}
                >
                  Gold Seal Accredited
                </h2>
                <p style={{ fontSize: '.8rem', color: 'var(--body)', lineHeight: 1.5 }}>
                  Nationally recognized standard of clinical quality and patient safety.
                </p>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* ── 3. FACILITY IMAGES ── */}
      <section style={{ padding: '48px 0', background: WARM }}>
        <div className="wrap">
          <AnimateIn variant="fadeUp">
            <h2 className="section-heading" style={{ textAlign: 'center', marginBottom: 32 }}>
              Inside Silver State
            </h2>
          </AnimateIn>

          <StaggerGroup
            stagger={0.08}
            variant="fadeUp"
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: 20,
            }}
          >
            {facilityData.images.map((img) => (
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

      {/* ── 4. AMENITIES ── */}
      <section style={{ padding: '64px 0' }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <AnimateIn variant="fadeUp">
            <h2 className="section-heading" style={{ textAlign: 'center', marginBottom: 32 }}>
              Facility Amenities
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
            {facilityData.features.map((feature, index) => (
              <AnimateIn key={feature} as="li" variant="fadeUp" delay={0.06 * index}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '12px 16px',
                    background: WARM,
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

      {/* ── 5. PHONE CTA ── */}
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
              Schedule a Facility Tour
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
              See our treatment environment firsthand. Call to arrange a visit.
            </p>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.2}>
            <MagneticButton>
              <a
                href={site.phoneTel}
                aria-label={`Call Silver State at ${site.phone} to schedule a facility tour`}
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

      {/* ── 6. CLINICAL REVIEWER ── */}
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

      {/* ── 7. CROSS-NAVIGATION ── */}
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
                  Youth Academy
                </h3>
                <p
                  style={{
                    fontSize: '.9rem',
                    color: 'var(--body)',
                    lineHeight: 1.6,
                    marginBottom: 16,
                  }}
                >
                  On-site accredited academics so your teen never falls behind in school.
                </p>
                <Link
                  to="/about/youth-academy"
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
                  View Academy &rarr;
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
