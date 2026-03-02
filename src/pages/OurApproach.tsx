import { useState } from 'react'
import { site } from '../data/common'
import { generateMeta } from '../utils/meta'
import { generateFAQPage, generateWebPage } from '../utils/schema'
import useIsMobile from '../hooks/useIsMobile'
import AnimateIn, { StaggerGroup, StaggerItem } from '../components/AnimateIn'
import { CharReveal } from '../components/TextReveal'
import FaqItem from '../components/FaqItem'
import MagneticButton from '../components/MagneticButton'
import { IconPhone } from '../components/Icons'

const DISPLAY = 'var(--font-display)'
const WARM = 'var(--warm)'

const SITE_URL = (import.meta.env?.VITE_SITE_URL || 'https://www.silverstatetreatment.com').replace(
  /\/+$/,
  '',
)

export const meta = generateMeta({
  title: 'Our Treatment Approach | Evidence-Based Adolescent Care | Silver State',
  description:
    "Learn about Silver State's evidence-based treatment approach for teens ages 11-17. Individualized care with a 4:1 staff ratio in Las Vegas, NV.",
  path: '/our-approach',
  jsonLd: [
    generateWebPage({
      title: 'Our Treatment Approach',
      description:
        "Silver State's evidence-based treatment approach for adolescents ages 11-17, featuring individualized care with a 4:1 staff ratio.",
      url: `${SITE_URL}/our-approach`,
    }),
  ],
})

const pillars = [
  {
    title: 'Clinical Excellence',
    description:
      'Our treatment team includes licensed clinicians, board-certified psychiatrists, and certified addiction counselors. With a 4:1 staff-to-client ratio, every teen receives the focused clinical attention they need. All modalities are evidence-based and tailored to adolescent development.',
  },
  {
    title: 'Individualized Care',
    description:
      'No two teens are alike, and neither are our treatment plans. Each adolescent receives a personalized care plan developed during their initial assessment, with regular reassessment and adjustments. Our stepped care model ensures the right intensity at every stage of recovery.',
  },
  {
    title: 'Family Integration',
    description:
      'Recovery does not happen in isolation. Families participate in weekly family therapy, parent education groups, and collaborative discharge planning. We equip families with the skills and understanding to support their teen long after treatment ends.',
  },
  {
    title: 'Whole-Person Wellness',
    description:
      'Healing extends beyond therapy sessions. Our Youth Academy keeps teens on track academically, while nutrition planning, fitness programming, creative arts, and adventure therapy address the physical, social, and emotional dimensions of wellness.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Assessment',
    description:
      'Every journey begins with a comprehensive clinical assessment. Our admissions team evaluates your teen\'s mental health, substance use history, family dynamics, and daily functioning to determine the right level of care \u2014 residential, PHP, or IOP.',
  },
  {
    number: '02',
    title: 'Treatment',
    description:
      'Your teen enters a structured, supportive environment with individual therapy, group sessions, family involvement, and academic instruction. Treatment plans are reviewed regularly and adjusted based on progress, ensuring care stays aligned with your teen\'s evolving needs.',
  },
  {
    number: '03',
    title: 'Transition',
    description:
      'As your teen nears completion, we build a comprehensive discharge plan with step-down recommendations, outpatient referrals, school reintegration strategies, and alumni support. The goal is lasting recovery, not just short-term stability.',
  },
]

const faqs = [
  {
    q: 'How long does treatment last?',
    a: `Treatment duration varies by level of care and individual needs. Residential treatment typically lasts 45 to 90 days, partial hospitalization (PHP) runs 4 to 6 weeks, and intensive outpatient (IOP) lasts 6 to 12 weeks. Our clinical team reassesses progress regularly and adjusts the timeline to ensure your teen gets the time they need. Call ${site.phone} to discuss your teen's situation.`,
  },
  {
    q: 'What does a typical day look like?',
    a: 'Each day follows a structured schedule designed to balance clinical work with wellness activities. Mornings typically include therapeutic groups and individual therapy sessions. Afternoons are dedicated to academics through our on-site Youth Academy, recreation, and skill-building activities. Evenings include family sessions (on designated days), mindfulness practice, and free time. Every element of the schedule supports treatment goals.',
  },
  {
    q: 'How do you involve families in treatment?',
    a: 'Family involvement is central to our approach. Parents and guardians participate in weekly family therapy sessions, parent education groups, and scheduled family weekends. Our clinicians also maintain regular communication with families throughout treatment. Discharge planning is a collaborative process that equips families to support their teen at home.',
  },
  {
    q: 'What happens after my teen completes treatment?',
    a: 'Every teen leaves Silver State with a comprehensive discharge plan. This includes step-down level of care recommendations (for example, transitioning from residential to PHP or IOP), referrals to outpatient therapists and psychiatrists, school reintegration support, and access to our alumni network. Our goal is to set your teen up for lasting success beyond our walls.',
  },
]

