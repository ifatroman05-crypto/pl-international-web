"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  GraduationCap,
  University,
  Stamp,
  Building,
  Plane,
  Landmark,
  Award,
  Backpack,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/content/site"

const iconMap: Record<string, LucideIcon> = {
  "graduation-cap": GraduationCap,
  university: University,
  passport: Stamp,
  building: Building,
  plane: Plane,
  landmark: Landmark,
  award: Award,
  backpack: Backpack,
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

export default function ServicesGrid() {
  return (
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
            What We Offer
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark">
            Our Services
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {siteConfig.services.map((service) => {
            const Icon = iconMap[service.icon] || GraduationCap
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className={cn(
                  "rounded-3xl border border-gray-200 bg-white p-6",
                  "shadow-soft hover:shadow-lg transition-all duration-300",
                  "hover:translate-y-[-4px] group cursor-default",
                )}
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-base font-semibold text-dark mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
