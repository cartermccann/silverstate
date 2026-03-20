import { facilityImg } from '../../data/image-url'
import { useState } from 'react'
import { Link } from 'react-router'
import { site } from '../../data/common'
import { generateMeta } from '../../utils/meta'
import { generateFAQPage, generateWebPage } from '../../utils/schema'
import AnimateIn, { StaggerGroup, StaggerItem } from '../../components/AnimateIn'
import { CharReveal } from '../../components/TextReveal'
import FaqItem from '../../components/FaqItem'
import MagneticButton from '../../components/MagneticButton'
import { IconCheck, IconPhone } from '../../components/Icons'

const DISPLAY = 'var(--font-display)'
const WARM = 'var(--warm)'
const SAGE = 'var(--sage)'

const faqs = [
  {
    q: 'What does CPI stand for in mental health?',
    a: 'CPI stands for Crisis Prevention Intervention. It is a widely adopted training program that teaches staff how to recognize early signs of distress and use supportive, nonviolent strategies to de-escalate behavioral crises before they become unsafe.',
  },
  {
    q: 'Is CPI only used in residential treatment?',
    a: 'No. CPI techniques are used across all care settings. The same principles of early intervention and empathetic de-escalation apply in residential treatment, therapeutic sessions, and family programming.',
  },
  {
    q: 'How does the supportive approach in CPI work?',
    a: 'The supportive approach focuses on empathetic listening, validating emotions, and offering choices. Rather than using restrictive or punitive measures, staff trained in CPI meet teens where they are emotionally and help them regain control through connection and de-escalation.',
  },
  {
    q: 'What training do Silver State staff receive in CPI?',
    a: 'Every team member — from licensed clinicians to residential counselors — completes the full CPI certification and participates in ongoing refresher training. Our 4:1 staff-to-client ratio ensures that CPI-trained support is always available.',
  },
  {
    q: 'How is CPI different from physical restraint?',
    a: 'CPI is specifically designed to reduce and prevent the need for physical intervention. The framework emphasizes verbal de-escalation, environmental management, and supportive communication. Physical techniques are only used as an absolute last resort when there is imminent danger, and only in the safest, most respectful manner possible.',
  },
  {
    q: 'When should a parent seek professional crisis intervention for their teen?',
    a: `If your teen is expressing suicidal thoughts, engaging in self-harm, experiencing psychotic symptoms, or behaving in ways that are dangerous to themselves or others, seek professional help immediately. Call ${site.phone} to speak with our admissions team 24/7.`,
  },
]

const principles = [
  {
    title: 'Empathic Listening',
    desc: 'Acknowledging emotions without judgment. Statements like "I can see you\'re really upset right now" validate the experience and build trust.',
  },
  {
    title: 'Rational Detachment',
    desc: 'Staying calm and objective when a teen is dysregulated. Staff manage their own emotional responses to remain a stabilizing presence.',
  },
  {
    title: 'Limit Setting with Choices',
    desc: 'Offering options instead of ultimatums. "Would you like to take a walk or sit in the quiet room?" gives teens a sense of agency.',
  },
  {
    title: 'Nonverbal Awareness',
    desc: 'Body language, tone of voice, and physical proximity all communicate safety. Staff maintain open posture, measured pace, and respect personal space.',
  },
  {
    title: 'Early Intervention',
    desc: 'Identifying behavioral cues early and responding with support before escalation occurs, preventing crises rather than reacting to them.',
  },
  {
    title: 'Least Restrictive Response',
    desc: 'Using the minimum intervention necessary to restore safety and calm, preserving the teen\'s dignity throughout the process.',
  },
]

const warningSignals = [
  'Threats or acts of self-harm or suicide',
  'Physical aggression toward family members or property',
  'Psychotic symptoms such as hallucinations or severe disorientation',
  'Refusal to eat, sleep, or engage for extended periods',
  'Substance-related emergencies',
  'Emotional outbursts that are escalating in frequency or intensity',
]

