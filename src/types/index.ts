export interface Product {
    id: number
    name: string
    description: string
    price: number
    image: string
    category: string
    rating: number
    reviewCount: number
  }
  
  export interface FilterState {
    categories: string[]
    priceRange: [number, number]
    rating: number
  }
  
  export interface SortOption {
    label: string
    value: 'recommended' | 'newest' | 'price-low-high' | 'price-high-low' | 'rating'
  }