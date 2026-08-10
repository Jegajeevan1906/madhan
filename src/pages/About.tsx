import { useEffect, useRef } from "react"
import { Gem, HeartHandshake, Compass, Eye, Quote } from "lucide-react"
import { PageHero } from "../components/PageHero"
import { ABOUT_DAY, ABOUT_NIGHT, ANITA_KUMARI } from "../lib/images"

export function About() {
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

  return (
    <>
      {/* About hero uses local /assets/about-day.webp and about-night.webp */}
      <PageHero
        dayImage={ABOUT_DAY}
        nightImage={ABOUT_NIGHT}
        eyebrow="About the Company"
        title="A Legacy of Excellence"
        description="SEENI INFRA PVT LTD was built on a simple idea: creating infrastructure that drives progress, sustains communities, and defines skylines."
        minHeight="68vh"
      />

      {/* Our Story */}
      <section className="px-5 py-20 sm:px-8 md:py-28" ref={addToRefs}>
        <div className="mx-auto max-w-7xl opacity-0" ref={addToRefs}>
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div className="max-w-2xl">
              <p className="eyebrow">Our Story</p>
              <h2 className="mt-4 text-3xl font-bold leading-[1.08] sm:text-4xl md:text-5xl">
                Redefining the Infrastructure Landscape
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Established on December 29, 2025, in Chennai, Tamil Nadu, by Managing Director Anita Kumari Sam Vijaya Kumar, SEENI INFRA PVT LTD has rapidly emerged as a pioneer in the construction industry. With an unwavering commitment to quality and innovation, we act as premier civil engineering contractors, developers, project managers, and consultants, bringing together the brightest minds to deliver turnkey solutions across India.
              </p>
            </div>
            {/* Our Story image: photo-1567521464027 → corporate engineering team (UNIQUE to About) */}
            <div className="overflow-hidden rounded-3xl group">
              <img
                src="https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=1200&q=88"
                srcSet="https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=600&q=80 600w, https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=1200&q=88 1200w, https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=2400&q=92 2400w"
                sizes="(max-width: 1024px) 100vw, 50vw"
                alt="Corporate engineering team reviewing construction plans"
                width="1200"
                height="900"
                loading="lazy"
                data-zoomable="true"
                className="h-full w-full object-cover rounded-3xl transition-transform duration-[1.2s] group-hover:scale-105 cursor-zoom-in"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-5 py-20 sm:px-8 md:py-28" ref={addToRefs}>
        <div className="mx-auto max-w-7xl opacity-0" ref={addToRefs}>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="glass rounded-2xl p-9 transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-luxe">
              <p className="eyebrow">Mission</p>
              <p className="mt-5 text-lg leading-relaxed">
                To execute world-class infrastructure and civil engineering works—including EPC and turnkey contracts—for Central, State, and private entities, strictly adhering to timelines and unmatched precision.
              </p>
            </div>
            <div className="glass rounded-2xl p-9 transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-luxe">
              <p className="eyebrow">Vision</p>
              <p className="mt-5 text-lg leading-relaxed">
                To be India's most trusted developer and project management consultancy, acquiring and leveraging cutting-edge machinery and materials to set global benchmarks in architectural excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Snippet */}
      <section className="px-5 py-20 sm:px-8 md:py-28" ref={addToRefs}>
        <div className="mx-auto max-w-7xl opacity-0" ref={addToRefs}>
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-3xl order-2 lg:order-1 group">
              <img
                src={ANITA_KUMARI}
                srcSet={`${ANITA_KUMARI} 1x, ${ANITA_KUMARI} 2x`}
                alt="Anita Kumari Sam Vijaya Kumar — Managing Director, SEENI INFRA"
                width="1200"
                height="1400"
                loading="lazy"
                data-zoomable="true"
                className="h-[600px] w-full object-cover object-top rounded-3xl transition-transform duration-[1.2s] group-hover:scale-105 cursor-zoom-in"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="max-w-2xl">
                <p className="eyebrow">Executive Leadership</p>
                <h2 className="mt-4 text-3xl font-bold leading-[1.08] sm:text-4xl md:text-5xl">
                  Anita Kumari
                </h2>
                <p className="text-gold font-bold tracking-widest text-sm mt-3 uppercase">Managing Director</p>

                <Quote className="h-8 w-8 text-gold mt-8 mb-4 opacity-50" />
                <p className="text-xl font-display leading-relaxed">
                  "Our goal is not just to construct buildings, but to forge lasting legacies that stand the test of time, weather, and innovation."
                </p>

                <p className="mt-8 text-base leading-relaxed text-muted-foreground">
                  With a visionary approach to modern infrastructure and a passion for the "Make in India" initiative, Anita Kumari established SEENI INFRA PVT LTD to redefine standards in the construction landscape. Her leadership has instilled a culture of precision, accountability, and quality (QCD) across all commercial, residential, and industrial sectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-5 py-20 sm:px-8 md:py-28" ref={addToRefs}>
        <div className="mx-auto max-w-7xl opacity-0" ref={addToRefs}>
          <div className="max-w-2xl">
            <p className="eyebrow">Core Values</p>
            <h2 className="mt-4 text-3xl font-bold leading-[1.08] sm:text-4xl md:text-5xl">
              Four principles, held absolutely
            </h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Gem,          title: "Excellence",  desc: "Uncompromising quality and premium finishes in every endeavor." },
              { icon: HeartHandshake, title: "Integrity", desc: "Open books, honest timelines, and ethical business practices." },
              { icon: Compass,      title: "Precision",   desc: "Millimeter-perfect execution aligned strictly with structural blueprints." },
              { icon: Eye,          title: "Vision",      desc: "Forward-thinking designs anticipating the needs of tomorrow." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass rounded-2xl p-7 transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-luxe">
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-border bg-muted text-gold">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="px-5 py-20 sm:px-8 md:py-28" ref={addToRefs}>
        <div className="mx-auto max-w-7xl opacity-0" ref={addToRefs}>
          <div className="max-w-2xl">
            <p className="eyebrow">Timeline</p>
            <h2 className="mt-4 text-3xl font-bold leading-[1.08] sm:text-4xl md:text-5xl">Milestones</h2>
          </div>
          <div className="mt-14 space-y-4">
            {[
              { year: "2025", text: "SEENI INFRA PVT LTD officially established in Chennai by Anita Kumari Sam Vijaya Kumar." },
              { year: "2026", text: "Secured first major commercial complex contract; expanded operations across Tamil Nadu." },
              { year: "2027", text: "Targeting ISO 9001:2015 accreditation and entry into large-scale infrastructure projects." },
              { year: "2028", text: "Projected to launch international operations in the Middle East." }
            ].map((milestone, idx) => (
              <div key={idx} className="glass rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-luxe grid grid-cols-[auto_minmax(0,1fr)] items-center gap-6">
                <span className="font-display text-2xl font-bold text-gold sm:text-3xl">{milestone.year}</span>
                <p className="min-w-0 text-sm leading-relaxed text-muted-foreground">{milestone.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
