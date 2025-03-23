import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Heart } from "lucide-react"

import { Button } from "../../components/ui/button"
import { Navigation } from "../../components/navigation"
import { Footer } from "../../components/footer"

// Mock data for services in this category
const services = [
  {
    id: "romantic-dinner",
    title: "Romantic Candlelight Dinner",
    description:
      "Experience a magical evening with our premium candlelight dinner setup. Perfect for anniversaries, birthdays, or just to show your love.",
    image: "/sur2.jpeg?height=400&width=600&text=Romantic+Dinner",
    price: "₹8,000",
  },
  {
    id: "rooftop-dinner",
    title: "Rooftop Candlelight Dinner",
    description:
      "Enjoy a romantic dinner under the stars with our exclusive rooftop candlelight dinner setup with city views.",
    image: "/roof.jpeg?height=400&width=600&text=Rooftop+Dinner",
    price: "₹12,000",
  },
  {
    id: "private-beach-dinner",
    title: "Private Beach Dinner",
    description:
      "Experience the ultimate romantic dinner on a private beach with the sound of waves and beautiful sunset views.",
    image: "/beach3.jpeg?height=400&width=600&text=Beach+Dinner",
    price: "₹15,000",
  },
  {
    id: "home-dinner-setup",
    title: "Home Candlelight Dinner",
    description:
      "Transform your home into a romantic restaurant with our professional candlelight dinner setup service.",
    image: "/roomde.jpeg?height=400&width=600&text=Home+Dinner",
    price: "₹6,000",
  },
]

export default function CandlelightDinnersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1 bg-gray-50">
        <section className="bg-muted py-12">
          <div className="container mx-auto px-4">
            <Link href="/categories" className="flex items-center text-muted-foreground hover:text-foreground mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Categories
            </Link>
            <h1 className="text-4xl font-bold mb-4">Candlelight Dinners</h1>
            <p className="text-muted-foreground max-w-2xl">
              Explore our range of romantic candlelight dinner experiences designed to create magical moments for you
              and your loved one.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-gray-100"
                >
                  <div className="relative h-72 w-full overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-md flex items-center">
                      <Heart className="h-3 w-3 mr-1 fill-white" />
                      {service.price}
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-5 border-t border-gray-100">
                    <h2 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground mb-4 text-sm line-clamp-2">{service.description}</p>
                    <Button
                      className="w-full bg-red-600 hover:bg-red-700 text-white rounded-md shadow-sm hover:shadow-md transition-all duration-300 text-sm py-2"
                      asChild
                    >
                      <Link
                        href={`/categories/candlelight-dinners/${service.id}`}
                        className="flex items-center justify-center"
                      >
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-8 shadow-md border border-red-100">
              <h2 className="text-2xl font-bold mb-3 text-center">Want a Custom Dining Experience?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6 text-center text-sm">
                We can create custom candlelight dinner experiences tailored to your preferences. Contact us to discuss
                your dream dinner setup and make your special occasion truly unforgettable.
              </p>
              <div className="flex justify-center">
                <Button
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 text-sm rounded-md shadow-sm hover:shadow-md transition-all"
                  asChild
                >
                  <Link href="/contact" className="flex items-center">
                    Contact Us for Custom Dining Experiences
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

