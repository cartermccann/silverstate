import { useEffect } from 'react'
import { Link } from 'react-router'
import { teamMembers, keyDifferentiators, clinicalReviewer } from '../../data/about'
import { site } from '../../data/common'
import { generateMeta } from '../../utils/meta'
import { generatePhysician } from '../../utils/schema'
import useIsMobile from '../../hooks/useIsMobile'
import AnimateIn, { StaggerGroup, StaggerItem } from '../../components/AnimateIn'
import { CharReveal } from '../../components/TextReveal'
import MagneticButton from '../../components/MagneticButton'
import { IconPhone, IconStar, IconUsers, IconHeart, IconGrad, IconShield } from '../../components/Icons'

const DISPLAY = "'Space Grotesk', sans-serif"
const WARM = '#F0EBE3'

// --- SEO Meta ---

const physicianSchemas = teamMembers.map((m) =>
  generatePhysician({
    name: m.name,
    credentials: m.credentials,
    title: m.title,
    description: m.professionalBackground,
    image: m.photoUrl,
  }),
)

export const meta = generateMeta({
  title: 'Our Clinical Team',
  description:
    'Meet Silver State\u2019s clinical leadership \u2014 board-certified psychiatrists, licensed therapists, and specialized adolescent treatment professionals. Joint Commission Gold Seal accredited.',
  path: '/about/our-team',
  jsonLd: physicianSchemas,
})

export const handle = {
  breadcrumb: { label: 'Our Team', parent: '/' },
}

// --- Differentiator icon mapping ---

const diffIcons = [
  <IconStar style={{ width: 28, height: 28, color: 'var(--blue)' }} />,
  <IconUsers style={{ width: 28, height: 28, color: 'var(--blue)' }} />,
  <IconHeart style={{ width: 28, height: 28, color: 'var(--blue)' }} />,
  <IconGrad style={{ width: 28, height: 28, color: 'var(--blue)' }} />,
  <IconShield style={{ width: 28, height: 28, color: 'var(--blue)' }} />,
]

