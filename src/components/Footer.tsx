import { Link } from "react-router-dom"
import { Instagram, Linkedin, Twitter } from "./Icons"
import { motion } from "framer-motion"
import { useTheme } from "./ThemeContext"
import { ArrowUp } from "lucide-react"

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.06 },
  },
}

const colVariant = {
  hidden: { opacity: 0, y: 36, filter: "blur(8px)" },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
}

const bottomVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
}

export function Footer() {
  const { theme } = useTheme()
  const isLight = theme === "light"

  /* ── Palette tokens ──────────────────────────────────────────── */
  const textBody    = isLight ? "rgba(60, 55, 50, 0.70)"    : "rgba(200,200,200,0.62)"
  const textBodyHov = isLight ? "rgba(20, 18, 14, 0.92)"    : "rgba(230,230,230,0.88)"
  const textLink    = isLight ? "rgba(60, 55, 50, 0.70)"    : "rgba(190,190,190,0.70)"
  const textCopy    = isLight ? "rgba(100, 95, 88, 0.65)"   : "rgba(160,160,160,0.45)"
  const socialBg    = isLight ? "rgba(0,0,0,0.04)"          : "rgba(255,255,255,0.04)"
  const socialBd    = isLight ? "rgba(0,0,0,0.12)"          : "rgba(255,255,255,0.08)"
  const socialCol   = isLight ? "rgba(80,75,70,0.70)"       : "rgba(200,200,200,0.65)"
  const goldAccent  = isLight ? "#C89B2C"                   : "#d4af37"
  const goldGlow    = isLight ? "rgba(200,155,44,0.22)"     : "rgba(212,175,55,0.28)"
  const sepColor    = isLight
    ? "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.06) 30%, rgba(0,0,0,0.08) 50%, rgba(0,0,0,0.06) 70%, transparent 100%)"
    : "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 30%, rgba(255,255,255,0.06) 70%, transparent 100%)"

  return (
    <footer className="relative overflow-hidden">

      {/* ── Dark theme: layered premium background ─────────────────────── */}
      {!isLight && (
        <>
          {/* Base dark gradient */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
              background: "linear-gradient(160deg, #080808 0%, #0e0e0e 35%, #0b0b0b 65%, #070707 100%)",
            }}
          />
          {/* Gold radial glow — top-left */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
              background: "radial-gradient(ellipse 55% 38% at 8% 0%, rgba(212,175,55,0.09) 0%, transparent 70%)",
            }}
          />
          {/* Gold radial glow — bottom-right */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
              background: "radial-gradient(ellipse 45% 32% at 92% 100%, rgba(212,175,55,0.06) 0%, transparent 70%)",
            }}
          />
          {/* Edge vignette */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
              background: "radial-gradient(ellipse 110% 110% at 50% 50%, transparent 50%, rgba(0,0,0,0.65) 100%)",
            }}
          />
          {/* Blueprint noise texture */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, opacity: 0.022,
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Crect width='60' height='60' fill='none'/%3E%3Cpath d='M0 0h60v60H0z' fill='none' stroke='%23d4af37' stroke-width='0.3' stroke-dasharray='2 4'/%3E%3Cline x1='30' y1='0' x2='30' y2='60' stroke='%23d4af37' stroke-width='0.15' stroke-dasharray='2 8'/%3E%3Cline x1='0' y1='30' x2='60' y2='30' stroke='%23d4af37' stroke-width='0.15' stroke-dasharray='2 8'/%3E%3C/svg%3E")`,
            }}
          />
        </>
      )}

      {/* ── Light theme: subtle warm radial glow ──────────────────────── */}
      {isLight && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
            background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212,175,55,0.04) 0%, transparent 60%)",
          }}
        />
      )}

      {/* ── Premium gold top border with glow ──────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "1px", zIndex: 2, pointerEvents: "none",
          background: "linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.12) 12%, rgba(212,175,55,0.55) 38%, rgba(244,208,63,0.85) 50%, rgba(212,175,55,0.55) 62%, rgba(212,175,55,0.12) 88%, transparent 100%)",
          boxShadow: "0 0 24px 0 rgba(212,175,55,0.22), 0 0 48px 0 rgba(212,175,55,0.08)",
        }}
      />

      {/* ═══════════════════════════════════════════════════════════════
          MAIN CONTENT
      ═══════════════════════════════════════════════════════════════ */}
      <div
        className="relative z-10 px-5 pb-14 pt-20 sm:px-8 sm:pt-24"
        style={{ background: isLight ? "#ffffff" : "transparent" }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariant}
          className="mx-auto max-w-7xl"
        >
          {/* ─── COLUMNS GRID ─── */}
          <div className="grid gap-12 md:grid-cols-3 md:gap-10 lg:gap-16">

            {/* ── Column 1: Brand ─────────────────────────────────────── */}
            <motion.div variants={colVariant} className="flex flex-col">

              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block w-fit"
                style={{ filter: "drop-shadow(0 0 0px rgba(212,175,55,0))", transition: "filter 0.4s ease" }}
                onMouseEnter={e => (e.currentTarget.style.filter = "drop-shadow(0 0 14px rgba(212,175,55,0.35))")}
                onMouseLeave={e => (e.currentTarget.style.filter = "drop-shadow(0 0 0px rgba(212,175,55,0))")}
              >
                <img
                  src="/assets/logo-transparent.png"
                  alt="SEENI INFRA PVT LTD"
                  className="h-10 w-auto object-contain"
                  style={{
                    maxWidth: "180px",
                    filter: isLight
                      ? "brightness(0) saturate(100%) invert(8%) sepia(10%) saturate(200%) hue-rotate(10deg)"
                      : "none",
                  }}
                />
              </motion.div>

              {/* Description */}
              <p
                className="mt-7 max-w-sm text-sm leading-[1.9] font-medium"
                style={{ color: textBody, transition: "color 0.3s ease" }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = textBodyHov)}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = textBody)}
              >
                A premium construction and infrastructure development company delivering landmark projects across residential, commercial, and industrial sectors with uncompromising quality.
              </p>

              {/* Gold micro-rule */}
              <div
                aria-hidden="true"
                className="mt-7"
                style={{
                  height: "1.5px",
                  width: "48px",
                  borderRadius: "2px",
                  background: `linear-gradient(90deg, ${goldAccent}, #f4d03f)`,
                  opacity: isLight ? 0.7 : 0.55,
                }}
              />
            </motion.div>

            {/* ── Column 2: Quick Links ────────────────────────────────── */}
            <motion.div variants={colVariant}>
              <h4
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "10px",
                  fontWeight: 900,
                  letterSpacing: "0.30em",
                  textTransform: "uppercase" as const,
                  color: goldAccent,
                  marginBottom: "1.75rem",
                }}
              >
                Quick Links
              </h4>

              <ul className="space-y-[13px]">
                {[
                  { to: "/",         label: "Home"     },
                  { to: "/about",    label: "About"    },
                  { to: "/services", label: "Services" },
                  { to: "/blog",     label: "Blog"     },
                  { to: "/contact",  label: "Contact"  },
                ].map(({ to, label }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="group flex items-center gap-2.5 transition-all duration-300"
                      style={{
                        color: textLink,
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        letterSpacing: "0.01em",
                        textDecoration: "none",
                        willChange: "color, transform",
                      }}
                      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = goldAccent)}
                      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = textLink)}
                    >
                      {/* Animated gold dash */}
                      <span
                        className="block h-[1.5px] rounded-full transition-all duration-300 group-hover:w-5"
                        style={{
                          width: 0,
                          flexShrink: 0,
                          background: `linear-gradient(90deg, ${goldAccent}, #f4d03f)`,
                        }}
                      />
                      {/* Label slides right on hover */}
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        {label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* ── Column 3: Contact Information ───────────────────────── */}
            <motion.div variants={colVariant}>
              <h4
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "10px",
                  fontWeight: 900,
                  letterSpacing: "0.30em",
                  textTransform: "uppercase" as const,
                  color: goldAccent,
                  marginBottom: "1.75rem",
                }}
              >
                Contact Information
              </h4>

              <ul className="space-y-5">
                {/* Address */}
                <li
                  className="text-sm leading-[1.85] font-medium transition-all duration-300"
                  style={{ color: textLink }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.color = isLight ? "rgba(20,18,14,0.85)" : "rgba(230,230,230,0.88)"
                    el.style.transform = "translateY(-1px)"
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.color = textLink
                    el.style.transform = "translateY(0)"
                  }}
                >
                  NO:99/18, 2nd Floor, Padi Kuppam Road,<br />Gandhi Nagar, Anna Nagar West,<br />Chennai 600040
                </li>

                {/* Phone */}
                <li>
                  <a
                    href="tel:+919445657505"
                    className="text-sm font-semibold transition-all duration-300 inline-block"
                    style={{ color: textLink, letterSpacing: "0.01em" }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.color = goldAccent
                      el.style.transform = "translateY(-1px)"
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.color = textLink
                      el.style.transform = "translateY(0)"
                    }}
                  >
                    +91 9445657505
                  </a>
                </li>

                {/* Email */}
                <li>
                  <a
                    href="mailto:info@seeni.in"
                    className="text-sm font-semibold transition-all duration-300 inline-block"
                    style={{ color: textLink, letterSpacing: "0.01em" }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.color = goldAccent
                      el.style.transform = "translateY(-1px)"
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.color = textLink
                      el.style.transform = "translateY(0)"
                    }}
                  >
                    info@seeni.in
                  </a>
                </li>
              </ul>

              {/* ── Social Icons ── */}
              <div className="mt-9 flex gap-3">
                {[
                  { href: "https://www.instagram.com/seeniinfra?igsh=OWRpNGhmeXl0a280", label: "Instagram", Icon: Instagram },
                  { href: "javascript:void(0)", label: "LinkedIn", Icon: Linkedin },
                  { href: "javascript:void(0)", label: "Twitter",  Icon: Twitter  },
                ].map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    className="group relative grid h-11 w-11 place-items-center rounded-full transition-all duration-300 overflow-hidden"
                    style={{
                      background: socialBg,
                      border: `1px solid ${socialBd}`,
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                      color: socialCol,
                      boxShadow: isLight ? "0 1px 4px rgba(0,0,0,0.06)" : "none",
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.border    = `1px solid ${isLight ? "rgba(200,155,44,0.55)" : "rgba(212,175,55,0.6)"}`
                      el.style.background = isLight ? "rgba(200,155,44,0.08)" : "rgba(212,175,55,0.08)"
                      el.style.color     = goldAccent
                      el.style.transform = "scale(1.12) translateY(-2px)"
                      el.style.boxShadow = `0 6px 20px ${goldGlow}, 0 2px 8px rgba(0,0,0,${isLight ? "0.08" : "0.35"})`
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.border    = `1px solid ${socialBd}`
                      el.style.background = socialBg
                      el.style.color     = socialCol
                      el.style.transform = "scale(1) translateY(0)"
                      el.style.boxShadow = isLight ? "0 1px 4px rgba(0,0,0,0.06)" : "none"
                    }}
                    onMouseDown={e => {
                      const el = e.currentTarget as HTMLElement
                      const ripple = document.createElement("span")
                      ripple.style.cssText = `
                        position:absolute;width:44px;height:44px;border-radius:50%;
                        background:${isLight ? "rgba(200,155,44,0.18)" : "rgba(212,175,55,0.22)"};
                        transform:scale(0);animation:footer-ripple 0.5s ease-out forwards;
                        pointer-events:none;top:0;left:0;
                      `
                      el.appendChild(ripple)
                      setTimeout(() => ripple.remove(), 550)
                    }}
                  >
                    <Icon className="h-4 w-4 relative z-10" />
                  </a>
                ))}
              </div>
            </motion.div>

          </div>{/* end columns grid */}

          {/* ═══════════════════════════════════════════════════════════
              BOTTOM BAR
          ═══════════════════════════════════════════════════════════ */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={bottomVariant}
            className="mt-16 sm:mt-20"
          >
            {/* Premium separator with gold centre-dot */}
            <div
              aria-hidden="true"
              style={{ height: "1px", background: sepColor, position: "relative" }}
            >
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: isLight ? "rgba(200,155,44,0.55)" : "rgba(212,175,55,0.6)",
                  boxShadow: `0 0 8px 2px ${isLight ? "rgba(200,155,44,0.25)" : "rgba(212,175,55,0.3)"}`,
                }}
              />
            </div>

            {/* Copyright + Back to Top */}
            <div
              className="flex flex-col items-center justify-between gap-5 pt-7 sm:flex-row"
              style={{ color: textCopy }}
            >
              {/* Copyright */}
              <p
                className="text-xs font-semibold transition-all duration-300 text-center sm:text-left"
                style={{ letterSpacing: "0.05em", lineHeight: 1.7 }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.color = isLight ? "rgba(60,55,50,0.80)" : "rgba(200,200,200,0.75)"
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.color = ""
                }}
              >
                &copy; {new Date().getFullYear()} SEENI INFRA PVT LTD. All rights reserved.
              </p>

              {/* Back to Top — premium pill with circular arrow icon */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="group flex items-center gap-2.5 transition-all duration-300"
                style={{
                  color: textCopy,
                  fontSize: "10px",
                  fontWeight: 900,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.color = goldAccent
                  el.style.transform = "translateY(-2px)"
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.color = ""
                  el.style.transform = "translateY(0)"
                }}
              >
                Back to Top
                <span
                  className="grid h-7 w-7 place-items-center rounded-full"
                  style={{
                    border: `1px solid ${isLight ? "rgba(200,155,44,0.35)" : "rgba(212,175,55,0.25)"}`,
                    background: isLight ? "rgba(200,155,44,0.06)" : "rgba(212,175,55,0.06)",
                    transition: "border-color 300ms, background 300ms, box-shadow 300ms, transform 300ms",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = isLight ? "rgba(200,155,44,0.65)" : "rgba(212,175,55,0.6)"
                    el.style.background  = isLight ? "rgba(200,155,44,0.14)" : "rgba(212,175,55,0.14)"
                    el.style.boxShadow   = `0 0 12px ${isLight ? "rgba(200,155,44,0.3)" : "rgba(212,175,55,0.3)"}`
                    el.style.transform   = "translateY(-2px)"
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = isLight ? "rgba(200,155,44,0.35)" : "rgba(212,175,55,0.25)"
                    el.style.background  = isLight ? "rgba(200,155,44,0.06)" : "rgba(212,175,55,0.06)"
                    el.style.boxShadow   = "none"
                    el.style.transform   = "translateY(0)"
                  }}
                >
                  <ArrowUp className="h-3.5 w-3.5" />
                </span>
              </button>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Ripple keyframe */}
      <style>{`
        @keyframes footer-ripple {
          to { transform: scale(1); opacity: 0; }
        }
      `}</style>
    </footer>
  )
}
