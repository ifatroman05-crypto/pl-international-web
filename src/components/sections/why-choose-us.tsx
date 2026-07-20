"use client"

import { motion } from "framer-motion"
import {
  ShieldCheck,
  Users,
  Handshake,
  Zap,
  Star,
  Map,
  type LucideIcon,
} from "lucide-react"
import { siteConfig } from "@/content/site"
import PremiumCard from "@/components/ui/premium-card"

const iconMap: Record<string, LucideIcon> = {
  "shield-check": ShieldCheck,
  users: Users,
  handshake: Handshake,
  zap: Zap,
  star: Star,
  map: Map,
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function WhyChooseUs() {
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
            Why Us
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark">
            Why Choose PL International?
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {siteConfig.whyChooseUs.map((item) => {
            const Icon = iconMap[item.icon] || ShieldCheck
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
              >
                <PremiumCard className="p-8 text-center sm:text-left group cursor-default">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors mx-auto sm:mx-0">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </PremiumCard>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
