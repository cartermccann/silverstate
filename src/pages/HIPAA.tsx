import type { CSSProperties } from 'react'
import { site } from '../data/common'
import { generateMeta } from '../utils/meta'
import { generateWebPage } from '../utils/schema'

const SITE_URL = (import.meta.env?.VITE_SITE_URL || 'https://www.silverstatetreatment.com').replace(
  /\/+$/,
  '',
)

export const meta = generateMeta({
  title: 'HIPAA Notice of Privacy Practices | Silver State',
  description:
    "HIPAA Notice of Privacy Practices for Silver State Adolescent Treatment Center. Learn how we protect your teen's health information.",
  path: '/hipaa-notice',
  keywords: ['HIPAA notice treatment center', 'patient privacy rights', 'mental health HIPAA compliance', 'adolescent treatment privacy', 'healthcare privacy notice'],
  jsonLd: [
    generateWebPage({
      title: 'HIPAA Notice of Privacy Practices',
      description:
        'HIPAA Notice of Privacy Practices for Silver State Adolescent Treatment Center, covering use and disclosure of protected health information.',
      url: `${SITE_URL}/hipaa-notice`,
      dateModified: '2026-02-01',
    }),
  ],
})

const sectionStyle: CSSProperties = {
  marginBottom: 40,
}

const headingStyle: CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 'var(--h4-size)',
  lineHeight: 'var(--h4-lh)',
  color: 'var(--text)',
  marginBottom: 16,
}

const paragraphStyle: CSSProperties = {
  color: 'var(--body)',
  lineHeight: 1.7,
  marginBottom: 12,
}

const listStyle: CSSProperties = {
  color: 'var(--body)',
  lineHeight: 1.7,
  marginBottom: 12,
  paddingLeft: 24,
}

const listItemStyle: CSSProperties = {
  marginBottom: 8,
}

