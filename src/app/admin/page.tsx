"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Plus,
  Edit3,
  Trash2,
  Star,
  StarOff,
  LogOut,
  Shield,
  Building2,
  MessageCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Property, PropertyType, Community, generateWhatsAppUrl, WHATSAPP_MESSAGE } from "@/lib/utils"

interface FormData {
  id: string
  title: string
  price: string
  location: string
  area: string
  bedrooms: string
  bathrooms: string
  type: PropertyType
  community: Community
  images: string
  description: string
  featured: boolean
}

const emptyForm: FormData = {
  id: "",
  title: "",
  price: "",
  location: "",
  area: "",
  bedrooms: "0",
  bathrooms: "0",
  type: "Rent",
  community: "International City",
  images: "",
  description: "",
  featured: false,
}

export default function AdminPage() {
  const [properties, setProperties] = useState<Property[]>([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState<FormData>(emptyForm)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [passwordError, setPasswordError] = useState(false)

  const ADMIN_PASSWORD = "Junaid1996"

  useEffect(() => {
    const stored = localStorage.getItem("junaid_admin_properties")
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        if (Array.isArray(parsed)) {
          setProperties(parsed)
        }
      } catch {
        setProperties([])
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("junaid_admin_properties", JSON.stringify(properties))
  }, [properties])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      setPasswordError(false)
    } else {
      setPasswordError(true)
    }
  }

  const resetForm = () => {
    setForm(emptyForm)
    setEditingId(null)
    setShowForm(false)
  }

  const handleEdit = (property: Property) => {
    setForm({
      id: property.id,
      title: property.title,
      price: property.price,
      location: property.location,
      area: property.area,
      bedrooms: String(property.bedrooms),
      bathrooms: String(property.bathrooms),
      type: property.type,
      community: property.community,
      images: property.images.join("\n"),
      description: property.description,
      featured: property.featured,
    })
    setEditingId(property.id)
    setShowForm(true)
  }

  const handleDelete = (id: string) => {
    if (window.confirm("Delete this property?")) {
      setProperties((prev) => prev.filter((p) => p.id !== id))
    }
  }

  const handleToggleFeatured = (id: string) => {
    setProperties((prev) =>
      prev.map((p) => (p.id === id ? { ...p, featured: !p.featured } : p))
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const imagesArray = form.images
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean)

    if (editingId) {
      setProperties((prev) =>
        prev.map((p) =>
          p.id === editingId
            ? {
                ...p,
                title: form.title,
                price: form.price,
                location: form.location,
                area: form.area,
                bedrooms: Number(form.bedrooms),
                bathrooms: Number(form.bathrooms),
                type: form.type,
                community: form.community,
                images: imagesArray,
                description: form.description,
                featured: form.featured,
              }
            : p
        )
      )
    } else {
      const newProperty: Property = {
        id: String(Date.now()),
        title: form.title,
        price: form.price,
        location: form.location,
        area: form.area,
        bedrooms: Number(form.bedrooms),
        bathrooms: Number(form.bathrooms),
        type: form.type,
        community: form.community,
        images: imagesArray,
        description: form.description,
        featured: form.featured,
        createdAt: new Date().toISOString().split("T")[0],
      }
      setProperties((prev) => [newProperty, ...prev])
    }

    resetForm()
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass rounded-2xl p-8 w-full max-w-md"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full gold-bg flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-black" />
            </div>
            <h1 className="text-2xl font-bold gold-gradient">Admin Dashboard</h1>
            <p className="text-sm text-white/40 mt-1">Enter password to access</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm text-white/70 mb-1.5">Password</label>
              <Input
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && (
                <p className="text-red-400 text-xs mt-1">Incorrect password. Try &quot;Junaid1996&quot;</p>
              )}
            </div>
            <Button type="submit" variant="gold" className="w-full h-12">
              <Shield className="w-4 h-4" />
              Access Dashboard
            </Button>
          </form>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold gold-gradient">Admin Dashboard</h1>
            <p className="text-sm text-white/40">Manage your property listings</p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant={showForm ? "destructive" : "gold"}
              onClick={() => (showForm ? resetForm() : setShowForm(true))}
              className="gap-2"
            >
              {showForm ? (
                "Cancel"
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  Add Property
                </>
              )}
            </Button>
            <Button
              variant="ghost"
              onClick={() => setIsAuthenticated(false)}
              className="gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mb-8"
            >
              <div className="glass rounded-2xl p-6 sm:p-8">
                <h2 className="text-lg font-semibold text-white mb-6">
                  {editingId ? "Edit Property" : "Add New Property"}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <label>Property Title</label>
                      <Input
                        value={form.title}
                        onChange={(e) => setForm({ ...form, title: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label>Price</label>
                      <Input
                        value={form.price}
                        onChange={(e) => setForm({ ...form, price: e.target.value })}
                        placeholder="e.g. AED 55,000/year"
                        required
                      />
                    </div>
                    <div>
                      <label>Location</label>
                      <Input
                        value={form.location}
                        onChange={(e) => setForm({ ...form, location: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label>Area (sqft)</label>
                      <Input
                        value={form.area}
                        onChange={(e) => setForm({ ...form, area: e.target.value })}
                        placeholder="e.g. 850 sqft"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label>Bedrooms</label>
                        <Input
                          type="number"
                          min="0"
                          value={form.bedrooms}
                          onChange={(e) => setForm({ ...form, bedrooms: e.target.value })}
                        />
                      </div>
                      <div>
                        <label>Bathrooms</label>
                        <Input
                          type="number"
                          min="0"
                          value={form.bathrooms}
                          onChange={(e) => setForm({ ...form, bathrooms: e.target.value })}
                        />
                      </div>
                    </div>
                    <div>
                      <label>Property Type</label>
                      <select
                        value={form.type}
                        onChange={(e) => setForm({ ...form, type: e.target.value as PropertyType })}
                        className="flex h-10 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                      >
                        <option value="Rent">Rent</option>
                        <option value="Buy">Buy</option>
                        <option value="Off-plan">Off-plan</option>
                      </select>
                    </div>
                    <div>
                      <label>Community</label>
                      <select
                        value={form.community}
                        onChange={(e) => setForm({ ...form, community: e.target.value as Community })}
                        className="flex h-10 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                      >
                        <option value="International City">International City</option>
                        <option value="Downtown Dubai">Downtown Dubai</option>
                        <option value="Dubai Sports City">Dubai Sports City</option>
                        <option value="Skycourts">Skycourts</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label>Property Images (up to 10)</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                      {Array.from({ length: 10 }).map((_, i) => {
                        const paths = form.images.split("\n").filter(Boolean)
                        return (
                          <div key={i}>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-white/30 w-6 shrink-0">#{i + 1}</span>
                              <Input
                                value={paths[i] || ""}
                                onChange={(e) => {
                                  const newPaths = [...paths]
                                  newPaths[i] = e.target.value
                                  setForm({ ...form, images: newPaths.join("\n") })
                                }}
                                placeholder="/images/photo.jpg"
                                className="text-xs"
                              />
                            </div>
                          </div>
                        )
                      })}
                    </div>
                    <p className="text-xs text-white/30 mt-2">
                      Enter image paths from the /public/images/ folder (e.g. /images/my-photo.jpg)
                    </p>
                  </div>

                  <div>
                    <label>Description</label>
                    <Textarea
                      value={form.description}
                      onChange={(e) => setForm({ ...form, description: e.target.value })}
                      rows={4}
                      required
                    />
                  </div>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.featured}
                      onChange={(e) => setForm({ ...form, featured: e.target.checked })}
                      className="w-4 h-4 accent-gold"
                    />
                    <span className="text-sm text-white/80">Mark as Featured Property</span>
                  </label>

                  <div className="flex gap-3 pt-2">
                    <Button type="submit" variant="gold">
                      {editingId ? "Update Property" : "Add Property"}
                    </Button>
                    <Button type="button" variant="ghost" onClick={resetForm}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="space-y-3">
          {properties.length === 0 ? (
            <div className="text-center py-20">
              <Building2 className="w-16 h-16 text-white/10 mx-auto mb-4" />
              <p className="text-white/40">No properties yet. Add your first property!</p>
            </div>
          ) : (
            properties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
                className="glass rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-4"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant={property.type === "Rent" ? "rent" : property.type === "Buy" ? "buy" : "offplan"}>
                      {property.type}
                    </Badge>
                    {property.featured && <Badge variant="featured">Featured</Badge>}
                  </div>
                  <p className="text-sm font-medium text-white truncate">{property.title}</p>
                  <p className="text-xs text-white/40">
                    {property.location} &middot; {property.price}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => handleToggleFeatured(property.id)}
                    className={`p-2 rounded-lg transition-all ${
                      property.featured
                        ? "text-gold bg-gold/10"
                        : "text-white/30 hover:text-gold hover:bg-white/5"
                    }`}
                    title={property.featured ? "Remove from featured" : "Mark as featured"}
                  >
                    {property.featured ? <Star className="w-4 h-4" /> : <StarOff className="w-4 h-4" />}
                  </button>
                  <a
                    href={generateWhatsAppUrl(WHATSAPP_MESSAGE(property.title, property.location))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-green-400 hover:bg-green-500/10 transition-all"
                    title="Test WhatsApp message"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => handleEdit(property)}
                    className="p-2 rounded-lg text-white/30 hover:text-gold hover:bg-white/5 transition-all"
                    title="Edit property"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(property.id)}
                    className="p-2 rounded-lg text-white/30 hover:text-red-400 hover:bg-red-500/10 transition-all"
                    title="Delete property"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-white/20">
            Properties are stored locally in your browser. Data persists until cleared.
          </p>
        </div>
      </div>
    </div>
  )
}
