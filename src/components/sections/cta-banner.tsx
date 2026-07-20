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
    <section className={cn("bg-gradient-to-r from-accent to-primary px-4 py-16 sm:py-20", className)}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl text-center"
      >
        <h2 className="font-heading text-2xl font-bold text-dark sm:text-3xl lg:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl font-body text-base text-dark/70 sm:text-lg">
          {description}
        </p>
        <div className="mt-8">
          <Link
            href={buttonHref}
            className="inline-flex items-center justify-center rounded-xl bg-dark px-8 py-3 font-body text-sm font-semibold text-light transition-all hover:brightness-125"
          >
            {buttonText}
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
