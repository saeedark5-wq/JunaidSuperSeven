import HeroSection from "@/components/HeroSection"
import PropertyListings from "@/components/PropertyListings"
import AboutSection from "@/components/AboutSection"
import FeaturedAreas from "@/components/FeaturedAreas"
import Testimonials from "@/components/Testimonials"
import ContactSection from "@/components/ContactSection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PropertyListings />
      <FeaturedAreas />
      <Testimonials />
      <ContactSection />
    </>
  )
}
