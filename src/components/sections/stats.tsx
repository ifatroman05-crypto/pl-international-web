"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { siteConfig } from "@/content/site"

function parseStatValue(value: string): { number: number; suffix?: string } {
  const match = value.match(/^(\d+)([%+]*)$/)
  if (match) {
    return { number: parseInt(match[1]), suffix: match[2] || undefined }
  }
  return { number: parseInt(value), suffix: "+" }
}

function Counter({
  target,
  suffix,
  label,
  delay,
}: {
  target: number
  suffix?: string
  label: string
  delay: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = target
    const duration = 2000
    const stepTime = Math.max(Math.floor(duration / end), 16)
    const increment = end / (duration / stepTime)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="font-heading text-4xl sm:text-5xl font-bold text-primary mb-2">
        {count}
        {suffix}
      </div>
      <p className="text-gray-600 font-body text-sm sm:text-base">{label}</p>
    </motion.div>
  )
}

export default function Stats() {
  return (
    <section className="py-16 sm:py-20 bg-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {siteConfig.stats.map((stat, index) => {
            const { number, suffix } = parseStatValue(stat.value)
            return (
              <Counter
                key={stat.label}
                target={number}
                suffix={suffix}
                label={stat.label}
                delay={index * 0.15}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
