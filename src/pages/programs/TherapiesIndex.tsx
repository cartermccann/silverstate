import { useState } from 'react'
import { Link } from 'react-router'
import { therapyModalities } from '../../data/therapies'
import type { TherapyModality } from '../../types'
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
  title: 'Therapy Programs for Teens | Evidence-Based Treatment | Silver State',
  description:
    'Explore Silver State\u2019s 17+ evidence-based therapy programs for adolescents ages 11-17 in Las Vegas, including CBT, DBT, EMDR, family therapy, and more.',
  path: '/programs/therapy-programs',
  keywords: ['teen therapy programs', 'adolescent therapy modalities', 'teen CBT DBT EMDR', 'therapy for teenagers Las Vegas', 'evidence-based teen therapy'],
})

type CategoryKey = 'evidence-based' | 'therapeutic-modalities' | 'treatment-approaches'

const categoryLabels: Record<CategoryKey, string> = {
  'evidence-based': 'Evidence-Based Therapies',
  'therapeutic-modalities': 'Therapeutic Modalities',
  'treatment-approaches': 'Treatment Approaches',
}

const categoryDescriptions: Record<CategoryKey, string> = {
  'evidence-based':
    'Our clinical team uses rigorously researched therapy approaches with strong evidence for treating adolescent mental health and substance abuse conditions.',
  'therapeutic-modalities':
    'Teens engage in a variety of therapeutic formats \u2014 individual, group, family, and experiential \u2014 to address their needs from multiple angles.',
  'treatment-approaches':
    'These overarching treatment strategies shape how we deliver care, ensuring every teen receives comprehensive, personalized, and compassionate support.',
}

const categoryOrder: CategoryKey[] = [
  'evidence-based',
  'therapeutic-modalities',
  'treatment-approaches',
]

const categorySlugs: Record<CategoryKey, string[]> = {
  'evidence-based': ['cbt', 'dbt', 'emdr', 'tf-cbt', 'somatic-experiencing', 'motivational-interviewing'],
  'therapeutic-modalities': ['individual-therapy', 'group-therapy', 'family-therapy', 'recreational-therapy', 'adventure-therapy', 'meditation-mindfulness'],
  'treatment-approaches': ['medication-management', 'lgbtqia-affirming-care', 'holistic-treatment', 'trauma-informed-care', 'cpi'],
}

export default function TherapiesHub() {
  const isMobile = useIsMobile()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const orgSchema = generateMedicalOrganization()

  const hubFaqs = [
    {
      q: 'What therapy approaches does Silver State use?',
      a: `We use 17+ evidence-based therapy modalities including CBT, DBT, EMDR, and more, tailored to each teen's needs. Call ${site.phone} to learn which therapies may be right for your child.`,
    },
    {
      q: 'How do you determine which therapy is right for my teen?',
      a: `Clinical assessment during admissions evaluates your teen's diagnoses, history, and needs to create an individualized treatment plan. Call ${site.phone} to start with a free assessment.`,
    },
    {
      q: 'Can my teen receive more than one type of therapy?',
      a: 'Yes, most teens participate in multiple therapy modalities as part of their individualized treatment plan. Our clinical team selects the combination of therapies that best addresses each teen\u2019s unique challenges.',
    },
    {
      q: 'Are your therapists licensed and specialized in adolescent care?',
      a: 'All clinicians are licensed professionals with specialized training in adolescent mental health and substance abuse treatment. Our team includes licensed therapists, a board-certified psychiatrist, and certified crisis intervention specialists.',
    },
  ]

  const faqSchema = generateFAQPage({
    questions: hubFaqs.map((faq) => ({ question: faq.q, answer: faq.a })),
  })

  const therapyBySlug = Object.fromEntries(therapyModalities.map((t) => [t.slug, t]))

  const grouped = categoryOrder.map((cat) => ({
    key: cat,
    label: categoryLabels[cat],
    description: categoryDescriptions[cat],
    items: categorySlugs[cat]
      .map((slug) => therapyBySlug[slug])
      .filter((t): t is TherapyModality => Boolean(t)),
  }))

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
            <span className="section-label">Our Therapies</span>
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
            Therapy Programs
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
              Silver State offers 17+ evidence-based therapy modalities for adolescents ages
              11&ndash;17. Every therapy is delivered by licensed professionals and integrated into
              individualized treatment plans &mdash; because no two teens are alike, and no single
              approach works for everyone.
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
              Not Sure Which Therapy Is Right?
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
              Our clinical team can help you understand which therapies will best support your
              teen&rsquo;s recovery. Call {site.phone} for a free, confidential assessment.
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

      {/* ── 3. THERAPIES BY CATEGORY ── */}
      {grouped.map((group, gi) => (
        <section
          key={group.key}
          style={{ padding: '64px 0', background: gi % 2 === 0 ? undefined : WARM }}
        >
          <div className="wrap">
            <AnimateIn variant="fadeUp">
              <span className="section-label">{group.label}</span>
              <h2
                className="section-heading"
                style={{ marginTop: 8, marginBottom: 8 }}
              >
                {group.label}
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
                {group.description}
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
              {group.items.map((therapy) => (
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
                      {therapy.name}
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
                      {therapy.description.slice(0, 180)}...
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
          </div>
        </section>
      ))}

      {/* ── 4. FAQS ── */}
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
              Therapy Questions
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

      {/* ── 5. CROSS-NAVIGATION ── */}
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
