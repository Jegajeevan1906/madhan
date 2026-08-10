import { Link } from "react-router-dom"
import { 
  ArrowUpRight, 
  ArrowDown, 
  House, 
  Building2, 
  Users, 
  ShieldCheck, 
  Timer, 
  Wallet, 
  Sparkles, 
  Award,
  Factory,
  HardHat,
  ChevronRight,
  ClipboardList
} from "lucide-react"
import { motion } from "framer-motion"
import { PromotionVideo } from "../components/PromotionVideo"
import { useTheme } from "../components/ThemeContext"
import {
  HERO_DAY,
  HERO_NIGHT,
  INTERIOR,
  INFRA_1,
  INFRA_2,
  INFRA_3,
  INFRA_4,
  TURNKEY_1,
  TURNKEY_2,
  TURNKEY_3,
  TURNKEY_4,
  TURNKEY_5,
  INDUSTRIAL_1,
  INDUSTRIAL_2,
  INDUSTRIAL_3,
  INDUSTRIAL_4,
  INDUSTRIAL_5,
  SANITARY_1,
  SANITARY_2,
  SANITARY_3,
  SANITARY_4,
  SANITARY_5,
  CONSULTING_1,
  CONSULTING_2,
  CONSULTING_3,
  CONSULTING_4,
  CONSULTING_5,
} from "../lib/images"

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

// ─────────────────────────────────────────────────────────────────────────────
// MASTER IMAGE REGISTRY — HOME PAGE
// Hero, interior and CTA use local /public/assets — see src/lib/images.ts
// ─────────────────────────────────────────────────────────────────────────────


