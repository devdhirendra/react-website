import { HeroSection } from "@/components/sections/hero-section"
import { CompanySlider } from "@/components/sections/company-slider"
import { FeaturesSection } from "@/components/sections/features-section"
import { IndustriesSection } from "@/components/sections/industries-section"
import { ServicesSection } from "@/components/sections/services-section"
import { StatsSection } from "@/components/sections/stats-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { CTASection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <CompanySlider />
      <FeaturesSection />
      <IndustriesSection />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}
