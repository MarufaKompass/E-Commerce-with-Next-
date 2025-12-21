"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Heart, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Product } from "@/types/product"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const router = useRouter()

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsWishlisted(!isWishlisted)
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    router.push(`/shop/${product?.id}`)
    console.log("[v0] Navigating to details page for:", product.name)
  }

  return (
    <div className="flex flex-col gap-6 group cursor-pointer">
      <Link href={`/shop/${product.id}`} className="block">
        <div className="relative aspect-3/4 overflow-hidden bg-muted">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {product.isFeatured && (
            <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 text-[9px] uppercase tracking-[0.2em] z-10">
              Featured
            </div>
          )}

          {/* Action Buttons Overlay */}
          <div className="absolute bottom-4 right-4 flex flex-col gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
            <Button
              variant="secondary"
              size="icon"
              className={cn(
                "rounded-full w-10 h-10 bg-background/90 backdrop-blur-sm hover:bg-background",
                isWishlisted && "text-red-500",
              )}
              onClick={handleWishlist}
            >
              <Heart className={cn("w-4 h-4", isWishlisted && "fill-current")} />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full w-10 h-10 bg-background/90 backdrop-blur-sm hover:bg-background"
              onClick={handleAddToCart}
            >
              <ShoppingBag className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Link>

      <div className="flex items-end justify-between">
        <Link href={`/shop/${product.id}`} className="flex-1">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{product.category}</p>
            <h3 className="text-xl font-serif">{product.name}</h3>
            <p className="text-sm mt-1 font-light">${product.price}</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
