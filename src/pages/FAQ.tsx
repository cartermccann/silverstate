import { useState } from 'react'
import { site } from '../data/common'
import { generateMeta } from '../utils/meta'
import { generateFAQPage, generateWebPage } from '../utils/schema'
import AnimateIn from '../components/AnimateIn'
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

const faqSections = [
  {
    title: 'About Treatment',
    faqs: [
      {
        q: 'What conditions does Silver State treat?',
        a: `We specialize in treating adolescent mental health conditions (anxiety, depression, trauma, bipolar disorder, PTSD, and more), substance abuse disorders (alcohol, opioids, benzodiazepines, cannabis, and other substances), and eating disorders (anorexia, bulimia, binge eating, ARFID, and OSFED) for teens ages 11 to 17. Call ${site.phone} to discuss your teen's specific needs.`,
      },
      {
        q: 'What levels of care do you offer?',
        a: 'Silver State provides residential treatment with 24/7 supervised care for teens who need the highest level of support. Our residential program combines evidence-based therapy, on-site academics, and a structured daily schedule in a safe, supportive environment. We also offer a comprehensive range of therapy programs — including CBT, DBT, family therapy, group therapy, adventure therapy, and more — tailored to each teen\'s specific needs.',
      },
      {
        q: 'How long does treatment last?',
        a: 'Treatment duration depends on your teen\'s individual progress and clinical needs. Residential treatment typically lasts 45 to 90 days. Our clinical team reassesses regularly and adjusts the timeline to make sure your teen gets the time they need before transitioning to outpatient care and aftercare support.',
      },
      {
        q: 'What therapies do you use?',
        a: 'Our evidence-based modalities include Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), Eye Movement Desensitization and Reprocessing (EMDR), Trauma-Focused CBT (TF-CBT), family therapy, group therapy, art therapy, adventure therapy, mindfulness and meditation, and medication management. Each teen\'s treatment plan uses the specific combination of therapies best suited to their diagnosis and goals.',
      },
      {
        q: 'Do you treat co-occurring disorders?',
        a: 'Yes. Many of the adolescents we treat have co-occurring conditions \u2014 for example, depression with substance abuse, or anxiety with an eating disorder. Our dual diagnosis approach addresses all conditions simultaneously through an integrated treatment plan, rather than treating each issue in isolation.',
      },
    ],
  },
  {
    title: 'Admissions & Insurance',
    faqs: [
      {
        q: 'How do I get started?',
        a: `Getting started is simple. Call our 24/7 admissions line at ${site.phone} for a free, confidential clinical assessment. Our team will evaluate your teen's needs, verify your insurance benefits, and guide you through next steps \u2014 often within the same day.`,
      },
      {
        q: 'What insurance do you accept?',
        a: 'We accept most major insurance plans, including Aetna, Cigna, Ambetter, UnitedHealthcare (UHC), Health Plan of Nevada (HPN), GEHA, UMR, and Medicaid Fee for Service. Our admissions team handles insurance verification and can explain your benefits and any out-of-pocket costs before treatment begins.',
      },
      {
        q: "What if I don't have insurance?",
        a: `We believe every teen deserves access to quality care. We offer self-pay options and can discuss payment plans to make treatment more accessible. Call ${site.phone} to speak with our admissions team about financial options.`,
      },
      {
        q: 'What should my teen bring to treatment?',
        a: 'Teens should bring comfortable, weather-appropriate clothing (enough for about a week), personal hygiene items, any prescribed medications in their original containers, and school materials or assignments. We provide a detailed packing list at admission with specifics on what is and is not allowed.',
      },
      {
        q: 'Can I visit my teen during treatment?',
        a: 'Absolutely. We encourage family involvement and offer scheduled visiting hours as well as family therapy sessions. Family weekends are part of the residential program, and parents can communicate with their teen and the treatment team regularly throughout the process.',
      },
    ],
  },
  {
    title: 'Daily Life & Academics',
    faqs: [
      {
        q: 'What does a typical day look like?',
        a: 'Each day follows a structured schedule designed to balance clinical treatment with wellness and normalcy. Mornings include therapeutic groups and individual therapy sessions. Afternoons are dedicated to academics through our on-site Youth Academy, skill-building activities, and recreation. Evenings include family sessions (on designated days), mindfulness practice, journaling, and downtime.',
      },
      {
        q: 'Will my teen keep up with school?',
        a: 'Yes. Our on-site Youth Academy is staffed by certified teachers who coordinate directly with your teen\'s home school. Students continue their coursework, receive tutoring support, and earn credits during treatment so they can transition back to school without falling behind.',
      },
      {
        q: 'What activities are available?',
        a: 'Silver State offers a range of therapeutic and recreational activities, including art therapy, music therapy, adventure therapy, fitness and strength training, yoga, meditation, and supervised recreational outings. These activities are integrated into treatment plans and support social skill development, emotional regulation, and physical wellness.',
      },
      {
        q: 'How are meals handled?',
        a: 'Nutritious meals and snacks are prepared on-site by our kitchen staff, with menus designed to support adolescent health and development. We accommodate dietary restrictions, allergies, and religious requirements. For teens in our eating disorder program, meals are supervised and integrated into their treatment plan with guidance from our clinical and nutritional team.',
      },
      {
        q: 'Can my teen have their phone?',
        a: 'Technology use is structured and supervised to support treatment goals. Teens do not have unrestricted access to personal phones or social media during treatment. Approved communication with family is scheduled and supported by staff. This approach reduces distractions and helps teens focus on recovery.',
      },
    ],
  },
  {
    title: 'Safety & Clinical Care',
    faqs: [
      {
        q: 'What is your staff-to-client ratio?',
        a: 'We maintain a 4:1 staff-to-client ratio across all programs, ensuring every teen receives personalized attention, consistent supervision, and rapid access to clinical support when needed.',
      },
      {
        q: 'How do you handle emergencies?',
        a: 'All Silver State staff are trained in Crisis Prevention Institute (CPI) techniques. We have on-site medical support and psychiatric care available around the clock. Our emergency protocols are designed to de-escalate situations safely while prioritizing the well-being of every teen in our care.',
      },
      {
        q: 'Is treatment confidential?',
        a: 'Yes. All treatment records are protected under HIPAA (Health Insurance Portability and Accountability Act). Records related to substance abuse treatment receive additional protection under 42 CFR Part 2, which requires written consent before any disclosure. We take privacy seriously and maintain strict confidentiality at every level.',
      },
      {
        q: 'How do I know if my teen needs residential vs. outpatient care?',
        a: `That's exactly what our free clinical assessment determines. Our admissions team evaluates your teen's symptoms, safety concerns, daily functioning, and treatment history to recommend the appropriate level of care. There is no obligation \u2014 call ${site.phone} to start the conversation.`,
      },
      {
        q: 'Do you offer self-harm treatment for teens?',
        a: `Yes. Teen self-harm treatment is a core focus at Silver State. Our clinical team uses DBT, safety planning, and individualized crisis intervention to help adolescents who are cutting, burning, or engaging in other self-harm behaviors. We address the emotional pain driving self-harm while teaching healthier coping strategies. Call ${site.phone} to discuss your teen's situation.`,
      },
      {
        q: 'Is Silver State a lockdown facility?',
        a: 'Silver State is not a lockdown adolescent treatment center. We are a licensed, voluntary residential treatment facility. Our program is structured and supervised 24/7 with a 4:1 staff-to-client ratio, but we focus on creating a therapeutic environment built on trust and engagement rather than physical restriction. Teens participate willingly in treatment and are encouraged to take ownership of their recovery.',
      },
      {
        q: 'Are same-day admissions available?',
        a: `Yes. Silver State offers same-day admissions when clinically appropriate. Our 24/7 admissions team can complete insurance verification, conduct a clinical assessment, and coordinate intake the same day you call. If your teen is in crisis and needs immediate mental health treatment, call ${site.phone} \u2014 we move quickly to get your family the help you need.`,
      },
    ],
  },
]

