import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <div className="relative bg-muted/30 py-12 md:py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight md:text-5xl">Our Story</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Founded in 2018, Lumina began with a simple mission: to curate premium lifestyle products that enhance
              everyday living while maintaining a commitment to sustainability and ethical practices.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container px-4 py-12 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative aspect-square overflow-hidden rounded-xl bg-muted md:aspect-auto md:h-[500px]">
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="Our mission"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
            <p className="mt-4 text-muted-foreground">
              At Lumina, we believe that everyday objects should be both beautiful and functional. We're dedicated to
              sourcing products that are thoughtfully designed, ethically produced, and built to last.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
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
                    className="h-3 w-3 text-primary"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <p>Curating premium products that enhance everyday living</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
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
                    className="h-3 w-3 text-primary"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <p>Partnering with ethical manufacturers and artisans</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
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
                    className="h-3 w-3 text-primary"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <p>Minimizing environmental impact through sustainable practices</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
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
                    className="h-3 w-3 text-primary"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <p>Creating a transparent shopping experience</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-muted/30 py-12 md:py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">Our Values</h2>
            <p className="mt-4 text-muted-foreground">
              These core principles guide everything we do, from product selection to customer service.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
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
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-medium">Quality</h3>
                <p className="mt-2 text-muted-foreground">
                  We never compromise on quality. Every product in our collection is carefully vetted to ensure it meets
                  our high standards.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
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
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                    <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                    <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                    <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <path d="M9 9h.01" />
                    <path d="M15 9h.01" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-medium">Sustainability</h3>
                <p className="mt-2 text-muted-foreground">
                  We're committed to reducing our environmental footprint by partnering with eco-conscious brands and
                  using sustainable materials.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
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
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-medium">Community</h3>
                <p className="mt-2 text-muted-foreground">
                  We believe in building meaningful connections with our customers, partners, and the communities we
                  serve.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container px-4 py-12 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">Meet Our Team</h2>
          <p className="mt-4 text-muted-foreground">
            The passionate individuals behind Lumina who work tirelessly to bring you the best products and experiences.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[
            {
              name: "Alex Morgan",
              role: "Founder & CEO",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "Jamie Chen",
              role: "Creative Director",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "Sam Taylor",
              role: "Product Curator",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "Riley Johnson",
              role: "Customer Experience",
              image: "/placeholder.svg?height=300&width=300",
            },
          ].map((member, index) => (
            <div key={index} className="group text-center">
              <div className="relative mx-auto aspect-square w-full max-w-[240px] overflow-hidden rounded-xl bg-muted">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="mt-4 text-lg font-medium">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary/5 py-12 md:py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">Join Our Journey</h2>
            <p className="mt-4 text-muted-foreground">
              We're always looking for passionate individuals and brands that align with our values.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact">
                <Button size="lg" className="rounded-full">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/careers">
                <Button variant="outline" size="lg" className="rounded-full">
                  View Careers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
