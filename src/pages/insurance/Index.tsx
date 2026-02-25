import { useState } from 'react'
import { Link } from 'react-router'
import { insuranceProviders } from '../../data/insurance'
import { site } from '../../data/common'
import { generateMeta } from '../../utils/meta'
import { generateMedicalOrganization, generateFAQPage } from '../../utils/schema'
import useIsMobile from '../../hooks/useIsMobile'
import AnimateIn, { StaggerGroup, StaggerItem } from '../../components/AnimateIn'
import { CharReveal } from '../../components/TextReveal'
import FaqItem from '../../components/FaqItem'
import MagneticButton from '../../components/MagneticButton'
import { IconPhone } from '../../components/Icons'

const DISPLAY = "'Space Grotesk', sans-serif"
const WARM = '#F0EBE3'

export const meta = generateMeta({
  title: 'Insurance Coverage for Teen Treatment | Silver State Treatment Center',
  description:
    'Silver State accepts Aetna, Cigna, BCBS, Ambetter, Humana, UHC, TRICARE, Medicaid, and Anthem for adolescent residential, PHP, and IOP treatment. Call to verify coverage.',
  path: '/insurance',
})

export default function InsuranceHub() {
  const isMobile = useIsMobile()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const orgSchema = generateMedicalOrganization()
  // Add insuranceAccepted to schema
  const insuranceSchema = {
    ...orgSchema,
    insuranceAccepted: insuranceProviders.map((p) => p.name),
  }

  // Combine all provider FAQs for JSON-LD
  const allFaqs = insuranceProviders.flatMap((p) =>
    p.faqs.map((f) => ({ question: f.q, answer: f.a })),
  )
  const faqSchema = generateFAQPage({ questions: allFaqs })

  // General hub-level FAQs
  const hubFaqs = [
    {
      q: 'What insurance does Silver State accept?',
      a: `Silver State accepts most major insurance plans including Aetna, Cigna, Blue Cross Blue Shield, Ambetter, Humana, United Healthcare, TRICARE, Medicaid, and Anthem. We also work with additional providers not listed here. Call ${site.phone} to verify your specific plan.`,
    },
    {
      q: 'How do I verify my insurance coverage?',
      a: `Call Silver State at ${site.phone} and our admissions team can verify your insurance benefits in under 10 minutes. We check your specific plan details, including coverage levels for residential, PHP, and IOP treatment.`,
    },
    {
      q: 'What if my insurance is not listed?',
      a: `Silver State works with many insurance providers beyond those listed on our website. The fastest way to check is to call our admissions team at ${site.phone}. We also offer guidance on payment options for families whose insurance may not cover treatment.`,
    },
    {
      q: 'Does insurance cover residential treatment for teens?',
      a: 'Under the Mental Health Parity and Addiction Equity Act, most health insurance plans are required to cover mental health and substance use disorder treatment at levels comparable to medical and surgical benefits. This includes adolescent residential treatment when medically necessary.',
    },
  ]

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(insuranceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── 1. HERO SECTION ── */}
      <section style={{ padding: '64px 0 48px', background: WARM }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <AnimateIn variant="fadeUp">
            <span className="section-label">Insurance Verification</span>
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
            Insurance Coverage for Adolescent Treatment
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
              Silver State accepts most major insurance plans for adolescent residential, partial
              hospitalization (PHP), and intensive outpatient (IOP) treatment. Our admissions team can
              verify your coverage in under 10 minutes — call today to find out what your plan covers.
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
              Want Answers Now?
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
              We verify insurance in under 10 minutes. Find out what your plan covers today.
            </p>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.2}>
            <MagneticButton>
              <a
                href={site.phoneTel}
                aria-label={`Call Silver State at ${site.phone} to verify insurance`}
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

      {/* ── 3. INSURANCE PROVIDER GRID ── */}
      <section style={{ padding: '64px 0' }}>
        <div className="wrap">
          <AnimateIn variant="fadeUp">
            <h2 className="section-heading" style={{ textAlign: 'center', marginBottom: 32 }}>
              Accepted Insurance Providers
            </h2>
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
            {insuranceProviders.map((provider) => (
              <StaggerItem key={provider.slug}>
                <div
                  className="bento-card"
                  style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {provider.logo && (
                    <img
                      src={provider.logo}
                      alt={`${provider.name} logo`}
                      loading="lazy"
                      style={{
                        maxHeight: 40,
                        width: 'auto',
                        marginBottom: 12,
                        objectFit: 'contain',
                      }}
                    />
                  )}
                  <h3
                    style={{
                      fontFamily: DISPLAY,
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      lineHeight: 1.2,
                      marginBottom: 8,
                    }}
                  >
                    {provider.name}
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
                    {provider.coverageDescription.split('\n')[0]?.slice(0, 200)}...
                  </p>
                  <Link
                    to={`/insurance/${provider.slug}`}
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
                    View {provider.name} Coverage Details &rarr;
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ── 4. ADDITIONAL INFO SECTION ── */}
      <section style={{ padding: '64px 0', background: WARM }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <AnimateIn variant="fadeUp">
            <h2 className="section-heading" style={{ textAlign: 'center', marginBottom: 24 }}>
              What If My Insurance Isn&rsquo;t Listed?
            </h2>
          </AnimateIn>
          <AnimateIn variant="blurUp" delay={0.1}>
            <p
              style={{
                color: 'var(--body)',
                fontSize: '1rem',
                lineHeight: 1.7,
                textAlign: 'center',
                marginBottom: 16,
              }}
            >
              Silver State works with many insurance providers beyond those listed on this page. If
              you don&rsquo;t see your insurance here, that doesn&rsquo;t mean we can&rsquo;t help.
              The fastest way to check is to call our admissions team — we can verify your benefits
              in minutes.
            </p>
          </AnimateIn>
          <AnimateIn variant="blurUp" delay={0.15}>
            <p
              style={{
                color: 'var(--body)',
                fontSize: '1rem',
                lineHeight: 1.7,
                textAlign: 'center',
                marginBottom: 24,
              }}
            >
              We also understand that navigating insurance and treatment costs can feel overwhelming.
              Our team can discuss payment options and help your family explore all available paths
              to getting your teen the care they need.
            </p>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.2}>
            <div style={{ textAlign: 'center' }}>
              <MagneticButton>
                <a
                  href={site.phoneTel}
                  aria-label={`Call Silver State at ${site.phone}`}
                  className="btn"
                  style={{
                    background: 'var(--blue)',
                    color: 'var(--white)',
                    fontSize: '1rem',
                    fontWeight: 600,
                    padding: '14px 28px',
                    minHeight: 48,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
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
              Insurance Questions
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

      {/* ── 6. INTERNAL LINKS / CROSS-NAVIGATION ── */}
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
                  Learn about our residential, PHP, and IOP treatment programs for adolescents.
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
                  Explore the mental health, substance abuse, and eating disorder conditions we
                  specialize in.
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
