import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"

export function CategoryShowcase() {
  const categories = [
    {
      name: "Home & Living",
      description: "Elevate your space with our premium home decor",
      image: "/placeholder.svg?height=600&width=400",
      link: "/products?category=home",
    },
    {
      name: "Tech Accessories",
      description: "Innovative gadgets for the modern lifestyle",
      image: "/placeholder.svg?height=600&width=400",
      link: "/products?category=tech",
    },
    {
      name: "Apparel",
      description: "Sustainable fashion for everyday comfort",
      image: "/placeholder.svg?height=600&width=400",
      link: "/products?category=apparel",
    },
  ]

  return (
    <div className="bg-muted/50 py-12 md:py-24">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Shop by Category</h2>
          <p className="mt-4 text-muted-foreground">Explore our curated collections designed for modern living</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {categories.map((category) => (
            <div key={category.name} className="group relative overflow-hidden rounded-xl bg-muted">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center text-white">
                <h3 className="text-xl font-bold">{category.name}</h3>
                <p className="mt-2 text-sm text-white/80">{category.description}</p>
                <Link href={category.link} className="mt-4">
                  <Button variant="secondary" className="rounded-full">
                    Explore
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
