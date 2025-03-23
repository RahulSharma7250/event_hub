import Link from "next/link"
import Image from "next/image"
import { Calendar, User } from "lucide-react"

import { Navigation } from "../components/navigation"
import { Footer } from "../components/footer"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "10 Creative Proposal Ideas That Will Guarantee a Yes",
    excerpt:
      "Planning to pop the question? Here are some creative and memorable proposal ideas that will make your partner say yes!",
    image: "/pro5.jpeg?height=400&width=800&text=Proposal+Ideas",
    date: "March 15, 2023",
    author: "Priya Sharma",
    category: "Proposal Ideas",
  },
  {
    id: 2,
    title: "How to Plan the Perfect Anniversary Surprise",
    excerpt:
      "Anniversary coming up? Learn how to plan a surprise that will make your anniversary truly special and memorable.",
    image: "/ann4.jpeg?height=400&width=800&text=Anniversary+Surprise",
    date: "February 28, 2023",
    author: "Rahul Patel",
    category: "Anniversary",
  },
  {
    id: 3,
    title: "Budget-Friendly Romantic Gestures That Make a Big Impact",
    excerpt:
      "Romance doesn't have to be expensive. Discover budget-friendly romantic gestures that will sweep your partner off their feet.",
    image: "/sur2.jpeg?height=400&width=800&text=Budget+Romantic+Ideas",
    date: "January 20, 2023",
    author: "Ananya Desai",
    category: "Budget Ideas",
  },
  {
    id: 4,
    title: "The Ultimate Guide to Room Decoration for Special Occasions",
    excerpt:
      "Transform any space into a magical setting with these room decoration ideas for birthdays, anniversaries, and other special occasions.",
    image: "/room2.jpeg?height=400&width=800&text=Room+Decoration+Guide",
    date: "December 12, 2022",
    author: "Vikram Singh",
    category: "Decoration",
  },
  {
    id: 5,
    title: "5 Unique Candlelight Dinner Settings in Pune",
    excerpt: "Discover the most romantic and unique venues in Pune for an unforgettable candlelight dinner experience.",
    image: "/candel.jpeg?height=400&width=800&text=Candlelight+Dinner+Pune",
    date: "November 5, 2022",
    author: "Neha Joshi",
    category: "Pune Venues",
  },
  {
    id: 6,
    title: "How to Plan a Surprise Birthday Party They'll Never Forget",
    excerpt: "Step-by-step guide to planning a surprise birthday party that will leave the birthday person speechless.",
    image: "/happy.jpeg?height=400&width=800&text=Surprise+Birthday",
    date: "October 18, 2022",
    author: "Arjun Kapoor",
    category: "Birthday Ideas",
  },
]

// Categories for filter
const categories = [
  "All Categories",
  "Proposal Ideas",
  "Anniversary",
  "Birthday Ideas",
  "Decoration",
  "Pune Venues",
  "Budget Ideas",
]

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <section className="bg-muted py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4">Our Blog</h1>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto">
              Tips, ideas, and inspiration for creating unforgettable surprise moments.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-3/4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {blogPosts.map((post) => (
                    <article
                      key={post.id}
                      className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                      <Link href={`/blog/${post.id}`} className="block">
                        <div className="relative h-48 w-full">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                            <span className="inline-flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {post.date}
                            </span>
                            <span className="inline-flex items-center">
                              <User className="h-4 w-4 mr-1" />
                              {post.author}
                            </span>
                          </div>
                          <h2 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h2>
                          <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                          <div className="inline-block bg-muted px-3 py-1 rounded-full text-xs">{post.category}</div>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>

                <div className="flex justify-center mt-8">
                  <Button variant="outline">Load More</Button>
                </div>
              </div>

              <div className="md:w-1/4">
                <div className="border rounded-lg p-6 mb-6">
                  <h3 className="font-bold text-lg mb-4">Search</h3>
                  <div className="flex">
                    <Input placeholder="Search blog..." className="rounded-r-none" />
                    <Button className="rounded-l-none">Search</Button>
                  </div>
                </div>

                <div className="border rounded-lg p-6 mb-6">
                  <h3 className="font-bold text-lg mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category) => (
                      <li key={category}>
                        <Link href="#" className="text-muted-foreground hover:text-primary">
                          {category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border rounded-lg p-6 mb-6">
                  <h3 className="font-bold text-lg mb-4">Recent Posts</h3>
                  <ul className="space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                      <li key={post.id} className="flex gap-3">
                        <div className="relative h-16 w-16 flex-shrink-0">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div>
                          <Link href={`/blog/${post.id}`} className="font-medium hover:text-primary line-clamp-2">
                            {post.title}
                          </Link>
                          <p className="text-xs text-muted-foreground">{post.date}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-4">Subscribe</h3>
                  <p className="text-muted-foreground mb-4">
                    Get the latest surprise planning tips and ideas delivered to your inbox.
                  </p>
                  <form className="space-y-4">
                    <Input placeholder="Your email address" type="email" />
                    <Button className="w-full">Subscribe</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

