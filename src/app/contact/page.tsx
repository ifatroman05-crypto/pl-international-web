"use client"

import { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Phone, Mail, MapPin, Clock, Send, Loader2 } from "lucide-react"
import { siteConfig } from "@/content/site"
import { GOOGLE_MAPS_EMBED_URL, COUNTRIES } from "@/lib/constants"
import { useToast } from "@/components/ui/toast"
import PageHero from "@/components/sections/page-hero"
import PremiumCard from "@/components/ui/premium-card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
  country: z.string().min(1, "Please select a destination country"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

const contactInfo = [
  { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phoneRaw}` },
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: MapPin, label: "Address", value: siteConfig.address },
  { icon: Clock, label: "Business Hours", value: "Sat - Thu, 9:00 AM - 6:00 PM" },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { addToast } = useToast()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    addToast({
      message: "Thank you for your message! We will get back to you soon.",
      variant: "success",
    })
    reset()
    setIsSubmitting(false)
  }

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our team"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h2 className="font-heading text-2xl font-bold text-dark">
                Send Us a Message
              </h2>
              <p className="mt-2 text-gray-600">
                Fill out the form below and we&apos;ll get back to you shortly.
              </p>

              <PremiumCard className="p-8" hover={false}>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5"
                >
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+880 1XXX-XXXXXX"
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="country">Destination Country</Label>
                  <Select id="country" {...register("country")}>
                    <option value="">Select a country</option>
                    {COUNTRIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </Select>
                  {errors.country && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.country.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your study abroad plans..."
                    rows={5}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
                  </form>
                </PremiumCard>
            </div>

            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-bold text-dark">
                Contact Information
              </h2>
              <p className="mt-2 text-gray-600">
                Reach out to us through any of these channels.
              </p>

              <div className="mt-8 space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon
                  return (
                    <PremiumCard key={item.label} className="flex items-start gap-4 p-5" hover={false}>
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-0.5 text-dark hover:text-primary transition-colors font-medium"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-0.5 text-dark font-medium">{item.value}</p>
                        )}
                      </div>
                    </PremiumCard>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PremiumCard className="overflow-hidden p-1" hover={false}>
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "calc(1.5rem - 4px)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PL International Office Location"
            />
          </PremiumCard>
        </div>
      </section>
    </>
  )
}
