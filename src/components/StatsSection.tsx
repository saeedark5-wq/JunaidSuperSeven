"use client"

import { motion } from "framer-motion"
import { Building2, Award, Users, Star } from "lucide-react"

const stats = [
  { icon: Award, value: "10+", label: "Years Experience", sublabel: "In Dubai Real Estate" },
  { icon: Building2, value: "100K+", label: "Deals Closed", sublabel: "Successful Transactions" },
  { icon: Star, value: "100%", label: "Client Satisfaction", sublabel: "Trusted Broker" },
  { icon: Users, value: "50+", label: "Active Listings", sublabel: "Premium Properties" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
}

export default function StatsSection() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 max-w-5xl mx-auto"
    >
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <motion.div
            key={stat.label}
            variants={itemVariants}
            className="relative group"
          >
            <div className="glass rounded-lg sm:rounded-xl lg:rounded-2xl p-1.5 sm:p-3 lg:p-5 text-center card-hover h-full">
              <div className="w-5 h-5 sm:w-9 lg:w-11 sm:h-9 lg:h-11 rounded-full gold-bg flex items-center justify-center mx-auto mb-0.5 sm:mb-2 lg:mb-3 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-3 h-3 sm:w-4 lg:w-5 sm:h-4 lg:h-5 text-black" />
              </div>
              <p className="text-[11px] sm:text-xl lg:text-2xl xl:text-3xl font-bold gold-gradient mb-0 sm:mb-0.5">{stat.value}</p>
              <p className="text-[9px] sm:text-[11px] lg:text-sm font-semibold text-white leading-tight">{stat.label}</p>
              <p className="hidden sm:block text-[9px] lg:text-xs text-white/60 mt-0.5">{stat.sublabel}</p>
            </div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
