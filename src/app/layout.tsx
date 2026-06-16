import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes"
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
      </head>
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
        </ThemeProvider>
      </body>
    </html>
  )
}
