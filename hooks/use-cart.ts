"use client"

import { useContext } from "react"
import { CartContext } from "@/providers/cart-provider"

export const useCart = () => useContext(CartContext)
