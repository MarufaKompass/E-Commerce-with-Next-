import { products } from "@/lib/data"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingBag, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function ProductDetailsPage({ params }: { params: { id: number } }) {
  const product = products.find((p) => (p.id) === params.id)

  if (!product) {
    notFound()
  }
  console.log("product ID", product)
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Product Image */}
          <div className="relative aspect-3/4 bg-muted overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">{product.category}</p>
            <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">{product.name}</h1>
            <p className="text-2xl font-light mb-8">${product.price}</p>

            <div className="h-px bg-border w-full mb-8" />

            <p className="text-muted-foreground font-light leading-relaxed mb-12 text-pretty">{product.description}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex-1 py-8 text-xs uppercase tracking-widest gap-2">
                <ShoppingBag className="w-4 h-4" />
                Add to Cart
              </Button>
              <Button variant="outline" className="py-8 text-xs uppercase tracking-widest gap-2 px-8 bg-transparent">
                <Heart className="w-4 h-4" />
                Wishlist
              </Button>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-8 text-[10px] uppercase tracking-widest text-muted-foreground">
              <div>
                <p className="mb-2 text-primary">Dimensions</p>
                <p>H 85CM x W 210CM x D 95CM</p>
              </div>
              <div>
                <p className="mb-2 text-primary">Materials</p>
                <p>Solid Ash Wood, Performance Velvet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
