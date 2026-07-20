"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/content/site"
import PremiumCard from "@/components/ui/premium-card"

function StatCard({ value, label, delay }: { value: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <PremiumCard className="text-center py-6 px-4" hover={false}>
        <div className="font-heading text-4xl sm:text-5xl font-bold text-primary mb-2">
          {value}
        </div>
        <p className="text-gray-600 font-body text-sm sm:text-base">{label}</p>
      </PremiumCard>
    </motion.div>
  )
}

export default function Stats() {
  return (
    <section className="py-16 sm:py-20 bg-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {siteConfig.stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
