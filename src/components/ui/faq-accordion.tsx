"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-2xl border border-gray-200 bg-light"
        >
          <button
            onClick={() => toggle(i)}
            className="flex w-full items-center justify-between p-5 text-left"
          >
            <span className="pr-4 font-heading text-base font-semibold text-dark">
              {item.question}
            </span>
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === i && (
            <div className="border-t border-gray-100 px-5 pb-5 pt-3">
              <p className="text-gray-600 leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
