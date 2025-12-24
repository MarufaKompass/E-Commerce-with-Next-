"use client"

import { Heart, ShoppingBag, Trash2 } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface WishlistItem {
    id: string
    name: string
    price: number
    image: string
}

export default function page() {
    const [items, setItems] = useState<WishlistItem[]>([
        {
            id: "1",
            name: "Premium Leather Wallet",
            price: 129.0,
            image: "/leather-wallet.jpg",
        },
        {
            id: "2",
            name: "Minimalist Watch",
            price: 249.0,
            image: "/minimalist-watch.png",
        },
        {
            id: "3",
            name: "Canvas Tote Bag",
            price: 89.0,
            image: "/canvas-tote-bag.png",
        },
    ])

    const removeFromWishlist = (id: string) => {
        setItems(items.filter((item) => item.id !== id))
    }

    const addToCart = (id: string) => {
        // Add to cart logic here
        console.log(`Added item ${id} to cart`)
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b border-border bg-background sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Heart className="w-7 h-7 text-foreground" />
                        <h1 className="text-2xl font-light tracking-tight text-foreground">Your Wishlist</h1>
                    </div>
                    <span className="text-sm text-muted-foreground">{items.length} items</span>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-12">
                {items.length === 0 ? (
                    <div className="text-center py-20">
                        <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                        <p className="text-lg text-muted-foreground mb-6">Your wishlist is empty</p>
                        <Button variant="default">Continue Shopping</Button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {items.map((item) => (
                            <Card
                                key={item.id}
                                className="border border-border bg-card hover:border-foreground/20 transition-colors overflow-hidden"
                            >
                                <div className="aspect-square bg-muted overflow-hidden">
                                    <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
                                </div>

                                <div className="p-6">
                                    <h3 className="text-lg font-medium text-foreground mb-2">{item.name}</h3>
                                    <p className="text-2xl font-bold text-foreground mb-6">${item.price.toFixed(2)}</p>

                                    <div className="flex gap-3">
                                        <Button
                                            onClick={() => addToCart(item.id)}
                                            className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                                        >
                                            <ShoppingBag className="w-4 h-4 mr-2" />
                                            Add to Cart
                                        </Button>
                                        <button
                                            onClick={() => removeFromWishlist(item.id)}
                                            className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                )}
            </main>
        </div>
    )
}
