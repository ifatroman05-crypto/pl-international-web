import type { Metadata } from "next"
import { siteConfig } from "@/content/site"
import PageHero from "@/components/sections/page-hero"
import CTABanner from "@/components/sections/cta-banner"
import FAQAccordion from "@/components/ui/faq-accordion"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Study in Malaysia",
  description:
    "Malaysia offers world-class education at affordable costs. Learn about top universities, tuition fees, visa process, and more for Bangladeshi students.",
  openGraph: {
    title: "Study in Malaysia | PL International",
    description:
      "Malaysia offers world-class education at affordable costs. Learn about top universities, tuition fees, visa process, and more.",
  },
  alternates: {
    canonical: `${siteConfig.url}/study-in-malaysia`,
  },
}

const malaysia = siteConfig.destinations.malaysia

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: malaysia.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export default function StudyInMalaysiaPage() {
  return (
    <>
      <PageHero
        title="Study in Malaysia"
        subtitle="World-class education at affordable costs"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Study in Malaysia", href: "/study-in-malaysia" },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">
              Why Study in Malaysia?
            </h2>
            <p className="mt-4 text-lg text-gray-600">{malaysia.description}</p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {malaysia.whyStudy.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-light p-5 shadow-lg"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-primary text-center md:text-4xl">
            Top Universities in Malaysia
          </h2>
          <p className="mt-4 text-center text-gray-600">
            Choose from Malaysia&apos;s leading universities
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {malaysia.topUniversities.map((uni) => (
              <div
                key={uni.name}
                className="rounded-3xl border border-gray-200 bg-light p-6 shadow-lg"
              >
                <h3 className="font-heading text-base font-semibold text-dark">
                  {uni.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{uni.ranking}</p>
              </div>
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
            Affordable education options for every budget
          </p>

          <div className="mt-12 overflow-hidden rounded-3xl border border-gray-200 shadow-lg">
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
                {malaysia.tuitionFees.map((fee, i) => (
                  <tr
                    key={fee.program}
                    className={`border-t border-gray-100 ${
                      i % 2 === 0 ? "bg-light" : "bg-gray-50"
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
            Step-by-step guide to obtaining your Malaysian student visa
          </p>

          <div className="mt-12 space-y-6">
            {malaysia.visaProcess.map((step) => (
              <div
                key={step.step}
                className="relative flex items-start gap-6 rounded-3xl border border-gray-200 bg-light p-6 shadow-lg"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-light">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-dark">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-primary text-center md:text-4xl">
            EMGS Overview
          </h2>
          <p className="mt-4 text-center text-gray-600 mx-auto max-w-3xl">
            Education Malaysia Global Services (EMGS) is the central agency that
            processes all international student visa applications for Malaysia.
            Once your university submits your application, EMGS coordinates with
            the Immigration Department to issue your Visa Approval Letter (VAL).
            PL International guides you through every step of the EMGS process
            to ensure a smooth visa approval.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-primary text-center md:text-4xl">
            Frequently Asked Questions
          </h2>

          <FAQAccordion items={malaysia.faqs} />
        </div>
      </section>

      <CTABanner
        title="Apply for Malaysia Now"
        description="Start your journey to study in Malaysia with expert guidance from PL International."
        buttonText="Apply for Malaysia"
        buttonHref="/apply"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
