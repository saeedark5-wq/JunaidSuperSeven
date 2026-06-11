import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const WHATSAPP_NUMBER = "971504975208"
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`
export const EMAIL = "Junaidafridi1996@gmail.com"
export const PHONE = "+971 50 497 5208"
export const AGENT_NAME = "Junaid Ali Afridi"
export const COMPANY_NAME = "Super Seven Real Estate Brokers"
export const OFFICE_ADDRESS = "Aldana II - Office No.3 - Dubai International City - Dubai"

export const WHATSAPP_MESSAGE = (title?: string, location?: string) =>
  `Hello Junaid Ali, I am interested in this property:\n${title || "Property"}\nLocation: ${location || "Dubai"}\nPlease share full details, availability, and viewing schedule.`

export function generateWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export type PropertyType = "Rent" | "Buy" | "Off-plan"
export type Community = "International City" | "Downtown Dubai" | "Dubai Sports City" | "Skycourts" | "Warsan" | "The Springs" | "Other"

export interface Property {
  id: string
  title: string
  price: string
  location: string
  area: string
  bedrooms: number
  bathrooms: number
  type: PropertyType
  community: Community
  images: string[]
  description: string
  featured: boolean
  createdAt: string
}
