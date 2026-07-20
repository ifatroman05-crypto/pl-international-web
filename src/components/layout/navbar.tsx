"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/content/site"
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE, assetPath } from "@/lib/constants"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-light/90 backdrop-blur-md shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <img
              src={assetPath("/logo/logo.png")}
              alt={siteConfig.name}
              width={40}
              height={40}
              className="h-8 w-auto lg:h-10"
            />
            <span className="font-heading text-lg font-bold text-primary lg:text-xl">
              {siteConfig.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-body text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.href
                    ? "text-primary"
                    : "text-dark/70",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-light transition-colors hover:brightness-110"
            >
              <Phone className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-dark hover:bg-gray-100 lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-gray-100 bg-light lg:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {siteConfig.navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "block rounded-lg px-3 py-2 font-body text-sm font-medium transition-colors hover:bg-gray-50",
                    pathname === link.href
                      ? "text-primary"
                      : "text-dark/70",
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-light transition-colors hover:brightness-110"
              >
                <Phone className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
