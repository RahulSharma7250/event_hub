import Image from "next/image"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  role?: string
  testimonial: string
  image: string
  rating: number
}

export function TestimonialCard({ name, role, testimonial, image, rating }: TestimonialCardProps) {
  return (
    <div className="bg-background/50 backdrop-blur-md rounded-xl p-6 shadow-lg border border-muted/50 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/10 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
      <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-primary/5 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500 delay-100"></div>

      <div className="flex items-center mb-4 relative z-10">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-primary/20">
          <Image src={image || "/placeholder.svg"} alt={name} width={48} height={48} className="object-cover" />
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          {role && <p className="text-sm text-muted-foreground">{role}</p>}
        </div>
      </div>

      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-muted"}`} />
        ))}
      </div>

      <p className="italic text-muted-foreground relative z-10">
        {'"'}
        {testimonial}
        {'"'}
      </p>
    </div>
  )
}

