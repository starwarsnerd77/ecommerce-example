import Link from "next/link"
import { ArrowRight, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FeaturedProducts } from "@/components/featured-products"
import { HeroSection } from "@/components/hero-section"
import { CategoryShowcase } from "@/components/category-showcase"
import { Newsletter } from "@/components/newsletter"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />

      <div className="container px-4 py-12 md:py-24">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Featured Products</h2>
            <p className="mt-2 text-muted-foreground">Discover our handpicked selection of trending items</p>
          </div>
          <Link href="/products">
            <Button variant="ghost" className="gap-1 group">
              View all products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
        <FeaturedProducts />
      </div>

      <CategoryShowcase />

      <div className="container px-4 py-12 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Why Choose Us</h2>
          <p className="mt-4 text-muted-foreground">
            We pride ourselves on quality, service, and creating an exceptional shopping experience
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <ShoppingBag className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mt-4 text-xl font-medium">Premium Quality</h3>
            <p className="mt-2 text-muted-foreground">
              All our products are carefully selected to ensure the highest quality standards
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
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
                className="h-8 w-8 text-primary"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-medium">Made with Love</h3>
            <p className="mt-2 text-muted-foreground">
              We're passionate about what we do and it shows in every product we offer
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
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
                className="h-8 w-8 text-primary"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-medium">Secure Shopping</h3>
            <p className="mt-2 text-muted-foreground">
              Your security is our priority with safe payment methods and data protection
            </p>
          </div>
        </div>
      </div>

      <Newsletter />
    </div>
  )
}
