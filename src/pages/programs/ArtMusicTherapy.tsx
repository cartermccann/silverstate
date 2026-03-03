import TherapyPage from './TherapyPage'
import { therapyBySlug } from '../../data/therapies'
import { generateMeta } from '../../utils/meta'

const therapy = therapyBySlug['art-music-therapy']!

export const meta = generateMeta({
  title: 'Art & Music Therapy for Teens | Silver State',
  description:
    'Adolescent art and music therapy at Silver State in Las Vegas uses creative expression to help teens process emotions and build self-awareness.',
  path: `/programs/${therapy.slug}`,
  keywords: therapy.seoKeywords,
})

export const handle = {
  breadcrumb: { label: 'Art & Music Therapy', parent: '/programs/therapy-programs' },
}

const faqs = [
  {
    q: 'Does my teen need artistic or musical talent to benefit?',
    a: 'No artistic or musical experience is required. Art and music therapy focuses on the therapeutic process of creative expression, not the quality of the final product. Every teen can benefit regardless of their skill level.',
  },
  {
    q: 'What does a typical art or music therapy session look like?',
    a: 'Sessions are led by a licensed creative arts therapist and may include painting, drawing, sculpting, songwriting, drumming, or guided listening exercises. The therapist uses the creative activity to help teens explore emotions, practice self-expression, and develop coping skills in a low-pressure environment.',
  },
  {
    q: 'Is art and music therapy evidence-based?',
    a: 'Yes. Research published in the Journal of the American Art Therapy Association and peer-reviewed music therapy journals demonstrates that creative arts therapies reduce symptoms of depression, anxiety, and trauma in adolescents. These modalities are recognized by the American Psychological Association as effective complementary treatments.',
  },
  {
    q: 'What is the evidence base for art and music therapy with teens?',
    a: 'A systematic review published in the journal Arts in Psychotherapy found that art therapy significantly reduced symptoms of depression, anxiety, and trauma in adolescents across multiple controlled studies. Research by Gold et al. published in the Cochrane Database of Systematic Reviews concluded that music therapy improves emotional well-being and social functioning in young people with mental health needs. The American Music Therapy Association cites over 30 years of clinical research supporting music therapy for adolescent populations.',
  },
  {
    q: 'How many art and music therapy sessions do teens typically need?',
    a: 'According to research reviewed by the British Association of Art Therapists, most adolescents benefit from at least 8 to 12 weekly creative arts therapy sessions to achieve measurable therapeutic outcomes. A study published in the Journal of Music Therapy found that teens showed significant reductions in anxiety and improved self-expression after 10 to 16 sessions. At Silver State, art and music therapy sessions are integrated into the weekly schedule throughout a teen\'s residential stay, allowing for sustained creative engagement and ongoing therapeutic progress.',
  },
]

export default function ArtMusicTherapy() {
  return <TherapyPage therapy={therapy} faqs={faqs} />
}
