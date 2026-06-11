"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MessageCircle, Award, Shield, Target, TrendingUp, X } from "lucide-react"
import { AGENT_NAME, generateWhatsAppUrl, WHATSAPP_MESSAGE } from "@/lib/utils"
import Image from "next/image"

const highlights = [
  { icon: Award, label: "10+ Years Experience", desc: "Deep market knowledge and proven track record" },
  { icon: Shield, label: "RERA Certified", desc: "Registered & certified by Dubai RERA" },
  { icon: Target, label: "Area Specialist", desc: "International City, Warsan & Sports City expert" },
  { icon: TrendingUp, label: "100K+ Deals Closed", desc: "Successful transactions across Dubai" },
]

export default function AboutSection() {
  const [showCertificate, setShowCertificate] = useState(false)
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(212,175,55,0.05)_0%,transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/Junaid Ali.jfif"
                alt={AGENT_NAME}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                unoptimized
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 gold-bg rounded-2xl flex items-center justify-center hidden md:flex">
              <div className="text-center">
                <p className="text-2xl font-bold text-black">100K+</p>
                <p className="text-xs text-black/70 font-medium">Deals Closed</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4">About Me</Badge>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Your Trusted <span className="gold-gradient">Dubai Real Estate</span> Expert
            </h2>

            <p className="text-white/60 leading-relaxed mb-8">
              {AGENT_NAME} is a dynamic and highly experienced real estate professional based in Dubai, UAE,
              with over 10 years of expertise in the property market. Originally from Pakistan, he has built
              a strong reputation for his deep knowledge, dedication, and client-focused approach.
              Specializing in Dubai&apos;s rapidly growing communities&mdash;especially International City, Warsan,
              Dubai Sports City, and Skycourts&mdash;he has successfully assisted countless clients in buying,
              selling, and renting properties across the city.
            </p>
            <p className="text-white/50 leading-relaxed mb-8 text-sm">
              Known for his energetic work style and strong negotiation skills, he provides honest guidance
              and end-to-end support to investors, families, and first-time buyers. His mastery of Dubai&apos;s
              real estate landscape allows him to identify the best investment opportunities and deliver
              maximum value to his clients. {AGENT_NAME} works with <strong className="text-white/80">Super Seven Real Estate Brokers</strong>,
               a RERA Certified brokerage. He is also a RERA Certified real estate professional dealing in Sales and Rentals all over Dubai.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.label}
                    onClick={item.label === "RERA Certified" ? () => setShowCertificate(true) : undefined}
                    className={`glass rounded-xl p-4 flex items-start gap-3 ${item.label === "RERA Certified" ? "cursor-pointer hover:bg-white/[0.08] transition-colors" : ""}`}
                  >
                    <div className="w-10 h-10 rounded-lg gold-bg flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{item.label}</p>
                      <p className="text-xs text-white/40">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <a
              href={generateWhatsAppUrl(WHATSAPP_MESSAGE())}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp" size="lg" className="gap-3">
                <MessageCircle className="w-5 h-5" />
                Discuss Your Requirements
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      {showCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setShowCertificate(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-2xl w-full rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowCertificate(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <Image
              src="/images/Broker Card.jfif"
              alt="RERA Certificate"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
              unoptimized
            />
          </motion.div>
        </div>
      )}
    </section>
  )
}
