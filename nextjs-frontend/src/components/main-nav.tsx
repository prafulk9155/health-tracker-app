import Link from "next/link"
import { Heart } from 'lucide-react'

import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary"
      >
        <Heart className="h-6 w-6" />
        {/* <span>Health Tracker</span> */}
      </Link>
      <Link
        href="/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Dashboard
      </Link>
      <Link
        href="/goals"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Goals
      </Link>
      <Link
        href="/insights"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Insights
      </Link>
      <Link
        href="/profile"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Profile
      </Link>
    </nav>
  )
}