import { Link } from 'react-router'
import AnimateIn, { StaggerGroup, StaggerItem } from '../components/AnimateIn'
import TextReveal, { CharReveal } from '../components/TextReveal'
import Parallax from '../components/Parallax'
import MagneticButton from '../components/MagneticButton'
import ProfileChip from '../components/ProfileChip'
import { IconPhone } from '../components/Icons'
import { site } from '../data/common'
import { heroData, introData, whoThisIsFor } from '../data/homepage'

export default function Home() {
  return (
    <>
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

      {/* Scoped styles */}
      <style>{`
        .home-whothisis-sticky {
          position: sticky;
          top: 120px;
        }
        @media (max-width: 900px) {
          .home-whothisis-sticky {
            position: static !important;
          }
          .home-whothisis-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </>
  )
}
