// Shared R2 / local image URL resolution.
// When VITE_R2_BASE_URL is set (production), images load from Cloudflare R2 CDN.
// Otherwise, images fall back to local /assets/ directory for development.

const r2Base =
  (import.meta as ImportMeta & { env?: Record<string, string | undefined> }).env
    ?.VITE_R2_BASE_URL ||
  (
    globalThis as {
      process?: { env?: Record<string, string | undefined> }
    }
  ).process?.env?.VITE_R2_BASE_URL ||
  ''

/**
 * Resolve a facility gallery image path.
 * Production: https://images.silverstatetreatment.com/silverstate/facilities/filename.jpg
 * Development: /assets/facility-gallery/filename.jpg
 */
export const facilityImg = (file: string): string =>
  r2Base
    ? `${r2Base}/silverstate/facilities/${file}`
    : `/assets/facility-gallery/${file}`
