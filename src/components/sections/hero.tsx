"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Phone, ArrowRight, MapPin, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/content/site"
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/constants"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

const statVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.8 + i * 0.15 },
  }),
}

const statsData = [
  { label: "Students Guided", value: "500+" },
  { label: "Visa Support Success", value: "95%" },
  { label: "Travel Assistance", value: "24/7" },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-[#0B1B3E] to-primary">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-dark/20" />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-accent text-accent text-sm font-medium mb-8"
        >
          <MapPin className="w-3.5 h-3.5" />
          Bangladesh → Malaysia • Australia
        </motion.div>

        <motion.h1
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-light leading-tight mb-6"
          variants={itemVariants}
        >
          {siteConfig.taglineFull.split("&")[0]} &
          <br />
          <span className="text-accent">{siteConfig.taglineFull.split("&")[1]}</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed"
          variants={itemVariants}
        >
          University admission, visa processing, tourism packages, hotel booking, and airport support &mdash; delivered through one trusted premium agency.
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
            Apply for Admission
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            href="/tourism"
            className={cn(
              "inline-flex items-center gap-2 px-8 py-3.5 rounded-xl",
              "border-2 border-white/20 text-light font-heading font-semibold text-base",
              "hover:bg-white/10 hover:border-white/40 transition-all",
            )}
          >
            <MapPin className="w-5 h-5" />
            Plan Your Trip
          </Link>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 px-8 py-3.5 rounded-xl",
              "text-white/60 font-heading font-medium text-base",
              "hover:text-white transition-all",
            )}
          >
            <Phone className="w-5 h-5" />
            WhatsApp
          </a>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          {statsData.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              variants={statVariants}
              className="glass py-4 px-6 text-center"
            >
              <div className="font-heading text-2xl font-bold text-accent">
                {stat.value}
              </div>
              <p className="text-white/60 text-xs mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="scroll-indicator flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-light to-transparent" />
    </section>
  )
}
