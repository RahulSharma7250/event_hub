import Image from "next/image"

import { Navigation } from "../components/navigation"
import { Footer } from "../components/footer"

// Mock data for gallery images
const galleryImages = [
  {
    id: 1,
    src: "/prop.jpeg?height=600&width=800&text=Proposal+Setup",
    alt: "Proposal Setup",
    category: "Proposal Setup",
  },
  {
    id: 2,
    src: "/rom.jpeg?height=600&width=800&text=Candlelight+Dinner",
    alt: "Candlelight Dinner",
    category: "Candlelight Dinners",
  },
  {
    id: 3,
    src: "/anni.jpeg?height=600&width=800&text=Anniversary+Celebration",
    alt: "Anniversary Celebration",
    category: "Anniversary Specials",
  },
  {
    id: 4,
    src: "/dec5.jpeg?height=600&width=800&text=Room+Decoration",
    alt: "Room Decoration",
    category: "Room Decorations",
  },
  {
    id: 5,
    src: "/ball.jpeg?height=600&width=800&text=Balloon+Bouquet",
    alt: "Balloon Bouquet",
    category: "Balloon Bouquet",
  },
  {
    id: 6,
    src: "/roomde.jpeg?height=600&width=800&text=Home+Surprise",
    alt: "Home Surprise",
    category: "Home Surprises",
  },
  {
    id: 7,
    src: "/wedding.jpeg?height=600&width=800&text=Wedding+Setup",
    alt: "Wedding Setup",
    category: "Wedding Planner",
  },
  {
    id: 8,
    src: "/honey.jpeg?height=600&width=800&text=Honeymoon+Trip",
    alt: "Honeymoon Trip",
    category: "Honeymoon Trip",
  },
  {
    id: 9,
    src: "/happy.jpeg?height=600&width=800&text=Birthday+Surprise",
    alt: "Birthday Surprise",
    category: "Home Surprises",
  },
  {
    id: 10,
    src: "/roof.jpeg?height=600&width=800&text=Proposal+Moment",
    alt: "Proposal Moment",
    category: "Proposal Setup",
  },
  {
    id: 11,
    src: "/anni2.jpeg?height=600&width=800&text=Anniversary+Dinner",
    alt: "Anniversary Dinner",
    category: "Anniversary Specials",
  },
  {
    id: 12,
    src: "/wedding.jpeg?height=600&width=800&text=Wedding+Decoration",
    alt: "Wedding Decoration",
    category: "Wedding Planner",
  },
]

// Categories for filter
const categories = [
  "All",
  "Proposal Setup",
  "Candlelight Dinners",
  "Anniversary Specials",
  "Home Surprises",
  "Room Decorations",
  "Balloon Bouquet",
  "Wedding Planner",
  "Honeymoon Trip",
]

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <section className="bg-muted py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4">Our Gallery</h1>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto">
              Browse through our collection of surprise moments we&apos;ve created for our clients.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm ${
                    category === "All" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((image) => (
                <div key={image.id} className="group relative overflow-hidden rounded-lg">
                  <div className="aspect-square relative">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div>
                      <h3 className="text-white font-medium">{image.alt}</h3>
                      <p className="text-white/80 text-sm">{image.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

