import Image from "next/image"

import { Navigation } from "../../components/navigation"
import { Footer } from "../../components/footer"

// Mock data for team members
const teamMembers = [
  {
    id: 1,
    name: "Ananya Sharma",
    role: "Founder & Creative Director",
    bio: "Ananya founded Surprise Planner in 2018 with a vision to help people create magical moments for their loved ones. With over 10 years of experience in event planning, she brings creativity and passion to every project.",
    image: "/placeholder.svg?height=400&width=400&text=Ananya",
  },
  {
    id: 2,
    name: "Vikram Patel",
    role: "Head of Operations",
    bio: "Vikram ensures that every surprise runs smoothly from concept to execution. His attention to detail and problem-solving skills make him an invaluable part of our team.",
    image: "/placeholder.svg?height=400&width=400&text=Vikram",
  },
  {
    id: 3,
    name: "Priya Desai",
    role: "Senior Event Planner",
    bio: "Priya specializes in creating romantic setups for proposals and anniversaries. Her creative vision and understanding of romantic gestures have helped countless couples create unforgettable memories.",
    image: "/placeholder.svg?height=400&width=400&text=Priya",
  },
  {
    id: 4,
    name: "Rahul Mehta",
    role: "Decoration Specialist",
    bio: "Rahul transforms ordinary spaces into extraordinary settings. His expertise in floral arrangements, lighting, and thematic decorations brings our clients' visions to life.",
    image: "/placeholder.svg?height=400&width=400&text=Rahul",
  },
  {
    id: 5,
    name: "Neha Joshi",
    role: "Client Relations Manager",
    bio: "Neha is often the first point of contact for our clients. Her warm personality and understanding nature help clients feel comfortable sharing their ideas and expectations.",
    image: "/placeholder.svg?height=400&width=400&text=Neha",
  },
  {
    id: 6,
    name: "Arjun Singh",
    role: "Photography & Videography Lead",
    bio: "Arjun captures the magic of surprise moments through his lens. His ability to anticipate and document genuine emotions makes him a crucial part of our surprise planning team.",
    image: "/placeholder.svg?height=400&width=400&text=Arjun",
  },
]

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <section className="bg-muted py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4">Meet Our Team</h1>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto">
              The passionate individuals behind Surprise Planner who work tirelessly to create magical moments for our
              clients.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="bg-background rounded-lg shadow-sm overflow-hidden">
                  <div className="aspect-square relative">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              We{"'"}re always looking for creative, passionate individuals to join our team. If you{"'"}re interested
              in helping create magical moments for our clients, we{"'"}d love to hear from you.
            </p>
            <div className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              <a href="mailto:careers@surpriseplanner.com">Send Your Resume</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

