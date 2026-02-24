# Silver State — Design System Reference (DO NOT DEVIATE)

> **Source of truth:** `mockups/silverstate-react/`
> **Generated:** 2026-02-23
> **Purpose:** Every production component MUST match these specs exactly. No new patterns, no alternative approaches.

---

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--blue` | `#134B8E` | Primary action, links, CTAs |
| `--blue-hover` | `#1a5daf` | Button hover state |
| `--blue-soft` | `#edf2f8` | Light blue backgrounds |
| `--sage` | `#5A7A6E` | Secondary accent, dots, badges |
| `--sage-soft` | `#eef4f1` | Light sage backgrounds |
| `--cream` | `#FDFBF7` | Primary page background |
| `--warm` | `#F5F2EB` | Warm section backgrounds |
| `--warm-deep` | `#E5DED3` | Darker warm tone |
| `--text` | `#111` | Primary text (headings) |
| `--body` | `#4a4a4a` | Body text |
| `--muted` | `#999` | Tertiary text, labels (NEVER for essential text <18px) |
| `--border` | `rgba(0, 0, 0, .07)` | Subtle dividers |
| `--white` | `#fff` | White |
| `--dark` | `#0f172a` | Dark sections, hero overlays |

**RULE:** Always use `var(--token)` in styles. Never hardcode hex values.

---

## Typography

| Token | Value |
|-------|-------|
| `--font-display` | `'Space Grotesk', sans-serif` |
| `--font-body` | `'Inter', system-ui, -apple-system, sans-serif` |
| `--h1-size` | `clamp(3rem, 6vw, 5rem)` — line-height: `0.92` |
| `--h2-size` | `clamp(2.25rem, 4vw, 3.5rem)` — line-height: `0.95` |
| `--h3-size` | `clamp(1.75rem, 3vw, 2.5rem)` — line-height: `1.04` |
| `--h4-size` | `clamp(1.25rem, 2vw, 1.65rem)` — line-height: `1.2` |
| `--weight-bold` | `700` |
| `--weight-medium` | `500` |

**Text wrapping:**
- Headings: `text-wrap: balance`
- Paragraphs: `text-wrap: pretty`

---

## Spacing & Sizing

| Token | Value |
|-------|-------|
| `--radius` | `12px` |
| `--radius-lg` | `16px` |
| `--shadow-sm` | `0 1px 2px rgba(0, 0, 0, .04)` |
| `--shadow` | `0 1px 3px rgba(0, 0, 0, .04), 0 4px 12px rgba(0, 0, 0, .03)` |
| `--shadow-hover` | `0 2px 8px rgba(0, 0, 0, .06), 0 8px 24px rgba(0, 0, 0, .04)` |

---

## Utility Classes

### `.wrap`
- `max-width: 1200px; margin: 0 auto; padding: 0 32px`
- Mobile (<=900px): `padding: 0 20px`

### `.wrap-narrow`
- `max-width: 800px; margin: 0 auto; padding: 0 32px`

### `.section-label`
- `font-size: .7rem; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; color: var(--blue)`

### `.section-heading`
- `font-family: var(--font-display); font-size: clamp(1.75rem, 2.5vw, 2.25rem); font-weight: 600; line-height: 1.05; letter-spacing: -.04em; margin-top: 8px; text-wrap: balance`

### `.section-desc`
- `color: var(--body); font-size: .95rem; line-height: 1.7; max-width: 480px; margin-top: 12px`

---

## Button System

### `.btn` (base)
```css
display: inline-flex; align-items: center; gap: 8px;
padding: 14px 28px; border-radius: 999px;
font-size: .9rem; font-weight: 600; transition: all .15s ease;
border: none; cursor: pointer; line-height: 1; font-family: inherit;
```

| Variant | Background | Color | Hover |
|---------|-----------|-------|-------|
| `.btn-primary` | `var(--blue)` | `var(--white)` | `background: var(--blue-hover); scale(1.02) translateY(-1px)` |
| `.btn-dark` | `var(--dark)` | `var(--white)` | `opacity: .85; scale(1.02) translateY(-1px)` |
| `.btn-outline` | `transparent` | `var(--text)` | `border-color: var(--blue); color: var(--blue)` |
| `.btn-white` | `var(--white)` | `var(--dark)` | `scale(1.02) translateY(-1px); shadow` |
| `.btn-ghost` | `transparent` | `var(--white)` | `border-color: rgba(255,255,255,.5)` |

