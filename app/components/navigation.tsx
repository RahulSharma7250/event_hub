"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"

import { Button } from "../components/ui/button"
import { cn } from "../lib/utils"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false)
  const pathname = usePathname()

  const aboutRef = useRef<HTMLDivElement>(null)
  const categoriesRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleAboutDropdown = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCategoriesDropdownOpen(false)
    setAboutDropdownOpen(!aboutDropdownOpen)
  }

  const toggleCategoriesDropdown = (e: React.MouseEvent) => {
    e.stopPropagation()
    setAboutDropdownOpen(false)
    setCategoriesDropdownOpen(!categoriesDropdownOpen)
  }

  // Function to check if a path is active
  const isActive = (path: string) => {
    return pathname === path || pathname?.startsWith(path + "/")
  }

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (aboutRef.current && !aboutRef.current.contains(event.target as Node)) {
        setAboutDropdownOpen(false)
      }
      if (categoriesRef.current && !categoriesRef.current.contains(event.target as Node)) {
        setCategoriesDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Close dropdowns when route changes
  useEffect(() => {
    setAboutDropdownOpen(false)
    setCategoriesDropdownOpen(false)
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl text-black">
            <span className="text-red-600">The</span> Event <span className="text-red-600">Hub</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium hover:text-red-600",
              isActive("/") && pathname === "/" && "text-red-600 font-semibold",
            )}
          >
            Home
          </Link>

          {/* About Dropdown */}
          <div className="relative" ref={aboutRef}>
            <button
              onClick={toggleAboutDropdown}
              className={cn(
                "flex items-center gap-1 text-sm font-medium hover:text-red-600",
                (isActive("/about") || aboutDropdownOpen) && "text-red-600 font-semibold",
              )}
            >
              About
              <ChevronDown className={`h-4 w-4 transition-transform ${aboutDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {aboutDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                <div className="py-1">
                  <Link
                    href="/about"
                    className="block px-4 py-2 text-sm hover:bg-red-50 hover:text-red-600"
                    onClick={() => setAboutDropdownOpen(false)}
                  >
                    About Overview
                  </Link>
                  <Link
                    href="/about/company"
                    className="block px-4 py-2 text-sm hover:bg-red-50 hover:text-red-600"
                    onClick={() => setAboutDropdownOpen(false)}
                  >
                    About Company
                  </Link>
                  <Link
                    href="/about/team"
                    className="block px-4 py-2 text-sm hover:bg-red-50 hover:text-red-600"
                    onClick={() => setAboutDropdownOpen(false)}
                  >
                    Our Team
                  </Link>
                  <Link
                    href="/about/testimonials"
                    className="block px-4 py-2 text-sm hover:bg-red-50 hover:text-red-600"
                    onClick={() => setAboutDropdownOpen(false)}
                  >
                    Testimonials
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Categories Dropdown */}
          <div className="relative" ref={categoriesRef}>
            <button
              onClick={toggleCategoriesDropdown}
              className={cn(
                "flex items-center gap-1 text-sm font-medium hover:text-red-600",
                (isActive("/categories") || categoriesDropdownOpen) && "text-red-600 font-semibold",
              )}
            >
              Categories
              <ChevronDown className={`h-4 w-4 transition-transform ${categoriesDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {categoriesDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                <div className="py-1">
                  <Link
                    href="/categories"
                    className="block px-4 py-2 text-sm hover:bg-red-50 hover:text-red-600"
                    onClick={() => setCategoriesDropdownOpen(false)}
                  >
                    All Categories
                  </Link>
                  <Link
                    href="/categories/balloon-bouquet"
                    className="block px-4 py-2 text-sm hover:bg-red-50 hover:text-red-600"
                    onClick={() => setCategoriesDropdownOpen(false)}
                  >
                    Balloon Bouquet
                  </Link>
                  <Link
                    href="/categories/candlelight-dinners"
                    className="block px-4 py-2 text-sm hover:bg-red-50 hover:text-red-600"
                    onClick={() => setCategoriesDropdownOpen(false)}
                  >
                    Candlelight Dinners
                  </Link>
                  <Link
                    href="/categories/anniversary-specials"
                    className="block px-4 py-2 text-sm hover:bg-red-50 hover:text-red-600"
                    onClick={() => setCategoriesDropdownOpen(false)}
                  >
                    Anniversary Specials
                  </Link>
                  <Link
                    href="/categories/home-surprises"
                    className="block px-4 py-2 text-sm hover:bg-red-50 hover:text-red-600"
                    onClick={() => setCategoriesDropdownOpen(false)}
                  >
                    Home Surprises
                  </Link>
                  <Link
                    href="/categories/proposal-setup"
                    className="block px-4 py-2 text-sm hover:bg-red-50 hover:text-red-600"
                    onClick={() => setCategoriesDropdownOpen(false)}
                  >
                    Proposal Setup
                  </Link>
                  <Link
                    href="/categories/room-decorations"
                    className="block px-4 py-2 text-sm hover:bg-red-50 hover:text-red-600"
                    onClick={() => setCategoriesDropdownOpen(false)}
                  >
                    Room Decorations
                  </Link>
                  <Link
                    href="/categories/honeymoon-trip"
                    className="block px-4 py-2 text-sm hover:bg-red-50 hover:text-red-600"
                    onClick={() => setCategoriesDropdownOpen(false)}
                  >
                    Honeymoon Trip
                  </Link>
                  <Link
                    href="/categories/wedding-planner"
                    className="block px-4 py-2 text-sm hover:bg-red-50 hover:text-red-600"
                    onClick={() => setCategoriesDropdownOpen(false)}
                  >
                    Wedding Planner
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/proposal-planning"
            className={cn(
              "text-sm font-medium hover:text-red-600",
              isActive("/proposal-planning") && "text-red-600 font-semibold",
            )}
          >
            Proposal Planning
          </Link>

          <Link
            href="/gallery"
            className={cn(
              "text-sm font-medium hover:text-red-600",
              isActive("/gallery") && "text-red-600 font-semibold",
            )}
          >
            Gallery
          </Link>

          <Link
            href="/blog"
            className={cn("text-sm font-medium hover:text-red-600", isActive("/blog") && "text-red-600 font-semibold")}
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className={cn(
              "text-sm font-medium hover:text-red-600",
              isActive("/contact") && "text-red-600 font-semibold",
            )}
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button className="bg-red-600 hover:bg-red-700 text-white" asChild>
            <Link href="/contact">Book Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn("md:hidden", isMenuOpen ? "block" : "hidden")}>
        <div className="container py-4 space-y-4">
          <Link href="/" className="block py-2 text-sm font-medium" onClick={toggleMenu}>
            Home
          </Link>

          <div className="space-y-2">
            <button
              onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
              className="flex items-center justify-between w-full py-2 text-sm font-medium"
            >
              <span>About</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${aboutDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {aboutDropdownOpen && (
              <div className="pl-4 space-y-2 border-l-2 border-red-600">
                <Link href="/about" className="block py-1 text-sm" onClick={toggleMenu}>
                  About Overview
                </Link>
                <Link href="/about/company" className="block py-1 text-sm" onClick={toggleMenu}>
                  About Company
                </Link>
                <Link href="/about/team" className="block py-1 text-sm" onClick={toggleMenu}>
                  Our Team
                </Link>
                <Link href="/about/testimonials" className="block py-1 text-sm" onClick={toggleMenu}>
                  Testimonials
                </Link>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <button
              onClick={() => setCategoriesDropdownOpen(!categoriesDropdownOpen)}
              className="flex items-center justify-between w-full py-2 text-sm font-medium"
            >
              <span>Categories</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${categoriesDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {categoriesDropdownOpen && (
              <div className="pl-4 space-y-2 border-l-2 border-red-600">
                <Link href="/categories" className="block py-1 text-sm" onClick={toggleMenu}>
                  All Categories
                </Link>
                <Link href="/categories/balloon-bouquet" className="block py-1 text-sm" onClick={toggleMenu}>
                  Balloon Bouquet
                </Link>
                <Link href="/categories/candlelight-dinners" className="block py-1 text-sm" onClick={toggleMenu}>
                  Candlelight Dinners
                </Link>
                <Link href="/categories/anniversary-specials" className="block py-1 text-sm" onClick={toggleMenu}>
                  Anniversary Specials
                </Link>
                <Link href="/categories/home-surprises" className="block py-1 text-sm" onClick={toggleMenu}>
                  Home Surprises
                </Link>
                <Link href="/categories/proposal-setup" className="block py-1 text-sm" onClick={toggleMenu}>
                  Proposal Setup
                </Link>
                <Link href="/categories/room-decorations" className="block py-1 text-sm" onClick={toggleMenu}>
                  Room Decorations
                </Link>
                <Link href="/categories/honeymoon-trip" className="block py-1 text-sm" onClick={toggleMenu}>
                  Honeymoon Trip
                </Link>
                <Link href="/categories/wedding-planner" className="block py-1 text-sm" onClick={toggleMenu}>
                  Wedding Planner
                </Link>
              </div>
            )}
          </div>

          <Link href="/proposal-planning" className="block py-2 text-sm font-medium" onClick={toggleMenu}>
            Proposal Planning
          </Link>

          <Link href="/gallery" className="block py-2 text-sm font-medium" onClick={toggleMenu}>
            Gallery
          </Link>

          <Link href="/blog" className="block py-2 text-sm font-medium" onClick={toggleMenu}>
            Blog
          </Link>

          <Link href="/contact" className="block py-2 text-sm font-medium" onClick={toggleMenu}>
            Contact
          </Link>

          <Button className="w-full bg-red-600 hover:bg-red-700 text-white" asChild>
            <Link href="/contact" onClick={toggleMenu}>
              Book Now
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

