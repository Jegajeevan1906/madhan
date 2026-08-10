import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Instagram, Linkedin, Twitter } from "./Icons"
import { ArrowUp, Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react"
import { useTheme } from "./ThemeContext"

export function Footer() {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
    setTimeout(() => {
      setSubscribed(false)
      setEmail("")
    }, 4000)
  }

  return (
    <footer
      className={`relative overflow-hidden font-sans py-12 border-t transition-colors duration-500 ${
        isDark
          ? "bg-[#0A0A0A] text-slate-200 border-white/10"
          : "bg-white text-slate-700 border-gray-200"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        
        {/* ── Top Bar: Logo & Tagline (Left) + Social Media Icons (Right) ── */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 border-b ${
            isDark ? "border-white/10" : "border-gray-200"
          }`}
        >
          {/* Left: Logo & Tagline */}
          <div className="flex items-center gap-3 text-left">
            <Link to="/" className="inline-block shrink-0">
              <img
                src="/assets/logo-transparent.png"
                alt="SEENI INFRA PVT LTD"
                className={`h-10 w-auto object-contain drop-shadow-sm transition-all duration-300 ${
                  isDark ? "brightness-0 invert opacity-95" : "brightness-0"
                }`}
              />
            </Link>
            <div className={`border-l pl-3 py-0.5 ${isDark ? "border-white/20" : "border-gray-300"}`}>
              <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-gold leading-none">
                SEENI INFRA PVT LTD
              </p>
              <p className={`text-[11px] mt-0.5 font-medium leading-none ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                Crafted With Precision. Built to Last.
              </p>
            </div>
          </div>

          {/* Right: Social Media Icons */}
          <div className="flex items-center gap-2">
            {[
              { href: "https://www.instagram.com/seeniinfra?igsh=OWRpNGhmeXl0a280", label: "Instagram", Icon: Instagram },
              { href: "https://wa.me/919445657505", label: "LinkedIn", Icon: Linkedin },
              { href: "https://twitter.com", label: "Twitter", Icon: Twitter },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className={`grid h-9 w-9 place-items-center rounded-full border transition-all duration-300 hover:bg-gold hover:border-gold hover:text-black hover:scale-105 ${
                  isDark
                    ? "bg-white/5 border-white/10 text-slate-300"
                    : "bg-slate-100 border-gray-200 text-slate-600"
                }`}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* ── Three Columns Grid ── */}
        <div
          className={`grid gap-8 md:grid-cols-3 pt-8 pb-8 border-b text-xs ${
            isDark ? "border-white/10" : "border-gray-200"
          }`}
        >
          {/* Column 1: Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold mb-4 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-2 font-medium">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/blog", label: "Leadership" },
                { to: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`inline-flex items-center gap-1 transition-all duration-200 hover:text-gold hover:translate-x-0.5 ${
                      isDark ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    <span className="text-gold text-[10px]">&rsaquo;</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Contact Us */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold mb-4 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Contact Us
            </h3>
            <ul className={`space-y-2 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  NO:99/18, 2nd Flr, Padi Kuppam Rd, Anna Nagar W, Chennai 600040
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-gold shrink-0" />
                <a href="tel:+919445657505" className="hover:text-gold transition-colors font-medium">
                  +91 9445657505
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-gold shrink-0" />
                <a href="mailto:info@seeni.in" className="hover:text-gold transition-colors font-medium">
                  info@seeni.in
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Newsletter Signup */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold mb-4 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Newsletter
            </h3>
            <p className={`leading-relaxed mb-3 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
              Subscribe for corporate updates & insights.
            </p>

            {subscribed ? (
              <div className="p-2.5 rounded-lg bg-gold/10 border border-gold/30 text-center flex items-center justify-center gap-2 text-xs text-gold font-medium">
                <CheckCircle2 className="h-4 w-4 text-gold" />
                Subscribed!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full rounded-lg px-3 py-2 text-xs border focus:border-gold focus:outline-none transition-all ${
                    isDark
                      ? "bg-white/5 border-white/15 text-white placeholder:text-slate-500"
                      : "bg-slate-50 border-gray-200 text-slate-900 placeholder:text-slate-400"
                  }`}
                />
                <button
                  type="submit"
                  className="py-2 px-3.5 rounded-lg bg-gold hover:bg-gold/80 text-black font-bold text-xs tracking-wide shrink-0 transition-all flex items-center justify-center gap-1 cursor-pointer"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* ── Bottom Bar: Copyright & Back To Top ── */}
        <div className={`pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-medium ${
          isDark ? "text-slate-400" : "text-slate-500"
        }`}>
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} SEENI INFRA PVT LTD. All rights reserved.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`flex items-center gap-2 transition-colors cursor-pointer group ${
              isDark ? "text-slate-300 hover:text-gold" : "text-slate-600 hover:text-gold"
            }`}
          >
            <span className="uppercase tracking-widest text-[10px] font-bold">Back to Top</span>
            <span className={`grid h-6 w-6 place-items-center rounded-full border group-hover:border-gold group-hover:bg-gold group-hover:text-black transition-all ${
              isDark
                ? "bg-white/5 border-white/10 text-slate-300"
                : "bg-slate-100 border-gray-200 text-slate-600"
            }`}>
              <ArrowUp className="h-3 w-3" />
            </span>
          </button>
        </div>

      </div>
    </footer>
  )
}
