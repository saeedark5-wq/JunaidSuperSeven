"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { MapPin, TrendingUp, Building2 } from "lucide-react"
import { featuredAreas } from "@/data/areas"
import Image from "next/image"
import { useState } from "react"

export default function FeaturedAreas() {
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({})

  return (
    <section id="areas" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.03)_0%,transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4">Featured Locations</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Explore <span className="gold-gradient">Prime Areas</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Discover Dubai&apos;s most sought-after communities with expert guidance and market insights
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredAreas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="glass rounded-2xl overflow-hidden card-hover h-full">
                <div className="relative aspect-[16/9] overflow-hidden">
                  {area.image && !imgErrors[area.id] ? (
                    <Image
                      src={area.image}
                      alt={area.name}
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={() => setImgErrors((prev) => ({ ...prev, [area.id]: true }))}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gold/10 to-gold/5 flex items-center justify-center">
                      <Building2 className="w-12 h-12 text-gold/30" />
                    </div>
                  )}
                  <div className="absolute inset-0 gradient-overlay" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{area.name}</h3>
                    <p className="text-sm text-gold">{area.tagline}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm text-white/60 leading-relaxed mb-4">
                    {area.description}
                  </p>

                  <div className="glass rounded-xl p-4 mb-4">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                      <p className="text-sm text-white/80">{area.highlight}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-gold">
                    <MapPin className="w-3 h-3" />
                    <span>{area.stats}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
