import type { Metadata } from "next"
import { siteConfig } from "@/content/site"

export const metadata: Metadata = {
  title: "Contact Us | PL International",
  description:
    "Get in touch with PL International for study abroad counseling, university admission, and visa processing support. Reach us by phone, email, or visit our office in Dhaka.",
  openGraph: {
    title: "Contact Us | PL International",
    description:
      "Get in touch with PL International for study abroad counseling, university admission, and visa processing support.",
    url: `${siteConfig.url}/contact`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | PL International",
    description:
      "Get in touch with PL International for study abroad counseling, university admission, and visa processing support.",
  },
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
