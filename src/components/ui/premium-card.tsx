import { cn } from "@/lib/utils"

interface PremiumCardProps {
  children: React.ReactNode
  className?: string
  variant?: "glass" | "glass-dark" | "glass-accent"
  hover?: boolean
}

export default function PremiumCard({
  children,
  className,
  variant = "glass",
  hover = true,
}: PremiumCardProps) {
  return (
    <div
      className={cn(
        variant === "glass" && "glass",
        variant === "glass-dark" && "glass-dark",
        variant === "glass-accent" && "glass-accent",
        hover && "premium-glow hover:translate-y-[-4px]",
        className,
      )}
    >
      {children}
    </div>
  )
}
