import { afterEach, describe, expect, it, vi } from 'vitest'
import handler from './contact'

const TRACKED_ENV_KEYS = [
  'SITE_URL',
  'VITE_SITE_URL',
  'RESEND_API_KEY',
  'CONTACT_EMAIL',
  'FROM_EMAIL',
] as const
const ORIGINAL_ENV = new Map<string, string | undefined>(
  TRACKED_ENV_KEYS.map((key) => [key, process.env[key]]),
)

function makeJsonRequest({
  method,
  origin = 'https://www.silverstatetreatment.com',
  body,
}: {
  method: string
  origin?: string
  body?: Record<string, unknown>
}) {
  return new Request('https://www.silverstatetreatment.com/api/contact', {
    method,
    headers: {
      origin,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  })
}

afterEach(() => {
  for (const key of TRACKED_ENV_KEYS) {
    const original = ORIGINAL_ENV.get(key)
    if (original === undefined) {
      delete process.env[key]
    } else {
      process.env[key] = original
    }
  }

  vi.restoreAllMocks()
})

describe('api/contact handler', () => {
  it('returns 405 for non-POST methods', async () => {
    process.env.SITE_URL = 'https://www.silverstatetreatment.com'
    const res = await handler(makeJsonRequest({ method: 'GET' }))
    expect(res.status).toBe(405)
  })

  it('returns 400 with validation errors for invalid payload', async () => {
    process.env.SITE_URL = 'https://www.silverstatetreatment.com'
    const res = await handler(
      makeJsonRequest({
        method: 'POST',
        body: { name: '', email: 'bad-email', message: 'short', phone: 'abc!' },
      }),
    )

    expect(res.status).toBe(400)
    const json = (await res.json()) as { error: string; errors: Record<string, string> }
    expect(json.error).toBe('Validation failed')
    expect(json.errors.name).toBeTruthy()
    expect(json.errors.email).toBeTruthy()
    expect(json.errors.phone).toBeTruthy()
    expect(json.errors.message).toBeTruthy()
  })

  it('rejects requests from disallowed origins', async () => {
    process.env.SITE_URL = 'https://www.silverstatetreatment.com'
    const res = await handler(
      makeJsonRequest({
        method: 'POST',
        origin: 'https://evil.example.com',
        body: {
          name: 'Test Name',
          email: 'test@example.com',
          phone: '',
          message: 'This is a valid message body.',
        },
      }),
    )

    expect(res.status).toBe(403)
  })

  it('returns 500 when RESEND_API_KEY is missing', async () => {
    process.env.SITE_URL = 'https://www.silverstatetreatment.com'
    delete process.env.RESEND_API_KEY

    const res = await handler(
      makeJsonRequest({
        method: 'POST',
        body: {
          name: 'Test Name',
          email: 'test@example.com',
          phone: '',
          message: 'This is a valid message body.',
        },
      }),
    )

    expect(res.status).toBe(500)
    const json = (await res.json()) as { error: string }
    expect(json.error).toMatch(/Server configuration error|call us directly/i)
  })

  it('sends sanitized payload to Resend and returns success', async () => {
    process.env.SITE_URL = 'https://www.silverstatetreatment.com'
    process.env.RESEND_API_KEY = 're_test_key'
    process.env.CONTACT_EMAIL = 'admissions@silverstatetreatment.com'
    process.env.FROM_EMAIL = 'noreply@silverstatetreatment.com'

    const fetchSpy = vi
      .spyOn(globalThis, 'fetch')
      .mockResolvedValueOnce(new Response(JSON.stringify({ id: 'email_123' }), { status: 200 }))

    const res = await handler(
      makeJsonRequest({
        method: 'POST',
        body: {
          name: '  Jane <b>Doe</b>  ',
          email: 'jane@example.com',
          phone: '+1 (725) 239-7557',
          message: 'Need <more> help with admissions details.',
        },
      }),
    )

    expect(res.status).toBe(200)
    const json = (await res.json()) as { success: boolean }
    expect(json.success).toBe(true)

    expect(fetchSpy).toHaveBeenCalledTimes(1)
    expect(fetchSpy).toHaveBeenCalledWith(
      'https://api.resend.com/emails',
      expect.objectContaining({
        method: 'POST',
      }),
    )

    const resendPayload = JSON.parse(
      String((fetchSpy.mock.calls[0]?.[1] as RequestInit).body ?? '{}'),
    ) as {
      from: string
      to: string
      reply_to: string
      subject: string
      html: string
    }

    expect(resendPayload.from).toBe('noreply@silverstatetreatment.com')
    expect(resendPayload.to).toBe('admissions@silverstatetreatment.com')
    expect(resendPayload.reply_to).toBe('jane@example.com')
    expect(resendPayload.subject).toContain('Jane Doe')
    expect(resendPayload.html).toContain('Jane Doe')
    expect(resendPayload.html).toMatch(/Need\s+help with admissions details\./)
    expect(resendPayload.html).not.toContain('<more>')
    expect(resendPayload.html).not.toContain('<b>')
  })

  it('returns generic 500 error when Resend fails', async () => {
    process.env.SITE_URL = 'https://www.silverstatetreatment.com'
    process.env.RESEND_API_KEY = 're_test_key'

    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce(
      new Response(JSON.stringify({ error: 'provider down' }), { status: 502 }),
    )

    const res = await handler(
      makeJsonRequest({
        method: 'POST',
        body: {
          name: 'Test Name',
          email: 'test@example.com',
          phone: '',
          message: 'This is a valid message body.',
        },
      }),
    )

    expect(res.status).toBe(500)
    const json = (await res.json()) as { error: string }
    expect(json.error).not.toContain('provider down')
    expect(json.error).toMatch(/Unable to send message|call us directly/i)
  })
})
