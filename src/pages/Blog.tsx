import { useEffect, useRef } from "react"
import { Mail, Quote, ExternalLink } from "lucide-react"
import { Linkedin } from "../components/Icons"
import { PageHero } from "../components/PageHero"
import { BLOG_DAY, BLOG_NIGHT } from "../lib/images"

export function Blog() {
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
      {/* Blog hero uses local /assets/blog-day.webp and blog-night.webp */}
      <PageHero
        dayImage={BLOG_DAY}
        nightImage={BLOG_NIGHT}
        eyebrow="Executive Leadership"
        title="Managing Director"
        description="Visionary leadership driving SEENI INFRA PVT LTD towards Fortune 500 standards in global construction and infrastructure."
        minHeight="60vh"
      />

      {/* Profile Section */}
      <section className="px-5 py-20 sm:px-8 md:py-28" ref={addToRefs}>
        <div className="mx-auto max-w-7xl opacity-0" ref={addToRefs}>
          <div className="grid gap-14 lg:grid-cols-12 lg:items-start">

            {/* Image Column */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="glass overflow-hidden rounded-3xl border border-border p-2">
                <img
                  src="/assets/founder.jpg"
                  srcSet="/assets/founder.jpg 1x, /assets/founder.jpg 2x"
                  alt="Anita Kumari - Managing Director"
                  data-zoomable="true"
                  loading="lazy"
                  className="w-full h-auto object-cover rounded-2xl transition-transform duration-[1.2s] hover:scale-105 cursor-zoom-in"
                />
              </div>
              <div className="mt-6 flex flex-col items-center sm:items-start sm:flex-row gap-4 justify-between glass p-6 rounded-2xl">
                <div>
                  <h3 className="text-3xl font-extrabold font-display tracking-tight leading-tight">Anita Kumari</h3>
                  <p className="text-base text-gold tracking-widest uppercase mt-2 font-semibold">Managing Director</p>
                </div>
                <div className="flex gap-3">
                  <a
                    href="mailto:info@seeni.in"
                    className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground hover:text-gold hover:border-gold transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground hover:text-gold hover:border-gold transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7">
              <Quote className="h-10 w-10 text-gold mb-8 opacity-50" />
              <h2 className="text-3xl font-bold leading-[1.2] sm:text-4xl md:text-5xl font-display mb-8">
                Building India's infrastructure future with discipline, quality, and an unwavering commitment to execution.
              </h2>

              <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
                <p>
                  <strong className="text-foreground">Anita Kumari</strong> is the dynamic and visionary Managing Director of SEENI INFRA PVT LTD, a rapidly growing powerhouse in the field of civil engineering, industrial contracting, and infrastructure development in India. A graduate in Information Technology (B.E. IT), she brings with her a strong technical foundation, business acumen, and a passion for innovation that has helped the company emerge as a trusted name in the industry.
                </p>
                <p>
                  With over a decade of hands-on experience, Anita has played a key role in shaping the company's strategy, operations, and market expansion. Under her leadership, the organization has successfully completed multiple critical infrastructure and industrial projects across the country, gaining recognition for its quality, reliability, and client-centric approach.
                </p>
                <p>
                  Anita is not only a technology-driven entrepreneur but also a bold leader who believes in empowering people and nurturing talent. Her ability to manage large teams, streamline project execution, and build strong relationships with clients and partners has been instrumental in the company's sustained growth. She is especially known for her innovative mindset and strategic foresight—leading complex turnkey operations and pioneering new infrastructure solutions.
                </p>
                <div className="glass rounded-2xl p-8 my-10 border-l-4 border-gold">
                  <h4 className="text-xl font-semibold text-foreground mb-3">Core Philosophy: QCD</h4>
                  <p>
                    Her strong ethics, disciplined execution style, and clear focus on <strong>Quality, Cost, and Delivery (QCD)</strong> have earned her the respect of employees, vendors, and stakeholders alike. She is actively involved in the end-to-end operations of the business—from supply chain to finance and customer service—ensuring that SEENI INFRA maintains its high standards in everything it does.
                  </p>
                </div>
                <p>
                  A passionate advocate for "Make in India," Anita is driving the vision to reduce dependence on imports and contribute significantly to India's industrial growth. Anita Kumari continues to inspire a new generation of entrepreneurs, especially women in technology and construction, by proving that with the right vision and relentless dedication, it is possible to build something impactful and lasting.
                  <span className="block mt-4">
                    <a href="https://india5000.com/winners/2025/india-5000-best-msme-awards-2025/atechssystem-integrator-pvt-ltd-1753769740126" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-gold hover:text-gold/80 transition-colors font-medium text-sm underline underline-offset-4 decoration-gold/40 hover:decoration-gold">
                      Explore ongoing corporate initiatives & awards &rarr;
                    </a>
                  </span>
                </p>
              </div>

              <div className="mt-12 pt-12 border-t border-border">
                <p className="eyebrow mb-6">Expertise & Focus Areas</p>
                <div className="flex flex-wrap gap-3">
                  {["Strategic Operations", "Turnkey Projects", "Quality Assurance", "Supply Chain Management", "Make in India Advocate", "Infrastructure Development"].map((skill) => (
                    <span key={skill} className="px-4 py-2 rounded-full border border-border text-sm text-foreground bg-muted/50 transition-all duration-300 hover:border-gold hover:text-gold">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
