import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import AnimateIn, { StaggerGroup, StaggerItem } from '../components/AnimateIn'
import TextReveal, { CharReveal } from '../components/TextReveal'
import MagneticButton from '../components/MagneticButton'
import ProfileChip from '../components/ProfileChip'
import CountUp from '../components/CountUp'
import Lightbox from '../components/Lightbox'
import FaqItem from '../components/FaqItem'
import StatBlock from '../components/StatBlock'
import StepCard from '../components/StepCard'
import TimelineRow from '../components/Timeline'
import CardStack from '../components/CardStack'
import useDragScroll from '../hooks/useDragScroll'
import { IconPhone, IconCheck, IconUser, IconShield, IconMapPin } from '../components/Icons'
import { site, CDN_URL } from '../data/common'
import {
  heroData,
  introData,
  whoThisIsForData,
  facilityGalleryImages,
  programHighlightsData,
  conditionsOverviewData,
  therapiesOverviewData,
  youthAcademyData,
  testimonialData,
  dailyScheduleData,
  statsData,
  familySectionData,
  teamOverviewData,
  faqsData,
  insuranceOverviewData,
  accreditationsOverviewData,
  admissionsOverviewData,
  finalCtaData,
} from '../data/homepage'
import { generateMeta } from '../utils/meta'
import { generateMedicalOrganization, generateLocalBusiness } from '../utils/schema'

/* -- JSON-LD structured data -- */
const medicalOrgSchema = generateMedicalOrganization({
  credentials: accreditationsOverviewData.map((entry) => entry.name),
})
const localBusinessSchema = generateLocalBusiness({
  ratingValue: site.rating,
  reviewCount: site.reviewCount,
})

/* -- SEO metadata -- */
export const meta = generateMeta({
  title: 'Teen Mental Health Treatment in Las Vegas',
  description: `Evidence-based residential treatment and therapy programs for teens ${site.ages} in Las Vegas. Joint Commission accredited. Call ${site.phone} for 24/7 support.`,
  path: '/',
  keywords: ['teen mental health treatment Las Vegas', 'adolescent treatment center Nevada', 'residential treatment teens', 'teen residential treatment Las Vegas', 'Silver State Treatment Center'],
  jsonLd: [medicalOrgSchema, localBusinessSchema],
})

