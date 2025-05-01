// This file would contain actual Shopify API integration in production
// For now, we'll use mock data

interface Product {
  id: string
  name: string
  price: number
  oldPrice?: number
  image: string
  category: string
  description: string
  details: string[]
  rating: number
  reviewCount: number
  isNew?: boolean
  isSale?: boolean
}

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Minimalist Ceramic Vase",
    price: 49.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "Home & Living",
    description:
      "Elevate your home decor with this handcrafted ceramic vase. Its minimalist design complements any interior style while making a subtle statement.",
    details: [
      "Handcrafted ceramic",
      "Height: 12 inches",
      "Available in white, gray, and terracotta",
      "Dishwasher safe",
      "Made from sustainable materials",
    ],
    rating: 4,
    reviewCount: 42,
    isNew: true,
  },
  {
    id: "2",
    name: "Wireless Charging Pad",
    price: 39.99,
    oldPrice: 59.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "Tech Accessories",
    description:
      "Charge your devices effortlessly with our sleek wireless charging pad. Compatible with all Qi-enabled smartphones and earbuds.",
    details: ["10W fast charging", "LED charging indicator", "Anti-slip surface", "Compact design", "USB-C powered"],
    rating: 5,
    reviewCount: 128,
    isSale: true,
  },
  {
    id: "3",
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "Apparel",
    description:
      "Experience ultimate comfort with our organic cotton t-shirt. Ethically sourced and sustainably produced for both your comfort and peace of mind.",
    details: [
      "100% organic cotton",
      "Ethically sourced",
      "Available in multiple colors",
      "Sizes XS-XXL",
      "Pre-shrunk fabric",
    ],
    rating: 4,
    reviewCount: 76,
  },
  {
    id: "4",
    name: "Bamboo Desk Organizer",
    price: 34.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "Home & Living",
    description:
      "Keep your workspace tidy with our bamboo desk organizer. Multiple compartments provide ample storage for all your office essentials.",
    details: [
      "Sustainable bamboo construction",
      "Multiple compartments",
      "Non-slip base",
      "Eco-friendly finish",
      "Compact footprint",
    ],
    rating: 4,
    reviewCount: 53,
  },
  {
    id: "5",
    name: "Smart Water Bottle",
    price: 45.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "Wellness",
    description:
      "Stay hydrated with our smart water bottle that tracks your water intake and reminds you when it's time to drink. Connects to your smartphone via Bluetooth.",
    details: [
      "LED hydration reminders",
      "Bluetooth connectivity",
      "App integration",
      "24oz capacity",
      "BPA-free materials",
    ],
    rating: 3,
    reviewCount: 29,
    isNew: true,
  },
  {
    id: "6",
    name: "Leather Laptop Sleeve",
    price: 59.99,
    oldPrice: 79.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "Tech Accessories",
    description:
      "Protect your laptop in style with our premium leather sleeve. Handcrafted from full-grain leather with a soft microfiber interior.",
    details: [
      "Full-grain leather",
      "Microfiber interior",
      "Magnetic closure",
      'Available for 13", 15", and 16" laptops',
      "Handcrafted",
    ],
    rating: 5,
    reviewCount: 91,
    isSale: true,
  },
  {
    id: "7",
    name: "Scented Soy Candle",
    price: 24.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "Home & Living",
    description:
      "Transform your space with our hand-poured soy candles. Made with essential oils and a cotton wick for a clean, long-lasting burn.",
    details: [
      "100% soy wax",
      "Essential oil fragrances",
      "40+ hour burn time",
      "Reusable glass container",
      "Hand-poured in small batches",
    ],
    rating: 4,
    reviewCount: 67,
  },
  {
    id: "8",
    name: "Fitness Tracker Band",
    price: 89.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "Wellness",
    description:
      "Monitor your health and fitness goals with our advanced tracker. Features heart rate monitoring, sleep tracking, and workout detection.",
    details: [
      "Heart rate monitoring",
      "Sleep tracking",
      "Water resistant to 50m",
      "7-day battery life",
      "Smartphone notifications",
    ],
    rating: 4,
    reviewCount: 104,
  },
]

export async function getProducts(): Promise<Product[]> {
  // In production, this would fetch from Shopify Storefront API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProducts)
    }, 500)
  })
}

export async function getFeaturedProducts(): Promise<Product[]> {
  // In production, this would fetch featured products from Shopify
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProducts.slice(0, 4))
    }, 500)
  })
}

export async function getProductById(id: string): Promise<Product | null> {
  // In production, this would fetch a specific product from Shopify
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = mockProducts.find((p) => p.id === id) || null
      resolve(product)
    }, 500)
  })
}

export async function getRelatedProducts(category: string): Promise<Product[]> {
  // In production, this would fetch related products from Shopify
  return new Promise((resolve) => {
    setTimeout(() => {
      const related = mockProducts.filter((p) => p.category === category).slice(0, 4)
      resolve(related)
    }, 500)
  })
}

// This function would connect to Shopify's Storefront API in production
export async function shopifyFetch({ query, variables }: { query: string; variables?: any }) {
  // In production, this would make a real API call to Shopify
  console.log("Shopify API call:", { query, variables })

  return {
    status: 200,
    body: {
      data: {
        // Mock response data
      },
    },
  }
}
