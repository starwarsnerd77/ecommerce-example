"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { CartSummary } from "@/components/cart-summary"

export default function CartPage() {
  const { cart, updateQuantity, removeItem } = useCart()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  if (cart.items.length === 0) {
    return (
      <div className="container flex flex-col items-center justify-center px-4 py-24 text-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-muted">
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
            className="h-12 w-12 text-muted-foreground"
          >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>
        </div>
        <h1 className="mt-6 text-2xl font-bold">Your cart is empty</h1>
        <p className="mt-2 text-muted-foreground">Looks like you haven't added anything to your cart yet.</p>
        <Link href="/products" className="mt-8">
          <Button>Continue shopping</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container px-4 py-12 md:py-24">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Your Cart</h1>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Continue shopping
        </Link>
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ul className="divide-y">
            {cart.items.map((item) => (
              <li key={item.id} className="py-6">
                <div className="flex gap-6">
                  <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md bg-muted">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{item.variant}</p>
                      </div>
                      <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        >
                          <Minus className="h-4 w-4" />
                          <span className="sr-only">Decrease quantity</span>
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                          <span className="sr-only">Increase quantity</span>
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Remove item</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <CartSummary />
        </div>
      </div>
    </div>
  )
}
