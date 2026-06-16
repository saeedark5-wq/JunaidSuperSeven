"use client"

import { motion } from "framer-motion"
import { ArrowDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import StatsSection from "@/components/StatsSection"
import { generateWhatsAppUrl, WHATSAPP_MESSAGE, AGENT_NAME } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/super-seven-hero.jpg"
          alt="Dubai Skyline"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)]" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 sm:pt-20 lg:pt-24 pb-6 sm:pb-12 lg:pb-16">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-3 sm:mb-6"
        >
          <div className="inline-flex items-center gap-2 glass px-2.5 py-1 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-sm text-gold mb-4 sm:mb-6">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gold animate-pulse" />
            Premium Dubai Real Estate Services
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-[1.5rem] sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-2 sm:mb-4 lg:mb-6 leading-tight"
        >
          Dubai Real Estate Expert
          <br />
          <span className="gold-gradient text-[1.25rem] sm:text-3xl md:text-4xl lg:text-6xl">{AGENT_NAME}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-sm sm:text-base md:text-xl text-white/80 max-w-2xl mx-auto mb-4 sm:mb-6 lg:mb-8"
        >
          10+ Years Experience | International City Specialist | 100K+ Deals Closed
        </motion.p>

        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-8 lg:mb-12"
        >
          <a
            href={generateWhatsAppUrl(WHATSAPP_MESSAGE())}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="whatsapp" size="xl" className="gap-2 sm:gap-3 w-full sm:w-auto text-sm sm:text-base md:text-lg text-white sm:px-8 md:px-10">
              <Image src="/images/whatsapp-icon.svg" alt="WhatsApp" width={20} height={20} className="w-4 h-4 sm:w-5 sm:h-5" />
              WhatsApp Inquiry
            </Button>
          </a>
          <Link href="#properties">
            <Button variant="outline" size="xl" className="gap-2 sm:gap-3 w-full sm:w-auto text-sm sm:text-base md:text-lg sm:px-8 md:px-10">
              View Properties
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <StatsSection />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <Link href="#properties">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-white/40 hover:text-gold transition-colors"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  )
}
