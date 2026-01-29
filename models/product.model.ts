export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  rating: number;
}

export const categories = [
  { id: 1, name: "Furniture", icon: "🪑" },
  { id: 2, name: "Decor", icon: "🖼️" },
  { id: 3, name: "Lighting", icon: "💡" },
  { id: 4, name: "Textiles", icon: "🧵" },
  { id: 5, name: "Accessories", icon: "✨" },
];

export const products: Product[] = [
 {
    id: 1,
    name: 'Modern Lounge Chair',
    category: 'Furniture',
    price: 349,
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&h=500&fit=crop',
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Ceramic Vase Set',
    category: 'Decor',
    price: 89,
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Pendant Light',
    category: 'Lighting',
    price: 129,
    image: 'https://images.unsplash.com/photo-1565636192335-14c46fa1120d?w=500&h=500&fit=crop',
    rating: 4.7,
  },
  {
    id: 4,
    name: 'Premium Throw Pillow',
    category: 'Textiles',
    price: 59,
    image: 'https://images.unsplash.com/photo-1599122045067-9d7cb4c89aa0?w=500&h=500&fit=crop',
    rating: 4.6,
  },
  {
    id: 5,
    name: 'Brass Frame Mirror',
    category: 'Accessories',
    price: 199,
    image: 'https://images.unsplash.com/photo-1533416481652-f2299c8477db?w=500&h=500&fit=crop',
    rating: 4.9,
  },
 {
    id: 6,
    name: 'Modern Lounge Chair',
    category: 'Furniture',
    price: 349,
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&h=500&fit=crop',
    rating: 4.8,
  },
  {
    id: 7,
    name: 'Ceramic Vase Set',
    category: 'Decor',
    price: 89,
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop',
    rating: 4.9,
  },
  {
    id: 8,
    name: 'Pendant Light',
    category: 'Lighting',
    price: 129,
    image: 'https://images.unsplash.com/photo-1565636192335-14c46fa1120d?w=500&h=500&fit=crop',
    rating: 4.7,
  },
  {
    id: 9,
    name: 'Premium Throw Pillow',
    category: 'Textiles',
    price: 59,
    image: 'https://images.unsplash.com/photo-1599122045067-9d7cb4c89aa0?w=500&h=500&fit=crop',
    rating: 4.6,
  },
  {
    id: 10,
    name: 'Brass Frame Mirror',
    category: 'Accessories',
    price: 199,
    image: 'https://images.unsplash.com/photo-1533416481652-f2299c8477db?w=500&h=500&fit=crop',
    rating: 4.9,
  },
];
