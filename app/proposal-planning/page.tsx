import Link from "next/link"
import Image from "next/image"
import { Check } from "lucide-react"

import { Button } from "../components/ui/button"
import { Navigation } from "../components/navigation"
import { Footer } from "../components/footer"

export default function ProposalPlanningPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/propose.png?height=800&width=1920&text=Proposal+Planning"
              alt="Proposal Planning"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 lg:py-40">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Create the Perfect Proposal Moment
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Let us help you plan and execute the perfect proposal that reflects your unique love story and
                guarantees a &quot;Yes!&quot;
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Plan Your Proposal</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                  asChild
                >
                  <Link href="#proposal-packages">View Packages</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Proposal Planning Service</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We take care of every detail so you can focus on the moment that matters most.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Personalized Experience</h3>
                <p className="text-muted-foreground">
                  We create custom proposal experiences that reflect your unique relationship and love story.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Stress-Free Planning</h3>
                <p className="text-muted-foreground">
                  We handle all the details, from location scouting to setup, so you can focus on the big moment.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Professional Execution</h3>
                <p className="text-muted-foreground">
                  Our experienced team ensures every element of your proposal goes according to plan.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted" id="proposal-packages">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Proposal Packages</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose from our carefully crafted proposal packages or let us create a custom experience just for you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Intimate Proposal</h3>
                  <p className="text-primary font-bold text-2xl mb-4">₹20,000</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Private venue setup</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Basic decoration with flowers</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Background music</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Photography (1 hour)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Proposal planning assistance</span>
                    </li>
                  </ul>
                  <Button className="w-full" asChild>
                    <Link href="/contact">Book Now</Link>
                  </Button>
                </div>
              </div>

              <div className="bg-background rounded-lg shadow-md overflow-hidden border-2 border-primary relative">
                <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
                  Most Popular
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Romantic Extravaganza</h3>
                  <p className="text-primary font-bold text-2xl mb-4">₹45,000</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Premium venue setup</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Elaborate decoration with premium flowers</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Customized music arrangement</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Photography & Videography (2 hours)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Champagne toast</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Romantic dinner for two</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Dedicated proposal planner</span>
                    </li>
                  </ul>
                  <Button className="w-full" asChild>
                    <Link href="/contact">Book Now</Link>
                  </Button>
                </div>
              </div>

              <div className="bg-background rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Luxury Proposal</h3>
                  <p className="text-primary font-bold text-2xl mb-4">₹75,000</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Exclusive venue setup</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Luxury decoration with imported flowers</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Live musician or band</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Professional photography & videography</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Premium champagne & gourmet dinner</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Luxury transportation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Overnight stay at premium hotel</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>VIP proposal planning team</span>
                    </li>
                  </ul>
                  <Button className="w-full" asChild>
                    <Link href="/contact">Book Now</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Don&apos;t see exactly what you&apos;re looking for? We specialize in creating custom proposal
                experiences.
              </p>
              <Button variant="outline" asChild>
                <Link href="/contact">Request Custom Package</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Proposal Planning Process</h2>
                <p className="text-muted-foreground mb-6">
                  We make planning your perfect proposal simple and stress-free with our proven process.
                </p>

                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">
                        1
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Initial Consultation</h3>
                      <p className="text-muted-foreground">
                        We start with a detailed consultation to understand your relationship, preferences, and vision
                        for the perfect proposal.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">
                        2
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Proposal Design</h3>
                      <p className="text-muted-foreground">
                        Our team creates a custom proposal plan tailored to your love story, including venue selection,
                        decoration concepts, and timing.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">
                        3
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Planning & Coordination</h3>
                      <p className="text-muted-foreground">
                        We handle all the logistics, vendor coordination, and details to ensure everything goes
                        according to plan.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">
                        4
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">The Big Day</h3>
                      <p className="text-muted-foreground">
                        Our team manages the setup and execution, allowing you to focus on the moment while we ensure
                        everything is perfect.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button asChild>
                    <Link href="/contact">Start Planning Your Proposal</Link>
                  </Button>
                </div>
              </div>

              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=1000&width=800&text=Proposal+Planning"
                  alt="Proposal Planning"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Proposal Success Stories</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Read about the magical proposal moments we&apos;ve helped create for our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-background rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={`/placeholder.svg?height=400&width=600&text=Proposal+Story+${i}`}
                      alt={`Proposal Story ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Rahul & Priya&apos;s Beach Proposal</h3>
                    <p className="text-muted-foreground mb-4">
                      &quot;The team at Surprise Planner created the most magical beach proposal setup. Everything was
                      perfect, from the flower pathway to the photographer capturing the moment. She said yes!&quot;
                    </p>
                    <Button variant="outline" size="sm">
                      Read Full Story
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Perfect Proposal?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-primary-foreground/90">
              Let our expert team help you create a proposal moment that you&apos;ll both remember forever.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

