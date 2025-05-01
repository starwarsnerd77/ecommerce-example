"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, Search, ShoppingBag, User, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useCart } from "@/hooks/use-cart"
import { ModeToggle } from "@/components/mode-toggle"

export function Header() {
  const { cart } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const itemCount = mounted ? cart.items.reduce((total, item) => total + item.quantity, 0) : 0

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-background"}`}
    >
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6 lg:gap-10">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6">
                <Link href="/" className="text-xl font-bold">
                  Lumina
                </Link>
                <Link href="/" className="text-lg font-medium">
                  Home
                </Link>
                <Link href="/products" className="text-lg font-medium">
                  Shop
                </Link>
                <Link href="/about" className="text-lg font-medium">
                  About
                </Link>
                <Link href="/contact" className="text-lg font-medium">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/" className="text-xl font-bold">
            Lumina
          </Link>

          <nav className="hidden gap-6 lg:flex">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/products" className="text-sm font-medium transition-colors hover:text-primary">
              Shop
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {isSearchOpen ? (
            <div className="flex items-center gap-2">
              <Input type="search" placeholder="Search products..." className="w-[200px] md:w-[300px]" autoFocus />
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
                <X className="h-5 w-5" />
                <span className="sr-only">Close search</span>
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}

          <ModeToggle />

          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>

          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                  {itemCount}
                </span>
              )}
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
