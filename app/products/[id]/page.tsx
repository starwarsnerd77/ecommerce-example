import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, Check, Star } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { getProductById, getRelatedProducts } from "@/lib/shopify"
import { ProductGrid } from "@/components/product-grid"
import { AddToCartButton } from "@/components/add-to-cart-button"

export default async function ProductPage({ params }: { params: { id: string } }) {
  // This would fetch from Shopify in production
  const product = await getProductById(params.id)

  if (!product) {
    notFound()
  }

  const relatedProducts = await getRelatedProducts(product.category)

  return (
    <div className="container px-4 py-12 md:py-24">
      <Link
        href="/products"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to products
      </Link>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-all hover:scale-105"
            priority
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <div className="flex">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < product.rating ? "fill-primary text-primary" : "fill-muted text-muted"}`}
                  />
                ))}
            </div>
            <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
          </div>

          <h1 className="mt-4 text-3xl font-bold">{product.name}</h1>
          <div className="mt-2 text-2xl font-semibold">${product.price.toFixed(2)}</div>

          <div className="mt-6 space-y-6">
            <p className="leading-relaxed text-muted-foreground">{product.description}</p>

            <div className="flex items-center gap-2 text-sm">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100">
                <Check className="h-3 w-3 text-emerald-600" />
              </div>
              <span>In stock and ready to ship</span>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <AddToCartButton product={product} />
              <Button variant="outline">Add to wishlist</Button>
            </div>
          </div>

          <div className="mt-8 border-t pt-8">
            <h3 className="text-lg font-medium">Product Details</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {product.details.map((detail, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <h2 className="text-2xl font-bold">You might also like</h2>
        <ProductGrid products={relatedProducts} className="mt-8" />
      </div>
    </div>
  )
}
