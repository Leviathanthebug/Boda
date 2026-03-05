import { NavBar } from "@/components/wedding/nav-bar"
import { HeroSection } from "@/components/wedding/hero-section"

import { CoupleSection } from "@/components/wedding/couple-section"
import { VenueSection } from "@/components/wedding/venue-section"
import { GallerySection } from "@/components/wedding/gallery-section"
import { RsvpSection } from "@/components/wedding/rsvp-section"
import { FooterSection } from "@/components/wedding/footer-section"

export default function WeddingPage() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <CoupleSection />
      <VenueSection />
      <GallerySection />
      <RsvpSection />
      <FooterSection />
    </main>
  )
}
