import Link from "next/link"
import { cn } from "@/lib/utils"

interface Breadcrumb {
  label: string
  href: string
}

interface PageHeroProps {
  title: string
  subtitle?: string
  breadcrumbs?: Breadcrumb[]
  className?: string
}

export default function PageHero({ title, subtitle, breadcrumbs, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-[40vh] items-center justify-center overflow-hidden bg-gradient-to-br from-primary to-dark px-4 pt-20 lg:min-h-[45vh]",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-4 flex items-center justify-center gap-2 text-sm text-white/60">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.href} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-accent">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="transition-colors hover:text-accent">
                    {crumb.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>
        )}

        <h1 className="font-heading text-3xl font-bold text-light sm:text-4xl lg:text-5xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 font-body text-base text-white/70 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