### `.btn-pulse` (phone CTA animation)
```css
animation: pulse-glow 2.5s infinite cubic-bezier(0.2, 0.8, 0.2, 1);
/* Box-shadow: 0 0 0 0 rgba(19, 75, 142, 0.4) → 0 0 0 10px rgba(19, 75, 142, 0) */
```

**Focus:** All buttons: `outline: 2px solid var(--blue); outline-offset: 2px`

---

## Component Prop Interfaces

### AnimateIn
```ts
variant: 'fadeUp' | 'fadeIn' | 'fadeLeft' | 'fadeRight' | 'scaleUp' | 'slideUp' | 'rotateIn' | 'blurUp' | 'springUp' | 'springDown' | 'clipUp' // default: 'fadeUp'
delay?: number      // default: 0
duration?: number   // default: 1.0
className?: string
as?: string         // default: 'div'
style?: CSSProperties
triggerStart?: string  // default: 'top 85%'
once?: boolean      // default: true
```
**Engine:** GSAP ScrollTrigger. Ease: `'expo.out'`. Mobile: halved offsets, no blur.

### TextReveal / CharReveal
```ts
// TextReveal
children: string
as?: keyof JSX.IntrinsicElements  // default: 'p'
stagger?: number    // default: 0.04
scrub?: boolean     // default: false
once?: boolean      // default: true
triggerStart?: string  // default: 'top 85%'
duration?: number   // default: 0.5

// CharReveal — character-by-character, no scrub
// Desktop: y:40, rotateX:-90 → y:0, rotateX:0 (perspective: 800)
// Mobile: y:20, rotateX:-30
```

### Parallax / ClipReveal
```ts
// Parallax
speed?: number      // default: 0.3
direction?: 'up' | 'down'  // default: 'up'
scale?: boolean     // default: false
scaleFrom?: number  // default: 1.15
scaleTo?: number    // default: 1
overflow?: 'hidden' | 'visible'  // default: 'hidden'

// ClipReveal
direction?: 'up' | 'left' | 'right'
duration?: number   // default: 1
// Ease: power3.inOut
```
**Touch:** Speed halved, scale disabled.

### CountUp
```ts
end: number | string
suffix?: string     // default: ''
prefix?: string     // default: ''
duration?: number   // default: 2
triggerStart?: string  // default: 'top 85%'
```

### MagneticButton
```ts
strength?: number   // default: 0.3
className?: string
style?: CSSProperties
as?: 'div' | 'button' | 'a'  // default: 'div'
```
**Engine:** Framer Motion. Spring: `{damping: 20, stiffness: 150, mass: 0.5}`.

### CardStack
```ts
topStart?: number    // default: 120 (mobile: 72)
topStep?: number     // default: 20 (mobile: 10)
scaleTarget?: number // default: 0.95
gap?: number         // default: 40 (mobile: 24)
style?: CSSProperties
```

### FaqItem
```ts
q: string           // question
a: string           // answer
isOpen: boolean     // controlled
onToggle: () => void
accentColor?: string // default: '#5A7A6E' (sage)
```
**Animation:** grid-template-rows 0fr→1fr, 0.35s cubic-bezier(0.2, 0.6, 0.3, 1).

### Nav
```ts
variant?: 'light' | 'dark'
```
Fixed 64px header, glassmorphism. Skip link first focusable element.

### Footer
No props. 4-column grid desktop (2fr 1fr 1fr 1fr), 2-col tablet, 1-col mobile.

### Timeline (TimelineRow)
```ts
time: string
activity: string
desc: string
```
3-column grid: 80px | 24px dot | 1fr.

### ProfileChip
```ts
label: string
desc: string
dotColor?: string   // default: '#5A7A6E'
style?: CSSProperties
```

