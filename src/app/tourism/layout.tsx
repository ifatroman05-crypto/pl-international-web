import type { Metadata } from "next"
import { siteConfig } from "@/content/site"

export const metadata: Metadata = {
  title: "Tourism Packages",
  description:
    "Explore our curated tourism packages to Malaysia and Australia. Hotel booking, flight tickets, guided tours, and 24/7 support — all under one trusted agency.",
  openGraph: {
    title: `Tourism Packages | ${siteConfig.name}`,
    description:
      "Explore our curated tourism packages to Malaysia and Australia. Hotel booking, flight tickets, guided tours, and 24/7 support.",
    url: `${siteConfig.url}/tourism`,
    siteName: siteConfig.shortName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Tourism Packages | ${siteConfig.name}`,
    description:
      "Explore our curated tourism packages to Malaysia and Australia. Hotel booking, flight tickets, guided tours, and 24/7 support.",
  },
  alternates: {
    canonical: `${siteConfig.url}/tourism`,
  },
}

export default function TourismLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
