"use client"

import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface CartItem {
    id: string
    name: string
    price: number
    quantity: number
    image: string
}

export default function page() {
    const [items, setItems] = useState<CartItem[]>([
        {
            id: "1",
            name: "Premium Leather Wallet",
            price: 129.0,
            quantity: 1,
            image: "/leather-wallet.jpg",
        },
        {
            id: "2",
            name: "Minimalist Watch",
            price: 249.0,
            quantity: 2,
            image: "/minimalist-watch.png",
        },
        {
            id: "3",
            name: "Canvas Tote Bag",
            price: 89.0,
            quantity: 1,
            image: "/canvas-tote-bag.png",
        },
    ])

    const updateQuantity = (id: string, newQuantity: number) => {
        if (newQuantity < 1) return
        setItems(items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
    }

    const removeItem = (id: string) => {
        setItems(items.filter((item) => item.id !== id))
    }

    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const shipping = 15.0
    const tax = subtotal * 0.1
    const total = subtotal + shipping + tax

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className=" mt-24">
                <div className="container mx-auto px-4 py-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <ShoppingBag className="w-7 h-7 text-foreground" />
                        <h1 className="text-2xl font-light tracking-tight text-foreground">Your Cart</h1>
                    </div>
                    <span className="text-sm text-muted-foreground">{items.length} items</span>
                </div>
            </header>

            <main className="container mx-auto px-4 mt-4">
                {items.length === 0 ? (
                    <div className="text-center py-20">
                        <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                        <p className="text-lg text-muted-foreground mb-6">Your cart is empty</p>
                        <Button variant="default">Continue Shopping</Button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Cart Items */}
                        <div className="lg:col-span-2">
                            <div className="space-y-6">
                                {items.map((item) => (
                                    <Card
                                        key={item.id}
                                        className="p-6 border border-border bg-card hover:border-foreground/20 transition-colors"
                                    >
                                        <div className="flex gap-6">
                                            {/* Product Image */}
                                            <div className="flex-shrink-0">
                                                <img
                                                    src={item.image || "/placeholder.svg"}
                                                    alt={item.name}
                                                    className="w-24 h-24 object-cover bg-muted rounded-lg"
                                                />
                                            </div>

                                            {/* Product Details */}
                                            <div className="flex-1">
                                                <div className="flex justify-between items-start mb-4">
                                                    <div>
                                                        <h3 className="text-lg font-medium text-foreground mb-1">{item.name}</h3>
                                                        <p className="text-sm text-muted-foreground">Item #{item.id}</p>
                                                    </div>
                                                    <p className="text-lg font-semibold text-foreground">
                                                        ${(item.price * item.quantity).toFixed(2)}
                                                    </p>
                                                </div>

                                                {/* Quantity & Remove */}
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3 bg-secondary/50 rounded-lg p-1">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            className="p-1.5 text-foreground hover:bg-secondary transition-colors"
                                                        >
                                                            <Minus className="w-4 h-4" />
                                                        </button>
                                                        <span className="w-8 text-center font-medium text-foreground">{item.quantity}</span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            className="p-1.5 text-foreground hover:bg-secondary transition-colors"
                                                        >
                                                            <Plus className="w-4 h-4" />
                                                        </button>
                                                    </div>

                                                    <button
                                                        onClick={() => removeItem(item.id)}
                                                        className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                                                    >
                                                        <Trash2 className="w-5 h-5" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24">
                                <Card className="border border-border bg-card p-8 rounded-xl">
                                    <h2 className="text-xl font-semibold text-foreground mb-8 text-balance">Order Summary</h2>

                                    <div className="space-y-4 mb-6 pb-6 border-b border-border">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">Subtotal</span>
                                            <span className="text-foreground font-medium">${subtotal.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">Shipping</span>
                                            <span className="text-foreground font-medium">${shipping.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">Tax</span>
                                            <span className="text-foreground font-medium">${tax.toFixed(2)}</span>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center mb-8">
                                        <span className="text-lg font-semibold text-foreground">Total</span>
                                        <span className="text-2xl font-bold text-foreground">${total.toFixed(2)}</span>
                                    </div>

                                    <Button className="w-full h-12 bg-primary text-primary-foreground font-medium text-base rounded-lg hover:bg-primary/90 transition-colors mb-3">
                                        Proceed to Checkout
                                    </Button>

                                    <Button variant="outline" className="w-full h-12 border-border rounded-lg bg-transparent">
                                        Continue Shopping
                                    </Button>

                                    <p className="text-xs text-muted-foreground text-center mt-6">Free shipping on orders over $100</p>
                                </Card>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    )
}
