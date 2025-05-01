"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
  variant: string
}

interface Cart {
  items: CartItem[]
}

interface CartContextType {
  cart: Cart
  addItem: (item: CartItem) => void
  updateQuantity: (id: string, quantity: number) => void
  removeItem: (id: string) => void
}

export const CartContext = createContext<CartContextType>({
  cart: { items: [] },
  addItem: () => {},
  updateQuantity: () => {},
  removeItem: () => {},
})

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Cart>({ items: [] })
  const [mounted, setMounted] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    setMounted(true)
    const storedCart = localStorage.getItem("cart")
    if (storedCart) {
      try {
        setCart(JSON.parse(storedCart))
      } catch (error) {
        console.error("Failed to parse cart from localStorage", error)
      }
    }
  }, [])

  // Save cart to localStorage when it changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("cart", JSON.stringify(cart))
    }
  }, [cart, mounted])

  const addItem = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.items.findIndex((i) => i.id === item.id)

      if (existingItemIndex !== -1) {
        // Item already exists, update quantity
        const updatedItems = [...prevCart.items]
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + item.quantity,
        }
        return { ...prevCart, items: updatedItems }
      } else {
        // Item doesn't exist, add it
        return { ...prevCart, items: [...prevCart.items, item] }
      }
    })
  }

  const updateQuantity = (id: string, quantity: number) => {
    setCart((prevCart) => {
      const updatedItems = prevCart.items.map((item) => (item.id === id ? { ...item, quantity } : item))
      return { ...prevCart, items: updatedItems }
    })
  }

  const removeItem = (id: string) => {
    setCart((prevCart) => {
      const updatedItems = prevCart.items.filter((item) => item.id !== id)
      return { ...prevCart, items: updatedItems }
    })
  }

  return <CartContext.Provider value={{ cart, addItem, updateQuantity, removeItem }}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
