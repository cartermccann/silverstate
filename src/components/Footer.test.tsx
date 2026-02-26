import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { describe, it, expect, vi } from 'vitest'
import Footer from './Footer'
import { OPEN_CONSENT_EVENT } from '../utils/consentEvents'

describe('Footer', () => {
  it('exposes a cookie preferences control that dispatches reopen event', async () => {
    const user = userEvent.setup()
    const listener = vi.fn()
    window.addEventListener(OPEN_CONSENT_EVENT, listener as EventListener)

    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    )

    await user.click(screen.getByRole('button', { name: /open cookie preferences/i }))
    expect(listener).toHaveBeenCalledTimes(1)
    window.removeEventListener(OPEN_CONSENT_EVENT, listener as EventListener)
  })
})
