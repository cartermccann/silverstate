import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import FaqItem from './FaqItem'

describe('FaqItem', () => {
  const defaultProps = {
    q: 'What is residential treatment?',
    a: 'Residential treatment provides 24/7 care in a structured environment.',
    isOpen: false,
    onToggle: vi.fn(),
  }

  it('renders the question text', () => {
    render(<FaqItem {...defaultProps} />)
    expect(screen.getByText(defaultProps.q)).toBeInTheDocument()
  })

  it('renders the answer text in the DOM', () => {
    render(<FaqItem {...defaultProps} isOpen={true} />)
    expect(screen.getByText(defaultProps.a)).toBeInTheDocument()
  })

  it('sets aria-expanded true when isOpen is true', () => {
    render(<FaqItem {...defaultProps} isOpen={true} />)
    const button = screen.getByRole('button', { name: /what is residential treatment/i })
    expect(button).toHaveAttribute('aria-expanded', 'true')
  })

  it('sets aria-expanded false when isOpen is false', () => {
    render(<FaqItem {...defaultProps} isOpen={false} />)
    const button = screen.getByRole('button', { name: /what is residential treatment/i })
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('calls onToggle when the question is clicked', async () => {
    const onToggle = vi.fn()
    const user = userEvent.setup()
    render(<FaqItem {...defaultProps} onToggle={onToggle} />)

    const button = screen.getByRole('button', { name: /what is residential treatment/i })
    await user.click(button)

    expect(onToggle).toHaveBeenCalledOnce()
  })

  it('is keyboard accessible — calls onToggle with Enter key', async () => {
    const onToggle = vi.fn()
    const user = userEvent.setup()
    render(<FaqItem {...defaultProps} onToggle={onToggle} />)

    const button = screen.getByRole('button', { name: /what is residential treatment/i })
    button.focus()
    await user.keyboard('{Enter}')

    expect(onToggle).toHaveBeenCalledOnce()
  })
})
