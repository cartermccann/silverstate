import { useState } from 'react'
import { Link } from 'react-router'
import { admissionsSteps, admissionsFaqs, admissionsPageMeta } from '../../data/admissions'
import { site } from '../../data/common'
import { generateMeta } from '../../utils/meta'
import { generateFAQPage } from '../../utils/schema'
import useIsMobile from '../../hooks/useIsMobile'
import AnimateIn, { StaggerGroup, StaggerItem } from '../../components/AnimateIn'
import { CharReveal } from '../../components/TextReveal'
import FaqItem from '../../components/FaqItem'
import MagneticButton from '../../components/MagneticButton'
import { IconPhone, IconArrowRight } from '../../components/Icons'

const DISPLAY = 'var(--font-display)'
const WARM = 'var(--warm)'

const faqSchema = generateFAQPage({
  questions: admissionsFaqs.map((f) => ({ question: f.q, answer: f.a })),
})

export const meta = generateMeta({
  title: admissionsPageMeta.title,
  description: admissionsPageMeta.description,
  path: '/admissions',
  keywords: ['teen treatment admissions', 'adolescent treatment enrollment', 'residential treatment admission process', 'teen mental health intake', 'Silver State admissions'],
  ogImage: admissionsPageMeta.ogImage,
})

export default function Process() {
  const isMobile = useIsMobile()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── 1. HERO SECTION ── */}
      <section style={{ padding: '64px 0 48px', background: WARM }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <AnimateIn variant="fadeUp">
            <span className="section-label">Admissions</span>
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
            How to Get Started
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
              Taking the first step is the hardest part — and you&rsquo;ve already started by being
              here. Our admissions process is simple, supportive, and designed to get your teen the
              help they need as quickly as possible.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── 2. PHONE CTA ── */}
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
              Our Admissions Team Is Available 24/7
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
              Ready to take the first step? Call now — no waitlists, no judgment.
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

      {/* ── 3. STEP-BY-STEP PROCESS ── */}
      <section style={{ padding: '64px 0' }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <AnimateIn variant="fadeUp">
            <h2 className="section-heading" style={{ textAlign: 'center', marginBottom: 40 }}>
              Four Simple Steps
            </h2>
          </AnimateIn>

          <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <StaggerGroup stagger={0.1} variant="fadeUp">
              {admissionsSteps.map((step) => (
                <StaggerItem key={step.step}>
                  <li
                    style={{
                      display: 'grid',
                      gridTemplateColumns: isMobile ? '48px 1fr' : '64px 1fr',
                      gap: isMobile ? 16 : 24,
                      marginBottom: 40,
                      alignItems: 'start',
                    }}
                  >
                    <div
                      style={{
                        width: isMobile ? 48 : 64,
                        height: isMobile ? 48 : 64,
                        borderRadius: '50%',
                        background: 'var(--sage-soft)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: DISPLAY,
                        fontSize: isMobile ? '1.25rem' : '1.5rem',
                        fontWeight: 700,
                        color: 'var(--sage)',
                        flexShrink: 0,
                      }}
                    >
                      {step.step}
                    </div>
                    <div>
                      <h3
                        style={{
                          fontFamily: DISPLAY,
                          fontSize: 'clamp(1.1rem, 1.5vw, 1.3rem)',
                          fontWeight: 700,
                          lineHeight: 1.2,
                          marginBottom: 8,
                          color: 'var(--text)',
                        }}
                      >
                        {step.title}
                      </h3>
                      <p
                        style={{
                          color: 'var(--body)',
                          fontSize: '1rem',
                          lineHeight: 1.7,
                        }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </li>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </ol>
        </div>
      </section>

      {/* ── 4. FAQ SECTION ── */}
      <section id="faqs" style={{ padding: '64px 0', background: WARM }}>
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
              Common Admissions Questions
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
              {admissionsFaqs.map((faq, i) => (
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

      {/* ── 5. INTERNAL LINKS / CROSS-NAVIGATION ── */}
      <section style={{ padding: '64px 0' }}>
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
                  Check if your insurance is accepted. We verify coverage in under 10 minutes.
                </p>
                <Link
                  to="/insurance"
                  style={{
                    color: 'var(--blue)',
                    textDecoration: 'none',
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
                  Verify Insurance
                  <IconArrowRight style={{ width: 14, height: 14 }} />
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
                  Learn about our residential, PHP, and IOP treatment programs for teens.
                </p>
                <Link
                  to="/programs/residential-treatment"
                  style={{
                    color: 'var(--blue)',
                    textDecoration: 'none',
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
                  View Programs
                  <IconArrowRight style={{ width: 14, height: 14 }} />
                </Link>
              </div>
            </AnimateIn>

            <AnimateIn variant="fadeUp" delay={0.3}>
              <div className="bento-card" style={{ height: '100%' }}>
                <h3
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: '1rem',
                    fontWeight: 600,
                    marginBottom: 12,
                  }}
                >
                  Contact Us
                </h3>
                <p
                  style={{
                    fontSize: '.9rem',
                    color: 'var(--body)',
                    lineHeight: 1.6,
                    marginBottom: 16,
                  }}
                >
                  Have questions? Send us a message and our team will get back to you.
                </p>
                <Link
                  to="/contact"
                  style={{
                    color: 'var(--blue)',
                    textDecoration: 'none',
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
                  Send a Message
                  <IconArrowRight style={{ width: 14, height: 14 }} />
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  )
}
