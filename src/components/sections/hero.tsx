"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Phone, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/content/site"
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/constants"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary to-dark">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Now Accepting Applications for 2026
        </motion.div>

        <motion.h1
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-light leading-tight mb-6"
          variants={itemVariants}
        >
          Study in Malaysia with{" "}
          <span className="text-accent">Trusted Admission</span> & Visa Support
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          variants={itemVariants}
        >
          {siteConfig.description}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={itemVariants}
        >
          <Link
            href="/apply"
            className={cn(
              "inline-flex items-center gap-2 px-8 py-3.5 rounded-xl",
              "bg-accent text-dark font-heading font-semibold text-base",
              "hover:brightness-110 transition-all",
              "shadow-lg shadow-accent/25",
            )}
          >
            Apply Now
            <ArrowRight className="w-5 h-5" />
          </Link>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 px-8 py-3.5 rounded-xl",
              "border-2 border-light/30 text-light font-heading font-semibold text-base",
              "hover:bg-light/10 hover:border-light/50 transition-all",
            )}
          >
            <Phone className="w-5 h-5" />
            WhatsApp Consultation
          </a>
        </motion.div>

        <motion.div
          className="mt-16 flex items-center justify-center gap-6 sm:gap-10 text-gray-400 text-sm"
          variants={itemVariants}
        >
          <div className="flex -space-x-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-primary bg-gray-600"
              />
            ))}
          </div>
          <p>
            Trusted by <span className="text-light font-semibold">500+</span>{" "}
            students
          </p>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-light to-transparent" />
    </section>
  )
}
