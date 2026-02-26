// Vercel Serverless Function — Contact Form Handler
// CRITICAL: This function must NEVER log, store, or forward message content
// to any analytics service. Email delivery via Resend is the only data path.

export const config = {
  runtime: 'edge',
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_REGEX = /^[\d\s\-()+]+$/
const DEFAULT_SITE_ORIGIN = 'https://www.silverstatetreatment.com'

const ENV =
  (
    globalThis as {
      process?: { env?: Record<string, string | undefined> }
    }
  ).process?.env ?? {}

function stripHtml(str: string): string {
  return str.replace(/<[^>]*>/g, '')
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function normalizeOrigin(value: string): string {
  return value.trim().replace(/\/+$/, '')
}

function getAllowedOrigin(req: Request): string {
  const fromEnv = ENV.SITE_URL || ENV.VITE_SITE_URL
  if (fromEnv) {
    return normalizeOrigin(fromEnv)
  }

  try {
    return normalizeOrigin(new URL(req.url).origin)
  } catch {
    return DEFAULT_SITE_ORIGIN
  }
}

interface ContactBody {
  name?: unknown
  email?: unknown
  phone?: unknown
  message?: unknown
}

interface ValidationErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
}

function validate(body: ContactBody): ValidationErrors | null {
  const errors: ValidationErrors = {}

  // Name validation
  if (!body.name || typeof body.name !== 'string' || !body.name.trim()) {
    errors.name = 'Name is required'
  } else if (body.name.trim().length > 200) {
    errors.name = 'Name must be 200 characters or less'
  }

  // Email validation
  if (!body.email || typeof body.email !== 'string' || !body.email.trim()) {
    errors.email = 'Email is required'
  } else if (body.email.trim().length > 254) {
    errors.email = 'Email must be 254 characters or less'
  } else if (!EMAIL_REGEX.test(body.email.trim())) {
    errors.email = 'Please enter a valid email address'
  }

  // Phone validation (optional)
  if (body.phone && typeof body.phone === 'string' && body.phone.trim()) {
    if (body.phone.trim().length > 20) {
      errors.phone = 'Phone must be 20 characters or less'
    } else if (!PHONE_REGEX.test(body.phone.trim())) {
      errors.phone = 'Please enter a valid phone number'
    }
  }

  // Message validation
  if (!body.message || typeof body.message !== 'string' || !body.message.trim()) {
    errors.message = 'Message is required'
  } else if (body.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters'
  } else if (body.message.trim().length > 5000) {
    errors.message = 'Message must be 5000 characters or less'
  }

  return Object.keys(errors).length > 0 ? errors : null
}

export default async function handler(req: Request): Promise<Response> {
  const allowedOrigin = getAllowedOrigin(req)
  const origin = normalizeOrigin(req.headers.get('origin') || '')

  const corsHeaders: Record<string, string> = {
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    Vary: 'Origin',
  }

  if (origin === allowedOrigin) {
    corsHeaders['Access-Control-Allow-Origin'] = allowedOrigin
  }

  if (req.method === 'OPTIONS') {
    if (origin !== allowedOrigin) {
      return new Response(JSON.stringify({ error: 'Forbidden origin' }), {
        status: 403,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    return new Response(null, { status: 204, headers: corsHeaders })
  }

  if (origin !== allowedOrigin) {
    return new Response(JSON.stringify({ error: 'Forbidden origin' }), {
      status: 403,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  // Only accept POST
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  try {
    const body = (await req.json()) as ContactBody

    // Validate
    const validationErrors = validate(body)
    if (validationErrors) {
      return new Response(
        JSON.stringify({ error: 'Validation failed', errors: validationErrors }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        },
      )
    }

    // Sanitize inputs
    const name = escapeHtml(stripHtml((body.name as string).trim()))
    const email = stripHtml((body.email as string).trim())
    const safeEmail = escapeHtml(email)
    const phone =
      body.phone && typeof body.phone === 'string' && body.phone.trim()
        ? escapeHtml(stripHtml(body.phone.trim()))
        : ''
    const message = escapeHtml(stripHtml((body.message as string).trim()))

    // Environment variables
    const resendApiKey = ENV.RESEND_API_KEY
    const contactEmail = ENV.CONTACT_EMAIL || 'admissions@silverstatetreatment.com'
    const fromEmail = ENV.FROM_EMAIL || 'noreply@silverstatetreatment.com'

    if (!resendApiKey) {
      return new Response(
        JSON.stringify({ error: 'Server configuration error. Please call us directly.' }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        },
      )
    }

    // Send email via Resend API
    const emailBody = [
      `<h2>New Contact Inquiry</h2>`,
      `<p><strong>Name:</strong> ${name}</p>`,
      `<p><strong>Email:</strong> ${safeEmail}</p>`,
      phone ? `<p><strong>Phone:</strong> ${phone}</p>` : '',
      `<hr />`,
      `<p><strong>Message:</strong></p>`,
      `<p>${message.replace(/\n/g, '<br />')}</p>`,
    ]
      .filter(Boolean)
      .join('\n')

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: contactEmail,
        reply_to: email,
        subject: `New Contact Inquiry from ${name}`,
        html: emailBody,
      }),
    })

    if (!resendResponse.ok) {
      // Do NOT expose internal error details to the client
      return new Response(
        JSON.stringify({ error: 'Unable to send message. Please call us directly.' }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        },
      )
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch {
    // Do NOT expose internal error details
    return new Response(
      JSON.stringify({ error: 'Unable to process request. Please call us directly.' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      },
    )
  }
}

// TODO: Add rate limiting for spam protection if needed in the future
// TODO: Add CAPTCHA integration if spam becomes an issue
