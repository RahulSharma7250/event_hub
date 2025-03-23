import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "../../components/ui/button"
import { Navigation } from "../../components/navigation"
import { Footer } from "../../components/footer"

// Mock data for services in this category
const services = [
  {
    id: "standard-balloon-bouquet",
    title: "Standard Balloon Bouquet",
    description:
      "A beautiful arrangement of colorful balloons perfect for birthdays, anniversaries, or any celebration.",
    image: "/ball.jpeg?height=400&width=600&text=Standard+Balloon+Bouquet",
    price: "₹1,500",
  },
  {
    id: "premium-balloon-bouquet",
    title: "Premium Balloon Bouquet",
    description: "An elegant arrangement of premium balloons with custom colors and designs for special occasions.",
    image: "/dec5.jpeg?height=400&width=600&text=Premium+Balloon+Bouquet",
    price: "₹2,500",
  },
  {
    id: "balloon-surprise-box",
    title: "Balloon Surprise Box",
    description: "A box filled with helium balloons that float out when opened, creating a magical surprise moment.",
    image: "/box.jpeg?height=400&width=600&text=Balloon+Surprise+Box",
    price: "₹3,000",
  },
  {
    id: "balloon-decoration",
    title: "Balloon Decoration",
    description: "Complete room or venue decoration with balloons for parties and special events.",
    image: "/surprise.jpeg?height=400&width=600&text=Balloon+Decoration",
    price: "₹5,000",
  },
]

export default function BalloonBouquetPage() {
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
            <h1 className="text-4xl font-bold mb-4">Balloon Bouquet</h1>
            <p className="text-muted-foreground max-w-2xl">
              Explore our range of balloon bouquet services designed to add color and joy to your special occasions.
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
                    <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
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
                        href={`/categories/balloon-bouquet/${service.id}`}
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
              <h2 className="text-2xl font-bold mb-3 text-center">Need a Custom Balloon Arrangement?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6 text-center text-sm">
                We can create custom balloon arrangements for any occasion. Contact us to discuss your specific
                requirements and let us bring your vision to life.
              </p>
              <div className="flex justify-center">
                <Button
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 text-sm rounded-md shadow-sm hover:shadow-md transition-all"
                  asChild
                >
                  <Link href="/contact" className="flex items-center">
                    Contact Us for Custom Arrangements
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