/* -- Palette -- */
const SAGE = 'var(--sage)'
const SAGE_LIGHT = '#6d8e82'
const CREAM = 'var(--cream)'
const WARM = 'var(--warm)'
const DARK = 'var(--dark)'
const DISPLAY = 'var(--font-display)'

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const { ref: carouselRef, isDragging, handlers: dragHandlers } = useDragScroll(1.5)

  // Apply SEO meta tags at runtime (SPA mode)
  useEffect(() => {
    const prevTitle = document.title
    const addedElements: HTMLElement[] = []

    for (const [index, tag] of meta.entries()) {
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
      } else if (tag['script:ld+json']) {
        const key = `home-jsonld-${index}`
        let el = document.querySelector<HTMLScriptElement>(
          `script[type="application/ld+json"][data-meta-key="${key}"]`,
        )
        if (!el) {
          el = document.createElement('script')
          el.type = 'application/ld+json'
          el.dataset.metaKey = key
          document.head.appendChild(el)
          addedElements.push(el)
        }
        el.textContent = JSON.stringify(tag['script:ld+json'])
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
      {/* ----------------------------------------
          1. HERO — Full viewport with video background
      ---------------------------------------- */}
      <section
        style={{
          position: 'relative',
          height: '100vh',
          minHeight: 540,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Video background — poster image shown until video loads */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={heroData.backgroundImage.src}
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        >
          <source src="/Videos/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Overlay gradient */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(15,23,42,.55) 0%, rgba(15,23,42,.7) 100%)',
          }}
        />

        {/* Hero content */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            color: '#fff',
            padding: '0 32px',
            maxWidth: 720,
          }}
        >
          <CharReveal
            as="h1"
            stagger={0.015}
            duration={0.5}
            triggerStart="top 90%"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              fontWeight: 700,
              lineHeight: 0.92,
              letterSpacing: '-0.03em',
              textShadow: '0 2px 20px rgba(0,0,0,.25)',
              textWrap: 'balance',
            }}
          >
            {heroData.headline}
          </CharReveal>

          <TextReveal
            style={{
              marginTop: 20,
              fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
              lineHeight: 1.65,
              color: 'rgba(255,255,255,.85)',
              maxWidth: 560,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
            stagger={0.03}
            triggerStart="top 90%"
          >
            {heroData.body}
          </TextReveal>

          <AnimateIn delay={0.8} variant="fadeUp">
            <div
              style={{
                marginTop: 32,
                display: 'flex',
                gap: 12,
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <MagneticButton strength={0.25}>
                <a
                  href={heroData.ctaPrimary.href}
                  className="btn btn-white btn-pulse"
                  aria-label={`Call Silver State at ${site.phone}`}
                >
                  <IconPhone /> {heroData.ctaPrimary.label}
                </a>
              </MagneticButton>
              <MagneticButton strength={0.25}>
                <Link to={heroData.ctaSecondary.href} className="btn btn-ghost">
                  {heroData.ctaSecondary.label}
                </Link>
              </MagneticButton>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ----------------------------------------
          2. INTRO — Story opening (scrub reveal)
      ---------------------------------------- */}
      <section style={{ padding: '64px 0 72px' }}>
        <div
          style={{
            maxWidth: 640,
            margin: '0 auto',
            padding: '0 32px',
            textAlign: 'center',
          }}
        >
          <TextReveal
            as="p"
            scrub={true}
            triggerStart="top 75%"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.35rem, 2.5vw, 1.75rem)',
              fontWeight: 500,
              lineHeight: 1.45,
              color: 'var(--text)',
            }}
          >
            {introData.paragraph}
          </TextReveal>

          <p
            style={{
              marginTop: 24,
              color: 'var(--body)',
              fontSize: '.88rem',
              lineHeight: 1.65,
            }}
          >
            {introData.credibilityLine}
          </p>
        </div>
      </section>

      {/* ----------------------------------------
          2b. WHO THIS IS FOR — Asymmetric layout
      ---------------------------------------- */}
      <section style={{ padding: '40px 0 80px' }}>
        <div className="wrap">
          <div
            className="home-whothisis-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.2fr',
              gap: 64,
              alignItems: 'start',
            }}
          >
            {/* Left — sticky heading */}
            <div className="home-whothisis-sticky">
              <AnimateIn variant="fadeIn">
                <span
                  style={{
                    fontSize: '.7rem',
                    fontWeight: 600,
                    letterSpacing: '.1em',
                    textTransform: 'uppercase',
                    color: 'var(--sage)',
                  }}
                >
                  Is This Right for You?
                </span>
                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                    fontWeight: 700,
                    lineHeight: 0.95,
                    marginTop: 12,
                    letterSpacing: '-0.03em',
                    textWrap: 'balance',
                  }}
                >
                  {whoThisIsForData.headline}
                </h2>
                <p
                  style={{
                    marginTop: 16,
                    color: 'var(--body)',
                    fontSize: '.95rem',
                    lineHeight: 1.7,
                    maxWidth: 400,
                  }}
                >
                  {whoThisIsForData.body}
                </p>
              </AnimateIn>
            </div>

            {/* Right — profile chips */}
            <AnimateIn
              variant="fadeUp"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}
            >
              {whoThisIsForData.profiles.map((p) => (
                <ProfileChip key={p.label} label={p.label} desc={p.desc} />
              ))}
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ----------------------------------------
          3. PROGRAMS — Scrollytelling
      ---------------------------------------- */}
      <section style={{ position: 'relative', background: CREAM }}>
        <div
          className="wrap"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 56,
            padding: '80px 32px',
          }}
        >
          {/* Sticky Images Container */}
          <div
            className="home-program-img-stack"
            style={{
              position: 'relative',
              height: 'var(--sticky-height, 600px)',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
            }}
          >
            <img
              src={`${CDN_URL}/assets/teen-therapist.jpg`}
              alt="Teen participating in a therapy session"
              loading="lazy"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>

          {/* Scrolling Content */}
          <div>
            {programHighlightsData.map((program) => (
              <AnimateIn
                key={program.slug}
                variant="fadeUp"
              >
                <div
                  className="home-program-panel"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    marginBottom: 40,
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      fontSize: '.75rem',
                      fontWeight: 600,
                      letterSpacing: '.12em',
                      textTransform: 'uppercase',
                      color: SAGE,
                      marginBottom: 16,
                    }}
                  >
                    {program.label}
                  </span>

                  <h2
                    style={{
                      fontFamily: DISPLAY,
                      fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
                      fontWeight: 700,
                      lineHeight: 0.95,
                      color: 'var(--text)',
                      letterSpacing: '-0.03em',
                      textWrap: 'balance',
                    }}
                  >
                    {program.title}
                  </h2>

                  <p
                    style={{
                      marginTop: 20,
                      color: 'var(--body)',
                      fontSize: '1.05rem',
                      lineHeight: 1.8,
                    }}
                  >
                    {program.body}
                  </p>

                  <div
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      marginTop: 32,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 14,
                    }}
                  >
                    {program.features.map((f) => (
                      <div
                        key={f}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 12,
                          fontSize: '.95rem',
                          color: 'var(--body)',
                          lineHeight: 1.6,
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
                        {f}
                      </div>
                    ))}
                  </div>

                  <Link
                    to={`/programs/${program.slug}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      marginTop: 24,
                      fontSize: '.9rem',
                      fontWeight: 600,
                      color: SAGE,
                      textDecoration: 'none',
                    }}
                  >
                    Learn more about {program.label} &rarr;
                  </Link>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------
          4. WHAT WE TREAT & THERAPIES — Editorial Grid (CardStack)
      ---------------------------------------- */}
      <section
        style={{
          padding: '120px 0 160px',
          background: CREAM,
          borderTop: '1px solid rgba(0,0,0,.08)',
        }}
      >
        <div className="wrap" style={{ maxWidth: 960 }}>
          <AnimateIn variant="fadeIn" style={{ marginBottom: 64, textAlign: 'center' }}>
            <span
              style={{
                fontSize: '.75rem',
                fontWeight: 600,
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                color: SAGE,
              }}
            >
              Conditions We Treat
            </span>
            <h2
              style={{
                fontFamily: DISPLAY,
                fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
                fontWeight: 700,
                lineHeight: 0.95,
                marginTop: 12,
                letterSpacing: '-0.03em',
                textWrap: 'balance',
              }}
            >
              Comprehensive care for complex challenges
            </h2>
          </AnimateIn>

          <CardStack topStart={120} topStep={20}>
            {conditionsOverviewData.map((cat, catIdx) => (
              <div
                key={cat.category}
                className="bento-card"
                style={{
                  minHeight: 400,
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: catIdx % 2 === 0 ? '#fff' : '#faf9f6',
                  boxShadow: '0 -10px 40px rgba(0,0,0,0.05)',
                }}
              >
                <h3
                  style={{
                    fontSize: '.9rem',
                    fontWeight: 700,
                    letterSpacing: '.1em',
                    textTransform: 'uppercase',
                    color: 'var(--text)',
                    marginBottom: 32,
                    paddingBottom: 16,
                    borderBottom: '2px solid var(--text)',
                  }}
                >
                  {cat.category}
                </h3>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                    gap: '20px 32px',
                    flex: 1,
                    alignContent: 'start',
                  }}
                >
                  {cat.conditions.map((c) => (
                    <Link
                      key={c.slug}
                      to={`/conditions/${c.slug}`}
                      style={{
                        fontSize: '1.05rem',
                        color: 'var(--body)',
                        textDecoration: 'none',
                      }}
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Card 4: Therapies */}
            <div
              className="bento-card"
              style={{
                minHeight: 400,
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: SAGE,
                color: '#fff',
                boxShadow: '0 -10px 40px rgba(0,0,0,0.05)',
              }}
            >
              <h3
                style={{
                  fontSize: '.9rem',
                  fontWeight: 700,
                  letterSpacing: '.1em',
                  textTransform: 'uppercase',
                  color: '#fff',
                  marginBottom: 32,
                  paddingBottom: 16,
                  borderBottom: '2px solid rgba(255,255,255,.3)',
                }}
              >
                Therapeutic Modalities
              </h3>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                  gap: '20px 32px',
                  flex: 1,
                  alignContent: 'start',
                }}
              >
                {therapiesOverviewData.map((t) => (
                  <span key={t} style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,.9)' }}>{t}</span>
                ))}
              </div>
            </div>
          </CardStack>
        </div>
      </section>

      {/* ----------------------------------------
          4b. YOUTH ACADEMY
      ---------------------------------------- */}
      <section
        style={{
          background: DARK,
          color: '#fff',
          padding: '96px 0',
          borderTop: '1px solid rgba(255,255,255,.06)',
        }}
      >
        <div className="wrap">
          <div
            className="home-academy-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 64,
              alignItems: 'center',
            }}
          >
            {/* Content */}
            <AnimateIn variant="fadeIn">
              <span
                style={{
                  fontSize: '.7rem',
                  fontWeight: 600,
                  letterSpacing: '.1em',
                  textTransform: 'uppercase',
                  color: SAGE_LIGHT,
                }}
              >
                {youthAcademyData.label}
              </span>
              <h2
                style={{
                  fontFamily: DISPLAY,
                  fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                  fontWeight: 700,
                  lineHeight: 0.95,
                  marginTop: 12,
                  letterSpacing: '-0.03em',
                  textWrap: 'balance',
                }}
              >
                {youthAcademyData.headline}
              </h2>
              <p
                style={{
                  marginTop: 16,
                  color: 'rgba(255,255,255,.7)',
                  fontSize: '.95rem',
                  lineHeight: 1.75,
                }}
              >
                {youthAcademyData.body}
              </p>

              {/* Feature grid — 2x2 */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 16,
                  marginTop: 32,
                }}
              >
                {youthAcademyData.features.map((f) => (
                  <div
                    key={f.title}
                    style={{
                      padding: '20px',
                      borderRadius: 'var(--radius)',
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: DISPLAY,
                        fontSize: '.88rem',
                        fontWeight: 600,
                        display: 'block',
                        lineHeight: 1.3,
                      }}
                    >
                      {f.title}
                    </span>
                    <span
                      style={{
                        fontSize: '.82rem',
                        color: 'rgba(255,255,255,.5)',
                        lineHeight: 1.5,
                        marginTop: 6,
                        display: 'block',
                      }}
                    >
                      {f.desc}
                    </span>
                  </div>
                ))}
              </div>
            </AnimateIn>

            {/* Image */}
            <AnimateIn variant="fadeUp">
              <div
                style={{
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  aspectRatio: '4/5',
                }}
              >
                <img
                  src={`${CDN_URL}/assets/teen-therapist.jpg`}
                  alt="Youth Academy classroom environment"
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>

              {/* Director callout */}
              <div
                style={{
                  marginTop: 16,
                  padding: '16px 20px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 'var(--radius)',
                }}
              >
                <span
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: '.85rem',
                    fontWeight: 600,
                    display: 'block',
                  }}
                >
                  {youthAcademyData.director.name}
                </span>
                <span
                  style={{
                    fontSize: '.78rem',
                    color: SAGE_LIGHT,
                    display: 'block',
                    marginTop: 2,
                  }}
                >
                  {youthAcademyData.director.title}
                </span>
                <span
                  style={{
                    fontSize: '.8rem',
                    color: 'rgba(255,255,255,.45)',
                    lineHeight: 1.55,
                    marginTop: 8,
                    display: 'block',
                  }}
                >
                  {youthAcademyData.director.bio}
                </span>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ----------------------------------------
          5. TESTIMONIAL — Pull quote
      ---------------------------------------- */}
      <section style={{ padding: '80px 0' }}>
        <div
          style={{
            maxWidth: 640,
            margin: '0 auto',
            padding: '0 32px',
            textAlign: 'center',
          }}
        >
          <AnimateIn variant="fadeIn">
            <blockquote style={{ margin: 0, padding: 0 }}>
              <p
                style={{
                  fontFamily: DISPLAY,
                  fontSize: 'clamp(1.3rem, 2.2vw, 1.65rem)',
                  fontWeight: 500,
                  fontStyle: 'italic',
                  lineHeight: 1.4,
                  color: 'var(--text)',
                }}
              >
                {`\u201C${testimonialData.quote}\u201D`}
              </p>
              <footer style={{ marginTop: 20 }}>
                <strong style={{ fontSize: '.9rem', color: 'var(--text)' }}>
                  {testimonialData.author}
                </strong>
                <span
                  style={{
                    display: 'block',
                    fontSize: '.82rem',
                    color: 'var(--body)',
                    marginTop: 2,
                  }}
                >
                  {testimonialData.detail}
                </span>
              </footer>
            </blockquote>
          </AnimateIn>
        </div>
      </section>

      {/* ----------------------------------------
          5b. A DAY IN TREATMENT — Timeline
      ---------------------------------------- */}
      <section style={{ padding: '80px 0', background: WARM }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <AnimateIn variant="fadeIn" style={{ textAlign: 'center', marginBottom: 48 }}>
            <span
              style={{
                fontSize: '.7rem',
                fontWeight: 600,
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                color: SAGE,
              }}
            >
              Daily Life
            </span>
            <h2
              style={{
                fontFamily: DISPLAY,
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                fontWeight: 700,
                lineHeight: 0.95,
                marginTop: 8,
                letterSpacing: '-0.03em',
                textWrap: 'balance',
              }}
            >
              What a day looks like here
            </h2>
            <p
              style={{
                marginTop: 12,
                color: 'var(--body)',
                fontSize: '.95rem',
                lineHeight: 1.7,
                maxWidth: 520,
                margin: '12px auto 0',
              }}
            >
              Every day is structured with purpose — balancing clinical therapy, academics,
              recreation, and rest.
            </p>
          </AnimateIn>

          <AnimateIn variant="slideUp" delay={0.1}>
            <div
              style={{
                background: 'rgba(255,255,255,0.85)',
                borderRadius: 'var(--radius-lg)',
                padding: '12px 32px',
                border: '1px solid rgba(255,255,255,0.3)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
              }}
            >
              {dailyScheduleData.map((item, i) => (
                <TimelineRow key={i} time={item.time} activity={item.activity} desc={item.desc} />
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ----------------------------------------
          6. NUMBERS STRIP — StaggerGroup + CountUp
      ---------------------------------------- */}
      <section style={{ background: WARM, padding: '64px 0' }}>
        <div className="wrap">
          <StaggerGroup
            className="home-numbers-grid"
            stagger={0.15}
            variant="fadeUp"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 32,
              textAlign: 'center',
            }}
          >
            {statsData.map((stat) => {
              const numericValue = Number(stat.value)
              const value =
                stat.suffix && Number.isFinite(numericValue) ? (
                  <CountUp end={numericValue} suffix={stat.suffix} />
                ) : (
                  stat.value
                )

              return (
                <StaggerItem key={`${stat.value}-${stat.label}`}>
                  <StatBlock value={value} label={stat.label} />
                </StaggerItem>
              )
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* ----------------------------------------
          7. FAMILY BAND — Sage green
      ---------------------------------------- */}
      <section style={{ background: SAGE, color: '#fff' }}>
        <div className="wrap" style={{ padding: '0 32px' }}>
          <div
            className="home-family-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 56,
              alignItems: 'center',
              padding: '80px 0',
            }}
          >
            {/* Image */}
            <AnimateIn variant="fadeUp">
              <button
                type="button"
                aria-label="Open family involvement image in lightbox"
                onClick={() => setLightboxIndex(0)}
                style={{
                  position: 'relative',
                  cursor: 'pointer',
                  background: 'transparent',
                  border: 0,
                  padding: 0,
                  width: '100%',
                  textAlign: 'left',
                }}
              >
                <img
                  src={`${CDN_URL}/assets/woman-on-phone.jpg`}
                  alt="Family involvement in the treatment process"
                  loading="lazy"
                  style={{
                    width: '100%',
                    borderRadius: 'var(--radius-lg)',
                    aspectRatio: '4/5',
                    objectFit: 'cover',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    bottom: 16,
                    left: 16,
                    padding: '8px 16px',
                    borderRadius: 999,
                    background: 'rgba(0,0,0,0.5)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: '#fff',
                    fontSize: '.78rem',
                    fontWeight: 600,
                    letterSpacing: '.02em',
                  }}
                  aria-hidden="true"
                >
                  View Facility
                </span>
              </button>
            </AnimateIn>

            <AnimateIn variant="fadeIn">
              <h2
                style={{
                  fontFamily: DISPLAY,
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  fontWeight: 700,
                  lineHeight: 1.0,
                  letterSpacing: '-0.03em',
                  textWrap: 'balance',
                }}
              >
                {familySectionData.heading}
              </h2>

              <p
                style={{
                  marginTop: 16,
                  fontSize: '.95rem',
                  lineHeight: 1.75,
                  color: 'rgba(255,255,255,.8)',
                }}
              >
                {familySectionData.body}
              </p>

              <div
                style={{
                  listStyle: 'none',
                  padding: 0,
                  marginTop: 24,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                }}
              >
                {familySectionData.bulletPoints.map((item) => (
                  <div
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 10,
                      fontSize: '.9rem',
                      lineHeight: 1.5,
                      color: 'rgba(255,255,255,.9)',
                    }}
                  >
                    <IconCheck
                      style={{
                        flexShrink: 0,
                        color: 'rgba(255,255,255,.7)',
                        marginTop: 2,
                        width: 16,
                        height: 16,
                      }}
                    />
                    {item}
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ----------------------------------------
          8. TREATMENT TEAM — Carousel
      ---------------------------------------- */}
      <section style={{ padding: '80px 0' }}>
        <div className="wrap">
          <AnimateIn variant="fadeIn" style={{ textAlign: 'center', marginBottom: 48 }}>
            <span
              style={{
                fontSize: '.7rem',
                fontWeight: 600,
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                color: SAGE,
              }}
            >
              Our Team
            </span>
            <h2
              style={{
                fontFamily: DISPLAY,
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                fontWeight: 700,
                lineHeight: 0.95,
                marginTop: 8,
                letterSpacing: '-0.03em',
                textWrap: 'balance',
              }}
            >
              A multidisciplinary team, working as one
            </h2>
            <p
              style={{
                marginTop: 12,
                color: 'var(--body)',
                fontSize: '.95rem',
                lineHeight: 1.7,
                maxWidth: 560,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              Led by <strong>{teamOverviewData.clinical}</strong>, our team brings together
              specialists across every dimension of adolescent care.
            </p>
          </AnimateIn>

          {/* Scroll-Snap Team Carousel */}
          <AnimateIn variant="fadeUp" delay={0.2}>
            <div style={{ position: 'relative' }}>
              {/* Fade edges */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: 0,
                  width: 48,
                  background: 'linear-gradient(to right, var(--cream), transparent)',
                  zIndex: 1,
                  pointerEvents: 'none',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  right: 0,
                  width: 48,
                  background: 'linear-gradient(to left, var(--cream), transparent)',
                  zIndex: 1,
                  pointerEvents: 'none',
                }}
              />

              <div
                ref={carouselRef}
                {...dragHandlers}
                className="team-carousel"
                style={{
                  display: 'flex',
                  gap: 16,
                  overflowX: 'auto',
                  scrollSnapType: 'x mandatory',
                  cursor: isDragging ? 'grabbing' : 'grab',
                  paddingBottom: 8,
                  paddingLeft: 32,
                  paddingRight: 32,
                  WebkitOverflowScrolling: 'touch',
                  scrollbarWidth: 'none',
                  userSelect: 'none',
                }}
              >
                {teamOverviewData.members.map((member) => (
                  <div
                    key={member}
                    className="hover-lift"
                    style={{
                      flexShrink: 0,
                      minWidth: 220,
                      scrollSnapAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 10,
                      padding: '24px 20px',
                      background: '#fff',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid rgba(0,0,0,.05)',
                      textAlign: 'center',
                    }}
                  >
                    <IconUser style={{ color: SAGE, width: 28, height: 28 }} />
                    <span
                      style={{
                        fontSize: '.88rem',
                        fontWeight: 500,
                        color: 'var(--text)',
                      }}
                    >
                      {member}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ----------------------------------------
          9. FAQs
      ---------------------------------------- */}
      <section style={{ padding: '80px 0', background: WARM }}>
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 32px' }}>
          <AnimateIn variant="fadeIn" style={{ textAlign: 'center', marginBottom: 40 }}>
            <span
              style={{
                fontSize: '.7rem',
                fontWeight: 600,
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                color: SAGE,
              }}
            >
              Common Questions
            </span>
            <h2
              style={{
                fontFamily: DISPLAY,
                fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                fontWeight: 700,
                lineHeight: 0.95,
                marginTop: 8,
                letterSpacing: '-0.03em',
                textWrap: 'balance',
              }}
            >
              We know this is overwhelming
            </h2>
          </AnimateIn>

          <AnimateIn variant="slideUp" delay={0.1}>
            <div
              style={{
                background: 'rgba(255,255,255,0.85)',
                borderRadius: 'var(--radius-lg)',
                padding: '8px 32px',
                border: '1px solid rgba(255,255,255,0.3)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
              }}
            >
              {faqsData.map((faq, i) => (
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

      {/* ----------------------------------------
          10. INSURANCE + ACCREDITATIONS
      ---------------------------------------- */}
      <section style={{ padding: '64px 0' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <AnimateIn variant="fadeUp">
            <span
              style={{
                fontSize: '.7rem',
                fontWeight: 600,
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                color: SAGE,
              }}
            >
              Insurance & Accreditation
            </span>
            <h2
              style={{
                fontFamily: DISPLAY,
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                fontWeight: 700,
                lineHeight: 1.0,
                marginTop: 8,
                letterSpacing: '-0.03em',
                textWrap: 'balance',
              }}
            >
              Making treatment accessible
            </h2>
            <p
              style={{
                marginTop: 12,
                color: 'var(--body)',
                fontSize: '.9rem',
                lineHeight: 1.7,
                maxWidth: 480,
                margin: '12px auto 0',
              }}
            >
              We work with major insurance providers and maintain the highest accreditation
              standards.{' '}
              <Link
                to="/insurance"
                style={{ color: SAGE, fontWeight: 600, textDecoration: 'none' }}
              >
                Verify your coverage
              </Link>
              .
            </p>
          </AnimateIn>

          {/* Insurance logos — glassmorphic panel */}
          <div
            style={{
              background: 'rgba(255,255,255,0.6)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid rgba(0,0,0,0.04)',
              padding: '32px 24px',
              marginTop: 40,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 32,
                flexWrap: 'wrap',
              }}
            >
              {insuranceOverviewData.map((ins) => (
                ins.logo ? (
                  <img
                    key={ins.name}
                    src={ins.logo}
                    alt={`${ins.name} insurance accepted`}
                    loading="lazy"
                    className="home-logo-img"
                    style={{
                      height: 36,
                    }}
                  />
                ) : (
                  <span
                    key={ins.name}
                    style={{
                      fontSize: '.85rem',
                      fontWeight: 600,
                      color: 'var(--body)',
                      letterSpacing: '.02em',
                    }}
                  >
                    {ins.name}
                  </span>
                )
              ))}
            </div>
          </div>

          {/* Accreditation logos — glassmorphic panel */}
          <div
            style={{
              background: 'rgba(255,255,255,0.6)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid rgba(0,0,0,0.04)',
              padding: '32px 24px',
              marginTop: 16,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 32,
                flexWrap: 'wrap',
              }}
            >
              {accreditationsOverviewData.map((acc) => (
                acc.logo ? (
                  <img
                    key={acc.name}
                    src={acc.logo}
                    alt={`${acc.name} accreditation badge`}
                    loading="lazy"
                    className="home-logo-img"
                    style={{
                      height: 44,
                    }}
                  />
                ) : (
                  <span
                    key={acc.name}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      fontSize: '.82rem',
                      fontWeight: 600,
                      color: 'var(--body)',
                    }}
                  >
                    <IconShield style={{ width: 16, height: 16 }} />
                    {acc.name}
                  </span>
                )
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------
          10b. HOW ADMISSIONS WORKS — Step cards
      ---------------------------------------- */}
      <section style={{ padding: '80px 0', background: WARM }}>
        <div className="wrap" style={{ maxWidth: 960 }}>
          <AnimateIn variant="fadeIn" style={{ textAlign: 'center', marginBottom: 48 }}>
            <span
              style={{
                fontSize: '.7rem',
                fontWeight: 600,
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                color: SAGE,
              }}
            >
              Getting Started
            </span>
            <h2
              style={{
                fontFamily: DISPLAY,
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                fontWeight: 700,
                lineHeight: 0.95,
                marginTop: 8,
                letterSpacing: '-0.03em',
                textWrap: 'balance',
              }}
            >
              From first call to first day
            </h2>
            <p
              style={{
                marginTop: 12,
                color: 'var(--body)',
                fontSize: '.95rem',
                lineHeight: 1.7,
                maxWidth: 480,
                margin: '12px auto 0',
              }}
            >
              We&apos;ve simplified admissions so you can focus on your family. Most families
              complete the process within 24-48 hours.
            </p>
          </AnimateIn>

          <AnimateIn
            variant="fadeUp"
            className="home-steps-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 20,
            }}
          >
            {admissionsOverviewData.map((step) => (
              <StepCard key={step.step} step={step.step} title={step.title} desc={step.desc} />
            ))}
          </AnimateIn>

          <AnimateIn variant="fadeUp">
            <div
              style={{
                textAlign: 'center',
                marginTop: 40,
                display: 'flex',
                gap: 12,
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <MagneticButton strength={0.25}>
                <a
                  href={site.phoneTel}
                  className="btn btn-primary btn-sage-pulse"
                  aria-label={`Call Silver State at ${site.phone}`}
                >
                  <IconPhone /> Start the conversation
                </a>
              </MagneticButton>
              <Link
                to="/admissions"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  fontSize: '.9rem',
                  fontWeight: 600,
                  color: SAGE,
                  textDecoration: 'none',
                  padding: '10px 20px',
                }}
              >
                Learn more about admissions &rarr;
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ----------------------------------------
          11. FINAL CTA — Dark closing conversion
      ---------------------------------------- */}
      <section style={{ background: DARK, color: '#fff', padding: '96px 0', textAlign: 'center' }}>
        <div className="wrap" style={{ maxWidth: 640 }}>
          <CharReveal
            as="h2"
            stagger={0.02}
            duration={0.45}
            style={{
              fontFamily: DISPLAY,
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 0.92,
              letterSpacing: '-0.04em',
              textWrap: 'balance',
            }}
          >
            {finalCtaData.headline}
          </CharReveal>

          <p
            style={{
              marginTop: 16,
              fontSize: '1.05rem',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,.7)',
              maxWidth: 480,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            {finalCtaData.body}
          </p>

          <AnimateIn delay={0.3} variant="fadeUp">
            <div
              style={{
                marginTop: 32,
                display: 'flex',
                gap: 12,
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <MagneticButton strength={0.3}>
                <a
                  href={site.phoneTel}
                  className="btn btn-white btn-pulse"
                  aria-label={`Call Silver State at ${site.phone}`}
                >
                  <IconPhone /> {finalCtaData.primaryCtaLabel}
                </a>
              </MagneticButton>
              <MagneticButton strength={0.3}>
                <Link to={finalCtaData.secondaryCtaHref} className="btn btn-ghost">
                  {finalCtaData.secondaryCtaLabel}
                </Link>
              </MagneticButton>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.6} variant="fadeIn">
            <p
              style={{
                marginTop: 24,
                fontSize: '.82rem',
                color: 'rgba(255,255,255,.4)',
              }}
            >
              <IconMapPin
                style={{
                  width: 12,
                  height: 12,
                  display: 'inline',
                  verticalAlign: 'middle',
                  marginRight: 4,
                }}
              />
              {site.address}
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* -- Lightbox -- */}
      {lightboxIndex !== null && (
        <Lightbox
          images={facilityGalleryImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((i) => Math.max(0, (i ?? 0) - 1))}
          onNext={() =>
            setLightboxIndex((i) => Math.min(facilityGalleryImages.length - 1, (i ?? 0) + 1))
          }
        />
      )}

      {/* -- Scoped Styles -- */}
      <style>{`
        /* Logo hover effect — subtle lift */
        .home-logo-img {
          transition: transform .2s ease;
        }
        .home-logo-img:hover {
          transform: scale(1.05);
        }

        /* Team Carousel scrollbar hide */
        .team-carousel::-webkit-scrollbar { display: none; }

        /* Sticky sidebar for "Who This Is For" — desktop only */
        .home-whothisis-sticky {
          position: sticky;
          top: 120px;
        }

        /* Sticky program image — desktop only */
        .home-program-img-stack {
          position: sticky;
          top: 120px;
        }

        /* Program scroll panels — tall on desktop for scrollytelling */
        .home-program-panel {
          min-height: 80vh;
        }

        /* ── Mobile (< 900px) ── */
        @media (max-width: 900px) {
          .home-whothisis-sticky {
            position: static !important;
          }
          .home-whothisis-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .home-program-img-stack {
            position: static !important;
            height: 300px !important;
          }
          .home-program-panel {
            min-height: auto !important;
          }
          .home-numbers-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 40px 24px !important;
          }
          .home-family-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .home-academy-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .home-steps-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        /* ── Narrow (< 500px) ── */
        @media (max-width: 500px) {
          .home-numbers-grid {
            grid-template-columns: 1fr !important;
          }
          .home-steps-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}
