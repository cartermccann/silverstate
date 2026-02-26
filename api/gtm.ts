// Vercel Serverless Function — GA4 First-Party Script Proxy
// Proxies the GA4 gtag.js script through the site's own domain to reduce ad blocker interference.
// Despite the filename, this is a GA4 proxy (the script is hosted at googletagmanager.com).

export const config = {
  runtime: 'edge',
}

const ENV =
  (
    globalThis as {
      process?: { env?: Record<string, string | undefined> }
    }
  ).process?.env ?? {}

export default async function handler(req: Request): Promise<Response> {
  // Only accept GET requests
  if (req.method !== 'GET') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  // Get GA4 measurement ID from query parameter or server env
  const url = new URL(req.url)
  const ga4Id = url.searchParams.get('id') || ENV.GA4_ID

  if (!ga4Id) {
    return new Response(JSON.stringify({ error: 'Missing measurement ID' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  try {
    const upstream = await fetch(
      `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ga4Id)}`,
    )

    if (!upstream.ok) {
      return new Response(JSON.stringify({ error: 'Bad gateway' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const body = await upstream.text()

    return new Response(body, {
      status: 200,
      headers: {
        'Content-Type': 'application/javascript',
        'Cache-Control': 'public, max-age=3600',
      },
    })
  } catch {
    return new Response(JSON.stringify({ error: 'Bad gateway' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
