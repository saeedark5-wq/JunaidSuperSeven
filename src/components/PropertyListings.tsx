"use client"

import { useState, useMemo, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, SlidersHorizontal, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import PropertyCard from "@/components/PropertyCard"
import { defaultProperties } from "@/data/properties"
import { PropertyType, Community, Property } from "@/lib/utils"

const propertyTypes: (PropertyType | "All")[] = ["All", "Rent", "Buy", "Off-plan"]
const communities: (Community | "All")[] = ["All", "International City", "Downtown Dubai", "Dubai Sports City", "Skycourts", "Warsan", "The Springs", "Other"]

export default function PropertyListings() {
  const [search, setSearch] = useState("")
  const [typeFilter, setTypeFilter] = useState<PropertyType | "All">("All")
  const [communityFilter, setCommunityFilter] = useState<Community | "All">("All")
  const [showFeatured, setShowFeatured] = useState(false)
  const [properties, setProperties] = useState<Property[]>(defaultProperties)

  useEffect(() => {
    const stored = localStorage.getItem("junaid_admin_properties")
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        if (parsed.length > 0) {
          setProperties(parsed)
        }
      } catch {
        setProperties(defaultProperties)
      }
    }
  }, [])

  const filteredProperties = useMemo(() => {
    let filtered = properties

    if (showFeatured) {
      filtered = filtered.filter((p) => p.featured)
    }

    if (typeFilter !== "All") {
      filtered = filtered.filter((p) => p.type === typeFilter)
    }

    if (communityFilter !== "All") {
      filtered = filtered.filter((p) => p.community === communityFilter)
    }

    if (search.trim()) {
      const q = search.toLowerCase()
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.community.toLowerCase().includes(q)
      )
    }

    return filtered
  }, [search, typeFilter, communityFilter, showFeatured, properties])

  const hasActiveFilters = search || typeFilter !== "All" || communityFilter !== "All" || showFeatured

  const clearFilters = () => {
    setSearch("")
    setTypeFilter("All")
    setCommunityFilter("All")
    setShowFeatured(false)
  }

  return (
    <section id="properties" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.03)_0%,transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4">Property Portfolio</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="gold-gradient">Properties</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Explore our curated selection of premium properties across Dubai&apos;s most sought-after communities
          </p>
        </motion.div>

        <div className="glass rounded-2xl p-4 sm:p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-strong" />
              <Input
                placeholder="Search by location, community, or keywords..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {propertyTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setTypeFilter(type)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    typeFilter === type
                      ? "gold-bg text-black"
                      : "bg-card text-muted hover:text-foreground hover:bg-card-border"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-card-border">
            <SlidersHorizontal className="w-4 h-4 text-muted-strong" />
            <span className="text-xs text-muted-strong mr-2">Community:</span>
            {communities.map((community) => (
              <button
                key={community}
                onClick={() => setCommunityFilter(community)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  communityFilter === community
                    ? "gold-bg text-black"
                    : "bg-card text-muted hover:text-foreground hover:bg-card-border"
                }`}
              >
                {community}
              </button>
            ))}
            <div className="ml-auto flex items-center gap-2">
              <button
                onClick={() => setShowFeatured(!showFeatured)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  showFeatured
                    ? "gold-bg text-black"
                    : "bg-card text-muted hover:text-foreground hover:bg-card-border"
                }`}
              >
                Featured Only
              </button>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs text-red-400 hover:bg-red-500/10 transition-all"
                >
                  <X className="w-3 h-3" />
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {filteredProperties.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 rounded-full gold-bg flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-black" />
              </div>
              <p className="text-xl font-semibold text-foreground mb-2">No Properties Found</p>
              <p className="text-muted-strong mb-6">Try adjusting your search or filter criteria</p>
              <Button variant="outline" onClick={clearFilters}>
                Clear All Filters
              </Button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property, index) => (
                <PropertyCard key={property.id} property={property} index={index} />
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
