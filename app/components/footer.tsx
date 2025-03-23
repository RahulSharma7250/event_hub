import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">
              <span className="text-red-600">The</span> Event <span className="text-red-600">Hub</span>
            </h3>
            <p className="text-muted-foreground mb-4">
              Creating unforgettable moments and memories for all your special occasions in Pune.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about/company" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-primary">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/categories/proposal-setup" className="text-muted-foreground hover:text-primary">
                  Proposal Setup
                </Link>
              </li>
              <li>
                <Link href="/categories/candlelight-dinners" className="text-muted-foreground hover:text-primary">
                  Candlelight Dinners
                </Link>
              </li>
              <li>
                <Link href="/categories/anniversary-specials" className="text-muted-foreground hover:text-primary">
                  Anniversary Specials
                </Link>
              </li>
              <li>
                <Link href="/categories/room-decorations" className="text-muted-foreground hover:text-primary">
                  Room Decorations
                </Link>
              </li>
              <li>
                <Link href="/categories/wedding-planner" className="text-muted-foreground hover:text-primary">
                  Wedding Planner
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span className="text-muted-foreground">
                  123 Surprise Street, Koregaon Park, Pune, Maharashtra 411001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2" />
                <span className="text-muted-foreground">+91 84848 61112</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2" />
                <span className="text-muted-foreground">Pandepranit001@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Surprise Planner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

