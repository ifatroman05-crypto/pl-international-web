"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import PremiumCard from "@/components/ui/premium-card"

interface DestinationData {
  name: string
  slug: string
  subtitle: string
  description: string
  whyStudy: string[]
  topUniversities: { name: string; ranking: string }[]
  tuitionFees: { program: string; range: string }[]
  visaProcess: { step: number; title: string; description: string }[]
}

interface DestinationSectionProps {
  destination: "malaysia" | "australia"
  data: DestinationData
}

export default function DestinationSection({
  destination,
  data,
}: DestinationSectionProps) {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-12">
          <motion.div
            className="relative order-2 md:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/10 border border-white/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-heading text-3xl sm:text-4xl font-bold text-primary/20">
                  {data.name}
                </p>
              </div>
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
              Study Destination
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark mb-4">
              {data.subtitle}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {data.description}
            </p>
            <Link
              href={`/${data.slug}`}
              className={cn(
                "inline-flex items-center gap-2 px-6 py-3 rounded-xl",
                "bg-primary text-light font-heading font-semibold text-sm",
                "hover:brightness-110 transition-all",
              )}
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="font-heading text-2xl font-bold text-dark mb-6 text-center">
            Why Study in {data.name}?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {data.whyStudy.map((item) => (
              <PremiumCard key={item} className="flex items-start gap-3 p-4" hover={false}>
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{item}</span>
              </PremiumCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
