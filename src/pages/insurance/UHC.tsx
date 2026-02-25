import { useEffect } from 'react'
import { getInsuranceBySlug } from '../../data/insurance'
import { generateMeta } from '../../utils/meta'
import { generateFAQPage } from '../../utils/schema'
import InsurancePage from './InsurancePage'

const provider = getInsuranceBySlug('uhc')!

const faqSchema = generateFAQPage({
  questions: provider.faqs.map((f) => ({ question: f.q, answer: f.a })),
})

export const meta = generateMeta({
  title: `${provider.name} Coverage for Teen Treatment`,
  description: provider.metaDescription,
  path: `/insurance/${provider.slug}`,
  jsonLd: [faqSchema],
})

export const handle = {
  breadcrumb: { label: provider.name, parent: '/insurance' },
}

export default function UHC() {
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

  return <InsurancePage provider={provider} />
}
