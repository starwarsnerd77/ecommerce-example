import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"
import { getProducts } from "@/lib/shopify"

export default async function ProductsPage() {
  // This would fetch from Shopify in production
  const products = await getProducts()

  return (
    <div className="container px-4 py-12 md:py-24">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">All Products</h1>
          <p className="mt-2 text-muted-foreground">Browse our collection of premium products</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Showing {products.length} products</span>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="hidden md:block">
          <ProductFilters />
        </div>
        <div className="md:col-span-3">
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  )
}
