import type { CSSProperties, ReactNode } from 'react'

// Shared base props
export interface BaseComponentProps {
  className?: string
  style?: CSSProperties
  children?: ReactNode
}

// Animation variants (used by AnimateIn)
export type AnimationVariant =
  | 'fadeUp' | 'fadeIn' | 'fadeLeft' | 'fadeRight'
  | 'scaleUp' | 'slideUp' | 'rotateIn' | 'blurUp'
  | 'springUp' | 'springDown' | 'clipUp'

// Animation preset shape
export interface AnimationPreset {
  from: gsap.TweenVars
  to: gsap.TweenVars
  ease?: string
  duration?: number
}

// Data types
export interface LightboxImage {
  src: string
  alt?: string
  caption?: string
}

export interface FaqEntry {
  q: string
  a: string
}

export interface AdmissionStep {
  step: number
  title: string
  desc: string
}

export interface LeadershipEntry {
  name: string
  title: string
  bio: string
}

export interface InsuranceEntry {
  name: string
  logo: string | null
}

export interface AccreditationEntry {
  name: string
  logo: string | null
}

export interface ProgramData {
  label: string
  title: string
  body: string
  features: string[]
  stat?: string
}

export interface YouthAcademyFeature {
  title: string
  desc: string
}

export interface DailyScheduleEntry {
  time: string
  activity: string
  desc: string
}

export interface WhyChooseEntry {
  title: string
  body: string
}

export interface ProfileEntry {
  label: string
  desc: string
}