### StatBlock
```ts
value: ReactNode    // number, string, or <CountUp />
label: string
style?: CSSProperties
```

### StepCard
```ts
step: number
title: string
desc: string
style?: CSSProperties
```

### Lightbox
```ts
images: LightboxImage[]  // { src, alt?, caption? }
index: number
onClose: () => void
onPrev: () => void
onNext: () => void
```
Overlay z-index: 9999. Keyboard: Esc/ArrowLeft/ArrowRight.

---

## Hooks

### useIsMobile
```ts
function useIsMobile(breakpoint = 900): boolean
function isTouchDevice(): boolean  // non-reactive utility
```

### useDragScroll
```ts
function useDragScroll(sensitivity = 1.5): {
  ref: RefObject<HTMLElement>
  isDragging: boolean
  handlers: { onMouseDown, onMouseUp, onMouseLeave, onMouseMove }
}
```

---

## Responsive Rules

**Single breakpoint: 900px**

| Viewport | Behavior |
|----------|----------|
| >= 900px | Multi-column grids, sticky positioning, full animations, desktop nav |
| < 900px | Single column, no sticky, reduced animation offsets, hamburger nav |
| < 500px | Further condensed padding, smaller grid gaps |

**RULE:** No tablet breakpoint. Two-tier only: mobile (<900px) and desktop (>=900px).

---

## Animation Rules

1. **Engine:** GSAP 3 + ScrollTrigger for scroll-triggered. Framer Motion for interaction only (MagneticButton).
2. **Default ease:** `'expo.out'`
3. **Default trigger:** `'top 85%'`
4. **Default once:** `true`
5. **Mobile:** Halved offsets, no blur filters, no scale on CardStack, Parallax speed halved
6. **Touch devices:** Lenis disabled, Parallax scale disabled, MagneticButton disabled
7. **Reduced motion:** ALL animations skip. CountUp shows final value. Lenis disabled.
8. **GPU hints:** `will-change: transform, opacity` on animated elements
9. **Cleanup:** All GSAP ScrollTriggers killed on component unmount

---

## Styling Rules (MANDATORY)

1. **Inline styles + CSS tokens only** — No CSS modules, No Tailwind, No styled-components
2. **Colors via `var()` always** — Never hardcode hex in components
3. **Font via `var()` always** — `var(--font-display)` for headings, `var(--font-body)` for body
4. **Buttons use `.btn` classes** — Never create custom button styles
5. **Layout containers use `.wrap` / `.wrap-narrow`** — max-width 1200px / 800px
6. **Section headers use `.section-label` + `.section-heading` + `.section-desc`** pattern
7. **Cards use `.bento-card`** with hover-lift pattern
8. **Icons use `Icons.tsx` exports** — All SVGs are `aria-hidden="true"`, `stroke="currentColor"`
9. **No barrel files** in `components/` — import directly from component files
10. **Components use `export default function`** — named function, not arrow

---

## Design Patterns

| Pattern | Implementation |
|---------|---------------|
| **Glassmorphism** | `backdrop-filter: blur(10px); background: rgba(...); border: 1px solid rgba(...)` |
| **Bento Cards** | `.bento-card` class, hover lift + shadow |
| **Stagger Reveals** | `StaggerGroup` + `StaggerItem` with configurable stagger delay |
| **Scrollytelling** | Sticky panel + Parallax/ClipReveal on scroll |
| **Scrub Text** | `TextReveal scrub={true}` — word opacity tied to scroll position |
| **Pulse CTA** | `.btn-pulse` animation on phone buttons |
| **Drag Carousel** | `useDragScroll` hook on horizontal overflow container |

---

## Dependency Versions (LOCKED)

| Package | Version |
|---------|---------|
| react | ^19.0.0 |
| react-dom | ^19.0.0 |
| react-router-dom | ^7.1.0 |
| gsap | ^3.14.2 |
| @gsap/react | ^2.1.2 |
| framer-motion | ^12.34.3 |
| lenis | ^1.3.17 |
| typescript | ^5.9.3 |
| vite | ^6.0.0 |

**RULE:** Do not add styling libraries. Do not upgrade versions without explicit approval.
