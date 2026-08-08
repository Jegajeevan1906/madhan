import { useState, useEffect } from "react"
import { useTheme } from "./ThemeContext"

interface PageHeroProps {
  /** Daytime image path (shown in light theme) */
  dayImage: string
  /** Nighttime image path (shown in dark theme) */
  nightImage: string
  /** Small label above the heading */
  eyebrow: string
  /** Main H1 heading */
  title: string
  /** Supporting paragraph */
  description: string
  /**
   * Min-height of the section.
   * Defaults to "68vh". Pass "50vh" for shorter banners.
   */
  minHeight?: string
  /** Extra content rendered inside the glass panel (e.g. buttons) */
  children?: React.ReactNode
}

/**
 * Builds an Unsplash srcSet only when the URL is an Unsplash CDN URL.
 * Returns undefined for local assets so the browser uses the src directly.
 */
function buildSrcSet(src: string): string | undefined {
  if (!src || !src.includes("unsplash.com")) return undefined
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

export function PageHero({
  dayImage,
  nightImage,
  eyebrow,
  title,
  description,
  minHeight = "68vh",
  children,
}: PageHeroProps) {
  const { theme } = useTheme()
  // Guard against theme context not being ready
  const currentTheme = theme || "light"
  const isNight = currentTheme === "dark"

  const [dayError, setDayError] = useState(false)
  const [nightError, setNightError] = useState(false)

  // Eagerly preload both images on mount to prevent flicker
  useEffect(() => {
    if (typeof window !== "undefined") {
      const img = new Image()
      img.src = dayImage
      const nightImg = new Image()
      nightImg.src = nightImage
    }
  }, [dayImage, nightImage])

  const safeDayImage = dayError ? "" : dayImage
  const safeNightImage = nightError ? "" : nightImage

  const daySrcSet = buildSrcSet(safeDayImage)
  const nightSrcSet = buildSrcSet(safeNightImage)

  return (
    <section
      className="relative isolate flex flex-col overflow-hidden"
      style={{ minHeight }}
    >
      {/* PRELOAD HINTS — React 19 hoists these to the document head automatically */}
      <link rel="preload" as="image" href={safeDayImage} />
      <link rel="preload" as="image" href={safeNightImage} />

      {/* ── Night image layer ── */}
      <img
        src={safeNightImage}
        {...(nightSrcSet ? { srcSet: nightSrcSet, sizes: "100vw" } : {})}
        alt=""
        fetchPriority="high"
        decoding="sync"
        aria-hidden="true"
        onError={() => setNightError(true)}
        style={{
          position: "absolute", inset: 0, zIndex: -20,
          width: "100%", height: "100%", objectFit: "cover",
          objectPosition: "center 40%",
          opacity: isNight ? 1 : 0,
          transition: "opacity 700ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />

      {/* ── Day image layer ── */}
      <img
        src={safeDayImage}
        {...(daySrcSet ? { srcSet: daySrcSet, sizes: "100vw" } : {})}
        alt=""
        fetchPriority="high"
        decoding="sync"
        aria-hidden="true"
        onError={() => setDayError(true)}
        style={{
          position: "absolute", inset: 0, zIndex: -20,
          width: "100%", height: "100%", objectFit: "cover",
          objectPosition: "center 40%",
          opacity: isNight ? 0 : 1,
          transition: "opacity 700ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />

      {/* Unified dark gradient overlay, identical to Home.tsx */}
      <div className="hero-overlay" style={{ zIndex: -10 }} />

      {/* ── Content Container matching Home.tsx structure ── */}
      <div className="relative flex flex-col flex-1 mx-auto w-full max-w-7xl px-5 sm:px-8 pt-28 sm:pt-32 pb-16">
        <div className="flex-1 flex items-center py-6">
          <div className="hero-text-panel">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="hero-heading mt-4">
              {title}
            </h1>
            <p className="hero-body mt-5">
              {description}
            </p>
            {children && (
              <div className="mt-7 sm:mt-9 flex flex-wrap items-center gap-3">
                {children}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
