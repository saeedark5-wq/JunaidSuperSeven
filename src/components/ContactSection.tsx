"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import BusinessHours from "@/components/BusinessHours"
import {
  Send,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"
import {
  AGENT_NAME,
  COMPANY_NAME,
  PHONE,
  EMAIL,
  OFFICE_ADDRESS,
  generateWhatsAppUrl,
  WHATSAPP_MESSAGE,
} from "@/lib/utils"

export default function ContactSection() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Real Estate Inquiry - ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    )
    window.open(`mailto:${EMAIL}?subject=${subject}&body=${body}`, "_blank")
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.05)_0%,transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4">Get In Touch</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let&apos;s Find Your <span className="gold-gradient">Perfect Property</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Reach out via WhatsApp, phone, email, or visit our office in Dubai International City
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="glass rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-1.5">Your Name</label>
                    <Input
                      placeholder="John Doe"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1.5">Your Email</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-1.5">Phone Number</label>
                  <Input
                    type="tel"
                    placeholder="+971 50 000 0000"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1.5">Message</label>
                  <Textarea
                    placeholder="Tell me about your property requirements..."
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" variant="gold" size="lg" className="w-full gap-2">
                  {sent ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href={generateWhatsAppUrl(WHATSAPP_MESSAGE())}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-xl p-4 flex items-center gap-3 card-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <Image src="/images/whatsapp-icon.svg" alt="WhatsApp" width={20} height={20} className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-strong">WhatsApp</p>
                  <p className="text-sm font-semibold text-foreground">Send Message</p>
                </div>
              </a>
              <a
                href={`tel:${PHONE}`}
                className="glass rounded-xl p-4 flex items-center gap-3 card-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Image src="/images/icon-phone.svg" alt="Phone" width={20} height={20} className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-strong">Phone</p>
                  <p className="text-sm font-semibold text-foreground">{PHONE}</p>
                </div>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="glass rounded-xl p-4 flex items-center gap-3 card-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <Image src="/images/icon-email.svg" alt="Email" width={20} height={20} className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-strong">Email</p>
                  <p className="text-sm font-semibold text-foreground">Send Email</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Our Office</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Image src="/images/icon-location.svg" alt="Location" width={20} height={20} className="w-5 h-5 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{COMPANY_NAME}</p>
                    <p className="text-sm text-muted">{OFFICE_ADDRESS}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Image src="/images/icon-phone.svg" alt="Phone" width={20} height={20} className="w-5 h-5 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm text-muted">Call us directly</p>
                    <a href={`tel:${PHONE}`} className="text-sm font-medium text-foreground hover:text-gold transition-colors">
                      {PHONE}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Image src="/images/icon-email.svg" alt="Email" width={20} height={20} className="w-5 h-5 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm text-muted">Email us</p>
                    <a href={`mailto:${EMAIL}`} className="text-sm font-medium text-foreground hover:text-gold transition-colors">
                      {EMAIL}
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-card-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.2775!2d55.4045188!3d25.166728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f614bae073441%3A0xd1fc0de9c023061!2sSuper%20Seven%20Real%20Estate%20Broker!5e0!3m2!1sen!2sae!4v1"
                  width="100%"
                  height="200"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Super Seven Real Estate Brokers Office Location"
                />
              </div>
            </div>

            <BusinessHours />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
