import { Link } from 'react-router'
import { site } from '../../data/common'
import { generateMeta } from '../../utils/meta'
import { generateWebPage } from '../../utils/schema'
import AnimateIn, { StaggerGroup, StaggerItem } from '../../components/AnimateIn'
import { CharReveal } from '../../components/TextReveal'
import MagneticButton from '../../components/MagneticButton'
import { IconPhone } from '../../components/Icons'

const DISPLAY = 'var(--font-display)'
const WARM = 'var(--warm)'

const SITE_URL = (import.meta.env?.VITE_SITE_URL || 'https://www.silverstatetreatment.com').replace(
  /\/+$/,
  '',
)

export const meta = generateMeta({
  title: 'Resources | Teen Mental Health Articles & Guides | Silver State',
  description:
    'Evidence-based articles on adolescent mental health, crisis intervention, and teen behavioral health from Silver State Treatment Center.',
  path: '/resources',
  keywords: ['teen mental health resources', 'adolescent treatment resources', 'parent resources teen mental health', 'teen crisis resources', 'mental health education teens'],
  jsonLd: [
    generateWebPage({
      title: 'Resources',
      description:
        'Evidence-based articles on adolescent mental health, crisis intervention, and teen behavioral health.',
      url: `${SITE_URL}/resources`,
    }),
  ],
})

const articles = [
  {
    title: 'Crisis Prevention & Intervention for Teen Mental Health',
    description:
      'Learn what CPI is, how supportive approaches help teens in crisis, and when professional intervention becomes necessary.',
    href: '/resources/crisis-prevention-intervention',
    label: 'Crisis Prevention',
  },
  {
    title: 'How to Help a Defiant Teenager',
    description:
      'Understand the signs of teenage defiance, what causes it, and evidence-based treatment options that help families move forward.',
    href: '/resources/defiant-teenager-treatment',
    label: 'Defiant Teens',
  },
  {
    title: 'Signs of Burnout in Middle & High School Students',
    description:
      'Recognize the symptoms of academic burnout in adolescents and learn what parents can do to support their teen.',
    href: '/resources/school-burnout-signs',
    label: 'School Burnout',
  },
]

export default function ResourcesIndex() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: '64px 0 48px', background: WARM }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <AnimateIn variant="fadeUp">
            <span className="section-label">Learn More</span>
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
            Resources
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
              Evidence-based articles on adolescent mental health written by our clinical team.
              Whether you&rsquo;re a parent researching treatment options or an educator supporting
              students, these guides provide practical, actionable information.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── ARTICLES ── */}
      <section style={{ padding: '64px 0' }}>
        <div className="wrap" style={{ maxWidth: 900 }}>
          <StaggerGroup
            stagger={0.1}
            variant="fadeUp"
            style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
          >
            {articles.map((article) => (
              <StaggerItem key={article.href}>
                <Link
                  to={article.href}
                  style={{
                    display: 'block',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  <div
                    className="bento-card"
                    style={{
                      padding: '32px',
                      transition: 'box-shadow 0.2s ease',
                    }}
                  >
                    <span
                      className="section-label"
                      style={{ marginBottom: 8, display: 'block' }}
                    >
                      {article.label}
                    </span>
                    <h2
                      style={{
                        fontFamily: DISPLAY,
                        fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                        fontWeight: 700,
                        lineHeight: 1.2,
                        marginBottom: 12,
                      }}
                    >
                      {article.title}
                    </h2>
                    <p
                      style={{
                        color: 'var(--body)',
                        fontSize: '.95rem',
                        lineHeight: 1.7,
                        marginBottom: 16,
                      }}
                    >
                      {article.description}
                    </p>
                    <span
                      style={{
                        color: 'var(--sage)',
                        fontWeight: 600,
                        fontSize: '.95rem',
                      }}
                    >
                      Read article &rarr;
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ── CTA ── */}
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
              Need Help Now?
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
              Our admissions team is available 24/7 for a free, confidential assessment.
              Call {site.phone} to discuss your teen&rsquo;s needs.
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
    </>
  )
}
