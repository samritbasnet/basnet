"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xl font-medium">
            Samrit Basnet
          </Link>
          <Badge variant="outline" className="text-xs font-normal">
            portfolio
          </Badge>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#education" className="text-sm font-medium hover:text-primary transition-colors">
              Education
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
