import type { LightboxImage } from '../types'

// Supports both browser runtime (import.meta.env) and Node build scripts (globalThis.process.env).
const baseUrl =
  (import.meta as ImportMeta & { env?: Record<string, string | undefined> }).env
    ?.VITE_R2_BASE_URL ||
  (
    globalThis as {
      process?: { env?: Record<string, string | undefined> }
    }
  ).process?.env?.VITE_R2_BASE_URL ||
  '/assets'

const img = (file: string, alt: string, caption: string): LightboxImage => ({
  src: `${baseUrl}/facility-gallery/${file}`,
  alt,
  caption,
})

export interface GalleryCategory {
  name: string
  slug: string
  images: LightboxImage[]
}

export const galleryCategories: GalleryCategory[] = [
  {
    name: 'Exterior',
    slug: 'exterior',
    images: [
      img('exterior-sign-close.jpg', 'Silver State Adolescent Treatment Center monument sign', 'Our facility at 8225 W Warm Springs Rd, Las Vegas'),
      img('exterior-sign-building.jpg', 'Silver State sign with building facade', 'Silver State Treatment Center building and entrance'),
      img('exterior-entrance-front.jpg', 'Silver State front entrance with covered portico', 'Welcoming entrance to our treatment facility'),
      img('exterior-building-wide.jpg', 'Silver State building wide view with desert landscaping', 'Our Las Vegas treatment center campus'),
      img('exterior-entrance-parking.jpg', 'Silver State entrance with ADA parking', 'Accessible parking and entrance'),
      img('exterior-building-parking.jpg', 'Silver State building and parking lot', 'Facility exterior and parking area'),
      img('exterior-building-angle.jpg', 'Silver State building angled view with stone facade', 'Stone and stucco architecture'),
      img('exterior-street-sign.jpg', 'Silver State street-level monument sign with desert landscaping', 'Street view of our Las Vegas facility'),
      img('exterior-building-corner.jpg', 'Silver State building corner with address 8225', 'Our building at 8225 W Warm Springs Rd'),
      img('exterior-building-address.jpg', 'Silver State facility showing 8225 address', '8225 W Warm Springs Rd, Las Vegas, NV'),
      img('exterior-door-logo.jpg', 'Silver State front door with lotus logo', 'Our welcoming entrance doors'),
      img('exterior-entrance-doors.jpg', 'Silver State main entrance double doors', 'Main entrance to Silver State Treatment Center'),
    ],
  },
  {
    name: 'Lobby & Reception',
    slug: 'lobby-reception',
    images: [
      img('lobby-reception-desk.jpg', 'Silver State reception desk with logo sign and stone pillars', 'Reception and check-in area'),
      img('lobby-reception-wide.jpg', 'Silver State reception area wide angle', 'Spacious lobby with natural lighting'),
      img('lobby-reception-front.jpg', 'Silver State lobby front view with reception desk', 'Front desk and welcoming lobby'),
      img('lobby-logo-closeup.jpg', 'Silver State lotus logo and framed credentials', 'Licensed and accredited facility'),
      img('lobby-waiting-area.jpg', 'Silver State lobby waiting area with leather chairs', 'Comfortable waiting area for families'),
      img('lobby-waiting-credentials.jpg', 'Silver State lobby with wall-mounted TV and licenses', 'Lobby with credentials on display'),
      img('lobby-admin-desk.jpg', 'Silver State admin desk with glass entrance doors', 'Administrative area'),
      img('lobby-entry-seating.jpg', 'Silver State lobby entry with glass logo sign and seating', 'Lobby entry with natural light'),
      img('lobby-tv-entrance.jpg', 'Silver State lobby seating area with TV and certificates', 'Lobby seating and information area'),
      img('lobby-entrance-admin.jpg', 'Silver State lobby from entrance with reception desk', 'View from the main entrance'),
      img('lobby-rear-view.jpg', 'Silver State lobby from behind reception counter', 'Reception area rear view'),
      img('lobby-common-corridor.jpg', 'Silver State lobby transition to treatment wing', 'Lobby leading to treatment wing'),
      img('lobby-wide-symmetrical.jpg', 'Silver State lobby wide symmetrical view', 'Our spacious, welcoming lobby'),
      img('hallway-main-corridor.jpg', 'Silver State main corridor with handrails', 'Main corridor to treatment areas'),
    ],
  },
  {
    name: 'Bedrooms',
    slug: 'bedrooms',
    images: [
      img('bedroom-twin-doorway.jpg', 'Silver State shared bedroom with two beds and storage', 'Comfortable shared bedrooms'),
      img('bedroom-twin-beds.jpg', 'Silver State bedroom with twin beds and welcome amenities', 'Twin beds with welcome amenities'),
      img('bedroom-twin-window.jpg', 'Silver State bedroom with natural light and storage', 'Bright bedrooms with natural light'),
      img('bedroom-twin-entry.jpg', 'Silver State bedroom from doorway with welcome kits', 'Each room includes welcome amenities'),
      img('bedroom-twin-wide.jpg', 'Silver State bedroom wide angle with welcome amenities', 'Spacious bedrooms for residents'),
      img('bedroom-twin-storage.jpg', 'Silver State bedroom with cubby storage and bathroom', 'Personal storage and private bathroom'),
    ],
  },
  {
    name: 'Classrooms',
    slug: 'classrooms',
    images: [
      img('classroom-desks-mural.jpg', 'Silver State Youth Academy classroom with inspirational mural', 'Silver State Youth Academy classroom'),
      img('classroom-mural-tv.jpg', 'Silver State classroom with mural and TV', 'Engaging learning environment'),
      img('classroom-teacher-desk.jpg', 'Silver State classroom teacher station with civics poster', 'Certified teachers lead small classes'),
      img('classroom-whiteboard-mural.jpg', 'Silver State classroom with whiteboard and student desks', 'Accredited on-site academics'),
      img('classroom-teacher-station.jpg', 'Silver State classroom teacher station with desk and printer', 'Fully equipped classroom'),
    ],
  },
  {
    name: 'Therapy Rooms',
    slug: 'therapy-rooms',
    images: [
      img('therapy-room-cozy.jpg', 'Silver State therapy room with comfortable seating', 'Warm, inviting therapy spaces'),
      img('therapy-room-seating.jpg', 'Silver State therapy room with sofa and accent pillows', 'Individual therapy room'),
      img('therapy-room-dresser.jpg', 'Silver State therapy room with plants and wall art', 'Calming therapeutic environment'),
      img('therapy-room-counselor.jpg', 'Silver State counselor office with accent chairs', 'Counselor office for individual sessions'),
    ],
  },
  {
    name: 'Medical Office',
    slug: 'medical-office',
    images: [
      img('medical-office-equipment.jpg', 'Silver State medical office with vitals monitor and scale', 'On-site medical care'),
      img('medical-office-wide.jpg', 'Silver State medical office with dual desks', 'Medical office for health monitoring'),
      img('medical-office-desk.jpg', 'Silver State medical office desk and computer', 'Medical staff workspace'),
      img('medical-office-patient-view.jpg', 'Silver State medical office from patient perspective', 'Comfortable medical examination area'),
      img('medical-office-full.jpg', 'Silver State medical office full room view', 'Fully equipped medical office'),
    ],
  },
  {
    name: 'Nursing Station',
    slug: 'nursing-station',
    images: [
      img('nursing-station-hallway.jpg', 'Silver State nursing station in hallway with monitors', '24/7 nursing station'),
      img('nursing-station-wide.jpg', 'Silver State nursing station with AED and medical supplies', 'Round-the-clock clinical monitoring'),
    ],
  },
  {
    name: 'Recreation & Game Room',
    slug: 'recreation-game-room',
    images: [
      img('game-room-yoga-mats.jpg', 'Silver State recreation room with yoga mats and pool table', 'Recreation and wellness space'),
      img('game-room-yoga-wide.jpg', 'Silver State recreation room with yoga and gaming', 'Combined recreation and mindfulness area'),
      img('game-room-pool-table.jpg', 'Silver State game room with pool table and activities', 'Game room with pool table'),
      img('game-room-pool-closeup.jpg', 'Silver State pool table with Game On neon sign', 'Recreation activities for teens'),
      img('game-room-gaming-lounge.jpg', 'Silver State gaming lounge with TV and board games', 'Gaming and social lounge'),
      img('game-room-yoga-exit.jpg', 'Silver State recreation room yoga area', 'Yoga and mindfulness space'),
      img('game-room-pool-wide.jpg', 'Silver State game room wide view', 'Spacious recreation area'),
      img('game-room-tv-console.jpg', 'Silver State game room TV and console area', 'Entertainment and relaxation zone'),
      img('game-room-yoga-doorway.jpg', 'Silver State yoga mat area near window', 'Sunlit yoga and meditation area'),
      img('game-room-full-length.jpg', 'Silver State recreation room full length view', 'Full recreation room'),
    ],
  },
  {
    name: 'Courtyard & Outdoor',
    slug: 'courtyard-outdoor',
    images: [
      img('courtyard-basketball-wide.jpg', 'Silver State outdoor courtyard with basketball court', 'Outdoor basketball court and recreation'),
      img('courtyard-basketball-trees.jpg', 'Silver State courtyard with trees and benches', 'Shaded courtyard with seating'),
      img('courtyard-basketball-angle.jpg', 'Silver State courtyard basketball court angle view', 'Courtyard recreation area'),
      img('courtyard-basketball-covered.jpg', 'Silver State courtyard from covered patio', 'Covered patio overlooking courtyard'),
      img('courtyard-basketball-hoop.jpg', 'Silver State basketball hoop and court', 'Basketball court for physical activity'),
      img('courtyard-basketball-hoop-close.jpg', 'Silver State basketball hoop closeup', 'Basketball activities for teens'),
      img('courtyard-patio-seating.jpg', 'Silver State covered patio with wrought iron seating', 'Outdoor patio seating area'),
      img('courtyard-patio-benches.jpg', 'Silver State patio with benches and desert landscaping', 'Shaded outdoor relaxation area'),
      img('courtyard-patio-tables.jpg', 'Silver State patio seating with courtyard view', 'Outdoor dining and gathering space'),
    ],
  },
  {
    name: 'Hallways',
    slug: 'hallways',
    images: [
      img('hallway-nursing-wing.jpg', 'Silver State hallway with nursing station and room doors', 'Residential wing hallway'),
      img('hallway-rooms-long.jpg', 'Silver State residential hallway with exit signs and art', 'Safe, well-lit residential corridor'),
      img('hallway-rooms-numbered.jpg', 'Silver State hallway with numbered room doors', 'Residential hallway with room access'),
      img('hallway-central-hub.jpg', 'Silver State central hallway hub with bulletin board', 'Central hub connecting treatment areas'),
    ],
  },
  {
    name: 'Common Area',
    slug: 'common-area',
    images: [
      img('common-area-lounge.jpg', 'Silver State common area with leather sofas and wall art', 'Common lounge for socializing'),
    ],
  },
]

