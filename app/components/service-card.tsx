import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Card, CardContent, CardFooter } from "../components/ui/card"
import { Button } from "../components/ui/button"

interface ServiceCardProps {
  title: string
  description: string
  imageSrc: string
  price: string
  slug: string
}

export function ServiceCard({ title, description, imageSrc, price, slug }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-lg transition-all hover:shadow-xl service-card-hover bg-white">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {price}
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <Button
          variant="outline"
          className="w-full group border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
          asChild
        >
          <Link href={slug} className="flex items-center justify-center">
            View Details
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