export function Home() {
  const { theme } = useTheme()
  const isNight = theme === "dark"

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative isolate flex flex-col min-h-screen overflow-hidden">

        {/* Night image — local asset: hero-night.webp */}
        <img
          src={HERO_NIGHT}
          sizes="100vw"
          alt="Luxury high-rise illuminated at night"
          fetchPriority="high"
          decoding="sync"
          style={{
            position: "absolute", inset: 0, zIndex: -20,
            width: "100%", height: "100%", objectFit: "cover",
            objectPosition: "center 30%",
            opacity: isNight ? 1 : 0,
            transition: "opacity 700ms cubic-bezier(0.4,0,0.2,1)",
          }}
        />

        {/* Day image — local asset: hero-day.webp */}
        <img
          src={HERO_DAY}
          sizes="100vw"
          alt="Premium construction site with cranes against blue sky"
          fetchPriority="high"
          decoding="sync"
          style={{
            position: "absolute", inset: 0, zIndex: -20,
            width: "100%", height: "100%", objectFit: "cover",
            objectPosition: "center 40%",
            opacity: isNight ? 0 : 1,
            transition: "opacity 700ms cubic-bezier(0.4,0,0.2,1)",
          }}
        />

        <div className="hero-overlay" style={{ zIndex: -10 }} />

        <div className="relative flex flex-col flex-1 mx-auto w-full max-w-7xl px-5 sm:px-8 pt-28 sm:pt-32 pb-6">
          <div className="flex-1 flex items-center py-6">
            <div className="hero-text-panel">
              <img
                src="/assets/logo-transparent.png"
                alt="SEENI INFRA PVT LTD"
                width={220} height={66}
                className="h-14 sm:h-16 w-auto object-contain mb-6 sm:mb-8"
                style={{ filter: "drop-shadow(0 3px 12px rgba(0,0,0,0.6)) drop-shadow(0 0 8px rgba(212,175,55,0.25))" }}
              />
              <h1 className="hero-heading">
                <span className="hero-heading-eyebrow">Building the Future</span>
                <span className="hero-heading-main">
                  Crafted With<br />
                  <em className="hero-heading-accent">Precision.</em>{" "}
                  Built to{" "}<br className="hero-heading-br" />
                  Last.
                </span>
              </h1>
              <p className="hero-body mt-5 sm:mt-6 max-w-[46ch] text-sm sm:text-base leading-[1.75]">
                India's premier construction company delivering Fortune&#8209;500‑grade
                infrastructure, industrial, and commercial landmarks — with
                uncompromising quality and enduring craftsmanship.
              </p>
              <div className="mt-7 sm:mt-9 flex flex-wrap items-center gap-3">
                <Link to="/services" className="btn-hero-primary">
                  Explore Services <ChevronRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="btn-hero-ghost">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 1 }}
            className="pb-5 sm:pb-7 flex items-center gap-2.5 text-white/60 text-[10px] uppercase tracking-[0.3em] select-none"
          >
            <ArrowDown className="h-3.5 w-3.5 animate-bounce text-gold flex-shrink-0" />
            Scroll to explore
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          COMPANY HIGHLIGHTS — luxury marble interior (UNIQUE: home only)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="px-5 py-24 sm:px-8 md:py-32">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="mx-auto max-w-7xl"
        >
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-3xl relative group aspect-[4/5] lg:aspect-auto lg:h-[580px]">
              <img
                src={INTERIOR}
                sizes="(max-width: 1024px) 100vw, 50vw"
                alt="Luxury interior construction finish"
                loading="lazy"
                data-zoomable="true"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.07]"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div>
              <p className="eyebrow">Company Highlights</p>
              <h2 className="section-heading mt-4 text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl">
                A legacy of strength,<br className="hidden sm:block" /> precision, and trust
              </h2>
              <p className="section-body mt-6 text-base leading-relaxed max-w-xl">
                Established on December 29, 2025, by Managing Director Anita Kumari Sam Vijaya Kumar,
                SEENI INFRA PVT LTD unites industry-leading engineers, master builders, and architects.
                We take a single-team approach to every commission, ensuring impeccable execution
                from groundbreaking to final handover in Tamil Nadu and beyond.
              </p>
              <motion.div variants={staggerContainer} className="mt-10 grid grid-cols-2 gap-4 sm:gap-6">
                {[
                  { value: "100%", label: "Client Satisfaction" },
                  { value: "25+",  label: "Expert Engineers" },
                  { value: "10+",  label: "Certifications" },
                  { value: "24/7", label: "Project Support" },
                ].map((stat, i) => (
                  <motion.div key={i} variants={fadeUpVariant}
                    className="glass rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-gold hover:shadow-luxe">
                    <p className="font-display text-3xl font-bold text-gold sm:text-4xl">{stat.value}</p>
                    <p className="mt-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      <PromotionVideo />

      {/* ══════════════════════════════════════════════════════════════════
          CAPABILITIES — 5 unique cards, none reused elsewhere
      ══════════════════════════════════════════════════════════════════ */}
      <section className="px-5 py-24 sm:px-8 md:py-32 bg-secondary/30">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="mx-auto max-w-7xl"
        >
          <div className="max-w-2xl text-center mx-auto">
            <p className="eyebrow">Capabilities</p>
            <h2 className="section-heading mt-4 text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl">What we deliver</h2>
            <p className="section-body mt-5 text-base leading-relaxed max-w-xl mx-auto">
              Comprehensive engineering and construction services across all sectors, backed by precision and excellence.
            </p>
          </div>

          <motion.div variants={staggerContainer} className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {([
              {
                icon: HardHat,
                title: "Infrastructure & Civil",
                desc: "Execution of roads, highways, bridges, flyovers, and allied transportation networks.",
                gallery: [
                  INFRA_1,
                  INFRA_2,
                  INFRA_3,
                  INFRA_4
                ]
              },
              {
                icon: Building2,
                title: "EPC & Turnkey Contracts",
                desc: "End-to-end engineering, procurement, and construction for government and private entities.",
                gallery: [
                  TURNKEY_1,
                  TURNKEY_2,
                  TURNKEY_3,
                  TURNKEY_4,
                  TURNKEY_5
                ]
              },
              {
                icon: Factory,
                title: "Industrial & Commercial",
                desc: "Construction of warehouses, industrial sheds, and high-rise commercial spaces.",
                gallery: [
                  INDUSTRIAL_1,
                  INDUSTRIAL_2,
                  INDUSTRIAL_3,
                  INDUSTRIAL_4,
                  INDUSTRIAL_5
                ]
              },
              {
                icon: House,
                title: "Residential & Urban",
                desc: "Development of plots, luxury villas, residential layouts, and high-rise apartments.",
                gallery: [
                  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=90",
                  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=90",
                  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=90",
                  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=90",
                  "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1920&q=90"
                ]
              },
              {
                icon: ShieldCheck,
                title: "Hydraulic & Sanitation",
                desc: "Irrigation projects, dams, water treatment, sewerage, and storm water management.",
                gallery: [
                  SANITARY_1,
                  SANITARY_2,
                  SANITARY_3,
                  SANITARY_4,
                  SANITARY_5
                ]
              },
              {
                icon: ClipboardList,
                title: "Project Management & Consulting",
                desc: "We provide comprehensive project management and consulting services. From feasibility studies to on-site supervision, we ensure flawless delivery.",
                gallery: [
                  CONSULTING_1,
                  CONSULTING_2,
                  CONSULTING_3,
                  CONSULTING_4,
                  CONSULTING_5
                ]
              },
            ] as const).map((cap, idx) => (
              <motion.div key={idx} variants={fadeUpVariant}
                className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-luxe h-[350px] flex flex-col justify-end cursor-zoom-in"
                data-zoomable="true"
                data-gallery-title={cap.title}
                data-gallery-srcs={cap.gallery.join("|")}>
                <img
                  src={cap.gallery[0]}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  alt={cap.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.08] rounded-3xl"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/92 via-black/38 to-transparent" />
                <div className="relative z-10 p-7">
                  <div className="flex items-center justify-between mb-4">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold text-black shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <cap.icon className="h-5 w-5" />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-black/60 text-gold border border-gold/30 backdrop-blur-md">
                      {cap.gallery.length} Photos
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1.5">{cap.title}</h3>
                  <p className="text-xs leading-relaxed text-gray-300/80 opacity-0 translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 line-clamp-2">
                    {cap.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          WHY US
      ══════════════════════════════════════════════════════════════════ */}
      <section className="px-5 py-24 sm:px-8 md:py-32">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="mx-auto max-w-7xl"
        >
          <div className="max-w-2xl text-center mx-auto">
            <p className="eyebrow">Why Choose Us</p>
            <h2 className="section-heading mt-4 text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl">Built on five commitments</h2>
          </div>
          <motion.div variants={staggerContainer} className="mt-16 grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {[
              { icon: Users,       label: "Experienced Team", bgImg: "/assets/team_meeting.png" },
              { icon: ShieldCheck, label: "Quality Materials", bgImg: "/assets/quality_materials.png" },
              { icon: Timer,       label: "On-Time Delivery", bgImg: "/assets/on_time_delivery.png" },
              { icon: Wallet,      label: "Transparent Pricing", bgImg: "/assets/transparent_pricing.png" },
              { icon: Sparkles,    label: "Modern Design", bgImg: "/assets/modern_design.png" },
            ].map((feature, idx) => (
              <motion.div key={idx} variants={fadeUpVariant}
                className="group relative overflow-hidden rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center text-center transition-all duration-500 hover:-translate-y-2 hover:border-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] border border-transparent min-h-[220px]">
                <img
                  src={feature.bgImg}
                  alt={feature.label}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.15]"
                />
                <div 
                  className="absolute inset-0 transition-opacity duration-500" 
                  style={{ background: "linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.65))" }} 
                />
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full border border-gold/30 bg-gold/20 text-gold mb-5 backdrop-blur-sm">
                    <feature.icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">{feature.label}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          ACCREDITATIONS
      ══════════════════════════════════════════════════════════════════ */}
      <section className="px-5 py-24 sm:px-8 md:py-32 bg-secondary/30">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="mx-auto max-w-7xl"
        >
          <div className="max-w-2xl text-center mx-auto">
            <p className="eyebrow">Accreditations</p>
            <h2 className="section-heading mt-4 text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl">Recognized Excellence</h2>
            <p className="section-body mt-5 text-base leading-relaxed mx-auto max-w-lg">
              Officially registered and certified with India's leading regulatory bodies.
            </p>
          </div>
          <motion.div variants={staggerContainer} className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Startup India",  desc: "Recognised under the Startup India initiative by DPIIT, Government of India." },
              { name: "GST",            desc: "Registered under the Goods & Services Tax regime for transparent tax compliance." },
              { name: "PAN",            desc: "Permanent Account Number issued by the Income Tax Department of India." },
              { name: "Incorporation",  desc: "Incorporated as a Private Limited Company under the Companies Act, 2013." },
              { name: "MCA",            desc: "Registered with the Ministry of Corporate Affairs for full corporate compliance." },
              { name: "AOA & MOA",      desc: "Articles and Memorandum of Association defining company governance." },
              { name: "TAN",            desc: "Tax Deduction and Collection Account Number for statutory compliance." },
              { name: "MSME",           desc: "Registered as a Micro, Small & Medium Enterprise under the MSME Development Act." },
            ].map((cert, idx) => (
              <motion.div key={idx} variants={fadeUpVariant}
                className="glass rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-gold hover:shadow-luxe">
                <div className="flex items-center gap-5 mb-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-muted border border-border text-gold">
                    <Award className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-bold tracking-wide">{cert.name}</h3>
                </div>
                <p className="text-sm leading-relaxed section-caption">{cert.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          FINAL CTA BANNER — luxury high-rise night skyline (UNIQUE: home only)
          Unsplash ID: photo-1486325212027-8081e485255e (twilight skyscrapers)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="px-5 py-24 sm:px-8 md:py-32">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="mx-auto max-w-7xl"
        >
          <div className="cta-parallax-wrapper relative overflow-hidden rounded-[2.5rem] px-6 py-24 text-center sm:px-14 md:py-36 shadow-2xl">
            {/* Premium parallax background — lazy loaded */}
            <img
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=92"
              srcSet="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=960&q=85 960w, https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=92 1920w, https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=3840&q=95 3840w"
              sizes="(max-width: 1280px) 100vw, 1280px"
              alt="Luxury twilight skyline — premium construction landmark"
              loading="lazy"
              decoding="async"
              className="cta-parallax-img absolute inset-0 h-[115%] w-full object-cover"
              style={{ top: "-7.5%" }}
            />
            {/* Layered overlay: black + rich gold tint at bottom for premium black & gold aesthetic */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/65 to-black/80" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0a0800]/60 to-transparent" />
            {/* Gold decorative rule */}
            <div className="relative z-10 mx-auto max-w-3xl">
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="h-px w-12 bg-gold/60" />
                <span className="text-gold text-xs font-bold uppercase tracking-[0.3em]">SEENI INFRA PVT LTD</span>
                <span className="h-px w-12 bg-gold/60" />
              </div>
              <h2 className="text-3xl font-extrabold leading-[1.08] sm:text-5xl text-white tracking-tight">
                Let's Build Your<br className="hidden sm:block" />{" "}Dream Project
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-gray-200/90">
                Share your brief and our directors will respond within two working days to discuss your vision and bring it to life.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-gold text-base py-6 shadow-gold/40 hover:shadow-gold/60">
                  Start a Conversation <ArrowUpRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}
