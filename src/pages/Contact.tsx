import { useState } from "react"
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2, User, Building2 } from "lucide-react"
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
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "Civil & Infrastructure",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

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

      {/* Main Content — Form & Contact Details */}
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
              Send us a direct message below or reach out via phone, email, or WhatsApp. Our team will review your enquiry promptly.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 items-start">
            
            {/* ── Left Column: Modern High-End Contact Form ── */}
            <motion.div variants={fadeUpVariant} className="lg:col-span-7">
              <div className="glass rounded-3xl p-8 sm:p-12 border border-border/60 shadow-2xl relative overflow-hidden bg-gradient-to-br from-card/90 via-card/60 to-card/40">
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                  <Send className="h-64 w-64 text-gold" />
                </div>

                <div className="relative z-10">
                  <span className="eyebrow text-gold">Direct Enquiry</span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold mt-2 mb-3">Send Us a Message</h3>
                  <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                    Please provide your project details below. Our directors respond to all valid inquiries within 24–48 hours.
                  </p>

                  {formSubmitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-8 rounded-2xl bg-gold/10 border border-gold/40 text-center flex flex-col items-center justify-center my-6"
                    >
                      <CheckCircle2 className="h-16 w-16 text-gold mb-4 animate-bounce" />
                      <h4 className="text-xl font-bold font-display text-foreground mb-2">Message Received</h4>
                      <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
                        Thank you for reaching out, <strong className="text-foreground">{formData.fullName}</strong>. Our management team has received your inquiry regarding <strong className="text-gold">{formData.service}</strong> and will contact you shortly.
                      </p>
                      <button
                        onClick={() => { setFormSubmitted(false); setFormData({ fullName: "", email: "", phone: "", service: "Civil & Infrastructure", message: "" }); }}
                        className="mt-6 btn-ghost text-xs px-6 py-2.5 rounded-xl border border-gold/40 hover:bg-gold/10"
                      >
                        Send Another Inquiry
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-6 sm:grid-cols-2">
                        {/* Full Name */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                            Full Name <span className="text-gold">*</span>
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              required
                              placeholder="e.g. Rajesh Kumar"
                              value={formData.fullName}
                              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                              className="w-full rounded-xl border border-border bg-background/60 px-4 py-3.5 pl-11 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all duration-300 focus:border-gold focus:bg-background focus:outline-none focus:ring-2 focus:ring-gold/20 shadow-sm"
                            />
                            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60" />
                          </div>
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                            Email Address <span className="text-gold">*</span>
                          </label>
                          <div className="relative">
                            <input
                              type="email"
                              required
                              placeholder="e.g. rajesh@company.com"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full rounded-xl border border-border bg-background/60 px-4 py-3.5 pl-11 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all duration-300 focus:border-gold focus:bg-background focus:outline-none focus:ring-2 focus:ring-gold/20 shadow-sm"
                            />
                            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60" />
                          </div>
                        </div>
                      </div>

                      <div className="grid gap-6 sm:grid-cols-2">
                        {/* Phone */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                            Phone Number
                          </label>
                          <div className="relative">
                            <input
                              type="tel"
                              placeholder="+91 98765 43210"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full rounded-xl border border-border bg-background/60 px-4 py-3.5 pl-11 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all duration-300 focus:border-gold focus:bg-background focus:outline-none focus:ring-2 focus:ring-gold/20 shadow-sm"
                            />
                            <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60" />
                          </div>
                        </div>

                        {/* Service Category */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                            Service Category
                          </label>
                          <div className="relative">
                            <select
                              value={formData.service}
                              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                              className="w-full rounded-xl border border-border bg-background/60 px-4 py-3.5 pl-11 text-sm text-foreground transition-all duration-300 focus:border-gold focus:bg-background focus:outline-none focus:ring-2 focus:ring-gold/20 shadow-sm appearance-none cursor-pointer"
                            >
                              <option value="Civil & Infrastructure">Civil & Infrastructure</option>
                              <option value="EPC & Turnkey Contracts">EPC & Turnkey Contracts</option>
                              <option value="Industrial & Commercial">Industrial & Commercial</option>
                              <option value="Residential Construction">Residential Construction</option>
                              <option value="Hydraulic & Sanitation">Hydraulic & Sanitation</option>
                              <option value="Project Management">Project Management & Consulting</option>
                            </select>
                            <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60 pointer-events-none" />
                          </div>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                          Project Brief / Message <span className="text-gold">*</span>
                        </label>
                        <textarea
                          required
                          rows={5}
                          placeholder="Please briefly describe your project scope, location, and timeline requirements..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full rounded-xl border border-border bg-background/60 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all duration-300 focus:border-gold focus:bg-background focus:outline-none focus:ring-2 focus:ring-gold/20 shadow-sm resize-none"
                        />
                      </div>

                      {/* Submit CTA */}
                      <button
                        type="submit"
                        className="btn-gold w-full py-4 text-base font-bold shadow-lg shadow-gold/20 hover:shadow-gold/40 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
                      >
                        Submit Enquiry <Send className="h-4 w-4" />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>

            {/* ── Right Column: Contact Info Cards ── */}
            <motion.div variants={fadeUpVariant} className="lg:col-span-5 space-y-6">
              
              {/* Office Card */}
              <div className="glass rounded-3xl p-8 sm:p-10 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold hover:shadow-luxe relative overflow-hidden bg-gradient-to-br from-card/80 to-card/40">
                <div className="flex items-start gap-5">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gold/10 border border-gold/30 text-gold shadow-md">
                    <MapPin className="h-7 w-7" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gold font-bold mb-1">Corporate Head Office</p>
                    <h4 className="text-xl font-display font-bold leading-tight mb-2">SEENI INFRA PVT LTD</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      NO:99/18, 2nd Floor, Padi Kuppam Road,<br/>
                      Gandhi Nagar, Anna Nagar West,<br/>
                      Chennai 600040, Tamil Nadu
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours & Direct Line Grid */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="glass rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-luxe">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/10 border border-gold/20 text-gold mb-4">
                    <Clock className="h-6 w-6" />
                  </span>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground font-bold mb-1">Business Hours</p>
                  <p className="text-base font-bold text-foreground">Mon – Sat</p>
                  <p className="text-xs text-muted-foreground mt-1">09:00 AM – 06:00 PM</p>
                </div>

                <div className="glass rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-luxe">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/10 border border-gold/20 text-gold mb-4">
                    <Phone className="h-6 w-6" />
                  </span>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground font-bold mb-1">Direct Line</p>
                  <p className="text-base font-bold text-foreground">+91 9445657505</p>
                  <a href="tel:+919445657505" className="inline-block text-xs font-bold text-gold hover:underline mt-2">Call Now &rarr;</a>
                </div>
              </div>

              {/* Email Card */}
              <div className="glass rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-luxe flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gold/10 border border-gold/20 text-gold">
                    <Mail className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground font-bold">Email Address</p>
                    <p className="text-base font-bold text-foreground">info@seeni.in</p>
                  </div>
                </div>
                <a href="mailto:info@seeni.in" className="btn-ghost text-xs px-4 py-2 rounded-lg border border-border">Email</a>
              </div>

              {/* WhatsApp & Social Support */}
              <div className="glass rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#25D366]/40 hover:shadow-luxe bg-gradient-to-br from-card/80 to-card/40">
                <div className="flex items-center gap-4 mb-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366]">
                    <MessageCircle className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground font-bold">Instant Support</p>
                    <p className="text-sm font-bold text-foreground">Chat live with our engineering team</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://wa.me/919445657505"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-gold py-3.5 px-5 text-sm bg-[#25D366] hover:bg-[#1ebd5a] text-black font-bold shadow-md shadow-[#25D366]/20 rounded-xl flex items-center justify-center gap-2"
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
