import Link from "next/link"

import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="bg-background border-b">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <Link href="/" className="-m-1.5 p-1.5">
          <span className="text-xl font-bold">Discover Chart</span>
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  )
}
