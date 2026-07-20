"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface CtaBannerProps {
  title: string
  description: string
  buttonText: string
  buttonHref: string
  className?: string
}

export default function CtaBanner({
  title,
  description,
  buttonText,
  buttonHref,
  className,
}: CtaBannerProps) {
  return (
    <section className={cn("relative overflow-hidden bg-gradient-to-r from-primary via-[#0B3EA9] to-dark px-4 py-16 sm:py-20", className)}>
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <h2 className="font-heading text-2xl font-bold text-light sm:text-3xl lg:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl font-body text-base text-white/70 sm:text-lg">
          {description}
        </p>
        <div className="mt-8">
          <Link
            href={buttonHref}
            className="inline-flex items-center justify-center rounded-xl bg-accent px-8 py-3 font-body text-sm font-semibold text-dark transition-all hover:brightness-110 shadow-lg shadow-accent/20"
          >
            {buttonText}
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
