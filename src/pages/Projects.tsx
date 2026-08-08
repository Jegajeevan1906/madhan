import { useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import { PageHero } from "../components/PageHero"
import { HERO_DAY, HERO_NIGHT } from "../lib/images"

export function Projects() {
  const revealRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    revealRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })
    return () => observer.disconnect()
  }, [])

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  // ─────────────────────────────────────────────────────────────────────────
  // PROJECTS IMAGE REGISTRY — premium 1920×1080 Unsplash images
  // ─────────────────────────────────────────────────────────────────────────
  const cards = [
    {
      eyebrow: "Luxury Residential",
      title: "Coming Soon",
      desc: "A premium residential complex featuring state-of-the-art amenities.",
      bg:   "https://images.unsplash.com/photo-1600607687939-ce8a6c349611?auto=format&fit=crop&w=1920&q=90",
      bgHD: "https://images.unsplash.com/photo-1600607687939-ce8a6c349611?auto=format&fit=crop&w=3840&q=95",
      cta: "Notify Me",
    },
    {
      eyebrow: "Commercial Hub",
      title: "Future Projects",
      desc: "An upcoming corporate park designed for Fortune 500 companies.",
      bg:   "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=90",
      bgHD: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=3840&q=95",
      cta: "Learn More",
    },
    {
      eyebrow: "Industrial Phase I",
      title: "Completed Projects",
      desc: "Details of our recently handed-over warehouse and logistics hub are being compiled.",
      bg:   "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=1920&q=90",
      bgHD: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=3840&q=95",
      cta: "Request Details",
    },
  ]

  return (
    <>
      {/* Projects hero uses local hero-day.webp and hero-night.webp */}
      <PageHero
        dayImage={HERO_DAY}
        nightImage={HERO_NIGHT}
        eyebrow="Portfolio"
        title="Our Projects"
        description="Explore our curated portfolio of residential, commercial, and industrial developments."
        minHeight="50vh"
      />

      {/* Projects Showcase */}
      <section className="px-5 py-20 sm:px-8 md:py-28" ref={addToRefs}>
        <div className="mx-auto max-w-7xl opacity-0" ref={addToRefs}>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, idx) => (
              <article
                key={idx}
                className="glass project-card-safe group rounded-3xl border border-border p-8 flex flex-col items-center justify-center text-center h-[400px] transition-all duration-500 hover:border-gold/40 hover:shadow-luxe relative overflow-hidden"
              >
                {/* Background image — zoomable */}
                <div
                  data-zoomable="true"
                  data-zoom-src={card.bgHD}
                  className="absolute inset-0 rounded-3xl bg-cover bg-center transition-transform duration-[1.1s] group-hover:scale-110 cursor-zoom-in"
                  style={{
                    backgroundImage: `url('${card.bg}')`,
                    opacity: 0.14,
                    zIndex: 0,
                  }}
                />

                <div className="project-card-text flex flex-col items-center relative z-10">
                  <p className="eyebrow">{card.eyebrow}</p>
                  <h3 className="mt-4 text-3xl font-bold font-display">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm text-muted-foreground max-w-[26ch]">
                    {card.desc}
                  </p>
                  <Link
                    to="/contact"
                    className="btn-ghost mt-6 inline-flex border border-border"
                  >
                    {card.cta} <ArrowUpRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
