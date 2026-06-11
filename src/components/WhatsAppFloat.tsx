"use client"

import { motion } from "framer-motion"
import { generateWhatsAppUrl, WHATSAPP_MESSAGE } from "@/lib/utils"
import Image from "next/image"

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={generateWhatsAppUrl(WHATSAPP_MESSAGE())}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center text-white/70 hover:text-gold transition-colors"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
    >
      <Image src="/images/whatsapp-icon.svg" alt="WhatsApp" width={24} height={24} className="w-6 h-6" />
    </motion.a>
  )
}
