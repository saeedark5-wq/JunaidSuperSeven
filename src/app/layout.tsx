import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppFloat from "@/components/WhatsAppFloat"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Junaid Ali | Dubai Real Estate Expert | Super Seven Real Estate Brokers",
  description:
    "Dubai real estate expert with 10+ years experience. Specializing in International City, Downtown Dubai, Dubai Sports City, and Skycourts. 500+ properties sold.",
  keywords: [
    "Dubai real estate agent",
    "International City properties",
    "Dubai apartments for rent",
    "buy property Dubai",
    "real estate broker UAE",
    "Junaid Ali",
    "Super Seven Real Estate Brokers",
    "Dubai property",
  ],
  openGraph: {
    title: "Junaid Ali | Dubai Real Estate Expert",
    description:
      "10+ Years Experience | International City Specialist | 500+ Properties Sold",
    type: "website",
    locale: "en_US",
    siteName: "Junaid Ali Real Estate",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/images/super seven logo.jpg" />
      </head>
      <body className="bg-black text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
