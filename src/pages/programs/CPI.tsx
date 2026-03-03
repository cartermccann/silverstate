import { generateMeta } from '../../utils/meta'
import { generateWebPage } from '../../utils/schema'

export const meta = generateMeta({
  title: 'Crisis Prevention & Intervention (CPI) Training',
  description:
    'Silver State staff are CPI-trained in nonviolent crisis intervention for adolescents. Learn how our evidence-based de-escalation approach keeps teens safe.',
  path: '/programs/crisis-prevention-intervention',
  keywords: [
    'crisis prevention intervention',
    'CPI training teens',
    'nonviolent crisis intervention',
    'de-escalation adolescent treatment',
    'CPI mental health Las Vegas',
  ],
  jsonLd: [
    generateWebPage({
      title: 'Crisis Prevention & Intervention (CPI) Training',
      description:
        'Silver State staff are CPI-trained in nonviolent crisis intervention for adolescents.',
      url: 'https://www.silverstatetreatment.com/programs/crisis-prevention-intervention',
    }),
  ],
})

export default function CPI() {
  return (
    <section>
      <h1>Crisis Prevention &amp; Intervention</h1>
      <p>Content coming soon.</p>
    </section>
  )
}
