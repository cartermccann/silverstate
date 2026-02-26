import {
  teamMembers,
  teamMembersBySlug,
  keyDifferentiators,
  facilityData,
  youthAcademyData,
  youthAcademyPageData,
  clinicalReviewer,
} from './about'

describe('about data (Story 6.1)', () => {
  it('keeps team members typed and uniquely slugged', () => {
    expect(teamMembers.length).toBeGreaterThanOrEqual(3)

    const slugs = teamMembers.map((member) => member.slug)
    expect(new Set(slugs).size).toBe(slugs.length)

    for (const member of teamMembers) {
      expect(member.name.trim().length).toBeGreaterThan(0)
      expect(member.title.trim().length).toBeGreaterThan(0)
      expect(member.credentials.trim().length).toBeGreaterThan(0)
      expect(member.professionalBackground.trim().length).toBeGreaterThan(0)
      expect(member.photoUrl).toMatch(/\/team\//)
      expect(teamMembersBySlug[member.slug]?.name).toBe(member.name)
    }
  })

  it('exports all five key differentiators required for the team page', () => {
    expect(keyDifferentiators).toHaveLength(5)

    const titles = keyDifferentiators.map((item) => item.title)
    expect(titles).toEqual(
      expect.arrayContaining([
        '4.8/5 Rating',
        '4:1 Staff-to-Client Ratio',
        'LGBTQIA+ Affirming',
        'On-Site Accredited Academics',
        'Full Continuum of Care',
      ]),
    )
  })

  it('keeps facility and youth academy page data populated for About pages', () => {
    expect(facilityData.slug).toBe('facility')
    expect(facilityData.images.length).toBeGreaterThan(0)
    expect(facilityData.features.length).toBeGreaterThan(0)
    expect(facilityData.metaTitle.trim().length).toBeGreaterThan(0)
    expect(facilityData.metaDescription.trim().length).toBeGreaterThan(0)

    expect(youthAcademyData.slug).toBe('youth-academy')
    expect(youthAcademyData.images.length).toBeGreaterThan(0)
    expect(youthAcademyData.features.length).toBeGreaterThan(0)
    expect(youthAcademyData.metaTitle.trim().length).toBeGreaterThan(0)
    expect(youthAcademyData.metaDescription.trim().length).toBeGreaterThan(0)
    expect(youthAcademyPageData).toBe(youthAcademyData)
  })

  it('keeps clinical reviewer attribution aligned to a listed team member', () => {
    expect(clinicalReviewer.name.trim().length).toBeGreaterThan(0)
    expect(clinicalReviewer.credentials.trim().length).toBeGreaterThan(0)
    expect(clinicalReviewer.title.trim().length).toBeGreaterThan(0)

    const reviewer = teamMembers.find((member) => member.name === clinicalReviewer.name)
    expect(reviewer).toBeDefined()
  })
})
