import type { Metadata } from "next"
import { siteConfig } from "@/content/site"
import Hero from "@/components/sections/hero"
import Stats from "@/components/sections/stats"
import CEOSection from "@/components/sections/ceo-section"
import ServicesGrid from "@/components/sections/services-grid"
import DestinationSection from "@/components/sections/destination-section"
import ProcessTimeline from "@/components/sections/process-timeline"
import WhyChooseUs from "@/components/sections/why-choose-us"
import Testimonials from "@/components/sections/testimonials"
import OfficeLocation from "@/components/sections/office-location"
import CTABanner from "@/components/sections/cta-banner"

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: siteConfig.url,
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <CEOSection />
      <ServicesGrid />
      <DestinationSection destination="malaysia" data={siteConfig.destinations.malaysia} />
      <DestinationSection destination="australia" data={siteConfig.destinations.australia} />
      <ProcessTimeline />
      <WhyChooseUs />
      <Testimonials />
      <OfficeLocation />
      <CTABanner
        title="Ready to Start Your Journey?"
        description="Contact PL International today and take the first step toward studying abroad."
        buttonText="Apply Now"
        buttonHref="/apply"
      />
    </>
  )
}