export const meta = generateMeta({
  title: 'Crisis Prevention & Intervention (CPI) Training | Silver State',
  description:
    'All Silver State staff are CPI-certified in nonviolent crisis intervention for teens 11\u201317. Evidence-based de-escalation keeps adolescents safe across every level of care.',
  path: '/programs/crisis-prevention-intervention',
  keywords: [
    'crisis prevention intervention',
    'CPI training teens',
    'nonviolent crisis intervention',
    'de-escalation adolescent treatment',
    'CPI mental health Las Vegas',
  ],
  jsonLd: [
    generateFAQPage({
      questions: faqs.map((f) => ({ question: f.q, answer: f.a })),
    }),
    generateWebPage({
      title: 'Crisis Prevention & Intervention (CPI) Training',
      description:
        'Silver State staff are CPI-trained in nonviolent crisis intervention for adolescents ages 11\u201317.',
      url: 'https://www.silverstatetreatment.com/programs/crisis-prevention-intervention',
    }),
  ],
})

export default function CPI() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* ── 1. FULL-WIDTH HERO IMAGE ── */}
      <div style={{ width: '100%', overflow: 'hidden', maxHeight: 480 }}>
        <img
          src={facilityImg('common-area-lounge.jpg')}
          alt="Silver State common area — safe therapeutic environment"
          loading="eager"
          width={1600}
          height={480}
          style={{ width: '100%', height: '100%', maxHeight: 480, objectFit: 'cover', display: 'block' }}
        />
      </div>

      {/* ── 1b. TITLE + INTRO ── */}
      <section style={{ padding: '48px 0 48px', background: WARM }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <AnimateIn variant="fadeUp">
            <span className="section-label">Safety &amp; De-Escalation</span>
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
            Crisis Prevention &amp; Intervention
          </CharReveal>

          <div className="cpi-text-blocks">
            <AnimateIn variant="blurUp" delay={0.2}>
              <p style={{ color: 'var(--body)', fontSize: '1rem', lineHeight: 1.7 }}>
                When an adolescent is in emotional crisis, the response they receive in those first
                critical moments shapes everything that follows. At Silver State, every team member is
                certified in Crisis Prevention Intervention (CPI) — an evidence-informed framework
                that replaces punitive responses with empathy, structure, and safety.
              </p>
            </AnimateIn>
            <AnimateIn variant="blurUp" delay={0.3}>
              <p style={{ color: 'var(--body)', fontSize: '1rem', lineHeight: 1.7 }}>
                CPI is not a single technique. It is a philosophy of care that prioritizes the dignity
                and safety of both the individual in crisis and those around them. The framework
                emphasizes prevention first — identifying and addressing triggers before a crisis fully
                develops — and intervention second, using the least restrictive approach necessary.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── 1c. STATS BAR ── */}
      <section style={{ background: SAGE, padding: '32px 0' }}>
        <div className="wrap">
          <StaggerGroup
            stagger={0.08}
            variant="fadeUp"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: 20,
              textAlign: 'center',
            }}
          >
            <StaggerItem>
              <div style={{ color: '#fff' }}>
                <span style={{ fontFamily: DISPLAY, fontSize: '2rem', fontWeight: 700, display: 'block' }}>100%</span>
                <span style={{ fontSize: '.85rem', opacity: 0.85 }}>Staff CPI-Certified</span>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div style={{ color: '#fff' }}>
                <span style={{ fontFamily: DISPLAY, fontSize: '2rem', fontWeight: 700, display: 'block' }}>4:1</span>
                <span style={{ fontSize: '.85rem', opacity: 0.85 }}>Staff-to-Client Ratio</span>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div style={{ color: '#fff' }}>
                <span style={{ fontFamily: DISPLAY, fontSize: '2rem', fontWeight: 700, display: 'block' }}>24/7</span>
                <span style={{ fontSize: '.85rem', opacity: 0.85 }}>Crisis Response Available</span>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div style={{ color: '#fff' }}>
                <span style={{ fontFamily: DISPLAY, fontSize: '2rem', fontWeight: 700, display: 'block' }}>11–17</span>
                <span style={{ fontSize: '.85rem', opacity: 0.85 }}>Ages Served</span>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* ── 1d. IMAGE STRIP ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}>
        <div style={{ overflow: 'hidden', maxHeight: 360 }}>
          <img
            src={facilityImg('nursing-station-wide.jpg')}
            alt="Silver State nursing station with clinical monitoring"
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
        <div style={{ overflow: 'hidden', maxHeight: 360 }}>
          <img
            src={facilityImg('therapy-room-cozy.jpg')}
            alt="Comfortable therapy room at Silver State"
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </div>

      {/* ── 2. WHY CPI MATTERS ── */}
      <section style={{ padding: '64px 0' }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <AnimateIn variant="fadeUp">
            <h2 className="section-heading">Why CPI Matters for Teen Treatment</h2>
          </AnimateIn>

          <div className="cpi-text-blocks">
            <AnimateIn variant="blurUp" delay={0.1}>
              <p
                style={{
                  color: 'var(--body)',
                  fontSize: '.95rem',
                  lineHeight: 1.7,
                }}
              >
                Adolescents are neurologically wired for emotional intensity. The prefrontal cortex —
                responsible for impulse control, decision-making, and emotional regulation — does not
                fully mature until the mid-20s. This means teens are more susceptible to emotional
                flooding and less equipped to self-regulate during high-stress moments.
              </p>
            </AnimateIn>
            <AnimateIn variant="blurUp" delay={0.2}>
              <p
                style={{
                  color: 'var(--body)',
                  fontSize: '.95rem',
                  lineHeight: 1.7,
                }}
              >
                In a residential treatment setting, many teens arrive with histories
                of trauma, attachment disruption, or chronic invalidation. A crisis response that feels
                punitive or controlling can retraumatize, eroding the trust that effective treatment
                depends on. CPI-based approaches help maintain the therapeutic relationship even during
                the most challenging moments.
              </p>
            </AnimateIn>
            <AnimateIn variant="blurUp" delay={0.3}>
              <p
                style={{
                  color: 'var(--body)',
                  fontSize: '.95rem',
                  lineHeight: 1.7,
                }}
              >
                Research supports this. Facilities that implement CPI training consistently report
                reductions in the use of physical restraint and seclusion, fewer staff injuries, and
                improved therapeutic alliance between staff and clients.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── 3. SUPPORTIVE APPROACH PRINCIPLES ── */}
      <section style={{ padding: '64px 0', background: WARM }}>
        <div className="wrap">
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <AnimateIn variant="fadeUp">
              <span className="section-label">The Supportive Approach</span>
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
              Core Principles of Our CPI Practice
            </CharReveal>
            <AnimateIn variant="blurUp" delay={0.15}>
              <p
                style={{
                  marginTop: 16,
                  color: 'var(--body)',
                  fontSize: '.95rem',
                  lineHeight: 1.7,
                  maxWidth: 640,
                  margin: '16px auto 0',
                }}
              >
                At the heart of CPI is the supportive approach: meeting a person where they are
                emotionally and helping them move toward safety through connection rather than
                control.
              </p>
            </AnimateIn>
          </div>

          <StaggerGroup
            stagger={0.08}
            variant="fadeUp"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 20,
            }}
          >
            {principles.map((p, i) => (
              <StaggerItem key={i}>
                <div className="bento-card" style={{ height: '100%' }}>
                  <h3
                    style={{
                      fontFamily: DISPLAY,
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      lineHeight: 1.2,
                      marginBottom: 8,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '.88rem',
                      color: 'var(--body)',
                      lineHeight: 1.6,
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ── 4. HOW SILVER STATE USES CPI ── */}
      <section style={{ padding: '64px 0' }}>
        <div className="wrap">
          <div
            className="cpi-approach-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 48,
              alignItems: 'center',
            }}
          >
            <div>
              <AnimateIn variant="fadeUp">
                <h2 className="section-heading">How Silver State Uses CPI</h2>
              </AnimateIn>

              <div className="cpi-text-blocks">
                <AnimateIn variant="blurUp" delay={0.1}>
                  <p
                    style={{
                      color: 'var(--body)',
                      fontSize: '.95rem',
                      lineHeight: 1.7,
                    }}
                  >
                    At Silver State, CPI is not just a training certification — it is embedded in our
                    culture of care. Every team member, from licensed clinicians to residential
                    counselors, is trained in CPI techniques and practices them daily. Our crisis
                    prevention program operates on a philosophy of early intervention: identifying
                    behavioral cues early and responding with support before escalation occurs.
                  </p>
                </AnimateIn>
                <AnimateIn variant="blurUp" delay={0.2}>
                  <p
                    style={{
                      color: 'var(--body)',
                      fontSize: '.95rem',
                      lineHeight: 1.7,
                    }}
                  >
                    Our approach integrates CPI with evidence-based therapies including CBT, DBT, and
                    trauma-informed care, giving teens both immediate crisis support and long-term
                    coping skills. This combination means that each crisis becomes a learning moment —
                    an opportunity to practice regulation, communication, and self-awareness in a
                    safe, supported environment.
                  </p>
                </AnimateIn>
              </div>

              <AnimateIn variant="fadeUp" delay={0.25}>
                <div
                  style={{
                    marginTop: 24,
                    padding: '16px 24px',
                    background: WARM,
                    borderRadius: 'var(--radius-lg)',
                    display: 'inline-block',
                    fontFamily: DISPLAY,
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: SAGE,
                  }}
                >
                  100% of staff CPI-certified
                </div>
              </AnimateIn>
            </div>

            <AnimateIn variant="fadeUp" delay={0.15}>
              <img
                src={facilityImg('therapy-room-counselor.jpg')}
                alt="Therapy room at Silver State — CPI-trained clinical environment"
                loading="lazy"
                style={{
                  width: '100%',
                  borderRadius: 'var(--radius-lg)',
                  aspectRatio: '4 / 5',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── 5. WARNING SIGNS ── */}
      <section style={{ padding: '64px 0', background: WARM }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <AnimateIn variant="fadeUp">
            <h2 className="section-heading">When Professional Crisis Intervention Is Needed</h2>
          </AnimateIn>

          <AnimateIn variant="blurUp" delay={0.1}>
            <p
              style={{
                marginTop: 16,
                marginBottom: 24,
                color: 'var(--body)',
                fontSize: '.95rem',
                lineHeight: 1.7,
              }}
            >
              Not every behavioral challenge requires professional intervention. But certain signs
              indicate that a teen's emotional state has moved beyond what a family can safely manage
              at home:
            </p>
          </AnimateIn>

          <StaggerGroup stagger={0.06} variant="fadeUp">
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {warningSignals.map((signal, i) => (
                <StaggerItem key={i}>
                  <li
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 12,
                      fontSize: '.95rem',
                      color: 'var(--body)',
                      lineHeight: 1.6,
                      marginBottom: 12,
                    }}
                  >
                    <IconCheck
                      style={{
                        flexShrink: 0,
                        color: SAGE,
                        marginTop: 4,
                        width: 18,
                        height: 18,
                      }}
                    />
                    {signal}
                  </li>
                </StaggerItem>
              ))}
            </ul>
          </StaggerGroup>

          <AnimateIn variant="blurUp" delay={0.3}>
            <p
              style={{
                marginTop: 24,
                color: 'var(--body)',
                fontSize: '.95rem',
                lineHeight: 1.7,
              }}
            >
              If your teen is displaying any of these behaviors, a structured treatment environment
              with CPI-trained staff can provide the safety and clinical support they need. At Silver
              State, our 4:1 staff-to-client ratio ensures rapid, compassionate response.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── 6. CPI ACROSS LEVELS OF CARE ── */}
      <section style={{ padding: '64px 0' }}>
        <div className="wrap">
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <AnimateIn variant="fadeUp">
              <span className="section-label">Across Every Level of Care</span>
            </AnimateIn>
            <AnimateIn variant="fadeUp" delay={0.1}>
              <h2 className="section-heading" style={{ marginTop: 8 }}>
                CPI-Trained Support at Every Step
              </h2>
            </AnimateIn>
          </div>

          <StaggerGroup
            stagger={0.1}
            variant="fadeUp"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 20,
            }}
          >
            {[
              {
                label: 'Residential Treatment',
                slug: 'residential-treatment',
                desc: '24/7 CPI-trained staff with rapid response capability. Crisis prevention is woven into the structured daily schedule from wake-up to lights out.',
              },
            ].map((program) => (
              <StaggerItem key={program.slug}>
                <div className="bento-card" style={{ height: '100%' }}>
                  <h3
                    style={{
                      fontFamily: DISPLAY,
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      lineHeight: 1.2,
                      marginBottom: 8,
                    }}
                  >
                    {program.label}
                  </h3>
                  <p
                    style={{
                      fontSize: '.88rem',
                      color: 'var(--body)',
                      lineHeight: 1.6,
                      marginBottom: 12,
                    }}
                  >
                    {program.desc}
                  </p>
                  <Link
                    to={`/programs/${program.slug}`}
                    style={{
                      color: 'var(--blue)',
                      textDecoration: 'none',
                      fontSize: '.85rem',
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      minHeight: 44,
                    }}
                  >
                    Learn More &rarr;
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ── 7. FAQ ── */}
      <section style={{ padding: '64px 0', background: WARM }}>
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
              Common Questions About CPI
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

      {/* ── 8. CTA ── */}
      <section style={{ padding: '64px 0' }}>
        <div className="wrap">
          <AnimateIn variant="fadeUp">
            <h2 className="section-heading">Continue Exploring</h2>
          </AnimateIn>

          <div
            style={{
              marginTop: 32,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: 24,
            }}
          >
            <AnimateIn variant="fadeUp" delay={0.1}>
              <div className="bento-card">
                <h3
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: '1rem',
                    fontWeight: 600,
                    marginBottom: 12,
                  }}
                >
                  Related Therapies
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    { label: 'Trauma-Informed Care', href: '/programs/trauma-informed-care' },
                    { label: 'DBT', href: '/programs/dbt' },
                    { label: 'CBT', href: '/programs/cbt' },
                  ].map((link) => (
                    <li key={link.href} style={{ marginBottom: 8 }}>
                      <Link
                        to={link.href}
                        style={{
                          color: 'var(--blue)',
                          textDecoration: 'none',
                          fontSize: '.9rem',
                          fontWeight: 500,
                          display: 'inline-block',
                          padding: '4px 0',
                          minHeight: 44,
                          lineHeight: '36px',
                        }}
                      >
                        {link.label} &rarr;
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>

            <AnimateIn variant="fadeUp" delay={0.2}>
              <div className="bento-card">
                <h3
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: '1rem',
                    fontWeight: 600,
                    marginBottom: 12,
                  }}
                >
                  Learn More
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: 8 }}>
                    <Link
                      to="/resources/crisis-prevention-intervention"
                      style={{
                        color: 'var(--blue)',
                        textDecoration: 'none',
                        fontSize: '.9rem',
                        fontWeight: 500,
                        display: 'inline-block',
                        padding: '4px 0',
                        minHeight: 44,
                        lineHeight: '36px',
                      }}
                    >
                      CPI Resource Guide &rarr;
                    </Link>
                  </li>
                  <li style={{ marginBottom: 8 }}>
                    <Link
                      to="/our-approach"
                      style={{
                        color: 'var(--blue)',
                        textDecoration: 'none',
                        fontSize: '.9rem',
                        fontWeight: 500,
                        display: 'inline-block',
                        padding: '4px 0',
                        minHeight: 44,
                        lineHeight: '36px',
                      }}
                    >
                      Our Approach &rarr;
                    </Link>
                  </li>
                </ul>
              </div>
            </AnimateIn>

            <AnimateIn variant="fadeUp" delay={0.3}>
              <div
                className="bento-card"
                style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
              >
                <h3
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: '1rem',
                    fontWeight: 600,
                  }}
                >
                  Is Your Teen in Crisis?
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
                    className="btn btn-dark"
                    aria-label={`Call Silver State at ${site.phone}`}
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      textDecoration: 'none',
                      minHeight: 44,
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

      <style>{`
        .cpi-text-blocks p {
          margin-top: 16px;
        }
        @media (max-width: 900px) {
          .cpi-approach-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .cpi-text-blocks p {
            margin-top: 24px;
            padding-bottom: 8px;
            border-bottom: 1px solid rgba(0,0,0,0.06);
          }
          .cpi-text-blocks p:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }
        }
      `}</style>
    </>
  )
}