export default function HIPAA() {
  return (
    <section className="wrap-narrow" style={{ paddingTop: 64, paddingBottom: 80 }}>
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--h2-size)',
          lineHeight: 'var(--h2-lh)',
          color: 'var(--text)',
          marginBottom: 8,
        }}
      >
        HIPAA Notice of Privacy Practices
      </h1>
      <p
        style={{
          color: 'var(--body)',
          fontSize: '.9rem',
          marginBottom: 4,
        }}
      >
        Last updated: February 1, 2026
      </p>
      <p
        style={{
          color: 'var(--body)',
          fontSize: '.9rem',
          marginBottom: 48,
        }}
      >
        Effective date: February 1, 2026
      </p>

      {/* About This Notice */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>About This Notice</h2>
        <p style={paragraphStyle}>
          This notice describes how medical information about your child may be used and disclosed
          and how you can get access to this information. Please review it carefully.
        </p>
        <p style={paragraphStyle}>
          {site.name} is required by law to maintain the privacy of Protected Health Information
          (PHI), to provide individuals with notice of our legal duties and privacy practices with
          respect to PHI, and to notify affected individuals following a breach of unsecured PHI. This
          notice is effective as of the date listed above and will remain in effect until we replace
          it.
        </p>
      </div>

      {/* Our Commitment to Privacy */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Our Commitment to Privacy</h2>
        <p style={paragraphStyle}>
          {site.name} is committed to protecting the privacy of health information for all patients.
          We are required by law to maintain the privacy of Protected Health Information (PHI), give
          you this notice of our privacy practices, follow the terms of the notice currently in
          effect, and notify you if we are unable to agree to a requested restriction on how your
          information is used or disclosed.
        </p>
        <p style={paragraphStyle}>
          We understand that health information about your teen is personal, and we are committed to
          protecting it. We create a record of the care and services your child receives at our
          facility. We need this record to provide quality care and to comply with certain legal
          requirements.
        </p>
      </div>

      {/* How We May Use and Disclose Your Information */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>How We May Use and Disclose Your Information</h2>
        <p style={paragraphStyle}>
          The following categories describe the ways we may use and disclose health information
          without your written authorization:
        </p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <strong>For Treatment:</strong> We may use and disclose health information about your
            child to provide, coordinate, or manage treatment and related services. This includes
            sharing information with other health care providers involved in your child&rsquo;s care,
            such as physicians, therapists, and counselors.
          </li>
          <li style={listItemStyle}>
            <strong>For Payment:</strong> We may use and disclose health information so that treatment
            and services your child receives may be billed to and payment collected from you, an
            insurance company, or a third-party payer. This may include providing information to your
            health plan for prior authorization or to determine eligibility for benefits.
          </li>
          <li style={listItemStyle}>
            <strong>For Health Care Operations:</strong> We may use and disclose health information
            for our own operations, including quality assessment and improvement activities, case
            management and care coordination, competency review, training programs, accreditation,
            licensing, and credentialing activities.
          </li>
          <li style={listItemStyle}>
            <strong>As Required by Law:</strong> We will disclose health information when required to
            do so by federal, state, or local law. This includes reporting certain communicable
            diseases, reporting suspected abuse or neglect, and responding to court orders or
            subpoenas.
          </li>
          <li style={listItemStyle}>
            <strong>For Health and Safety:</strong> We may use or disclose health information to
            prevent or lessen a serious and imminent threat to the health or safety of a person or the
            public, consistent with applicable law and standards of ethical conduct.
          </li>
        </ul>
      </div>

      {/* Your Rights */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Your Rights</h2>
        <p style={paragraphStyle}>
          You have the following rights regarding the health information we maintain about your child:
        </p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <strong>Right to Access:</strong> You have the right to inspect and obtain a copy of your
            child&rsquo;s health information. You must submit your request in writing. We may charge a
            reasonable fee for copying, mailing, or other costs associated with your request.
          </li>
          <li style={listItemStyle}>
            <strong>Right to Request Amendments:</strong> If you feel that health information we have
            about your child is incorrect or incomplete, you may request an amendment. Your request
            must be made in writing and must include the reason for the requested change.
          </li>
          <li style={listItemStyle}>
            <strong>Right to an Accounting of Disclosures:</strong> You have the right to request a
            list of certain disclosures we have made of your child&rsquo;s health information. This
            accounting does not include disclosures made for treatment, payment, or health care
            operations, or disclosures you authorized in writing.
          </li>
          <li style={listItemStyle}>
            <strong>Right to Request Restrictions:</strong> You have the right to request a
            restriction on the health information we use or disclose for treatment, payment, or health
            care operations. We are not required to agree to your request, but if we do agree, we will
            comply with the restriction except in emergency situations.
          </li>
          <li style={listItemStyle}>
            <strong>Right to Confidential Communications:</strong> You have the right to request that
            we communicate with you about health matters in a certain way or at a certain location.
            For example, you may ask that we contact you only by mail or at a specific phone number.
          </li>
          <li style={listItemStyle}>
            <strong>Right to a Paper Copy:</strong> You have the right to obtain a paper copy of this
            notice upon request, even if you have agreed to receive it electronically.
          </li>
        </ul>
      </div>

      {/* Special Protections for Substance Abuse Records */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Special Protections for Substance Abuse Records</h2>
        <p style={paragraphStyle}>
          Records relating to substance abuse treatment at {site.name} are protected under federal
          regulation 42 CFR Part 2. These regulations provide additional protections beyond HIPAA for
          information related to substance use disorder treatment.
        </p>
        <p style={paragraphStyle}>
          Under 42 CFR Part 2, substance abuse treatment records cannot be disclosed without the
          patient&rsquo;s (or, for minors, the parent or guardian&rsquo;s) written consent, except in
          the following limited circumstances: medical emergencies, qualified research activities,
          audit and evaluation activities, court orders meeting specific criteria, and reports of
          suspected child abuse or neglect as required by state law.
        </p>
        <p style={paragraphStyle}>
          Any violation of 42 CFR Part 2 is a federal offense. Suspected violations may be reported to
          the United States Attorney in the district where the violation occurs.
        </p>
      </div>

      {/* Minors and Parental Access */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Minors and Parental Access</h2>
        <p style={paragraphStyle}>
          Parents and legal guardians generally have the right to access their minor child&rsquo;s
          medical records and to make health care decisions on their behalf. However, certain
          information may be restricted in accordance with Nevada state law and professional clinical
          judgment.
        </p>
        <p style={paragraphStyle}>
          In some situations, a minor may consent to their own treatment without parental
          involvement, as permitted by state law. In these cases, the minor may have the right to
          control access to the related health information. Our clinical team navigates these
          situations carefully to balance the therapeutic needs of the adolescent with the rights of
          parents and guardians.
        </p>
      </div>

      {/* Contact Information */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Contact Information</h2>
        <p style={paragraphStyle}>
          If you have questions about this notice or would like to exercise any of your rights, please
          contact our Privacy Officer:
        </p>
        <p style={paragraphStyle}>
          <strong>Privacy Officer:</strong> Christina Wallis
          <br />
          <strong>Organization:</strong> {site.name}
          <br />
          <strong>Address:</strong> 1701 Mountain Vista St, Las Vegas, NV 89128
          <br />
          <strong>Phone:</strong>{' '}
          <a href="tel:7029190190" style={{ color: 'var(--blue)', textDecoration: 'none' }}>
            (702) 919-0190
          </a>
          <br />
          <strong>Email:</strong>{' '}
          <a
            href={`mailto:${site.email}`}
            style={{ color: 'var(--blue)', textDecoration: 'none' }}
          >
            {site.email}
          </a>
        </p>
        <p style={paragraphStyle}>
          If you believe your privacy rights have been violated, you may file a complaint with our
          Privacy Officer or with the U.S. Department of Health and Human Services Office for Civil
          Rights (OCR):
        </p>
        <p style={paragraphStyle}>
          <strong>U.S. Department of Health and Human Services</strong>
          <br />
          Office for Civil Rights
          <br />
          200 Independence Avenue, S.W.
          <br />
          Washington, D.C. 20201
          <br />
          Toll-free:{' '}
          <a href="tel:18003684376" style={{ color: 'var(--blue)', textDecoration: 'none' }}>
            1-800-368-1019
          </a>
          <br />
          Website:{' '}
          <a
            href="https://www.hhs.gov/ocr/complaints/index.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--blue)', textDecoration: 'none' }}
          >
            www.hhs.gov/ocr/complaints
          </a>
        </p>
        <p style={paragraphStyle}>
          You will not be penalized or retaliated against for filing a complaint.
        </p>
      </div>
    </section>
  )
}
