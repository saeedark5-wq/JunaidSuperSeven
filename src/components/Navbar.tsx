"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, ChevronDown, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn, COMPANY_NAME, PHONE, generateWhatsAppUrl, WHATSAPP_MESSAGE } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#properties", label: "Properties" },
  { href: "/#about", label: "About" },
  { href: "/#areas", label: "Areas" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#contact", label: "Contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-gold/30 group-hover:border-gold transition-all">
              <Image
                src="/images/super seven logo.jpg"
                alt={COMPANY_NAME}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-bold gold-gradient">{COMPANY_NAME}</p>
              <p className="text-xs text-white/50">Junaid Ali &mdash; Real Estate Expert</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-white/70 hover:text-gold transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${PHONE}`}
              className="hidden md:flex items-center gap-2 px-4 py-2 text-sm text-white/70 hover:text-gold transition-colors rounded-lg hover:bg-white/5"
            >
              <Phone className="w-4 h-4" />
              <span>{PHONE}</span>
            </a>
            <a
              href={generateWhatsAppUrl(WHATSAPP_MESSAGE())}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2 text-sm text-white/70 hover:text-gold transition-colors rounded-lg hover:bg-white/5"
            >
              <Image src="/images/whatsapp-icon.svg" alt="WhatsApp" width={20} height={20} className="w-5 h-5" />
            </a>
            <Link href="/admin">
              <Button variant="ghost" size="sm" className="hidden md:inline-flex gap-2">
                <Shield className="w-4 h-4" />
                Admin
              </Button>
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white/70 hover:text-gold transition-colors"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-white/70 hover:text-gold hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-lg text-white/70 hover:text-gold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {PHONE}
                </a>
                <a
                  href={generateWhatsAppUrl(WHATSAPP_MESSAGE())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-green-500 rounded-lg text-black font-semibold"
                >
                  <Image src="/images/whatsapp-icon.svg" alt="WhatsApp" width={16} height={16} className="w-4 h-4" />
                  WhatsApp Inquiry
                </a>
                <Link
                  href="/admin"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-lg text-white/70 hover:text-gold transition-colors"
                >
                  <Shield className="w-4 h-4" />
                  Admin Dashboard
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