export default function OurApproach() {
  const isMobile = useIsMobile()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqSchema = generateFAQPage({
    questions: faqs.map((faq) => ({ question: faq.q, answer: faq.a })),
  })

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── 1. HERO SECTION ── */}
      <section style={{ padding: '64px 0 48px', background: WARM }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <AnimateIn variant="fadeUp">
            <span className="section-label">Our Philosophy</span>
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
            Our Treatment Approach
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
              At Silver State, every aspect of treatment is built around one principle: adolescents
              deserve care designed specifically for them &mdash; not adapted from adult programs.
              Our evidence-based, adolescent-focused approach combines clinical excellence with
              genuine compassion, giving teens ages 11&ndash;17 the tools they need to heal and
              thrive.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── 2. FOUR PILLARS ── */}
      <section style={{ padding: '64px 0' }}>
        <div className="wrap">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <AnimateIn variant="fadeUp">
              <span className="section-label">What Sets Us Apart</span>
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
              Four Pillars of Care
            </CharReveal>
          </div>

          <StaggerGroup
            stagger={0.08}
            variant="fadeUp"
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: 24,
            }}
          >
            {pillars.map((pillar) => (
              <StaggerItem key={pillar.title}>
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
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      lineHeight: 1.2,
                      marginBottom: 12,
                      color: 'var(--sage)',
                    }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '.95rem',
                      color: 'var(--body)',
                      lineHeight: 1.7,
                    }}
                  >
                    {pillar.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ── 3. HOW TREATMENT WORKS ── */}
      <section style={{ padding: '64px 0', background: WARM }}>
        <div className="wrap">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <AnimateIn variant="fadeUp">
              <span className="section-label">The Process</span>
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
              How Treatment Works
            </CharReveal>
          </div>

          <StaggerGroup
            stagger={0.1}
            variant="fadeUp"
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
              gap: 24,
            }}
          >
            {steps.map((step) => (
              <StaggerItem key={step.number}>
                <div
                  className="bento-card"
                  style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <span
                    style={{
                      fontFamily: DISPLAY,
                      fontSize: '2.5rem',
                      fontWeight: 800,
                      color: 'var(--sage)',
                      opacity: 0.3,
                      lineHeight: 1,
                      marginBottom: 8,
                    }}
                  >
                    {step.number}
                  </span>
                  <h3
                    style={{
                      fontFamily: DISPLAY,
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      lineHeight: 1.2,
                      marginBottom: 12,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '.95rem',
                      color: 'var(--body)',
                      lineHeight: 1.7,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ── 4. OUR CLINICAL TEAM ── */}
      <section style={{ padding: '64px 0' }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <AnimateIn variant="fadeUp">
              <span className="section-label">Who We Are</span>
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
              Our Clinical Team
            </CharReveal>
          </div>

          <AnimateIn variant="blurUp" delay={0.15}>
            <p
              style={{
                color: 'var(--body)',
                fontSize: '1rem',
                lineHeight: 1.7,
                textAlign: 'center',
                marginBottom: 16,
              }}
            >
              Silver State&rsquo;s treatment team is led by Dr. Russ Park, a board-certified
              psychiatrist specializing in adolescent behavioral health. Our multidisciplinary staff
              includes licensed marriage and family therapists, licensed clinical social workers,
              certified addiction counselors, and registered nurses &mdash; all with specialized
              training in adolescent care.
            </p>
          </AnimateIn>
          <AnimateIn variant="blurUp" delay={0.25}>
            <p
              style={{
                color: 'var(--body)',
                fontSize: '1rem',
                lineHeight: 1.7,
                textAlign: 'center',
              }}
            >
              With a 4:1 staff-to-client ratio, every teen at Silver State receives the individualized
              attention they need. Our team collaborates daily to review progress, adjust treatment
              plans, and ensure each adolescent is on the right path.
            </p>
          </AnimateIn>
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
              Take the First Step
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
              Our admissions team is available 24/7 to answer your questions and walk you through the
              process. Call {site.phone} for a free, confidential assessment.
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

      {/* ── 6. FAQS ── */}
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
              Treatment Questions
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
    </>
  )
}
