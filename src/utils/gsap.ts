import * as gsapNamespace from 'gsap'
import * as scrollTriggerNamespace from 'gsap/ScrollTrigger'

type GsapLike = {
  registerPlugin: (...plugins: unknown[]) => void
}

type GsapRuntime = typeof import('gsap').gsap

function resolveGsapRuntime(): GsapRuntime {
  const namespace = gsapNamespace as {
    gsap?: unknown
    default?: { gsap?: unknown } | unknown
  }

  const candidates = [
    namespace.gsap,
    namespace.default && typeof namespace.default === 'object'
      ? (namespace.default as { gsap?: unknown }).gsap
      : undefined,
    namespace.default,
    gsapNamespace,
  ]

  const resolved = candidates.find(
    (candidate): candidate is GsapLike =>
      typeof candidate === 'object' &&
      candidate !== null &&
      'registerPlugin' in candidate &&
      typeof (candidate as { registerPlugin?: unknown }).registerPlugin === 'function',
  )

  if (!resolved) {
    throw new Error('GSAP runtime could not be resolved')
  }

  return resolved as unknown as GsapRuntime
}

function resolveScrollTriggerRuntime(): unknown {
  const namespace = scrollTriggerNamespace as {
    ScrollTrigger?: unknown
    default?: { ScrollTrigger?: unknown } | unknown
  }

  const fromDefault =
    namespace.default &&
    typeof namespace.default === 'object' &&
    'ScrollTrigger' in namespace.default
      ? (namespace.default as { ScrollTrigger?: unknown }).ScrollTrigger
      : namespace.default

  const candidates = [namespace.ScrollTrigger, fromDefault, scrollTriggerNamespace]
  const resolved = candidates.find((candidate) => Boolean(candidate))

  if (!resolved) {
    throw new Error('ScrollTrigger runtime could not be resolved')
  }

  return resolved
}

export const gsap: GsapRuntime = resolveGsapRuntime()
export const ScrollTrigger = resolveScrollTriggerRuntime() as {
  create: (...args: unknown[]) => unknown
  getAll: () => Array<{ kill: () => void; trigger?: unknown }>
  update: (...args: unknown[]) => void
}

gsap.registerPlugin(ScrollTrigger)
