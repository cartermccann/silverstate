import { useEffect } from 'react'
import ConditionPage from './ConditionPage'
import { getConditionBySlug } from '../../data/conditions'
import { generateMeta } from '../../utils/meta'
import { generateFAQPage, generateMedicalCondition } from '../../utils/schema'

const condition = getConditionBySlug('anorexia-nervosa-treatment')!

const faqSchema = generateFAQPage({
  questions: condition.faqs.map((f) => ({ question: f.q, answer: f.a })),
})

const conditionSchema = generateMedicalCondition({
  name: condition.name,
  description: condition.description.split('\n\n')[0] ?? '',
  slug: condition.slug,
  possibleTreatments: condition.therapies,
  symptoms: condition.symptoms,
})

export const meta = generateMeta({
  title: condition.metaTitle,
  description: condition.metaDescription,
  path: `/conditions/${condition.slug}`,
  jsonLd: [faqSchema, conditionSchema],
})

export const handle = {
  breadcrumb: { label: 'Anorexia Nervosa Treatment', parent: '/conditions' },
}

export default function AnorexiaNervosa() {
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

  return <ConditionPage condition={condition} />
}
