import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"
import { Instagram } from "../components/Icons"
import { PageHero } from "../components/PageHero"
import { motion } from "framer-motion"
import { CONTACT_DAY, CONTACT_NIGHT } from "../lib/images"

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

export function Contact() {
  return (
    <>
      {/* Contact hero uses local assets */}
      <PageHero
        dayImage={CONTACT_DAY}
        nightImage={CONTACT_NIGHT}
        eyebrow="Get in Touch"
        title="Contact Our Team"
        description="Whether it's a commercial landmark or a luxury residence, our directors are ready to discuss your vision."
        minHeight="50vh"
      />

      {/* Main Content — Contact Details Grid */}
      <section className="px-5 py-24 sm:px-8 md:py-32 bg-secondary/30">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto max-w-7xl"
        >
          <div className="text-center mb-16">
            <p className="eyebrow">Connect With Us</p>
            <h2 className="section-heading mt-3 text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl">We're here to help</h2>
            <p className="section-body mt-5 text-base leading-relaxed max-w-2xl mx-auto">
              Reach out to us directly via phone, email, or WhatsApp. Our team is available to assist you with project inquiries and consultations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Main Office Card - spans 2 columns on desktop */}
            <motion.div variants={fadeUpVariant} className="md:col-span-2 glass rounded-3xl p-10 sm:p-14 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:border-gold hover:shadow-luxe bg-gradient-to-br from-card/80 to-card/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <MapPin className="h-40 w-40" />
              </div>
              <div>
                <span className="grid h-20 w-20 place-items-center rounded-2xl bg-gold/10 border border-gold/30 text-gold mb-8 shadow-lg shadow-gold/10 backdrop-blur-md">
                  <MapPin className="h-10 w-10" />
                </span>
                <p className="text-sm uppercase tracking-[0.25em] text-gold font-bold mb-4">Corporate Head Office</p>
                <h3 className="text-2xl sm:text-3xl font-display font-bold leading-tight mb-4">SEENI INFRA PVT LTD</h3>
                <p className="text-lg leading-relaxed font-medium text-muted-foreground max-w-md">
                  NO:99/18, 2nd Floor, Padi Kuppam Road,<br/>
                  Gandhi Nagar, Anna Nagar West,<br/>
                  Chennai 600040, Tamil Nadu
                </p>
              </div>
            </motion.div>

            {/* Business Hours Card */}
            <motion.div variants={fadeUpVariant} className="glass rounded-3xl p-10 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:border-gold hover:shadow-luxe">
              <div>
                <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gold/10 border border-gold/20 text-gold mb-6 shadow-lg shadow-gold/5">
                  <Clock className="h-8 w-8" />
                </span>
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-bold mb-3">Business Hours</p>
                <div className="space-y-2">
                  <p className="text-lg font-bold text-foreground">Mon – Sat</p>
                  <p className="text-base text-muted-foreground">09:00 AM – 06:00 PM</p>
                  <p className="text-base text-muted-foreground mt-4 pt-4 border-t border-border">Sunday: Closed</p>
                </div>
              </div>
            </motion.div>

            {/* Direct Line Card */}
            <motion.div variants={fadeUpVariant} className="glass rounded-3xl p-10 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:border-gold hover:shadow-luxe">
              <div>
                <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gold/10 border border-gold/20 text-gold mb-6 shadow-lg shadow-gold/5">
                  <Phone className="h-8 w-8" />
                </span>
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-bold mb-3">Direct Line</p>
                <p className="text-2xl leading-relaxed font-bold text-foreground">+91 9445657505</p>
              </div>
              <a href="tel:+919445657505" className="mt-8 btn-ghost px-8 py-4 rounded-xl border border-border/50 hover:border-gold/50 text-center font-bold">Call Now</a>
            </motion.div>

            {/* Email Card */}
            <motion.div variants={fadeUpVariant} className="glass rounded-3xl p-10 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:border-gold hover:shadow-luxe">
              <div>
                <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gold/10 border border-gold/20 text-gold mb-6 shadow-lg shadow-gold/5">
                  <Mail className="h-8 w-8" />
                </span>
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-bold mb-3">Email Address</p>
                <p className="text-xl leading-relaxed font-bold text-foreground">info@seeni.in</p>
              </div>
              <a href="mailto:info@seeni.in" className="mt-8 btn-ghost px-8 py-4 rounded-xl border border-border/50 hover:border-gold/50 text-center font-bold">Send Email</a>
            </motion.div>

            {/* WhatsApp & Social Support */}
            <motion.div variants={fadeUpVariant} className="md:col-span-1 glass rounded-3xl p-10 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:border-[#25D366]/50 hover:shadow-luxe bg-gradient-to-br from-card/80 to-card/40">
              <div>
                <span className="grid h-16 w-16 place-items-center rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] mb-6 shadow-lg shadow-[#25D366]/5">
                  <MessageCircle className="h-8 w-8" />
                </span>
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-bold mb-3">Instant Support</p>
                <p className="text-lg leading-relaxed font-bold mb-6 text-foreground">Chat with our experts directly.</p>
                <div className="flex items-center gap-4">
                  <a
                    href="https://wa.me/919445657505"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-gold py-4 px-6 text-base bg-[#25D366] hover:bg-[#1ebd5a] text-black font-bold shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 rounded-xl flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" /> WhatsApp Us
                  </a>
                  <a
                    href="https://www.instagram.com/seeniinfra?igsh=OWRpNGhmeXl0a280"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-border bg-card transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold shadow-sm hover:shadow-gold/20"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Google Maps Embed */}
      <section className="pb-24 sm:pb-32 px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-7xl"
        >
          <div className="overflow-hidden rounded-3xl border border-border/50 shadow-2xl relative h-[500px] glass">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1984849984274!2d80.18992847470985!3d13.08660368686795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52656a8ce1c1cb%3A0xeea2ca9834901182!2sSeeni%20Infra%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1722951000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.1) opacity(0.95)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SEENI INFRA PVT LTD Office Location"
              className="absolute inset-0"
            />
          </div>
        </motion.div>
      </section>
    </>
  )
}
