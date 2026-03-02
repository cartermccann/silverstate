import '@testing-library/jest-dom'
import { setupBrowserMocks } from './mocks'

// Global GSAP mocks — vi.mock is hoisted so factories must be inline
vi.mock('gsap', () => {
  const tl = {
    to: vi.fn().mockReturnThis(),
    from: vi.fn().mockReturnThis(),
    fromTo: vi.fn().mockReturnThis(),
    set: vi.fn().mockReturnThis(),
    add: vi.fn().mockReturnThis(),
    kill: vi.fn(),
    progress: vi.fn().mockReturnThis(),
    pause: vi.fn().mockReturnThis(),
    play: vi.fn().mockReturnThis(),
    reverse: vi.fn().mockReturnThis(),
    restart: vi.fn().mockReturnThis(),
    clear: vi.fn().mockReturnThis(),
  }
  const mock = {
    registerPlugin: vi.fn(),
    set: vi.fn(),
    to: vi.fn(),
    from: vi.fn(),
    fromTo: vi.fn(),
    timeline: vi.fn().mockReturnValue(tl),
    matchMedia: vi.fn().mockReturnValue({ add: vi.fn(), revert: vi.fn() }),
    context: vi.fn().mockReturnValue({ revert: vi.fn(), add: vi.fn() }),
    killTweensOf: vi.fn(),
    utils: { toArray: vi.fn((sel: unknown) => (Array.isArray(sel) ? sel : [])) },
  }
  return { default: mock, gsap: mock }
})

vi.mock('gsap/ScrollTrigger', () => {
  const st = {
    register: vi.fn(),
    create: vi.fn(),
    refresh: vi.fn(),
    getAll: vi.fn().mockReturnValue([]),
    enable: vi.fn(),
    disable: vi.fn(),
  }
  return { default: st, ScrollTrigger: st }
})

// Browser API stubs (IntersectionObserver, matchMedia)
beforeAll(() => {
  setupBrowserMocks()
})
