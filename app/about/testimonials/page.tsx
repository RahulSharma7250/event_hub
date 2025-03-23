import Image from "next/image"
import { Star } from "lucide-react"

import { Navigation } from "../../components/navigation"
import { Footer } from "../../components/footer"

// Mock data for testimonials
const testimonials = [
  {
    id: 1,
    name: "Rahul & Priya",
    service: "Proposal Setup",
    rating: 5,
    testimonial:
      "The team at Surprise Planner created the most magical beach proposal setup. Everything was perfect, from the flower pathway to the photographer capturing the moment. She said yes! We couldn't have asked for a better experience.",
    image: "/placeholder.svg?height=100&width=100&text=R%26P",
  },
  {
    id: 2,
    name: "Vikram & Neha",
    service: "Anniversary Celebration",
    rating: 5,
    testimonial:
      "We wanted to do something special for our 5th anniversary, and Surprise Planner delivered beyond our expectations. The rooftop dinner setup with city views was breathtaking. The attention to detail was impressive - they even included photos from our wedding day in the decoration.",
    image: "/placeholder.svg?height=100&width=100&text=V%26N",
  },
  {
    id: 3,
    name: "Ananya Desai",
    service: "Birthday Surprise",
    rating: 5,
    testimonial:
      "I wanted to surprise my husband on his 30th birthday, and the team helped me plan a surprise party that left him speechless. From the themed decoration to the cake, everything was perfect. Highly recommend their services!",
    image: "/placeholder.svg?height=100&width=100&text=AD",
  },
  {
    id: 4,
    name: "Arjun & Meera",
    service: "Candlelight Dinner",
    rating: 4,
    testimonial:
      "The candlelight dinner setup was beautiful and romantic. The team was professional and took care of every detail. The only reason for 4 stars instead of 5 is that there was a slight delay in setup, but they made up for it with excellent service.",
    image: "/placeholder.svg?height=100&width=100&text=A%26M",
  },
  {
    id: 5,
    name: "Riya Shah",
    service: "Room Decoration",
    rating: 5,
    testimonial:
      "I hired Surprise Planner to decorate my parents' room for their anniversary. They transformed an ordinary room into something magical! My parents were so touched by the gesture. The team was easy to work with and understood exactly what I wanted.",
    image: "/placeholder.svg?height=100&width=100&text=RS",
  },
  {
    id: 6,
    name: "Karan & Simran",
    service: "Proposal Planning",
    rating: 5,
    testimonial:
      "From the first consultation to the actual proposal day, the team was incredible. They helped me plan a proposal at our favorite spot in the city with musicians, flowers, and a photographer to capture it all. It was perfect!",
    image: "/placeholder.svg?height=100&width=100&text=K%26S",
  },
  {
    id: 7,
    name: "Nisha Patel",
    service: "Balloon Bouquet",
    rating: 5,
    testimonial:
      "The balloon bouquet arrangement for my daughter's birthday was stunning! The team delivered on time and the quality was excellent. Will definitely use their services again.",
    image: "/placeholder.svg?height=100&width=100&text=NP",
  },
  {
    id: 8,
    name: "Aditya & Pooja",
    service: "Home Surprise",
    rating: 5,
    testimonial:
      "We wanted to surprise our parents on their 30th wedding anniversary. The team transformed our living room into an elegant celebration space. The look on our parents' faces was priceless. Thank you for making it so special!",
    image: "/placeholder.svg?height=100&width=100&text=A%26P",
  },
]

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <section className="bg-muted py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4">Client Testimonials</h1>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto">
              Don{"'"}t just take our word for it. Here{"'"}s what our clients have to say about their experience with
              Surprise Planner.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-background rounded-lg shadow-sm p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">Service: {testimonial.service}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="italic text-muted-foreground">
                    {'"'}
                    {testimonial.testimonial}
                    {'"'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Create Your Own Success Story?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Join our happy clients and let us help you create unforgettable moments for your special occasions.
            </p>
            <div className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              <a href="/contact">Contact Us Today</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

