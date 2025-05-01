"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/hooks/use-cart"

export function CartSummary() {
  const { cart } = useCart()
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const subtotal = cart.items.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = subtotal > 100 ? 0 : 10
  const tax = subtotal * 0.07
  const total = subtotal + shipping + tax

  const handleCheckout = () => {
    setIsCheckingOut(true)

    // This would connect to Shopify checkout in production
    setTimeout(() => {
      setIsCheckingOut(false)
      alert("This would redirect to Shopify checkout in production")
    }, 1500)
  }

  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <h2 className="text-xl font-semibold">Order Summary</h2>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Shipping</span>
          <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>

        <Separator />

        <div className="flex items-center justify-between font-medium">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <Button className="mt-6 w-full" size="lg" onClick={handleCheckout} disabled={isCheckingOut}>
        {isCheckingOut ? "Processing..." : "Checkout"}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>

      <div className="mt-4 text-center text-xs text-muted-foreground">Secure checkout powered by Shopify</div>
    </div>
  )
}
