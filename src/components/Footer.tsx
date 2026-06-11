import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { COMPANY_NAME, AGENT_NAME, PHONE, EMAIL, OFFICE_ADDRESS, generateWhatsAppUrl, WHATSAPP_MESSAGE } from "@/lib/utils"

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/90">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.05)_0%,transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gold/30">
                <Image
                  src="/images/super seven logo.jpg"
                  alt={COMPANY_NAME}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-base font-bold gold-gradient">{COMPANY_NAME}</p>
                <p className="text-xs text-white/50">{AGENT_NAME}</p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              {AGENT_NAME} is a highly experienced real estate professional in Dubai with over 10 years of expertise in property sales and leasing.
            </p>
            <div className="flex gap-3">
              <a
                href={generateWhatsAppUrl(WHATSAPP_MESSAGE())}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-black hover:bg-green-400 transition-all"
              >
                <Image src="/images/whatsapp-icon.svg" alt="WhatsApp" width={20} height={20} className="w-5 h-5" />
              </a>
              <a
                href={`tel:${PHONE}`}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-gold hover:border-gold transition-all"
              >
                <Image src="/images/icon-phone.svg" alt="Phone" width={20} height={20} className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-gold hover:border-gold transition-all"
              >
                <Image src="/images/icon-email.svg" alt="Email" width={20} height={20} className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/#properties", label: "Properties" },
                { href: "/#about", label: "About Us" },
                { href: "/#areas", label: "Featured Areas" },
                { href: "/#testimonials", label: "Testimonials" },
                { href: "/#contact", label: "Contact" },
                { href: "/admin", label: "Admin" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-white/50 hover:text-gold transition-colors group"
                  >
                    <ChevronRight className="w-3 h-3 text-gold/50 group-hover:text-gold transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${PHONE}`} className="flex items-start gap-3 text-sm text-white/60 hover:text-gold transition-colors">
                  <Image src="/images/icon-phone.svg" alt="Phone" width={16} height={16} className="w-4 h-4 mt-0.5 shrink-0" style={{ filter: "brightness(0) saturate(100%) invert(53%) sepia(91%) saturate(2150%) hue-rotate(199deg) brightness(100%) contrast(101%)" }} />
                  <span>{PHONE}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-start gap-3 text-sm text-white/60 hover:text-gold transition-colors">
                  <Image src="/images/icon-email.svg" alt="Email" width={16} height={16} className="w-4 h-4 mt-0.5 shrink-0" style={{ filter: "brightness(0) saturate(100%) invert(53%) sepia(91%) saturate(2150%) hue-rotate(199deg) brightness(100%) contrast(101%)" }} />
                  <span>{EMAIL}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-white/60">
                  <Image src="/images/icon-location.svg" alt="Location" width={16} height={16} className="w-4 h-4 mt-0.5 shrink-0" style={{ filter: "brightness(0) saturate(100%) invert(53%) sepia(91%) saturate(2150%) hue-rotate(199deg) brightness(100%) contrast(101%)" }} />
                  <span>{OFFICE_ADDRESS}</span>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">Business Hours</h4>
            <div className="space-y-3 text-sm text-white/60">
              <div className="flex justify-between">
                <span>Mon &ndash; Thu</span>
                <span className="text-white/80">10 AM &ndash; 7:30 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Friday</span>
                <span className="text-white/80">10 AM &ndash; 12 PM &amp; 2:30 &ndash; 7:30 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white/80">10 AM &ndash; 7:30 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-red-400">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
          <p>Designed &amp; Developed by Muhammad Saeed</p>
        </div>
      </div>
    </footer>
  )
}
