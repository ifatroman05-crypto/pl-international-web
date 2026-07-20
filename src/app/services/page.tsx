import type { Metadata } from "next"
import { siteConfig } from "@/content/site"
import PageHero from "@/components/sections/page-hero"
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
} from "lucide-react"

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive study abroad services including counseling, university admission, visa processing, embassy appointment, and more.",
  openGraph: {
    title: "Our Services | PL International",
    description:
      "Comprehensive study abroad services including counseling, university admission, visa processing, and more.",
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
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive study abroad services"
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
              guide you through every step of your study abroad journey. From
              initial counseling to pre-departure support, our experienced team
              ensures a smooth and hassle-free experience.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {siteConfig.services.map((service) => (
              <div
                key={service.title}
                className="group rounded-3xl border border-gray-200 bg-light p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  {iconMap[service.icon] || <GraduationCap className="h-8 w-8" />}
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-dark">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Looking for Specific Assistance?"
        description="Contact us today and let our experts guide you through every step of your study abroad journey."
        buttonText="Get Started"
        buttonHref="/apply"
      />
    </>
  )
}
