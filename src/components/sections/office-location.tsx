"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import { siteConfig } from "@/content/site"
import { GOOGLE_MAPS_EMBED_URL } from "@/lib/constants"
import PremiumCard from "@/components/ui/premium-card"

export default function OfficeLocation() {
  return (
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
            Visit Us
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark">
            Our Office
          </h2>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-start gap-3 mb-8 justify-center">
            <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <p className="text-gray-700">{siteConfig.address}</p>
          </div>

          <PremiumCard className="overflow-hidden p-1" hover={false}>
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "calc(1.5rem - 4px)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PL International Office Location"
            />
          </PremiumCard>
        </motion.div>
      </div>
    </section>
  )
}
