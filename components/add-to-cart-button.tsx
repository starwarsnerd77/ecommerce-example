"use client"

import { useState } from "react"
import { ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"

interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
}

interface AddToCartButtonProps {
  product: Product
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem } = useCart()
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)

    // Simulate a delay to show loading state
    setTimeout(() => {
      addItem({
        ...product,
        quantity: 1,
        variant: "Default",
      })
      setIsAdding(false)
    }, 600)
  }

  return (
    <Button onClick={handleAddToCart} disabled={isAdding} className="w-full sm:w-auto">
      <ShoppingBag className="mr-2 h-4 w-4" />
      {isAdding ? "Adding..." : "Add to Cart"}
    </Button>
  )
}
