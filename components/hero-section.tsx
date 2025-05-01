import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background pt-16">
      <div className="container relative z-10 px-4 py-12 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="flex flex-col items-start gap-6">
            <div className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-sm">
              <span className="mr-1 rounded-full bg-primary px-1.5 py-0.5 text-[10px] font-medium text-primary-foreground">
                NEW
              </span>
              <span className="text-muted-foreground">Summer Collection 2025</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Elevate Your <span className="text-primary">Lifestyle</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Discover our curated collection of premium products designed to enhance your everyday life.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/products">
                <Button size="lg" className="rounded-full">
                  Shop Now
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="rounded-full">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-xl bg-muted md:aspect-auto md:h-[600px]">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Hero image"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </div>
  )
}
