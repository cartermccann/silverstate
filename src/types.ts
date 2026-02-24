import type { CSSProperties, ReactNode } from 'react'

// Shared base props
export interface BaseComponentProps {
  className?: string
  style?: CSSProperties
  children?: ReactNode
}

// Animation variants (used by AnimateIn)
export type AnimationVariant =
  | 'fadeUp'
  | 'fadeIn'
  | 'fadeLeft'
  | 'fadeRight'
  | 'scaleUp'
  | 'slideUp'
  | 'rotateIn'
  | 'blurUp'
  | 'springUp'
  | 'springDown'
  | 'clipUp'

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

/** @alias Preferred name per architecture spec */
export type AdmissionsStep = AdmissionStep

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

// --- Homepage interfaces (Story 2.1 + 2.2) ---

export interface HomepageProgramHighlight {
  slug: string
  label: string
  title: string
  body: string
  features: string[]
  stat?: string
}

export interface ConditionOverviewItem {
  name: string
  slug: string
}

export interface ConditionOverviewCategory {
  category: string
  conditions: ConditionOverviewItem[]
}

export interface HomepageTeamOverview {
  clinical: string
  members: string[]
}

export interface FamilySectionData {
  heading: string
  body: string
  bulletPoints: string[]
}

export interface HomepageAdmissionsStep {
  step: number
  title: string
  desc: string
}

export interface HeroData {
  headline: string
  body: string
  ctaPrimary: { label: string; href: string }
  ctaSecondary: { label: string; href: string }
  backgroundImage: { src: string; alt: string }
}

export interface IntroData {
  paragraph: string
  credibilityLine: string
}

// --- NEW interfaces (Story 1.2) ---

export interface NavLinkItem {
  label: string
  href: string
}

export interface FooterLinkGroup {
  heading: string
  links: NavLinkItem[]
}

export interface SiteInfo {
  name: string
  tagline: string
  phone: string
  phoneTel: string
  email: string
  address: string
  ages: string
  rating: number
  reviewCount: number
}

export interface SourceCitation {
  label: string
  url: string
}

export interface ConditionData {
  slug: string
  name: string
  headline: string
  category: 'mental-health' | 'substance-abuse' | 'eating-disorders'
  description: string
  symptoms: string[]
  therapies: string[]
  approach: string
  faqs: FaqEntry[]
  relatedPrograms: string[]
  relatedConditions: string[]
  metaTitle: string
  metaDescription: string
  reviewedBy?: string
  reviewDate?: string
  sources: SourceCitation[]
}

export interface LocationData {
  slug: string
  city: string
  headline: string
  description: string
  distance: string
  localContext: string
  relatedPrograms: string[]
  metaDescription: string
}

export interface TeamMember {
  name: string
  title: string
  photo?: string
  credentials?: string
  licenseNumbers?: string[]
  specializations?: string[]
  bio: string
}

export interface TherapyModality {
  slug: string
  name: string
  abbreviation?: string
  description: string
  approach?: string
  relatedConditions?: string[]
  relatedPrograms?: string[]
}

export interface ProgramPageData {
  slug: string
  label: string
  title: string
  body: string
  features: string[]
  stat?: string
  approach: string
  duration: string
  targetAudience: string
  dailySchedule: DailyScheduleEntry[]
  therapyModalities: string[]
  faqs: FaqEntry[]
  relatedConditions: string[]
  relatedPrograms: string[]
  metaDescription: string
  reviewedBy?: string
  reviewDate?: string
}

export interface PrivacySection {
  id: string
  heading: string
  content: string[]
}

export interface NotFoundContent {
  headline: string
  message: string
  suggestions: { label: string; href: string }[]
}

export interface FinalCtaData {
  headline: string
  body: string
  primaryCtaLabel: string
  secondaryCtaLabel: string
  secondaryCtaHref: string
}

export interface InsurancePageData {
  slug: string
  name: string
  logo: string | null
  coverageDescription: string
  preAuthorization: string
  faqs: FaqEntry[]
  metaDescription: string
}
