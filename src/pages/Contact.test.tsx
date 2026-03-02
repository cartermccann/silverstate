import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import Contact, { meta } from './Contact'
import { site } from '../data/common'

function renderContact() {
  return render(
    <MemoryRouter initialEntries={['/contact']}>
      <Contact />
    </MemoryRouter>,
  )
}

// ── SEO meta export ──
describe('Contact — SEO meta export', () => {
  it('exports a meta array', () => {
    expect(Array.isArray(meta)).toBe(true)
    expect(meta.length).toBeGreaterThan(0)
  })

  it('includes a title tag with "Contact"', () => {
    const titleTag = meta.find((t) => t.title)
    expect(titleTag).toBeDefined()
    expect(titleTag!.title).toContain('Contact')
    expect(titleTag!.title).toContain('Silver State')
  })

  it('includes a meta description', () => {
    const descTag = meta.find((t) => t.name === 'description')
    expect(descTag).toBeDefined()
    expect(descTag!.content!.length).toBeLessThanOrEqual(160)
  })

  it('includes canonical URL for /contact', () => {
    const canonical = meta.find((t) => t.tagName === 'link' && t.rel === 'canonical')
    expect(canonical).toBeDefined()
    expect(canonical!.href).toContain('/contact')
  })

  it('includes Open Graph tags', () => {
    const ogTitle = meta.find((t) => t.property === 'og:title')
    const ogDesc = meta.find((t) => t.property === 'og:description')
    expect(ogTitle).toBeDefined()
    expect(ogDesc).toBeDefined()
  })

  it('does not include route-level JSON-LD entries', () => {
    const jsonLdEntries = meta.filter((t) => t['script:ld+json'])
    expect(jsonLdEntries.length).toBe(0)
  })

  it('includes og:image with contact-specific value', () => {
    const ogImageTag = meta.find((t) => t.property === 'og:image')
    expect(ogImageTag).toBeDefined()
    expect(ogImageTag!.content).toContain('/facility/')
  })
})

