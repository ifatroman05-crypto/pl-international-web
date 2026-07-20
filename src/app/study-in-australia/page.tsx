import type { Metadata } from "next"
import { siteConfig } from "@/content/site"
import PageHero from "@/components/sections/page-hero"
import CTABanner from "@/components/sections/cta-banner"
import PremiumCard from "@/components/ui/premium-card"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Study in Australia | PL International",
  description:
    "Australia is home to some of the world's top universities. Learn about top universities, tuition fees, visa process, and more for Bangladeshi students.",
  openGraph: {
    title: "Study in Australia | PL International",
    description:
      "Australia is home to some of the world's top universities. Learn about top universities, tuition fees, visa process, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Study in Australia | PL International",
    description:
      "Australia is home to some of the world's top universities. Learn about top universities, tuition fees, visa process, and more for Bangladeshi students.",
  },
  alternates: {
    canonical: `${siteConfig.url}/study-in-australia`,
  },
}

const australia = siteConfig.destinations.australia

export default function StudyInAustraliaPage() {
  return (
    <>
      <PageHero
        title="Study in Australia"
        subtitle="World-class education with global career opportunities"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Study in Australia", href: "/study-in-australia" },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">
              Why Study in Australia?
            </h2>
            <p className="mt-4 text-lg text-gray-600">{australia.description}</p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {australia.whyStudy.map((item) => (
              <PremiumCard key={item} className="flex items-start gap-3 p-5" hover={false}>
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm text-gray-700">{item}</span>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-primary text-center md:text-4xl">
            Top Universities in Australia
          </h2>
          <p className="mt-4 text-center text-gray-600">
            Choose from Australia&apos;s world-leading universities
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {australia.topUniversities.map((uni) => (
              <PremiumCard key={uni.name} className="p-6" hover={false}>
                <h3 className="font-heading text-base font-semibold text-dark">
                  {uni.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{uni.ranking}</p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-primary text-center md:text-4xl">
            Tuition Fee Ranges
          </h2>
          <p className="mt-4 text-center text-gray-600">
            Investment in your future with world-class education
          </p>

          <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/70 backdrop-blur-xl shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-light">
                  <th className="px-6 py-4 text-left font-heading text-sm font-semibold">
                    Program
                  </th>
                  <th className="px-6 py-4 text-left font-heading text-sm font-semibold">
                    Tuition Fee Range (per year)
                  </th>
                </tr>
              </thead>
              <tbody>
                {australia.tuitionFees.map((fee, i) => (
                  <tr
                    key={fee.program}
                    className={`border-t border-white/10 ${
                      i % 2 === 0 ? "bg-white/50" : "bg-transparent"
                    }`}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-dark">
                      {fee.program}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {fee.range}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-primary text-center md:text-4xl">
            Visa Process Timeline
          </h2>
          <p className="mt-4 text-center text-gray-600">
            Step-by-step guide to obtaining your Australian student visa
          </p>

          <div className="mt-12 space-y-6">
            {australia.visaProcess.map((step) => (
              <PremiumCard key={step.step} className="flex items-start gap-6 p-6" hover={false}>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-light">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-dark">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-gray-600">{step.description}</p>
                </div>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Apply for Australia Now"
        description="Start your journey to study in Australia with expert guidance from PL International."
        buttonText="Apply for Australia"
        buttonHref="/apply"
      />
    </>
  )
}