export default function Team() {
  const isMobile = useIsMobile()

  useEffect(() => {
    const prevTitle = document.title
    const addedElements: HTMLElement[] = []

    for (const tag of meta) {
      if (tag.title) {
        document.title = tag.title
      } else if (tag.tagName === 'link' && tag.rel && tag.href) {
        let el = document.querySelector<HTMLLinkElement>(`link[rel="${tag.rel}"]`)
        if (!el) {
          el = document.createElement('link')
          el.rel = tag.rel
          document.head.appendChild(el)
          addedElements.push(el)
        }
        el.href = tag.href
      } else if (tag.name) {
        let el = document.querySelector<HTMLMetaElement>(`meta[name="${tag.name}"]`)
        if (!el) {
          el = document.createElement('meta')
          el.name = tag.name
          document.head.appendChild(el)
          addedElements.push(el)
        }
        el.content = tag.content ?? ''
      } else if (tag.property) {
        let el = document.querySelector<HTMLMetaElement>(`meta[property="${tag.property}"]`)
        if (!el) {
          el = document.createElement('meta')
          el.setAttribute('property', tag.property)
          document.head.appendChild(el)
          addedElements.push(el)
        }
        el.content = tag.content ?? ''
      }
    }

    return () => {
      document.title = prevTitle
      for (const el of addedElements) {
        el.remove()
      }
    }
  }, [])

  return (
    <>
      {/* JSON-LD for each team member */}
      {physicianSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

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
            Our Clinical Team
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
              Silver State&rsquo;s multidisciplinary team combines board-certified clinicians,
              licensed therapists, and dedicated support staff to deliver evidence-based adolescent
              treatment. Every member of our team is committed to helping teens ages 11&ndash;17
              build resilience, develop healthy coping skills, and move toward lasting recovery.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── 2. KEY DIFFERENTIATORS ── */}
      <section style={{ padding: '64px 0' }}>
        <div className="wrap">
          <AnimateIn variant="fadeUp">
            <h2 className="section-heading" style={{ textAlign: 'center', marginBottom: 32 }}>
              Why Silver State
            </h2>
          </AnimateIn>

          <StaggerGroup
            stagger={0.06}
            variant="fadeUp"
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(5, 1fr)',
              gap: 16,
            }}
          >
            {keyDifferentiators.map((diff, i) => (
              <StaggerItem key={diff.title}>
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
                  {diffIcons[i]}
                  <span
                    style={{
                      fontFamily: DISPLAY,
                      fontSize: 'clamp(1.3rem, 2vw, 1.6rem)',
                      fontWeight: 700,
                      color: 'var(--blue)',
                      lineHeight: 1.2,
                    }}
                  >
                    {diff.value}
                  </span>
                  <h3
                    style={{
                      fontFamily: DISPLAY,
                      fontSize: '.85rem',
                      fontWeight: 600,
                      lineHeight: 1.3,
                    }}
                  >
                    {diff.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '.8rem',
                      color: 'var(--body)',
                      lineHeight: 1.5,
                    }}
                  >
                    {diff.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ── 3. TEAM PROFILES ── */}
      <section style={{ padding: '64px 0', background: WARM }}>
        <div className="wrap">
          <AnimateIn variant="fadeUp">
            <h2 className="section-heading" style={{ textAlign: 'center', marginBottom: 40 }}>
              Meet Our Leadership
            </h2>
          </AnimateIn>

          <StaggerGroup
            stagger={0.08}
            variant="fadeUp"
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: 24,
            }}
          >
            {teamMembers.map((member) => (
              <StaggerItem key={member.slug}>
                <div
                  className="bento-card"
                  style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: 20,
                    alignItems: 'flex-start',
                  }}
                >
                  <img
                    src={member.photoUrl}
                    alt={`Portrait of ${member.name}, ${member.title}`}
                    loading="lazy"
                    style={{
                      width: isMobile ? '100%' : 140,
                      height: isMobile ? 200 : 170,
                      objectFit: 'cover',
                      borderRadius: 'var(--radius-md)',
                      flexShrink: 0,
                      background: 'var(--cream)',
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <h3
                      style={{
                        fontFamily: DISPLAY,
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        lineHeight: 1.2,
                        marginBottom: 4,
                      }}
                    >
                      {member.name}
                    </h3>
                    <p
                      style={{
                        fontSize: '.9rem',
                        color: 'var(--blue)',
                        fontWeight: 600,
                        marginBottom: 4,
                      }}
                    >
                      {member.title}
                      {member.credentials && ` \u2014 ${member.credentials}`}
                    </p>
                    {member.licenseNumbers.length > 0 && (
                      <p
                        style={{
                          fontSize: '.8rem',
                          color: 'var(--body)',
                          marginBottom: 8,
                        }}
                      >
                        {member.licenseNumbers.map((lic) => `License: ${lic}`).join(' | ')}
                      </p>
                    )}
                    {member.specializations.length > 0 && (
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: 6,
                          marginBottom: 10,
                        }}
                      >
                        {member.specializations.map((spec) => (
                          <span
                            key={spec}
                            style={{
                              fontSize: '.75rem',
                              padding: '3px 10px',
                              background: 'rgba(45,80,100,0.08)',
                              borderRadius: 20,
                              color: 'var(--text)',
                              lineHeight: 1.4,
                            }}
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    )}
                    <p
                      style={{
                        fontSize: '.85rem',
                        color: 'var(--body)',
                        lineHeight: 1.6,
                      }}
                    >
                      {member.professionalBackground}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ── 4. PHONE CTA ── */}
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
              Questions About Our Team?
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
              Our admissions team can connect you with the right clinician for your teen&rsquo;s
              needs.
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

      {/* ── 5. CLINICAL REVIEWER ATTRIBUTION ── */}
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
            <p
              style={{
                fontSize: '.85rem',
                color: 'var(--body)',
              }}
            >
              {clinicalReviewer.title}
            </p>
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
                  Residential Treatment
                </h3>
                <p
                  style={{
                    fontSize: '.9rem',
                    color: 'var(--body)',
                    lineHeight: 1.6,
                    marginBottom: 16,
                  }}
                >
                  24/7 structured residential care for adolescents with our full clinical team.
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
                  View Program &rarr;
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
                  Tour our therapeutic environment designed specifically for adolescent recovery.
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
                  to="/admissions"
                  className="btn btn-primary"
                  style={{ textAlign: 'center', justifyContent: 'center' }}
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
