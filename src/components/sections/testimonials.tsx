"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { siteConfig } from "@/content/site"
import PremiumCard from "@/components/ui/premium-card"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Testimonials() {
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
            Testimonials
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark">
            What Our Clients Say
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {siteConfig.testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={cardVariants}
            >
              <PremiumCard className="p-8 flex flex-col" hover={false}>
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-heading font-semibold text-dark text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-xs">{testimonial.program}</p>
                </div>
              </PremiumCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
