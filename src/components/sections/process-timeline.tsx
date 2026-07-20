"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/content/site"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function ProcessTimeline() {
  const { processSteps } = siteConfig

  return (
    <section className="py-16 sm:py-20 bg-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-accent font-heading font-semibold text-sm tracking-wider uppercase mb-3">
            How It Works
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark">
            Application Process
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-0.5 bg-primary/20" />

          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={step.step}
                  variants={stepVariants}
                  className="relative flex items-start mb-10 sm:mb-12 last:mb-0"
                >
                  <div
                    className={cn(
                      "w-full sm:w-1/2",
                      isEven ? "sm:pr-12" : "sm:pl-12 sm:ml-auto",
                    )}
                  >
                    <div
                      className={cn(
                        "bg-white rounded-3xl border border-gray-200 p-6 shadow-soft",
                        isEven ? "sm:text-right" : "",
                      )}
                    >
                      <div
                        className={cn(
                          "flex items-center gap-3 mb-2",
                          isEven ? "sm:flex-row-reverse" : "",
                        )}
                      >
                        <div className="w-8 h-8 rounded-full bg-primary text-light flex items-center justify-center font-heading font-bold text-xs shrink-0 sm:hidden">
                          {step.step}
                        </div>
                        <h3 className="font-heading text-lg font-semibold text-dark">
                          {step.title}
                        </h3>
                      </div>
                      <p
                        className={cn(
                          "text-gray-600 text-sm leading-relaxed",
                          isEven ? "sm:text-right" : "",
                        )}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-6 sm:left-1/2 sm:-translate-x-1/2 top-0 -translate-x-1/2 hidden sm:flex">
                    <div className="w-12 h-12 rounded-full bg-primary text-light items-center justify-center font-heading font-bold text-sm shadow-md hidden sm:flex">
                      {step.step}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
