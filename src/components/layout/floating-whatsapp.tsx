"use client"

import { Phone } from "lucide-react"
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/constants"

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95"
      style={{ backgroundColor: "#25D366" }}
      aria-label="Chat on WhatsApp"
    >
      <Phone className="h-6 w-6 text-white" />
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
    </a>
  )
}
