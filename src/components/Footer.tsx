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
    <footer className="relative overflow-hidden bg-[#2d2d2d] text-gray-200 font-sans pt-8">
      
      {/* ── RealHomes Diagonal Top Edge Cut (Compact) ── */}
      <div 
        className="absolute top-0 left-0 right-0 h-8 bg-background pointer-events-none z-10"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)"
        }}
      />

      {/* ── Diagonal Accent Highlight Line ── */}
      <div 
        className="absolute top-0 left-0 right-0 h-[2.5px] z-20 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, #ff6b00 0%, #d4af37 50%, #ff6b00 100%)",
          boxShadow: "0 2px 8px rgba(255, 107, 0, 0.35)"
        }}
      />

      <div className="relative z-20 mx-auto max-w-7xl px-5 pt-4 pb-6 sm:px-8">
        
        {/* ── Top Bar: Logo & Tagline (Left) + Social Media Icons (Right) ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-5 border-b border-white/10">
          
          {/* Left: Logo & Tagline */}
          <div className="flex items-center gap-3 text-left">
            <Link to="/" className="inline-block shrink-0">
              <img
                src="/assets/logo-transparent.png"
                alt="SEENI INFRA PVT LTD"
                className="h-9 w-auto object-contain drop-shadow"
              />
            </Link>
            <div className="border-l border-white/15 pl-3 py-0.5">
              <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#ff6b00] leading-none">SEENI INFRA PVT LTD</p>
              <p className="text-[11px] text-gray-400 mt-0.5 font-medium leading-none">Crafted With Precision. Built to Last.</p>
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
                className="grid h-8 w-8 place-items-center rounded-full bg-white/5 border border-white/10 text-gray-300 transition-all duration-300 hover:bg-[#ff6b00] hover:border-[#ff6b00] hover:text-white hover:scale-110"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>

        {/* ── Three Columns Grid (Compact) ── */}
        <div className="grid gap-6 md:grid-cols-3 pt-5 pb-5 border-b border-white/10 text-xs">

          {/* Column 1: Quick Links */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#ff6b00] mb-3 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff6b00]" />
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-1.5 font-medium">
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
                    className="inline-flex items-center gap-1 text-gray-300 transition-all duration-200 hover:text-[#ff6b00] hover:translate-x-0.5"
                  >
                    <span className="text-[#ff6b00] text-[10px]">&rsaquo;</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Contact Us */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#ff6b00] mb-3 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff6b00]" />
              Contact Us
            </h3>
            <ul className="space-y-1.5 text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 text-[#ff6b00] shrink-0 mt-0.5" />
                <span className="leading-tight">
                  NO:99/18, 2nd Flr, Padi Kuppam Rd, Anna Nagar W, Chennai 600040
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-[#ff6b00] shrink-0" />
                <a href="tel:+919445657505" className="hover:text-[#ff6b00] transition-colors font-medium">
                  +91 9445657505
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-[#ff6b00] shrink-0" />
                <a href="mailto:info@seeni.in" className="hover:text-[#ff6b00] transition-colors font-medium">
                  info@seeni.in
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Newsletter Signup (Inline 1-row form) */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#ff6b00] mb-3 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff6b00]" />
              Newsletter
            </h3>
            <p className="text-gray-300 leading-snug mb-3">
              Subscribe for corporate updates & insights.
            </p>

            {subscribed ? (
              <div className="p-2.5 rounded-lg bg-[#ff6b00]/10 border border-[#ff6b00]/30 text-center flex items-center justify-center gap-2 text-xs text-white font-medium">
                <CheckCircle2 className="h-4 w-4 text-[#ff6b00]" />
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
                  className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-xs text-white placeholder:text-gray-400 focus:border-[#ff6b00] focus:outline-none transition-all"
                />
                <button
                  type="submit"
                  className="py-2 px-3.5 rounded-lg bg-[#ff6b00] hover:bg-[#e05e00] text-white font-bold text-xs tracking-wide shrink-0 transition-all flex items-center justify-center gap-1 cursor-pointer"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* ── Bottom Bar: Copyright & Back To Top (Compact) ── */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-gray-400 font-medium">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} SEENI INFRA PVT LTD. All rights reserved.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1.5 text-gray-300 hover:text-[#ff6b00] transition-colors cursor-pointer group"
          >
            <span className="uppercase tracking-widest text-[9px] font-bold">Back to Top</span>
            <span className="grid h-6 w-6 place-items-center rounded-full bg-white/5 border border-white/10 group-hover:border-[#ff6b00] group-hover:bg-[#ff6b00] group-hover:text-white transition-all">
              <ArrowUp className="h-3 w-3" />
            </span>
          </button>
        </div>

      </div>
    </footer>
  )
}
