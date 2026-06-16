"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { generateWhatsAppUrl, WHATSAPP_MESSAGE } from "@/lib/utils"
import Image from "next/image"

export default function WhatsAppFloat() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > window.innerHeight * 0.8)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={generateWhatsAppUrl(WHATSAPP_MESSAGE())}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:bg-[#20BD5A] hover:shadow-[#25D366]/50 transition-all duration-300"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
        >
          <Image src="/images/whatsapp-icon.svg" alt="WhatsApp" width={28} height={28} className="w-7 h-7" />
        </motion.a>
      )}
    </AnimatePresence>
  )
}
