"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // This would connect to your newsletter service in production
    setIsSubmitted(true)
  }

  return (
    <div className="bg-primary/5 py-12 md:py-24">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Join Our Newsletter</h2>
          <p className="mt-4 text-muted-foreground">
            Subscribe to get special offers, free giveaways, and product launches.
          </p>

          {isSubmitted ? (
            <div className="mt-8 rounded-lg bg-primary/10 p-6 text-center">
              <h3 className="text-xl font-medium">Thank you for subscribing!</h3>
              <p className="mt-2 text-muted-foreground">
                You'll be the first to know about our latest products and offers.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="rounded-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="rounded-full">
                <Send className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
