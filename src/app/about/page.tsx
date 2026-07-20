import type { Metadata } from "next"
import Image from "next/image"
import { siteConfig } from "@/content/site"
import PageHero from "@/components/sections/page-hero"
import Stats from "@/components/sections/stats"
import WhyChooseUs from "@/components/sections/why-choose-us"
import CTABanner from "@/components/sections/cta-banner"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about PL International, your trusted partner in study abroad consultancy. Meet our founder and discover why students choose us.",
  openGraph: {
    title: "About PL International",
    description:
      "Learn about PL International, your trusted partner in study abroad consultancy.",
  },
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
}

const missionData = [
  {
    title: "Our Mission",
    description:
      "To empower Bangladeshi students with the guidance, resources, and support they need to pursue quality higher education abroad, making the dream of studying at top international universities accessible and achievable for every deserving student.",
  },
  {
    title: "Our Vision",
    description:
      "To become Bangladesh's most trusted and student-centric study abroad consultancy, known for transparency, integrity, and excellence in helping students build successful academic and professional careers globally.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About PL International"
        subtitle="Your trusted partner in study abroad"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {missionData.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-light p-8 shadow-lg"
              >
                <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl">
                  {item.title}
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="rounded-3xl overflow-hidden">
              <Image
                src="/ceo/saad-nazrul.jpg"
                alt="Sa'ad Nazrul, Founder & CEO of PL International"
                width={400}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold text-light md:text-4xl">
                Meet Our Founder
              </h2>
              <h3 className="mt-2 text-xl font-semibold text-accent">
                {siteConfig.ceo.name}
              </h3>
              <p className="mt-1 text-sm text-gray-400">
                {siteConfig.ceo.role}
              </p>
              <p className="mt-6 text-gray-300 leading-relaxed">
                {siteConfig.ceo.fullBio}
              </p>
              <div className="mt-8 space-y-3">
                {[
                  "10+ years of industry experience",
                  "500+ successful student placements",
                  "98% visa success rate",
                  "Partnerships with 50+ top universities",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 text-accent" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <Stats />

      <CTABanner
        title="Ready to Begin Your Journey?"
        description="Let us help you achieve your dream of studying abroad."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  )
}
