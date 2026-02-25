import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { site } from '../data/common'
import { generateMeta } from '../utils/meta'
import { generateLocalBusiness } from '../utils/schema'
import useIsMobile from '../hooks/useIsMobile'
import AnimateIn from '../components/AnimateIn'
import { CharReveal } from '../components/TextReveal'
import MagneticButton from '../components/MagneticButton'
import { IconPhone, IconMapPin, IconMail, IconArrowRight } from '../components/Icons'

const DISPLAY = "'Space Grotesk', sans-serif"
const WARM = '#F0EBE3'

const localBusinessSchema = generateLocalBusiness()

export const meta = generateMeta({
  title: 'Contact Us',
  description:
    'Contact Silver State Adolescent Treatment Center. Call 24/7 at (725) 525-9897 or send a message. Our admissions team is ready to help your family.',
  path: '/contact',
  jsonLd: [localBusinessSchema],
})

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {}
  if (!data.name.trim()) {
    errors.name = 'Name is required'
  }
  if (!data.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address'
  }
  if (data.phone.trim() && !/^[\d\s\-()+ ]+$/.test(data.phone.trim())) {
    errors.phone = 'Please enter a valid phone number'
  }
  if (!data.message.trim()) {
    errors.message = 'Message is required'
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters'
  }
  return errors
}

