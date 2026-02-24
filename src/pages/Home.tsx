import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import AnimateIn, { StaggerGroup, StaggerItem } from '../components/AnimateIn'
import TextReveal, { CharReveal } from '../components/TextReveal'
import Parallax, { ClipReveal } from '../components/Parallax'
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
import { site } from '../data/common'
import {
  heroData,
  introData,
  whoThisIsFor,
  facilityGalleryImages,
  programHighlightsData,
  conditionsOverviewData,
  therapiesOverviewData,
  youthAcademyData,
  testimonialData,
  dailyScheduleData,
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
const medicalOrgSchema = generateMedicalOrganization()
const localBusinessSchema = generateLocalBusiness()

/* -- SEO metadata -- */
export const meta = generateMeta({
  title: 'Teen Mental Health Treatment in Las Vegas',
  description: `Evidence-based residential, PHP, and IOP treatment for teens ${site.ages} in Las Vegas. Joint Commission accredited. Call ${site.phone} for 24/7 support.`,
  path: '/',
  jsonLd: [medicalOrgSchema, localBusinessSchema],
})

/* -- Palette -- */
const SAGE = '#5A7A6E'
const SAGE_LIGHT = '#6d8e82'
const CREAM = '#FAF7F2'
const WARM = '#F0EBE3'
const DARK = '#0f172a'
const DISPLAY = "'Space Grotesk', sans-serif"

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const { ref: carouselRef, isDragging, handlers: dragHandlers } = useDragScroll(1.5)

  // Apply SEO meta tags at runtime (SPA mode)
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
      {/* -- JSON-LD Structured Data -- */}
      {/* TODO: Verify JSON-LD and meta tags appear in pre-rendered HTML once SSR-level pre-rendering is implemented (current prerender.ts uses noscript fallback only) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalOrgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* ----------------------------------------
          1. HERO — Full viewport with parallax zoom-out
      ---------------------------------------- */}
      <section
        style={{
          position: 'relative',
          height: '85vh',
          minHeight: 540,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <Parallax
          speed={0.4}
          scale={true}
          scaleFrom={1.2}
          scaleTo={1}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <img
            src={heroData.backgroundImage.src}
            alt={heroData.backgroundImage.alt}
            width={1920}
            height={1080}
            fetchPriority="high"
            loading="eager"
            style={{
              width: '100%',
              height: '120%',
              objectFit: 'cover',
            }}
          />
        </Parallax>

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

          <AnimateIn variant="blurUp" delay={0.1}>
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
          </AnimateIn>
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
              </AnimateIn>
              <CharReveal
                as="h2"
                stagger={0.02}
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
                {whoThisIsFor.headline}
              </CharReveal>
              <AnimateIn variant="blurUp" delay={0.2}>
                <p
                  style={{
                    marginTop: 16,
                    color: 'var(--body)',
                    fontSize: '.95rem',
                    lineHeight: 1.7,
                    maxWidth: 400,
                  }}
                >
                  {whoThisIsFor.body}
                </p>
              </AnimateIn>
            </div>

            {/* Right — profile chips */}
            <StaggerGroup
              variant="fadeUp"
              stagger={0.1}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}
            >
              {whoThisIsFor.profiles.map((p) => (
                <StaggerItem key={p.label}>
                  <ProfileChip label={p.label} desc={p.desc} />
                </StaggerItem>
              ))}
            </StaggerGroup>
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
              height: 'var(--sticky-height, 600px)',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'url(/assets/teen-therapist.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>

          {/* Scrolling Content */}
          <div>
            {programHighlightsData.map((program) => (
              <div
                key={program.slug}
                className="home-program-panel"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  marginBottom: 40,
                }}
              >
                <AnimateIn variant="fadeIn" delay={0.1}>
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
                </AnimateIn>

                <TextReveal
                  as="h2"
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
                </TextReveal>

                <AnimateIn variant="blurUp" delay={0.2}>
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
                </AnimateIn>

                <StaggerGroup
                  variant="fadeUp"
                  stagger={0.1}
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
                    <StaggerItem key={f}>
                      <div
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
                    </StaggerItem>
                  ))}
                </StaggerGroup>

                <AnimateIn variant="fadeUp" delay={0.3}>
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
                </AnimateIn>
              </div>
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
          <div style={{ marginBottom: 64, textAlign: 'center' }}>
            <AnimateIn variant="fadeIn">
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
            </AnimateIn>
            <CharReveal
              as="h2"
              stagger={0.02}
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
            </CharReveal>
          </div>

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
                    <StaggerItem key={c.slug}>
                      {/* TODO: Link to /conditions/${c.slug} when Epic 4 is complete */}
                      <span style={{ fontSize: '1.05rem', color: 'var(--body)' }}>
                        {c.name}
                      </span>
                    </StaggerItem>
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
                  <StaggerItem key={t}>
                    <span style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,.9)' }}>
                      {t}
                    </span>
                  </StaggerItem>
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
            <div>
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
              </AnimateIn>
              <CharReveal
                as="h2"
                stagger={0.02}
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
              </CharReveal>
              <AnimateIn variant="blurUp" delay={0.2}>
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
              </AnimateIn>

              {/* Feature grid — 2x2 */}
              <StaggerGroup
                variant="fadeUp"
                stagger={0.12}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 16,
                  marginTop: 32,
                }}
              >
                {youthAcademyData.features.map((f) => (
                  <StaggerItem key={f.title}>
                    <div
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
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>

            {/* Image with clip reveal */}
            <AnimateIn variant="clipUp">
              <div
                style={{
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  aspectRatio: '4/5',
                }}
              >
                <img
                  src="/assets/teen-therapist.jpg"
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
              <AnimateIn variant="fadeUp" delay={0.4}>
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
          <AnimateIn variant="scaleUp" duration={1.2}>
            <blockquote style={{ margin: 0, padding: 0 }}>
              <TextReveal
                as="p"
                stagger={0.03}
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
              </TextReveal>
              <AnimateIn variant="fadeUp" delay={0.6}>
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
              </AnimateIn>
            </blockquote>
          </AnimateIn>
        </div>
      </section>


      {/* ----------------------------------------
          5b. A DAY IN TREATMENT — Timeline
      ---------------------------------------- */}
      <section style={{ padding: '80px 0', background: WARM }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <AnimateIn variant="fadeIn">
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
            </AnimateIn>
            <CharReveal
              as="h2"
              stagger={0.02}
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
            </CharReveal>
            <AnimateIn variant="blurUp" delay={0.2}>
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
          </div>

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
            <StaggerItem>
              <StatBlock value="24/7" label="Clinical Support" />
            </StaggerItem>
            <StaggerItem>
              <StatBlock value="11–17" label="Ages Served" />
            </StaggerItem>
            <StaggerItem>
              <StatBlock value="4:1" label="Staff-to-Client Ratio" />
            </StaggerItem>
            <StaggerItem>
              <StatBlock
                value={<CountUp end={4.8} suffix="/5" />}
                label={`Average Review (${site.reviewCount} reviews)`}
              />
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>


      {/* ----------------------------------------
          7. FAMILY BAND — Sage green with ClipReveal + Parallax
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
            {/* Image with ClipReveal + inner Parallax + Lightbox trigger */}
            <ClipReveal direction="up" duration={1.2}>
              <Parallax speed={0.25} overflow="visible">
                <div
                  style={{ position: 'relative', cursor: 'pointer' }}
                  onClick={() => setLightboxIndex(0)}
                >
                  <img
                    src="/assets/woman-on-phone.jpg"
                    alt="Family involvement in the treatment process"
                    loading="lazy"
                    style={{
                      width: '100%',
                      borderRadius: 'var(--radius-lg)',
                      aspectRatio: '4/5',
                      objectFit: 'cover',
                    }}
                  />
                  <button
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
                      cursor: 'pointer',
                      letterSpacing: '.02em',
                      transition: 'background 0.2s',
                    }}
                    onClick={(e) => {
                      e.stopPropagation()
                      setLightboxIndex(0)
                    }}
                  >
                    View Facility
                  </button>
                </div>
              </Parallax>
            </ClipReveal>

            <div>
              <TextReveal
                as="h2"
                stagger={0.03}
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
              </TextReveal>

              <AnimateIn variant="blurUp" delay={0.2}>
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
              </AnimateIn>

              <StaggerGroup
                variant="fadeUp"
                stagger={0.1}
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
                  <StaggerItem key={item}>
                    <div
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
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </div>
      </section>


      {/* ----------------------------------------
          8. TREATMENT TEAM — Carousel
      ---------------------------------------- */}
      <section style={{ padding: '80px 0' }}>
        <div className="wrap">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <AnimateIn variant="fadeIn">
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
            </AnimateIn>
            <CharReveal
              as="h2"
              stagger={0.02}
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
            </CharReveal>
            <AnimateIn variant="blurUp" delay={0.3}>
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
          </div>

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
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <AnimateIn variant="fadeIn">
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
            </AnimateIn>
            <CharReveal
              as="h2"
              stagger={0.025}
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
            </CharReveal>
          </div>

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
            <StaggerGroup
              stagger={0.1}
              variant="scaleUp"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 32,
                flexWrap: 'wrap',
              }}
            >
              {insuranceOverviewData.map((ins) => (
                <StaggerItem key={ins.name}>
                  {ins.logo ? (
                    <img
                      src={ins.logo}
                      alt={`${ins.name} insurance accepted`}
                      loading="lazy"
                      className="home-logo-img"
                      style={{
                        height: 36,
                        filter: 'grayscale(100%)',
                        opacity: 0.5,
                        transition: 'all .2s ease',
                      }}
                    />
                  ) : (
                    <span
                      style={{
                        fontSize: '.85rem',
                        fontWeight: 600,
                        color: 'var(--body)',
                        letterSpacing: '.02em',
                      }}
                    >
                      {ins.name}
                    </span>
                  )}
                </StaggerItem>
              ))}
            </StaggerGroup>
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
            <StaggerGroup
              stagger={0.12}
              variant="scaleUp"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 32,
                flexWrap: 'wrap',
              }}
            >
              {accreditationsOverviewData.map((acc) => (
                <StaggerItem key={acc.name}>
                  {acc.logo ? (
                    <img
                      src={acc.logo}
                      alt={`${acc.name} accreditation badge`}
                      loading="lazy"
                      className="home-logo-img"
                      style={{
                        height: 44,
                        filter: 'grayscale(100%)',
                        opacity: 0.5,
                        transition: 'all .2s ease',
                      }}
                    />
                  ) : (
                    <span
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
                  )}
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>


      {/* ----------------------------------------
          10b. HOW ADMISSIONS WORKS — Step cards
      ---------------------------------------- */}
      <section style={{ padding: '80px 0', background: WARM }}>
        <div className="wrap" style={{ maxWidth: 960 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <AnimateIn variant="fadeIn">
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
            </AnimateIn>
            <CharReveal
              as="h2"
              stagger={0.02}
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
            </CharReveal>
            <AnimateIn variant="blurUp" delay={0.2}>
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
                We've simplified admissions so you can focus on your family. Most families complete
                the process within 24-48 hours.
              </p>
            </AnimateIn>
          </div>

          <StaggerGroup
            variant="fadeUp"
            stagger={0.15}
            className="home-steps-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 20,
            }}
          >
            {admissionsOverviewData.map((step) => (
              <StaggerItem key={step.step}>
                <StepCard step={step.step} title={step.title} desc={step.desc} />
              </StaggerItem>
            ))}
          </StaggerGroup>

          <AnimateIn variant="fadeUp" delay={0.4}>
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

          <TextReveal
            style={{
              marginTop: 16,
              fontSize: '1.05rem',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,.7)',
              maxWidth: 480,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
            stagger={0.03}
          >
            {finalCtaData.body}
          </TextReveal>

          <AnimateIn delay={0.4} variant="fadeUp">
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
        /* Logo hover effect */
        .home-logo-img:hover {
          filter: grayscale(0%) !important;
          opacity: 1 !important;
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
