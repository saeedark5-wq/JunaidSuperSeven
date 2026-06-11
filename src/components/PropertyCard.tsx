"use client"

import { motion } from "framer-motion"
import { Bed, Bath, Move, MapPin, MessageCircle, Heart, Building2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Property, generateWhatsAppUrl, WHATSAPP_MESSAGE } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface PropertyCardProps {
  property: Property
  index: number
}

const typeVariant: Record<string, "rent" | "buy" | "offplan"> = {
  Rent: "rent",
  Buy: "buy",
  "Off-plan": "offplan",
}

export default function PropertyCard({ property, index }: PropertyCardProps) {
  const [imgError, setImgError] = useState(false)
  const mainImage = property.images?.[0]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="glass rounded-2xl overflow-hidden card-hover h-full flex flex-col">
        <Link href={`/properties/${property.id}`} className="relative block aspect-[4/3] overflow-hidden group">
          {mainImage && !imgError ? (
            <Image
              src={mainImage}
              alt={property.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gold/10 to-gold/5 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full gold-bg flex items-center justify-center mx-auto mb-3">
                  <Building2 className="w-8 h-8 text-black" />
                </div>
                <p className="text-sm text-white/40">Image Coming Soon</p>
              </div>
            </div>
          )}
          <div className="absolute inset-0 gradient-overlay" />
          <div className="absolute top-3 left-3 flex gap-2">
            <Badge variant={typeVariant[property.type] || "default"}>
              {property.type}
            </Badge>
            {property.featured && (
              <Badge variant="featured">Featured</Badge>
            )}
          </div>
          <div className="absolute bottom-3 left-3 right-3">
            <p className="text-lg font-bold gold-gradient">{property.price}</p>
          </div>
        </Link>

        <div className="p-5 flex-1 flex flex-col">
          <Link href={`/properties/${property.id}`}>
            <h3 className="text-base font-semibold text-white mb-2 line-clamp-2 hover:text-gold transition-colors">
              {property.title}
            </h3>
          </Link>

          <div className="flex items-start gap-2 mb-4">
            <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
            <p className="text-sm text-white/50">{property.location}</p>
          </div>

          <div className="flex items-center gap-4 mb-4 text-sm text-white/60">
            <div className="flex items-center gap-1.5">
              <Bed className="w-4 h-4 text-gold" />
              <span>{property.bedrooms} {property.bedrooms === 1 ? "Bed" : "Beds"}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Bath className="w-4 h-4 text-gold" />
              <span>{property.bathrooms} Bath</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Move className="w-4 h-4 text-gold" />
              <span>{property.area}</span>
            </div>
          </div>

          <p className="text-sm text-white/40 line-clamp-2 mb-4 flex-1">
            {property.description}
          </p>

          <a
            href={generateWhatsAppUrl(WHATSAPP_MESSAGE(property.title, property.location))}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto"
          >
            <Button variant="whatsapp" className="w-full gap-2">
              <MessageCircle className="w-4 h-4" />
              Inquiry via WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </motion.div>
  )
}