export default function Contact() {
  const isMobile = useIsMobile()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<FormStatus>('idle')

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

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const validationErrors = validateForm(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('submitting')
    setErrors({})

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
        }),
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else if (res.status === 400) {
        const data = await res.json()
        if (data.errors) {
          setErrors(data.errors)
        }
        setStatus('idle')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* JSON-LD: LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* ── 1. HERO SECTION ── */}
      <section style={{ padding: '64px 0 48px', background: WARM }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <AnimateIn variant="fadeUp">
            <span className="section-label">Contact</span>
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
            Get in Touch
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
              Whether you have questions about our programs, want to learn about admissions, or just
              need someone to talk to — we&rsquo;re here for you. Our admissions team is available
              24/7.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── 2. PHONE CTA (Primary conversion path) ── */}
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
              Need to Talk Now? Call Us 24/7
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
              Speaking with our team is the fastest way to get answers and start the process.
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

      {/* ── 3. CONTACT INFO + FORM (Two-column on desktop, stacked on mobile) ── */}
      <section style={{ padding: '64px 0' }}>
        <div className="wrap">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1.5fr',
              gap: isMobile ? 48 : 64,
              alignItems: 'start',
            }}
          >
            {/* Left column: Contact Information */}
            <div>
              <AnimateIn variant="fadeUp">
                <h2 className="section-heading" style={{ marginBottom: 24 }}>
                  Contact Information
                </h2>
              </AnimateIn>

              <AnimateIn variant="blurUp" delay={0.1}>
                <div style={{ marginBottom: 24 }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 12,
                      marginBottom: 20,
                    }}
                  >
                    <IconPhone
                      style={{
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                        marginTop: 2,
                        color: 'var(--sage)',
                      }}
                    />
                    <div>
                      <p
                        style={{
                          fontFamily: DISPLAY,
                          fontWeight: 600,
                          fontSize: '0.9rem',
                          marginBottom: 4,
                          color: 'var(--text)',
                        }}
                      >
                        Phone
                      </p>
                      <a
                        href={site.phoneTel}
                        aria-label={`Call Silver State at ${site.phone}`}
                        style={{
                          color: 'var(--blue)',
                          textDecoration: 'none',
                          fontWeight: 600,
                          fontSize: '1rem',
                        }}
                      >
                        {site.phone}
                      </a>
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 12,
                      marginBottom: 20,
                    }}
                  >
                    <IconMail
                      style={{
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                        marginTop: 2,
                        color: 'var(--sage)',
                      }}
                    />
                    <div>
                      <p
                        style={{
                          fontFamily: DISPLAY,
                          fontWeight: 600,
                          fontSize: '0.9rem',
                          marginBottom: 4,
                          color: 'var(--text)',
                        }}
                      >
                        Email
                      </p>
                      <a
                        href={`mailto:${site.email}`}
                        style={{
                          color: 'var(--blue)',
                          textDecoration: 'none',
                          fontSize: '1rem',
                        }}
                      >
                        {site.email}
                      </a>
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 12,
                      marginBottom: 20,
                    }}
                  >
                    <IconMapPin
                      style={{
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                        marginTop: 2,
                        color: 'var(--sage)',
                      }}
                    />
                    <div>
                      <p
                        style={{
                          fontFamily: DISPLAY,
                          fontWeight: 600,
                          fontSize: '0.9rem',
                          marginBottom: 4,
                          color: 'var(--text)',
                        }}
                      >
                        Address
                      </p>
                      <p style={{ color: 'var(--body)', fontSize: '1rem', lineHeight: 1.5 }}>
                        {site.address}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 12,
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      style={{ flexShrink: 0, marginTop: 2, color: 'var(--sage)' }}
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <div>
                      <p
                        style={{
                          fontFamily: DISPLAY,
                          fontWeight: 600,
                          fontSize: '0.9rem',
                          marginBottom: 4,
                          color: 'var(--text)',
                        }}
                      >
                        Hours
                      </p>
                      <p style={{ color: 'var(--body)', fontSize: '1rem', lineHeight: 1.5 }}>
                        Our admissions team is available 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            </div>

            {/* Right column: Contact Form */}
            <div>
              <AnimateIn variant="fadeUp">
                <h2 className="section-heading" style={{ marginBottom: 8 }}>
                  Send a Message
                </h2>
              </AnimateIn>

              <AnimateIn variant="blurUp" delay={0.1}>
                <p
                  style={{
                    color: 'var(--body)',
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
                    marginBottom: 24,
                  }}
                >
                  This form is for general inquiries only. Please do not include personal health
                  information. For clinical questions, call us directly.
                </p>
              </AnimateIn>

              {/* aria-live region for form status announcements */}
              <div aria-live="polite" aria-atomic="true">
                {status === 'success' && (
                  <AnimateIn variant="fadeUp">
                    <div
                      style={{
                        background: 'var(--sage-soft)',
                        border: '1px solid var(--sage)',
                        borderRadius: 'var(--radius-md)',
                        padding: '20px 24px',
                        marginBottom: 24,
                      }}
                    >
                      <p
                        style={{
                          fontWeight: 600,
                          color: 'var(--text)',
                          marginBottom: 4,
                        }}
                      >
                        Thank you! We&rsquo;ll be in touch soon.
                      </p>
                      <p style={{ color: 'var(--body)', fontSize: '0.9rem' }}>
                        For immediate assistance, call{' '}
                        <a
                          href={site.phoneTel}
                          style={{ color: 'var(--blue)', fontWeight: 600 }}
                        >
                          {site.phone}
                        </a>
                        .
                      </p>
                    </div>
                  </AnimateIn>
                )}

                {status === 'error' && (
                  <AnimateIn variant="fadeUp">
                    <div
                      style={{
                        background: '#FEF2F2',
                        border: '1px solid #FECACA',
                        borderRadius: 'var(--radius-md)',
                        padding: '20px 24px',
                        marginBottom: 24,
                      }}
                    >
                      <p
                        style={{
                          fontWeight: 600,
                          color: '#991B1B',
                          marginBottom: 4,
                        }}
                      >
                        Something went wrong. Please try again or call us at{' '}
                        <a href={site.phoneTel} style={{ color: '#991B1B', fontWeight: 700 }}>
                          {site.phone}
                        </a>
                        .
                      </p>
                    </div>
                  </AnimateIn>
                )}
              </div>

              <AnimateIn variant="blurUp" delay={0.15}>
                <form onSubmit={handleSubmit} noValidate>
                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--body)',
                      marginBottom: 20,
                    }}
                  >
                    * Required
                  </p>

                  {/* Name */}
                  <div style={{ marginBottom: 20 }}>
                    <label
                      htmlFor="name"
                      style={{
                        display: 'block',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        marginBottom: 6,
                        color: 'var(--text)',
                      }}
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      aria-required="true"
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      aria-invalid={errors.name ? 'true' : undefined}
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        fontSize: '1rem',
                        border: errors.name
                          ? '2px solid #DC2626'
                          : '1px solid var(--border)',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--white)',
                        color: 'var(--text)',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                    />
                    {errors.name && (
                      <span
                        id="name-error"
                        role="alert"
                        style={{
                          display: 'block',
                          color: '#DC2626',
                          fontSize: '0.85rem',
                          marginTop: 4,
                        }}
                      >
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div style={{ marginBottom: 20 }}>
                    <label
                      htmlFor="email"
                      style={{
                        display: 'block',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        marginBottom: 6,
                        color: 'var(--text)',
                      }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      aria-required="true"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      aria-invalid={errors.email ? 'true' : undefined}
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        fontSize: '1rem',
                        border: errors.email
                          ? '2px solid #DC2626'
                          : '1px solid var(--border)',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--white)',
                        color: 'var(--text)',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                    />
                    {errors.email && (
                      <span
                        id="email-error"
                        role="alert"
                        style={{
                          display: 'block',
                          color: '#DC2626',
                          fontSize: '0.85rem',
                          marginTop: 4,
                        }}
                      >
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Phone */}
                  <div style={{ marginBottom: 20 }}>
                    <label
                      htmlFor="phone"
                      style={{
                        display: 'block',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        marginBottom: 6,
                        color: 'var(--text)',
                      }}
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      autoComplete="tel"
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      aria-invalid={errors.phone ? 'true' : undefined}
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        fontSize: '1rem',
                        border: errors.phone
                          ? '2px solid #DC2626'
                          : '1px solid var(--border)',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--white)',
                        color: 'var(--text)',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                    />
                    {errors.phone && (
                      <span
                        id="phone-error"
                        role="alert"
                        style={{
                          display: 'block',
                          color: '#DC2626',
                          fontSize: '0.85rem',
                          marginTop: 4,
                        }}
                      >
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: 24 }}>
                    <label
                      htmlFor="message"
                      style={{
                        display: 'block',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        marginBottom: 6,
                        color: 'var(--text)',
                      }}
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      aria-required="true"
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      aria-invalid={errors.message ? 'true' : undefined}
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        fontSize: '1rem',
                        border: errors.message
                          ? '2px solid #DC2626'
                          : '1px solid var(--border)',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--white)',
                        color: 'var(--text)',
                        outline: 'none',
                        resize: 'vertical',
                        fontFamily: 'inherit',
                        boxSizing: 'border-box',
                      }}
                    />
                    {errors.message && (
                      <span
                        id="message-error"
                        role="alert"
                        style={{
                          display: 'block',
                          color: '#DC2626',
                          fontSize: '0.85rem',
                          marginTop: 4,
                        }}
                      >
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn"
                    disabled={status === 'submitting'}
                    style={{
                      background: 'var(--blue)',
                      color: 'var(--white)',
                      fontSize: '1rem',
                      fontWeight: 700,
                      padding: '14px 32px',
                      minHeight: 48,
                      border: 'none',
                      borderRadius: 'var(--radius-md)',
                      cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                      opacity: status === 'submitting' ? 0.7 : 1,
                      width: isMobile ? '100%' : 'auto',
                    }}
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. INTERNAL LINKS / CROSS-NAVIGATION ── */}
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
                  Admissions Process
                </h3>
                <p
                  style={{
                    fontSize: '.9rem',
                    color: 'var(--body)',
                    lineHeight: 1.6,
                    marginBottom: 16,
                  }}
                >
                  Learn about our admissions process and how to get started in four simple steps.
                </p>
                <Link
                  to="/admissions"
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
                  Learn About Admissions
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
                  Explore our residential, PHP, and IOP treatment programs for teens ages 11-17.
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
                  Explore Our Programs
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
                  Check Your Insurance
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
