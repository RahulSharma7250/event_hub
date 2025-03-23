import Link from "next/link"
import Image from "next/image"
import { ChevronRight, MapPin, Clock, Heart, Calendar, Gift, Sparkles, Zap, Camera, CheckCircle2 } from "lucide-react"

import { Button } from "./components/ui/button"
import { Card, CardContent } from "./components/ui/card"
import { Navigation } from "./components/navigation"
import { Footer } from "./components/footer"
import { ServiceCard } from "./components/service-card"
import { ScrollReveal } from "./components/scroll-reveal"
import { AnimatedGradientText } from "./components/animated-gradient-text"
import { FeatureCard } from "./components/feature-card"
import { TestimonialCard } from "./components/testimonial-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        {/* Enhanced Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/plan.jpg?height=800&width=1920"
              alt="Surprise Planning"
              fill
              className="object-cover brightness-[0.4]"
              priority
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent mix-blend-overlay" />

            {/* Animated particles */}
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100&text=particles')] bg-repeat opacity-20" />
          </div>

          {/* Decorative elements */}
          <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-primary/20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-primary/20 blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 left-1/4 w-64 h-64 blob bg-gradient-to-r from-primary/10 to-pink-500/10 blur-2xl opacity-70"></div>

          <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 lg:py-40">
            <div className="max-w-3xl">
              <div className="mb-4 inline-block">
                <span className="px-4 py-1 rounded-full glass text-white text-sm font-medium">
                  Pune&apos;s Premier Surprise Planners
                </span>
              </div>
              <h1 className="hero-text-animation text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Create{" "}
                <span className="text-primary-foreground relative">
                  Unforgettable
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 8"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5.5C32 2.5 62 0.5 101 5.5C137.5 10 170 6.5 199 3.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                Moments with <AnimatedGradientText text="Surprise Planner" />
              </h1>
              <p className="hero-text-animation text-xl text-white/90 mb-8 max-w-2xl">
                From romantic proposals to anniversary celebrations, we craft personalized experiences that leave
                lasting memories for all your special occasions in Pune.
              </p>
              <div className="hero-button-animation flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all shine"
                  asChild
                >
                  <Link href="/categories">Explore Services</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="glass text-white border-white/20 hover:bg-white/20 shadow-lg hover:shadow-xl transition-all"
                  asChild
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>

              {/* Floating stats */}
              <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="glass rounded-lg p-4 shadow-lg floating">
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-white/80 text-sm">Happy Clients</div>
                </div>
                <div className="glass rounded-lg p-4 shadow-lg floating" style={{ animationDelay: "0.5s" }}>
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-white/80 text-sm">Unique Experiences</div>
                </div>
                <div
                  className="glass rounded-lg p-4 shadow-lg floating col-span-2 sm:col-span-1"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="text-3xl font-bold text-white">5★</div>
                  <div className="text-white/80 text-sm">Rated Service</div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative bottom wave */}
          <div className="absolute bottom-0 left-0 right-0 h-16 z-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
              <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  Our Services
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Crafting Magical Moments for Every Occasion</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Discover our range of premium surprise planning services designed to create unforgettable experiences
                  for you and your loved ones.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ScrollReveal delay={100}>
                <FeatureCard
                  icon={<Heart className="h-6 w-6" />}
                  title="Romantic Surprises"
                  description="From candlelight dinners to proposal setups, we create the perfect romantic atmosphere for your special moments."
                />
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <FeatureCard
                  icon={<Gift className="h-6 w-6" />}
                  title="Celebration Packages"
                  description="Birthday surprises, anniversary celebrations, and special occasion packages tailored to your preferences."
                />
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <FeatureCard
                  icon={<Sparkles className="h-6 w-6" />}
                  title="Decoration Services"
                  description="Transform any space with our professional decoration services, from simple setups to elaborate themes."
                />
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <FeatureCard
                  icon={<Camera className="h-6 w-6" />}
                  title="Photography & Videography"
                  description="Capture your special moments with our professional photography and videography services."
                />
              </ScrollReveal>

              <ScrollReveal delay={500}>
                <FeatureCard
                  icon={<Calendar className="h-6 w-6" />}
                  title="Event Planning"
                  description="Full-service event planning for proposals, parties, and special celebrations with attention to every detail."
                />
              </ScrollReveal>

              <ScrollReveal delay={600}>
                <FeatureCard
                  icon={<Zap className="h-6 w-6" />}
                  title="Custom Experiences"
                  description="Unique and personalized experiences designed specifically for your vision and requirements."
                />
              </ScrollReveal>
            </div>

            <ScrollReveal delay={700}>
              <div className="text-center mt-12">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-md" asChild>
                  <Link href="/categories">
                    View All Services <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                <div>
                  <span className="inline-block px-3 py-1 bg-red-600/20 text-red-500 rounded-full text-sm font-medium mb-2">
                    Featured Services
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Popular Services</h2>
                  <p className="text-muted-foreground max-w-2xl">
                    Discover our most sought-after event planning services in Pune
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="mt-4 md:mt-0 border-red-600 text-red-500 hover:bg-red-600 hover:text-white"
                  asChild
                >
                  <Link href="/categories">
                    View All Services <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <ScrollReveal delay={100}>
                <ServiceCard
                  title="Proposal Setup"
                  description="Create the perfect moment to pop the question with our custom proposal setups."
                  imageSrc="/proposal.jpeg?height=400&width=600"
                  price="₹15,000"
                  slug="/categories/proposal-setup"
                />
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <ServiceCard
                  title="Candlelight Dinners"
                  description="Romantic candlelight dinners at exclusive venues or in the comfort of your home."
                  imageSrc="/candel.jpeg?height=400&width=600"
                  price="₹8,000"
                  slug="/categories/candlelight-dinners"
                />
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <ServiceCard
                  title="Anniversary Specials"
                  description="Celebrate your special day with customized anniversary surprise packages."
                  imageSrc="/wedding.jpeg?height=400&width=600"
                  price="₹12,000"
                  slug="/categories/anniversary-specials"
                />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=200&width=200&text=pattern')] bg-repeat opacity-5"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-64 h-64 bg-primary/5 rounded-full"></div>
                  <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/5 rounded-full"></div>

                  <div className="relative rounded-xl overflow-hidden shadow-2xl">
                    <Image
                      src="/about.jpeg?height=600&width=800&text=Why+Choose+Us"
                      alt="Why Choose Us"
                      width={800}
                      height={600}
                      className="object-cover w-full h-[500px]"
                    />
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                    Why Choose Us
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">We Create Memories That Last a Lifetime</h2>
                  <p className="text-muted-foreground mb-8">
                    At Surprise Planner, we believe that every special moment deserves to be extraordinary. Our team of
                    dedicated professionals works tirelessly to ensure that your experience is nothing short of magical.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="bg-primary/10 text-primary rounded-full w-10 h-10 flex items-center justify-center">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Personalized Experiences</h3>
                        <p className="text-muted-foreground">
                          We create custom experiences tailored to your unique story and preferences.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="bg-primary/10 text-primary rounded-full w-10 h-10 flex items-center justify-center">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Attention to Detail</h3>
                        <p className="text-muted-foreground">
                          We obsess over the small details that make a big difference in your experience.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="bg-primary/10 text-primary rounded-full w-10 h-10 flex items-center justify-center">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Professional Team</h3>
                        <p className="text-muted-foreground">
                          Our experienced team ensures flawless execution of every surprise.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="bg-primary/10 text-primary rounded-full w-10 h-10 flex items-center justify-center">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Local Expertise</h3>
                        <p className="text-muted-foreground">
                          As Pune locals, we know the best venues and vendors for your special moments.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button className="bg-primary hover:bg-primary/90 text-white shadow-md pulse" asChild>
                      <Link href="/about">Learn More About Us</Link>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-muted/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  Our Process
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We make planning your perfect surprise simple and stress-free with our proven process.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <ScrollReveal delay={100}>
                <Card className="border-none shadow-md bg-background/50 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <div className="rounded-full bg-primary w-12 h-12 flex items-center justify-center text-primary-foreground font-bold text-xl mb-4">
                      1
                    </div>
                    <h3 className="text-xl font-bold mb-2">Choose a Service</h3>
                    <p className="text-muted-foreground">
                      Browse our range of surprise planning services and select the one that fits your occasion.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <Card className="border-none shadow-md bg-background/50 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <div className="rounded-full bg-primary w-12 h-12 flex items-center justify-center text-primary-foreground font-bold text-xl mb-4">
                      2
                    </div>
                    <h3 className="text-xl font-bold mb-2">Customize Your Experience</h3>
                    <p className="text-muted-foreground">
                      Work with our team to personalize every detail of your surprise event.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <Card className="border-none shadow-md bg-background/50 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <div className="rounded-full bg-primary w-12 h-12 flex items-center justify-center text-primary-foreground font-bold text-xl mb-4">
                      3
                    </div>
                    <h3 className="text-xl font-bold mb-2">We Handle Everything</h3>
                    <p className="text-muted-foreground">
                      Our team takes care of all the planning, coordination, and setup for your surprise.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <Card className="border-none shadow-md bg-background/50 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <div className="rounded-full bg-primary w-12 h-12 flex items-center justify-center text-primary-foreground font-bold text-xl mb-4">
                      4
                    </div>
                    <h3 className="text-xl font-bold mb-2">Enjoy the Moment</h3>
                    <p className="text-muted-foreground">
                      Relax and enjoy as we handle everything to create your perfect surprise.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200&text=pattern')] bg-repeat opacity-5"></div>

          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  Testimonials
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Hear from couples and individuals who have experienced our surprise planning services
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ScrollReveal delay={100}>
                <TestimonialCard
                  name="Rahul & Priya"
                  role="Proposal Setup"
                  testimonial="The team went above and beyond to create the perfect proposal setup. My partner was completely surprised and it was exactly what I had envisioned. Highly recommend their services!"
                  image="/placeholder.svg?height=100&width=100&text=Client1"
                  rating={5}
                />
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <TestimonialCard
                  name="Ananya Desai"
                  role="Birthday Surprise"
                  testimonial="I wanted to surprise my husband on his 30th birthday, and the team helped me plan a surprise party that left him speechless. From the themed decoration to the cake, everything was perfect!"
                  image="/placeholder.svg?height=100&width=100&text=Client2"
                  rating={5}
                />
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <TestimonialCard
                  name="Vikram & Neha"
                  role="Anniversary Celebration"
                  testimonial="We wanted to do something special for our 5th anniversary, and Surprise Planner delivered beyond our expectations. The rooftop dinner setup with city views was breathtaking!"
                  image="/placeholder.svg?height=100&width=100&text=Client3"
                  rating={5}
                />
              </ScrollReveal>
            </div>

            <ScrollReveal delay={400}>
              <div className="text-center mt-12">
                <Button variant="outline" className="shadow-sm" asChild>
                  <Link href="/about/testimonials">
                    Read More Testimonials <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200&text=pattern')] bg-repeat opacity-10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <ScrollReveal>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">500+</div>
                  <p className="text-primary-foreground/80">Happy Clients</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">200+</div>
                  <p className="text-primary-foreground/80">Successful Events</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">50+</div>
                  <p className="text-primary-foreground/80">Unique Experiences</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">5★</div>
                  <p className="text-primary-foreground/80">Average Rating</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              <ScrollReveal direction="left" className="flex-1">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  Our Location
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Serving Pune & Surrounding Areas</h2>
                <p className="text-muted-foreground mb-6">
                  Based in the heart of Pune, we provide our surprise planning services throughout the city and
                  surrounding areas. Our local expertise ensures we can recommend the perfect venues and experiences for
                  your special moments.
                </p>
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 text-primary mr-2" />
                  <p className="font-medium">123 Surprise Street, Koregaon Park, Pune, Maharashtra 411001</p>
                </div>
                <div className="flex items-center mb-6">
                  <Clock className="h-5 w-5 text-primary mr-2" />
                  <p className="font-medium">Open Monday to Saturday: 10:00 AM - 7:00 PM</p>
                </div>
                <Button className="bg-primary hover:bg-primary/90 text-white shadow-md" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </ScrollReveal>

              <ScrollReveal direction="right" className="flex-1">
                <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/caffe.jpeg?height=600&width=800&text=Map+of+Pune"
                    alt="Map of Pune"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 glass rounded-lg px-4 py-2 shadow-lg">
                    <h3 className="font-bold text-white">Surprise Planner</h3>
                    <p className="text-white/80 text-sm">Koregaon Park, Pune</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 animated-bg opacity-30"></div>
          <div className="absolute inset-0 bg-primary opacity-70"></div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Unforgettable Memories?</h2>
              <p className="max-w-2xl mx-auto mb-8 text-primary-foreground/90">
                Let us help you plan the perfect surprise for your loved ones. Get in touch with our team today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary" className="shadow-lg hover:shadow-xl transition-all" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/20 hover:bg-primary-foreground/10 shadow-lg hover:shadow-xl transition-all"
                  asChild
                >
                  <Link href="/categories">Explore Services</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

