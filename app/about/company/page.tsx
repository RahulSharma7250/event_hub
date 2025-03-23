import Image from "next/image"
import Link from "next/link"

import { Button } from "../../components/ui/button"
import { Navigation } from "../../components/navigation"
import { Footer } from "../../components/footer"

export default function AboutCompanyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <section className="bg-muted py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4">About Our Company</h1>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto">
              Learn about Surprise Planner and our mission to create unforgettable moments.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=1200&text=Our+Story"
                  alt="Our Story"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Surprise Planner was founded in 2018 with a simple mission: to help people create magical moments for
                  their loved ones. What started as a small team of passionate event planners has grown into Pune{"'"}s
                  premier surprise planning service.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our founder, Ananya Sharma, recognized that while many people wanted to create special moments for
                  their partners, friends, and family, they often lacked the time, resources, or creative vision to
                  execute their ideas. That{"'"}s where we come in.
                </p>
                <p className="text-muted-foreground mb-6">
                  Over the years, we{"'"}ve helped hundreds of clients across Pune create unforgettable surprises, from
                  intimate proposal setups to elaborate anniversary celebrations. Our dedication to personalized service
                  and attention to detail has made us the go-to choice for surprise planning in the region.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at Surprise Planner.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
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
                <h3 className="text-xl font-bold mb-2">Creating Memories</h3>
                <p className="text-muted-foreground">
                  We believe in the power of special moments to strengthen relationships and create lasting memories.
                  Every surprise we plan is designed to be remembered for a lifetime.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
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
                <h3 className="text-xl font-bold mb-2">Excellence in Service</h3>
                <p className="text-muted-foreground">
                  We are committed to providing exceptional service at every step. From the initial consultation to the
                  final execution, we strive for excellence in everything we do.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
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
                <h3 className="text-xl font-bold mb-2">Personalization</h3>
                <p className="text-muted-foreground">
                  We believe that every relationship is unique, and every surprise should be too. We take the time to
                  understand your story and create experiences that are deeply personal.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Why Choose Surprise Planner?</h2>
                <p className="text-muted-foreground mb-6">
                  What sets us apart from other event planning services in Pune.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="m5 12 5 5L20 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Local Expertise</h3>
                      <p className="text-muted-foreground">
                        As a Pune-based company, we have extensive knowledge of the best venues, vendors, and
                        experiences the city has to offer.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="m5 12 5 5L20 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Dedicated Team</h3>
                      <p className="text-muted-foreground">
                        Our team of experienced planners, decorators, and coordinators work tirelessly to ensure every
                        detail is perfect.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="m5 12 5 5L20 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Customization</h3>
                      <p className="text-muted-foreground">
                        We don{"'"}t believe in one-size-fits-all solutions. Every surprise we plan is tailored to your
                        specific needs and preferences.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="m5 12 5 5L20 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Attention to Detail</h3>
                      <p className="text-muted-foreground">
                        We believe that it{"'"}s the small details that make a big difference. Our meticulous planning
                        ensures nothing is overlooked.
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8">
                  <Button asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>

              <div className="relative h-[400px] rounded-lg overflow-hidden lg:order-first">
                <Image
                  src="/placeholder.svg?height=800&width=1200&text=Why+Choose+Us"
                  alt="Why Choose Us"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Create Unforgettable Moments?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-primary-foreground/90">
              Let our team help you plan the perfect surprise for your special occasions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/categories">Explore Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

