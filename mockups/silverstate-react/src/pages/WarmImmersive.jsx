import { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import AnimateIn, { StaggerGroup, StaggerItem } from '../components/AnimateIn'
import TextReveal, { CharReveal } from '../components/TextReveal'
import Marquee from '../components/Marquee'
import Parallax, { ClipReveal } from '../components/Parallax'
import MagneticButton from '../components/MagneticButton'
import CountUp from '../components/CountUp'
import {
  IconPhone, IconCheck, IconHome, IconSun, IconGrad,
  IconUsers, IconUser, IconHeart, IconStar, IconShield, IconAward,
  IconBook, IconMapPin,
} from '../components/Icons'
import {
  site, hero, programs, conditions, therapies, team, whyChoose,
  insurance, accreditations, testimonial, faqs, facility,
} from '../data/content'


/* ── Palette ── */
const SAGE = '#5A7A6E'
const SAGE_LIGHT = '#6d8e82'
const CREAM = '#FAF7F2'
const WARM = '#F0EBE3'
const DARK = '#0f172a'
const SERIF = "'DM Serif Display', serif"


/* ── FAQ Accordion Item ── */
function FaqItem({ q, a, isOpen, onToggle }) {
  return (
    <div style={{ borderBottom: '1px solid rgba(0,0,0,.08)' }}>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: '100%', display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', padding: '24px 0', background: 'none',
          border: 'none', cursor: 'pointer', textAlign: 'left',
          fontFamily: 'inherit', fontSize: '1.05rem', fontWeight: 500,
          color: 'var(--text)', lineHeight: 1.4, gap: 16,
        }}
      >
        <span>{q}</span>
        <span
          style={{
            flexShrink: 0, width: 28, height: 28, borderRadius: '50%',
            background: isOpen ? SAGE : 'rgba(0,0,0,.05)',
            color: isOpen ? '#fff' : 'var(--body)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.1rem', fontWeight: 300, lineHeight: 1,
            transition: 'all .2s ease',
          }}
          aria-hidden="true"
        >
          {isOpen ? '\u2212' : '+'}
        </span>
      </button>
      <div
        style={{
          maxHeight: isOpen ? 300 : 0,
          overflow: 'hidden',
          transition: 'max-height .3s ease, opacity .3s ease',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p style={{
          paddingBottom: 24, color: 'var(--body)', fontSize: '.95rem',
          lineHeight: 1.7, maxWidth: 640,
        }}>
          {a}
        </p>
      </div>
    </div>
  )
}


/* ── Program Section (upgraded with heavy animations) ── */
function ProgramSection({ program, imageContent, reversed, id }) {
  return (
    <section id={id} style={{ padding: '80px 0' }}>
      <div className="wrap">
        <div className="wi-program-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 56,
          alignItems: 'center',
        }}>
          {/* Image side — ClipReveal with alternating direction */}
          <ClipReveal
            direction={reversed ? 'right' : 'left'}
            duration={1.2}
            style={{ order: reversed ? 2 : 1 }}
            className="wi-program-img-wrap"
          >
            {imageContent}
          </ClipReveal>

          {/* Content side */}
          <div
            style={{ order: reversed ? 1 : 2 }}
            className="wi-program-content-wrap"
          >
            <AnimateIn variant="fadeIn" delay={0.2}>
              <span style={{
                display: 'inline-block', fontSize: '.7rem', fontWeight: 600,
                letterSpacing: '.1em', textTransform: 'uppercase', color: SAGE,
                marginBottom: 12,
              }}>
                {program.label}
              </span>
            </AnimateIn>

            <TextReveal
              as="h2"
              style={{
                fontFamily: SERIF, fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                fontWeight: 400, lineHeight: 1.25, color: 'var(--text)',
              }}
            >
              {program.title}
            </TextReveal>

            <AnimateIn variant="blurUp" delay={0.3}>
              <p style={{
                marginTop: 16, color: 'var(--body)', fontSize: '.95rem',
                lineHeight: 1.75,
              }}>
                {program.body}
              </p>
            </AnimateIn>

            <StaggerGroup
              variant="fadeUp"
              stagger={0.08}
              style={{
                listStyle: 'none', padding: 0, marginTop: 24,
                display: 'flex', flexDirection: 'column', gap: 10,
              }}
            >
              {program.features.map((f) => (
                <StaggerItem key={f}>
                  <div style={{
                    display: 'flex', alignItems: 'flex-start', gap: 10,
                    fontSize: '.9rem', color: 'var(--body)', lineHeight: 1.5,
                  }}>
                    <IconCheck style={{
                      flexShrink: 0, color: SAGE, marginTop: 2,
                      width: 16, height: 16,
                    }} />
                    {f}
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>

            {program.stat && (
              <AnimateIn variant="scaleUp" delay={0.4}>
                <div style={{
                  marginTop: 24, paddingTop: 20,
                  borderTop: '1px solid rgba(0,0,0,.08)',
                  fontSize: '.85rem', fontWeight: 600, color: SAGE,
                }}>
                  {program.stat}
                </div>
              </AnimateIn>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}


/* ══════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════ */
export default function WarmImmersive() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div style={{ background: CREAM }}>
      {/* ── Nav ── */}
      <Nav variant="dark" />

      <main id="main-content">

        {/* ────────────────────────────────────────
            1. HERO — Full viewport with parallax zoom-out
        ──────────────────────────────────────── */}
        <section
          style={{
            position: 'relative', height: '85vh', minHeight: 540,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Background image with parallax zoom-out effect */}
          <Parallax
            speed={0.4}
            scale={true}
            scaleFrom={1.2}
            scaleTo={1}
            style={{
              position: 'absolute', inset: 0, width: '100%', height: '100%',
            }}
          >
            <img
              src="/assets/hero-youth.webp"
              alt=""
              role="presentation"
              style={{
                width: '100%', height: '120%',
                objectFit: 'cover',
              }}
            />
          </Parallax>

          {/* Overlay gradient */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, rgba(15,23,42,.55) 0%, rgba(15,23,42,.7) 100%)',
          }} />

          {/* Hero content */}
          <div style={{
            position: 'relative', zIndex: 1, textAlign: 'center',
            color: '#fff', padding: '0 32px', maxWidth: 720,
          }}>
            <CharReveal
              as="h1"
              stagger={0.015}
              duration={0.5}
              triggerStart="top 90%"
              style={{
                fontFamily: SERIF,
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 400, lineHeight: 1.15,
                textShadow: '0 2px 20px rgba(0,0,0,.25)',
              }}
            >
              {hero.immersive.headline}
            </CharReveal>

            <TextReveal
              style={{
                marginTop: 20, fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                lineHeight: 1.65, color: 'rgba(255,255,255,.85)',
                maxWidth: 560, marginLeft: 'auto', marginRight: 'auto',
              }}
              stagger={0.03}
              triggerStart="top 90%"
            >
              {hero.immersive.body}
            </TextReveal>

            <AnimateIn delay={0.8} variant="fadeUp">
              <div style={{
                marginTop: 32, display: 'flex', gap: 12,
                justifyContent: 'center', flexWrap: 'wrap',
              }}>
                <MagneticButton strength={0.25}>
                  <a href={site.phoneTel} className="btn btn-white">
                    <IconPhone /> Call {site.phone}
                  </a>
                </MagneticButton>
                <MagneticButton strength={0.25}>
                  <a href="#programs" className="btn btn-ghost">
                    Learn More
                  </a>
                </MagneticButton>
              </div>
            </AnimateIn>
          </div>
        </section>


        {/* ────────────────────────────────────────
            2. INTRO — Story opening (scrub reveal)
        ──────────────────────────────────────── */}
        <section style={{ padding: '64px 0 72px' }}>
          <div style={{
            maxWidth: 640, margin: '0 auto', padding: '0 32px',
            textAlign: 'center',
          }}>
            <TextReveal
              as="p"
              scrub={true}
              triggerStart="top 75%"
              style={{
                fontFamily: SERIF, fontSize: 'clamp(1.25rem, 2.2vw, 1.65rem)',
                fontWeight: 400, lineHeight: 1.55, color: 'var(--text)',
              }}
            >
              We believe adolescent treatment should feel like a turning point — not a dead end. Our clinical team works alongside your family to build a treatment plan that honors your teen's story, not just their diagnosis.
            </TextReveal>

            <AnimateIn variant="blurUp" delay={0.1}>
              <p style={{
                marginTop: 24, color: 'var(--muted)', fontSize: '.88rem',
                lineHeight: 1.65,
              }}>
                Joint Commission Gold Seal accredited. LegitScript approved.
                HIPAA compliant. Serving Nevada families since day one.
              </p>
            </AnimateIn>
          </div>
        </section>


        {/* ────────────────────────────────────────
            3. PROGRAMS
        ──────────────────────────────────────── */}

        {/* Residential — image left */}
        <ProgramSection
          id="programs"
          program={programs.residential}
          imageContent={
            <img
              src="/assets/teen-therapist.jpg"
              alt="Therapist working with a teen at Silver State"
              style={{
                width: '100%', borderRadius: 'var(--radius-lg)',
                aspectRatio: '4/5', objectFit: 'cover',
              }}
            />
          }
        />

        {/* PHP — reversed (content left, image right) */}
        <ProgramSection
          program={programs.php}
          reversed
          imageContent={
            <img
              src="/assets/woman-on-phone.jpg"
              alt="Parent speaking with admissions about PHP treatment"
              style={{
                width: '100%', borderRadius: 'var(--radius-lg)',
                aspectRatio: '4/5', objectFit: 'cover',
              }}
            />
          }
        />

        {/* IOP — image left, styled placeholder */}
        <ProgramSection
          program={programs.iop}
          imageContent={
            <div style={{
              width: '100%', borderRadius: 'var(--radius-lg)',
              aspectRatio: '4/5', background: WARM,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexDirection: 'column', gap: 8,
            }}>
              <span style={{
                fontFamily: SERIF, fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                color: SAGE, opacity: .6, fontWeight: 400,
              }}>
                IOP
              </span>
              <span style={{
                fontSize: '.75rem', letterSpacing: '.08em',
                textTransform: 'uppercase', color: 'var(--muted)',
              }}>
                Intensive Outpatient
              </span>
            </div>
          }
        />


        {/* ────────────────────────────────────────
            4. WHAT WE TREAT — Marquee conditions
        ──────────────────────────────────────── */}
        <section id="treatment" style={{
          padding: '80px 0', background: WARM, overflow: 'hidden',
        }}>
          <div className="wrap">
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <AnimateIn variant="fadeIn">
                <span style={{
                  fontSize: '.7rem', fontWeight: 600, letterSpacing: '.1em',
                  textTransform: 'uppercase', color: SAGE,
                }}>
                  Conditions We Treat
                </span>
              </AnimateIn>
              <CharReveal
                as="h2"
                stagger={0.02}
                style={{
                  fontFamily: SERIF,
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  fontWeight: 400, lineHeight: 1.25, marginTop: 8,
                }}
              >
                Comprehensive care for complex challenges
              </CharReveal>
            </div>

            {/* Mental Health — scrolling left */}
            <div style={{ marginBottom: 40 }}>
              <AnimateIn variant="fadeIn">
                <h3 style={{
                  fontSize: '.8rem', fontWeight: 600, letterSpacing: '.08em',
                  textTransform: 'uppercase', color: 'var(--body)',
                  marginBottom: 16,
                }}>
                  Mental Health
                </h3>
              </AnimateIn>
              <Marquee speed={50} direction="left" gap={12} pauseOnHover>
                {conditions.mentalHealth.map((c) => (
                  <span key={c} style={{
                    display: 'inline-block', padding: '10px 20px',
                    background: '#fff', borderRadius: 999,
                    fontSize: '.92rem', fontWeight: 500,
                    color: 'var(--text)',
                    boxShadow: '0 1px 3px rgba(0,0,0,.04)',
                    border: '1px solid rgba(0,0,0,.06)',
                    whiteSpace: 'nowrap',
                  }}>
                    {c}
                  </span>
                ))}
              </Marquee>
            </div>

            {/* Substance Abuse — scrolling right */}
            <div style={{ marginBottom: 40 }}>
              <AnimateIn variant="fadeIn">
                <h3 style={{
                  fontSize: '.75rem', fontWeight: 600, letterSpacing: '.08em',
                  textTransform: 'uppercase', color: 'var(--muted)',
                  marginBottom: 12,
                }}>
                  Substance Abuse
                </h3>
              </AnimateIn>
              <Marquee speed={35} direction="right" gap={10} pauseOnHover>
                {conditions.substanceAbuse.map((c) => (
                  <span key={c} style={{
                    display: 'inline-block', padding: '8px 16px',
                    background: 'rgba(255,255,255,.7)', borderRadius: 999,
                    fontSize: '.85rem', color: 'var(--body)',
                    border: '1px solid rgba(0,0,0,.05)',
                    whiteSpace: 'nowrap',
                  }}>
                    {c}
                  </span>
                ))}
              </Marquee>
            </div>

            {/* Eating Disorders — scrolling left */}
            <div>
              <AnimateIn variant="fadeIn">
                <h3 style={{
                  fontSize: '.75rem', fontWeight: 600, letterSpacing: '.08em',
                  textTransform: 'uppercase', color: 'var(--muted)',
                  marginBottom: 12,
                }}>
                  Eating Disorders
                </h3>
              </AnimateIn>
              <Marquee speed={30} direction="left" gap={10} pauseOnHover>
                {conditions.eatingDisorders.map((c) => (
                  <span key={c} style={{
                    display: 'inline-block', padding: '8px 16px',
                    background: 'rgba(255,255,255,.7)', borderRadius: 999,
                    fontSize: '.85rem', color: 'var(--body)',
                    border: '1px solid rgba(0,0,0,.05)',
                    whiteSpace: 'nowrap',
                  }}>
                    {c}
                  </span>
                ))}
              </Marquee>
            </div>
          </div>
        </section>


        {/* ────────────────────────────────────────
            4b. THERAPIES MARQUEE
        ──────────────────────────────────────── */}
        <section style={{
          padding: '56px 0', overflow: 'hidden',
          borderBottom: '1px solid rgba(0,0,0,.06)',
        }}>
          <AnimateIn variant="fadeIn">
            <div style={{ textAlign: 'center', marginBottom: 28 }}>
              <span style={{
                fontSize: '.7rem', fontWeight: 600, letterSpacing: '.1em',
                textTransform: 'uppercase', color: SAGE,
              }}>
                Our Therapeutic Modalities
              </span>
            </div>
          </AnimateIn>
          <Marquee speed={40} direction="left" gap={14} pauseOnHover>
            {therapies.map((t) => (
              <span key={t} style={{
                display: 'inline-block', padding: '10px 22px',
                background: SAGE, borderRadius: 999,
                fontSize: '.85rem', fontWeight: 500,
                color: '#fff', whiteSpace: 'nowrap',
                letterSpacing: '.01em',
              }}>
                {t}
              </span>
            ))}
          </Marquee>
        </section>


        {/* ────────────────────────────────────────
            5. TESTIMONIAL — Pull quote
        ──────────────────────────────────────── */}
        <section style={{ padding: '80px 0' }}>
          <div style={{
            maxWidth: 640, margin: '0 auto', padding: '0 32px',
            textAlign: 'center',
          }}>
            <AnimateIn variant="scaleUp" duration={1.2}>
              <blockquote style={{ margin: 0, padding: 0 }}>
                <TextReveal
                  as="p"
                  stagger={0.03}
                  style={{
                    fontFamily: SERIF,
                    fontSize: 'clamp(1.2rem, 2vw, 1.55rem)',
                    fontWeight: 400, fontStyle: 'italic',
                    lineHeight: 1.6, color: 'var(--text)',
                  }}
                >
                  {`\u201C${testimonial.quote}\u201D`}
                </TextReveal>
                <AnimateIn variant="fadeUp" delay={0.6}>
                  <footer style={{ marginTop: 20 }}>
                    <strong style={{ fontSize: '.9rem', color: 'var(--text)' }}>
                      {testimonial.author}
                    </strong>
                    <span style={{
                      display: 'block', fontSize: '.82rem',
                      color: 'var(--muted)', marginTop: 2,
                    }}>
                      {testimonial.detail}
                    </span>
                  </footer>
                </AnimateIn>
              </blockquote>
            </AnimateIn>
          </div>
        </section>


        {/* ────────────────────────────────────────
            6. NUMBERS STRIP — StaggerGroup + CountUp
        ──────────────────────────────────────── */}
        <section style={{ background: WARM, padding: '64px 0' }}>
          <div className="wrap">
            <StaggerGroup
              className="wi-numbers-grid"
              stagger={0.15}
              variant="fadeUp"
              style={{
                display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 32, textAlign: 'center',
              }}
            >
              <StaggerItem>
                <div>
                  <span style={{
                    fontFamily: SERIF, fontSize: 'clamp(2rem, 3vw, 2.75rem)',
                    fontWeight: 400, color: 'var(--text)', display: 'block',
                  }}>
                    24/7
                  </span>
                  <span style={{
                    fontSize: '.8rem', color: 'var(--muted)',
                    textTransform: 'uppercase', letterSpacing: '.06em',
                    fontWeight: 500, marginTop: 4, display: 'block',
                  }}>
                    Clinical Support
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div>
                  <span style={{
                    fontFamily: SERIF, fontSize: 'clamp(2rem, 3vw, 2.75rem)',
                    fontWeight: 400, color: 'var(--text)', display: 'block',
                  }}>
                    11–17
                  </span>
                  <span style={{
                    fontSize: '.8rem', color: 'var(--muted)',
                    textTransform: 'uppercase', letterSpacing: '.06em',
                    fontWeight: 500, marginTop: 4, display: 'block',
                  }}>
                    Ages Served
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div>
                  <span style={{
                    fontFamily: SERIF, fontSize: 'clamp(2rem, 3vw, 2.75rem)',
                    fontWeight: 400, color: 'var(--text)', display: 'block',
                  }}>
                    4:1
                  </span>
                  <span style={{
                    fontSize: '.8rem', color: 'var(--muted)',
                    textTransform: 'uppercase', letterSpacing: '.06em',
                    fontWeight: 500, marginTop: 4, display: 'block',
                  }}>
                    Staff-to-Client Ratio
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div>
                  <span style={{
                    fontFamily: SERIF, fontSize: 'clamp(2rem, 3vw, 2.75rem)',
                    fontWeight: 400, color: 'var(--text)', display: 'block',
                  }}>
                    <CountUp end={4.8} suffix="/5" />
                  </span>
                  <span style={{
                    fontSize: '.8rem', color: 'var(--muted)',
                    textTransform: 'uppercase', letterSpacing: '.06em',
                    fontWeight: 500, marginTop: 4, display: 'block',
                  }}>
                    Average Review ({site.reviewCount} reviews)
                  </span>
                </div>
              </StaggerItem>
            </StaggerGroup>
          </div>
        </section>


        {/* ────────────────────────────────────────
            7. FAMILY BAND — Sage green with ClipReveal + Parallax
        ──────────────────────────────────────── */}
        <section style={{ background: SAGE, color: '#fff' }}>
          <div className="wrap" style={{ padding: '0 32px' }}>
            <div className="wi-family-grid" style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: 56, alignItems: 'center',
              padding: '80px 0',
            }}>
              {/* Image with ClipReveal + inner Parallax */}
              <ClipReveal direction="up" duration={1.2}>
                <Parallax speed={0.25} overflow="visible">
                  <img
                    src="/assets/woman-on-phone.jpg"
                    alt="Family involvement in the treatment process"
                    style={{
                      width: '100%', borderRadius: 'var(--radius-lg)',
                      aspectRatio: '4/5', objectFit: 'cover',
                    }}
                  />
                </Parallax>
              </ClipReveal>

              <div>
                <TextReveal
                  as="h2"
                  stagger={0.03}
                  style={{
                    fontFamily: SERIF,
                    fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
                    fontWeight: 400, lineHeight: 1.25,
                  }}
                >
                  Your family is part of the treatment team
                </TextReveal>

                <AnimateIn variant="blurUp" delay={0.2}>
                  <p style={{
                    marginTop: 16, fontSize: '.95rem', lineHeight: 1.75,
                    color: 'rgba(255,255,255,.8)',
                  }}>
                    Healing doesn't happen in isolation. We involve parents and
                    guardians from the very first day because lasting change
                    requires a family working together. Through structured
                    therapy sessions, educational workshops, and consistent
                    communication, we ensure your family is equipped to support
                    your teen long after discharge.
                  </p>
                </AnimateIn>

                <StaggerGroup
                  variant="fadeUp"
                  stagger={0.1}
                  style={{
                    listStyle: 'none', padding: 0, marginTop: 24,
                    display: 'flex', flexDirection: 'column', gap: 12,
                  }}
                >
                  {[
                    'Weekly progress updates from your teen\'s care team',
                    'Family therapy integrated into every treatment plan',
                    'Parent education workshops and support groups',
                    'Comprehensive discharge and transition planning',
                  ].map((item) => (
                    <StaggerItem key={item}>
                      <div style={{
                        display: 'flex', alignItems: 'flex-start', gap: 10,
                        fontSize: '.9rem', lineHeight: 1.5,
                        color: 'rgba(255,255,255,.9)',
                      }}>
                        <IconCheck style={{
                          flexShrink: 0, color: 'rgba(255,255,255,.7)',
                          marginTop: 2, width: 16, height: 16,
                        }} />
                        {item}
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>
            </div>
          </div>
        </section>


        {/* ────────────────────────────────────────
            8. TREATMENT TEAM — blurUp stagger
        ──────────────────────────────────────── */}
        <section id="about" style={{ padding: '80px 0' }}>
          <div className="wrap">
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <AnimateIn variant="fadeIn">
                <span style={{
                  fontSize: '.7rem', fontWeight: 600, letterSpacing: '.1em',
                  textTransform: 'uppercase', color: SAGE,
                }}>
                  Our Team
                </span>
              </AnimateIn>
              <CharReveal
                as="h2"
                stagger={0.02}
                style={{
                  fontFamily: SERIF,
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  fontWeight: 400, lineHeight: 1.25, marginTop: 8,
                }}
              >
                A multidisciplinary team, working as one
              </CharReveal>
              <AnimateIn variant="blurUp" delay={0.3}>
                <p style={{
                  marginTop: 12, color: 'var(--body)', fontSize: '.95rem',
                  lineHeight: 1.7, maxWidth: 560, marginLeft: 'auto',
                  marginRight: 'auto',
                }}>
                  Led by <strong>{team.clinical}</strong>, our team brings
                  together specialists across every dimension of adolescent care.
                </p>
              </AnimateIn>
            </div>

            <StaggerGroup
              variant="blurUp"
              stagger={0.08}
              style={{
                display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: 16, maxWidth: 800, margin: '0 auto',
              }}
            >
              {team.members.map((member) => (
                <StaggerItem key={member}>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    padding: '16px 20px', background: '#fff',
                    borderRadius: 'var(--radius)', border: '1px solid rgba(0,0,0,.05)',
                  }}>
                    <IconUser style={{ flexShrink: 0, color: SAGE }} />
                    <span style={{
                      fontSize: '.88rem', fontWeight: 500, color: 'var(--text)',
                    }}>
                      {member}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>


        {/* ────────────────────────────────────────
            9. FAQs
        ──────────────────────────────────────── */}
        <section style={{ padding: '80px 0', background: WARM }}>
          <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 32px' }}>
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <AnimateIn variant="fadeIn">
                <span style={{
                  fontSize: '.7rem', fontWeight: 600, letterSpacing: '.1em',
                  textTransform: 'uppercase', color: SAGE,
                }}>
                  Common Questions
                </span>
              </AnimateIn>
              <CharReveal
                as="h2"
                stagger={0.025}
                style={{
                  fontFamily: SERIF,
                  fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                  fontWeight: 400, lineHeight: 1.25, marginTop: 8,
                }}
              >
                We know this is overwhelming
              </CharReveal>
            </div>

            <AnimateIn variant="slideUp" delay={0.1}>
              <div style={{
                background: '#fff', borderRadius: 'var(--radius-lg)',
                padding: '8px 32px', border: '1px solid rgba(0,0,0,.05)',
              }}>
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


        {/* ────────────────────────────────────────
            10. INSURANCE + ACCREDITATIONS — stagger
        ──────────────────────────────────────── */}
        <section id="admissions" style={{ padding: '64px 0' }}>
          <div className="wrap" style={{ textAlign: 'center' }}>
            <AnimateIn variant="fadeUp">
              <span style={{
                fontSize: '.7rem', fontWeight: 600, letterSpacing: '.1em',
                textTransform: 'uppercase', color: SAGE,
              }}>
                Insurance & Accreditation
              </span>
              <h2 style={{
                fontFamily: SERIF,
                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                fontWeight: 400, lineHeight: 1.25, marginTop: 8,
              }}>
                Making treatment accessible
              </h2>
              <p style={{
                marginTop: 12, color: 'var(--body)', fontSize: '.9rem',
                lineHeight: 1.7, maxWidth: 480, margin: '12px auto 0',
              }}>
                We work with major insurance providers and maintain the highest
                accreditation standards. Call us to verify your coverage.
              </p>
            </AnimateIn>

            {/* Insurance logos */}
            <StaggerGroup
              stagger={0.1}
              variant="scaleUp"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: 32, flexWrap: 'wrap', marginTop: 40,
              }}
            >
              {insurance.map((ins) => (
                <StaggerItem key={ins.name}>
                  {ins.logo ? (
                    <img
                      src={ins.logo}
                      alt={ins.name}
                      className="wi-logo-img"
                      style={{
                        height: 36, filter: 'grayscale(100%)', opacity: .5,
                        transition: 'all .2s ease',
                      }}
                    />
                  ) : (
                    <span style={{
                      fontSize: '.85rem', fontWeight: 600,
                      color: 'var(--muted)', letterSpacing: '.02em',
                    }}>
                      {ins.name}
                    </span>
                  )}
                </StaggerItem>
              ))}
            </StaggerGroup>

            {/* Accreditation logos */}
            <StaggerGroup
              stagger={0.12}
              variant="scaleUp"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: 32, flexWrap: 'wrap', marginTop: 32,
                paddingTop: 32, borderTop: '1px solid rgba(0,0,0,.06)',
              }}
            >
              {accreditations.map((acc) => (
                <StaggerItem key={acc.name}>
                  {acc.logo ? (
                    <img
                      src={acc.logo}
                      alt={acc.name}
                      className="wi-logo-img"
                      style={{
                        height: 44, filter: 'grayscale(100%)', opacity: .5,
                        transition: 'all .2s ease',
                      }}
                    />
                  ) : (
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      fontSize: '.82rem', fontWeight: 600,
                      color: 'var(--muted)',
                    }}>
                      <IconShield style={{ width: 16, height: 16 }} />
                      {acc.name}
                    </span>
                  )}
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>


        {/* ────────────────────────────────────────
            11. CTA — Final call to action
        ──────────────────────────────────────── */}
        <section style={{
          background: DARK, color: '#fff',
          padding: '96px 0', textAlign: 'center',
        }}>
          <div className="wrap" style={{ maxWidth: 640 }}>
            <CharReveal
              as="h2"
              stagger={0.02}
              duration={0.45}
              style={{
                fontFamily: SERIF,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 400, lineHeight: 1.2,
              }}
            >
              One call can change everything
            </CharReveal>

            <TextReveal
              style={{
                marginTop: 16, fontSize: '1.05rem', lineHeight: 1.7,
                color: 'rgba(255,255,255,.7)', maxWidth: 480,
                marginLeft: 'auto', marginRight: 'auto',
              }}
              stagger={0.03}
            >
              Our admissions team is available 24/7. No waitlists, no judgment — just a conversation about what your family needs.
            </TextReveal>

            <AnimateIn delay={0.4} variant="fadeUp">
              <div style={{
                marginTop: 32, display: 'flex', gap: 12,
                justifyContent: 'center', flexWrap: 'wrap',
              }}>
                <MagneticButton strength={0.3}>
                  <a href={site.phoneTel} className="btn btn-white">
                    <IconPhone /> Call {site.phone}
                  </a>
                </MagneticButton>
                <MagneticButton strength={0.3}>
                  <a href="#admissions" className="btn btn-ghost">
                    Verify Insurance
                  </a>
                </MagneticButton>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.6} variant="fadeIn">
              <p style={{
                marginTop: 24, fontSize: '.82rem',
                color: 'rgba(255,255,255,.4)',
              }}>
                <IconMapPin style={{ width: 12, height: 12, display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />
                {site.address}
              </p>
            </AnimateIn>
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <Footer />


      {/* ── Scoped Styles ── */}
      <style>{`
        /* Logo hover effect */
        .wi-logo-img:hover {
          filter: grayscale(0%) !important;
          opacity: 1 !important;
        }

        /* Program grids — responsive */
        @media (max-width: 900px) {
          .wi-program-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .wi-program-img-wrap {
            order: 1 !important;
          }
          .wi-program-content-wrap {
            order: 2 !important;
          }
          .wi-numbers-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 40px 24px !important;
          }
          .wi-family-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }

        @media (max-width: 500px) {
          .wi-numbers-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
