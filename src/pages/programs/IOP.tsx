import { useEffect } from 'react'
import ProgramPage from './ProgramPage'
import { iopProgram } from '../../data/programs'
import { generateMeta } from '../../utils/meta'
import { generateFAQPage, generateMedicalTherapy } from '../../utils/schema'

const faqSchema = generateFAQPage({
  questions: iopProgram.faqs.map((f) => ({ question: f.q, answer: f.a })),
})

const therapySchema = generateMedicalTherapy({
  name: iopProgram.label,
  description: iopProgram.overview,
  slug: iopProgram.slug,
  therapyType: 'Behavioral',
  conditions: iopProgram.relatedConditions.map((slug) =>
    slug
      .replace(/-treatment$/, '')
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' '),
  ),
})

export const meta = generateMeta({
  title: iopProgram.metaTitle.replace(/ \| Silver State$/, ''),
  description: iopProgram.metaDescription,
  path: `/programs/${iopProgram.slug}`,
  jsonLd: [faqSchema, therapySchema],
})

export const handle = {
  breadcrumb: { label: 'Intensive Outpatient (IOP)', parent: '/programs' },
}

export default function IOP() {
  useEffect(() => {
    const prevTitle = document.title
    const addedElements: HTMLElement[] = []

    for (const tag of meta) {
      if (tag.title) {
        document.title = tag.title
      } else if (tag.tagName === 'link' && tag.rel && tag.href) {
        let el = document.querySelector<HTMLLinkElement>(`link[rel="${tag.rel}"]`)
        if (!el) {
          el = document.createElement('link')
          el.rel = tag.rel
          document.head.appendChild(el)
          addedElements.push(el)
        }
        el.href = tag.href
      } else if (tag.name) {
        let el = document.querySelector<HTMLMetaElement>(`meta[name="${tag.name}"]`)
        if (!el) {
          el = document.createElement('meta')
          el.name = tag.name
          document.head.appendChild(el)
          addedElements.push(el)
        }
        el.content = tag.content ?? ''
      } else if (tag.property) {
        let el = document.querySelector<HTMLMetaElement>(`meta[property="${tag.property}"]`)
        if (!el) {
          el = document.createElement('meta')
          el.setAttribute('property', tag.property)
          document.head.appendChild(el)
          addedElements.push(el)
        }
        el.content = tag.content ?? ''
      }
    }

    return () => {
      document.title = prevTitle
      for (const el of addedElements) {
        el.remove()
      }
    }
  }, [])

  return <ProgramPage program={iopProgram} />
}
