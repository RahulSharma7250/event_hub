import Link from "next/link"

import { Navigation } from "../components/navigation"
import { Footer } from "../components/footer"
import { ServiceCard } from "../components/service-card"

// Mock data for categories
const categories = [
  {
    id: "balloon-bouquet",
    title: "Balloon Bouquet",
    description: "Colorful balloon arrangements for all occasions.",
    image: "/ball.jpeg?height=400&width=600&text=Balloon+Bouquet",
    price: "₹1,500",
  },
  {
    id: "candlelight-dinners",
    title: "Candlelight Dinners",
    description: "Romantic candlelight dinners at exclusive venues or in the comfort of your home.",
    image: "/candel5.jpeg?height=400&width=600&text=Candlelight+Dinners",
    price: "₹8,000",
  },
  {
    id: "anniversary-specials",
    title: "Anniversary Specials",
    description: "Celebrate your special day with customized anniversary surprise packages.",
    image: "/anni.jpeg?height=400&width=600&text=Anniversary+Specials",
    price: "₹12,000",
  },
  {
    id: "home-surprises",
    title: "Home Surprises",
    description: "Bring the celebration home with our custom home surprise setups.",
    image: "/dec.jpeg?height=400&width=600&text=Home+Surprises",
    price: "₹5,000",
  },
  {
    id: "proposal-setup",
    title: "Proposal Setup",
    description: "Create the perfect moment to pop the question with our custom proposal setups.",
    image: "/sur2.jpeg?height=400&width=600&text=Proposal+Setup",
    price: "₹15,000",
  },
  {
    id: "room-decorations",
    title: "Room Decorations",
    description: "Transform any space with our beautiful room decoration services.",
    image: "/dec.jpeg?height=400&width=600&text=Room+Decorations",
    price: "₹3,500",
  },
  {
    id: "honeymoon-trip",
    title: "Honeymoon Trip",
    description: "Plan the perfect honeymoon with our customized travel packages.",
    image: "/honey.jpeg?height=400&width=600&text=Honeymoon+Trip",
    price: "₹50,000",
  },
  {
    id: "wedding-planner",
    title: "Wedding Planner",
    description: "Full-service wedding planning to make your special day perfect.",
    image: "/wedding.jpeg?height=400&width=600&text=Wedding+Planner",
    price: "₹1,00,000",
  },
]

export default function CategoriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <section className="bg-muted py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
              Discover our range of surprise planning services designed to create unforgettable moments for all your
              special occasions.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <ServiceCard
                  key={category.id}
                  title={category.title}
                  description={category.description}
                  imageSrc={category.image}
                  price={category.price}
                  slug={`/categories/${category.id}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Need a Custom Package?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Don't see exactly what you're looking for? We specialize in creating custom surprise packages tailored to
              your specific needs and preferences.
            </p>
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Contact Us for Custom Packages
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