// ── Page rendering ──
describe('Contact — page rendering', () => {
  it('renders the page heading', () => {
    renderContact()
    expect(screen.getByRole('heading', { level: 1 })).toBeDefined()
  })

  it('renders phone CTA with site.phone', () => {
    renderContact()
    const phoneLinks = screen.getAllByRole('link', {
      name: new RegExp(site.phone.replace(/[()]/g, '\\$&')),
    })
    expect(phoneLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('renders phone CTA using site.phoneTel href', () => {
    renderContact()
    const phoneLinks = screen.getAllByRole('link', {
      name: new RegExp(site.phone.replace(/[()]/g, '\\$&')),
    })
    const ctaLink = phoneLinks.find((l) => l.getAttribute('href') === site.phoneTel)
    expect(ctaLink).toBeDefined()
  })

  it('renders address from site data', () => {
    renderContact()
    expect(screen.getByText(site.address)).toBeDefined()
  })

  it('renders 24/7 availability', () => {
    renderContact()
    const matches = screen.getAllByText(/24\/7/)
    expect(matches.length).toBeGreaterThanOrEqual(1)
  })

  it('renders internal navigation links', () => {
    renderContact()
    expect(screen.getByRole('link', { name: /admissions/i })).toBeDefined()
    expect(screen.getByRole('link', { name: /programs/i })).toBeDefined()
    expect(screen.getByRole('link', { name: /insurance/i })).toBeDefined()
  })

  it('renders in-page LocalBusiness JSON-LD script', () => {
    renderContact()
    const script = document.querySelector('script[type="application/ld+json"]')
    expect(script).not.toBeNull()
    const schema = JSON.parse(script!.textContent ?? '{}') as Record<string, unknown>
    expect(schema['@type']).toBe('LocalBusiness')
    expect(schema.url).toContain('/contact')
  })
})

// ── Form structure & accessibility ──
describe('Contact — form structure & accessibility', () => {
  it('renders form with all required fields', () => {
    renderContact()
    expect(screen.getByLabelText(/name \*/i)).toBeDefined()
    expect(screen.getByLabelText(/email \*/i)).toBeDefined()
    expect(screen.getByLabelText(/phone/i)).toBeDefined()
    expect(screen.getByLabelText(/message \*/i)).toBeDefined()
  })

  it('has associated labels for all inputs', () => {
    renderContact()
    const nameInput = screen.getByLabelText(/name \*/i)
    const emailInput = screen.getByLabelText(/email \*/i)
    const messageInput = screen.getByLabelText(/message \*/i)
    expect(nameInput.getAttribute('id')).toBe('name')
    expect(emailInput.getAttribute('id')).toBe('email')
    expect(messageInput.getAttribute('id')).toBe('message')
  })

  it('marks required fields with aria-required', () => {
    renderContact()
    expect(screen.getByLabelText(/name \*/i).getAttribute('aria-required')).toBe('true')
    expect(screen.getByLabelText(/email \*/i).getAttribute('aria-required')).toBe('true')
    expect(screen.getByLabelText(/message \*/i).getAttribute('aria-required')).toBe('true')
  })

  it('phone field is NOT required', () => {
    renderContact()
    const phone = screen.getByLabelText(/^phone$/i)
    expect(phone.getAttribute('aria-required')).toBeNull()
    expect(phone.getAttribute('required')).toBeNull()
  })

  it('has autocomplete attributes', () => {
    renderContact()
    expect(screen.getByLabelText(/name \*/i).getAttribute('autocomplete')).toBe('name')
    expect(screen.getByLabelText(/email \*/i).getAttribute('autocomplete')).toBe('email')
    expect(screen.getByLabelText(/^phone$/i).getAttribute('autocomplete')).toBe('tel')
  })

  it('keeps aria-describedby targets mounted for error announcement', () => {
    renderContact()
    expect(screen.getByLabelText(/name \*/i).getAttribute('aria-describedby')).toBe('name-error')
    expect(screen.getByLabelText(/email \*/i).getAttribute('aria-describedby')).toBe('email-error')
    expect(screen.getByLabelText(/message \*/i).getAttribute('aria-describedby')).toBe(
      'message-error',
    )
  })

  it('renders "* Required" indicator', () => {
    renderContact()
    expect(screen.getByText('* Required')).toBeDefined()
  })

  it('renders PHI warning notice', () => {
    renderContact()
    expect(screen.getByText(/do not include personal health information/i)).toBeDefined()
  })

  it('renders submit button', () => {
    renderContact()
    expect(screen.getByRole('button', { name: /send message/i })).toBeDefined()
  })

  it('has an aria-live region for announcements', () => {
    renderContact()
    const liveRegion = document.querySelector('[aria-live="polite"]')
    expect(liveRegion).not.toBeNull()
  })

  it('does NOT contain any PHI-related fields', () => {
    renderContact()
    const allInputs = screen.getAllByRole('textbox')
    const allNames = allInputs.map((i) => i.getAttribute('name'))
    const phiFields = [
      'diagnosis',
      'symptoms',
      'medications',
      'insurance',
      'treatment',
      'condition',
    ]
    for (const field of phiFields) {
      expect(allNames).not.toContain(field)
    }
  })
})

// ── Client-side validation ──
describe('Contact — client-side validation', () => {
  it('shows error when name is empty', async () => {
    const user = userEvent.setup()
    renderContact()
    await user.click(screen.getByRole('button', { name: /send message/i }))
    expect(screen.getByText('Name is required')).toBeDefined()
  })

  it('shows error when email is empty', async () => {
    const user = userEvent.setup()
    renderContact()
    await user.click(screen.getByRole('button', { name: /send message/i }))
    expect(screen.getByText('Email is required')).toBeDefined()
  })

  it('shows error when message is empty', async () => {
    const user = userEvent.setup()
    renderContact()
    await user.click(screen.getByRole('button', { name: /send message/i }))
    expect(screen.getByText('Message is required')).toBeDefined()
  })

  it('shows error for invalid email', async () => {
    const user = userEvent.setup()
    renderContact()
    await user.type(screen.getByLabelText(/name \*/i), 'Test Name')
    await user.type(screen.getByLabelText(/email \*/i), 'notanemail')
    await user.type(
      screen.getByLabelText(/message \*/i),
      'This is a test message that is long enough',
    )
    await user.click(screen.getByRole('button', { name: /send message/i }))
    expect(screen.getByText('Please enter a valid email address')).toBeDefined()
  })

  it('shows error for short message', async () => {
    const user = userEvent.setup()
    renderContact()
    await user.type(screen.getByLabelText(/name \*/i), 'Test Name')
    await user.type(screen.getByLabelText(/email \*/i), 'test@example.com')
    await user.type(screen.getByLabelText(/message \*/i), 'Short')
    await user.click(screen.getByRole('button', { name: /send message/i }))
    expect(screen.getByText('Message must be at least 10 characters')).toBeDefined()
  })

  it('shows error for invalid phone format', async () => {
    const user = userEvent.setup()
    renderContact()
    await user.type(screen.getByLabelText(/name \*/i), 'Test Name')
    await user.type(screen.getByLabelText(/email \*/i), 'test@example.com')
    await user.type(screen.getByLabelText(/^phone$/i), 'not-a-phone!')
    await user.type(screen.getByLabelText(/message \*/i), 'This is a valid test message')
    await user.click(screen.getByRole('button', { name: /send message/i }))
    expect(screen.getByText('Please enter a valid phone number')).toBeDefined()
  })

  it('clears field error when user types in errored field', async () => {
    const user = userEvent.setup()
    renderContact()
    await user.click(screen.getByRole('button', { name: /send message/i }))
    expect(screen.getByText('Name is required')).toBeDefined()
    await user.type(screen.getByLabelText(/name \*/i), 'A')
    await waitFor(() => {
      expect(screen.queryByText('Name is required')).toBeNull()
    })
  })

  it('sets aria-invalid on errored fields', async () => {
    const user = userEvent.setup()
    renderContact()
    await user.click(screen.getByRole('button', { name: /send message/i }))
    expect(screen.getByLabelText(/name \*/i).getAttribute('aria-invalid')).toBe('true')
    expect(screen.getByLabelText(/email \*/i).getAttribute('aria-invalid')).toBe('true')
    expect(screen.getByLabelText(/message \*/i).getAttribute('aria-invalid')).toBe('true')
  })
})

// ── Form submission ──
describe('Contact — form submission', () => {
  it('submits valid form and shows success message', async () => {
    const user = userEvent.setup()
    const fetchSpy = vi
      .spyOn(globalThis, 'fetch')
      .mockResolvedValueOnce(new Response(JSON.stringify({ success: true }), { status: 200 }))

    renderContact()
    await user.type(screen.getByLabelText(/name \*/i), 'Test Name')
    await user.type(screen.getByLabelText(/email \*/i), 'test@example.com')
    await user.type(
      screen.getByLabelText(/message \*/i),
      'This is a valid test message for the form',
    )
    await user.click(screen.getByRole('button', { name: /send message/i }))

    await waitFor(() => {
      expect(screen.getByText(/thank you/i)).toBeDefined()
    })

    expect(fetchSpy).toHaveBeenCalledWith(
      '/api/contact',
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      }),
    )

    fetchSpy.mockRestore()
  })

  it('shows error message on server error', async () => {
    const user = userEvent.setup()
    const fetchSpy = vi
      .spyOn(globalThis, 'fetch')
      .mockResolvedValueOnce(
        new Response(JSON.stringify({ error: 'Server error' }), { status: 500 }),
      )

    renderContact()
    await user.type(screen.getByLabelText(/name \*/i), 'Test Name')
    await user.type(screen.getByLabelText(/email \*/i), 'test@example.com')
    await user.type(
      screen.getByLabelText(/message \*/i),
      'This is a valid test message for the form',
    )
    await user.click(screen.getByRole('button', { name: /send message/i }))

    await waitFor(() => {
      expect(screen.getByText(/something went wrong/i)).toBeDefined()
    })

    fetchSpy.mockRestore()
  })

  it('shows error message on network failure', async () => {
    const user = userEvent.setup()
    const fetchSpy = vi.spyOn(globalThis, 'fetch').mockRejectedValueOnce(new Error('Network error'))

    renderContact()
    await user.type(screen.getByLabelText(/name \*/i), 'Test Name')
    await user.type(screen.getByLabelText(/email \*/i), 'test@example.com')
    await user.type(
      screen.getByLabelText(/message \*/i),
      'This is a valid test message for the form',
    )
    await user.click(screen.getByRole('button', { name: /send message/i }))

    await waitFor(() => {
      expect(screen.getByText(/something went wrong/i)).toBeDefined()
    })

    fetchSpy.mockRestore()
  })

  it('disables submit button while submitting', async () => {
    const user = userEvent.setup()
    let resolvePromise: (value: Response) => void
    const fetchSpy = vi.spyOn(globalThis, 'fetch').mockImplementationOnce(
      () =>
        new Promise((resolve) => {
          resolvePromise = resolve
        }),
    )

    renderContact()
    await user.type(screen.getByLabelText(/name \*/i), 'Test Name')
    await user.type(screen.getByLabelText(/email \*/i), 'test@example.com')
    await user.type(
      screen.getByLabelText(/message \*/i),
      'This is a valid test message for the form',
    )
    await user.click(screen.getByRole('button', { name: /send message/i }))

    expect(screen.getByRole('button', { name: /sending/i })).toBeDefined()
    expect(screen.getByRole('button', { name: /sending/i }).hasAttribute('disabled')).toBe(true)

    resolvePromise!(new Response(JSON.stringify({ success: true }), { status: 200 }))

    await waitFor(() => {
      expect(screen.getByText(/thank you/i)).toBeDefined()
    })

    fetchSpy.mockRestore()
  })

  it('handles 400 validation errors from server', async () => {
    const user = userEvent.setup()
    const fetchSpy = vi
      .spyOn(globalThis, 'fetch')
      .mockResolvedValueOnce(
        new Response(
          JSON.stringify({ error: 'Validation failed', errors: { email: 'Invalid email' } }),
          { status: 400 },
        ),
      )

    renderContact()
    await user.type(screen.getByLabelText(/name \*/i), 'Test Name')
    await user.type(screen.getByLabelText(/email \*/i), 'test@example.com')
    await user.type(
      screen.getByLabelText(/message \*/i),
      'This is a valid test message for the form',
    )
    await user.click(screen.getByRole('button', { name: /send message/i }))

    await waitFor(() => {
      expect(screen.getByText('Invalid email')).toBeDefined()
    })

    fetchSpy.mockRestore()
  })

  it('clears form fields on successful submit', async () => {
    const user = userEvent.setup()
    const fetchSpy = vi
      .spyOn(globalThis, 'fetch')
      .mockResolvedValueOnce(new Response(JSON.stringify({ success: true }), { status: 200 }))

    renderContact()
    const nameInput = screen.getByLabelText(/name \*/i) as HTMLInputElement
    const emailInput = screen.getByLabelText(/email \*/i) as HTMLInputElement
    const messageInput = screen.getByLabelText(/message \*/i) as HTMLTextAreaElement

    await user.type(nameInput, 'Test Name')
    await user.type(emailInput, 'test@example.com')
    await user.type(messageInput, 'This is a valid test message for the form')
    await user.click(screen.getByRole('button', { name: /send message/i }))

    await waitFor(() => {
      expect(nameInput.value).toBe('')
      expect(emailInput.value).toBe('')
      expect(messageInput.value).toBe('')
    })

    fetchSpy.mockRestore()
  })
})
