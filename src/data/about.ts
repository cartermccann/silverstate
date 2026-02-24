import type { LeadershipEntry, YouthAcademyFeature } from '../types'

export const team = {
  clinical: 'Cameron Diaz, PhD — Chief Clinical Director',
  members: [
    'Psychiatrist',
    'Individual Therapist',
    'Family Therapist',
    'Care Coordinators',
    'Registered Nurses',
    'Registered Dietitians',
    'Recovery Counselors',
    'Adventure Therapists',
    'Music & Art Therapists',
    'Fitness Experts',
    'Yoga & Meditation Instructors',
    'Academic Teachers & Tutors',
  ],
}

export const leadership: LeadershipEntry[] = [
  {
    name: 'Dr. Russ Park',
    title: 'Executive Director',
    bio: 'Advanced Nurse Executive with psychiatric mental health focus. Former CEO of Sana Behavioral Health and Seven Hills Hospital. Doctorate from University of Nevada, Reno.',
  },
  {
    name: 'Arianne Smith',
    title: 'Clinical Director',
    bio: 'Licensed marriage and family therapist. M.S. from UNLV. Specializes in Solution-Focused Brief Therapy and Narrative Therapy approaches.',
  },
  {
    name: 'Karel Saquing',
    title: 'School Director',
    bio: 'U.S. Army veteran. B.A. in Pre-Law Philosophy from UNLV. Certified personal trainer and boxing coach.',
  },
  {
    name: 'Alexa Adair',
    title: 'Director of Performance Improvement',
    bio: "Psychology degree holder pursuing Master's in Public Health Administration. Background in residential and outpatient mental health care.",
  },
  {
    name: 'Marlon Duran',
    title: 'Executive Chef',
    bio: 'Los Angeles native with fine dining and recovery center experience. Believes food is a critical part of the healing process.',
  },
]

export const facility = {
  amenities: [
    'Private apartment-style bedrooms',
    'Common areas with recreation',
    'Pickleball and basketball courts',
    'Classroom spaces for academics',
    'Dedicated therapy offices',
    'Cafeteria and dining areas',
    'Outdoor recreation facilities',
  ],
}

export const youthAcademy = {
  label: 'Silver State Youth Academy',
  headline: "Treatment shouldn't mean falling behind in school",
  body: 'Our on-site, fully accredited academic program means your teen continues their education alongside treatment — not instead of it. Certified teachers deliver personalized instruction in small class sizes, with all credits transferring back to their home school.',
  features: [
    {
      title: 'Accredited Curriculum',
      desc: 'Standards-based instruction aligned with public school expectations',
    },
    {
      title: 'Small Class Sizes',
      desc: 'Personalized attention from certified, trauma-informed teachers',
    },
    { title: 'Credit Transfer', desc: 'Full transcript coordination so no academic year is lost' },
    {
      title: 'Skill Building',
      desc: 'Time management, organization, emotional regulation, and accountability',
    },
  ] as YouthAcademyFeature[],
  director: {
    name: 'Karel Saquing',
    title: 'School Director',
    bio: 'U.S. Army veteran with a B.A. in Pre-Law Philosophy from UNLV. Certified personal trainer and boxing coach who brings structure, discipline, and heart to the classroom.',
  },
}
