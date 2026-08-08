import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react"
import { cn } from "../lib/utils"
import { useTheme } from "./ThemeContext"

export function PromotionVideo() {
  const { theme } = useTheme()
  const isNight = theme === "dark"

  const videoRef     = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const labelRef     = useRef<HTMLDivElement>(null)
  
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [showControls, setShowControls] = useState(true)

  // Intersection Observer: pause video when scrolled out of view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause()
            setIsPlaying(false)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Intersection Observer: fade-up the company identity label
  useEffect(() => {
    const el = labelRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.opacity = "1"
            el.style.transform = "translateY(0)"
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100
      setProgress(currentProgress)
    }
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    if (videoRef.current) {
      const bounds = e.currentTarget.getBoundingClientRect()
      const percent = (e.clientX - bounds.left) / bounds.width
      videoRef.current.currentTime = percent * videoRef.current.duration
    }
  }

  const toggleMute = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const toggleFullscreen = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    if (containerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        containerRef.current.requestFullscreen()
      }
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case " ":
      case "k":
        e.preventDefault()
        togglePlay()
        break
      case "m":
        toggleMute()
        break
      case "f":
        toggleFullscreen()
        break
    }
  }

  return (
    <section className="px-5 py-20 sm:px-8 md:py-28" ref={containerRef}>
      <div className="mx-auto max-w-7xl animate-[reveal-up_1s_cubic-bezier(0.16,1,0.3,1)_forwards]">

        {/* Section Header */}
        <div className="mb-14 text-center">
          <p className="eyebrow">Our Story in Motion</p>
          <h2 className="mt-4 text-3xl font-bold leading-[1.08] sm:text-4xl md:text-5xl">
            Witness Excellence<br className="hidden sm:block" /> in Every Frame
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            From groundbreaking to grand unveiling — experience the precision,
            passion, and craftsmanship that define every SEENI INFRA project.
          </p>
        </div>

        {/*
          ─── COMPANY IDENTITY LABEL ───
          Positioned between the section header and the video.
          Fades up via IntersectionObserver (labelRef).
          Starts hidden (opacity:0, translateY:20px) and
          transitions to visible when entering the viewport.
        */}
        <div
          ref={labelRef}
          style={{
            marginTop: '40px',
            marginBottom: '24px',
            textAlign: 'center',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'opacity 700ms cubic-bezier(0.16,1,0.3,1), transform 700ms cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          {/* Primary Heading: SEENI INFRA PVT LTD */}
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              /* Fluid: 22px mobile → 28px tablet → 32px desktop */
              fontSize: 'clamp(22px, 4vw, 32px)',
              lineHeight: 1.15,
              letterSpacing: '-0.01em',
              color: isNight ? '#FFFFFF' : '#111111',
              textShadow: isNight
                ? '0 3px 15px rgba(0,0,0,0.45)'
                : '0 2px 8px rgba(255,255,255,0.25)',
              WebkitFontSmoothing: 'antialiased',
              transition: 'color 600ms ease, text-shadow 600ms ease',
            }}
          >
            SEENI INFRA PVT LTD
          </h3>

          {/* Subtitle divider row: ─── A Unit of SEENI GROUP ─── */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              marginTop: '10px',
            }}
          >
            {/* Left line */}
            <span
              style={{
                flex: '1',
                maxWidth: '80px',
                height: '1px',
                background: isNight
                  ? 'linear-gradient(to right, transparent, rgba(212,175,55,0.55))'
                  : 'linear-gradient(to right, transparent, rgba(200,155,43,0.45))',
                transition: 'background 600ms ease',
              }}
            />

            {/* Subtitle text */}
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                fontSize: '16px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                /* Light: #C89B2B  /  Dark: #D4AF37 */
                color: isNight ? '#D4AF37' : '#C89B2B',
                transition: 'color 600ms ease',
                WebkitFontSmoothing: 'antialiased',
                margin: 0,
              }}
            >
              Building India's Future
            </p>

            {/* Right line */}
            <span
              style={{
                flex: '1',
                maxWidth: '80px',
                height: '1px',
                background: isNight
                  ? 'linear-gradient(to left, transparent, rgba(212,175,55,0.55))'
                  : 'linear-gradient(to left, transparent, rgba(200,155,43,0.45))',
                transition: 'background 600ms ease',
              }}
            />
          </div>
        </div>

        {/*
          ─── VIDEO CONTAINER ───
          • 16:9 via aspect-video
          • overflow:hidden clips all child layers
          • position:relative is the coordinate system for every absolute child
        */}
        <div
          ref={containerRef}
          className={cn(
            "group relative mx-auto w-full md:w-[90%] xl:w-full xl:max-w-[1000px] 2xl:max-w-[1100px]",
            "aspect-video overflow-hidden rounded-3xl",
            "border border-gold/40 bg-black shadow-luxe glass",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          )}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => isPlaying && setShowControls(false)}
          onClick={() => setShowControls(true)}
        >
          {/* ── VIDEO ELEMENT ── */}
          <video
            ref={videoRef}
            src="/assets/Promotion video.mp4"
            className="absolute inset-0 h-full w-full object-cover"
            preload="metadata"
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => setIsPlaying(false)}
            onClick={togglePlay}
          />

          {/*
            ── CONTROLS OVERLAY ──
            Split into two independent zones so the center button
            and the bottom bar can NEVER overlap each other.
          */}
          <div
            className={cn(
              "absolute inset-0 transition-opacity duration-500",
              showControls || !isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
          >
            {/*
              Zone 1 — CENTER PLAY BUTTON
              Sits in the exact visual center of the video frame,
              completely independent of the bottom control bar.
            */}
            {!isPlaying && (
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ paddingBottom: '88px' /* pushes center above control bar height */ }}
              >
                <button
                  onClick={togglePlay}
                  aria-label="Play video"
                  style={{
                    width: 'clamp(60px, 8vw, 80px)',
                    height: 'clamp(60px, 8vw, 80px)',
                    minWidth: '44px',
                    minHeight: '44px',
                  }}
                  className={cn(
                    "flex items-center justify-center rounded-full",
                    "bg-gold text-primary-foreground",
                    "shadow-[0_8px_32px_rgba(0,0,0,0.45)]",
                    "transition-transform duration-300 ease-out hover:scale-[1.08]",
                    "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/50"
                  )}
                >
                  <Play
                    style={{
                      width: 'clamp(22px, 3vw, 32px)',
                      height: 'clamp(22px, 3vw, 32px)',
                      marginLeft: '3px', /* optical centering for play triangle */
                    }}
                    fill="currentColor"
                  />
                </button>
              </div>
            )}

            {/*
              Zone 2 — BOTTOM CONTROL BAR
              Gradient rises from the bottom to create contrast
              behind ONLY the controls, never reaching the center.

              Structure (top → bottom):
                [gradient fade from transparent]
                [progress bar row]  ← mb-4 below bar
                [controls row]      ← px-4 py-3
            */}
            <div
              className="absolute inset-x-0 bottom-0 flex flex-col"
              style={{
                background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 40%, transparent 100%)',
                paddingLeft: '16px',
                paddingRight: '16px',
                paddingTop: '48px',   /* tall enough gradient fade */
                paddingBottom: '12px',
              }}
            >
              {/* Progress Bar Row */}
              <div
                className="relative mb-4 h-[5px] w-full cursor-pointer overflow-hidden rounded-full bg-white/25 group/progress"
                onClick={handleProgressClick}
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
                tabIndex={0}
                aria-label="Video progress"
                style={{ touchAction: 'none' }}
              >
                {/* Filled portion */}
                <div
                  className="absolute inset-y-0 left-0 rounded-full bg-gold transition-all duration-100 ease-linear group-hover/progress:bg-yellow-400"
                  style={{ width: `${progress}%` }}
                />
                {/* Hover expand effect — bar grows on hover for easy scrubbing */}
                <div className="absolute inset-0 scale-y-0 group-hover/progress:scale-y-[2.2] origin-bottom transition-transform duration-150 rounded-full" />
              </div>

              {/* Controls Row */}
              <div className="flex items-center justify-between gap-3 text-white">

                {/* Left cluster — Play + Mute */}
                <div className="flex items-center gap-4">
                  {/* Play / Pause */}
                  <button
                    onClick={togglePlay}
                    aria-label={isPlaying ? "Pause" : "Play"}
                    className={cn(
                      "flex items-center justify-center rounded-full",
                      "transition-colors duration-200 hover:text-gold",
                      "focus-visible:outline-none focus-visible:text-gold"
                    )}
                    style={{ minWidth: '44px', minHeight: '44px' }}
                  >
                    {isPlaying ? (
                      <Pause className="h-6 w-6 sm:h-7 sm:w-7" fill="currentColor" />
                    ) : (
                      <Play className="h-6 w-6 sm:h-7 sm:w-7" fill="currentColor" />
                    )}
                  </button>

                  {/* Mute / Unmute */}
                  <button
                    onClick={toggleMute}
                    aria-label={isMuted ? "Unmute" : "Mute"}
                    className={cn(
                      "flex items-center justify-center rounded-full",
                      "transition-colors duration-200 hover:text-gold",
                      "focus-visible:outline-none focus-visible:text-gold"
                    )}
                    style={{ minWidth: '44px', minHeight: '44px' }}
                  >
                    {isMuted
                      ? <VolumeX className="h-6 w-6 sm:h-7 sm:w-7" />
                      : <Volume2 className="h-6 w-6 sm:h-7 sm:w-7" />
                    }
                  </button>
                </div>

                {/* Right — Fullscreen */}
                <button
                  onClick={toggleFullscreen}
                  aria-label="Fullscreen"
                  className={cn(
                    "flex items-center justify-center rounded-full",
                    "transition-colors duration-200 hover:text-gold",
                    "focus-visible:outline-none focus-visible:text-gold"
                  )}
                  style={{ minWidth: '44px', minHeight: '44px' }}
                >
                  <Maximize className="h-6 w-6 sm:h-7 sm:w-7" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