/** Flat array of every gallery image across all categories */
export const allGalleryImages: LightboxImage[] = galleryCategories.flatMap((c) => c.images)

/** Curated ~10 best representative photos for use on other pages */
export const galleryBestPicks: LightboxImage[] = [
  img('exterior-entrance-front.jpg', 'Silver State front entrance with covered portico', 'Welcoming entrance to our treatment facility'),
  img('lobby-reception-desk.jpg', 'Silver State reception desk with logo sign and stone pillars', 'Reception and check-in area'),
  img('bedroom-twin-window.jpg', 'Silver State bedroom with natural light and storage', 'Bright bedrooms with natural light'),
  img('therapy-room-cozy.jpg', 'Silver State therapy room with comfortable seating', 'Warm, inviting therapy spaces'),
  img('classroom-mural-tv.jpg', 'Silver State classroom with mural and TV', 'Engaging learning environment'),
  img('game-room-gaming-lounge.jpg', 'Silver State gaming lounge with TV and board games', 'Gaming and social lounge'),
  img('courtyard-patio-seating.jpg', 'Silver State covered patio with wrought iron seating', 'Outdoor patio seating area'),
  img('medical-office-wide.jpg', 'Silver State medical office with dual desks', 'Medical office for health monitoring'),
  img('nursing-station-wide.jpg', 'Silver State nursing station with AED and medical supplies', 'Round-the-clock clinical monitoring'),
  img('common-area-lounge.jpg', 'Silver State common area with leather sofas and wall art', 'Common lounge for socializing'),
]
