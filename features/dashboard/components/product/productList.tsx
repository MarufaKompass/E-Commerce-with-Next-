import React from 'react'
import { Product } from "@/models/product.model";
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
interface ProductViewProps {
    categories: { id: number; name: string; icon: string }[];
    selectedCategory: number | null;
    setSelectedCategory: (id: number | null) => void;
    displayedProducts: Product[];
    favorites: Set<number>;
    toggleFavorite: (id: number) => void;
}

export default function ProductList({ displayedProducts }: ProductViewProps) {
    return (
        <section className=" py-16 container mx-auto">
            <h1 className="text-5xl font-serif font-bold text-foreground mb-4 text-balance container mx-auto pb-4">
                New Products
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                {displayedProducts?.map((product) => (
                    <Card key={product.id} className="group overflow-hidden transition-all duration-300 hover:shadow-lg py-0 ">
                        {/* Image Container */}

                        <div className="relative h-48 sm:h-56 bg-secondary overflow-hidden">
                            <Image
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className='absolute top-2 left-2 bg-primary text-secondary px-3 text-[14px]'>
                                <p>New</p>
                            </div>
                        </div>

                        {/* Content Container */}
                        <div className="p-3 sm:p-4 flex flex-col gap-2">
                            <p className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wide">
                                {product.category}
                            </p>
                            <h3 className="font-serif font-semibold text-sm sm:text-base text-foreground line-clamp-2 text-pretty">
                                {product.name}
                            </h3>

                            {/* Rating */}
                            <div className="flex items-center gap-1">
                                <span className="text-yellow-500">★</span>
                                <span className="text-xs sm:text-sm text-muted-foreground font-medium">{product.rating}</span>
                            </div>

                            {/* Price and CTA */}
                            <div className="flex items-center justify-between gap-2 pt-2 mt-auto">
                                <span className="font-serif font-bold text-base sm:text-lg text-primary">${product.price}</span>
                                <Button size="sm" className="px-2 sm:px-3 h-8 sm:h-9">
                                    <ShoppingCart size={16} />
                                </Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    )
}
