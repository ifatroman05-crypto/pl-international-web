import type { Metadata } from "next"
import { siteConfig } from "@/content/site"
import PageHero from "@/components/sections/page-hero"
import PremiumCard from "@/components/ui/premium-card"
import CTABanner from "@/components/sections/cta-banner"
import {
  GraduationCap,
  University,
  Stamp,
  Building,
  Plane,
  Landmark,
  Award,
  Backpack,
  Map,
  Car,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive services including study abroad counseling, university admission, visa processing, tourism packages, hotel booking, and airport support.",
  openGraph: {
    title: "Our Services | PL International",
    description:
      "Comprehensive services including study abroad counseling, university admission, visa processing, tourism packages, and more.",
  },
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
}

const iconMap: Record<string, React.ReactNode> = {
  "graduation-cap": <GraduationCap className="h-8 w-8" />,
  university: <University className="h-8 w-8" />,
  passport: <Stamp className="h-8 w-8" />,
  building: <Building className="h-8 w-8" />,
  plane: <Plane className="h-8 w-8" />,
  landmark: <Landmark className="h-8 w-8" />,
  award: <Award className="h-8 w-8" />,
  backpack: <Backpack className="h-8 w-8" />,
  map: <Map className="h-8 w-8" />,
  car: <Car className="h-8 w-8" />,
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Education • Tourism • Visa Solutions — All Under One Roof"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg text-gray-600 leading-relaxed">
              At PL International, we offer a complete range of services to
              guide you through every step of your study abroad journey and
              travel experience — from initial counseling and university admission
              to tourism packages and airport support.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {siteConfig.services.map((service) => (
              <PremiumCard key={service.title} className="p-6 group cursor-default">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  {iconMap[service.icon] || <GraduationCap className="h-8 w-8" />}
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-dark">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Looking for Specific Assistance?"
        description="Contact us today and let our experts guide you through your education or travel journey."
        buttonText="Get Started"
        buttonHref="/apply"
      />
    </>
  )
}
