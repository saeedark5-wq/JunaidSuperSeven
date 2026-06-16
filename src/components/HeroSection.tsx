"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import StatsSection from "@/components/StatsSection"
import { AGENT_NAME } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen min-h-[100dvh] flex items-center justify-center overflow-y-auto overflow-x-hidden">
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-10 sm:py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-2 sm:mb-4 lg:mb-6"
        >
          <div className="inline-flex items-center gap-1.5 sm:gap-2 glass px-2 py-0.5 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 rounded-full text-[9px] sm:text-xs lg:text-sm text-gold mb-2 sm:mb-4 lg:mb-6">
            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 rounded-full bg-gold animate-pulse" />
            Premium Dubai Real Estate Services
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-[1.2rem] sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-1 sm:mb-3 lg:mb-5 leading-tight"
        >
          Dubai Real Estate Expert
          <br />
          <span className="gold-gradient text-[1rem] sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl">{AGENT_NAME}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-[11px] sm:text-sm md:text-base lg:text-xl text-white/80 max-w-2xl mx-auto mb-3 sm:mb-5 lg:mb-7"
        >
          10+ Years Experience | International City Specialist | 100K+ Deals Closed
        </motion.p>

        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
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