// Flatten all FAQs for schema
const allFaqs = faqSections.flatMap((section) => section.faqs)

export const meta = generateMeta({
  title: 'FAQ | Common Questions About Teen Treatment | Silver State',
  description:
    'Find answers to common questions about adolescent mental health treatment at Silver State in Las Vegas. Admissions, insurance, daily life, and more.',
  path: '/faq',
  keywords: ['teen treatment FAQ', 'adolescent treatment questions', 'residential treatment FAQ', 'teen mental health questions', 'Silver State FAQ'],
  jsonLd: [
    generateFAQPage({
      questions: allFaqs.map((faq) => ({ question: faq.q, answer: faq.a })),
    }),
    generateWebPage({
      title: 'Frequently Asked Questions',
      description:
        'Answers to common questions about adolescent mental health treatment, admissions, insurance, daily life, and clinical care at Silver State.',
      url: `${SITE_URL}/faq`,
    }),
  ],
})

export default function FAQ() {
  // Track open FAQ per section: { sectionIndex: faqIndex | null }
  const [openFaqs, setOpenFaqs] = useState<Record<number, number | null>>({})

  const toggleFaq = (sectionIdx: number, faqIdx: number) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [sectionIdx]: prev[sectionIdx] === faqIdx ? null : faqIdx,
    }))
  }

  return (
    <>
      {/* ── 1. HERO SECTION ── */}
      <section style={{ padding: '64px 0 48px', background: WARM }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <AnimateIn variant="fadeUp">
            <span className="section-label">Get Answers</span>
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
            Frequently Asked Questions
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
              We understand that choosing treatment for your teen is a significant decision. Below
              you&rsquo;ll find answers to the questions families ask most often about our programs,
              admissions process, daily life, and clinical care. If you don&rsquo;t see your question
              here, call {site.phone} &mdash; our team is available 24/7.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── 2. FAQ SECTIONS ── */}
      {faqSections.map((section, si) => (
        <section
          key={section.title}
          style={{ padding: '64px 0', background: si % 2 === 0 ? undefined : WARM }}
        >
          <div className="wrap" style={{ maxWidth: 800 }}>
            <div style={{ marginBottom: 24 }}>
              <AnimateIn variant="fadeUp">
                <span className="section-label">{section.title}</span>
              </AnimateIn>
              <AnimateIn variant="fadeUp" delay={0.05}>
                <h2
                  className="section-heading"
                  style={{ marginTop: 8 }}
                >
                  {section.title}
                </h2>
              </AnimateIn>
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
                {section.faqs.map((faq, fi) => (
                  <FaqItem
                    key={fi}
                    q={faq.q}
                    a={faq.a}
                    isOpen={openFaqs[si] === fi}
                    onToggle={() => toggleFaq(si, fi)}
                  />
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>
      ))}

      {/* ── 3. PHONE CTA ── */}
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
              Still Have Questions?
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
              Our admissions team is here 24/7 to answer your questions and help you take the next
              step. Call {site.phone} for a free, confidential conversation.
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
