"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Navigation } from "../../components/navigation";
import { Footer } from "../../components/footer";
import { ServiceCard } from "../../components/service-card";

// Mock data for services within a category
const services = [
  {
    id: "1",
    title: "Romantic Candlelight Dinner",
    description: "A magical evening with a premium candlelight dinner setup.",
    image: "/placeholder.svg?height=400&width=600&text=Candlelight+Dinner+1",
    price: "₹8,000",
  },
  {
    id: "2",
    title: "Private Candlelight Dinner",
    description: "An intimate dinner setup for two in a private venue.",
    image: "/placeholder.svg?height=400&width=600&text=Candlelight+Dinner+2",
    price: "₹10,000",
  },
  {
    id: "3",
    title: "Home Candlelight Dinner",
    description: "Bring the romance home with a personalized dinner setup.",
    image: "/placeholder.svg?height=400&width=600&text=Candlelight+Dinner+3",
    price: "₹6,000",
  },
];

// Define the type for params with an index signature
interface Params {
  [key: string]: string | string[]; // Index signature to handle dynamic route parameters
  category: string; // Explicitly define the `category` property
}

export default function CategoryPage() {
  // Use useParams to get the category from the URL
  const params = useParams<Params>();

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <section className="bg-muted py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4">
              {params.category
                ? params.category
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")
                : "Category"}
            </h1>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
              Explore our curated selection of services for{" "}
              {params.category
                ? params.category
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")
                : "this category"}.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  imageSrc={service.image}
                  price={service.price}
                  slug={`/categories/${params.category}/${service.id}`}
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
  );
}