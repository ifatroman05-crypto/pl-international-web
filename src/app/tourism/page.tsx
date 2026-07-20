"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Clock, MapPin, Globe, Plane, Hotel, Shield, ArrowRight } from "lucide-react"
import { siteConfig } from "@/content/site"
import PremiumCard from "@/components/ui/premium-card"
import CTABanner from "@/components/sections/cta-banner"
import PageHero from "@/components/sections/page-hero"

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const whyUs = [
  { icon: Plane, text: "Affordable flight & hotel booking" },
  { icon: MapPin, text: "Curated Malaysia & Australia packages" },
  { icon: Globe, text: "English & Bangla speaking guides" },
  { icon: Shield, text: "24/7 travel support & assistance" },
  { icon: Clock, text: "Hassle-free visa & travel processing" },
  { icon: Hotel, text: "Verified 3-5 star accommodations" },
]

export default function TourismPage() {
  const { tourismPackages } = siteConfig

  return (
    <>
      <PageHero
        title="Tourism Packages"
        subtitle="Explore Malaysia & Australia with PL International — curated travel packages, hotel booking, and guided tours."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Tourism", href: "/tourism" },
        ]}
      />

      <section className="py-16 sm:py-20 bg-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-accent font-heading font-semibold text-sm tracking-wider uppercase mb-3">
              Travel Packages
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark">
              Choose Your Destination
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {tourismPackages.map((pkg) => (
              <motion.div key={pkg.title} variants={itemVariants}>
                <PremiumCard className="p-8 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-accent font-heading text-xs font-semibold tracking-wider uppercase mb-1">
                        {pkg.destination === "malaysia" ? "Malaysia" : "Australia"}
                      </p>
                      <h3 className="font-heading text-xl font-bold text-dark">
                        {pkg.title}
                      </h3>
                    </div>
                    <span className="glass-accent px-3 py-1 text-xs font-heading font-semibold text-accent whitespace-nowrap">
                      {pkg.duration}
                    </span>
                  </div>

                  <p className="font-heading text-2xl font-bold text-primary mb-6">
                    {pkg.price}
                  </p>

                  <div className="flex-1">
                    <h4 className="font-heading text-sm font-semibold text-dark mb-3">
                      Highlights
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {pkg.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm">{h}</span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="font-heading text-sm font-semibold text-dark mb-3">
                      Includes
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.includes.map((inc) => (
                        <span key={inc} className="glass-accent px-3 py-1 text-xs text-gray-700">
                          {inc}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/${siteConfig.phoneRaw}?text=${encodeURIComponent(`Hello! I'm interested in the "${pkg.title}" package.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center gap-2 w-full rounded-xl bg-primary px-6 py-3 font-heading font-semibold text-sm text-light transition-all hover:brightness-110"
                  >
                    Book This Package
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </PremiumCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-accent font-heading font-semibold text-sm tracking-wider uppercase mb-3">
              Why Travel With Us
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark">
              Premium Travel Services
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {whyUs.map((item) => (
              <motion.div key={item.text} variants={itemVariants}>
                <PremiumCard className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-body text-sm text-gray-700">{item.text}</p>
                </PremiumCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTABanner
        title="Ready to Plan Your Trip?"
        description="Contact us today for personalized travel packages, flight bookings, and hotel reservations."
        buttonText="Book Now"
        buttonHref="https://wa.me/8801950217088"
      />
    </>
  )
}
