import {
  conditions,
  conditionPages,
  getConditionBySlug,
  mentalHealthConditions,
  substanceAbuseConditions,
  eatingDisorderConditions,
} from './conditions'

describe('conditions data (Story 4.1)', () => {
  it('exports 25 conditions and keeps conditionPages as a legacy alias', () => {
    expect(conditions).toHaveLength(25)
    expect(conditionPages).toBe(conditions)
  })

  it('has unique condition slugs', () => {
    const slugs = conditions.map((condition) => condition.slug)
    const uniqueSlugs = new Set(slugs)
    expect(uniqueSlugs.size).toBe(slugs.length)
  })

  it('keeps required content arrays populated', () => {
    for (const condition of conditions) {
      expect(condition.description.trim().length).toBeGreaterThan(0)
      expect(condition.approach.trim().length).toBeGreaterThan(0)
      expect(condition.symptoms.length).toBeGreaterThanOrEqual(5)
      expect(condition.therapies.length).toBeGreaterThanOrEqual(3)
      expect(condition.faqs.length).toBeGreaterThanOrEqual(3)
      expect(condition.sources.length).toBeGreaterThanOrEqual(2)
    }
  })

  it('keeps SEO fields within required constraints', () => {
    for (const condition of conditions) {
      expect(condition.metaTitle.length).toBeLessThanOrEqual(60)
      expect(condition.metaDescription.length).toBeGreaterThanOrEqual(150)
      expect(condition.metaDescription.length).toBeLessThanOrEqual(160)
    }
  })

  it('ensures relatedPrograms only references valid program slugs', () => {
    const validProgramSlugs = new Set(['residential-treatment', 'php', 'iop'])

    for (const condition of conditions) {
      for (const relatedProgram of condition.relatedPrograms) {
        expect(validProgramSlugs.has(relatedProgram)).toBe(true)
      }
    }
  })

  it('ensures relatedConditions resolves to real condition slugs', () => {
    const slugs = new Set(conditions.map((condition) => condition.slug))

    for (const condition of conditions) {
      for (const relatedCondition of condition.relatedConditions) {
        expect(slugs.has(relatedCondition)).toBe(true)
      }
    }
  })

  it('supports category filters and slug lookups', () => {
    expect(mentalHealthConditions.length).toBeGreaterThan(0)
    expect(substanceAbuseConditions.length).toBeGreaterThan(0)
    expect(eatingDisorderConditions.length).toBeGreaterThan(0)
    expect(getConditionBySlug('anxiety-treatment')?.name).toBe('Anxiety Treatment')
    expect(getConditionBySlug('does-not-exist')).toBeUndefined()
  })

  it('keeps dual diagnosis focused on co-occurring treatment', () => {
    const dualDiagnosis = getConditionBySlug('dual-diagnosis-treatment')
    expect(dualDiagnosis).toBeDefined()

    const copy = [
      dualDiagnosis!.description,
      dualDiagnosis!.approach,
      ...dualDiagnosis!.faqs.map((faq) => `${faq.q} ${faq.a}`),
    ]
      .join(' ')
      .toLowerCase()

    expect(copy).toMatch(/co-occurring|dual diagnosis|simultaneous|both/)
  })

  it('mentions withdrawal or detox considerations in alcohol, opioid, and benzodiazepine content', () => {
    const highRiskWithdrawalSlugs = [
      'alcohol-abuse-treatment',
      'opioid-abuse-treatment',
      'benzodiazepine-abuse-treatment',
    ]

    for (const slug of highRiskWithdrawalSlugs) {
      const condition = getConditionBySlug(slug)
      expect(condition).toBeDefined()

      const copy = [
        condition!.description,
        condition!.approach,
        ...condition!.faqs.map((faq) => faq.a),
      ]
        .join(' ')
        .toLowerCase()

      expect(copy).toMatch(/detox|withdrawal|medically supervised|medical support/)
    }
  })

  it('includes NIDA and/or SAMHSA sources for every substance abuse condition', () => {
    for (const condition of substanceAbuseConditions) {
      const hasAuthorityCitation = condition.sources.some(
        (source) =>
          /(nida|samhsa)/i.test(source.label) ||
          /(nida\\.nih\\.gov|samhsa\\.gov)/i.test(source.url),
      )

      expect(hasAuthorityCitation).toBe(true)
    }
  })

  it('keeps ARFID and OSFED explanations parent-friendly and specific', () => {
    const arfid = getConditionBySlug('arfid-treatment')
    const osfed = getConditionBySlug('osfed-treatment')

    expect(arfid).toBeDefined()
    expect(osfed).toBeDefined()

    const arfidCopy = [arfid!.description, arfid!.approach, ...arfid!.faqs.map((faq) => faq.a)]
      .join(' ')
      .toLowerCase()
    const osfedCopy = [osfed!.description, osfed!.approach, ...osfed!.faqs.map((faq) => faq.a)]
      .join(' ')
      .toLowerCase()

    expect(arfidCopy).toMatch(/beyond picky eating|not because of body image|avoidant\/restrictive/)
    expect(osfedCopy).toMatch(/not a "lesser" diagnosis|other specified feeding or eating disorder/)
  })

  it('includes NEDA and/or NIMH sources for every eating disorder condition', () => {
    for (const condition of eatingDisorderConditions) {
      const hasAuthorityCitation = condition.sources.some(
        (source) =>
          /(neda|nimh)/i.test(source.label) ||
          /(nationaleatingdisorders\\.org|nimh\\.nih\\.gov)/i.test(source.url),
      )

      expect(hasAuthorityCitation).toBe(true)
    }
  })
})
