"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  Bed,
  Bath,
  Move,
  MapPin,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Building2,
  Calendar,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { defaultProperties } from "@/data/properties"
import { generateWhatsAppUrl, WHATSAPP_MESSAGE, Property } from "@/lib/utils"

export default function PropertyDetailPage() {
  const params = useParams()
  const [currentImage, setCurrentImage] = useState(0)
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({})
  const [property, setProperty] = useState<Property | undefined>()

  useEffect(() => {
    const stored = localStorage.getItem("junaid_admin_properties")
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        if (Array.isArray(parsed) && parsed.length > 0) {
          const found = parsed.find((p: Property) => p.id === params.id)
          if (found) {
            setProperty(found)
            return
          }
        }
      } catch {}
    }
    const found = defaultProperties.find((p) => p.id === params.id)
    setProperty(found)
  }, [params.id])

  if (!property) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4 pt-24">
        <div className="text-center">
          <Building2 className="w-16 h-16 text-muted-strong mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-foreground mb-2">Property Not Found</h1>
          <p className="text-muted-strong mb-6">This property may have been removed or is no longer available.</p>
          <Link href="/#properties">
            <Button variant="gold">Browse Properties</Button>
          </Link>
        </div>
      </div>
    )
  }

  const images = property.images.filter((img) => !imgErrors[img])

  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/#properties"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-gold transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Properties
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="glass rounded-2xl overflow-hidden">
              <div className="relative aspect-[4/3]">
                {images.length > 0 ? (
                  <Image
                    src={images[currentImage]}
                    alt={property.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    onError={() => {
                      setImgErrors((prev) => ({ ...prev, [images[currentImage]]: true }))
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gold/10 to-gold/5 flex items-center justify-center">
                    <Building2 className="w-16 h-16 text-gold/30" />
                  </div>
                )}

                {images.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gold/80 hover:text-black transition-all"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gold/80 hover:text-black transition-all"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                <div className="absolute top-3 left-3 flex gap-2">
                  <Badge variant={property.type === "Rent" ? "rent" : property.type === "Buy" ? "buy" : "offplan"}>
                    {property.type}
                  </Badge>
                  {property.featured && <Badge variant="featured">Featured</Badge>}
                </div>
              </div>

              {images.length > 1 && (
                <div className="flex gap-2 p-4 overflow-x-auto">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImage(i)}
                      className={`relative w-16 h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                        i === currentImage ? "border-gold" : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${property.title} - Image ${i + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        onError={() => {
                          setImgErrors((prev) => ({ ...prev, [img]: true }))
                        }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                {property.title}
              </h1>

              <div className="flex items-start gap-2 mb-4">
                <MapPin className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                <p className="text-muted">{property.location}</p>
              </div>

              <p className="text-3xl font-bold gold-gradient mb-6">{property.price}</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="glass rounded-xl p-4 text-center">
                <Bed className="w-5 h-5 text-gold mx-auto mb-1" />
                <p className="text-lg font-bold text-foreground">{property.bedrooms}</p>
                <p className="text-xs text-muted-strong">{property.bedrooms === 1 ? "Bedroom" : "Bedrooms"}</p>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <Bath className="w-5 h-5 text-gold mx-auto mb-1" />
                <p className="text-lg font-bold text-foreground">{property.bathrooms}</p>
                <p className="text-xs text-muted-strong">{property.bathrooms === 1 ? "Bathroom" : "Bathrooms"}</p>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <Move className="w-5 h-5 text-gold mx-auto mb-1" />
                <p className="text-lg font-bold text-foreground">{property.area}</p>
                <p className="text-xs text-muted-strong">Area</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Description</h3>
              <p className="text-muted leading-relaxed">{property.description}</p>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-strong">
              <Calendar className="w-4 h-4" />
              <span>Listed on {property.createdAt}</span>
              <span className="mx-2">&middot;</span>
              <span>Community: {property.community}</span>
            </div>

            <a
              href={generateWhatsAppUrl(WHATSAPP_MESSAGE(property.title, property.location))}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp" size="xl" className="w-full gap-3 text-base">
                <Image src="/images/whatsapp-icon.svg" alt="WhatsApp" width={20} height={20} className="w-5 h-5" />
                Inquire About This Property on WhatsApp
              </Button>
            </a>

            <p className="text-xs text-muted-strong text-center">
              Click above to send a pre-filled message about this property directly to {property.type === "Off-plan" ? "Junaid Ali" : "the agent"}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
