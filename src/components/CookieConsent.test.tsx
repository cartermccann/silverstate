import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import CookieConsent from './CookieConsent'

// Mock analytics module
vi.mock('../utils/analytics', () => ({
  getConsentState: vi.fn(() => 'pending'),
  setConsentState: vi.fn(),
  initializeDefaultConsent: vi.fn(),
  updateGoogleConsent: vi.fn(),
}))

import {
  getConsentState,
  setConsentState,
  initializeDefaultConsent,
  updateGoogleConsent,
} from '../utils/analytics'
import { OPEN_CONSENT_EVENT } from '../utils/consentEvents'

const mockGetConsentState = vi.mocked(getConsentState)
const mockSetConsentState = vi.mocked(setConsentState)
const mockInitializeDefaultConsent = vi.mocked(initializeDefaultConsent)
const mockUpdateGoogleConsent = vi.mocked(updateGoogleConsent)

function renderBanner() {
  return render(
    <MemoryRouter>
      <CookieConsent />
    </MemoryRouter>,
  )
}

describe('CookieConsent', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockGetConsentState.mockReturnValue('pending')
  })

  it('calls initializeDefaultConsent on mount', () => {
    renderBanner()
    expect(mockInitializeDefaultConsent).toHaveBeenCalledOnce()
  })

  it('re-applies stored consent to Google Consent Mode on mount', () => {
    mockGetConsentState.mockReturnValue('granted')
    renderBanner()
    expect(mockUpdateGoogleConsent).toHaveBeenCalledWith('granted')
  })

  it('shows the banner when consent is pending', () => {
    renderBanner()
    expect(screen.getByRole('dialog', { name: /cookie consent/i })).toBeInTheDocument()
    expect(screen.getByText('We value your privacy')).toBeInTheDocument()
  })

  it('does not show the banner when consent is already granted', () => {
    mockGetConsentState.mockReturnValue('granted')
    const { container } = renderBanner()
    expect(container.innerHTML).toBe('')
  })

  it('does not show the banner when consent is already denied', () => {
    mockGetConsentState.mockReturnValue('denied')
    const { container } = renderBanner()
    expect(container.innerHTML).toBe('')
  })

  it('calls setConsentState("granted") and hides banner on Accept', async () => {
    const user = userEvent.setup()
    renderBanner()
    await user.click(screen.getByRole('button', { name: /accept analytics/i }))
    expect(mockSetConsentState).toHaveBeenCalledWith('granted')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('calls setConsentState("denied") and hides banner on Decline', async () => {
    const user = userEvent.setup()
    renderBanner()
    await user.click(screen.getByRole('button', { name: /decline/i }))
    expect(mockSetConsentState).toHaveBeenCalledWith('denied')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('has role="dialog" with aria-label', () => {
    renderBanner()
    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAttribute('aria-label', 'Cookie consent')
    expect(dialog).toHaveAttribute('aria-modal', 'false')
  })

  it('renders proper button elements (not divs)', () => {
    renderBanner()
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(2)
    buttons.forEach((btn) => {
      expect(btn.tagName).toBe('BUTTON')
    })
  })

  it('banner text mentions no health information is collected', () => {
    renderBanner()
    expect(
      screen.getByText(/no health information is collected through cookies/i),
    ).toBeInTheDocument()
  })

  it('is keyboard navigable - Tab reaches both buttons', async () => {
    const user = userEvent.setup()
    renderBanner()
    await user.tab()
    expect(screen.getByRole('button', { name: /accept analytics/i })).toHaveFocus()
    await user.tab()
    expect(screen.getByRole('button', { name: /decline/i })).toHaveFocus()
  })

  it('keyboard Enter activates Accept button', async () => {
    const user = userEvent.setup()
    renderBanner()
    await user.tab()
    await user.keyboard('{Enter}')
    expect(mockSetConsentState).toHaveBeenCalledWith('granted')
  })

  it('reopens the banner when cookie preferences event is dispatched', () => {
    mockGetConsentState.mockReturnValue('granted')
    renderBanner()
    expect(screen.queryByRole('dialog', { name: /cookie consent/i })).not.toBeInTheDocument()

    act(() => {
      window.dispatchEvent(new CustomEvent(OPEN_CONSENT_EVENT))
    })

    return waitFor(() => {
      expect(screen.getByRole('dialog', { name: /cookie consent/i })).toBeInTheDocument()
    })
  })
})
