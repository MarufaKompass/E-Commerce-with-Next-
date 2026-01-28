import { Navbar } from "@/components/nav/navbar"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/data"
import { Filter } from "lucide-react"
import { ProductCard } from "@/components/product-card"

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* <Navbar /> */}

      <section className="px-6 pt-32 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-serif mb-6">Shop All</h1>
              <p className="text-muted-foreground font-light text-pretty">
                Explore our full collection of curated excellence, from artisanal furnishings to sculptural decor.
              </p>
            </div>
            <Button variant="outline" className="uppercase tracking-widest text-[10px] px-8 py-6 bg-transparent">
              <Filter className="w-4 h-4 mr-2" />
              Filter & Sort
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border mt-24 px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-4xl font-serif opacity-20">LUXE</div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            &copy; 2025 LUXE CREATIONS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </main>
  )
}
