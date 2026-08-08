import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "./ThemeContext"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  const links = [
    { name: "Home",     href: "/" },
    { name: "About",    href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog",     href: "/blog" },
    { name: "Contact",  href: "/contact" },
  ]

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href)

  return (
    <>
      {/* ── Main Header ── */}
      <header
        className={cn(
          "navbar fixed inset-x-0 top-0 z-50 border-b py-4 sm:py-5 transition-all duration-500 ease-in-out",
          (isScrolled || isMobileMenuOpen)
            ? "navbar--scrolled"
            : "border-transparent bg-transparent"
        )}
      >
        <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8 lg:grid-cols-[1fr_auto_1fr]">

          {/* Logo */}
          <Link to="/" className="min-w-0 flex items-center">
            <img
              src="/assets/logo-transparent.png"
              alt="SEENI INFRA PVT LTD"
              className="h-13 sm:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
              style={{
                maxWidth: "240px",
                filter: "drop-shadow(0px 2px 10px rgba(0,0,0,0.55)) drop-shadow(0px 0px 6px rgba(212,175,55,0.18))",
              }}
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-9 lg:flex">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "navbar-link group",
                  isActive(link.href) && "navbar-link--active"
                )}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center justify-end gap-3">

            {/* Theme toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="navbar-icon-btn grid place-items-center hover:scale-110 active:scale-95 transition-transform"
              aria-label="Toggle theme"
            >
              {theme === "dark"
                ? <Sun  className="h-4 w-4 sm:h-5 sm:w-5" />
                : <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
              }
            </button>

            {/* Get Quote CTA */}
            <Link to="/contact" className="btn-gold hidden md:inline-flex hover:-translate-y-0.5 transition-transform">
              Get Quote
            </Link>

            {/* Hamburger */}
            <button
              aria-label="Toggle menu"
              className="navbar-icon-btn grid place-items-center lg:hidden hover:scale-110 active:scale-95 transition-transform"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen
                ? <X    className="h-4 w-4 sm:h-5 sm:w-5" />
                : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
              }
            </button>

          </div>
        </nav>
      </header>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden bg-black/10 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[88px] left-[4%] right-[4%] w-[92%] bg-card rounded-[24px] border border-border shadow-[0_8px_32px_rgba(0,0,0,0.12)] p-6 flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col gap-2">
                {links.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 + 0.1 }}
                  >
                    <Link
                      to={link.href}
                      className={cn(
                        "flex items-center px-4 py-3 rounded-xl text-[18px] sm:text-[20px] font-bold tracking-[0.5px] leading-[1.6] transition-all",
                        isActive(link.href) 
                          ? "bg-gold/10 text-gold border-l-[3px] border-gold shadow-sm" 
                          : "text-foreground hover:bg-muted hover:text-gold border-l-[3px] border-transparent"
                      )}
                      style={{
                        color: isActive(link.href) ? "var(--gold)" : "inherit"
                      }}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 pt-6 border-t border-border"
              >
                <Link to="/contact" className="btn-gold w-full py-4 text-[18px]">
                  Get Quote
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
