import { Link } from "react-router-dom"
import { ArrowUpRight, Home, Building2, Paintbrush, LayoutTemplate, Wrench, HardHat } from "lucide-react"
import { PageHero } from "../components/PageHero"
import { motion } from "framer-motion"
import { SERVICES_DAY, SERVICES_NIGHT } from "../lib/images"

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

// ─────────────────────────────────────────────────────────────────────────────
// MASTER IMAGE REGISTRY — SERVICES PAGE
// Every ID is unique to this page. Zero overlap with Home, About, Blog,
// Contact, or Projects pages.
//
// UNIQUE IDs RESERVED FOR SERVICES:
//  Hero Day:      photo-1531834685032  → modern architectural facade, sharp daylight
//  Hero Night:    photo-1499346030926  → construction tower lit at night
//  Card 01:       photo-1580587771525  → white villa/residential luxury exterior
//  Card 02:       photo-1477959858617  → glass office tower, city skyline
//  Card 03:       photo-1565008447742  → renovation/remodeling workers
//  Card 04:       photo-1618221469555  → premium luxury interior living space
//  Card 05:       photo-1503387762-592 → REPLACED → photo-1560518883  → architect at drawing board
//  Card 06:       photo-1574359411659  → structural steel reinforcement
//  CTA Banner:    photo-1520338220851  → panoramic city construction project
// ─────────────────────────────────────────────────────────────────────────────
const services = [
  {
    num: "01",
    icon: Home,
    title: "Residential Construction",
    desc: "We design and build premium residences — from custom luxury villas to high-rise apartment complexes — crafted with precision engineering, quality materials, and an eye for enduring architectural excellence.",
    img:   "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1920&q=90",
    imgHD: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=3840&q=95",
  },
  {
    num: "02",
    icon: Building2,
    title: "Commercial Construction",
    desc: "From corporate office towers and retail centres to mixed-use developments, we deliver commercial spaces that are structurally sound, functionally optimised, and built to Fortune 500 standards of quality.",
    img:   "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1920&q=90",
    imgHD: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=3840&q=95",
  },
  {
    num: "03",
    icon: Wrench,
    title: "Renovation & Remodeling",
    desc: "We breathe new life into existing structures through comprehensive renovation and remodelling services — modernising interiors, upgrading facades, and enhancing structural integrity without disrupting daily operations.",
    img:   "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1920&q=90",
    imgHD: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=3840&q=95",
  },
  {
    num: "04",
    icon: Paintbrush,
    title: "Interior Design & Execution",
    desc: "Our interior design and execution team transforms bare spaces into sophisticated, functional environments. We manage everything from concept and material selection to final installation with a luxury finish.",
    img:   "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=90",
    imgHD: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=3840&q=95",
  },
  {
    num: "05",
    icon: LayoutTemplate,
    title: "Architecture & Planning",
    desc: "Our architects and planners bring visionary concepts to life through meticulous design, structural analysis, and regulatory compliance — ensuring every project is optimised for beauty, safety, and longevity.",
    img:   "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1920&q=90",
    imgHD: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=3840&q=95",
  },
  {
    num: "06",
    icon: HardHat,
    title: "Civil & Structural",
    desc: "Our civil and structural contracting services cover foundations, reinforced concrete frameworks, load-bearing systems, and full site execution — delivered with precision, safety, and strict adherence to engineering standards.",
    img:   "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?auto=format&fit=crop&w=1920&q=90",
    imgHD: "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?auto=format&fit=crop&w=3840&q=95",
  },
]

export function Services() {
  const { theme } = useTheme()
  const isNight = theme === "dark"

  return (
    <>
      {/* Services hero uses local /assets/services-day.png and services-night.png */}
      <PageHero
        dayImage={SERVICES_DAY}
        nightImage={SERVICES_NIGHT}
        eyebrow="Our Expertise"
        title="Comprehensive Construction Solutions"
        description="From luxury residences to large-scale industrial infrastructure, we deliver excellence across every vertical with precision and purpose."
        minHeight="68vh"
      />

      {/* ── Services Grid ── */}
      <section className="px-5 py-24 sm:px-8 md:py-32 bg-secondary/30">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="mx-auto max-w-7xl"
        >
          <div className="max-w-2xl text-center mx-auto">
            <p className="eyebrow">What We Do</p>
            <h2 className="section-heading mt-4 text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl">Our core disciplines</h2>
            <p className="section-body mt-5 text-base leading-relaxed max-w-xl mx-auto">
              Six specialist service lines, each backed by expert teams and a commitment to uncompromising quality.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service, idx) => (
              <motion.article
                key={idx}
                variants={fadeUpVariant}
                className="group relative overflow-hidden flex flex-col rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-luxe service-card"
                style={{ height: "420px" }}
              >
                <img
                  src={service.img}
                  srcSet={`${service.img.replace('w=1920', 'w=640')} 640w, ${service.img.replace('w=1920', 'w=1200')} 1200w, ${service.img} 1920w, ${service.imgHD} 3840w`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  alt={service.title}
                  loading="lazy"
                  data-zoomable="true"
                  data-zoom-src={service.imgHD}
                  className="absolute inset-0 h-full w-full object-cover rounded-3xl transition-transform duration-[1.5s] group-hover:scale-110 cursor-zoom-in"
                />

                {/* Consistent dark gradient — same on all 6 cards */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/95 via-black/55 to-black/10 opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex h-full flex-col p-8">
                  <div className="flex items-start justify-between mb-auto">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold text-black shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                      <service.icon className="h-6 w-6" />
                    </span>
                    <span className="font-display text-4xl font-bold text-white/20 transition-colors duration-500 group-hover:text-gold/40">
                      {service.num}
                    </span>
                  </div>
                  <div className="overflow-hidden">
                    <h3 className="mt-6 text-2xl font-bold leading-snug text-white mb-3">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-300 opacity-80 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 line-clamp-4">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="px-5 py-24 sm:px-8 md:py-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-7xl"
        >
          <div className="relative overflow-hidden rounded-[2.5rem] px-6 py-28 text-center sm:px-14 md:py-40 shadow-2xl">
            {/* Night Banner Image (Dark Theme) */}
            <img
              src={SERVICES_NIGHT}
              alt="Services Night View"
              loading="lazy"
              style={{
                position: "absolute", inset: 0, zIndex: 0,
                width: "100%", height: "100%", objectFit: "cover",
                opacity: isNight ? 1 : 0,
                transition: "opacity 700ms cubic-bezier(0.4,0,0.2,1)",
              }}
            />
            {/* Day Banner Image (Bright / Light Theme) */}
            <img
              src={SERVICES_DAY}
              alt="Services Day View"
              loading="lazy"
              style={{
                position: "absolute", inset: 0, zIndex: 0,
                width: "100%", height: "100%", objectFit: "cover",
                opacity: isNight ? 0 : 1,
                transition: "opacity 700ms cubic-bezier(0.4,0,0.2,1)",
              }}
            />
            {/* Gradient Overlay for Text Legibility */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-br from-black/75 via-black/65 to-black/80" />

            <div className="relative z-10 mx-auto max-w-3xl">
              <h2 className="text-3xl font-extrabold leading-[1.1] sm:text-5xl text-white">
                Ready to Start Your Project?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-gray-300">
                Share your requirements and our team will get back to you within two working days.
              </p>
              <div className="mt-10 flex justify-center gap-4">
                <Link to="/contact" className="btn-gold shadow-gold/30 hover:shadow-gold/50 text-base py-6">
                  Get in Touch <ArrowUpRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}
