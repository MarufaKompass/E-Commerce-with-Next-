"use client";

import { useState } from "react";
import { categories, products, Product } from "@/models/product.model";

export function useCategoryViewModel() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const toggleFavorite = (id: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const displayedProducts: Product[] = selectedCategory
    ? products.filter(
        (p) =>
          p.category ===
          categories.find((c) => c.id === selectedCategory)?.name
      )
    : products;

  return {
    categories,
    selectedCategory,
    setSelectedCategory,
    displayedProducts,
    favorites,
    toggleFavorite,
  };
}
