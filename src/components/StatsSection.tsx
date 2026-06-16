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
            <div className="glass rounded-xl sm:rounded-2xl p-2 sm:p-4 lg:p-6 text-center card-hover h-full">
              <div className="w-7 h-7 sm:w-10 lg:w-12 sm:h-10 lg:h-12 rounded-full gold-bg flex items-center justify-center mx-auto mb-1 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-3.5 h-3.5 sm:w-5 lg:w-6 sm:h-5 lg:h-6 text-black" />
              </div>
              <p className="text-sm sm:text-2xl lg:text-3xl xl:text-4xl font-bold gold-gradient mb-0.5 sm:mb-1">{stat.value}</p>
              <p className="text-[10px] sm:text-xs lg:text-sm font-semibold text-white mb-0.5 leading-tight">{stat.label}</p>
              <p className="hidden sm:block text-[10px] lg:text-xs text-white/60">{stat.sublabel}</p>
            </div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
