"use client"

import { motion } from "framer-motion"
import { Clock } from "lucide-react"

const hours = [
  { day: "Monday - Thursday", time: "10:00 AM - 7:30 PM", status: "open" },
  { day: "Friday", time: "10:00 AM - 12:00 PM & 2:30 PM - 7:30 PM", status: "split" },
  { day: "Saturday", time: "10:00 AM - 7:30 PM", status: "open" },
  { day: "Sunday", time: "Closed", status: "closed" },
]

export default function BusinessHours() {
  const today = new Date().getDay()
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const todayName = dayNames[today]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass rounded-2xl p-6"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg gold-bg flex items-center justify-center">
          <Clock className="w-5 h-5 text-black" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">Business Hours</h3>
          <p className="text-xs text-muted-strong">Dubai Local Time (GST +4)</p>
        </div>
      </div>

      <div className="space-y-3">
        {hours.map((h) => {
          const isToday = h.day.toLowerCase().startsWith(todayName.toLowerCase().slice(0, 3)) ||
            (h.day === "Monday - Thursday" && !["Friday", "Saturday", "Sunday"].includes(todayName)) ||
            (h.day === "Friday" && todayName === "Friday") ||
            (h.day === "Saturday" && todayName === "Saturday") ||
            (h.day === "Sunday" && todayName === "Sunday")

          return (
            <div
              key={h.day}
              className={`flex items-center justify-between py-2 px-3 rounded-lg ${
                isToday ? "bg-gold/10 border border-gold/20" : ""
              }`}
            >
              <div className="flex items-center gap-2">
                {isToday && <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />}
                <span className={`text-sm ${isToday ? "text-gold font-medium" : "text-muted"}`}>
                  {h.day}
                </span>
              </div>
              <span
                className={`text-sm ${
                  h.status === "closed"
                    ? "text-red-400"
                    : isToday
                    ? "text-foreground"
                    : "text-muted"
                }`}
              >
                {h.time}
              </span>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}
