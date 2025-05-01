import Link from "next/link"
import Image from "next/image"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getFeaturedProducts } from "@/lib/shopify"

export async function FeaturedProducts() {
  // This would fetch from Shopify in production
  const products = await getFeaturedProducts()

  return (
    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover transition-all hover:scale-105"
              />
              {product.isNew && <Badge className="absolute right-2 top-2">New</Badge>}
              {product.isSale && (
                <Badge variant="destructive" className="absolute right-2 top-2">
                  Sale
                </Badge>
              )}
            </div>
            <CardContent className="p-4">
              <h3 className="font-medium">{product.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{product.category}</p>
            </CardContent>
            <CardFooter className="flex items-center justify-between p-4 pt-0">
              <div className="font-medium">${product.price.toFixed(2)}</div>
              {product.oldPrice && (
                <div className="text-sm text-muted-foreground line-through">${product.oldPrice.toFixed(2)}</div>
              )}
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}
