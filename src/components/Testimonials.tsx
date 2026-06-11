"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"
import { testimonials } from "@/data/testimonials"

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(212,175,55,0.05)_0%,transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4">Client Testimonials</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            What <span className="gold-gradient">Clients Say</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Trusted by investors and homebuyers from UAE, Pakistan, and around the world
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="glass rounded-2xl p-6 card-hover h-full flex flex-col relative">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-gold/10" />

                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-white/10"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-sm text-white/70 leading-relaxed mb-6 flex-1">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full gold-bg flex items-center justify-center text-black font-bold text-sm">
                    {testimonial.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                    <p className="text-xs text-white/40">{testimonial.role} &middot; {testimonial.location}</p>
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
