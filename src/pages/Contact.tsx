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
      {/* Contact hero uses newly generated banner image */}
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
            <h2 className="section-heading mt-3 text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl">We're here to build together</h2>
            <p className="section-body mt-5 text-base leading-relaxed max-w-2xl mx-auto">
              Reach out via phone, email, or WhatsApp. Our executive team will review your inquiry promptly.
            </p>
          </div>

          <motion.div variants={fadeUpVariant} className="max-w-5xl mx-auto space-y-6">
            
            {/* Office Card */}
            <div className="glass rounded-3xl p-8 sm:p-12 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold hover:shadow-luxe relative overflow-hidden bg-gradient-to-br from-card/90 via-card/60 to-card/40">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gold/10 border border-gold/30 text-gold shadow-md">
                  <MapPin className="h-8 w-8" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gold font-bold mb-1">Corporate Head Office</p>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold leading-tight mb-3">SEENI INFRA PVT LTD</h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    NO:99/18, 2nd Floor, Padi Kuppam Road,<br/>
                    Gandhi Nagar, Anna Nagar West,<br/>
                    Chennai 600040, Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>

            {/* Grid of Hours, Phone, Email & WhatsApp */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              
              {/* Business Hours */}
              <div className="glass rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-luxe flex flex-col justify-between">
                <div>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/10 border border-gold/20 text-gold mb-5">
                    <Clock className="h-6 w-6" />
                  </span>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground font-bold mb-1">Business Hours</p>
                  <p className="text-lg font-bold text-foreground">Mon – Sat</p>
                  <p className="text-sm text-muted-foreground mt-1">09:00 AM – 06:00 PM</p>
                </div>
              </div>

              {/* Direct Line */}
              <div className="glass rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-luxe flex flex-col justify-between">
                <div>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/10 border border-gold/20 text-gold mb-5">
                    <Phone className="h-6 w-6" />
                  </span>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground font-bold mb-1">Direct Line</p>
                  <p className="text-lg font-bold text-foreground">+91 9445657505</p>
                </div>
                <a href="tel:+919445657505" className="inline-block text-xs font-bold text-gold hover:underline mt-4">Call Now &rarr;</a>
              </div>

              {/* Email Address */}
              <div className="glass rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-luxe flex flex-col justify-between sm:col-span-2 lg:col-span-1">
                <div>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/10 border border-gold/20 text-gold mb-5">
                    <Mail className="h-6 w-6" />
                  </span>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground font-bold mb-1">Email Address</p>
                  <p className="text-lg font-bold text-foreground">info@seeni.in</p>
                </div>
                <a href="mailto:info@seeni.in" className="inline-block text-xs font-bold text-gold hover:underline mt-4">Send Email &rarr;</a>
              </div>

            </div>

            {/* WhatsApp & Social Support Banner */}
            <div className="glass rounded-3xl p-8 sm:p-10 transition-all duration-500 hover:-translate-y-1 hover:border-[#25D366]/40 hover:shadow-luxe bg-gradient-to-br from-card/90 via-card/70 to-card/40">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-5 text-center sm:text-left">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366]">
                    <MessageCircle className="h-7 w-7" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground font-bold">Instant Support</p>
                    <h4 className="text-xl font-bold text-foreground mt-1">Chat Live With Our Executive Team</h4>
                    <p className="text-sm text-muted-foreground mt-1">Get immediate answers for project inquiries and site visits.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto">
                  <a
                    href="https://wa.me/919445657505"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 md:flex-initial btn-gold py-3.5 px-6 text-sm bg-[#25D366] hover:bg-[#1ebd5a] text-black font-bold shadow-md shadow-[#25D366]/20 rounded-xl flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp Us
                  </a>
                  <a
                    href="https://www.instagram.com/seeniinfra?igsh=OWRpNGhmeXl0a280"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-border bg-card transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold shadow-sm"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

          </motion.div>
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
