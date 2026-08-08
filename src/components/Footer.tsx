import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Instagram, Linkedin, Twitter } from "./Icons"
import { ArrowUp, Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react"

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 4000);
  };

  return (
    <footer className="relative overflow-hidden bg-[#2d2d2d] text-gray-200 font-sans pt-12">
      
      {/* ── Diagonal Top Edge Cut Overlay (RealHomes style) ── */}
      <div 
        className="absolute top-0 left-0 right-0 h-12 bg-background pointer-events-none z-10"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)"
        }}
      />

      {/* ── Diagonal Accent Highlight Line ── */}
      <div 
        className="absolute top-0 left-0 right-0 h-[3px] z-20 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, #ff6b00 0%, #d4af37 50%, #ff6b00 100%)",
          boxShadow: "0 2px 10px rgba(255, 107, 0, 0.4)"
        }}
      />

      <div className="relative z-20 mx-auto max-w-7xl px-5 pt-8 pb-12 sm:px-8">
        
        {/* ── Top Bar: Logo & Tagline (Left) + Social Icons (Right) ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-white/10">
          
          {/* Left: Logo + Tagline */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            <Link to="/" className="inline-block shrink-0">
              <img
                src="/assets/logo-transparent.png"
                alt="SEENI INFRA PVT LTD"
                className="h-12 w-auto object-contain drop-shadow-md"
              />
            </Link>
            <div className="sm:border-l sm:border-white/15 sm:pl-4 py-1">
              <p className="text-xs uppercase tracking-[0.25em] font-bold text-[#ff6b00]">SEENI INFRA PVT LTD</p>
              <p className="text-xs text-gray-400 mt-0.5 font-medium">Crafted With Precision. Built to Last.</p>
            </div>
          </div>

          {/* Right: Social Media Icons */}
          <div className="flex items-center gap-3">
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
                className="grid h-10 w-10 place-items-center rounded-full bg-white/5 border border-white/10 text-gray-300 transition-all duration-300 hover:bg-[#ff6b00] hover:border-[#ff6b00] hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-[#ff6b00]/30"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* ── Three Columns Grid ── */}
        <div className="grid gap-10 md:grid-cols-3 pt-10 pb-10 border-b border-white/10">

          {/* Column 1: Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-[#ff6b00] mb-6 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#ff6b00]" />
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services & Capabilities" },
                { to: "/blog", label: "Executive Leadership" },
                { to: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="inline-flex items-center gap-2 text-gray-300 transition-all duration-300 hover:text-[#ff6b00] hover:translate-x-1"
                  >
                    <span className="text-[#ff6b00] text-xs">&rsaquo;</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Contact Us */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-[#ff6b00] mb-6 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#ff6b00]" />
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#ff6b00] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  NO:99/18, 2nd Floor, Padi Kuppam Road,<br />
                  Gandhi Nagar, Anna Nagar West,<br />
                  Chennai 600040, Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#ff6b00] shrink-0" />
                <a href="tel:+919445657505" className="hover:text-[#ff6b00] transition-colors font-medium">
                  +91 9445657505
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#ff6b00] shrink-0" />
                <a href="mailto:info@seeni.in" className="hover:text-[#ff6b00] transition-colors font-medium">
                  info@seeni.in
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Newsletter Signup */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-[#ff6b00] mb-6 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#ff6b00]" />
              Newsletter Signup
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-5">
              Subscribe to receive latest project updates, infrastructure insights, and corporate announcements.
            </p>

            {subscribed ? (
              <div className="p-4 rounded-xl bg-[#ff6b00]/10 border border-[#ff6b00]/30 text-center flex items-center justify-center gap-2 text-sm text-white font-medium">
                <CheckCircle2 className="h-5 w-5 text-[#ff6b00]" />
                Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:border-[#ff6b00] focus:outline-none focus:ring-2 focus:ring-[#ff6b00]/20 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#ff6b00] hover:bg-[#e05e00] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#ff6b00]/20 transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5 cursor-pointer"
                >
                  Subscribe Now <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* ── Bottom Bar: Copyright & Back To Top ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-medium">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} SEENI INFRA PVT LTD. All rights reserved.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-gray-300 hover:text-[#ff6b00] transition-colors cursor-pointer group"
          >
            <span className="uppercase tracking-widest text-[10px] font-bold">Back to Top</span>
            <span className="grid h-7 w-7 place-items-center rounded-full bg-white/5 border border-white/10 group-hover:border-[#ff6b00] group-hover:bg-[#ff6b00] group-hover:text-white transition-all">
              <ArrowUp className="h-3.5 w-3.5" />
            </span>
          </button>
        </div>

      </div>
    </footer>
  )
}
