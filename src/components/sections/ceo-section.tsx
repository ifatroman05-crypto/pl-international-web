"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/content/site"
import { assetPath } from "@/lib/constants"
import { ArrowRight } from "lucide-react"

export default function CeoSection() {
  const { ceo } = siteConfig

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            className="relative order-2 md:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full max-w-sm mx-auto md:mx-0">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3" />
              <img
                src={assetPath(ceo.image)}
                alt={ceo.name}
                className="w-full h-auto rounded-3xl shadow-soft relative"
              />
            </div>
          </motion.div>

          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-accent font-heading font-semibold text-sm tracking-wider uppercase mb-3">
              Meet Our Founder
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark mb-2">
              {ceo.name}
            </h2>
            <p className="text-primary font-medium text-sm mb-6">{ceo.role}</p>
            <p className="text-gray-600 leading-relaxed mb-8">{ceo.shortBio}</p>
            <Link
              href="/about"
              className={cn(
                "inline-flex items-center gap-2 px-6 py-3 rounded-xl",
                "bg-primary text-light font-heading font-semibold text-sm",
                "hover:brightness-110 transition-all",
              )}
            >
              Read More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
