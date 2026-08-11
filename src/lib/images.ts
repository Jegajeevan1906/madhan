/**
 * Utility function to build a 4K responsive srcSet for background images
 */
export function buildSrcSet(src: string): string | undefined {
  if (!src) return undefined
  if (src.includes("unsplash.com")) {
    try {
      const urlBase = src.split("?")[0]
      const params = new URLSearchParams(src.split("?")[1] ?? "")
      params.delete("w")
      params.delete("q")
      const paramsStr = params.toString()
      const buildUrl = (w: number, q: number) =>
        `${urlBase}?${paramsStr ? paramsStr + "&" : ""}w=${w}&q=${q}`
      return [
        `${buildUrl(640,  85)} 640w`,
        `${buildUrl(1280, 88)} 1280w`,
        `${buildUrl(1920, 92)} 1920w`,
        `${buildUrl(3840, 95)} 3840w`,
      ].join(", ")
    } catch {
      return undefined
    }
  }
  return undefined
}

// ── Logo ──────────────────────────────────────────────────────────────────────
export const LOGO = "/assets/logo-transparent.png"

// ── Hero (Home) — 4K Ultra HD ─────────────────────────────────────────────────
export const HERO_DAY   = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=3840&q=95"
export const HERO_NIGHT = "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=3840&q=95"

// ── About — 4K Ultra HD ───────────────────────────────────────────────────────
export const ABOUT_DAY   = "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=3840&q=95"
export const ABOUT_NIGHT = "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=3840&q=95"

// ── Services — 4K Ultra HD ─────────────────────────────────────────────────
export const SERVICES_DAY   = "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=3840&q=95"
export const SERVICES_NIGHT = "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=3840&q=95"

// ── Blog — 4K Ultra HD ───────────────────────────────────────────────────────
export const BLOG_DAY   = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=3840&q=95"
export const BLOG_NIGHT = "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=3840&q=95"

// ── Contact — 4K Ultra HD ─────────────────────────────────────────────────────
export const CONTACT_DAY   = "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=3840&q=95"
export const CONTACT_NIGHT = "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=3840&q=95"

// ── Projects ──────────────────────────────────────────────────────────────────
export const PROJECT_1 = "/assets/project-1.jpg"
export const PROJECT_2 = "/assets/project-2.jpg"
export const PROJECT_3 = "/assets/project-3.jpg"

// ── Infrastructure & Civil Gallery ────────────────────────────────────────────
export const INFRA_1 = "/assets/infrastructure/infra-1.jpg"
export const INFRA_2 = "/assets/infrastructure/infra-2.jpg"
export const INFRA_3 = "/assets/infrastructure/infra-3.jpg"
export const INFRA_4 = "/assets/infrastructure/infra-4.jpg"
export const INFRA_5 = "/assets/infrastructure/infra-5.jpg"

// ── EPC & Turnkey Contracts Gallery ───────────────────────────────────────────
export const TURNKEY_1 = "/assets/turnkey/turnkey-1.jpg"
export const TURNKEY_2 = "/assets/turnkey/turnkey-2.jpg"
export const TURNKEY_3 = "/assets/turnkey/turnkey-3.jpg"
export const TURNKEY_4 = "/assets/turnkey/turnkey-4.jpg"
export const TURNKEY_5 = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=90"

// ── Industrial & Commercial Gallery ───────────────────────────────────────────
export const INDUSTRIAL_1 = "/assets/industrial/industrial-1.jpg"
export const INDUSTRIAL_2 = "/assets/industrial/industrial-2.jpg"
export const INDUSTRIAL_3 = "/assets/industrial/industrial-3.jpg"
export const INDUSTRIAL_4 = "/assets/industrial/industrial-4.jpg"
export const INDUSTRIAL_5 = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1920&q=90"

// ── Hydraulic & Sanitation Gallery ───────────────────────────────────────────
export const SANITARY_1 = "/assets/sanitary/sanitary-1.jpg"
export const SANITARY_2 = "/assets/sanitary/sanitary-2.jpg"
export const SANITARY_3 = "/assets/sanitary/sanitary-3.jpg"
export const SANITARY_4 = "/assets/sanitary/sanitary-4.jpg"
export const SANITARY_5 = "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?auto=format&fit=crop&w=1920&q=90"

// ── Project Management & Consulting Gallery ───────────────────────────────────
export const CONSULTING_1 = "/assets/consulting/consulting-1.jpg"
export const CONSULTING_2 = "/assets/consulting/consulting-2.jpg"
export const CONSULTING_3 = "/assets/consulting/consulting-3.jpg"
export const CONSULTING_4 = "/assets/consulting/consulting-4.jpg"
export const CONSULTING_5 = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=90"

// ── Miscellaneous ─────────────────────────────────────────────────────────────
export const INTERIOR   = "/assets/interior.jpg"
export const HERO_EXTRA = "/assets/hero.jpg"
export const FOUNDER    = "/assets/anita-kumari.jpeg"
export const ANITA_KUMARI = "/assets/anita-kumari.jpeg"



