import { afterEach, describe, expect, it, vi } from 'vitest'
import handler from './gtm'

const ORIGINAL_GA4_ID = process.env.GA4_ID

function makeRequest(url: string, method = 'GET') {
  return new Request(url, { method })
}

afterEach(() => {
  if (ORIGINAL_GA4_ID === undefined) {
    delete process.env.GA4_ID
  } else {
    process.env.GA4_ID = ORIGINAL_GA4_ID
  }

  vi.restoreAllMocks()
})

describe('api/gtm handler', () => {
  it('returns 405 for non-GET methods', async () => {
    const res = await handler(makeRequest('https://www.silverstatetreatment.com/api/gtm', 'POST'))
    expect(res.status).toBe(405)
  })

  it('returns 400 when GA4 id is missing', async () => {
    delete process.env.GA4_ID
    const res = await handler(makeRequest('https://www.silverstatetreatment.com/api/gtm'))
    expect(res.status).toBe(400)
  })

  it('proxies script from Google and returns JavaScript response', async () => {
    const fetchSpy = vi
      .spyOn(globalThis, 'fetch')
      .mockResolvedValueOnce(new Response('console.log("gtag");', { status: 200 }))

    const res = await handler(
      makeRequest('https://www.silverstatetreatment.com/api/gtm?id=G-TEST123'),
    )
    expect(res.status).toBe(200)
    expect(res.headers.get('Content-Type')).toBe('application/javascript')
    expect(res.headers.get('Cache-Control')).toBe('public, max-age=3600')
    expect(await res.text()).toContain('console.log("gtag")')
    expect(fetchSpy).toHaveBeenCalledWith('https://www.googletagmanager.com/gtag/js?id=G-TEST123')
  })

  it('uses server-side GA4_ID when query id is absent', async () => {
    process.env.GA4_ID = 'G-ENV123'
    const fetchSpy = vi
      .spyOn(globalThis, 'fetch')
      .mockResolvedValueOnce(new Response('ok', { status: 200 }))

    const res = await handler(makeRequest('https://www.silverstatetreatment.com/api/gtm'))
    expect(res.status).toBe(200)
    expect(fetchSpy).toHaveBeenCalledWith('https://www.googletagmanager.com/gtag/js?id=G-ENV123')
  })

  it('returns 502 when upstream fails', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce(
      new Response(JSON.stringify({ error: 'upstream failed' }), { status: 500 }),
    )

    const res = await handler(
      makeRequest('https://www.silverstatetreatment.com/api/gtm?id=G-TEST123'),
    )
    expect(res.status).toBe(502)
  })
})
