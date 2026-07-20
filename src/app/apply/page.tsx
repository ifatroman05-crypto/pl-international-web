"use client"

import { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Send, Loader2 } from "lucide-react"
import { siteConfig } from "@/content/site"
import { useToast } from "@/components/ui/toast"
import PageHero from "@/components/sections/page-hero"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import {
  COUNTRIES,
  PROGRAMS,
  ACADEMIC_QUALIFICATIONS,
  PASSPORT_STATUSES,
  ENGLISH_PROFICIENCY,
} from "@/lib/constants"

const applySchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
  email: z.string().email("Please enter a valid email address"),
  preferredCountry: z.string().min(1, "Please select a country"),
  preferredProgram: z.string().min(1, "Please select a program"),
  academicQualification: z.string().min(1, "Please select your qualification"),
  passportStatus: z.string().min(1, "Please select your passport status"),
  englishProficiency: z.string().min(1, "Please select your proficiency"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ApplyFormData = z.infer<typeof applySchema>

export default function ApplyPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { addToast } = useToast()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ApplyFormData>({
    resolver: zodResolver(applySchema),
  })

  const onSubmit = async (data: ApplyFormData) => {
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    addToast({
      message:
        "Your application has been submitted successfully! We will contact you within 24 hours.",
      variant: "success",
    })
    reset()
    setIsSubmitting(false)
  }

  return (
    <>
      <PageHero
        title="Apply Now"
        subtitle="Start your study abroad journey"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Apply", href: "/apply" },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-gray-200 bg-light p-8 shadow-lg md:p-12">
            <h2 className="font-heading text-2xl font-bold text-dark">
              Application Form
            </h2>
            <p className="mt-2 text-gray-600">
              Fill out the form below and our team will review your application.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    placeholder="Your full name"
                    {...register("fullName")}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="dateOfBirth">Date of Birth</Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    {...register("dateOfBirth")}
                  />
                  {errors.dateOfBirth && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.dateOfBirth.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
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
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="preferredCountry">Preferred Country</Label>
                  <Select
                    id="preferredCountry"
                    {...register("preferredCountry")}
                  >
                    <option value="">Select a country</option>
                    {COUNTRIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </Select>
                  {errors.preferredCountry && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.preferredCountry.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="preferredProgram">Preferred Program</Label>
                  <Select
                    id="preferredProgram"
                    {...register("preferredProgram")}
                  >
                    <option value="">Select a program</option>
                    {PROGRAMS.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </Select>
                  {errors.preferredProgram && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.preferredProgram.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                <div>
                  <Label htmlFor="academicQualification">
                    Academic Qualification
                  </Label>
                  <Select
                    id="academicQualification"
                    {...register("academicQualification")}
                  >
                    <option value="">Select</option>
                    {ACADEMIC_QUALIFICATIONS.map((q) => (
                      <option key={q} value={q}>
                        {q}
                      </option>
                    ))}
                  </Select>
                  {errors.academicQualification && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.academicQualification.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="passportStatus">Passport Status</Label>
                  <Select
                    id="passportStatus"
                    {...register("passportStatus")}
                  >
                    <option value="">Select</option>
                    {PASSPORT_STATUSES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </Select>
                  {errors.passportStatus && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.passportStatus.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="englishProficiency">
                    English Proficiency
                  </Label>
                  <Select
                    id="englishProficiency"
                    {...register("englishProficiency")}
                  >
                    <option value="">Select</option>
                    {ENGLISH_PROFICIENCY.map((e) => (
                      <option key={e} value={e}>
                        {e}
                      </option>
                    ))}
                  </Select>
                  {errors.englishProficiency && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.englishProficiency.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your academic background and study abroad goals..."
                  rows={4}
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
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Submit Application
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
